<template>
  <div
    class="w-full overflow-hidden"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <!-- Карусель -->
    <div
      class="flex transition-transform duration-500 ease-out"
      :style="{ width: containerWidth, transform: translateX }"
    >
      <div
        v-for="(item, i) in props.items"
        :key="i"
        class="flex-shrink-0 px-2 box-border min-w-0"
        :style="{ width: itemWidth }"
      >
        <slot :item="item" :index="i" />
      </div>
    </div>

    <!-- точки -->
    <div class="flex justify-center gap-2 mt-3">
      <div
        v-for="(p, i) in pageCount"
        :key="i"
        @click="index = i"
        class="w-3 h-3 rounded-full cursor-pointer transition-all"
        :class="index === i ? 'bg-black/80' : 'bg-black/20'"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  interval: { type: Number, default: 2500 }
})

const index = ref(0)
const isHover = ref(false)
const visible = ref(3) // будет меняться в updateVisible

// адаптивная логика
function updateVisible() {
  const w = window.innerWidth
  if (w >= 1024) visible.value = 3
  else if (w >= 640) visible.value = 2
  else visible.value = 1
}

// количество страниц (реактивно)
const pageCount = computed(() => {
  const v = visible.value || 1
  return Math.max(1, Math.ceil(props.items.length / v))
})

// ширина контейнера ленты, например "300%"
const containerWidth = computed(() => {
  return `${pageCount.value * 100}%`
})

// ширина одной карточки в процентах относительно ленты
// защита от деления на 0
const itemWidth = computed(() => {
  const v = visible.value || 1
  const pc = pageCount.value || 1
  // Формула: 100 / (visible * pageCount) процентов
  const val = 100 / (v * pc)
  return `${val}%`
})

// translateX для сдвига
const translateX = computed(() => {
  const pc = pageCount.value || 1
  // каждая страница — это 100/pc процентов от видимой области (внутри ленты)
  const step = 100 / pc
  return `translateX(-${index.value * step}%)`
})

// автоскролл
let timer = null
function startAuto() {
  stopAuto()
  timer = setInterval(() => {
    if (!isHover.value) {
      index.value = (index.value + 1) % pageCount.value
    }
  }, props.interval)
}
function stopAuto() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  updateVisible()
  window.addEventListener('resize', updateVisible)
  startAuto()
})

// очистка слушателей
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVisible)
  stopAuto()
})

// если pageCount изменился, убедимся что index в допустимом диапазоне
watch(pageCount, (newPc) => {
  if (index.value >= newPc) index.value = 0
})

// swipe logic
const startX = ref(0)
const currentX = ref(0)
const isSwiping = ref(false)

function onTouchStart(e) {
  stopAuto()
  startX.value = e.touches[0].clientX
  currentX.value = startX.value
  isSwiping.value = true
}

function onTouchMove(e) {
  if (!isSwiping.value) return
  currentX.value = e.touches[0].clientX
}

function onTouchEnd() {
  if (!isSwiping.value) return
  const diff = currentX.value - startX.value

  const threshold = 50 // минимальное расстояние свайпа

  if (diff > threshold) {
    // swipe right
    index.value = Math.max(0, index.value - 1)
  } else if (diff < -threshold) {
    // swipe left
    index.value = Math.min(pageCount.value - 1, index.value + 1)
  }

  isSwiping.value = false
  startAuto()
}


</script>
