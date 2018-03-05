<template lang="pug">

#Card.card
  div(v-if="tile")

    .card__frame
      button.card__button(@click="$router.go(-1)") Go back
      img.card__img(:src="imgUrl")
      h2.card__title {{ tile.title }} &#35;{{ tile.id }}
      h3.card__desc {{ tile.description }}
      p.card__desc {{ tile.text }}

    .card__frame(v-if="tile.type === 'double'")
      button.card__button(@click="$router.go(-1)") Go back
      img.card__img(:src="imgUrl")
      h2.card__title {{ tile.title }} &#35;{{ tile.id }}
      h3.card__desc {{ tile.description }}
      p.card__desc {{ tile.text }}
  div(v-else)
    p Tile not found
    button.card__button(@click="$router.push('/')") Go to the main page

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Card',
  data () {
    return {
      imgUrl: 'https://loremflickr.com/' + 250 + '/' + 200
    }
  },
  computed: {
    tile () {
      return this.tiles.find((item) => {
        return +item.id === +this.$route.params.id
      })
    },
    ...mapState('main', {
      tiles: state => state.tiles
    })
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

.card
  &__frame
    display inline-block
    width 50%
  &__button
    margin 10px 0px
  &__img
    float right

@media screen and (max-width: 570px)
  .card__frame
    width 100%

</style>
