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
        :image="colivingImg" 
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
import colivingImg from '@/assets/coliving.png'
import Header from '../components/Header.vue'
import CTA from '../components/CTA.vue'
import Footer from '../components/Footer.vue'
import HeroSection from '../components/hero-section/HeroSection.vue'
import BrandStory from '../components/BrandStory.vue'
import Products from '../components/products/Products.vue'
import EventsSection from '../components/EventsSection.vue'
import ColivingSection from '../components/coliving/ColivingSection.vue'
import heroImg from '@/assets/hero-2.png'
import aboutImg from '@/assets/about.png'
import teaSetImg from "@/assets/tea-set.png"
import teaImg from "@/assets/tea.png"
import tea2Img from "@/assets/tea-2.png"
import tea3Img from "@/assets/tea-3.png"
import tea4Img from "@/assets/tea-4.png"
import tea5Img from "@/assets/tea-5.png"
import tea6Img from "@/assets/tea-6.png"
import tea7Img from "@/assets/tea-7.png"
import teapot2Img from "@/assets/teapot-2.png"

const hero = {
  image: heroImg,
  title: 'Serve Your Own Space.',
  subtitle: 'Yi Ren (一人).',
  description: 'A place for digital nomads and anyone who enjoys a calm lifestyle and the taste of fine tea.'
}

const storyImage = teapot2Img
const storyParagraphs = [
  'Our goal is to offer people a welcoming place to unwind, enjoy fine tea, and soak in a calm, comforting atmosphere.'
]

// заглушки
const teaSets = [
    {
        image: teaSetImg,
        title: "Gongfu Starter Set",
        description: "A beginner-friendly gongfu cha set including a gaiwan, fairness cup, and two tasting cups.",
        price: "129 AED"
    },
    {
        image: teaSetImg,
        title: "Yixing Clay Teapot Set",
        description: "Handmade Yixing clay teapot with matching cups designed for rich, aromatic brews.",
        price: "259 AED"
    },
    {
        image: teaSetImg,
        title: "Glass Brewing Set",
        description: "Heat-resistant glass teapot with stainless steel filter. Perfect for everyday brewing.",
        price: "89 AED"
    }
];
const teas = [
    {
        image: tea6Img,
        title: "Long Jing (Dragon Well)",
        description: "Premium green tea with a smooth, nutty flavor and a refreshing aroma.",
        price: "45 AED"
    },
    {
        image: tea4Img,
        title: "Da Hong Pao",
        description: "Famous Wuyi rock oolong with deep mineral notes and a roasted finish.",
        price: "68 AED"
    },
    {
        image: tea3Img,
        title: "Shu Pu-erh Mini Cakes",
        description: "Fermented dark tea pressed into small convenient servings for rich earthy brews.",
        price: "52 AED"
    },
    {
        image: tea2Img,
        title: "Shau Pu-erh Mini Cakes",
        description: "Fermented dark tea pressed into small convenient servings for rich earthy brews.",
        price: "52 AED"
    },
    {
        image: tea5Img,
        title: "Long Jing (Dragon Well)",
        description: "Premium green tea with a smooth, nutty flavor and a refreshing aroma.",
        price: "45 AED"
    },
    {
        image: tea7Img,
        title: "Shu Pu-erh Mini Cakes",
        description: "Fermented dark tea pressed into small convenient servings for rich earthy brews.",
        price: "52 AED"
    },
    {
        image: tea4Img,
        title: "Da Hong Pao",
        description: "Famous Wuyi rock oolong with deep mineral notes and a roasted finish.",
        price: "68 AED"
    },
    {
        image: tea3Img,
        title: "Shu Pu-erh Mini Cakes",
        description: "Fermented dark tea pressed into small convenient servings for rich earthy brews.",
        price: "52 AED"
    },
    {
        image: tea2Img,
        title: "Shau Pu-erh Mini Cakes",
        description: "Fermented dark tea pressed into small convenient servings for rich earthy brews.",
        price: "52 AED"
    },
    
];

import event1Img from '@/assets/event-1.png'
import event2Img from '@/assets/event-2.png'
import event3Img from '@/assets/event-3.png'

const events = [
    {
        image: event1Img,
        title: "Gongfu Cha Workshop",
        description: "A 1-hour guided workshop introducing the basics of traditional gongfu tea brewing.",
        date: new Date("2025-02-14T18:00:00")
    },
    {
        image: event2Img,
        title: "Tea Tasting: Oolong Edition",
        description: "Explore four types of high-mountain oolongs and learn how to brew each properly.",
        date: new Date("2025-03-01T17:00:00")
    },
    {
        image: event3Img,
        title: "Matcha Ceremony Intro",
        description: "A calm and meditative introduction to Japanese matcha preparation and etiquette.",
        date: new Date("2025-03-10T16:00:00")
    }
];
</script>
