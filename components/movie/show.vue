<script setup>
defineProps({
  item: Object
})
</script>

<template>
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
        :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`"
      />
    </v-col>
  </v-row>
</template>
