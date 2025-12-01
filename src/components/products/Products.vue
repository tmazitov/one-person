<template>
  <section id="shop" class="py-16 sm:py-32 bg-[#F8FAF8]">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">Our products</h2>
      <p class="mt-4 text-[#50695E]">
        Explore products that our customers truly enjoy.
      </p>

      <Tabs v-model="selectedSection" :tabs="items" >

        <!-- Tea -->

        <UCarousel :items="teas" :interval="4000" v-if="selectedSection == 'tea'">
          <template #default="{ item }">
            <ProductCard v-bind="item" />
          </template>
        </UCarousel>

        <!-- Tea Sets -->

        <UCarousel :items="teaSets" :interval="4000" v-if="selectedSection == 'set'">
          <template #default="{ item }">
            <ProductCard v-bind="item" />
          </template>
        </UCarousel>
      </Tabs>
    </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import Tabs from '../utils/Tabs.vue';
import { computed, ref } from 'vue';
import UCarousel from '../utils/UCarousel.vue';


const selectedSection = ref("tea")
const selectedCollection = computed(() => {
  if (selectedSection.value == "tea")
    return props.teas
  else if (selectedSection.value == "set")
    return props.teaSets
  return undefined
})
const items = [
  {label: "Tea", value: "tea"},
  {label: "Tea Set", value: "set"},
]

const props = defineProps({
  teaSets: Array,
  teas: Array,
})
</script>
