import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CountView from "../views/CounterView.vue";
import PropsAndEmitsView from "../views/PropsAndEmitsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/count",
      name: "count",
      component: CountView,
    },
    {
      path: "/props-and-emits",
      name: "propsAndEmits",
      component: PropsAndEmitsView,
    },
  ],
});

export default router;
