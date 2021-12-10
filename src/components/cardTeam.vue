<template>
    <ul class="card"> 
        <li v-for="player in players" :key="player._id" class="card__element">
            <p>{{player.name}}</p>
            <p>{{player.alias}}</p>
            <p>{{player.description}}</p>
            <p>
                <ul>
                    <li v-for="armies in player.players" :key="armies._id">
                        {{armies.id}}
                    </li>
                </ul>
            </p>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'cardTeam',
  props:{
    players: Object
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
   .card{
       display:flex;
       flex-direction:row;
       align-items: center;
       flex-wrap: wrap;
   }
   .card__element{
       width:calc(25% - 10px);
       margin:0 5px;
   }
</style>
