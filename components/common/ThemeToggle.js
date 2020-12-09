import { useColorMode, Box } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Box
      className={`p-2 cursor-pointer`}
      onClick={toggleColorMode}
      style={{ cursor: "pointer" }}
    >
      {colorMode === "dark" ? <FaSun size="2em" /> : <FaMoon size="2em" />}
    </Box>
  );
};

export default ThemeToggle;
