<template>
    <ul class="card"> 
        <li v-for="player in players" :key="player._id" class="card__element" :class="player.emptyTitle? 'card__element_empty':''">
            <div v-if="!player.emptyTitle">
                <div class="card__element__image">
                    <img :src="player.image" alt="" />
                </div>
                <div class="card__element__name" v-if="!player.emptyTitle">
                    <h3 class="card__element__title">{{player.name}}</h3>
                    <h4 class="card__element__subtitle">{{player.alias}}</h4>
                </div>
                <p class="card__element__description">{{player.description}}</p>
                <p class="card__element__armies">
                    <b>Ejércitos: </b>
                    <span v-for="(armies,index) in player.armies" :key="armies.id">
                        {{ armies.name}} 

                        <span v-if="index != Object.keys(player.armies).length - 1">,</span>
                    </span>
                </p>
            </div>
            <div v-else>
                <div class="card__element_empty">
                    {{player.emptyTitle}}
                </div>
            </div>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'cardTeam',
  props:{
    players: Array
  },
  data(){
    return{
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
    img{
        display: block;
        width: 100%;
        height: 100%;
        max-height: 350px;
    }
    .card{
       display:flex;
       flex-direction:row;
       align-items: flex-start;
       flex-wrap: wrap;
       justify-content: center;
    }
    .card__element{
       width:100%;
       margin:20px;
       text-align: center;
    }
    .card__element__name{
        padding: 10px;
        border-left:3px solid #ff0000;
        background: #f3f3f3;
        margin: 0 10px;
    }
    .card__element__title, .card__element__subtitle, .card__element_empty{
        margin:0;
        font:500 16px/1.5 'Poppins',sans-serif;
        text-align: left;
    }
    .card__element__subtitle{
        font-size:14px;
        color:#767474;
    }
    .card__element__description{
        padding:10px;
        font:300 14px/1.5 'Poppins',sans-serif;
        text-align: left;
    }
    .card__element__image{
        text-align: center;
        margin-bottom: 20px;
    }
    .card__element_empty{
        text-align: center;
        width:100%;
    }
    .card__element__armies{
        text-align: left;
        padding:10px;
    }
   @media (min-width: 601px) {
        .card__element{
            width:calc(25% - 40px);
            margin:0 20px;
        }
         .card__element_empty{
            width:100%;
        }
    }
</style>
