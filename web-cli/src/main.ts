import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import { ButtonPlugin } from 'bootstrap-vue'

Vue.use(ButtonPlugin)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const router = new VueRouter({
    routes: []
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
