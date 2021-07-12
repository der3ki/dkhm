<template>
  <div id="app">
    <Header></Header>
    <transition>
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header';
import Footer from './components/footer';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch("getAllNews",{limit:20,from:0})
    this.$store.dispatch("getLatestNews");
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;1,400&display=swap');
body{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul{
  margin:0;
  list-style-type: none;
  padding:0;
}
</style>
