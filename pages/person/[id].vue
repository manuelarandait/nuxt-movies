<script setup>

const route = useRoute()

</script>

<template>
  <div>
    <person-show
      :id="route.params.id"
    />
    <main-footer />
  </div>
</template>
