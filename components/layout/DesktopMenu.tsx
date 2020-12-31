import { Flex, Box, Link } from "@chakra-ui/react";
import React from "react";

const DesktopMenu = ({ pages }) => {
  return (
    <Flex
      as="ul"
      alignItems="center"
      justifyContent="center"
      visibility={{ base: "hidden", md: "visible" }}
    >
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
            <Link href={`/${page.name}`}>{page.name}</Link>
          </Box>
        );
      })}
    </Flex>
  );
};

export default DesktopMenu;
