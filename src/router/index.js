import Vue from 'vue'
import Router from 'vue-router'

// routers
import NotFoundComponent from './routers/404'
import Main from './routers/Main'
import Card from './routers/Card'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // 404
    { path: '*', component: NotFoundComponent },

    // Routers
    { path: '/', name: 'Main', component: Main },
    { path: '/card/:id', name: 'Card', component: Card },
  ]
})

export default router
