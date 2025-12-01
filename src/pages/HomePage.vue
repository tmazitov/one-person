<template>
  <Header />

  <main id="main">
    <HeroSection
      :image="hero.image"
      :title="hero.title"
      :subtitle="hero.subtitle"
      :description="hero.description"
    />

    <BrandStory :image="storyImage" :paragraphs="storyParagraphs" />

    <Products :teaSets="teaSets" :teas="teas"/>

    <ColivingSection 
        image="@/assets/coliving.png" 
        :paragraphs="[
            'Rent a private room in a warm, friendly villa community and enjoy a calm environment with shared tea ceremonies that bring people together..'
        ]"
    />

    <EventsSection :events="events" />

    <CTA/>
  </main>

  <Footer/>
</template>

<script setup>
import Header from '../components/Header.vue'
import CTA from '../components/CTA.vue'
import Footer from '../components/Footer.vue'
import HeroSection from '../components/hero-section/HeroSection.vue'
import BrandStory from '../components/BrandStory.vue'
import Products from '../components/products/Products.vue'
import EventsSection from '../components/EventsSection.vue'
import ColivingSection from '../components/coliving/ColivingSection.vue'

const hero = {
  image: '@/assets/hero.png',
  title: 'Serve Your Own Space.',
  subtitle: 'Yi Ren (一人).',
  description: 'A place for digital nomads and anyone who enjoys a calm lifestyle and the taste of fine tea.'
}

const storyImage = '@/assets/about.png'
const storyParagraphs = [
  'Our goal is to offer people a welcoming place to unwind, enjoy fine tea, and soak in a calm, comforting atmosphere.'
]

// заглушки
const teaSets = [
    {
        image: "@/assets/tea-set.png",
        title: "Gongfu Starter Set",
        description: "A beginner-friendly gongfu cha set including a gaiwan, fairness cup, and two tasting cups.",
        price: "129 AED"
    },
    {
        image: "@/assets/tea-set.png",
        title: "Yixing Clay Teapot Set",
        description: "Handmade Yixing clay teapot with matching cups designed for rich, aromatic brews.",
        price: "259 AED"
    },
    {
        image: "@/assets/tea-set.png",
        title: "Glass Brewing Set",
        description: "Heat-resistant glass teapot with stainless steel filter. Perfect for everyday brewing.",
        price: "89 AED"
    }
];
const teas = [
    {
        image: "@/assets/tea-6.png",
        title: "Long Jing (Dragon Well)",
        description: "Premium green tea with a smooth, nutty flavor and a refreshing aroma.",
        price: "45 AED"
    },
    {
        image: "@/assets/tea-4.png",
        title: "Da Hong Pao",
        description: "Famous Wuyi rock oolong with deep mineral notes and a roasted finish.",
        price: "68 AED"
    },
    {
        image: "@/assets/tea-3.png",
        title: "Shu Pu-erh Mini Cakes",
        description: "Fermented dark tea pressed into small convenient servings for rich earthy brews.",
        price: "52 AED"
    },
    {
        image: "@/assets/tea-2.png",
        title: "Shau Pu-erh Mini Cakes",
        description: "Fermented dark tea pressed into small convenient servings for rich earthy brews.",
        price: "52 AED"
    },
    {
        image: "@/assets/tea-5.png",
        title: "Long Jing (Dragon Well)",
        description: "Premium green tea with a smooth, nutty flavor and a refreshing aroma.",
        price: "45 AED"
    },
    {
        image: "@/assets/tea.jpeg",
        title: "Shu Pu-erh Mini Cakes",
        description: "Fermented dark tea pressed into small convenient servings for rich earthy brews.",
        price: "52 AED"
    },
    {
        image: "@/assets/tea-4.png",
        title: "Da Hong Pao",
        description: "Famous Wuyi rock oolong with deep mineral notes and a roasted finish.",
        price: "68 AED"
    },
    {
        image: "@/assets/tea-3.png",
        title: "Shu Pu-erh Mini Cakes",
        description: "Fermented dark tea pressed into small convenient servings for rich earthy brews.",
        price: "52 AED"
    },
    {
        image: "@/assets/tea-2.png",
        title: "Shau Pu-erh Mini Cakes",
        description: "Fermented dark tea pressed into small convenient servings for rich earthy brews.",
        price: "52 AED"
    },
    
];
const events = [
    {
        image: "@/assets/morning-ceremony.png",
        title: "Gongfu Cha Workshop",
        description: "A 1-hour guided workshop introducing the basics of traditional gongfu tea brewing.",
        date: new Date("2025-02-14T18:00:00")
    },
    {
        image: "@/assets/morning-ceremony.png",
        title: "Tea Tasting: Oolong Edition",
        description: "Explore four types of high-mountain oolongs and learn how to brew each properly.",
        date: new Date("2025-03-01T17:00:00")
    },
    {
        image: "@/assets/morning-ceremony.png",
        title: "Matcha Ceremony Intro",
        description: "A calm and meditative introduction to Japanese matcha preparation and etiquette.",
        date: new Date("2025-03-10T16:00:00")
    }
];
</script>
