import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'
import './assets/css/style-responsive.css';
import VueApexCharts from 'vue-apexcharts'
import router from './router';
import store from './store';

Vue.component('apexchart', VueApexCharts)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  store,
  router,
  components: { App }
}).$mount('#app');

Vue.config.productionTip = false


