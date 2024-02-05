<script setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const value = ref(1)

import { useTheme } from 'vuetify'
const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-navigation-drawer
    app
    rail
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
        to="/movie"
        prepend-icon="mdi-movie"
      />
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="/tv"
        prepend-icon="mdi-television-classic"
      />
      <v-list-item
        class="ma-2 pa-2 my-auto"
        to="/search"
        prepend-icon="mdi-magnify"
      />
    </v-list>
    <template #append>
      <v-btn @click="toggleTheme">
        <v-icon icon="mdi-theme-light-dark"></v-icon>
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