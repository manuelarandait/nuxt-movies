<script setup>
useHead({
  htmlAttrs: {
    lang: 'es',
  },
  charset: 'utf-8',
  title: 'Manuel Aranda - Movies',
  titleTemplate: title => title !== 'Nuxt Movies' ? `${title} · Nuxt Movies` : title,
  meta: [
    { name: 'description', content: 'A media website built with Nuxt 3 🎬' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@manuelaranda9' },
    { name: 'twitter:creator', content: '@manuelaranda9' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/webp',
      href: '/movies.webp',
    },
  ],
})
</script>

<template>
  <v-app>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <nav-bar />
  </v-app>
</template>