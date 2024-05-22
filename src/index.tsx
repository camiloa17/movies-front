/* @refresh reload */
import { render } from 'solid-js/web';
import { ContextProvider, initialContextValue } from './context/appContext';

import './index.css';
import App from './App';
import { Router } from '@solidjs/router';
import routes from './Routes';
import 'solid-devtools'

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() =>  <ContextProvider value={initialContextValue}><Router root={App}>{routes}</Router></ContextProvider>, root!);
