import { createSignal, type Component } from "solid-js";

import { A, RouteSectionProps, useNavigate } from "@solidjs/router";
import Alert from "./components/Alert";

const App: Component<RouteSectionProps<unknown>> = (props) => {

  const [jwtToken, setJwtToken] = createSignal<string | null>(null)
  const [alertMessage, setAlertMessage] = createSignal<string>("")
  const [alertClassName, setClassName] = createSignal<string>('d-none')
  const navigate = useNavigate()

  const logOut = () => {
    setJwtToken(null)
    navigate("/login")
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="mt-3">Go Watch a Movie!</h1>
        </div>
        <div class="col text-end">
          {jwtToken() === null ? (
            <A href="/login">
              <span class="badge bg-success">Login</span>
            </A>
          ) : (
            <a href="#!" onClick={logOut}>
              <span class="badge bg-danger">Logout</span>
            </a>
          )}
        </div>
        <hr class="mb-3"></hr>
      </div>
      <div class="row">
        <div class="col-md-2" >
        <nav>
            <div class='list-group'>
              <A href='/' class='list-group-item list-group-item-action' end>
                Home
              </A>
              <A
                href='/movies'
                class='list-group-item list-group-item-action'
                end
              >
                Movies
              </A>
              <A
                href='/genres'
                class='list-group-item list-group-item-action'
                end
              >
                Genres
              </A>
              {jwtToken() !== '' && (
                <>
                  <A
                    href='/admin/movie/0'
                    class='list-group-item list-group-item-action'
                    end
                  >
                    Add Movie
                  </A>
                  <A
                    href='/manage-catalogue'
                    class='list-group-item list-group-item-action'
                    end
                  >
                    Manage Catalogue
                  </A>
                  <A
                    href='/graphql'
                    class='list-group-item list-group-item-action'
                    end
                  >
                    GraphQL
                  </A>
                </>
              )}
            </div>
          </nav>
        </div>
        <div class='col-md-10'>
        <Alert message={alertMessage()} class={alertClassName()} />
        {props.children}
        </div>
      </div>
    </div>
  );
};

export default App;
