<template>
    <div class="circuitoNacional">
        <div class="container">
          <p class="container__description">
            Este proyecto no habría sido posible sin la colaboración cómo esta. Una comunidad en la que tú, que lees esto, eres una pieza imprescindible de su motor. Gracias por todo tu apoyo
          </p>
          <p class="container__description">
            En esta sección podrás encontrar toda la información oficial sobre el torneo, para verlo, haz click <a href="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/GT_ESP_FINAL_.pdf?alt=media&token=d8da7979-891d-4cf8-9567-f45f83415c27" title="Ver las bases, haciendo click aquí" target="_blank">aquí</a>
          </p>
           <p class="container__description">
            <b>Atención!! Puedes encontrar las bases para el segundo circuito nacional, para verlo, haz click <a href="https://firebasestorage.googleapis.com/v0/b/dkhm2-5d202.appspot.com/o/Bases%20CND%20v1.2.pdf?alt=media&token=424d3887-9630-4450-a411-fdd53820b21f" title="Ver las bases, haciendo click aquí" target="_blank">aquí</a></b>
          </p>
          <ul class="container_gt">
            <li>
              <h3>Circuito individual</h3>
            </li>
            <li class="container__palmares_positions container_palmares__header">
              <div>Torneo</div>
              <div>Lugar</div>
              <div>Fecha</div>
              <div>Correo</div>
            </li>
            <li v-for="(gt, index) in gt_individuales" :key="index" class="container__palmares_positions">
              <div class="list__item">{{gt.title}}</div>
              <div class="list__item">{{gt.ubicaciones}}</div>
              <div class="list__item">{{gt.Fecha}}</div>
              <div class="list__item" v-if="gt.mail">
                Enviar correo <a :href="'mailto:'+gt.mail" title="Enviar correo a la sede" target="_blank">aquí</a>
              </div>
            </li>
          </ul>
          <ul class="container_gt">
            <li>
              <h3>Circuito por equipos</h3>
            </li>
              <li class="container__palmares_positions container_palmares__header">
              <div>Torneo</div>
              <div>Lugar</div>
              <div>Fecha</div>
              <div>Correo</div>
            </li>
            <li v-for="(gt, index) in gt_equipos" :key="index" class="container__palmares_positions">
                <div class="list__item">{{gt.title}}</div>
                <div class="list__item">{{gt.ubicaciones}}</div>
                <div class="list__item">{{gt.Fecha}}</div>
                <div class="list__item" v-if="gt.mail">
                  Enviar correo <a :href="'mailto:'+gt.mail" title="Enviar correo a la sede" target="_blank">aquí</a>
                </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import circuito_nacional from '../circuito_nacional.json'
export default {
  name: 'circuitoNacional',
  data(){
    return{
      gt_individuales: circuito_nacional.circuito_individual,
      gt_equipos: circuito_nacional.circuito_equipos
    }
  }
}
</script>

<style scoped>
  .circuitoNacional{
    position: relative;
    overflow: hidden;
  }
  .container{
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px 15px;
  }
  .list{
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
  }
  .list__item{
    width:25%;
  }
  .container_palmares__header{
    background-color:#404044;
    color:#ffffff;
    text-align:left;
  }
  .container_gt{
    margin:50px 0;
    position: relative;
    overflow-x: scroll;
  }
  .container__palmares_positions{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        border-bottom:1px solid #404044;
        text-align:left;
        padding: 10px;
        font:300 16px/1.5 'Poppins',sans-serif;
        min-width:450px;
        margin: 0 auto;

    }
    .container__palmares_positions div{
        width: 25%;
        padding: 10px;
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        font-size:13px;
    }
    @media(min-width:768px){
      .container_gt{
        overflow-x: hidden;
      }
      .container__palmares_positions{
        max-width: 600px;
        width: 100%;
        border-left:1px solid #404044;
        border-right: 1px solid #404044;
      }
      .container__palmares_positions div{
        font-size:14px;
      }
    }
    @media(min-width: 1024px){
      .container__palmares_positions{
        max-width: 800px;
      }
    }
</style>
