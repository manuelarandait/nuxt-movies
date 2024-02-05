<script setup>

</script>

<template>
  <div id="aux">
    <media-banner media-type="movie" />
    <v-container fluid>
      <movie-trending />
      <tv-trending />
    </v-container>
    
    <main-footer />
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
