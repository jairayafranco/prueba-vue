import { createStore } from 'vuex'
import router from '../router'
import Swal from 'sweetalert2/dist/sweetalert2.all'

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },

        CLEAR_USER(state) {
            state.user = null
        }
    },
    actions: {
        async login({ commit }, details) {
            const { user, pass } = details

            try {
                if(user == 'admin' && pass == '1234') {
                    commit('SET_USER', user)
                    localStorage.setItem('token', 'granted123')
                    router.push('/backoffice')
                }else {
                    Swal.fire({
                        title: '',
                        text: 'Datos incorrectos',
                        icon: 'warning'
                    })
                    return
                }
            }catch(e) {
                console.log("login error: ", e)
                return
            }            

        },

        async logout({ commit }) {
            localStorage.removeItem('token')
            commit('CLEAR_USER')
            router.push('/')
        },

        async register({ commit }, details) {
            const { password, checkPassword } = details

            if(password !== checkPassword) {
                Swal.fire({
                    title: '',
                    text: 'Las contraseñas no coinciden',
                    icon: 'warning'
                })
                return
            }

            console.log("datos registro", details)
            Swal.fire({
                title: '',
                text: "Registro exitoso",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/')                        
                }
            })
        }
    },
    modules: {

    }
})