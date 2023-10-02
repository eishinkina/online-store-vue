//default
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

//pages
import Home from "./components/pages/Home.vue";
import Shop from "./components/pages/Shop.vue";
import NotFound from "./components/pages/404.vue";

//routering
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },
    {
      path: "*",
      name: "notfound",
      component: NotFound,
    },
  ],
});
