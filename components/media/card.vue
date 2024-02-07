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
    <v-card
      height="auto"
      width="250"
      class="ma-1 mb-2"
      elevation="4"
    >
      <nuxt-img
        :style="'width: 100% ; background-color: black;'"
        width="250"
        height="400"
        :alt="props.item.title || props.item.name"
        :src="`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`"
      />
      <v-card-item>
        <v-card-subtitle>
          <span class="me-1">{{ props.media === 'movie' ? props.item.title : props.item.name }}</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-col>
            <NuxtRating
              :read-only="true"
              :rating-size="'20px'"
              :rating-value="getCountAverage(props.item.vote_average)"
            />
          </v-col>
          <v-col>
            <div class="text-grey">
              {{ parseFloat(props.item.vote_average).toFixed(2) }} ({{ props.item.vote_count }})
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </NuxtLink>
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

