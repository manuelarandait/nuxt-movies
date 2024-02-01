<script setup>
const tvs = await getPopularTV()

function getCountAverage(average) {
  return (average * 5) / 10
}
</script>
<template>
  <div class="pa-2">
    <p class="text-h5 my-4">
      Series populares
    </p>
    <v-slide-group>
      <v-slide-group-item
        v-for="tv in tvs.results"
        :key="tv.id"
      >
        <NuxtLink :to="`/tv/${tv.id}`">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="ma-1 mb-2"
              :class="{ 'on-hover': isHovering }"
              height="auto"
              width="250"
              v-bind="props"
              :elevation="isHovering ? 20 : 0"
            >
              <v-card
                class="ma-1"
                height="auto"
                width="250"
              >
                <v-img
                  cover
                  width="250"
                  height="400"
                  :src="`https://image.tmdb.org/t/p/w500/${tv.poster_path}`"
                />
  
                <v-card-item>
                  <v-card-subtitle>
                    <span class="me-1">{{ tv.name }}</span>
                  </v-card-subtitle>
                </v-card-item>
                <v-card-text>
                  <v-row
                    align="center"
                    class="mx-0"
                  >
                    <v-rating
                      :model-value="getCountAverage(tv.vote_average)"
                      half-increments
                      color="amber"
                      density="compact"
                      readonly
                      size="small"
                    />
  
                    <div class="text-grey ms-4">
                      {{ parseFloat(tv.vote_average).toFixed(2) }} ({{ tv.vote_count }})
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-card>
          </v-hover>
        </NuxtLink>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>