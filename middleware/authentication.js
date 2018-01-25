export default function ({ store, redirect, app }) {
  console.log(app.$axios.defaults.headers)
  if (!store.getters['loggedIn']) {
    return redirect('/login')
  }
}
