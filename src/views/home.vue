<template>
  <section>
    <Slider></Slider>
  </section>
</template>

<script>
import Slider from '../components/slider.vue';
export default {
  name: 'Home',
  components: {
    Slider
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
