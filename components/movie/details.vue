<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col 
        class="d-flex justify-center"
        cols="2"
        offset="2"
      >
        <v-img
          width="270"
          height="auto"
          :src="`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`"
          :style="{ 'border': '1px solid'}"
        />
      </v-col>
      <v-col cols="6">
        <div
          class="d-flex flex-column  text-white pa-6"
        >
          <h2 class="text-h4 font-weight-thin mb-4">
            Sinopsis
          </h2>
          <h4 class="text-caption">
            {{ props.item.overview }}
          </h4>
          <v-divider class="my-2" />
          <v-row class="my-4">
            <v-col cols="6">
              <v-row>
                <v-col cols="4">
                  <p> Release date:</p>
                </v-col>
                <v-col cols="8">
                  <p> {{ props.item.release_date }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <p> Director:</p>
                </v-col>
                <v-col cols="8">
                  <p> {{ props.item.release_date }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <p> Recaudación:</p>
                </v-col>
                <v-col cols="8">
                  <p> {{ parseFloat(props.item.revenue).toFixed() }} $</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <p> Estado:</p>
                </v-col>
                <v-col cols="8">
                  <p> {{ props.item.status }}</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row>
                <v-col cols="4">
                  <p> Duración:</p>
                </v-col>
                <v-col cols="8">
                  <p> {{ props.item.runtime }} min</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <p> Géneros:</p>
                </v-col>
                <v-col cols="8">
                  <v-chip
                    v-for="genre in props.item.genres"
                    :key="genre.id"
                    size="x-small"
                    label
                    class="mx-1"
                  >
                    <p> {{ genre.name }}</p>
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <p> Presupuesto:</p>
                </v-col>
                <v-col cols="8">
                  <p> {{ parseFloat(props.item.budget).toFixed() }} $</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <p> Idioma:</p>
                </v-col>
                <v-col cols="8">
                  <p> {{ props.item.original_language }}</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-divider class="my-4" />
    <p class="text-h5 my-4 mx-8">
      Cast
    </p>
    <v-sheet class="mx-auto">
      <v-slide-group>
        <v-slide-group-item
          v-for="cast in props.item.credits.cast"
          :key="cast.id"
        >
          <NuxtLink :to="`/person/${cast.id}`">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="ma-1 mb-2"
                :class="{ 'on-hover': isHovering }"
                height="auto"
                width="200"
                v-bind="props"
                :elevation="isHovering ? 20 : 0"
              >
                <v-img
                  cover
                  width="200"
                  height="auto"
                  :src="`https://image.tmdb.org/t/p/w500/${cast.profile_path}`"
                />

                <v-card-item>
                  <v-card-subtitle>
                    <span class="me-1">{{ cast.name }}</span>
                  </v-card-subtitle>
                </v-card-item>
                <div class="text-grey ms-4 mb-2">
                  <span class="me-1">{{ cast.character }}</span>
                </div>
              </v-card>
            </v-hover>
          </NuxtLink>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
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

