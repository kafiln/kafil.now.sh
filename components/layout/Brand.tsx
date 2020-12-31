import { Link, Flex, Avatar, Heading } from '@chakra-ui/react';
import React from 'react';

const Brand = () => {
  return (
    <Link href="/">
      <Flex alignItems="center" style={{ cursor: 'pointer' }}>
        <Avatar name="Kafil Nasdami" src="./me.png" />
        <Heading mx={2} size="sm">
          Kafil
        </Heading>
      </Flex>
    </Link>
  );
};

export default Brand;
