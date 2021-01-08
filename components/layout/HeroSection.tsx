import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <Stack
      width="100vw"
      as="section"
      spacing={8}
      alignItems="center"
      justify="center"
      direction={{ base: 'column', md: 'row' }}
    >
      <Image
        alt="A person using a laptop"
        src="/hero.svg"
        height={512}
        width={512}
      />
      <VStack spacing={4}>
        <VStack spacing={2} align="start">
          <Text fontSize="lg">Hello, my name is</Text>
          <Heading as="h1" size="md">
            Kafil Nasdami
          </Heading>
          <Heading as="h2" size="sm">
            Full Stack C# Javascript developer
          </Heading>
          <Container p="0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Container>
        </VStack>
        <Flex justifyContent="center">
          <ButtonGroup spacing="2">
            <Button colorScheme="red">Contact</Button>
            <Button>View Resume</Button>
          </ButtonGroup>
        </Flex>
      </VStack>
    </Stack>
  );
};

export default HeroSection;
