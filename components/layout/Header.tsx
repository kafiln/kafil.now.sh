import { Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Brand, DesktopMenu, MobileMenu } from '.';
import { HomeButton, ThemeToggle } from '../common';
import { getColors } from './utils';

const Header = () => {
  const pages = [
    { name: 'projects' },
    { name: 'about' },
    { name: 'blog' },
    { name: 'contact' },
  ];

  return (
    <Flex as="header" {...getColors()} p={4} justifyContent="space-between">
      <Brand />
      <HStack as="nav" alignItems="center" justifyContent="center" spacing={2}>
        <DesktopMenu pages={pages} />
        <HStack spacing={4}>
          <HomeButton />
          <ThemeToggle />
          <MobileMenu pages={pages} />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Header;
