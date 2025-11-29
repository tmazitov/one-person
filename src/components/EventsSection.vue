<template>
  <section id="events" class="py-16 sm:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-serif text-[#1E2B26]">Upcoming Events</h2>

      <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard v-for="(e, i) in events" :key="i" v-bind="e" />
      </div>
    </div>
  </section>
</template>

<script setup>
import EventCard from './EventCard.vue'

defineProps({
  events: Array
})
</script>
