<template>
  <button
    :class="`${styles} relative rounded-full px-3.5 py-2 font-medium select-none transition-all duration-300 ease-out cursor-pointer`"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @mouseleave="isPressed = false"
  >
    <a v-if="href" :href="href" :class="isPressed ? 'scale-95' : 'scale-100'">{{ title }}</a>
    <span v-else :class="isPressed ? 'scale-95' : 'scale-100'">{{ title }}</span>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  href: String,
  outlined: Boolean,
  reverse: Boolean,
})

const styles = computed(() => {
    if (props.outlined) {
        return 'bg-[#97A5A0]/10 border border-[#2F4A40]/30 text-[#2F4A40] backdrop-blur-md hover:bg-[#97A5A0]/30 hover:border-[#2F4A40]/50 hover:text-[#2F4A40]'
    } else if (props.reverse) {
        return 'bg-[#e5e7eb] text-[#2f4a40] border border-transparent hover:bg-[#f8faf8] active:scale-95'
    }
    return 'bg-[#2F4A40] text-[#e5e7eb] border border-transparent hover:bg-[#3E5A4F] active:scale-95'
})

const isPressed = ref(false)
</script>
