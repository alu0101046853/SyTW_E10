import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Register from "@/views/Register.vue"


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyAl36DJph4nIrw2IQbeOGbw_HPmAFgOCi4",
  authDomain: "sytw-e10.firebaseapp.com",
  projectId: "sytw-e10",
  storageBucket: "sytw-e10.appspot.com",
  messagingSenderId: "671075147181",
  appId: "1:671075147181:web:253ffaefca9aa08f745524",
  measurementId: "G-NWRY68JZMH"
};

firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");