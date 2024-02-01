<script setup>

const route = useRoute()

</script>

<template>
  <div>
    <tv-show
      :id="route.params.id"
    />
    <main-footer />
  </div>
</template>
