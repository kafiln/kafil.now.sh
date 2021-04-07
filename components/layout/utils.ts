import { useColorModeValue } from '@chakra-ui/react';

export const getColors = () => {
  const bg = useColorModeValue('gray.800', 'white');
  const color = useColorModeValue('white', 'gray.800');

  return { bg, color };
};
