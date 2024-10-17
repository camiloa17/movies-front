import { lazy } from "solid-js";
import { loadMovie } from "./pages/Movies/[id].data";
import { loadMovies } from "./pages/Movies/data";

const routes = [
  {
    path: "/manage-catalogue",
    component: lazy(() => import("./pages/ManageCatalog")),
  },
  {
    path: '/movies',
    component: lazy(()=>import('./pages/Movies/Movies')),
  },
  {
    path:"/movies/:id",
    component: lazy(()=> import("./pages/Movies/[id]")),
  },
  {
    path: "/login",
    component: lazy(() => import("./pages/Login/Login")),
  },
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  
];

export default routes
