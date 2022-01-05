<template>
  <div id="app">
    <Header></Header>
    <div v-if="loading" class="container__lds-hourglass">
      <div class="lds-hourglass"/>
    </div>
    <div v-else>
      <transition>
        <router-view></router-view>
      </transition>
      <Footer></Footer>
    </div>
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
  data(){
    return{
      loading:true,
    }
  },
  mounted(){
    Promise.all([
      this.$store.dispatch("getAllNews",{limit:3,from:0}),
      this.$store.dispatch("getLatestNews"), 
      this.$store.dispatch("getAllFactions"),
      this.$store.dispatch("getTeam",{limit:20,from:0}),
      this.$store.dispatch("getArmies")
      ]).then(() => (this.loading = false))
  },
  created(){
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
p{
    font:300 16px/1.5 'Poppins',sans-serif;
    margin:20px 0;
  }
  h2,h3{
    font:500 24px/1.5 'Poppins',sans-serif;
  }
  .container__lds-hourglass{
        position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%
  }
  .lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #ff0000;
  border-color: #ff0000 transparent #ff0000 transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

</style>
