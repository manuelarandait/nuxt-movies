<script setup>
const trending = await getTrendingMovie()
</script>

<template>
  <v-responsive>
    <v-parallax
      :src="`https://image.tmdb.org/t/p/original/${trending.results[0].backdrop_path}`"
      gradient="to left, rgba(100,115,201,.33), rgba(0,0,0,1)"
      height="600"
    >
      <div
        class="d-flex flex-column fill-height justify-center text-white pa-6"
        align-self="left"
        style="max-width: 70%;"
      >
        <h2 class="text-h4 font-weight-thin mb-4">
          {{ trending.results[0].title }}
        </h2>
        <v-rating
          hover
          readonly
          :length="5"
          :size="20"
          :model-value="3"
          active-color="primary"
          class="my-6"
        />
        <h4 class="text-caption">
          {{ trending.results[0].overview }}
        </h4>
      </div>
    </v-parallax>
  </v-responsive>
</template>
