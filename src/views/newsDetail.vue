<template>
  <section>
    <Banner image="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/ageofsigmarmural.png?alt=media&token=fce2ebad-b15d-4aa7-bfe0-07a1f21c6f53"></Banner> 
  </section>
</template>

<script>
import Banner from '../components/banner.vue';
import { mapGetters } from "vuex";

export default {
  name: 'News',
  components: {
    Banner
  },
  computed:{
    ...mapGetters(["latestNews"]),
  }
}
</script>

<style>

</style>
