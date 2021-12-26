<template>
    <div class="faction_focus" v-if="allFactions">
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut augue aliquam, sodales purus nec, interdum leo. Mauris ultricies cursus orci quis pellentesque. Donec dictum elit ac egestas blandit. Duis vel risus pellentesque, ultricies lacus sit amet, rutrum lacus. Vestibulum maximus, velit ultricies convallis facilisis, magna lorem dignissim massa, faucibus bibendum dolor odio non odio. Nullam lobortis orci lorem, eu interdum arcu varius at.</p>
            <ul class="grand_Alliances">
                <li>
                    <input type="checkbox" id="order" class="input"/>
                    <label for="order">
                        <figure>
                            <img src="../assets/logo_order.png" alt="Gran Alianza del Orden"/>
                            <figcaption>Gran Alianza del orden</figcaption>
                        </figure>
                    </label>
                    <ul>
                        <li v-for="faction in getOrderFactions" :key="faction.name">
                            <router-link :to="{
                                path: '/faction/'+faction.url
                                }" :title="faction.name">
                                <img :src="faction.logo_img"/>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="caos" class="input"/>
                    <label for="caos">
                        <figure>
                            <img src="../assets/logo_chaos.png" alt="Gran Alianza del Caos"/>
                            <figcaption>Gran Alianza del caos</figcaption>
                        </figure>
                    </label>
                    <ul>
                        <li v-for="faction in getChaosFactions" :key="faction.name">
                            <router-link :to="{
                                path: '/faction/'+faction.url
                                }" :title="faction.name">
                                <img :src="faction.logo_img"/>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="death" class="input"/>
                    <label for="death">
                        <figure>
                            <img src="../assets/logo_death.png" alt="Gran Alianza de Muerte"/>
                            <figcaption>Gran Alianza de Muerte</figcaption>
                        </figure>
                    </label>
                    <ul>
                        <li v-for="faction in getDeathFactions" :key="faction.name">
                            <router-link :to="{
                                path: '/faction/'+faction.url
                                }" :title="faction.name">
                                <img :src="faction.logo_img"/>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="destruction" class="input"/>
                    <label for="destruction">
                        <figure>
                            <img src="../assets/logo_destruction.png" alt="Gran Alianza de Destrucción"/>
                            <figcaption>Gran Alianza de Destrucción</figcaption>
                        </figure>
                    </label>
                    <ul>
                        <li v-for="faction in getDestructionFactions" :key="faction.name">
                            <router-link :to="{
                                path:'/faction/'+faction.url}" :title="faction.name">
                                <img :src="faction.logo_img"/>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'factionFocus',
    props:{
    
    },
    computed:{
        ...mapGetters(["allFactions"]),
        getOrderFactions(){
            return this.$store.getters.getFactionByAlliance('orden')
        },
        getChaosFactions(){
            return this.$store.getters.getFactionByAlliance('caos')
        },
        getDeathFactions(){
            return this.$store.getters.getFactionByAlliance('muerte')
        },
        getDestructionFactions(){
            return this.$store.getters.getFactionByAlliance('destrucción')
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
    .faction_focus{
        padding: 25px 15px;
        font: 500 16px/20px 'Poppins',sans-serif;
    }
    .faction_focus > div{
        max-width: 1200px;
        margin:0 auto;
    }
    .grand_Alliances{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .grand_Alliances > li{
        width:100%;
    }
    .grand_Alliances li ul{
    font-size: 15px;
    font-weight: 300;
    max-height: 0;
    overflow: hidden;
    -webkit-transition: .5s;
    -o-transition: .5s;
    -ms-transition: .5s;
    -moz-transition: .5s;
    transition: .5s;
    -moz-opacity: 0;
    -khtml-opacity: 0;
    -webkit-opacity: 0;
    opacity: 0;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
    filter: alpha(opacity=0);
    position: relative;
    overflow: hidden;
    transition:.5s ease-in;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    }
    .grand_Alliances li ul li{
        padding:5px;
    }
    .grand_Alliances li ul img{
        width: 100px;
    }
    .grand_Alliances input:checked ~  ul{
      
    max-height: 600px;
    -moz-opacity: 1;
    -khtml-opacity: 1;
    -webkit-opacity: 1;
    opacity: 1;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
    filter: alpha(opacity=100);
    padding-bottom: 25px;
    }
    .input{
        position: fixed;
        top:0;
        left:-500px;
    }
    figcaption{
        font: 700 18px/24px "SkateBrand",sans-serif;
    }
    figure img{
        max-width: 250px;
        width:100%;
    }
    label{
        display: inline-block;
        cursor: pointer;
    }
    @media(min-width:601px){
        .grand_Alliances > li{
            width:50%;
        }
    }
</style>
