<script setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const value = ref(1)

</script>

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
  </v-navigation-drawer>
  <v-bottom-navigation
    v-if="mobile"
    v-model="value"
    app
    color="teal"
    grow
    height="70"
  >
    <v-btn>
      <v-icon size="30">
        mdi-home
      </v-icon>
    </v-btn>
    <v-btn>
      <v-icon size="30">
        mdi-movie
      </v-icon>
    </v-btn>
    <v-btn>
      <v-icon size="30">
        mdi-television-classic
      </v-icon>
    </v-btn>
    <v-btn>
      <v-icon size="30">
        mdi-magnify
      </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>