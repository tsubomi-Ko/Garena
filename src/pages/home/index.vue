<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'home',
  components: {
      Header
  }
}
</script>

<style lang="stylus" scoped>
/** pc  */
@media screen and (min-width: 1024px) {
    .home {
        margin: 0 auto;
        min-height: 100vh;
        overflow: hidden;
    }
}

/** ipad  */
@media screen and (min-width: 768px) and (max-width: 1024px) {

}

/** iphone */
@media screen and (max-width: 768px) {

}
</style>