import {reactive, computed} from 'vue'
import { basicStore } from './basic'
const basic = basicStore
import router from '../router/router'
const cart = reactive({
    items:{},
    errorMessage: {},
    shippingCost:0,
    totalCartItems:computed(()=>{
        let total = 0
        for(let id in cart.items){
            total += cart.items[id].quantity
        }
        return total
    }),
    totalPrice:computed(()=>{
        let total = 0
        for(let id in cart.items){
            total += cart.items[id].product.reduced_price * cart.items[id].quantity
        }
        return parseFloat(total.toFixed(2))
    }),
    grandTotal:computed(()=>{
        return cart.totalPrice + cart.shippingCost*1
    }),
    addItem(product){
        if(this.items[product.id]){
            this.items[product.id].quantity++
        }else{
            this.items[product.id] = {
                product,
                quantity:1
            }
        }
        this.saveCartInLocalStorage()
    },
    increaseQuantity(item){
        //console.log(product)
        this.items[item.product.id].quantity++
        this.saveCartInLocalStorage()
    },
    decreaseQuantity(item){
        this.items[item.product.id].quantity--
        this.saveCartInLocalStorage()
    },
    removeItem(product){
        delete this.items[product.id]
        this.saveCartInLocalStorage()
    },
    emptyCart(){
        this.items = {}
        this.saveCartInLocalStorage()
    },
    saveCartInLocalStorage(){
        localStorage.setItem('cart', JSON.stringify(this.items))
        localStorage.setItem('shippingCost', this.shippingCost)
    },
    getCartFromLocalStorage(){
        this.items = JSON.parse(localStorage.getItem('cart')) || {}
        this.shippingCost = localStorage.getItem('shippingCost')
    },
    checkout(){
        router.push('/checkout')
    },

})
cart.getCartFromLocalStorage()
export {cart}