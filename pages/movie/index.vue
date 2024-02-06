<script setup>

</script>
<template>
  <section>
    <media-banner media-type="movie" />
    <v-container fluid>
      <movie-trending title="Películas populares" />
      <movie-top-rated title="Películas mejor valoradas" />
      <movie-upcoming title="Próximas películass" />
      <movie-now-playing title="Películas en cartelera" />
    </v-container>
    <main-footer />
  </section>
</template>
