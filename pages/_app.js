import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
