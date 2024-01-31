<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
console.log(props.item.videos.results)
</script>
<template>
  <v-container fluid>
    <p class="text-h5 my-4">
      Videos <span class="text-caption text-disabled"> {{ props.item.videos.results.length }}</span>
    </p>

    <v-row>
      <v-col
        v-for="video in props.item.videos.results"
        :key="video.id"
        cols="3"
      >
        <v-dialog
          width="1080"
          height="auto"
          transition="dialog-bottom-transition"
        >
          <template #activator="{ props }">
            <v-hover v-slot="{ isHovering, aux }">
              <v-img
                width="500"
                height="200"
                :src="`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`"
                v-bind="props"
                class="cursor-pointer"
              />
              <v-overlay
                :model-value="isHovering"
                contained
                scrim="#036358"
                class="align-center justify-center"
              >
                <v-btn variant="flat">
                  See more info
                </v-btn>
              </v-overlay>
            </v-hover>
          </template>

          <template #default="{ isActive }">
            <v-card>
              <v-toolbar>
                <v-spacer />
                <v-btn
                  icon
                  dark
                  @click="isActive.value = false "
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <iframe
                  :src="`https://www.youtube.com/embed/${video.key}?rel=0&showinfo=0&autoplay=0`"
                  width="100%"
                  height="600"
                />
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>
