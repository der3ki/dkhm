<template>
    <div class="about_dkhm">
        <div>
            <h1>Bienvenidos a DKHM Wargames</h1>
            <p>
                DKHM es un canal dedicado a los Wargames, concretamente a los universos de Warhammer y, más aún, a Age of Sigmar.
                Síguenos, ya seas de Sigmar o Nagash (o de Khorne, o de Gorkamorka, o de Archaon, o de...) y disfrutemos este viaje por los Reinos Mortales.
            </p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'aboutDKHM',
  data(){
    return{
     
    }
  }
}
</script>

<style scoped>
    .about_dkhm{
        font: 300 18px/24px 'Roboto',sans-serif;
        padding: 20px;
    }
    .about_dkhm > div{
        padding: 20px;
        background: #fff;
        -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.85); 
        box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.85);
        max-width: 800px;
        margin:0 auto;
    }
</style>
