<template>
<transition name="header">

    <header v-if="!isHidden"
        :class="[
        'fixed top-0 left-0 w-full z-50 bg-[#F5F5F0]/80 backdrop-blur-xl transform-gpu transition-transform mease-in-out',
        ]"
        ref="hdr"
    >
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16">
            <a href="#" class="flex items-center gap-3">
            <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8DF] text-[#2B4238] font-semibold">一</span>
            <span class="text-lg font-semibold tracking-wide">
                Yi Ren <span class="text-[#6A7F75]">(一人)</span>
            </span>
            </a>

            <nav aria-label="Main" class="hidden md:flex items-center gap-6">
                <a href="#about" class="text-[#3E5A4F] hover:text-[#2B4238]">About Us</a>
                <a href="#shop" class="text-[#3E5A4F] hover:text-[#2B4238]">Out Products</a>
                <a href="#coliving" class="text-[#3E5A4F] hover:text-[#2B4238]">Coliving</a>
                <a href="#events" class="text-[#3E5A4F] hover:text-[#2B4238]">Events</a>
            </nav>


            <span class="md:hidden">
                <button
                    @click="isShowMenuToggle"
                    class="flex flex-col justify-between w-8 h-full focus:outline-none"
                >
                    <img src="/assets/menu-2.svg" />
                </button>
            </span>

            <div class="cart-section hidden md:flex">
                <UButton title="Book a Ceremony"/>
            </div>
        </div>

        <UMenu v-model="isShowMenu">
            <div class="p-4 flex flex-col gap-4">

                <a href="#" class="text-[#3E5A4F] hover:text-[#2B4238]">Home</a>
                <a href="#about" class="text-[#3E5A4F] hover:text-[#2B4238]">About Us</a>
                <a href="#shop" class="text-[#3E5A4F] hover:text-[#2B4238]">Out Products</a>
                <a href="#coliving" class="text-[#3E5A4F] hover:text-[#2B4238]">Coliving</a>

                <a href="#events" class="text-[#3E5A4F] hover:text-[#2B4238]">Events</a>
                
                <hr class="my-2">

                <div class="flex gap-3">
                    <UButton title="Book a Ceremony" classNames="flex-1"/>
                        <a href="#" class="h-12 w-12 rounded-full bg-[#F2F5F2] text-[#2F4A40] flex items-center justify-center text-xs font-medium hover:bg-[#E6EFE9] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]" aria-label="Instagram">
                            <img src="/assets/brand-instagram.svg"/>
                        </a>
                        <a href="#" class="h-12 w-12 rounded-full bg-[#F2F5F2] text-[#2F4A40] flex items-center justify-center text-xs font-medium hover:bg-[#E6EFE9] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]" aria-label="TikTok">
                            <img src="/assets/brand-tiktok.svg"/>
                        </a>

                </div>
            </div>

        </UMenu>
        </div>
    </header>

</transition>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import UButton from './utils/UButton.vue'
import UMenu from './utils/UMenu.vue'

const isHidden = ref(true)
const isShowMenu = ref(false)
const isShowMenuToggle = () => isShowMenu.value = !isShowMenu.value

// Скрываем если вверху страницы (scrollY === 0), показываем если > 0
const onScroll = () => {
  isHidden.value = window.scrollY === 0
}

onMounted(() => {
  // Подстраховка: включаем слушатель и сразу проверяем состояние
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
/* совет: ускоряем рендер transform'а браузером */
header {
  will-change: transform;
  animation-duration: 1200ms;
}

.header-enter-active {
    animation: header-show .5s ease-out;
}
.header-leave-active {
    animation: header-show .5s ease-out reverse;
}

@keyframes header-show {
    from {
        transform: translateY(-60px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
