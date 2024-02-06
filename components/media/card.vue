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
    <v-hover v-slot="{ isHovering, prop }">
      <v-card
        :class="{ 'on-hover': isHovering }"
        height="auto"
        width="250"
        v-bind="prop"
        :elevation="isHovering ? 20 : 4"
      >
        <nuxt-img
          cover
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
            <v-rating
              :model-value="getCountAverage(props.item.vote_average)"
              half-increments
              color="amber"
              density="compact"
              readonly
              size="small"
            />

            <div class="text-grey ms-4">
              {{ parseFloat(props.item.vote_average).toFixed(2) }} ({{ props.item.vote_count }})
            </div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-hover>
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