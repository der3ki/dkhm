import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import ActualNews from '../views/actualNews.vue'
import News from '../views/news.vue'
import Factions from '../views/factions.vue'
import Background from '../views/background.vue'
import Team from '../views/team.vue'
import Sponsors from '../views/sponsors.vue'
import NotFoundComponent from '../views/notFoundComponent.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/home', name: 'Home', component: Home },
    { path: '/news/',name: 'News',component: News},
    { path:'/news/:id', props: true, component:ActualNews, name:'ActualNews'},
    { path: '/factions', name: 'Factions', component: Factions },
    { path: '/background', name: 'Background', component: Background },
    { path: '/team', name: 'Team', component: Team },
    { path: '/Sponsors', name: 'Sponsors', component: Sponsors },
    { path: '*', component: NotFoundComponent }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router