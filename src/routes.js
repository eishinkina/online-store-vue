//default
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

//pages
import Home from "./components/pages/Home.vue";
import Example from "././components/pages/Example.vue";

//routering
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/example",
      name: "example",
      component: Example,
    },
  ],
});
