import { createRouter, createWebHistory } from 'vue-router';

import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';
import ProductSingle from "../components/ProductSingle.vue";
import Category from "../components/Category.vue";
import Shop from "../components/Shop.vue";
import Cart from "../components/Cart.vue";
import Checkout from "../components/Checkout.vue";
import Account from "../components/dashboard/Account.vue";
import Profile from "../components/dashboard/Profile.vue";
import Wishlist from "../components/dashboard/Wishlist.vue";

const routes = [
    {
        path: '/', component: Home, name: 'home'
    },
    {
        path: '/product/:slug', component: ProductSingle, name: 'product-single', meta: { title: 'Product' }
    },
    {
        path: '/category/:slug', component: Category, name: 'category-product', meta: { title: 'Category' }
    },
    {
        path: '/shop', component: Shop, name: 'contact'
    },
    {
        path: '/cart', component: Cart, name: 'cart', meta: {
            // requiresAuth: true
        }
    },
    {
        path: '/checkout', component: Checkout, name: 'checkout', meta: {
            // requiresAuth: true
        }
    },    
    {
        path: '/dashboard/account', component: Account, name: 'account', meta: {
            // requiresAuth: true
        }
    },    
    {
        path: '/dashboard/profile', component: Profile, name: 'profile', meta: {
            // requiresAuth: true
        }
    },    
    {
        path: '/dashboard/wishlist', component: Wishlist, name: 'wishlist', meta: {
            // requiresAuth: true
        }
    },    
    {
        path: '/login', component: Login, 'name': 'login'
    },
    {
        path: '/register', component: Register, 'name': 'register'
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

const DEFAULT_TITLE = 'Ecommerce';
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !autoStore.isAuthenticated) {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router
