<template>
  <div class="background">
    <div>
        <h2>Bienvenidos a la sección de trasfondo</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit urna nec dui hendrerit, vitae porta lorem pharetra. Etiam eu lacinia mi. Nam ante est, commodo ut iaculis sit amet, consectetur vel purus. Duis a velit laoreet, volutpat nibh ac, hendrerit ante. In auctor sit amet lorem ac feugiat. Proin ornare ligula massa, nec faucibus lacus tempus ut. In posuere orci elementum ex commodo, a suscipit ipsum ullamcorper. Nulla pharetra enim a nibh venenatis aliquet.
        </p>
        <p>
          Puedes consultar la sigmaroteca, haciendo click <a href="https://ageofsigmar.fandom.com/es/wiki/Sigmaroteca" target="_blank" title="Sigmaroteca">aquí</a>
        </p> 
        <h3>Consulta nuestros vídeos de lore</h3>
        <ul>
          <li>
            <input type="checkbox" class="input_checkbox" id="broken_realms"/>
            <label for="broken_realms">Broken Realms</label>
            <ul class="background_data">
              <li v-for="(broken_realms,index) in getBrokenRealms" :key="index">
                <a :href="broken_realms.url" :title="broken_realms.title" target="_blank"> {{ broken_realms.title}}</a>
              </li>
            </ul>
          </li>
          <li>
            <input type="checkbox" class="input_checkbox" id="background"/>
            <label for="background">Trasfondo</label>
            <ul class="background_data">
              <li v-for="(background,index) in getBackground" :key="index">
                <a :href="background.url" :title="background.title" target="_blank"> {{ background.title}}</a>
              </li>
            </ul>
          </li>
          <li>
            <input type="checkbox" class="input_checkbox" id="dkhm_coffe"/>
            <label for="dkhm_coffe">DKHM Café</label>
            <ul class="background_data">
               <li v-for="(dkhm_coffe,index) in getDkhmCoffe" :key="index">
                <a :href="dkhm_coffe.url" :title="dkhm_coffe.title" target="_blank"> {{ dkhm_coffe.title}}</a>
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
  name: 'background',
  components: {
  },
  computed:{
    ...mapGetters(["getBackground","getBrokenRealms","getDkhmCoffe"]),
  }
}
</script>

<style scoped>
  .background{
    padding:25px 15px;
  }
  .background_data{
    font-size: 15px;
    font-weight: 300;
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  input:checked  ~ .background_data{
    max-height: 600px;
    -moz-opacity: 1;
    -khtml-opacity: 1;
    -webkit-opacity: 1;
    opacity: 1;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
    filter: alpha(opacity=100);
    padding-bottom: 25px;
  }
</style>
