<script setup>
const props = defineProps({
  mediaType: {
    type: String,
    default: 'movie'
  }
})

const trending = await getItemCollection(props.mediaType, 'popular')
const topMovie = await getItem( 'movie', Number(trending.results[0].id))
console.log(topMovie)

function getCountAverage(average) {
  return (average * 5) / 10
}

import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

import { useTheme } from 'vuetify'
const theme = useTheme()

</script>

<template>
  <v-parallax
    :src="`https://image.tmdb.org/t/p/original/${trending.results[0].backdrop_path}`"
    :gradient="theme.global.current.value.dark ? 'to left, rgba(100,115,201,.33), rgba(0,0,0,1)' : 'to left, rgba(100,115,201,.33), rgba(255,255,255,1)'"
    height="600"
    :style="'aspect-ratio: 25/9; width: 100%;'"
  >
    <div
      class="d-flex flex-column fill-height justify-center pa-6 offset-1 fade-in-text"
      style="max-width: 70%;"
    >
      <h2
        class="text-h4 font-weight-thin mb-4"
      >
        {{ props.mediaType === 'movie' ? trending.results[0].title : trending.results[0].name }}
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
        {{ parseFloat(trending.results[0].vote_average).toFixed(2) }} |  Reviews({{ trending.results[0].vote_count }})
      </div>
      <div
        v-if="props.mediaType === 'movie'"
        class="text-grey mb-2"
      >
        {{ trending.results[0].release_date }}
      </div>
      <h4 :class="!mobile ? 'text-body-1' :'text-caption'">
        {{ trending.results[0].overview }}
      </h4>
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
                :src="`https://www.youtube.com/embed/${topMovie.videos?.results[0]?.key}?rel=0&showinfo=0&autoplay=0`"
                width="100%"
                height="600"
              />
            </v-card-text>
          </v-card>
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
