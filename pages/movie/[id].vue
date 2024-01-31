<script setup>

const route = useRoute()

</script>

<template>
  <div>
    <movie-show
      :id="route.params.id"
    />
    <main-footer />
  </div>
</template>
