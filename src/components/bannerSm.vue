<template>
    <div class="banner_sm">
        <article href="#" title="Patreon" class="patreon">
          <header>
              <h5>Haz una donación al canal con patreon</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </header>
          <section>
            <a href="" title="">Click aquí</a>
          </section>
        </article>
        <article href="#" title="Patreon" class="twitch">
          <header>
              <h5>Síguenos en nuestro canal de twitch</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </header>
          <section>
            <a href="" title="">Click aquí</a>
          </section>
        </article>
    </div>
</template>

<script>

export default {
  name: 'bannerSm',
  data(){
    return{
     
    }
  }
}
</script>

<style scoped>
    .banner_sm{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .banner_sm > article{
      padding:50px 20px;
      width:100%;
      box-sizing: border-box;
    }
    .banner_sm > article > header, .banner_sm > article > section{
      max-width: 320px;
      margin:0 auto;
    }
    .banner_sm > article > header > h5{
      margin-top:0;
    }
    .banner_sm > article > header{
      font: 500 14px/18px "Montserrat", serif;
      color:#ffffff;
      margin-bottom: 30px;
    }
    .banner_sm > article > header > p{
      font-size:12px;
      font-weight: 400;
    }
    .banner_sm > article > section > a{
      text-decoration: none;
      padding:15px;
      background-color:transparent;
      border:1px solid #ffffff;
      display:block;
      color:#ffffff;
      border-radius:25px;
    }
    .patreon{
      background-color:#ff424d;
    }
    .twitch{
      background-color: #9147ff;
    }
    @media(min-width:768px){
        .banner_sm{
          flex-direction:row;
          align-items: flex-start;
        }
        .banner_sm > article > header{
          max-width: 500px;
        }
    }
    @media(min-width:992px){
      .banner_sm > article{
        display:flex;
        flex-direction:row;
        justify-content: center;
      }
      .banner_sm > article > header, .banner_sm > article > section{
        max-width:none;
        margin:0;
      }
      .banner_sm > article > header{
        margin-bottom:0;
        margin-right:20px;
      }

    }
</style>
