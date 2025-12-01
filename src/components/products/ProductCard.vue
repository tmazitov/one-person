<template>
  <article
    class="group bg-white border border-[#E6E9E4] p-4 flex flex-col
           cursor-pointer transform transition-all duration-300 ease-out
           hover:-translate-y-2 hover:shadow-lg hover:border-gray-300"
  >
    <div>
      <img
        :src="image"
        alt="Product Image"
        class="rounded-lg aspect-square w-full object-cover transition-transform duration-300 ease-out
               group-hover:scale-105"
      />
    </div>

    <div class="mt-4 flex-1">
      <h3 class="text-xl text-[#1E2B26] font-serif relative z-10">{{ title }}</h3>
      <p class="mt-2 text-[#3E5A4F] relative z-10">{{ description }}</p>
    </div>

    <div class="mt-4 flex items-center justify-between">
      <span class="text-[#2F4A40] font-semibold">{{ price }}</span>
      <UButton title="Add to cart" />
    </div>
  </article>
</template>

<script setup>
import UButton from '../utils/UButton.vue';

defineProps({
  title: String,
  image: String,
  price: String,
  description: String
})
</script>
