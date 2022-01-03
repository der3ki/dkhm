<template>
    <div class="banner_sm">
        <article href="https://www.patreon.com/dkhm" target="_blank" title="Accede a Patreon" class="patreon">
          <header>
              <h5>Haz una donación al canal con patreon</h5>
          </header>
          <section>
            <a href="" title="">Click aquí</a>
          </section>
        </article>
        <article href="https://www.twitch.tv/dkhmwargames" target="_blank" title="Accede a Twitch" class="twitch">
          <header>
              <h5>Síguenos en nuestro canal de twitch</h5>
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
      padding:40px 20px;
      width:100%;
      box-sizing: border-box;
      position: relative;
      z-index: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      text-align: left;
    }
    .banner_sm > article:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
    .banner_sm > article.patreon:before{
      background: #ff424d;
    }
    .banner_sm > article.twitch:before{
      background: #9147ff;
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
      display:inline-block;
      color:#ffffff;
      border-radius:25px;
    }
    .patreon{
      background-image:url('https://technext.github.io/docmed/img/banner/emergency-1.png');
    }
    .twitch{
      background-image:url('https://technext.github.io/docmed/img/banner/emergency-1.png');
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
        align-items: center;
        padding: 91px 0;
        background-position: center;
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
