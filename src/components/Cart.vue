<script setup>
import { cart } from "../store/cart";
const cartStore = cart;
</script>
<template>
    <!-- breadcrumb -->
    <div class="container py-4 flex items-center gap-3">
        <router-link to="/" class="text-primary text-base">
            <!-- <i class="fa-solid fa-house"></i> -->
            <font-awesome-icon icon="fa-solid fa-house" />
        </router-link>
        <span class="text-sm text-gray-400">
            <!-- <i class="fa-solid fa-chevron-right"></i> -->
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </span>
        <p class="text-gray-600 font-medium">Cart</p>
    </div>
    <!-- ./breadcrumb -->

    <!-- wrapper -->
    <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <div class="col-span-8 border border-gray-200 p-4 rounded">
            <h3 class="text-lg font-medium capitalize mb-4">Checkout</h3>
            <div class="space-y-4">
                <div v-for="item in cart.items" :key="item.id" class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img :src="item.product.photo" alt="product-image" class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900">{{ item.product.title }}</h2>
                        <!-- <p class="mt-1 text-xs text-gray-700">36EU - 4US</p> -->
                        </div>
                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                            <span @click="cart.decreaseQuantity(item)" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                            <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="text" v-model="item.quantity" min="1" />
                            <span @click="cart.increaseQuantity(item)" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                        </div>
                        <div class="flex items-center space-x-4">
                            <p class="text-sm">${{ item.product.price }}</p>
                            <svg @click="cart.removeItem(item.product)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-span-4 border border-gray-200 p-4 rounded">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
            
            <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>Subtotal</p>
                <p>${{ cart.totalPrice }}</p>
            </div>

            <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>Shipping</p>
                <p>Free</p>
            </div>

            <div class="flex justify-between text-gray-800 font-medium py-3 uppercas">
                <p class="font-semibold">Total</p>
                <p>${{ cart.totalPrice }}</p>
            </div>
            <div class="flex justify-between">
            <a href="#" @click="cart.emptyCart()"
                class="block w-1/3 py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Place
                order</a>
            <router-link to="/checkout"
                class="block w-1/3 py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">
                Checkout</router-link>
            </div>
        </div>
    </div>
</template>
<style>

</style>