import { Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { Brand, DesktopMenu, MobileMenu } from '.';
import { ThemeToggle } from '../common';

const Header = () => {
  const pages = [
    { name: 'projects' },
    { name: 'about' },
    { name: 'blog' },
    { name: 'contact' },
  ];

  return (
    <Flex as="header" p={4} justifyContent="space-between">
      <Brand />
      <HStack as="nav" alignItems="center" justifyContent="center" spacing={2}>
        <DesktopMenu pages={pages} />
        <MobileMenu pages={pages} />
        <ThemeToggle />
      </HStack>
    </Flex>
  );
};

export default Header;
