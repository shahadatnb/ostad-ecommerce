import { createApp } from 'vue'
import router from './router/router.js'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart, faShoppingCart, faBars, faMagnifyingGlass, faHouse, faChevronRight, faGripVertical, faList, faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faHeart,farHeart, faShoppingCart, faBars, faMagnifyingGlass, faHouse, faChevronRight, faGripVertical, faList, faUser)


createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
