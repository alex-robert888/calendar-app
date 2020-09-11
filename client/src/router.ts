import Vue from 'vue';
import VueRouter from 'vue-router';
import UserPage from '@/views/UserPage.vue';
import CalendarPage from '@/views/CalendarPage.vue';
import ToDoListPage from '@/views/ToDoListPage.vue';


Vue.use(VueRouter);
Vue.config.productionTip = false;

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/user',
            component: UserPage,
            children: [
                {
                    path: '',
                    component: CalendarPage 
                },

                {
                    path: 'todo/:year/:month/:day',
                    component: ToDoListPage 
                },
            ]
        }
    ],
});
  