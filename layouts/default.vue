<template>
  <v-app light>
    <v-navigation-drawer :mini-variant.sync="miniVariant" v-model="drawer" fixed app>
      <v-list>
        <v-list-tile router to="/categories">
          <v-list-tile-action>
            <v-icon>apps</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Kategorijos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/posts">
          <v-list-tile-action>
            <v-icon>description</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Straipsniai</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/photos">
          <v-list-tile-action>
            <v-icon>photo</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Fotoarchyvas</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/authors">
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Autoriai</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/tags">
          <v-list-tile-action>
            <v-icon>label</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Žymės</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>ClimateCMS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom center offset-y>
        <v-avatar slot="activator" class="primary">
          <span class="white--text headline" v-if="user">{{ user.username.charAt(0).toUpperCase() }}</span>
        </v-avatar>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Profilis</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-if="user && user.admin">
            <v-list-tile-title>Administravimas</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout()">
            <v-list-tile-title>Atsijungti</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        miniVariant: false
      }
    },
    methods: {
      async logout () {
        try {
          await this.$store.dispatch('logout')
            .then(() => this.$router.replace({ path: 'login' }))
        } catch (e) {
          console.log('Atsijungimo klaida: ' + e.message + '')
        }
      }
    },
    computed: {
      user () {
        if (this.$store.getters['loggedIn']) {
          return this.$store.state.user[0] ? this.$store.state.user[0] : null
        }
      }
    }
  }
</script>
