import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home/index.vue";
import Characters from "@/pages/characters/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
        path: "/",
        name: "Characters",
        component: Characters
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/characters",
      name: "Characters",
      component: Characters
    }
  ]
});
