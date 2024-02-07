<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    required: true
  }
})
const id = computed(() => props.id)
const movies = await getItemSimilar('tv', Number(id.value))
</script>

<template>
  <carousel-swiper>
    <template #title>
      <p class="text-h5 my-4">
        {{ props.title }}
      </p>
    </template>
    <template #swiperSlide>
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
    </template>
  </carousel-swiper>
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
