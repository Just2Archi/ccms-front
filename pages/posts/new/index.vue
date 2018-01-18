<template>
  <h1>{{ $route.name }}</h1>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  middleware: 'authentication'
}
</script>
