<template>
  <div>
    <h1>Profile</h1>
    <div v-if="user">
      <h2>Username: {{ user.username.charAt(0).toUpperCase() + user.username.slice(1) }}</h2>
      <h3>Is admin? {{ user.admin }}</h3>
    </div>
    <div v-if="users">
      <p v-for="(user, index) in users">{{ (index + 1) + ': ' + user.username }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    console.log(context.$axios.defaults.headers)
    let { data } = await context.$axios.get('http://localhost:8000/api/users')
    return { users: data }
  },
  middleware: 'authentication',
  computed: {
    user () {
      if (this.$store.getters['loggedIn']) {
        return this.$store.state.user ? this.$store.state.user : null
      }
    }
  }
}
</script>
