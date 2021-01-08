import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

const DesktopMenu = ({ pages }) => {
  return (
    <Flex
      as="ul"
      alignItems="center"
      justifyContent="center"
      display={{ base: 'none', md: 'flex' }}
    >
      {pages.map(page => {
        return (
          <Box
            as="li"
            mx={2}
            p={2}
            key={page.name}
            style={{
              listStyle: 'none',
              textTransform: 'capitalize',
            }}
          >
            <Link href={`/${page.name}`}>
              <a>{page.name}</a>
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
};

export default DesktopMenu;
