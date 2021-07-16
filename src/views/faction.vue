<template>
  <section>
    <Banner :home="false" :title="getFactionByName.name" :image="getFactionByName.img"></Banner>
    <actualFaction></actualFaction>
  </section>
</template>

<script>
import Banner from '../components/banner.vue';
import actualFaction from '../components/actualFaction.vue';
export default {
  name: 'faction',
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
