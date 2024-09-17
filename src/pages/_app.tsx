// pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { store } from "../store";
import "../styles/globals.css";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
