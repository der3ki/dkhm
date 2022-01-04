<template>
    <div :class="this.home ? 'news_home home':'news_home'">
      <article>
        <header>
          <h2>Notícias destacadas</h2>
          <h3>En esta sección podrás ver las últimas notícias y estar al día de la nueva edición de Age of sigmar</h3>
        </header>
        <section>
          <ul>
              <li v-for="(latestNew,index) in latestNews" :key="index">
                <img :src="latestNew.img" :alt="latestNew.description"/>
                <div>
                  <h4>{{latestNew.title}}</h4>
                  <p>{{latestNew.description}}</p>
                  <router-link :to="{
                    path: '/news/'+latestNew._id,
                  }">Ver más</router-link>
                </div>
              </li>
          </ul>
        </section>
      </article>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'latestNews',
   data(){
    return{
      news: [],
      body:"https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/test.html?alt=media&token=77039258-2781-4f8d-bbb6-c208152d5f28"
    }
  },
  props:{
    home: Boolean,
  },
  methods:{
   
  },
  computed:{
    ...mapGetters(["latestNews"]),
  }
}
</script>

<style scoped>
  .news_home.home{
    padding:20px;
  }
  .news_home{
    text-align: left;
  }
  .news_home > article{
    max-width: 1200px;
    margin:0 auto;
  }
  .news_home > article > header > h2{
    font: 500 24px/1.5 'Poppins',sans-serif;
    position:relative;
    text-align: center;
  }
  .news_home > article > header > h2:after{
    content: '';
    position: absolute;
    left: 0;
    right: 0px;
    bottom: 0;
    height: 2px;
    background-color: #2c343b;
  }
  .news_home > article > header > h3{
    font: 300 16px/1.5 'Poppins',sans-serif;
    text-align: justify;
  }
  .news_home > article > section > ul{
    padding:0;
    margin:0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .news_home > article > section > ul > li{
    background-color: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    margin:15px 0;
  }
  .news_home > article > section > ul > li > img{
    display:block;
    width:100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius:20px
  }
  .news_home > article > section > ul > li > div{
    padding:20px;
    font:400 14px/18px "Montserrat", serif
  }
  .news_home > article > section > ul > li > div > h4{
    margin:0;
    min-height: 35px;
  }
  .news_home > article > section > ul > li > div > p{
    color:#888888;
    font-size:12px;
    min-height: 55px;
  }
  .news_home > article > section > ul > li > div > a{
    display:flex;
    flex-direction: column;
    text-decoration: none;
    color:#3b91f7;
  }
  @media (min-width:601px){
    .news_home{
      padding:50px;
    }
    .news_home > article > header{
      text-align: center;
      max-width: 500px;
      margin:0 auto;
    }
    .news_home > article > header > h2{
      display:inline-block;
      padding-bottom:10px;
      margin:0;
    }
    .news_home > article > header > h2:after{
      left:70px;
      width:100px;
    }
    .news_home > article > section > ul {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .news_home > article > section > ul > li{
      max-width: 400px;
      margin: 15px;
      width:100%;
    }
  }
  @media(min-width:768px){
    .news_home > article > section > ul > li > img{
      height: 28vh;
    }
  }
  @media (min-width:992px){
    .news_home > article > section > ul > li{

      width: calc(50% - 10px);
      min-height: 415px;
    .news_home > article > section > ul > li > img{
      height: 28vh;
    }
  }
</style>
