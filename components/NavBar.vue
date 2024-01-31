<template>
  <v-navigation-drawer
    app
    rail
    color="black"
    class="text-center"
  >
    <v-list
      class="d-flex align-center flex-column"
      density="compact"
      nav
      height="100%"
    >
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="/"
        prepend-icon="mdi-home"
      />
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="movie"
        prepend-icon="mdi-movie"
      />
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="tv"
        prepend-icon="mdi-television-classic"
      />
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="search"
        prepend-icon="mdi-magnify"
      />
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
</script>
<style>
.icon {
  font-size: 50px;
}
</style>