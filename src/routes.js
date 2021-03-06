import Home from './components/Home.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'

export default [
    { path: '/', component: Home },
    { path: '/orders', name: "orders", component: Orders },
    { path: '/modify', name: "modify", component: Modify, props: true },
    { path: '/dashboard', name: "dashboard", component: Dashboard, props: true },

]