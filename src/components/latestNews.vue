<template>
    <div class="news_home">
        <h2>Notícias destacadas</h2>
        <ul>
            <li v-for="(latestNew,index) in news" :key="index">
                <router-link :to="'/news/'+latestNew.url">
                    <img :src="latestNew.img" :alt="latestNew.description"/>
                    <h3>{{latestNew.title}}</h3>
                    <p>{{latestNew.created_at}}</p>
                </router-link>
            </li>
        </ul>
        <div id="dat"/>
    </div>
</template>

<script>
import news from '../news.json';
export default {
  name: 'latestNews',
   data(){
    return{
      news: [],
      body:"https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/test.html?alt=media&token=77039258-2781-4f8d-bbb6-c208152d5f28"
    }
  },
  created(){
    this.news = news.home_news
  }
}
</script>

<style scoped>
  .news_home{
    padding:20px;
    font: 700 18px/24px 'Roboto',sans-serif;
  }
  .news_home > ul{
    padding:0;
    margin:0;
    list-style: none;
  }
  .news_home > ul > li > a{
    display:flex;
    flex-direction: column;
    text-decoration: none;
    color:#2c3e50;
  }
  .news_home > ul > li > a > img{
    display:block;
    width:100%;
  }
</style>
