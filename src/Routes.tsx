import { children, lazy } from "solid-js";
import { render } from "solid-js/web";
import { loadMovie } from "./pages/Movies/[id].data";
import { loadMovies } from "./pages/Movies/data";

const routes = [
  {
    path: '/movies',
    load: loadMovies,
    component: lazy(()=>import('./pages/Movies/Movies')),
  },
  {
    path:"/movies/:id",
    component: lazy(()=> import("./pages/Movies/[id]")),
    load: loadMovie,
  },
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
];

export default routes
