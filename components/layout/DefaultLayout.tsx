import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Footer, Header } from '.';
import { SEO } from '../common';

const DefaultLayout = ({ children }) => {
  return (
    <Flex height="100vh" direction="column">
      <SEO />
      <Header />
      <Flex as="main" p={4} flex={1}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default DefaultLayout;
