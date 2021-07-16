<template>
    <div class="faction" v-if="getFactionByName">
       <div>
            <div class="basic_concepts faction_prop">
                <h2>{{getFactionByName.basic_concepts.name}}</h2>
                <p> {{ getFactionByName.basic_concepts.body}}</p>
                
            </div>
             <div class="pros_and_cons faction_prop">
                <h2>{{getFactionByName.pros_and_cons.name}}</h2>
                <h3>Pros</h3>
                <ul>
                    <li v-for="pros in getFactionByName.pros_and_cons.pros" :key="pros">
                        {{pros}}
                    </li>
                </ul>
                <h3>Cons</h3>
                <ul>
                    <li v-for="cons in getFactionByName.pros_and_cons.cons" :key="cons">
                        {{cons}}
                    </li>
                </ul>
            </div>
            <div class="subfactions faction_prop">
                <h2>{{getFactionByName.subfactions.name}}</h2>
                <ul>
                    <li v-for="(subfaction,index) in getFactionByName.subfactions.total" :key="index">
                        <input type="checkbox" :id="'faction_'+index" class="input"/>
                        <h3><label :for="'faction_'+index">{{subfaction.subfaction_name}}</label></h3>
                        
                        <div class="subfaction">
                            <div class="section_subfaction" v-if="subfaction.hability">
                                <p class="hability">Habilidad</p>
                                <p>
                                    <span class="hability_name">{{subfaction.hability.title.name}}: </span>
                                    <span class="hability_descrip">{{subfaction.hability.title.descrip}}</span>
                                </p>
                                <p v-html="subfaction.hability.body"></p>
                            </div>
                            <div class="section_subfaction" v-if="subfaction.command_ability">
                                <p class="hability">Habilidad de mando</p>
                                <p>
                                    <span class="hability_name">{{subfaction.command_ability.title.name}}: </span>
                                    <span class="hability_descrip">{{subfaction.command_ability.title.descrip}}</span>
                                </p>
                                <p v-html="subfaction.command_ability.body"></p>
                            </div>
                            <div class="section_subfaction" v-if="subfaction.command_trait">
                                <p class="hability">Rasgo de mando</p>
                                <p>
                                    <span class="must">{{subfaction.command_trait.must}}</span>
                                    <span class="hability_name">{{subfaction.command_trait.title.name}}: </span>
                                    <span class="hability_descrip">{{subfaction.command_trait.title.descrip}}</span>
                                </p>
                            <p v-html="subfaction.command_trait.body"></p>
                            </div>
                            <div class="section_subfaction" v-if="subfaction.artefact">
                                <p class="hability">Artefacto</p>
                                <p>
                                    <span class="must">{{subfaction.artefact.must}}</span>
                                    <span class="hability_name">{{subfaction.artefact.title.name}}: </span>
                                    <span class="hability_descrip">{{subfaction.artefact.title.descrip}}</span>
                                </p>
                            <p v-html="subfaction.artefact.body"></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="enhancements faction_prop" v-if="getFactionByName.enhancements">
                <h2>{{getFactionByName.enhancements.name}}</h2>
                <p>{{getFactionByName.enhancements.body}}</p>
            </div>
            <div class="tactics faction_prop" v-if="getFactionByName.tacticts">
                <h2>{{getFactionByName.tacticts.name}}</h2>
                <p> {{getFactionByName.tacticts.body}}</p>
            </div>
       </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'faction',
    computed:{
        ...mapGetters(["allFactions"]),
        getFactionByName(){
            return this.$store.getters.getFactionByName(this.$route.params.name)
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
    .faction{
        padding:0 15px;
    }
    .faction > div{
        max-width: 1200px;
        margin:0 auto;
    }
    h2{
        font:700 22px/24px "SkateBrand",sans-serif;
    }
    h3{
        font: 700 16px/22px "SkateBrand",sans-serif;
    }
    label{
        display:block;
        cursor:pointer;
    }
    h2,h3{
        letter-spacing: 1px;
    }
    p,li{
        font: 300 14px/20px "Poppins",sans-serif;
    }
    .faction_prop{
        margin:20px 0;
    }
    .input{
        position: fixed;
        top:0;
        left:-500px;
    }
    span{
        margin:10px 0;
    }
    .hability{
        font: 500 16px/22px "Poppins",sans-serif;
    }
    .hability_name{
        font-weight: 500;
        display:block;
    }
    .hability_descrip{
        font-style:italic
    }
    .subfaction{
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
    }
    .input:checked ~ div{
          max-height: 1000px;
        -moz-opacity: 1;
        -khtml-opacity: 1;
        -webkit-opacity: 1;
        opacity: 1;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
        filter: alpha(opacity=100);
        padding-bottom: 25px;
    }
    
    
</style>
