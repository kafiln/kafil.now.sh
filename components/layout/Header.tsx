import { Avatar, Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { MobileMenu, DesktopMenu } from ".";
import { ThemeToggle } from "../common";

const Header = () => {
  const pages = [
    { name: "projects" },
    { name: "about" },
    { name: "blog" },
    { name: "contact" },
  ];

  return (
    <Flex as="header" p={4} justifyContent="space-between">
      <Link href="/">
        <Flex alignItems="center" style={{ cursor: "pointer" }}>
          <Avatar name="Kafil Nasdami" src="./me.png" />
          <Heading mx={2} size="sm">
            Kafil
          </Heading>
        </Flex>
      </Link>
      <HStack as="nav" alignItems="center" justifyContent="center" spacing={2}>
        <DesktopMenu pages={pages} />
        <MobileMenu pages={pages} />
        <ThemeToggle />
      </HStack>
    </Flex>
  );
};

export default Header;
