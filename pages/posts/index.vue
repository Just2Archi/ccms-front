<template>
  <div>
    <v-card class="card--flex-toolbar">
      <v-toolbar card prominent>
        <v-text-field
        append-icon="search"
        label="Ieškoti.."
        single-line
        hide-details
        v-model="search"
        >
        </v-text-field>
        <v-spacer></v-spacer>
        <v-btn raised router to="/posts/new">Naujas straipsnis</v-btn>
      </v-toolbar>
      <v-card-text>
        <v-data-table
          v-bind:headers="headers"
          v-bind:items="posts"
          v-bind:search="search"
        >
          <template slot="headerCell" slot-scope="props">
            <span slot="activator">
              {{ props.header.text }}
            </span>
          </template>
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.title }}</td>
            <td>{{ props.item.block }}</td>
            <td>{{ props.item.date }}</td>
            <td class="text-xs-center">
              <v-btn disabled @click.stop="dialogEdit = true" color="primary" flat icon>
                <v-icon>edit</v-icon>
              </v-btn>
            </td>
            <td class="text-xs-center">
              <v-btn disabled @click.stop="dialogDelete = true" color="error" flat icon>
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title>
          <span>Ar tikrai norite ištrinti { title of the post }?</span>
        </v-card-title>
        <v-card-actions>
          <v-btn color="error" flat @click.stop="dialogDelete = false">Ištrinti</v-btn>
          <v-btn color="warning" flat @click.stop="dialogDelete = false">Atšaukti</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogEdit"
      fullscreen
      transition="dialog-bottom-transition"
      :overlay="false"
      scrollable
    >
      <v-card>
        <v-toolbar style="flex: 0 0 auto;" dark class="primary">
          <v-btn icon @click.native="dialogEdit = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Arnoldas Schwarzeneggeris niekina jį garbinantį Donaldą Trumpą</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialogEdit = false">Išsaugoti</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      dialogDelete: false,
      dialogEdit: false,
      selected: [],
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Pavadinimas', value: 'title', align: 'left' },
        { text: 'Kategorija', value: 'block', align: 'left' },
        { text: 'Data', value: 'date', align: 'left' },
        { text: 'Redaguoti', sortable: false, align: 'center' },
        { text: 'Ištrinti', sortable: false, align: 'center' }
      ],
      posts: [
        {
          value: false,
          id: '2512525',
          title: 'Pareigūnų rankose – nauji greičio matuokliai su dar neregėta funkcija',
          block: 'Lietuvos Diena',
          date: '2018-01-17'
        },
        {
          value: false,
          id: '3623356',
          title: 'VMI akiratyje atsidūręs E. Jakilaitis: „Neturiu ko slėpti“',
          block: 'Kriminalai',
          date: '2018-01-19'
        },
        {
          value: false,
          id: '3262252',
          title: 'Siaubo istorija Plungės r.: rastas vyras buvo gyvas, bet jo veidas – visiškai supuvęs',
          block: 'Auto',
          date: '2018-01-15'
        },
        {
          value: false,
          id: '2512725',
          title: 'Dingusios merginos paieškos Kauno rajone: rastas jos automobilis',
          block: 'Verslas',
          date: '2018-01-14'
        },
        {
          value: false,
          id: '1262625',
          title: 'Paviešintas įrašas iš 13 įkalintų vaikų šeimos šventės – vaikai vos juda',
          block: 'Pasaulis',
          date: '2018-01-18'
        },
        {
          value: false,
          id: '8797644',
          title: 'Jaunesnį vaikiną turinti Donalda Meiželytė rėžė: „Aš nebenoriu vaikų, todėl šalinsiu kiaušides“',
          block: 'Sportas',
          date: '2018-01-14'
        },
        {
          value: false,
          id: '1256433',
          title: 'Arnoldas Schwarzeneggeris niekina jį garbinantį Donaldą Trumpą',
          block: 'Kultūra',
          date: '2018-01-13'
        }
      ]
    }
  },
  middleware: 'authentication'
}
</script>
