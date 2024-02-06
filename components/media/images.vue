<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true
  },

  type: {
    type: String,
    default: 'movie'
  }
})

const images = await getMediaImages(props.item.id, props.type)
const onboarding = ref(0)

</script>
<template>
  <v-container fluid>
    <p class="text-h5 my-4">
      Fondos <span class="text-caption text-disabled"> {{ images.backdrops.length }}</span>
    </p>

    <v-row>
      <v-col
        v-for="image in images.backdrops"
        :key="image.id"
        cols="12"
        md="6"
        lg="2"
      >
        <v-dialog
          transition="dialog-bottom-transition"
        >
          <template #activator="{ props }">
            <nuxt-img
              :src="`https://image.tmdb.org/t/p/original/${image.file_path}`"
              v-bind="props"
              :style="'width: 100%;'"
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
                <v-card
                  height="100vh"
                  class="d-flex align-center"
                >
                  <v-card-text class="text-center">
                    <nuxt-img
                      :style="'width: 100%;'"
                      :src="`https://image.tmdb.org/t/p/original/${n.file_path}`"
                    />
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
    <p class="text-h5 my-4">
      Posters <span class="text-caption text-disabled"> {{ images.posters?.length }}</span>
    </p>
    <v-row>
      <v-col
        v-for="image in images.posters"
        :key="image.id"
        cols="6"
        md="3"
        lg="2"
      >
        <v-dialog
          transition="dialog-bottom-transition"
        >
          <template #activator="{ props }">
            <nuxt-img
              :src="`https://image.tmdb.org/t/p/original/${image.file_path}`"
              v-bind="props"
              :style="'width: 100%;'"
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
                <v-card
                  class="d-flex align-center"
                  height="100vh"
                >
                  <v-card-text>
                    <nuxt-img
                      :style="'width: 100%;'"
                      :src="`https://image.tmdb.org/t/p/original/${n.file_path}`"
                    />
                  </v-card-text>
                </v-card>
              </v-window-item>
            </v-window>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>
