<template>
    <div :class="this.home ? 'banner home' : 'banner'" :style="{ backgroundImage: 'url(' + image + ')' }">
        <div>
            <h1>{{title}}</h1>
            <button @click="scrollTo()">
                >
            </button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Banner',
  props:{
    image: String,
    title: String,
    home: Boolean
  },
  data(){
    return{
     
    }
  },
  methods:{
      scrollTo(){
        window.scroll({top:400,left:0,behavior:'smooth'})
      }
  }
}
</script>

<style scoped>
    @font-face {
    font-family: "SkateBrand";
    src: local("SkateBrand"),
    url('../assets/fonts/Skate_Brand.otf') format("truetype");
    }
    button{
        appearance: none;
        background-color: inherit;
        width: 67px;
        height: 67px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        color: #ffffff;
        transition: all ease .35s;
        position:absolute;
        bottom: 50px;
        left:50%;
        font: 500 28px/30px "Poppins",sans-serif;
        -webkit-transform:translateX(-50%) rotate(90deg);
        -ms-transform:translateX(-50%) rotate(90deg);
        transform:translateX(-50%) rotate(90deg);
        cursor:pointer;
        z-index: 12;
    }
    .banner{
        padding:84px 15px 50px;
        background:center center / cover no-repeat;
        min-height:367px;
        position:relative;  
        box-sizing: border-box;
    }
    .banner:after{
        content:'';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: rgb(0 0 0 / 40%);

    }
    h1{
        text-align: center;
    }
    .banner > div > h1{
        font-family: "SkateBrand",sans-serif;
        font-weight: 800;
        font-size: 1.8em;
        line-height: 1.7em;
        letter-spacing: 0.18em;
        color: #fff;
        display: block;
        text-shadow: 0px 0px 10px rgb(0 0 0 / 35%);
        position: relative;
        z-index: 12;
        margin-top: 70px;
    }
    .banner > div > button{

    }
    @media(min-width:601px){
        .banner{
            min-height: 397px;
        }
    }
    @media(min-width:992px){
        .banner.home{
            min-height: 587px;
        }
        .banner > div >h1{
            font-size: 3.7em;
            line-height: 3.7em;
            position: relative;
            z-index: 12;
            margin-top:60px;
        }
        .banner.home > div > h1{
            margin-top: 180px;
        }
    }
</style>
