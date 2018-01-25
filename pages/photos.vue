<template>
  <v-card>
    <v-toolbar card prominent>
      <v-text-field
      append-icon="search"
      label="Ieškoti pagal datą, žymę, autorių.."
      single-line
      hide-details
      v-model="search"
      >
      </v-text-field>
      <v-spacer></v-spacer>
      <v-btn raised @click="dialogNew = !dialogNew">Įkelti nuotraukas</v-btn>
    </v-toolbar>
    <v-container v-if="photos" fluid v-bind="{ [`grid-list-${size}`]: true }">
      <v-layout row wrap>
        <v-flex
          xs2
          v-for="photo in photos"
        >
          <v-card flat tile>
            <v-card-media
              :src="'https://picsum.photos/300/300?image=' + photo.id"
              height="250px"
            >
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      size: 'md'
    }
  },
  async asyncData (context) {
    let data = await context.$axios.get('https://picsum.photos/list')
    return { photos: data.data.slice(0, 20) }
  },
  middleware: 'authentication'
}
</script>
