<script setup>

const movies = await getItemCollection('tv', 'top_rated')

import { useDisplay } from 'vuetify'
const { name } = useDisplay()
const slides = getSlides(name.value)
</script>

<template>
  <div class="pa-2">
    <p class="text-h5 my-4">
      Series mejor valoradas
    </p>
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
      <SwiperSlide
        v-for="(movie, idx) in movies.results"
        :key="idx"
      >
        <media-card
          v-if="movie"
          :item="movie"
          :media="'tv'"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style scoped>

.v-card {
  transition: opacity .3s ease-in-out;
}

.v-card:hover {
  opacity: 0.5;
}

a:link, a:visited, a:active {
  text-decoration:none;
}

</style>
