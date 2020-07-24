import Vue from "vue";
import VueRouter from "vue-router";
import QuickSearch from "./pages/QuickSearch";


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      {
        path: "/",
        component: QuickSearch
      }
    ],
    mode: "history"
  });

  export default router;

