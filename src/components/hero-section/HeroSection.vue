<template>
  <section id="home" class="hero-section h-screen flex items-center justify-center px-4">
    <div class="absolute inset-0 -z-10">
      <img :src="image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-[#F6F7F4]"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-16">
      <h1 class="text-4xl sm:text-6xl font-serif leading-tight text-[#1E2B26]">
        {{ title }}
      </h1>
      <p class="mt-4 text-lg text-[#3E5A4F]">{{ subtitle }}</p>
      <p class="mt-2 text-[#50695E]">{{ description }}</p>

      <div class="mt-8 flex  gap-4">

        <UButton title="How it works" href="#about"/>
        <UButton title="Our Products" href="#shop" :outlined="true"/>
        <UButton title="Events" href="#events" :outlined="true"/>
      </div>
    </div>
  </section>
</template>

<script setup>
import UButton from '../utils/UButton.vue';

defineProps({
  image: String,
  title: String,
  subtitle: String,
  description: String
})
</script>
