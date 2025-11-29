<template>
  <section id="about" class="py-16 sm:py-24">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
      <div>
        <h2 class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">
          Yi Ren (一人) — One Person
        </h2>

        <div class="mt-4 text-[#3E5A4F] text-lg" v-for="(item, i) in paragraphs" :key="i">
            <i >
            {{ item }}
            </i>
        </div>
      </div>

      <img :src="image" alt="brand-story" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  image: String,
  paragraphs: Array
})
</script>
