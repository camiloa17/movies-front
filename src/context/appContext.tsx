import {
  createContext,
  ContextProviderComponent,
  createSignal,
  Setter,
  useContext,
  Accessor,
} from 'solid-js';

type Context = {
  jwt: Accessor<string | null>;
  setJwtToken: Setter<string | null>
  alertMessage: Accessor<string>;
  setAlertMessage: Setter<string>
  alertClass: Accessor<string>;
  setAlertClass: Setter<string>
};

export const initialContextValue = {
  jwt: () => "",
  alertMessage:() => "",
  alertClass: () => "",
  setJwtToken: () => {},
  setAlertMessage: () => {},
  setAlertClass: () => {}
}

export const AppContext = createContext<Context>();

export function useAppContext() {
  const value = useContext(AppContext);
  if (value === undefined) {
    throw new Error("useMyContext must be used within a MyContext.Provider");
  }
  return value;
}

export const ContextProvider:ContextProviderComponent<Context> = (props) => {
  const [jwtToken, setJwtToken] = createSignal<string | null>(null);
  const [alertMessage, setAlertMessage] = createSignal<string>('');
  const [alertClass, setAlertClass] = createSignal<string>('d-none');
  if (props.value === undefined) {
    throw new Error("useMyContext must be used within a MyContext.Provider");
  }
  return (
    <AppContext.Provider
      value={{
        jwt: jwtToken,
        alertMessage: alertMessage,
        alertClass: alertClass,
        setJwtToken,
        setAlertMessage,
        setAlertClass
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
