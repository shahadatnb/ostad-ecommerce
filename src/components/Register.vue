<script setup>
import { ref } from 'vue'
import { authStore } from '../store/authStore';
const auth = authStore
const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const tramsAgreement = ref('')
</script>
<template>
    <!-- login -->
    <div class="contain py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 class="text-2xl uppercase font-medium mb-1">Create an account</h2>
            <p class="text-gray-600 mb-6 text-sm">
                Register for new cosutumer
            </p>
            <form action="#" method="post" autocomplete="off">
                <div class="space-y-2">
                    <div>
                        <label for="name" class="text-gray-600 mb-2 block">Full Name</label>
                        <input type="text" name="name" v-model="name" id="name"
                            :class="authStore.errorMessage.name ? 'border-red-500' : ''"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="fulan fulana">
                            <span v-if="authStore.errorMessage.name" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{{ authStore.errorMessage.name[0] }}</span>
                    </div>
                    <div>
                        <label for="email" class="text-gray-600 mb-2 block">Email address</label>
                        <input type="email" name="email" id="email" v-model="email"
                            :class="authStore.errorMessage.email ? 'border-red-500' : ''"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com">
                            <span v-if="authStore.errorMessage.email" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{{ authStore.errorMessage.email[0] }}</span>
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">Password</label>
                        <input type="password" name="password" id="password" v-model="password"
                            :class="authStore.errorMessage.password ? 'border-red-500' : ''"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******">
                            <span v-if="authStore.errorMessage.password" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{{ authStore.errorMessage.password[0] }}</span>
                    </div>
                    <div>
                        <label for="confirm" class="text-gray-600 mb-2 block">Confirm password</label>
                        <input type="password" name="password_confirmation" id="confirm" v-model="password_confirmation"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******">
                    </div>
                </div>
                <div class="mt-6">
                    <div class="flex items-center">
                        <input type="checkbox" name="aggrement" id="aggrement" v-model="tramsAgreement"
                            class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                        <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                href="#" class="text-primary">terms & conditions</a></label>
                    </div>
                </div>
                <div class="mt-4">
                    <button type="button" @click="auth.register(name, email, password, password_confirmation)"
                        class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                        account</button>
                </div>
            </form>

            <!-- login with -->
            <!-- <div class="mt-6 flex justify-center relative">
                <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div class="mt-4 flex gap-4">
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div> -->
            <!-- ./login with -->

            <p class="mt-4 text-center text-gray-600">Already have account? <router-link to="/login"
                    class="text-primary">Login now</router-link></p>
        </div>
    </div>
    <!-- ./login -->
</template>