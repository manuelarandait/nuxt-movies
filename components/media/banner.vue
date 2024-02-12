<script setup>
const props = defineProps({
  mediaType: {
    type: String,
    default: 'movie'
  }
})

const trending = await getItemCollection(props.mediaType, 'popular')
const topMovie = await getItem( props.mediaType, Number(trending.results[0].id))

function getCountAverage(average) {
  return (average * 5) / 10
}

import { useDisplay, useTheme } from 'vuetify'
const { mobile } = useDisplay()
const theme = useTheme()

</script>

<template>
  <v-parallax
    :src="`https://image.tmdb.org/t/p/original/${trending.results[0].backdrop_path}`"
    :gradient="theme.global.current.value.dark ? 'to left, rgba(100,115,201,.33), 20%, rgba(0,0,0,1)' : 'to left, rgba(100,115,201,.33), rgba(255,255,255,1)'"
    height="600"
    :style="'aspect-ratio: 25/9; width: 100%;'"
    :alt="trending.results[0].title || trending.results[0].name"
  >
    <div
      class="d-flex flex-column fill-height justify-center pa-6 offset-1 fade-in-text"
      style="max-width: 70%;"
    >
      <h4
        class="text-h4 font-weight-thin mb-4"
      >
        {{ props.mediaType === 'movie' ? trending.results[0].title : trending.results[0].name }}
      </h4>
      <NuxtRating
        :read-only="true"
        :rating-size="'30px'"
        :rating-value="getCountAverage(trending.results[0].vote_average)"
        :style="'margin-bottom:10px;'"
      />
      
      <div class="text-grey mb-2">
        {{ parseFloat(trending.results[0].vote_average).toFixed(2) }} ·  Reviews ( {{ trending.results[0].vote_count }} )
      </div>
      <div
        v-if="props.mediaType === 'movie'"
        class="text-grey mb-2"
      >
        {{ trending.results[0].release_date }}
      </div>
      <p :class="!mobile.value ? 'text-body-1' :'text-caption'">
        {{ trending.results[0].overview }}
      </p>
      <v-dialog
        v-if="props.mediaType === 'movie'"
        width="1080"
        height="auto"
        transition="dialog-bottom-transition"
      >
        <template #activator="{ props }">
          <v-btn
            class="text-none my-4"
            prepend-icon="mdi-play"
            v-bind="props"
            width="200"
            rounded="0"
            variant="flat"
            title="Ver trailer"
          >
            Ver trailer
          </v-btn>
        </template>

        <template #default>
          <iframe
            :src="`https://www.youtube.com/embed/${topMovie.videos?.results[0]?.key}?rel=0&showinfo=0&autoplay=0`"
            width="100%"
            height="600"
          />
        </template>
      </v-dialog>
    </div>
  </v-parallax>
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
