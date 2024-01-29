<template>
  <v-navigation-drawer
    fixed
    app
    width="100"
    color="black"
  >
    <v-list
      class="d-flex align-center flex-column mb-6"
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
