<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const images = await getMovieImages(props.item.id)
const onboarding = ref(0)
console.log(images)

</script>
<template>
  <v-container fluid>
    <p class="text-h5 my-4">
      Fondos <span class="text-caption text-disabled"> {{ images.backdrops.length}}</span>
    </p>
    
    <v-row>
      <v-col
        v-for="image in images.backdrops"
        :key="image.id"
        cols="12"
        sm="2"
      >
        <v-dialog
          transition="dialog-bottom-transition"
        >
          <template #activator="{ props }">
            <v-img
              :src="`https://image.tmdb.org/t/p/original/${image.file_path}`"
              v-bind="props"
              class="cursor-pointer"
            />
          </template>
          <template #default>
            <v-window
              v-model="onboarding"
              show-arrows
            >
              <v-window-item
                v-for="n in images.backdrops"
                :key="n.id"
              >
                <v-card height="100vh">
                  <v-img
                    :src="`https://image.tmdb.org/t/p/original/${n.file_path}`"
                  />
                </v-card>
              </v-window-item>
            </v-window>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
    <p class="text-h5 my-4">
      Posters <span class="text-caption text-disabled"> {{ images.posters.length}}</span>
    </p>
    <v-row>
      <v-col
        v-for="image in images.posters"
        :key="image.id"
        cols="6"
        sm="2"
      >
        <v-dialog
          transition="dialog-bottom-transition"
        >
          <template #activator="{ props }">
            <v-img
              :src="`https://image.tmdb.org/t/p/original/${image.file_path}`"
              v-bind="props"
              class="cursor-pointer"
            />
          </template>
          <template #default>
            <v-window
              v-model="onboarding"
              show-arrows
            >
              <v-window-item
                v-for="n in images.posters"
                :key="n.id"
              >
                <v-card height="100vh">
                  <v-img
                    :src="`https://image.tmdb.org/t/p/original/${n.file_path}`"
                  />
                </v-card>
              </v-window-item>
            </v-window>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>
