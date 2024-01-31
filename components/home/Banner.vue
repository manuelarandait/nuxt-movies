<script setup>
const trending = await getTrendingMovie()

function getCountAverage(average) {
  return (average * 5) / 10
}
</script>

<template>
  <v-responsive>
    <v-parallax
      :src="`https://image.tmdb.org/t/p/original/${trending.results[0].backdrop_path}`"
      gradient="to left, rgba(100,115,201,.33), rgba(0,0,0,1)"
      height="600"
    >
      <div
        class="d-flex flex-column fill-height justify-center text-white pa-6 offset-1"
        align-self="left"
        style="max-width: 70%;"
      >
        <h2 class="text-h4 font-weight-thin mb-4">
          {{ trending.results[0].title }}
        </h2>

        <v-rating
          hover
          readonly
          half-increments
          :length="5"
          size="small"
          :model-value="getCountAverage(trending.results[0].vote_average)"
          density="comfortable"
          class="my-2"
        />
        <div class="text-grey mb-2">
          {{ parseFloat(trending.results[0].vote_average).toFixed(2) }} |  Reviews({{ trending.results[0].vote_count }}) | {{ trending.results[0].release_date }}
        </div>
        <h4 class="text-caption">
          {{ trending.results[0].overview }}
        </h4>
      </div>
    </v-parallax>
  </v-responsive>
</template>
<style>
.v-image__image--contain {
  background-position: right center !important;
}
</style>
