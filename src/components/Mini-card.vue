<template lang="pug">

#MiniCard.mini-card(@click="$emit('click')")
  h3.mini-card__title {{ data.title }} &#35;{{ data.id }}
  p.mini-card__desc {{ data.description }}


</template>

<script>
export default {
  name: 'MiniCard',
  props: ['data'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
miniCardBox = 300
miniCardImgUrl = 'https://loremflickr.com/' + 500 + '/' + 200

.mini-card
  width (miniCardBox)px
  height auto
  // margin 10px
  border 3px solid #000
  background-image url(miniCardImgUrl)
  background-position center center
  text-shadow 1px 1px 1px black, 0 0 1px black
  color white
  &__title
    margin .5em
    margin-bottom 1.6em
  &__desc
    margin .5em
    // font-size 2em

@media screen and (min-width: 1024px)
  .mini-card
    width 32%

@media screen and (max-width: 1024px)
  .mini-card
    width 49%

@media screen and (max-width: 479px)
  .mini-card
    width 100%

</style>
