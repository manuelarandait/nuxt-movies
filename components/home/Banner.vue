<script setup>
const trending = await getTrendingMovie()
</script>

<template>
  <NuxtLink
    :to="`/movie/${trending.results[0].id}`"
  >
    <v-row>
      <v-col
        cols="4"
        class="bg-black pa-0"
      />
      <v-col
        cols="8"
        class="pa-0"
      >
        <v-img
          :src="`https://image.tmdb.org/t/p/original/${trending.results[0].backdrop_path}`"
        />
      </v-col>
    </v-row>
  </NuxtLink>
</template>
