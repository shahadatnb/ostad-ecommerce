import { ref, reactive } from 'vue'
import { basicStore } from './basic'
const basic = basicStore
import router from '../router/router'
const authStore = reactive({
    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user')),
    userProfile: JSON.parse(localStorage.getItem('userProfile')),
    errorMessage: {},
    authenticate(email, password) {
        authStore.errorMessage = {}
        fetch( `${basic.serverUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
            .then(res => {
                if (res.error == 0) {
                    authStore.isAuthenticated = true
                    authStore.user = res
                    authStore.userProfile = res.user
                    localStorage.setItem('auth', 1)
                    localStorage.setItem('user', JSON.stringify(res))
                    localStorage.setItem('userProfile', JSON.stringify(res.user))
                    router.push('/')
                }else{
                    authStore.errorMessage = res
                }
            })
    },
    logout() {
        authStore.isAuthenticated = false
        authStore.user = {}
        localStorage.setItem('auth', 0)
        localStorage.setItem('user', '{}')
        router.push('/login')
    },
    getUserToken(){
        return authStore.user.token
    },
    async register(name, email, password, password_confirmation){
        const register = fetch(`${basic.serverUrl}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, password_confirmation })
        })
        try{
            const res = await register
            const data = await res.json()
            if(data.error == 0){
                authStore.errorMessage = {}
                authStore.authenticate(email, password)
            }else{
                authStore.errorMessage = data.data
            }
        }
        catch(err){
            console.log(err)
        }
        
    },

    updateProfile(name, email, phone,address,date_of_birth) {
        const token = authStore.getUserToken()
        if(!token){
            return
        }
        fetch(`${basic.serverUrl}/api/updateProfile`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, name, date_of_birth, phone , address})
        }).then(res => res.json())
            .then(res => {
                if (res.error == 0) {
                    //console.log(res)
                    authStore.userProfile = res.user
                    localStorage.setItem('userProfile', JSON.stringify(res.user))
                }
            })

    }

})

export { authStore }