<template>
  <div class="background">
    <div>
      <div>
        <p>
          Este es nuestra biblioteca, o mejor dicho la "Sigmaroteca", donde podrás encontrar el trasfondo y cronología de Age of Sigmar así como de todas las facciones que luchan por sus metas en los 8 Reinos Mortales.
        </p>
        <p>
          Puedes consultar la sigmaroteca, <b>haciendo click
          <a
            href="https://ageofsigmar.fandom.com/es/wiki/Sigmaroteca"
            target="_blank"
            title="Sigmaroteca"
            > aquí</a> </b>
        </p>
        <iframe
          src="https://www.youtube.com/embed/EE_MmxtpI6g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>Consulta nuestras listas de trasfondo de Age of Sigmar</h3>
        <p>
          Si te gustan los podcast o los vídeos de trasfondo de Age of Sigmar, desde DKHM hemos preparado un listado de vídeos especialmente para ti.
          Siente el lore desde las facciones de los ejércitos hasta las historias más épicas de BROKEN REALMS.
        </p>
        <p>
          También puedes escuchar nuestras charlas con diferentes puntos de vista en nuestro DKHM Café
        </p>
      </div>
    </div>
    <bannerColumn />
  </div>
</template>

<script>
import bannerColumn from "./bannerColumn.vue";
export default {
  name: "background",
  components: {
    bannerColumn,
  },
};
</script>

<style scoped>
  .background{
    padding:25px 15px 0;
  }
  .background > div{
    max-width: 1200px;
    margin:0 auto;
    text-align: justify;
  }
  iframe{
    width:100%;
    min-height: 50vh;
  }
  ul{
    margin:25px -15px 0;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
  }
  ul > li {
    width:100%;
    padding: 50px 0;
    background-size: cover;
    background-position: center center;
  }
  ul p{
    color:#ffffff;
  }
  a{
    text-decoration: none;
    font:700 16px/1.5 'Poppins',sans-serif;
    color:blue;
  }
  @media(min-width:768px){
    ul{
      flex-direction: row;
    }
    iframe{
      height: 500px;
      min-height: 70vh;
    }
  }
</style>
