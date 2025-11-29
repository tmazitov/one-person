<template>
  <div class="flex gap-4 border-b border-gray-200 mt-2">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      @click="model = tab.value"
      class="py-2 px-3 -mb-px border-b-2 transition-colors"
      :class="model === tab.value
        ? 'border-black text-black font-medium'
        : 'border-transparent text-gray-500 hover:text-black'"
    >
      {{ tab.label }}
    </button>
  </div>

  <!-- slot с содержимым -->
  <div class="mt-6">
    <slot :active="model"></slot>
  </div>
</template>

<script setup>
import { defineProps, defineModel } from 'vue'

// Модель — выбранная вкладка (v-model)
const model = defineModel({
  type: String,
  default: null
})

const props = defineProps({
  // Массив вида:
  // [{ label: 'Overview', value: 'overview' }, ...]
  tabs: {
    type: Array,
    required: true
  }
})
</script>


