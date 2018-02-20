<template lang="pug">

#Card.card
  button.card__button(@click="$router.go(-1)") Go back
  img.card__img(:src="imgUrl")
  h2.card__title {{ tile.title }} &#35;{{ tile.id }}
  h3.card__desc {{ tile.description }}
  p.card__desc {{ tile.text }}

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Card',
  data () {
    return {
      imgUrl: 'https://loremflickr.com/' + 500 + '/' + 200
    }
  },
  computed: {
    ...mapState('main', {
      tile: state => state.pickedTile
    })
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

.card
  &__button
    margin 10px 0px
  &__img
    float right

</style>
