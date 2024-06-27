import {
  createContext,
  ContextProviderComponent,
  createSignal,
  Setter,
  useContext,
  Accessor,
  onCleanup,
} from 'solid-js';
import { refreshTokens } from '../api';

type Context = {
  jwt: Accessor<string | null>;
  setJwtToken: Setter<string | null>;
  alertMessage: Accessor<string>;
  setAlertMessage: Setter<string>;
  alertClass: Accessor<string>;
  setAlertClass: Setter<string>;
  toggleRefresh: (trigger: boolean) => void;
};

export const initialContextValue = {
  jwt: () => '',
  alertMessage: () => '',
  alertClass: () => '',
  setJwtToken: () => {},
  setAlertMessage: () => {},
  setAlertClass: () => {},
  toggleRefresh: (trigger: boolean) => {},
};

export const AppContext = createContext<Context>();

export function useAppContext() {
  const value = useContext(AppContext);
  if (value === undefined) {
    throw new Error('useMyContext must be used within a MyContext.Provider');
  }
  return value;
}

export const ContextProvider: ContextProviderComponent<Context> = (props) => {
  const [jwtToken, setJwtToken] = createSignal<string | null>(null);
  const [alertMessage, setAlertMessage] = createSignal<string>('');
  const [alertClass, setAlertClass] = createSignal<string>('d-none');
  const [ticking, setTicking] = createSignal<number | undefined>(undefined);

  onCleanup(() => {
    if (ticking()) {
      clearInterval(ticking());
      setTicking(undefined);
    }
  });

  const toggleRefresh = (trigger: boolean) => {
    const tick = ticking();
    if (trigger) {
      console.log('turning on ticking');
      let i = setInterval(async () => {
        try {
          const tokensResponse = await refreshTokens();
          if (tokensResponse.error) {
            return;
          } else {
            setJwtToken(tokensResponse.data.accessToken);
          }
        } catch (error) {
          console.log(error);
        }
      }, 600000);
      setTicking(i);
      console.log('setting tick interval to', i);
    } else {
      console.log('turning off ticking with interval', tick);
      clearInterval(tick);
      setTicking(undefined);
    }
  };
  if (props.value === undefined) {
    throw new Error('useMyContext must be used within a MyContext.Provider');
  }
  return (
    <AppContext.Provider
      value={{
        jwt: jwtToken,
        alertMessage: alertMessage,
        alertClass: alertClass,
        setJwtToken,
        setAlertMessage,
        setAlertClass,
        toggleRefresh,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
