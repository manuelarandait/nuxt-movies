<script setup>

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const tab = ref(null)

const id = computed(() => props.id)
const person = await getPerson(id.value)

import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

</script>
<template>
  <v-responsive>
    <v-container fluid>
      <v-row class="my-2">
        <v-col
          :class="mobile ? 'd-flex justify-center' : 'd-flex justify-right'"
          cols="12"
          sm="4"
          md="6"
          lg="3"
          offset-lg="1"
        >
          <nuxt-img
            height="400"
            :src="`https://image.tmdb.org/t/p/w500/${person.profile_path}`"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
          lg="8"
          sm="7"
        >
          <div
            class="d-flex flex-column pa-6"
          >
            <h2 class="text-h4 font-weight-thin mb-4">
              {{ person.name }}
            </h2>
            <h4 class="text-caption">
              {{ person.biography }}
            </h4>
            <v-divider class="my-2" />
            <v-row class="my-4">
              <v-col
                cols="12"
              >
                <v-row>
                  <v-col
                    cols="6"
                    sm="4"
                  >
                    <p class="text-disabled">
                      Conocido por:
                    </p>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="8"
                  >
                    <p> {{ person.known_for_department }} </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="6"
                    sm="4"
                  >
                    <p class="text-disabled">
                      Lugar de nacimiento:
                    </p>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="8"
                  >
                    <p> {{ person.place_of_birth }}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="6"
                    sm="4"
                  >
                    <p class="text-disabled">
                      Fecha de nacimiento:
                    </p>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="8"
                  >
                    <p> {{ person.birthday }}</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
    <v-card>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="primary"
        stacked
      >
        <v-tab :value="1">
          Aparece en
        </v-tab>
        <v-tab :value="2">
          Imágenes
        </v-tab>
      </v-tabs>
      <v-card-text>
        <v-window
          v-model="tab"
          style="min-height: 100vh;"
          :touch="false"
        >
          <v-window-item
            :value="1"
          >
            <person-known
              :item="person"
            />
          </v-window-item>
          <v-window-item
            :value="2"
          >
            <person-images
              :item="person"
            />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-responsive>
</template>
