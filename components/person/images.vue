<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const onboarding = ref(0)
</script>

<template>
  <v-row>
    <v-col
      v-for="image in props.item.images.profiles"
      :key="image.id"
      cols="6"
      md="3"
      lg="2"
    >
          <nuxt-img
            :src="`https://image.tmdb.org/t/p/original/${image.file_path}`"
            :style="'width: 100%;'"
            class="cursor-pointer"
          />
    </v-col>
  </v-row>
</template>