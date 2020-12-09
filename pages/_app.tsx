import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
