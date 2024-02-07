<script setup>
const value = ref(1)

import { useTheme, useDisplay } from 'vuetify'
const theme = useTheme()
const { mobile } = useDisplay()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
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
      >
        <v-icon
          size="30"
          icon="mdi-home"
        />
      </v-list-item>
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="/movie"
      >
        <v-icon
          size="30"
          icon="mdi-movie"
        />
      </v-list-item>
      <v-list-item
        size="30"
        class="ma-2 pa-2 my-auto"
        to="/tv"
      >
        <v-icon
          size="30"
          icon="mdi-television-classic"
        />
      </v-list-item>
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="/search"
      >
        <v-icon
          size="30"
          icon="mdi-magnify"
        />
      </v-list-item>
    </v-list>
    <template #append>
      <v-btn @click="toggleTheme">
        <v-icon icon="mdi-theme-light-dark" />
      </v-btn>
    </template>
  </v-navigation-drawer>
  <v-bottom-navigation
    v-if="mobile"
    v-model="value"
    app
    color="teal"
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