<template>
  <article
    class="bg-white relative rounded-2xl border border-[#E6E9E4] p-4 flex flex-col overflow-hidden
           cursor-pointer transform transition-all duration-300 ease-out
           hover:-translate-y-2 hover:shadow-lg hover:border-gray-300"
  >
    <!-- Основное изображение -->
    <img :src="image" class="rounded-xl mb-4" />

    <!-- Текст + фоновое изображение -->
    <div class="relative flex-1">
      <!-- Фоновое изображение -->
      <img
        src="/assets/teapot-background.png"
        alt="Teapot"
        class="absolute right-0 h-full object-cover opacity-10 pointer-events-none "
      />

      <!-- Текст -->
      <h3 class="text-xl font-medium text-[#1E2B26] relative z-10 font-serif">{{ title }}</h3>
      <p class="text-[#3E5A4F] relative z-10 mt-2">{{ description }}</p>
      <p class="text-[#6A7F75] relative z-10 mt-4">{{ formatTime(date) }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  date: String
})

const formatTime = (date) => {
  if (!(date instanceof Date)) throw new Error('Expected a Date object');

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes} ${date.toLocaleDateString()}`;
}
</script>
