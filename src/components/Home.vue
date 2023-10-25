<script setup>
import Banner from './homepage/Banner.vue'
import Feature from './homepage/Feature.vue'
import Categories from './homepage/Categories.vue'
import LoopProduct from './LoopProduct.vue';
import {onBeforeMount,ref} from "vue";
import { basicStore } from "../store/basic";
const basic = basicStore;
import axios from "axios";
const newArarival = ref([])
const recomendedProducts = ref([])
onBeforeMount(()=>{
    axios.get(`${basic.serverUrl}/api/latest-products?take=4`)
        .then(res => {
            newArarival.value = res.data.data
        });

    axios.get(`${basic.serverUrl}/api/latest-products?take=8`)
        .then(res => {
            recomendedProducts.value = res.data.data
        });
})
</script>
<template>
    
    <Banner />
    
    <Feature />

    <Categories />

    <!-- new arrival -->
    <div class="container pb-16">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <LoopProduct v-for="product in newArarival" :key="product.id" :product="product"  />
        </div>
    </div>
    <!-- ./new arrival -->

    <!-- ads -->
    <div class="container pb-16">
        <a href="#">
            <img src="../assets/images/offer.jpg" alt="ads" class="w-full">
        </a>
    </div>
    <!-- ./ads -->

    <!-- product -->
    <div class="container pb-16">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <LoopProduct v-for="product in recomendedProducts" :key="product.id" :product="product"  />
        </div>
    </div>
    <!-- ./product -->
</template>