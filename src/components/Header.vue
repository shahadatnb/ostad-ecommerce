<script setup>
import { cart } from "../store/cart";
import { wishlist } from "../store/wishlist";
</script>
<template>
    <header class="py-4 shadow-sm bg-white">
        <div class="container flex items-center justify-between">
            <router-link to="/">
                <img src="../assets/images/logo.svg" alt="Logo" class="w-32">
            </router-link>

            <div class="w-full max-w-xl relative flex">
                <span class="absolute left-4 top-3 text-lg text-gray-400">
                    <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
                    <!-- <font-awesome-icon icon="magnifying-glass" /> -->
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </span>
                <input type="text" name="search" id="search"
                    class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                    placeholder="search">
                <button
                    class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">Search</button>
            </div>

            <div class="flex items-center space-x-4">
                <router-link to="/dashboard/wishlist" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <!-- <i class="fa-regular fa-heart"></i> -->
                        <font-awesome-icon :icon="['fas', 'heart']" />
                    </div>
                    <div class="text-xs leading-3">Wishlist</div>
                    <div
                        class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        {{ wishlist.totalWishlistItems }}</div>
                </router-link>
                <router-link to="/cart" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <!-- <i class="fa-solid fa-bag-shopping"></i> -->
                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                    </div>
                    <div class="text-xs leading-3">Cart</div>
                    <div
                        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        {{ cart.totalCartItems }}</div>
                </router-link>
                <router-link to="/dashboard/account" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <font-awesome-icon icon="fa-solid fa-user" />
                    </div>
                    <div class="text-xs leading-3">Account</div>
                </router-link>
            </div>
        </div>
    </header>
</template>