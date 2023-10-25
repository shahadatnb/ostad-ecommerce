<script setup>
import { ref } from "vue";
import { cart } from "../store/cart";
import { authStore } from "../store/authStore";
import { order } from "../store/order";
const cartStore = cart;
const user = authStore.user.user
const name = ref(user.name)
const phone = ref(user.phone)
const address = ref(user.address)
const email = ref(user.email)
const city = ref(user.city)
const country = ref(user.country)
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
        <p class="text-gray-600 font-medium">Checkout</p>
    </div>
    <!-- ./breadcrumb -->

    <!-- wrapper -->
    <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">

        <div class="col-span-8 border border-gray-200 p-4 rounded">
            <h3 class="text-lg font-medium capitalize mb-4">Checkout</h3>
            <div class="space-y-4">
                <!-- <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="first-name" class="text-gray-600">First Name <span
                                class="text-primary">*</span></label>
                        <input type="text" name="first-name" id="first-name" class="input-box">
                    </div>
                    <div>
                        <label for="last-name" class="text-gray-600">Last Name <span
                                class="text-primary">*</span></label>
                        <input type="text" name="last-name" id="last-name" class="input-box">
                    </div>
                </div> -->
                <div>
                    <label for="name" class="text-gray-600">Name</label>
                    <input type="text" name="name" id="name" v-model="name" class="input-box">
                </div>
                <div>
                    <label for="phone" class="text-gray-600">Phone number</label>
                    <input type="text" name="phone" id="phone" v-model="phone" class="input-box">
                </div>
                <div>
                    <label for="email" class="text-gray-600">Email address</label>
                    <input type="email" name="email" id="email" v-model="email" class="input-box">
                </div>
                <div>
                    <label for="address" class="text-gray-600">Street address</label>
                    <input type="text" name="address" id="address" v-model="address" class="input-box">
                </div>
                <div>
                    <label for="city" class="text-gray-600">City</label>
                    <input type="text" name="city" id="city" v-model="city" class="input-box">
                </div>
                <div>
                    <label for="country" class="text-gray-600">Country/Region</label>
                    <input type="text" name="country" id="country" v-model="country" class="input-box">
                </div>
            </div>

        </div>

        <div class="col-span-4 border border-gray-200 p-4 rounded">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
            <div class="space-y-2">
                <div v-for="item in cart.items" :key="item.id" class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">{{ item.product.title }}</h5>
                        <!-- <p class="text-sm text-gray-600">Size: M</p> -->
                    </div>
                    <p class="text-gray-600">
                        x{{ item.quantity }}
                    </p>
                    <p class="text-gray-800 font-medium">${{ item.product.price * item.quantity }}</p>
                </div>                
            </div>

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
                <p>${{ cart.totalPrice}}</p>
            </div>

            <div class="flex items-center mb-4 mt-2">
                <input type="checkbox" name="aggrement" id="aggrement"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3">
                <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <a href="#"
                        class="text-primary">terms & conditions</a></label>
            </div>

            <a href="#" @click="order.placeOrder(name, phone, email, address, city, country)"
                class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Place
                order</a>
        </div>

    </div>
    <!-- ./wrapper -->
</template>