import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/js/components/Home';
import Sign from '@/js/components/Sign';

Vue.use(VueRouter);

const router= new VueRouter({
    mode : 'history' ,
    routes:[{
        path:'/',
        name:'home',
        component:Home,
    },
        {  path:'/sign',
            name:'sign',
            component:Sign
        }
        ],
});
export default  router;