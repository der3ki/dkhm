<template>
  <section>
    <Slider></Slider>
    <aboutDkhm></aboutDkhm>
    <latestNews></latestNews> 
  </section>
</template>

<script>
import Slider from '../components/slider.vue';
import aboutDkhm from '../components/aboutdkhm.vue';
import latestNews from '../components/latestNews.vue';
export default {
  name: 'Home',
  components: {
    Slider,
    aboutDkhm,
    latestNews
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
