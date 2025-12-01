<template>
  <section id="coliving" class="py-16 sm:py-32 ">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 sm:gap-10 gap-4 items-center px-4">

      <div class="smoke-wrap">
        <img :src="image" alt="brand-story"/>
      </div>

      <div>
        <h2 class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">
          Coliving Where Community Feels Like Home
        </h2>

        <div class="mt-4 text-[#3E5A4F] text-lg" v-for="(item, i) in paragraphs" :key="i">
            <i>{{ item }}</i>
        </div>

        <div class="buttons mt-4">
          <UButton title="Read More"/>
      
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import UButton from '../utils/UButton.vue';

defineProps({
  image: String,
  paragraphs: Array
})
</script>

<style scoped>
.smoke-wrap {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.smoke-wrap > img {
  height: 540px;
  width: 100%;
  object-fit: cover;
}

</style>