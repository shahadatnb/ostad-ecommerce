import { reactive } from 'vue'
const basicStore = reactive({
    serverUrl: 'http://localhost:8000'
})

export {
    basicStore
}