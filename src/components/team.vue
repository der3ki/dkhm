<template>
    <div class="container">
        <h2>Equipo</h2>
        <p class="container__description">{{getTeam.description}}</p>
        <div class="container__cards">
            <input type="checkbox" id="container__cards" class="input"/>
            <h3>Para ver más miembros del equipo, haz click <label for="container__cards"> aquí</label></h3>
            <cardTeam :players="players" class="container_players"/>
        </div>
        <h2>Palmarés del equipo</h2>
        <div class="container__palmares">
            <input type="checkbox" id="container__cards" class="input"/>
            <ul>
                <li v-for="(titulos,index) in palmares.gt_individuales" :key="index">
                    <h4>{{titulos.title}}</h4>
                    <ul>
                        <li class="container__palmares_positions">
                            <div>Nombre</div>
                            <div>Puesto</div>
                            <div>Ejército</div>
                        </li>
                        <li v-for="(positions,index) in titulos.positions" :key="index" class="container__palmares_positions">
                            <div class="container__palmares__podium__text">
                                <p>{{positions.number}}</p>
                            </div>
                            <div class="container__palmares__podium__text">
                                <p>{{positions.name}}</p>
                            </div>
                            <div class="container__palmares__podium__text">
                                <p>{{ positions.army}}</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import cardTeam from './cardTeam.vue';
import palmares from '../palmares.json'
export default {
    name: 'Team',
    components:{
        cardTeam
    },
    data(){
        return{
            getPlayersByArmies:[],
            palmares: palmares
           
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
    h3{
        font:500 16px/1.5 'Poppins',sans-serif;
    }
    h4{
        font-size:16px;
    }
    #container__cards{
        position:absolute;
        top:0;
        left:-9999px;
        z-index: -12;
    }
    .container{
        margin:0 auto;
        max-width: 1200px;
        padding:0 20px;
    }
    .container__description{
        font-size:18px
    }
    .container_players{
        max-height: 0;
        overflow: hidden;
        transition: .5s;
        -moz-opacity: 0;
        -khtml-opacity: 0;
        -webkit-opacity: 0;
        opacity: 0;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
        filter: alpha(opacity=0);
        position: relative;
        overflow: hidden;
        transition: .5s ease-in;
        margin:0;
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
  
    #container__cards:checked ~ .container_players{
        max-height: 3000px;
        transition: .5s ease-in;
        -moz-opacity: 1;
        -khtml-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=1);
        filter: alpha(opacity=1);
        margin:50px 0 20px;
    }
    .container__palmares{
        font:500 18px/1.5 'Poppins',sans-serif;
    }
    .container__palmares_positions{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin:20px 0;
    }
    .container__palmares__podium__text{
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
    }
    .container__palmares_positions div{
        width: 33%;
        padding: 10px;
        box-sizing: border-box;
    }
    .container__palmares__podium__text p{
        margin:0;
    }
</style>
