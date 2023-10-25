import { reactive } from 'vue'
import router from '../router/router'
import { authStore } from './authStore'
import { basicStore } from './basic'
import { cart } from './cart'
const basic = basicStore
const order = reactive({
    orders: [],
    errorMessage: {},
    async fetchOrders() {
        const apiUrl = `${basic.serverUrl}/api/orders`
        const token = authStore.getUserToken()

        if (!token) {
            return
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const ordersData = await response.json();
            this.orders = ordersData.map(order => ({
                id: order.id,
                userId: order.user_id,
                showProducts: false,
                totalAmount: order.total_amount,
                products: order.products.map(productInfo => ({
                    id: productInfo.id,
                    title: productInfo.title,
                    price: productInfo.price,
                    quantity: productInfo.pivot.quantity,
                    totalPrice: productInfo.pivot.price
                }))
            }));
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    },
    async placeOrder(name, phone, email, address, city, country) {

        const apiUrl = `${basic.serverUrl}/api/checkout`
        const token = authStore.getUserToken()
        if (!token) {
            return
        }

        const products = Object.values(cart.items).map(item => ({
            product_id: item.product.id,
            quantity: item.quantity,
            price: item.product.price
        }));

        const payload = {
            name,
            phone,
            email,
            address,
            city,
            country,
            totalPrice: cart.totalPrice,
            products: products
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            let data = await response.json()
            if(data.success==true){
                this.errorMessage = {}
                cart.emptyCart()
                router.push('/dashboard/account')
            }else{
                this.errorMessage = data.data
            }
            
        } catch (error) {
            console.error('Error placing order:', error);
        }
    }
})

export { order }