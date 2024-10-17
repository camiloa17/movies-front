import { Route, Router } from '@solidjs/router';
import { lazy } from 'solid-js';
import App from './App';


const Routes = () => {
  return (
    <Router root={App}>
      <Route path='/movies'>
        <Route
          path='/'
          component={lazy(() => import('./pages/Movies/Movies'))}
        ></Route>
        <Route
          path='/:id'
          component={lazy(() => import('./pages/Movies/[id]'))}
        ></Route>
      </Route>
      <Route
        path='/manage-catalogue'
        component={lazy(() => import('./pages/ManageCatalog'))}
      />
      <Route path='/admin'>
        <Route path='/movies'>
          <Route path='/:id' component={lazy(() => import('./pages/Movies/[id]'))} />
        </Route>
      </Route>
      <Route
        path='/login'
        component={lazy(() => import('./pages/Login/Login'))}
      />
      <Route path='/' component={lazy(() => import('./pages/Home'))} />
    </Router>
  );
};



export default Routes;
