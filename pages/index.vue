<script setup>

const movies = await getPopularMovies()
const tvs = await getPopularTV()

</script>

<template>
  <div>
    <home-banner />
    <div class="pa-2">
      <p class="text-h5">
        Películas populares
      </p>
      <v-sheet class="mx-auto">
        <v-slide-group>
          <v-slide-group-item
            v-for="movie in movies.results"
            :key="movie.id"
          >
            <NuxtLink
              :to="`/movie/${movie.id}`"
            >
              <v-card
                class="ma-1"
                height="auto"
                width="250"
              >
                <v-img
                  cover
                  :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                />
              </v-card>
            </NuxtLink>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
      <p class="text-h5">
        Series populares
      </p>
      <v-sheet class="mx-auto">
        <v-slide-group>
          <v-slide-group-item
            v-for="tv in tvs.results"
            :key="tv.id"
          >
            <NuxtLink :to="`/tv/${tv.id}`">
              <v-card
                class="ma-1"
                height="auto"
                width="250"
              >
                <v-img
                  cover
                  :src="`https://image.tmdb.org/t/p/w500/${tv.poster_path}`"
                />
              </v-card>
            </NuxtLink>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
    <main-footer />
  </div>
</template>
