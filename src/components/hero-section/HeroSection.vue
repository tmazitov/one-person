<template>
  <section id="home" class="hero-section h-screen flex items-center justify-center px-4">
    <div class="absolute inset-0 -z-10">
      <img :src="image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-[#F6F7F4]">
          
        <div class="fog">
          <img :src="fog1Img" style="--i: 1;" />
          <img :src="fog2Img" style="--i: 2;" />
          <img :src="fog3Img" style="--i: 3;" />
          <img :src="fog4Img" style="--i: 4;" />
          <img :src="fog5Img" style="--i: 5;" />
          <img :src="fog1Img" style="--i: 10;" />
          <img :src="fog2Img" style="--i: 9;" />
          <img :src="fog3Img" style="--i: 8;" />
          <img :src="fog4Img" style="--i: 7;" />
          <img :src="fog5Img" style="--i: 6;" />
        </div>
      
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-16">
      <h1 class="text-4xl sm:text-6xl font-serif leading-tight text-[#1E2B26]">
        {{ title }}
      </h1>
      <p class="mt-4 text-lg text-[rgb(38, 45, 42)]">{{ subtitle }}</p>
      <p class="mt-2 text-[rgb(38, 45, 42)]">{{ description }}</p>

      <div class="mt-8 flex  gap-4 flex-wrap">

        <UButton title="About us" href="#about"/>
        <UButton title="Our Products" href="#shop" :outlined="true"/>
        <UButton title="Book a Ceremony" :outlined="true"/>
        <UButton title="Events" href="#events" :outlined="true"/>
      </div>
    </div>
  </section>
</template>

<script setup>
import UButton from '../utils/UButton.vue';
import fog1Img from '@/assets/fog1.png';
import fog2Img from '@/assets/fog2.png';
import fog3Img from '@/assets/fog3.png';
import fog4Img from '@/assets/fog4.png';
import fog5Img from '@/assets/fog5.png';

defineProps({
  image: String,
  title: String,
  subtitle: String,
  description: String
})
</script>

<style lang="css">
.fog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
.fog img {
  position: absolute;
  bottom: 0;
  max-width: 100%;
  animation: fog_effect calc(3s * var(--i)) ease-in infinite;
}
@keyframes fog_effect {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  25%,
  75% {
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
</style>
