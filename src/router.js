import Vue from "vue";
import VueRouter from "vue-router";
import QuickSearch from "./pages/QuickSearch";
import Browse from "./pages/Browse";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      {
        path: "/",
        component: QuickSearch
      },
      {
          path: "/browse",
          component: Browse
      }
    ],
    mode: "history"
  });

  export default router;

