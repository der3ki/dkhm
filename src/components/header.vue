<template>
  <header class="header" :class="{scrolled: scrollPosition > 50}"> 
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
                    <router-link :to="category.url" active="active">{{category.name}}</router-link>
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
            scrollPosition: null
        }
    },
    methods:{
        clickCategory(){
           document.getElementById('header_dkhm_mobile').click();
        },
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },mounted() {
        window.addEventListener('scroll', this.updateScroll);
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
    background-color:#404044;
    padding:10px;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index: 200;
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
    top: 84px;
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
    font: 500 18px/24px  'Poppins', sans-serif;
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
    padding: 15px 0 15px 15px;
    display: block;
    transition: .3s ease-in;
    text-transform: capitalize;
    font-size: 14px;
    line-height: 34px;
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
    header{
        padding:10px;
    }
    .container{
        max-width: 1200px;
        margin:0 auto;
    }
    nav{
        order:2
    }
    nav > label{
        display:none;
    }
    nav > a{
        order:1
    }
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
        border-right: none;
    }
    .categories > li{
        padding:10px;
        text-align:center;  
    }
    .categories > li > a{
        color:#999;
        position: relative;
        font-family: "Poppins", sans-serif;
        color: #ffffff;
        font-size: 12px;
        line-height: 1.2;
        transition: .25s;
        text-transform: uppercase;
        padding:10px 0 0 10px;
        letter-spacing: 2.2px;
    }
    .categories > li > a:hover{
        background-color: inherit;
    }
    .categories > li > a:after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        display: inline-block;
        height: 1px;
        width:0;
        background-color: transparent;
        transition: all ease .35s;
    }
    .categories > li > a.router-link-active{
        background-color:inherit;
    }
    .categories > li > a.router-link-active:after{
        width:100%;
    }
     .categories > li > a.router-link-active:hover{
        background-color: inherit;
     }
    .categories > li > a:hover:after{
        width:100%;
        background-color:#ffffff;
    }
    
}


</style>
