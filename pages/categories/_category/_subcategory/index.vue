<template>
  <h1>{{ $route.path }}</h1>
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
