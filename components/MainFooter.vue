<script setup>
const icons = [ 'mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram' ]
</script>

<template>
  <v-footer
    class="bg-black text-left d-flex flex-column"
    app
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      />
    </div>

    <v-divider />

    <div>
      {{ new Date().getFullYear() }} — <strong>Manuel Aranda Dev</strong>
    </div>
  </v-footer>
</template>
