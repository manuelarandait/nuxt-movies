<script setup>
const value = ref(1)

import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

</script>

<template>
  <v-navigation-drawer
    app
    width="80"
  >
    <v-list
      class="d-flex align-center justify-center flex-column"
      density="compact"
      nav
      height="100%"
    >
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="/"
        variant="plain"
      >
        <template #default="{ isActive }">
          <v-icon
            size="30"
            title="Inicio"
            :color="isActive ? 'primary' : 'white'"
            :icon="isActive ? 'mdi-home' : 'mdi-home-outline'"
          />
        </template>
      </v-list-item>
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="/movie"
        variant="plain"
      >
        <template #default="{ isActive }">
          <v-icon
            size="30"
            title="Películas"
            :color="isActive ? 'primary' : 'white'"
            :icon="isActive ? 'mdi-movie' : 'mdi-movie-outline'"
          />
        </template>
      </v-list-item>
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="/tv"
        variant="plain"
      >
        <template #default="{ isActive }">
          <v-icon
            size="30"
            title="Series de televisión"
            :color="isActive ? 'primary' : 'white'"
            :icon="isActive ? 'mdi-television-play' : 'mdi-television-stop'"
          />
        </template>
      </v-list-item>
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="/search"
        variant="plain"
      >
        <template #default="{ isActive }">
          <v-icon
            size="30"
            title="Búsqueda"
            :color="isActive ? 'primary' : 'white'"
            :icon="isActive ? 'mdi-note-search' : 'mdi-note-search-outline'"
          />
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-bottom-navigation
    v-if="mobile"
    v-model="value"
    app
    color="primary"
    grow
    height="70"
  >
    <v-btn to="/">
      <v-icon size="30">
        mdi-home
      </v-icon>
    </v-btn>
    <v-btn to="/movie">
      <v-icon size="30">
        mdi-movie
      </v-icon>
    </v-btn>
    <v-btn to="/tv">
      <v-icon size="30">
        mdi-television-classic
      </v-icon>
    </v-btn>
    <v-btn to="/search">
      <v-icon size="30">
        mdi-magnify
      </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<style scoped>

</style>