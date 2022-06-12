import Vue from 'vue';
import app from '../src/components/vue-components/app/app.vue';

Vue.config.productionTip = true;

new Vue({
    render: h => h(app)
}).$mount('#app');
 