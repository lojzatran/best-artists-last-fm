import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueI18n from 'vue-i18n'
import messages from './l10n/messages'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'cs', // set locale
    messages, // set locale messages
})

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
