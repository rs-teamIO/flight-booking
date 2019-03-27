import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditUser from './components/EditUser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/editUser',
      name: 'editUser',
      component: EditUser
    }
  ]
})
