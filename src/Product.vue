<template>
<article class="group bg-white  border border-[#E6E9E4] p-4 flex flex-col">
    <div class="relative  overflow-hidden">
    <!-- 3/5 gen-image: Product main -->
        <img :src="image" alt="product-solo-gongfu" />
    </div>
    <div class="mt-4 flex-1">
        <h3 class="text-xl font-semibold text-[#1E2B26]">{{ title }}</h3>
        <p class="mt-2 text-[#3E5A4F]">{{ description }}</p>
    </div>
    <div class="mt-4 flex items-center justify-between">
        <span class="text-[#2F4A40] font-semibold">{{price}} AED</span>

        <button type="button" class="inline-flex items-center bg-[#2F4A40] text-white px-4 py-2 rounded-full hover:bg-[#2A4239] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9FC5B3]">
            Buy Now
        </button>
    </div>
</article>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})
</script>