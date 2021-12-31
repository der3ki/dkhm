<template>
  <section>
    <Banner :home="false" title="Circuito Nacional" image="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/ageofsigmarmural.png?alt=media&token=fce2ebad-b15d-4aa7-bfe0-07a1f21c6f53"></Banner>
    <circuitoNacional/>
  </section>
</template>

<script>
import Banner from '../components/banner.vue';
import circuitoNacional from '../components/circuitoNacional.vue';
export default {
  name: 'circuitoNacionalView',
  components: {
    Banner,
    circuitoNacional
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
