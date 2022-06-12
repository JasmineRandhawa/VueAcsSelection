import Vue from 'vue';
import app from '../src/app/app.vue';

Vue.config.productionTip = true;

new Vue({
    render: h => h(app)
}).$mount('#app');
 