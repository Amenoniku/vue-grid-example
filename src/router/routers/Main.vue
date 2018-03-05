<template lang="pug">

#main
  .grid-cards(v-if="!openedCard")
    MiniCard(
      v-for="tile in tiles"
      :key="tile.id"
      :data="tile"
      @click="openCard(tile)"
    )

</template>

<script>
import { mapState, mapActions } from 'vuex'

import MiniCard from '../../components/Mini-card'

export default {
  name: 'Main',
  components: {
    MiniCard
  },
  data() {
    return {
      openedCard: false
    }
  },
  computed: {
    ...mapState('main', {
      tiles: state => state.tiles
    })
  },
  methods: {
    openCard (data) {
      console.log(data.id)
      // this.pickTile(data)
      // this.$router.push('card')
    },
    closeCard () {
      this.$router.go(-1)
    },
    ...mapActions('main', {
      pickTile: 'pickTile'
    })
  },
  mounted () {
  }
}
</script>

<style lang="stylus">

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

.grid-cards
  margin 0 auto
  display flex
  flex-flow row wrap
  justify-content center
  align-content stretch

</style>
