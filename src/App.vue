<template lang="pug">

#app
  //- header
  header
    a.active() Home
    a() About
    a() Whatever
  router-view

</template>

<script>
import { mapState, mapActions } from 'vuex'

import MiniCard from './components/Mini-card'

export default {
  name: 'App',
  components: {
    MiniCard
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions('main', {
      getTiles: 'getTiles'
    })
  },
  mounted () {
    this.getTiles()
  }
}
</script>

<style lang="stylus">

*
  box-sizing border-box

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  margin 20px

header
  border 3px solid #000
  padding 20px
  margin-bottom 20px
  a
    margin 0 10px
    text-decoration underline
    cursor pointer
    &.active
      font-weight bold
      text-decoration none

</style>
