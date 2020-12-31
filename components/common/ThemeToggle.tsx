import { useColorMode, Box } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const Component = colorMode === "dark" ? FaSun : FaMoon
  return (
    <Box
      onClick={toggleColorMode}
      style={{ cursor: "pointer" }}
    >
      <Component size="1.5em"/>
    </Box>
  );
};

export default ThemeToggle;
