<script setup>
import Sidebar from './Sidebar.vue';
import { authStore } from "../../store/authStore";
const auth = authStore.user.user

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
        <p class="text-gray-600 font-medium">Account</p>
    </div>
    <!-- ./breadcrumb -->

    <!-- account wrapper -->
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

        <!-- sidebar -->
        <Sidebar />
        <!-- ./sidebar -->

        <!-- info -->
        <div class="col-span-9 grid grid-cols-3 gap-4">

            <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">Personal Profile</h3>
                    <router-link to="/dashboard/profile" class="text-primary">Edit</router-link>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">{{ auth.name }}</h4>
                    <p class="text-gray-800">{{ auth.email }}</p>
                    <p class="text-gray-800">{{ auth.phone }}</p>
                </div>
            </div>
<!-- 
            <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">Shipping address</h3>
                    <a href="#" class="text-primary">Edit</a>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">John Doe</h4>
                    <p class="text-gray-800">Medan, North Sumatera</p>
                    <p class="text-gray-800">20371</p>
                    <p class="text-gray-800">0811 8877 988</p>
                </div>
            </div>

            <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">Billing address</h3>
                    <a href="#" class="text-primary">Edit</a>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">John Doe</h4>
                    <p class="text-gray-800">Medan, North Sumatera</p>
                    <p class="text-gray-800">20317</p>
                    <p class="text-gray-800">0811 8877 988</p>
                </div>
            </div> -->

        </div>
        <!-- ./info -->

    </div>
    <!-- ./account wrapper -->
</template>