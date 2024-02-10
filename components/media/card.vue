<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  },

  media: {
    type: String,
    required: false,
    default: 'movie'
  }
})

function getCountAverage(average) {
  return (average * 5) / 10
}
</script>

<template>
</template>
<style scoped>
.v-card {
  transition: opacity .3s ease-in-out;
}

.v-card:hover {
  opacity: 0.5;
}

a:link, a:visited, a:active {
  text-decoration:none;
}

</style>

