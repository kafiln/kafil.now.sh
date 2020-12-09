import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Footer, Header } from ".";

{
  /* TODO: Refactor into a SEO Component */
}
const SEO = () => (
  <Head>
    <title>Kafil Nasdami</title>
    <meta charSet="UTF-8" />
    <meta name="description" content="The personal website of Kafil Nasdami" />
    <meta
      name="keywords"
      content="Blog, Portfolio, Pesonal Website, Full stack developer"
    />
    <meta name="author" content="Kafil Nasdami" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
);

const DefaultLayout = ({ children }) => {
  return (
    <Flex height="100vh" direction="column">
      <SEO />
      <Header />
      <Flex as="main" px={4} flex={1}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default DefaultLayout;
