<template>
  <div class="slider">
      <template v-if="$isMobile()">
      <carousel-3d :autoplay="true" :autoplayTimeout="5000" :width="280" :height="250" :border="3" :controlsVisible="true"> 
      <slide v-for="(category, index) in categories" :key="index" :index="index">
          <div class="slider_element" :style="{backgroundImage: 'url('+category.img_desktop+')'}">
              <p>{{category.title}}</p>
              <router-link :to="category.url">Ver más</router-link>
          </div>
      </slide>
      </carousel-3d>
      </template>
      <template v-else>
      <carousel-3d :autoplay="true" :autoplayTimeout="5000" :width="600" :height="450" :border="3" :controlsVisible="true" :clickable="false">
          <slide v-for="(category, index) in categories" :key="index" :index="index">
              <div class="slider_element" :style="{backgroundImage: 'url('+category.img_desktop+')'}">
                  <p>{{category.title}}</p>
                  <router-link :to="category.url">Ver más</router-link>
              </div>
          </slide>
      </carousel-3d>
      </template>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import categories from '../categories.json';
export default {
  name: 'Slider',
  components: {
    Carousel3d,
    Slide
  },
  data(){
    return{
      categories: categories.categories
    }
  }
}
</script>

<style scoped>
    .slider{
        margin:0 0;
        padding: 50px 0;
        max-width: 1055px;
        margin:0 auto;
    }
    .slider >>> .carousel-3d-container{
      margin:0;
    }
    .slider >>> .slider_element{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display:flex;
        flex-direction:column;
        align-items: flex-start;
        justify-content: flex-end;
        height:100%;
        font: 700 18px/24px 'Roboto',sans-serif;
        padding:0 15px;
        color:#fff;
        cursor:pointer;
    }
    .slider >>>  .slider_element p{
        margin:10px 0;
    }
    .slider >>> .slider_element a{
        text-decoration: none;
        margin: 10px 0;
        padding: 5px;
        background: #fff;
        color: #000;
        border-radius: 5px;
        font-size: 14px;
    }
</style>
