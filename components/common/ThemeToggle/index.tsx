import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export type ThemeToggleProps = {
  size?: number;
};

const ThemeToggle = ({ size = 1.5 }: ThemeToggleProps) => {
  const { toggleColorMode } = useColorMode();
  const Component = useColorModeValue(FaSun, FaMoon);
  return (
    <Box onClick={toggleColorMode} style={{ cursor: 'pointer' }}>
      <Component size={`${size}em`} />
    </Box>
  );
};

export default ThemeToggle;
