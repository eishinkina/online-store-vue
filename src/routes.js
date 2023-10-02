//default
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

//pages
import Home from "./components/pages/Home.vue";
import Shop from "./components/pages/Shop.vue";
import NotFound from "./components/pages/404.vue";
import Product from "./components/pages/Product.vue"

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
      path: "/shop/:id",
      name: "product",
      component: Product,
    },
    {
      path: "*",
      name: "notfound",
      component: NotFound,
    },
  ],
});
