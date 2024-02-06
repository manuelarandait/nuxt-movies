<script setup>
import { useDisplay } from 'vuetify'
const { name } = useDisplay()
const slides = getSlides(name.value)
</script>

<template>
  <client-only>
    <slot name="title" />
    <Swiper
      :height="400"
      :slides-per-view="slides"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <slot name="swiperSlide" />
    </Swiper>
  </client-only>
</template>