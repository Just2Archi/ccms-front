<template>
  <v-layout justify-center align-center>
    <v-flex xs12 sm8 md6 lg4>
      <v-card>
        <v-card-title class="headline">Prisijungimas</v-card-title>
        <v-card-text>
          <v-form v-model="valid" ref="loginForm" lazy-validation>
            <v-text-field
              label="Prisijungimo vardas"
              v-model="form.username"
              :rules="rules.username"
              required
            ></v-text-field>
            <v-text-field
              label="Slaptažodis"
              type="password"
              v-model="form.password"
              :rules="rules.password"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="login()" :disabled="loading" :loading="loading" raised>Prisijungti</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      valid: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          (v) => !!v || 'Įveskite prisijungimo vardą'
        ],
        password: [
          (v) => !!v || 'Įveskite slaptažodį'
        ]
      }
    }
  },
  methods: {
    async login () {
      this.loading = true
      if (this.$refs.loginForm.validate()) {
        try {
          await this.$store.dispatch('login', {
            fields: {
              username: this.form.username,
              password: this.form.password
            }
          })
          console.log('Sėkmingai prisijungėte!')
          this.clearForm()
          this.loading = false
          this.$router.push('/')
        } catch (e) {
          this.loading = false
          console.log('Prisijungimo klaida: ' + e.message + '')
        }
      }
    },
    clearForm () {
      this.$refs.loginForm.reset()
    }
  },
  layout: 'login'
}
</script>

<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-box-shadow: 0 0 0px 1000px #424242 inset;
}
</style>
