import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home';
import StatesPanel from './components/StatesPanel';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/estados",
    name: "StatesPanel",
    component: StatesPanel,
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;