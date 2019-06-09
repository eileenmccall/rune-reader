import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import SingleRune from "./components/SingleRune.vue";
import Spreads from "./components/Spreads.vue";
import About from "./components/About.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/draw",
      name: "SingleRune",
      component: SingleRune
    },
    {
      path: "/spreads",
      name: "Spreads",
      component: Spreads
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});
