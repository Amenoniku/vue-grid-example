<template lang="pug">

#Card.card
  button.card__button(@click="$emit('click')") Go back
  img.card__img(:src="imgUrl")
  h2.card__title {{ data.title }} &#35;{{ data.id }}
  h3.card__desc {{ data.description }}
  p.card__desc {{ data.text }}

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Card',
  props: ['data'],
  data () {
    return {
      imgUrl: 'http://placekitten.com/170/170'
    }
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
