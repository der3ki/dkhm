<template>
    <div class="container">
        <h2>Equipo</h2>
        <p>{{getTeam.description}}</p>

        <ul class="container__menu">
            <li class="container__menu__list-item" v-for="armies in getArmies" :key="armies.id">
                <button class="container__menu__list-item__button" @click="getArmyByPlayer(armies.id)">
                    <img class="container__menu__list-item__button__image" :src="armies.img" :alt="armies.name" />
                </button>
            </li>
        </ul>
        <cardTeam :players="players" class="container_players"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import cardTeam from './cardTeam.vue';
export default {
    name: 'Team',
    components:{
        cardTeam
    },
    data(){
        return{
            getPlayersByArmies:[],
            loading: true,
            armyWithoutPlayers: "Actualmente no hay jugadores en el equipo que juegen este ejército"
        }
    },
    methods:{
        getArmyByPlayer(id){
            this.getPlayersByArmies = [];
            this.getTeam.players.map(playerArmies=>{
               playerArmies.armies.forEach(armiesPlayer=>{
                   if(armiesPlayer.id === id) this.getPlayersByArmies.push(playerArmies) 
               }) 
            });
            if(this.loading === true) this.loading = false;
        },
        returnTeam(){
            return this.getTeam.players
        }
    },
    created(){
        
       
    },
    computed:{
        ...mapGetters(["getTeam","getArmies"]),
        players(){
            let players = this.getPlayersByArmies.length > 0 ? this.getPlayersByArmies : this.loading === true ? this.getTeam.players : [{emptyTitle:this.armyWithoutPlayers}]
            return players;
        },
       
    }
}
</script>

<style scoped>
    .container{
        margin:0 auto;
        max-width: 1200px;
    }
    .container__menu{
        display:flex;
        flex-wrap:wrap;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }
    .container__menu__list-item{
        margin:10px;
        width:70px;
    }
    .container__menu__list-item__button{
        width:100%;
        padding:0;
        appearance: none;
        border: none;
        cursor:pointer;
    }
    .container__menu__list-item__button__image{
        width:100%;
    }
    .container_players{
        margin:50px 0 20px;
    }
</style>
