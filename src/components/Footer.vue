<template>
    <footer class="bg-white border-t border-[#E6E9E4]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div class="flex items-center gap-3">
              <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8DF] text-[#2B4238] font-semibold">一</span>
              <span class="text-lg font-semibold">Yi Ren <span class="text-[#6A7F75]">(一人)</span></span>
            </div>
            <p class="mt-2 text-sm text-[#6A7F75]">Serve Your Own Space.</p>
          </div>
          <nav aria-label="Footer" class="flex items-center gap-6">
            <a href="#home" class="text-sm text-[#3E5A4F] hover:text-[#2B4238] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">Home</a>
            <a href="#story" class="text-sm text-[#3E5A4F] hover:text-[#2B4238] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">About</a>
            <a href="#shop" class="text-sm text-[#3E5A4F] hover:text-[#2B4238] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">Shop</a>
            <a href="#coliving" class="text-sm text-[#3E5A4F] hover:text-[#2B4238] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">Coliving</a>
            <a href="#events" class="text-sm text-[#3E5A4F] hover:text-[#2B4238] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3] rounded px-1 py-1">Events</a>
          </nav>
          <div class="flex items-center gap-2" aria-label="Social media">
            <a href="#" class="h-9 w-9 rounded-full bg-[#F2F5F2] text-[#2F4A40] flex items-center justify-center text-xs font-medium hover:bg-[#E6EFE9] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]" aria-label="Instagram">
              <img :src="instagramIconImg"/>
            </a>
            <a href="#" class="h-9 w-9 rounded-full bg-[#F2F5F2] text-[#2F4A40] flex items-center justify-center text-xs font-medium hover:bg-[#E6EFE9] focus:outline-none focus:ring-2 focus:ring-[#9FC5B3]" aria-label="TikTok">
              <img :src="tiktokIconImg"/>
            </a>
          </div>
        </div>
        <p class="mt-6 text-xs text-[#8C7D73]">© {{ new Date().getFullYear() }} Yi Ren. All rights reserved.</p>
      </div>
    </footer>
</template>

<script setup>
import instagramIconImg from "@/assets/brand-instagram.svg"
import tiktokIconImg from "@/assets/brand-instagram.svg"
</script>