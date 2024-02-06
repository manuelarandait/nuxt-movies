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
              v-for="n in props.item.images.profiles"
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
</template>