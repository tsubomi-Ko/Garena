<template>
  <div class="characters">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'characters',
  components: {
      Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>