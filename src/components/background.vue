<template>
  <div class="background">
    <div>
      <div>
        <h2>Bienvenidos a la sección de trasfondo</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit urna nec dui hendrerit, vitae porta lorem pharetra. Etiam eu lacinia mi. Nam ante est, commodo ut iaculis sit amet, consectetur vel purus. Duis a velit laoreet, volutpat nibh ac, hendrerit ante. In auctor sit amet lorem ac feugiat. Proin ornare ligula massa, nec faucibus lacus tempus ut. In posuere orci elementum ex commodo, a suscipit ipsum ullamcorper. Nulla pharetra enim a nibh venenatis aliquet.
        </p>
        <p>
          Puedes consultar la sigmaroteca, haciendo click <a href="https://ageofsigmar.fandom.com/es/wiki/Sigmaroteca" target="_blank" title="Sigmaroteca">aquí</a>
        </p> 
       <iframe src="https://www.youtube.com/embed/XFGDe7rLctc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3>Consulta nuestras listas de trasfondo de Age of Sigmar</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit urna nec dui hendrerit, vitae porta lorem pharetra. Etiam eu lacinia mi. Nam ante est, commodo ut iaculis sit amet, consectetur vel purus. Duis a velit laoreet, volutpat nibh ac, hendrerit ante. In auctor sit amet lorem ac feugiat. Proin ornare ligula massa, nec faucibus lacus tempus ut. In posuere orci elementum ex commodo, a suscipit ipsum ullamcorper. Nulla pharetra enim a nibh venenatis aliquet.
        </p>        
      </div>
      <ul>
        <li :style="{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/podcast_background.jpg?alt=media&token=f6b18cef-fac2-4447-9dab-4575772a9e3c)' }">
          <div>
            <p class="dkhm_font">Podcast</p>
            <a href="https://www.youtube.com/playlist?list=PL3u7uk_4EFeX1z8DA15IM0UnouBcZy9ZS" title="Lista de Podcast" target="_blank">Ver aquí</a>
          </div>
        </li>
        <li :style="{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/dkhm-862c9.appspot.com/o/lore_background.jpg?alt=media&token=5c59788f-7de3-432e-bba7-efcbb1dcada0)'}">
          <div>
            <p class="dkhm_font">Trasfondo</p>
            <a href="https://www.youtube.com/watch?v=MbRYG5ePVYc&list=PL3u7uk_4EFeXoxUxbqCAAs92j0NSkytGa" title="Lista de Trasfondo" target="_blank">Ver aquí</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'background',
  components: {
  },
}
</script>

<style scoped>
  .background{
    padding:25px 15px 0;
  }
  .background > div > div{
    max-width: 1200px;
    margin: 0 auto;
  }
  .dkhm_font{
    font-family: "SkateBrand",sans-serif;
    font-weight: 800;
    font-size: 1.8em;
    color:#ffffff;
  }
  p{
    font:300 16px/1.5 'Poppins',sans-serif;
    margin:20px 0;
  }
  h2,h3{
    font:500 24px/1.5 'Poppins',sans-serif;
  }
  h3{
    margin-top: 80px;
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
  a{
    color:#ffffff;
    text-decoration: none;
    font:500 14px/1 'Poppins',sans-serif
  }
  @media(min-width:601px){
    iframe{
      height: 600px;
    }
  }
</style>
