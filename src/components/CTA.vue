<template>
    <section id="cta" aria-labelledby="cta-title" class="py-16 sm:py-32 bg-[#2F4A40] text-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-10 items-center">
            <div class="md:col-span-2">
                <h2 id="cta-title" class="text-3xl sm:text-4xl font-serif">Don't know how to start?</h2>
                <p class="mt-3 text-white/90 text-lg">
                    Book a private tea ceremony for you and your friends to explore the beauty of tea. 
                </p>

                <!-- <p class="mt-3 text-white/90">Choose a set that fits your hands. Pick one tea for the week. Show up for yourself.</p> -->
            <div class="flex gap-3 mt-8">
                <UButton title="Book a Ceremony" :reverse="true"/>
                <UButton title="Talk to Us"/>
            </div>
        </div>
    </div>
    </section>
</template>

<script setup> 
import UButton from './utils/UButton.vue';

</script>