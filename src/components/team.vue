<template>
    <div>
        <h2>Equipo</h2>
        <p>{{getTeam.description}}</p>

       
        <cardTeam :players="getTeam.players"/>
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
            
        }
    },
    computed:{
        ...mapGetters(["getTeam"]),
    }
}
</script>

<style scoped>
    
</style>
