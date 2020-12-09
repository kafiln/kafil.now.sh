import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <HStack as="section" spacing={8}>
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
            I love programming, which makes what I do not only a job but also a
            passion. As part of my previous experiences, I've build a lot of
            websites and web applications mainly from scratch. I code with C#
            but also Java I'm very comfortable around .NET technologies such as
            ASP.NET MVC, SQL Server, Entity framework... I also use bootstrap,
            javascript jquery and other Javascript technologies such as
            AngularJS and React ... If you ever need a reliable resource that
            would get the job done in a convenient period of time, then I guess
            I am your man.
          </Container>
        </VStack>
        <Flex justifyContent="center">
          <ButtonGroup spacing="2">
            <Button colorScheme="purple">Contact</Button>
            <Button>View Resume</Button>
          </ButtonGroup>
        </Flex>
      </VStack>
    </HStack>
  );
};

export default HeroSection;
