<script setup>

  const search = ref('')
  const collection = ref([])

  async function searchValues(query) {
    collection.value = await searchCollection(query)
  }

  watch(search, (query) => {
    searchValues(query)
  })

  function getCountAverage(average) {
    return (average * 5) / 10
  }

</script>

<template>
  <div>
    <v-text-field
      v-model="search"
      label="Busca cualquier título"
      prepend-inner-icon="mdi-magnify"
    />
    {{ collection.value }}
    <h2
      v-if="!collection.results"
      class="text-center mt-4 text-disabled"
    >
      Introduce algo para buscar...
    </h2>
    <v-container
      v-else
      fluid
    > 
      <v-row class="justify-center">
        <v-col
          v-for="movie in collection.results"
          :key="movie.id"
          cols="12"
          sm="2"
          class="mx-4"
        >
          <NuxtLink
            :to="`/movie/${movie.id}`"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="ma-1 mb-2"
                :class="{ 'on-hover': isHovering }"
                height="auto"
                width="250"

                v-bind="props"
                :elevation="isHovering ? 20 : 0"
              >
                <v-img
                  cover
                  width="250"
                  height="400"
                  :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                />
                <v-card-item>
                  <v-card-subtitle>
                    <span class="me-1">{{ movie.name }}</span>
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      :model-value="getCountAverage(movie.vote_average)"
                      half-increments
                      color="amber"
                      density="compact"
                      readonly
                      size="small"
                    />

                    <div class="text-grey ms-4">
                      {{ parseFloat(movie.vote_average).toFixed(2) }} ({{ movie.vote_count }})
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-hover>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
