import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

// import HelloWorld from './components/HelloWorld'
import Login from './views/Login'
import LoginCreate from './views/LoginCreate'
import Lottery from './views/ToysLottery'
import lottery_add from './components/Lottery_add'
import lottery_info from './components/Lottery_Info'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
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
                    meta: { requiresAuth: false}
                },
                {
                    path: 'add',
                    name: 'add',
                    component: lottery_add,
                    meta: { requiresAuth: false}
                },
                // {
                //     name: 'lottery_info',
                //     path: 'info',
                //     component: lottery_info
                // }
            ]
        },
        {
            name: 'test',
            path: '/test',
            component: lottery_add,
            meta: { requiresAuth: false}
        },

    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(res => res.meta.requiresAuth)) {
        axios.post('user/checklogin').then(result=>{
            if(result.data.response == 'ok') {
                next();
            } else {
                next({ path: 'login' });
            }
        });
    } else {
        next();
    }
});

export default router;