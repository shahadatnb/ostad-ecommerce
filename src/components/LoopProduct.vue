<script setup>
import { wishlist } from '../store/wishlist';
const props  = defineProps(['product']);
import {cart} from '../store/cart'
</script>

<template>
    <div class="bg-white shadow rounded overflow-hidden group">
        <div class="relative">
            <img :src="product.photo" :alt="product.title" class="w-full">
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <!-- <a href="#"
                    class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </a> -->
                <a href="#" @click="wishlist.toggleWishlist(product)"
                    class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist">
                    <!-- <font-awesome-icon v-if="wishlist.isWishlist(product)" :icon="['fas', 'heart']" /> -->
                    <font-awesome-icon :icon="['far', 'heart']" />
                </a>
            </div>
        </div>
        <div class="pt-4 pb-3 px-4">
            <a href="#">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{{ product.title }}</h4>
            </a>
            <div class="flex items-baseline mb-1 space-x-2">
                <template v-if="product.reduced_price != null">
                    <p class="text-xl text-primary font-semibold">$ {{ product.reduced_price }}</p>
                    <p class="text-sm text-gray-400 line-through">$ {{ product.price }}</p>
                </template>
                <template v-else>
                    <p class="text-xl text-primary font-semibold">$ {{ product.price }}</p>
                </template>
            </div>
            <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <font-awesome-icon :icon="['fas', 'star']" />
                    <font-awesome-icon :icon="['far', 'star-half-stroke']" />
                    <font-awesome-icon :icon="['far', 'star']" />
                </div>
                <div class="text-xs text-gray-500 ml-3">(150)</div>
            </div>
        </div>
        <a href="#" @click="cart.addItem(product)"
            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
            to cart</a>
    </div>
</template>