<template>
  <section>
    <Banner></Banner>
    <aboutDkhm></aboutDkhm>
    <latestNews></latestNews>
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
