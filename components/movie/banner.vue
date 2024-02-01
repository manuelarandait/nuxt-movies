<script setup>
const trending = await getTrendingMovies()

function getCountAverage(average) {
  return (average * 5) / 10
}

import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

</script>

<template>
  <v-responsive>
    <v-parallax
      :src="`https://image.tmdb.org/t/p/original/${trending.results[0].backdrop_path}`"
      gradient="to left, rgba(100,115,201,.33), rgba(0,0,0,1)"
      height="600"
    >
      <div
        class="d-flex flex-column fill-height justify-center text-white pa-6 offset-1 fade-in-text"
        style="max-width: 70%;"
      >
        <h2
          class="text-h4 font-weight-thin mb-4"
        >
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
        <h4 :class="mobile ? 'text-body-1' :'text-caption'">
          {{ trending.results[0].overview }}
        </h4>
        <v-dialog
          width="1080"
          height="auto"
          transition="dialog-bottom-transition"
        >
          <template #activator="{ props }">
            <v-btn
              class="text-none my-4 text-white"
              prepend-icon="mdi-play"
              v-bind="props"
              width="200"
              rounded="0"
              variant="flat"
            >
              Ver trailer
            </v-btn>
          </template>

          <template #default="{ isActive }">
            <v-card>
              <v-toolbar>
                <v-spacer />
                <v-btn
                  icon
                  dark
                  @click="isActive.value = false "
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <iframe
                  :src="`https://www.youtube.com/embed/${trending.results[0].key}?rel=0&showinfo=0&autoplay=0`"
                  width="100%"
                  height="600"
                />
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </v-parallax>
  </v-responsive>
</template>
<style>
.v-image__image--contain {
  background-position: right center !important;
}
.fade-in-text {
  animation: fadeInTop 1s;
}
@keyframes fadeInTop {
  0% { opacity: 0; transform: translateY(-50px)}
  100% { opacity: 1; }
}
</style>
