import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const  Actions  =   ()  =>  
    import ('../components/Actions.vue')
const  Getters  =   ()  =>  
    import ('../components/Getters.vue')
const  Mutations  =   ()  =>  
    import ('../components/Mutations.vue')
const State = () =>
    import ('../components/State.vue')

const routes = [{
        path: '/',
        name: 'State',
        component: State
    },
    {
        path: '/state',
        component: State
    },
    {
        path: '/actions',
        name: 'Actions',
        component: Actions
    },
    {
        path: '/getters',
        name: 'Getters',
        component: Getters
    },
    {
        path: '/mutations',
        name: 'Mutations',
        component: Mutations
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router