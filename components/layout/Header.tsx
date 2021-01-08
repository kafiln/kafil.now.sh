import { Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Brand, DesktopMenu, MobileMenu } from '.';
import { ThemeToggle, HomeButton } from '../common';

const Header = () => {
  const pages = [
    { name: 'projects' },
    { name: 'about' },
    { name: 'blog' },
    { name: 'contact' },
  ];

  const bg = useColorModeValue('red.500', 'red.100');
  const color = useColorModeValue('white', 'blue.900');

  return (
    <Flex
      as="header"
      bg={bg}
      color={color}
      p={4}
      justifyContent="space-between"
    >
      <Brand />
      <HStack as="nav" alignItems="center" justifyContent="center" spacing={2}>
        <DesktopMenu pages={pages} />
        <MobileMenu pages={pages} />
        <HomeButton />
        <ThemeToggle />
      </HStack>
    </Flex>
  );
};

export default Header;
