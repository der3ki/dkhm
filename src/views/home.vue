<template>
  <section>
    <Banner :home="true" title="Bienvenido a DKHM" image="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/BANNER_DKHM2020.jpg?alt=media&token=414c5730-dbfc-4cb2-bc40-7d90854e7365"></Banner>
    <aboutDkhm></aboutDkhm>
    <latestNews :home="true"></latestNews>
    <bannerSm></bannerSm>
  </section>
</template>

<script>
import Banner from '../components/banner.vue';
import aboutDkhm from '../components/aboutdkhm.vue';
import latestNews from '../components/latestNews.vue';
import bannerSm from '../components/bannerSm.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    aboutDkhm,
    latestNews,
    bannerSm
  },
  data(){
    return{
      news: []
    }
  },
}
</script>

<style scoped>
  section{
    background-image:url('../assets/background-home.jpg');
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
