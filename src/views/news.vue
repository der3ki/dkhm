<template>
  <section>
    <Banner :home="false" title="Noticias" image="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/ageofsigmarmural.png?alt=media&token=fce2ebad-b15d-4aa7-bfe0-07a1f21c6f53"></Banner>
    <div class="news">
      <ul>
          <li v-for="(news,index) in allNews.news" :key="index">
            <router-link :to="{ path: 'news/'+news._id }" >
              <img :src="news.img" :alt="news.title"/>
              <div>
                <h2> {{ news.createdat}} </h2>
                <h3> {{ news.title }}</h3>
                <p> {{ news. description}}</p>
              </div>
            </router-link>
          </li>
      </ul>
    </div>
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
  data(){
    return{
      limit:0,
      from:0,
    }
  },
  computed:{
    ...mapGetters(["allNews"]),
  },
  beforeMount(){
    this.limit = this.$store.getters.allNews.limit;
    this.from = this.$store.getters.allNews.from;
  }
}
</script>

<style scoped>
  .news{
    padding: 60px 20px;
  }
  ul{
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
  }
  li{
    border: 1px solid #dcdcdc;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    word-wrap: break-word;
    background-color: #fff;
    max-width: 350px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 30px 30px;
  }
  img{
    display:block;
    width:100%;
  }
  a{
    text-decoration: none;
    color:#6e6e6e;
  }
  h2,h3,p{
    margin:0;
    font: 500 20px/24px 'Poppins', sans-serif;
  }
  div{
    padding: 0 30px;
    text-align:left;
  }
  h2{
    margin: 50px 0 15px;
    font-size:10px;
  }
  h3{
    margin: 20px 0;
    font-size:20px;
  }
  p{
    margin:20px 0;
    font-size:13px;
  }
  @media (min-width:768px){
    li{
      max-width:450px;
    }
  }
</style>
