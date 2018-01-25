<template>
  <div>
    <v-card class="card--flex-toolbar">
      <v-toolbar card prominent>
        <v-text-field
        append-icon="search"
        label="Ieškoti autoriaus.."
        single-line
        hide-details
        v-model="search"
        >
        </v-text-field>
        <v-spacer></v-spacer>
        <v-btn raised @click="dialogNew = !dialogNew">Naujas autorius</v-btn>
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
            <td>{{ props.item.email }}</td>
            <td>{{ props.item.facebook }}</td>
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
        <v-card-title class="headline">Naujas autorius</v-card-title>
        <v-card-text>
          <v-form v-model="valid" ref="loginForm" lazy-validation>
            <v-text-field
              label="Vardas/Pavadinimas"
              v-model="form.title"
              :rules="rules.title"
              required
            ></v-text-field>
            <v-text-field
              label="El. paštas"
              type="text"
              v-model="form.email"
            ></v-text-field>
            <v-text-field
              label="Facebook nuoroda"
              type="text"
              v-model="form.facebook"
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
        title: '',
        email: '',
        facebook: ''
      },
      rules: {
        title: [
          (v) => !!v || 'Įveskite pavadinimą / vardą!'
        ]
      },
      search: '',
      authors: [
        {
          id: '251272',
          title: 'Vardenis Pavardenis',
          email: 'v.pavardenis@lrytas.lt',
          facebook: 'https://fb.com/v.pavardenis',
          date: '2018-01-14'
        },
        {
          id: '222725',
          title: 'Vardauskas Pavardauskas',
          email: 'v.pavardauskas@lrytas.lt',
          facebook: 'https://fb.com/v.pavardauskas',
          date: '2018-01-06'
        },
        {
          id: '232725',
          title: 'Pardauskas Vavardauskas',
          email: 'p.vavardauskas@lrytas.lt',
          facebook: 'https://fb.com/p.vavardauskas',
          date: '2018-01-17'
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
        { text: 'El. paštas', value: 'email', align: 'left' },
        { text: 'Facebook', value: 'facebook', align: 'left' },
        { text: 'Data', value: 'date', align: 'left' },
        { text: 'Redaguoti', sortable: false, align: 'center' },
        { text: 'Ištrinti', sortable: false, align: 'center' }
      ]
    }
  },
  middleware: 'authentication'
}
</script>
