<template>
  <section>
    <Banner :home="false" title="Circuito Nacional" image="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/ageofsigmarmural.png?alt=media&token=fce2ebad-b15d-4aa7-bfe0-07a1f21c6f53"></Banner>
    <actualFaction></actualFaction>
  </section>
</template>

<script>
import Banner from '../components/banner.vue';
import actualFaction from '../components/actualFaction.vue';
export default {
  name: 'circuitoNacional',
  components: {
    Banner,
    actualFaction
  },
  props:{
      name:String
  },
  computed:{
        getFactionByName(){
            return this.$store.getters.getFactionByName(this.$route.params.name)
        },
      
    },
}
</script>

<style>

</style>
