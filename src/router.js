import Vue from 'vue';
import VueRouter from 'vue-router';

// import HelloWorld from './components/HelloWorld'
import Login from './views/Login'
import LoginCreate from './views/LoginCreate'
import Lottery from './views/ToysLottery'

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
            component: Lottery
        }
    ]
});