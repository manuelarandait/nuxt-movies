<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()

const color = computed (()  => {
  return theme.global.name.value
})
</script>

<template>
  <v-footer
    class="text-left d-flex flex-column"
  >
    <p class="my-2">
      Made with Nuxt
    </p>
    <v-divider />

    <div>
      <a
        href="https://twitter.com/ManuAranda9"
        target="_blank"
        title="Twitter Manuel Aranda"
      >
        <v-icon
          icon="mdi-twitter"
          class="ma-2"
          :class="color === 'dark' ? 'text-white' : 'text-black' "
        />
      </a>
      <a
        href="https://www.linkedin.com/in/manuel-aranda-rosales/"
        target="_blank"
        title="LinkedIn Manuel Aranda"
      >
        <v-icon
          icon="mdi-linkedin"
          class="ma-2"
          :class="color === 'dark' ? 'text-white' : 'text-black' "
        />
      </a>
      <a
        href="https://www.instagram.com/manusoberbia/"
        target="_blank"
        title="Instagram Manuel Aranda"
      >
        <v-icon
          icon="mdi-instagram"
          class="ma-2"
          :class="color === 'dark' ? 'text-white' : 'text-black' "
        />
      </a>
    </div>

    <v-divider class="my-2" />

    <div>
      {{ new Date().getFullYear() }} — <strong>Manuel Aranda Dev</strong>
    </div>
  </v-footer>
</template>
