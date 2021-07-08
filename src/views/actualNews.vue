<template>
  <section>
    <Banner image="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/ageofsigmarmural.png?alt=media&token=fce2ebad-b15d-4aa7-bfe0-07a1f21c6f53"></Banner>
    <div class="news_detail">
      <div v-if="this.getNewsById">
        <img :src="this.getNewsById.img" :alt="this.getNewsById.title"/>
        <h2>{{new Date(this.getNewsById.createdat).getDate()}} {{ new Date(this.getNewsById.createdat).getMonth()+1 }} {{ new Date(this.getNewsById.createdat).getFullYear()}}</h2>
        <h3>{{this.getNewsById.description}}</h3>
        <p v-if="this.getNewsById.outstanding" class="outstanding">{{this.getNewsById.outstanding}}</p>
        <p v-html="this.getNewsById.body"></p>
      </div>
      <latestNews></latestNews>
    </div>
  </section>
</template>
<script>

import Banner from '../components/banner.vue';
import latestNews from '../components/latestNews.vue';
export default {
    name: 'ActualNews',
    components: {
      Banner,
      latestNews
    },
    data(){
      return{
        newsDetail:{},
      }
    },
    props: ['id'],
    computed:{
      getNewsById(){
        return this.$store.getters.getNewsById(this.id);
      },
    },
}
</script>

<style scoped>
img{
  width:100%;
}
h2,h3,p{
  margin:0;
}
.news_detail{
  padding: 20px;
  background-color:#fff;
  font: 500 16px/20px 'Poppins',sans-serif;
  color:#888888;
  text-align: left;
}
h2{
  font-size:14px;
  margin:20px 0;
  font-weight: 500;
}
h3{
  color:#000000;
}
p{
  font-size:14px;
  line-height: 18px;
  font-weight: 300;
}
p.outstanding, .news_detail >>> p.outstanding{
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 20px 0;
  padding: 0 15px 15px;
}
p.outstanding:after, .news_detail >>> p.outstanding:after{
  content:'';
  position:absolute;
  left:15px;
  right:15px;
  bottom:0;
  height: 2px;
  background-color:red;
}
.news_detail >>> ul{
  margin:20px 0;
}

@media (min-width:992px){
  .news_detail > div{
      max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  p.outstanding, .news_detail >>> p.outstanding{
    padding:15px 0;
  }
  p.outstanding:after, .news_detail >>> p.outstanding:after{
    left: -15px;
    right: auto;
    top: 0;
    height: auto;
    width: 3px;
  }
}
</style>
