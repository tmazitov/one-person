<template>
  <!-- Slide-down Menu -->
  <transition name="slide-down">
    <div
      v-if="isOpen"
      @click="onClick"
      class="overflow-hidden "
    >
      <slot>
        <!-- Default items if slot not provided -->
        <a  href="#" class="block px-4 py-2 hover:bg-gray-100">Menu Item 1</a>
        <a  href="#" class="block px-4 py-2 hover:bg-gray-100">Menu Item 2</a>
        <a  href="#" class="block px-4 py-2 hover:bg-gray-100">Menu Item 3</a>
      </slot>
    </div>
  </transition>
</template>

<script setup>
import { ref, defineModel } from 'vue';

const isOpen = defineModel({type:Boolean})
const toggleMenu = () => isOpen.value = !isOpen.value 
const onClick = () => isOpen.value = false
</script>

<style scoped>
/* Slide-down by animating max-height */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  /* padding-top: 0; */
  /* padding-bottom: 0; */
}

.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 500px; /* Adjust if menu is taller */
  opacity: 1;
  /* padding-top: 0.5rem; Keep padding for smooth expansion */
  /* padding-bottom: 0.5rem; */
  /* absolute left-0 right-0 top-16 z-50 bg-[#F5F5F0]/80 isolate backdrop-blur-xl transform-gpu transition-transform mease-in-out */
}
</style>
