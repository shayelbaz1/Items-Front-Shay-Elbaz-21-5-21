import Vue from "vue";
import VueRouter from "vue-router";
import totalPage from './pages/total-page.vue'
import itemsPage from './pages/items-page.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/total",
    name: "store-page",
    component: totalPage,
  },
  {
    path: "/:items?",
    name: "items-page",
    component: itemsPage,
  }
];

const router = new VueRouter({
  routes
});

export default router;
