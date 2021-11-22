<template>
  <div class="background">
    <div>
      <div>
        <h2>Bienvenidos a la sección de trasfondo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          hendrerit urna nec dui hendrerit, vitae porta lorem pharetra. Etiam eu
          lacinia mi. Nam ante est, commodo ut iaculis sit amet, consectetur vel
          purus. Duis a velit laoreet, volutpat nibh ac, hendrerit ante. In
          auctor sit amet lorem ac feugiat. Proin ornare ligula massa, nec
          faucibus lacus tempus ut. In posuere orci elementum ex commodo, a
          suscipit ipsum ullamcorper. Nulla pharetra enim a nibh venenatis
          aliquet.
        </p>
        <p>
          Puedes consultar la sigmaroteca, haciendo click
          <a
            href="https://ageofsigmar.fandom.com/es/wiki/Sigmaroteca"
            target="_blank"
            title="Sigmaroteca"
            >aquí</a
          >
        </p>
        <iframe
          src="https://www.youtube.com/embed/XFGDe7rLctc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>Consulta nuestras listas de trasfondo de Age of Sigmar</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          hendrerit urna nec dui hendrerit, vitae porta lorem pharetra. Etiam eu
          lacinia mi. Nam ante est, commodo ut iaculis sit amet, consectetur vel
          purus. Duis a velit laoreet, volutpat nibh ac, hendrerit ante. In
          auctor sit amet lorem ac feugiat. Proin ornare ligula massa, nec
          faucibus lacus tempus ut. In posuere orci elementum ex commodo, a
          suscipit ipsum ullamcorper. Nulla pharetra enim a nibh venenatis
          aliquet.
        </p>
      </div>
      <bannerColumn />
    </div>
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
  }
  p{
    font:300 16px/1.5 'Poppins',sans-serif;
    margin:20px 0;
  }
  h2,h3{
    font:500 24px/1.5 'Poppins',sans-serif;
  }
  iframe{
    width:100%;
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
    color:#ffffff;
    text-decoration: none;
    font:500 14px/1 'Poppins',sans-serif
  }
  @media(min-width:768px){
    ul{
      flex-direction: row;
    }
    iframe{
      height: 500px;
    }
  }
</style>
