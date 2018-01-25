<template>
  <div>
    <v-card class="card--flex-toolbar">
      <v-toolbar card prominent>
        <v-text-field
        append-icon="search"
        label="Ieškoti žymės.."
        single-line
        hide-details
        v-model="search"
        >
        </v-text-field>
        <v-spacer></v-spacer>
        <v-btn raised @click="dialogNew = !dialogNew">Nauja žymė</v-btn>
      </v-toolbar>
      <v-card-text>
        <v-data-table
          v-bind:headers="headers"
          v-bind:items="authors"
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
            <td>{{ props.item.slug }}</td>
            <td>{{ props.item.date }}</td>
            <td class="text-xs-center">
              <v-btn disabled @click.stop="dialogEdit = true" color="primary" flat icon>
                <v-icon>edit</v-icon>
              </v-btn>
            </td>
            <td class="text-xs-center">
              <v-btn disabled @click.stop="dialogDelete = true" color="error"flat icon>
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialogNew" max-width="500px">
      <v-card>
        <v-card-title class="headline">Nauja žymė</v-card-title>
        <v-card-text>
          <v-form v-model="valid" ref="loginForm" lazy-validation>
            <v-text-field
              label="Pavadinimas"
              v-model="form.title"
              :rules="rules.title"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" @click="dialogNew = !dialogNew" :disabled="loading" :loading="loading" flat>Atšaukti</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" :disabled="loading" :loading="loading">Kūrti</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      loading: false,
      dialogNew: false,
      dialogEdit: false,
      dialogDelete: false,
      form: {
        title: ''
      },
      rules: {
        title: [
          (v) => !!v || 'Įveskite žymę!'
        ]
      },
      search: '',
      authors: [
        {
          id: '226725',
          title: 'Myliu Lietuva',
          slug: 'myliu-lietuva',
          date: '2018-01-19'
        },
        {
          id: '122725',
          title: 'Nelaimės',
          slug: 'nelaimes',
          date: '2018-01-20'
        },
        {
          id: '236325',
          title: 'Dakaras 2018',
          slug: 'dakaras-2018',
          date: '2018-01-18'
        }
      ],
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Pavadinimas', value: 'title', align: 'left' },
        { text: 'Slug', value: 'slug', align: 'left' },
        { text: 'Data', value: 'date', align: 'left' },
        { text: 'Redaguoti', sortable: false, align: 'center' },
        { text: 'Ištrinti', sortable: false, align: 'center' }
      ]
    }
  },
  middleware: 'authentication'
}
</script>
