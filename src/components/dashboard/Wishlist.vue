<script setup>
import Sidebar from './Sidebar.vue';
import { authStore } from '../../store/authStore';
import { cart } from '../../store/cart';
import { ref,onBeforeMount } from 'vue';
import axios from "axios";
import { basicStore } from "../../store/basic";
const wishlistItems = ref([]);
onBeforeMount(()=>{
    const token = authStore.getUserToken()
    axios.get(`${basicStore.serverUrl}/api/wish-listed-products`, { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
        wishlistItems.value = res.data.data
    });
})
</script>
<template>
    <!-- breadcrumb -->
    <div class="container py-4 flex items-center gap-3">
        <router-link to="/" class="text-primary text-base">
            <font-awesome-icon icon="fa-solid fa-house" />
        </router-link>
        <span class="text-sm text-gray-400">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </span>
        <p class="text-gray-600 font-medium">Profile</p>
    </div>
    <!-- ./breadcrumb -->

    <!-- wrapper -->
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

        <!-- sidebar -->
        <Sidebar />
        <!-- ./sidebar -->

        <!-- wishlist -->
        <div class="col-span-9 space-y-4">
            <div v-for="item in wishlistItems" :key="item.id" class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div class="w-28">
                    <img :src="item.photo" alt="product 6" class="w-full">
                </div>
                <div class="w-1/3">
                    <h2 class="text-gray-800 text-xl font-medium uppercase">{{ item.title }}</h2>
                    <!-- <p class="text-gray-500 text-sm">Availability: <span class="text-green-600">In Stock</span></p> -->
                </div>
                <div class="text-primary text-lg font-semibold">{{ item.price }}</div>
                <a href="#" @click="cart.addItem(item)"
                    class="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">add
                    to cart</a>

                <div class="text-gray-600 cursor-pointer hover:text-primary">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            
        </div>
        <!-- ./wishlist -->

    </div>
    <!-- ./wrapper -->
</template>