/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

import('./bootstrap');
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vue-material/dist/theme/default.css'
import Routes from '@/js/routes.js';  //Route information for vue router
import App from '@/js/views/App';   //Component file

Vue.use(Vuetify);

const app = new Vue({
        el:'#app',
        router:Routes,
        render: h=>h(App),
});
export default app;