<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>{{ $route.name.toUpperCase() }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="error" raised>Atšaukti</v-btn>
      <v-btn class="primary" raised>Išsaugoti</v-btn>
    </v-toolbar>
    <v-card>
      <v-card-text>
        <Draggable :disabled="true" v-model="listA" :options="sortOptions" @start="drag=true" @end="drag=false">
           <v-card v-for="element in listA" :key="element.id" :class="element.class">
             <v-card-title><strong>{{element.name}}</strong></v-card-title>
           </v-card>
        </Draggable>
      </v-card-text>
    </v-card>
    <div>
      Order: <span v-for="item in listA">{{ item.name }}, </span>
    </div>
  </div>
</template>

<script>
const Draggable = require('vuedraggable')
export default {
  data () {
    return {
      drag: false,
      sortOptions: {
        group: 'sample',
        animation: 150
      },
      listA: [
        { id: 1, name: 'Lietuvos Diena', class: 'light-blue accent-4' },
        { id: 2, name: 'Verslas', class: 'blue accent-4' },
        { id: 3, name: 'Sportas', class: 'orange darken-2' }
      ]
    }
  },
  components: {
    Draggable
  },
  middleware: 'authentication'
}
</script>

<style scoped>
.card {
  cursor: move;
}
.card + .card {
  margin-top: 15px;
}
.toolbar {
  margin-bottom: 50px;
}
.card .card__title {
  color: #fff;
}
</style>
