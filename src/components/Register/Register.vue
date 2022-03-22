<template>
    <div id="main">
        <div class="row m-0 h-100">            
            <div class="col p-0 bg-black d-flex justify-content-center align-items-center flex-column w-100">

                <div class="logo">
                    <div class="flex items-center">
                        <img class="align-left w-10 mt-3 mb-3 mr-2" src="src\assets\logo.png" alt="">
                        <p class="text-white font-black">anime<span class="text-lostpassword">yabu.</span></p>                    
                    </div>
                </div>

                <div class="flex items-center">
                    <img class="w-24" src="src\assets\register.png" alt="">
                    <div>
                        <p class="text-white text-center text-2xl font-black">ようこそ!</p>
                        <p class="text-white text-xs text-center">Bienvenidos(a)!</p>
                    </div>
                </div>

                <div class="flex items-center py-3">
                    <div>
                        <label class="form-check-label text-white text-xs mr-3" for="flexCheckDefault">
                        Tipo de persona
                        </label>
                    </div>
                    <div>
                        <input class="form-check-input mr-2" type="radio" value="natural" name="person" checked v-on:click="component = 'natural'" id="flexCheckDefault">
                        <label class="form-check-label text-white text-xs mr-3" for="flexCheckDefault">
                            Natural
                        </label>
                    </div>
                    <div>
                        <input class="form-check-input mr-2" type="radio" value="juridico" name="person" v-on:click="component = 'juridico'" id="flexCheckDefault">
                        <label class="form-check-label text-white text-xs" for="flexCheckDefault">
                            Juridica
                        </label>
                    </div>
                </div>

                <component v-bind:is="component"></component>

                <p class="middlelines text-xs">Regístrate también con</p>

                <div class="flex justify-around w-72">
                    <div class="social">
                        <a href="#" class="fa fa-instagram"></a>
                    </div>
                    <div class="social">
                        <a href="#" class="fa fa-twitter"></a>
                    </div>
                    <div class="social">
                        <a href="#" class="fa fa-facebook"></a>
                    </div>
                </div>

                <p class="text-white text-xs pt-5 py-5">Ya estas registrado? <router-link to="/" class="text-lostpassword hover:text-lostpassword">Acceder</router-link></p>
            </div>

            <div class="bg-purple col p-0 text-center d-flex justify-content-center align-items-center display-none">
                <img src="" class="w-100">
            </div>
        </div>
    </div>
</template> 

<script>
    import Natural from './Natural.vue'
    import Juridico from './Juridico.vue'

    export default {        
        components: {
            'natural': Natural,
            'juridico': Juridico
        },

        data() {
            return {
                component: 'natural'
            }
        }
    }
</script>

<style scoped>
    .form-control {
        line-height: 2;
    }

    .social {
        background-color: grey;
        width: 50px;
        height: 50px;
        line-height: 48px;
        vertical-align: middle;
        border: 2px solid #fff;
        box-sizing: border-box;
        border-radius: 10px;
    }

    .fa {
        color: #fff;
        position: relative;
        left: 16px;
    }

    a, a:hover {
        text-decoration: none;
    }

    input, input:focus {
        color: #fff;
        background: rgba(255, 255, 255, 0.47);
        box-sizing: border-box;
        border-radius: 10px;
    }

    input::placeholder {
        color: #fff;
        font-family: Archivo;
    }

    .middlelines {
        color: #fff;
        position: relative;
        display: inline-block;
        margin: 30px auto;
    }

    .middlelines:before {
        content: "_______";
        color: #fff;
        position: absolute;
        top: -5px;
        left: -70px;
    }

    .middlelines:after {
        content: "_______";
        color: #fff;
        position: absolute;
        top: -5px;
        right: -70px;
    }

    @media(max-width: 932px) {
        .display-none {
            display: none !important;
        }

        .bg-black {
            background: linear-gradient(180deg, #CA38ED -30.11%, #000000 100%);
        }

        .logo {
            display: none !important;
        }
    }

    #main {
        padding: 0;
        margin: 0;
        height: 100vh;
        font-family: "Poppins";
        -webkit-touch-callout: none;
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none;                                             
    }
</style>
