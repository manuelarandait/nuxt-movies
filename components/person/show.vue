<script setup>

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const id = computed(() => props.id)
const person = await getPerson(id.value)

import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

</script>
<template>
  <v-container fluid>
    <v-row class="my-2">
      <v-col
        class="d-flex justify-right"
        cols="12"
        sm="4"
        offset-lg="1"
      >
        <v-img
          height="400"
          :src="`https://image.tmdb.org/t/p/w500/${person.profile_path}`"
        />
      </v-col>
      <v-col
        cols="12"
        sm="7"
      >
        <div
          class="d-flex flex-column  text-white pa-6"
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
              sm="6"
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

