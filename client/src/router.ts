import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import UserView from '@/views/UserView.vue';
import CalendarView from '@/views/CalendarView.vue';
import ToDoListView from '@/views/ToDoListView.vue';
import AuthView from '@/views/AuthView.vue';
import LogInView from '@/views/LogInView.vue';
import SignUpView from '@/views/SignUpView.vue';


Vue.use(VueRouter);
Vue.config.productionTip = false;

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/auth',
            component: AuthView,
            children: [
                {
                    path: 'login',
                    component: LogInView
                },

                {
                    path: 'signup',
                    component: SignUpView
                }
            ]
        },

        {
            path: '/user',
            component: UserView,
            children: [
                {
                    path: '',
                    component: CalendarView 
                },

                {
                    path: 'todo/:year/:month/:day',
                    component: ToDoListView 
                },
            ]
        }
    ],
});
  