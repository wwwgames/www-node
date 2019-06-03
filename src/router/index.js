import Vue from 'vue';
import Router from 'vue-router';
import Container from '../views/Container.vue';
import Index from '../views/Index.vue';
import Parents from '../views/Parents.vue';
import Us from '../views/Us.vue';
import Employ from '../views/Employ.vue';
import Agreement from '../views/Agreement.vue';

Vue.use(Router);

export function createRouter() {
    return new Router({
        routes: [
            {
                path: '/',
                component: Container,
                children: [
                    { path: '/', component: Index },
                    { path: '/parents', component: Parents },
                    { path: '/us', component: Us },
                    { path: '/employ', component: Employ }
                ]
            },
            {
                path: '/agreement',
                component: Agreement
            }
        ]
    });
}
