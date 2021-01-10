import { Stack } from '@chakra-ui/react';
import React from 'react';

const Section = ({ children, direction = null }) => {
  return (
    <Stack
      as="section"
      paddingY={8}
      spacing={8}
      alignItems="center"
      justify="center"
      direction={direction}
    >
      {children}
    </Stack>
  );
};

export default Section;
