<template>
  <v-navigation-drawer
      theme="dark"
      fixed
      app
  >
    <v-list class="d-flex align-center flex-column mb-6" height="100%">
      <v-list-item class="ma-2 pa-2 my-auto" to="/" prepend-icon="mdi-home" title="Home"></v-list-item>
      <v-list-item class="ma-2 pa-2 my-auto" to="movie" prepend-icon="mdi-movie" title="Movie"></v-list-item>
      <v-list-item class="ma-2 pa-2 my-auto" to="tv" prepend-icon="mdi-television-classic" title="Tv"></v-list-item>
      <v-list-item class="ma-2 pa-2 my-auto" to="search" prepend-icon="mdi-magnify" title="Search"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
