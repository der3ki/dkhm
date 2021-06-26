<template>
  <section>
    <Slider></Slider>
    <aboutDkhm></aboutDkhm>
  </section>
</template>

<script>
import Slider from '../components/slider.vue';
import aboutDkhm from '../components/aboutdkhm.vue';
export default {
  name: 'Home',
  components: {
    Slider,
    aboutDkhm
  },
  data(){
    return{
      
    }
  }
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
