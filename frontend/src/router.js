import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditUser from './components/EditUser.vue'
import EditAirline from './components/EditAirline.vue'
import Hotels from './views/Hotels.vue'
import vCarSearch from './views/vCarSearch.vue'
import EditRcs from './components/EditRcs.vue'
import AddAirline from './components/AddAirline.vue'
import AddRentACar from './components/AddRentACar.vue'

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
    },
    {
      path: '/editAirline',
      name: 'editAirline',
      component: EditAirline
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: Hotels
    },
    {
      path: '/vCarSearch',
      name: 'vCarSearch',
      component: vCarSearch
    },
    {
      path: '/editRcs',
      name: 'editRcs',
      component: EditRcs
    },
    //=====================================
    //PRIVREMENE RUTE, NECE BITI KASNIJE
    {
      path: '/addAirline',
      name: 'addAirline',
      component: AddAirline
    },
    {
      path: '/addRentACar',
      name: 'addRentACar',
      component: AddRentACar
    }
    //=====================================
  ]
})