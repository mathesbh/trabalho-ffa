import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home';
import StatesPanel from './components/StatesPanel';
import StatesDetails from './components/StatesDetails';

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
  },
  {
    path: "/detalhes/:uf",
    name: "StatesDetails",
    component: StatesDetails,
  } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;