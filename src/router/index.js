import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'
// const GoodsList = () =>
//     import ('@/views/GoodsList');
// const Cart = () =>
//     import ('@/views/Cart');
// const Address = () =>
//     import ('@/views/Address');
// const OrderConfirm = () =>
//     import ('@/views/OrderConfirm');
// const OrderSuccess = () =>
//     import ('@/views/OrderSuccess');

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: GoodsList
        },
        {
            path: '/GoodsList',
            name: 'GoodsList',
            component: GoodsList
        }, {
            path: '/goods',
            name: 'GoodsList',
            component: GoodsList
        },
        {
            path: '/Cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/Address',
            name: 'Address',
            component: Address
        },
        {
            path: '/OrderConfirm',
            name: 'OrderConfirm',
            component: OrderConfirm
        },
        {
            path: '/OrderSuccess',
            name: 'OrderSuccess',
            component: OrderSuccess
        }
    ]
})