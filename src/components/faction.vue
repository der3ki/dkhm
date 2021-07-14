<template>
    <div class="faction">
        {{this.faction}}
        <li v-if="this.faction">
            
            <input type="checkbox" :id="this.faction"/>
            <label for="order">
                <figure>
                    <img src="" :alt="this.faction"/>
                    <figcaption>Gran Alianza del {{this.faction}}</figcaption>
                </figure>
            </label>
            <ul>
                <template v-if="this.faction === 'order'">
                    <li v-for="faction in getOrderFactions" :key="faction.name">
                        <img :src="faction.logo_img"/>
                    </li>
                </template>
                <template v-if="this.faction === 'caos'">
                    <li v-for="faction in getCaosFactions" :key="faction.name">
                        <img :src="faction.logo_img"/>
                    </li>
                </template>
                <template v-if="this.faction === 'muerte'">
                    <li v-for="faction in getDeathFactions" :key="faction.name">
                        <img :src="faction.logo_img"/>
                    </li>
                </template>
                <template v-if="this.faction === 'destrucción'">
                    <li v-for="faction in getDestructionFactions" :key="faction.name">
                        <img :src="faction.logo_img"/>
                    </li>
                </template>
            </ul>
        </li>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'faction',
    props:{
        faction:String
    },
    computed:{
        ...mapGetters(["allFactions"]),
        getOrderFactions(){
            return this.$store.getters.getFactionByAlliance('orden')
        },
      
    },
 
}
</script>

<style scoped>
    @font-face {
    font-family: "SkateBrand";
    src: local("SkateBrand"),
    url('../assets/fonts/Skate_Brand.otf') format("truetype");
    }
    
</style>
