<script setup>
const movies = await getPopularMovies()

function getCountAverage(average) {
  return (average * 5) / 10
}
</script>

<template>
  <div class="pa-2">
    <p class="text-h5 my-4">
      Películas populares
    </p>
    <v-slide-group>
      <v-slide-group-item
        v-for="movie in movies.results"
        :key="movie.id"
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
                  <span class="me-1">{{ movie.title }}</span>
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
      </v-slide-group-item>
    </v-slide-group>
  </div>
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
