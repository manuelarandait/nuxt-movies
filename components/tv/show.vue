<script setup>

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const tab = ref(null)
const id = computed(() => props.id)
const tv = await getTv(id.value)

function getCountAverage(average) {
  return (average * 5) / 10
}
</script>

<template>
  <v-responsive>
    <v-parallax
      :src="`https://image.tmdb.org/t/p/original/${tv.backdrop_path}`"
      gradient="to left, rgba(100,115,201,.33), rgba(0,0,0,1)"
      height="600"
    >
      <div
        class="d-flex flex-column fill-height justify-center text-white pa-6 offset-1"
        style="max-width: 70%;"
      >
        <h2 class="text-h4 font-weight-thin mb-4">
          {{ tv.name }}
        </h2>

        <v-rating
          hover
          readonly
          half-increments
          :length="5"
          size="small"
          :model-value="getCountAverage(tv.vote_average)"
          density="comfortable"
          class="my-2"
        />
        <div class="text-grey mb-2">
          {{ parseFloat(tv.vote_average).toFixed(2) }} |  Reviews( {{ tv.vote_count }} )
        </div>
        <div class="text-grey mb-2">
          {{ tv.release_date }}
        </div>
        <h4 class="text-caption">
          {{ tv.overview }}
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
      <v-window
        v-model="tab"
        style="height: 100vh;"
      >
        <v-window-item
          :key="1"
          :value="1"
        >
          <tv-details :item="tv" />
        </v-window-item>
        <v-window-item
          :key="2"
          :value="2"
        >
          <tv-media-photo :item="tv" />
        </v-window-item>
        <v-window-item
          :key="3"
          :value="3"
        >
          <tv-videos :item="tv" />
        </v-window-item>
      </v-window>
    </v-card>
  </v-responsive>
</template>