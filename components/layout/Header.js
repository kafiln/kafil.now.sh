import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
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
      <Flex as="nav" alignItems="center" justifyContent="center">
        <Flex as="ul" alignItems="center" justifyContent="center">
          {pages.map((page) => {
            return (
              <Box
                as="li"
                mx={2}
                p={2}
                key={page.name}
                style={{
                  listStyle: "none",
                  textTransform: "capitalize",
                }}
              >
                <Link href={`/${page.name}`}>
                  <a>{page.name}</a>
                </Link>
              </Box>
            );
          })}
        </Flex>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
