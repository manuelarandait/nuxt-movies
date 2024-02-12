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
      <v-row>
        <v-col
          v-for="movie in collection.results"
          :key="movie.id"
          cols="6"
          sm="2"
        >
          <NuxtLink
            :to="`/${movie.media_type}/${movie.id}`"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
                :elevation="isHovering ? 20 : 0"
              >
                <nuxt-img
                  :style="'width: 100%; height: 300px; background-color: black;'"
                  :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                />
                <v-card-item>
                  <v-card-subtitle>
                    <span class="me-1">{{ movie.media_type === 'movie' ? movie.title : movie.name }}</span>
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-col>
                      <NuxtRating
                        :read-only="true"
                        :rating-size="'20px'"
                        :rating-value="getCountAverage(movie.vote_average)"
                      />
                    </v-col>
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

