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

                <div class="">
                    <img class="w-44" src="src\assets\inicio_login.png" alt="">
                    <p class="text-white text-center text-4xl font-black py-2">ひさしぶり!</p>
                    <p class="text-white text-xs text-center pb-4">¡Hola, te extrañamos!</p>
                </div>

                <form class="w-72 text-white text-xs" @submit.prevent="login">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="text" class="form-control text-xs h-12" placeholder="usuario@" v-model="login_form.user" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Contraseña</label>
                        <input type="password" class="form-control text-xs h-12" placeholder="*****" v-model="login_form.pass" required>
                        <div class="text-right pt-2 ">
                            <a href="" class="form-check-label text-xs text-lostpassword hover:text-lostpassword" for="flexCheckDefault">
                                ¿Olvido la contraseña?
                            </a>
                        </div>
                    </div>
                    <button type="submit" value="Login" class="btn bg-button btn-lg btn-block mt-3 text-sm font-bold h-12 rounded-md">Acceder</button>
                </form>
                
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

                <p class="text-white text-xs pt-5">Quieres registrarte? <router-link to="/register" class="text-lostpassword hover:text-lostpassword">Registrate</router-link></p>
            </div>

            <div class="bg-purple col p-0 text-center d-flex justify-content-center align-items-center display-none">
                <img src="" class="w-100">
            </div>
        </div>
    </div>
</template> 

<script>
    import { ref } from 'vue'
    import { useStore } from 'vuex'

    export default {
        setup() {
            const login_form = ref({})
            const store = useStore()

            const login = () => {
                store.dispatch('login', login_form.value)
            }

            return {
                login_form,
                login
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
