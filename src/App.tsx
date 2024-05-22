import { type Component } from 'solid-js';

import { A, RouteSectionProps, useNavigate } from '@solidjs/router';
import Alert from './components/Alert';
import Nav from './components/Nav';
import { useAppContext } from './context/appContext';

const App: Component<RouteSectionProps<unknown>> = (props) => {
  const { jwt, alertMessage, alertClass, setJwtToken } = useAppContext();
  const navigate = useNavigate();

  const logOut = () => {
    setJwtToken(null);
    navigate('/login');
  };

  return (
    <div class='container'>
      <div class='row'>
        <div class='col'>
          <h1 class='mt-3'>Go Watch a Movie!</h1>
        </div>
        <div class='col text-end'>
          {jwt() === null || jwt() === "" ? (
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
