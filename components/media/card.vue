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
  <NuxtLink
    :to="`/${props.media}/${props.item.id}`"
  >
    <v-sheet
      height="auto"
      width="250"
      class="ma-1 mb-2"
      elevation="4"
    >
      <nuxt-img
        :style="'width: 100%; height: 400px; background-color: black;'"
        width="250"
        height="400"
        sizes="100vw"
        :alt="props.item.title || props.item.name"
        :src="`https://image.tmdb.org/t/p/w400${props.item.poster_path}`"
      />
      <div class="text-body-2 text-medium-emphasis ma-1 pa-2 text-truncate">
        <span class="me-1">{{ props.media === 'movie' ? props.item.title : props.item.name }}</span>
      </div>

      <div class="d-flex justify-space-between ma-1 pa-2">
        <NuxtRating
          :read-only="true"
          :rating-size="'20px'"
          :rating-value="getCountAverage(props.item.vote_average)"
        />

        <div class="text-grey ">
          {{ parseFloat(props.item.vote_average).toFixed(2) }} ({{ props.item.vote_count }})
        </div>
      </div>
    </v-sheet>
  </NuxtLink>
</template>
<style scoped>
.v-sheet {
  transition: opacity .3s ease-in-out;
}

.v-sheet:hover {
  opacity: 0.5;
}

a:link, a:visited, a:active {
  text-decoration:none;
}

</style>

