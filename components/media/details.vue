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

import { useDisplay } from 'vuetify'
const { mobile, name } = useDisplay()
const slides = getSlides(name.value)

const directors = props.item.credits?.crew.filter (job => job.job === 'Director')

</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-if="!mobile"
        class="d-flex justify-right"
        cols="4"
        sm="3"
        offset-lg="1"
      >
        <nuxt-img
          height="450"
          :src="`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`"
        />
      </v-col>
      <v-col
        cols="12"
        lg="6"
      >
        <div
          class="d-flex flex-column"
        >
          <h2 class="text-h4 font-weight-thin mb-4">
            Sinopsis
          </h2>
          <h4 :class="!mobile ? 'text-body-1' :'text-caption'">
            {{ props.item.overview }}
          </h4>
          <v-divider class="my-2" />
          <v-row class="my-4">
            <v-col
              cols="12"
              sm="6"
            >
              <v-row>
                <template v-if="props.item.release_date">
                  <v-col
                    cols="6"
                    sm="4"
                  >
                    <p> Release date:</p>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="8"
                  >
                    <p> {{ props.item.release_date }}</p>
                  </v-col>
                </template>
              </v-row>
              <v-row>
                <v-col
                  cols="6"
                  sm="4"
                >
                  <p> Productor:</p>
                </v-col>
                <v-col
                  cols="6"
                  sm="8"
                >
                  <v-chip
                    v-for="productor in props.item.production_companies"
                    :key="productor.id"
                    size="x-small"
                    label
                    class="mx-1"
                  >
                    <p> {{ productor.name }}</p>
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="6"
                  sm="4"
                >
                  <p> Idioma:</p>
                </v-col>
                <v-col
                  cols="6"
                  sm="8"
                >
                  <v-chip
                    size="x-small"
                    label
                    class="mx-1"
                  >
                    <p> {{ props.item.original_language }}</p>
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="directors?.length"
                  cols="6"
                  sm="4"
                >
                  <p> Director:</p>
                </v-col>
                <v-col
                  cols="6"
                  sm="8"
                >
                  <v-chip
                    v-for="director in directors"
                    :key="director.id"
                    size="x-small"
                    label
                    class="mx-1"
                  >
                    <p> {{ director.name }}</p>
                  </v-chip>
                </v-col>
              </v-row>
              <v-row>
                <template v-if="props.item.revenue">
                  <v-col
                    cols="6"
                    sm="4"
                  >
                    <p> Recaudación:</p>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="8"
                  >
                    <p> {{ parseFloat(props.item.revenue).toFixed() }} $</p>
                  </v-col>
                </template>
              </v-row>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-row>
                <v-col
                  cols="6"
                  sm="4"
                >
                  <p> Estado:</p>
                </v-col>
                <v-col
                  cols="6"
                  sm="8"
                >
                  <p> {{ props.item.status }}</p>
                </v-col>
              </v-row>
              <v-row>
                <template v-if="props.item.runtime">
                  <v-col
                    cols="6"
                    sm="4"
                  >
                    <p> Duración:</p>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="8"
                  >
                    <p> {{ props.item.runtime }} min</p>
                  </v-col>
                </template>
              </v-row>
              <v-row>
                <template v-if="props.item.budget">
                  <v-col
                    cols="6"
                    sm="4"
                  >
                    <p> Presupuesto:</p>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="8"
                  >
                    <p> {{ parseFloat(props.item.budget).toFixed() }} $</p>
                  </v-col>
                </template>
              </v-row>
              <v-row>
                <v-col
                  cols="6"
                  sm="4"
                >
                  <p> Géneros:</p>
                </v-col>
                <v-col
                  cols="6"
                  sm="8"
                >
                  <v-chip
                    v-for="genre in props.item.genres"
                    :key="genre.id"
                    size="x-small"
                    label
                    class="mx-1"
                  >
                    <p> {{ genre.name }}</p>
                  </v-chip>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-spacer />
    </v-row>
    <v-divider class="my-4" />
    <p class="text-h5 my-4 mx-8">
      Cast
    </p>
    <Swiper
      :height="400"
      :slides-per-view="slides"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <SwiperSlide
        v-for="cast in props.item.credits?.cast"
        :key="cast.id"
      >
        <NuxtLink :to="`/person/${cast.id}`">
          <v-sheet
            class="ma-1 mb-2"
            height="auto"
            width="250"
            style="'width: 100%;'"
            elevation="4"
          >
            <nuxt-img
              :style="'width: 100% ; background-color: black;'"
              width="250"
              height="400"
              :src="`https://image.tmdb.org/t/p/w500/${cast.profile_path}`"
            />

            <div class="text-body-2 text-medium-emphasis ma-1 pa-2 text-truncate">
              <span class="me-1">{{ cast.name }}</span>
            </div>
            <div class="text-body-2 text-medium-emphasis ma-1 pa-2 text-truncate">
              <span class="me-1">{{ cast.character }}</span>
            </div>
          </v-sheet>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
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

