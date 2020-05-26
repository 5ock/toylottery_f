import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

// import HelloWorld from './components/HelloWorld'
import Home from './views/Home'
import Login from './views/Login'
import LoginCreate from './views/LoginCreate'
import Lottery from './views/ToysLottery'
// import lottery_add from './components/Lottery_add'
import lottery_info from './components/Lottery_Info'
import { homedir } from 'os';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '*',
            redirect: 'home',
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'LoginCreate',
            path: '/logincreate',
            component: LoginCreate
        },
        {
            path: '/lottery',
            component: Lottery,
            children: [
                {
                    name: 'lottery',
                    path: '',
                    component: lottery_info,
                    meta: { requiresAuth: true}
                },
            ]
        },
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(res => res.meta.requiresAuth)) {
        axios.post('user/checklogin').then(result=>{
            if(result.data.response == 'ok') {
                next();
            } else {
                next({ path: 'home' });
            }
        });
    } else {
        next();
    }
});

export default router;