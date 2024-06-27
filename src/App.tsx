import { createEffect, type Component } from 'solid-js';

import { A, RouteSectionProps, useNavigate } from '@solidjs/router';
import Alert from './components/Alert';
import Nav from './components/Nav';
import { useAppContext } from './context/appContext';
import { logOutCall, refreshTokens } from './api';



const App: Component<RouteSectionProps<unknown>> = (props) => {
  const { jwt, alertMessage, alertClass, setJwtToken, toggleRefresh } = useAppContext();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await logOutCall();
      navigate('/login');
    } catch (err) {
      console.log(err);
    } finally {
      setJwtToken(null);
      toggleRefresh(false)
    }
  };


  createEffect(async () => {
    if (jwt() === '' || jwt() === null) {
      try {
        const tokensResponse = await refreshTokens();
        if (tokensResponse.error) {
          return;
        } else {
          console.log(tokensResponse);
          setJwtToken(tokensResponse.data.accessToken);
          toggleRefresh(true)
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div class='container'>
      <div class='row'>
        <div class='col'>
          <h1 class='mt-3'>Go Watch a Movie!</h1>
        </div>
        <div class='col text-end'>
          {jwt() === null || jwt() === '' ? (
            <A href='/login'>
              <span class='badge bg-success'>Login</span>
            </A>
          ) : (
            <a href='#!' onClick={logOut}>
              <span class='badge bg-danger'>Logout</span>
            </a>
          )}
        </div>
        <hr class='mb-3'></hr>
      </div>
      <div class='row'>
        <div class='col-md-2'>
          <Nav iAuthenticated={jwt() !== ''} />
        </div>
        <div class='col-md-10'>
          <Alert message={alertMessage()} class={alertClass()} />
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default App;
