import Vue from 'vue';
import VueRouter from 'vue-router';

// import HelloWorld from './components/HelloWorld'
import Login from './views/Login'
import LoginCreate from './views/LoginCreate'
import Lottery from './views/ToysLottery'
import lottery_add from './components/Lottery_add'
import lottery_info from './components/Lottery_Info'

Vue.use(VueRouter);
export default new VueRouter({
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
            name: 'Lottery',
            path: '/lottery',
            component: Lottery,
            children: [
                {
                    name: 'lottery_add',
                    path: '',
                    component: lottery_add
                },
                {
                    name: 'lottery_add',
                    path: 'add',
                    component: lottery_add
                },
                {
                    name: 'lottery_info',
                    path: 'info',
                    component: lottery_info
                }
            ]
        },
        {
            name: 'test',
            path: '/test',
            component: lottery_add
        },

    ]
});