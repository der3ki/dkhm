<template>
    <div class="about_dkhm">
        <div>
            <article>
                <header>
                    <img src="../assets/about_us.jpg" alt="Bienvenidos a DKHM Wargames"/>
                </header>
                <section>
                    <div>
                        <h1>DKHM Wargames</h1>
                        <p>
                            Estrenamos web Dkhmita para ampliar horizontes y mantener informada a la comunidad. No solo lo haremos de nuestro último contenido en YouTube y Twitch, sino que también os traeremos info de torneos, análisis de facción, etc. que iremos actualizando junto con info de nuestro equipo, noticias... Y todo aquello cuanto tenga cabida en nuestros Reinos Mortales.
                        </p>
                        <p>
                            Esperemos que disfrutéis está aventura que comenzamos aquí y no perdáis de vista la web, ya que irá mejorando y ampliándose poco a poco.
                        </p>
                        <p>
                            Así que... nada, un saludo, y nos vemos de nuevo en DKHM.
                        </p>
                        <router-link to="/descargas" title="Descargas">
                            Descargas
                        </router-link>
                    </div>
                </section>
            </article>
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
        font: 300 18px/24px 'Poppins', sans-serif; 
        padding: 20px;
        background-color: #fff;
    }
    .about_dkhm > div{
        background: #fff;
        max-width: 1200px;
        margin:0 auto;
    }
    .about_dkhm > div > article{
        display:flex;
        flex-direction: column;
        justify-self: center;
        align-items: center;
        text-align:left;
    }
    .about_dkhm > div > article > header > img{
        width:100%;
        -webkit-box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.30); 
        box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.30);
    }
    .about_dkhm > div > article > section > div > h1{
        font: 500 24px/1.5 'Poppins',sans-serif;
        color:#404044;
        margin:15px 0;
        text-align: center;
    }
    .about_dkhm > div > article > section > div > p{
        font: 400 14px/2.14286 "Montserrat", serif;
        color:#888888;
        text-align: justify;
    }
    .about_dkhm > div > article > section > div > a{
        display: inline-block;
        padding: 14px 33px;
        font: 700 14px/1.25 "Poppins",sans-serif;
        border: 1px solid #2c343b;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        letter-spacing: 0.23em;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
        transition: 250ms all ease-in-out;
        color: #ffffff;
        background-color: #2c343b;
        border-radius: 30px;
        text-decoration: none;
        margin:30px 0;
    }
    .about_dkhm > div > article > section > a:hover{
        color: #ffffff;
        background-color: #ff0000;
        border-color: #ff0000;
    }
    .about_dkhm > div > article > section > div{
      text-align: right;
    }
    @media(min-width:768px){
        .about_dkhm > div > article{
            flex-direction:row;
            align-items: center;
        }
        .about_dkhm > div > article > header, .about_dkhm > div > article > section{
            width:50%;
            padding: 0 15px;
        }
        .about_dkhm > div > article > header{
            margin-right:20px;
        }
        .about_dkhm > div > article > section{
            padding-top:20px;
            margin-left:20px;
        }
        .about_dkhm > div > article > section > div > h1{
            margin-top:0;
            font-size: 20px;
        }
        .about_dkhm > div > article > section > div > p{
            line-height: 21px;
        }
    }
    @media(min-width:992px){
        .about_dkhm{
            padding:50px;
        }
        .about_dkhm > div > article > header{
            margin-right:0;
        }
        .about_dkhm > div > article > section{
            margin-left:0;
            padding-top:0;
        }
        .about_dkhm > div > article > section > div{
            max-width: 430px;
            margin:45px auto 0
        }
        .about_dkhm > div > article > section > div > h1{
            font-size: 33px;
            line-height: 1.33333;
            padding-bottom: 15px;
            position:relative;
        }
        .about_dkhm > div > article > section > div > h1:after{
            content: '';
            left: 0;
            bottom: 0;
            background: red;
            display: block;
            height: 2px;
            position: absolute;
            width: 430px;
        }
        .about_dkhm > div > article > section > div > p{
            line-height: 2.14286;
        }
    }
</style>
