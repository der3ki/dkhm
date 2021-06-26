<template>
  <header class="header">
      <template v-if="$isMobile()">
            <input tabindex="-1" type="checkbox" id="header_dkhm_mobile"/>
            <div class="container">
                <router-link to="/home">
                    <img src="../assets/logo.png" alt="DKHM"/>
                </router-link> 
                <nav>
                    <label for="header_dkhm_mobile">
                        <span></span>
                    </label>
                    <ul class="categories">
                        <li>
                            <label for="header_dkhm_mobile">
                                <span>Cerrar</span>
                            </label>
                        </li>
                         <li @click="clickCategory()">
                            <router-link to="/home">
                                Home
                            </router-link>
                        </li>
                        <li v-for="(category,index) in categories" :key="index" @click="clickCategory()">
                            <router-link :to="category.url">{{category.name}}</router-link>
                        </li>
                    </ul>
                    <label></label>
                </nav>
            </div>
      </template>
      <template v-else>
            <div class="container">
                <router-link to="/home">
                    <img src="../assets/logo.png" alt="DKHM"/>
                </router-link>
                <nav>
                    <ul class="categories">
                        <li @click="clickCategory()">
                            <router-link to="/home">
                                Home
                            </router-link>
                        </li>
                        <li v-for="(category,index) in categories" :key="index" @click="clickCategory()">
                            <router-link :to="category.url">
                                <span>{{category.name}}</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
      </template>
  </header>
</template>

<script>
import categories from '../categories.json'
export default {
    name: 'Header',
    data(){
        return{
            categories: categories.categories,
        }
    },
    methods:{
       clickCategory(){
           this.$isMobile() ? document.getElementById('header_dkhm_mobile').click() : '' 
       }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
nav > label{
    display:inline-block;
    vertical-align: top;
    position: relative;
    height: 35px;
    
}
nav > label > span{
    position: absolute;
    right: 0;
    top: 17px;
    height: 3px;
    width: 22px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    background: #408f1f;
}
nav > label > span:before, nav > label > span:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 6px;
    width: 100%;
    height: 100%;
    background: #408f1f;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
}
nav > label > span:after{
    top:6px;
}
header{
    background-color:#1d1d1d;
    padding:20px;
}
header > input{
    position: fixed;
    top: 0;
    left: -999px;
}
#header_dkhm_mobile:checked  ~ div .categories{
    right: 0;
    -webkit-box-shadow: 0 0 0 99999px rgb(0 0 0 / 65%);
    -moz-box-shadow: 0 0 0 99999px rgba(0, 0, 0, 0.65);
    box-shadow: 0 0 0 99999px rgb(0 0 0 / 65%);
}
.container{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.container a img{
    max-height: 60px;
}
.categories{
    position: fixed;
    left: auto;
    top: 0;
    right: -200px;
    bottom: 0;
    z-index: 1;
    margin: 0;
    background: #fff;
    width: 200px;
    overflow: auto;
    -webkit-box-shadow: 0 0 0 99999px transparent;
    -moz-box-shadow: 0 0 0 99999px transparent;
    box-shadow: 0 0 0 99999px transparent;
    -webkit-transition: right 1s,box-shadow 1s;
    -o-transition: right 1s,box-shadow 1s;
    -ms-transition: right 1s,box-shadow 1s;
    -moz-transition: right 1s,box-shadow 1s;
    transition: right 1s,box-shadow 1s;
    display: flex;
    flex-direction: column;
}
.categories > li{
    padding: 25px 15px 15px 0;
    text-transform: uppercase;
    text-align: right;
    font: 500 18px/24px  'Roboto', sans-serif;
    border-bottom: 1px solid rgba(0, 17, 27, 0.2);
    cursor:pointer;
}
.categories > li > label{
    width:30px;
    fill:#408f1f;
}
.categories > li > a{
    color: #408f1f;
    text-decoration: none;
}
@media (min-width:768px){
    .categories{
        position: initial;
        left:initial;
        top:initial;
        right: initial;
        bottom:initial;
        background:initial;
        width: auto;
        box-shadow: none;
        overflow: initial;
        flex-direction: row;

    }
    .categories > li{
        padding:25px 0 15px;
    }
    .categories > li > a{
        color:#999;
        position:relative;
        transition: .3s all ease-in;
    }
    
}

</style>
