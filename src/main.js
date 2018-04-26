import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' //vuex

import '@/common/scss/index.scss'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: require('@/common/img/default.jpg')
})
//Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})