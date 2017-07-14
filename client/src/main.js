// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import firebase from 'firebase'
import VueFire from 'vuefire'
// var VueFire = require('vuefire')
// var Firebase = require('firebase')
const config = {
  apiKey: 'AIzaSyBFeB00_BJThgniQHFGWEDb7iD8F0bhoK8',
  authDomain: 'kanban-project.firebaseapp.com',
  databaseURL: 'https://kanban-project.firebaseio.com',
  projectId: 'kanban-project',
  storageBucket: 'kanban-project.appspot.com',
  messagingSenderId: '596201311478'
}
var firebaseApp = firebase.initializeApp(config)

// explicit installation required in module environments
Vue.use(VueFire)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$firebaseDB = firebaseApp.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
