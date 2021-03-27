import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Section } from '.';

const HeroSection = () => {
  return (
    <Section direction={{ base: 'column', md: 'row' }}>
      <Image
        alt="A person using a laptop"
        src="/hero.svg"
        height={512}
        width={512}
      />
      <VStack spacing={4}>
        <VStack spacing={2} align={{ base: 'center', md: 'start' }}>
          <Text fontSize="lg">Hello, my name is</Text>
          <Heading as="h1" size="md">
            Kafil Nasdami
          </Heading>
          <Heading as="h2" size="sm">
            Computer Science Engineer / Full Stack developer
          </Heading>
          <Container p="0">
            I love programming, which makes what I do not only a job but also a
            passion. As part of my previous experiences, I've build a lot of
            websites, web and mobile application, from scratch.
          </Container>
        </VStack>
        <Flex justifyContent="center">
          <ButtonGroup spacing="2">
            <Button colorScheme="red">Contact</Button>
            <Button>View Resume</Button>
          </ButtonGroup>
        </Flex>
      </VStack>
    </Section>
  );
};

export default HeroSection;
