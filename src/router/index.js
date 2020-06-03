import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/pages/Top'
import Profile from '@/components/pages/Profile'
import Skill from '@/components/pages/Skill'
import Output from '@/components/pages/Output'
import smoothScroll from 'vue-smoothscroll'

Vue.use(Router)
Vue.use(smoothScroll)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Top',
            component: Top
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/skills',
            name: 'Skill',
            component: Skill
        },
        {
            path: '/outputs',
            name: 'Output',
            component: Output
        },
    ]
})