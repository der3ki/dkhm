<template>
    <div class="container">
        <h2>Equipo</h2>
        <p>{{getTeam.description}}</p>
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

           
        }
    },
    computed:{
        ...mapGetters(["getTeam","getArmies"]),
        players(){
            return this.getTeam.players
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
