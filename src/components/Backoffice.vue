<template>
    <div id="main">
        <div class="row m-0 h-100 backoffice">            
            <div class="col col-md-3 bg-purple d-flex align-items-center flex-column">

                <div class="logo">
                    <div class="flex items-center">
                        <img class="w-10 mt-3 mb-3 mr-2" src="src\assets\logo.png" alt="">
                        <p class="text-white font-black">anime<span class="text-lostpassword">yabu.</span></p>                    
                    </div>
                </div>             

                <div class="mt-10">
                    <h1 class="text-white text-lg font-black">Categorías</h1>
                    <ul class="text-white mt-3">
                        <li><a class="hover:underline text-white" href="#" v-on:click="component = 'inicio'">Inicio</a></li>
                        <li><a class="hover:underline text-white" href="#" v-on:click="component = 'ver'">Ver todas</a></li>
                        <li><a class="hover:underline text-white" href="#" v-on:click="component = 'crear'">Crear</a></li>
                    </ul>
                </div>

                <button @click="logout" class="text-white text-lg font-black mt-10">Cerrar Sesion</button>
                
            </div>

            <div class="col col-lg-9 p-0 bg-black text-center d-flex display-none">
                <component v-bind:is="component"></component>
            </div>

        </div>
    </div>
</template> 

<script>
    import Inicio from './Categories/Inicio.vue'
    import Ver from './Categories/Ver.vue'
    import Crear from './Categories/Crear.vue'
    import Actualizar from './Categories/Actualizar.vue'

    import { useStore } from 'vuex'


    export default {
        components: {
            'inicio': Inicio,
            'ver': Ver,
            'crear': Crear,
            'actualizar': Actualizar
        },

        setup() {
            const store = useStore()

            const logout = () => {
                store.dispatch('logout')
            }

            return {
                logout
            }
        },

        data() {
            return {
                component: 'inicio',
            }
        }
    }
</script>

<style scoped>
        @media(max-width: 932px) {
            .backoffice {
                display: flex;
                flex-direction: column;
            }
        }

        li {
            list-style-type: disc;
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
