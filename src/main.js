import Vue from 'vue'
import App from './App'

import '@/common/scss/index.scss'
//Vue.config.productionTip = false;
new Vue({
    el: '#app',
    data: {
        appName: 'ice player'
    },
    template: '<App/>',
    components: {App}
})