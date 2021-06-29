<template>
    <div class="about_dkhm">
        <div>
            <article>
                <header>
                    <img src="../assets/about_us.jpg" alt="Bienvenidos a DKHM Wargames"/>
                </header>
                <section>
                    <h1>DKHM Wargames</h1>
                    <p>
                        DKHM es un canal dedicado a los Wargames, concretamente a los universos de Warhammer y, más aún, a Age of Sigmar.
                        Síguenos, ya seas de Sigmar o Nagash (o de Khorne, o de Gorkamorka, o de Archaon, o de...) y disfrutemos este viaje por los Reinos Mortales.
                    </p>
                    <router-link to="/team" title="Leer más">
                        Leer más
                    </router-link>
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
    .about_dkhm > div > article > section > h1{
        font: 500 24px/1.5 'Poppins',sans-serif;
        color:#404044;
        margin:15px 0;
        text-align: left;
        position: relative;
    }
    .about_dkhm > div > article > section > p{
        font: 400 14px/2.14286 "Montserrat", serif;
        color:#888888;
        text-align: left;
    }
    .about_dkhm > div > article > section > a{
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
    @media(min-width:768px){
        .about_dkhm > div > article{
            flex-direction:row;
            align-items: flex-start;
        }
        .about_dkhm > div > article > header, .about_dkhm > div > article > section{
            width:50%;
        }
        .about_dkhm > div > article > header{
            margin-right:20px;
        }
        .about_dkhm > div > article > section{
            padding-top:20px;
            margin-left:20px;
        }
        .about_dkhm > div > article > section > h1{
            margin-top:0;
            font-size: 20px;
        }
        .about_dkhm > div > article > section > p{
            line-height: 21px;
        }
    }
    @media(min-width:992px){
        .about_dkhm > div > article > header{
            margin-right:40px;
        }
        .about_dkhm > div > article > section{
            margin-left:40px;
            padding-top:60px
        }
        .about_dkhm > div > article > section > h1{
            font-size: 33px;
            line-height: 1.33333;
            padding-bottom: 15px;
        }
        .about_dkhm > div > article > section > h1:after{
            content: '';
            left: -110px;
            /* right: 0px; */
            bottom: 0;
            background: red;
            display: block;
            height: 2px;
            position: absolute;
            width: 400px;
        }
        .about_dkhm > div > article > section > p{
            line-height: 2.14286;
        }
    }
</style>
