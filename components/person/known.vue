<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="cast in props.item.combined_credits?.cast"
        :key="cast.id"
        cols="12"
        lg="2"
        md="4"
      >
        <media-card
          :item="cast"
          :type="cast.media_type"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
