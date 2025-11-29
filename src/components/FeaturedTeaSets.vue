<template>
  <section id="tea-sets" class="py-16 sm:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">Featured Tea Sets</h2>
      <p class="mt-2 text-[#50695E]">Compact, refined, made for solo tea time.</p>

      <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="(item, i) in items" :key="i" v-bind="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from './products/ProductCard.vue'

defineProps({
  items: Array
})
</script>
