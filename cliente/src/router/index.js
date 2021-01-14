import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import LogIn from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn
  }
];

const router = new VueRouter({
  routes
});

/* router.beforeEach((to, from, next) => {
  const currenUser = firebase.auth().currentUser;
  const requiersAuth = to.matched.some(record => record.meta.requiersAuth);

  if (requiersAuth && !currenUser) next("login");
  else if (!requiersAuth && currenUser) next("home");
  else next();
}); */
export default router;