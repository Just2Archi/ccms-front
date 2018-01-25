<template>
  <div>
    <h1>Users</h1>
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
  middleware: 'authentication'
}
</script>
