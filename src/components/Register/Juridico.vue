<template>
    <form class="w-72 text-white text-xs" @submit.prevent="register">
        <div class="mb-3">
            <label class="form-label">Razon social</label>
            <input type="text" class="form-control text-xs h-12" placeholder="" v-model="register_form.razonSocial" required>
        </div>

        <div class="mb-3">
            <label class="form-label">NIT</label>
            <input type="number" class="form-control text-xs h-12" placeholder="" v-model="register_form.nit" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Télefono</label>
            <input type="tel" class="form-control text-xs h-12" placeholder="" v-model="register_form.telefono" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control text-xs h-12" placeholder="usuario@" v-model="register_form.email" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Contraseña</label>
            <input type="password" class="form-control text-xs h-12" placeholder="*****" v-model="register_form.password" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Confirmar contraseña</label>
            <input type="password" class="form-control text-xs h-12" placeholder="*****" v-model="register_form.checkPassword" required>
        </div>

        <button type="submit" class="btn bg-button btn-lg btn-block mt-3 text-sm font-bold h-12 rounded-md">Registrar</button>
    </form>
</template> 

<script>
    import { ref } from 'vue'
    import { useStore } from 'vuex'

    export default {
        setup() {
            const register_form = ref({})
            const store = useStore()

            const register = () => {
                store.dispatch('register', { ...register_form.value, type_user: 2 })
            }

            return {
                register_form,
                register
            }
        }
    }
</script>

<style scoped>
    .form-control {
        line-height: 2;
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


    @media(max-width: 932px) {
        .display-none {
            display: none !important;
        }

        .bg-purple {
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
