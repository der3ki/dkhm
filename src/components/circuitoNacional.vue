<template>
    <div>
        <div class="container">
            <h2>Circuito Nacional</h2>
              <p class="container__description">
                Este proyecto no habría sido posible sin la colaboración cómo esta. Una comunidad en la que tú, que lees esto, eres una pieza imprescindible de su motor. Gracias por todo tu apoyo
              </p>
              <p class="container__description">
                En esta sección podrás encontrar toda la información oficial sobre el torneo, para verlo, haz click <a href="https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/GT_ESP-1.pdf?alt=media&token=4c5ea018-9c96-4129-b3e7-0592951bf662" title="Ver las bases, haciendo click aquí" target="_blank">aquí</a>
              </p>
              <ul>
                <li>
                  <h3>Circuito individual</h3>
                </li>
                <li v-for="(gt, index) in gt_individuales" :key="index" class="placement">
                  <div class="list">
                    <p class="list__item">{{gt.title}}</p>
                    <p class="list__item">{{gt.ubicaciones}}</p>
                    <p class="list__item">{{gt.Fecha}}</p>
                    <p class="list__item" v-if="gt.mail">
                      Enviar correo <a :href="'mailto:'+gt.mail" title="Enviar correo a la sede" target="_blank">aquí</a>
                    </p>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <h3>Circuito por equipos</h3>
                </li>
                <li v-for="(gt, index) in gt_equipos" :key="index" class="placement">
                  <div class="list">
                    <p class="list__item">{{gt.title}}</p>
                    <p class="list__item">{{gt.ubicaciones}}</p>
                    <p class="list__item">{{gt.Fecha}}</p>
                    <p class="list__item" v-if="gt.mail">
                      Enviar correo <a :href="'mailto:'+gt.mail" title="Enviar correo a la sede" target="_blank">aquí</a>
                    </p>
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
  ul > li:last-of-type{
    border-bottom:1px solid #ff0000;
  }
  .container{
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
  }
  .placement:first-of-type{
    border-bottom:none;
  }
  .placement{
    border-top:1px solid #ff0000;
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
</style>
