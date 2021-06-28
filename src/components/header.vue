<template>
  <header class="header">
      
    <input tabindex="-1" type="checkbox" id="header_dkhm_mobile"/>
    <div class="container">
        <nav>
            <label for="header_dkhm_mobile">
                <span></span>
            </label>
            <ul class="categories">
                <li @click="clickCategory()">
                    <router-link to="/home">
                        Home
                    </router-link>
                </li>
                <li v-for="(category,index) in categories" :key="index" @click="clickCategory()">
                    <router-link :to="category.url" :active="isActive">{{category.name}}</router-link>
                </li>
            </ul>
            <label></label>
        </nav>
        <router-link to="/home">
            <img src="../assets/logo.png" alt="DKHM"/>
        </router-link> 
    </div>
     
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
    position: relative;
    width: 48px;
    height: 48px;
    line-height: 48px;
    cursor: pointer;
    color: #cccccc;
    background-color: transparent;
    border: none;
    display: inline-block;
    
}
nav > label > span{
    position: relative;
    display: block;
    margin: auto;
    transition: .3s all ease;
    transform: rotate(180deg);
    width: 24px;
    height: 4px;
    background-color: #cccccc;
    backface-visibility: hidden;
    border-radius: 0;
    top: 50%;
    transform: translate(-50%);
}
nav > label > span:before, nav > label > span:after{
    content: "";
    position: absolute;
    left: 0;
    top: -8px;
    transition: .3s all ease;
    transform-origin: 1.71429px center;
    width: 24px;
    height: 4px;
    background-color: #cccccc;
}
nav > label > span:after{
    top:8px;
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
    left: 0;
}
#header_dkhm_mobile:checked  ~ div label > span{
    transform: rotate(360deg);
}
#header_dkhm_mobile:checked  ~ div label > span:before,#header_dkhm_mobile:checked  ~ div label > span:after{
    top: 0;
    width: 15px;
}
#header_dkhm_mobile:checked  ~ div label > span:before{
    -webkit-transform: rotate3d(0, 0, 1, -40deg);
    transform: rotate3d(0, 0, 1, -40deg);
}
#header_dkhm_mobile:checked  ~ div label > span:after{
    -webkit-transform: rotate3d(0, 0, 1, 40deg);
    transform: rotate3d(0, 0, 1, 40deg);
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
    right: auto;
    top: 104px;
    left: -270px;
    bottom: 0;
    z-index: 1;
    margin: 0;
    background: #fff;
    width: 270px;
    overflow: auto;
    -webkit-box-shadow: 0 0 0 99999px transparent;
    -moz-box-shadow: 0 0 0 99999px transparent;
    box-shadow: 0 0 0 99999px transparent;
    -webkit-transition: left 1s,box-shadow 1s;
    -o-transition: left 1s,box-shadow 1s;
    -ms-transition: left 1s,box-shadow 1s;
    -moz-transition: left 1s,box-shadow 1s;
    transition: left 1s,box-shadow 1s;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #d7d7d7;
}
.categories > li{
    text-transform: uppercase;
    text-align: left;
    font: 500 18px/24px  'Roboto', sans-serif;
    cursor:pointer;
    margin:0;
}
.categories > li > label{
    width:30px;
    fill:#9b9b9b;
}
.categories > li > a{
    color: #9b9b9b;
    text-decoration: none;
    padding: 25px 0 15px 15px;
    display: block;
    transition: .3s ease-in;
}
.categories > li > a:hover{
    background-color:#505cfd;
    color:#ffffff;
}
.categories > li > a.router-link-active{
    background-color:#505cfd;
    color:#ffffff;
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
