<script setup>

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const tab = ref(null)
const id = computed(() => props.id)
const movie = await getMovie(id.value)

function getCountAverage(average) {
  return (average * 5) / 10
}
</script>

<template>
  <v-responsive>
    <v-parallax
      :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
      gradient="to left, rgba(100,115,201,.33), rgba(0,0,0,1)"
      height="600"
    >
      <div
        class="d-flex flex-column fill-height justify-center text-white pa-6 offset-1"
        style="max-width: 70%;"
      >
        <h2 class="text-h4 font-weight-thin mb-4">
          {{ movie.title }}
        </h2>

        <v-rating
          hover
          readonly
          half-increments
          :length="5"
          size="small"
          :model-value="getCountAverage(movie.vote_average)"
          density="comfortable"
          class="my-2"
        />
        <div class="text-grey mb-2">
          {{ parseFloat(movie.vote_average).toFixed(2) }} |  Reviews( {{ movie.vote_count }} )
        </div>
        <div class="text-grey mb-2">
          {{ movie.release_date }}
        </div>
        <h4 :class="mobile ? 'text-body-1' :'text-caption'">
          {{ movie.overview }}
        </h4>
      </div>
    </v-parallax>
    <v-card>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="primary"
        stacked
      >
        <v-tab :value="1">
          Detalles
        </v-tab>
        <v-tab :value="2">
          Imágenes
        </v-tab>
        <v-tab :value="3">
          Videos
        </v-tab>
      </v-tabs>
      <v-card-text>
        <v-window
          v-model="tab"
          style="min-height: 100vh;"
          :touch="false"
        >
          <v-window-item
            :value="1"
          >
            <movie-details :item="movie" />
          </v-window-item>
          <v-window-item
            :value="2"
          >
            <movie-media-photo :item="movie" />
          </v-window-item>
          <v-window-item
            :value="3"
          >
            <movie-videos :item="movie" />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-responsive>
</template>