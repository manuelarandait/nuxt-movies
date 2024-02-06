<script setup>
useHead({
  htmlAttrs: {
    lang: 'es',
  },
  charset: 'utf-8',
  title: 'Nuxt Movies',
  titleTemplate: title => title !== 'Nuxt Movies' ? `${title} · Nuxt Movies` : title,
  meta: [
    { name: 'description', content: 'A TMDB client built with Nuxt' },
    { property: 'og:image', content: 'https://movies.nuxt.space/social-card.png' },
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
    <v-main>
      <NuxtPage />
      <nav-bar />
    </v-main>
  </v-app>
</template>