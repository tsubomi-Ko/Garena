import Vue from "vue";
import Router from "vue-router";
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
      path: "/characters",
      name: "Characters",
      component: Characters
    }
  ]
});
