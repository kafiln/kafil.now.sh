import {
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Section } from '.';

const ContactSection = () => {
  return (
    <Section>
      <Heading as="h2">Contact</Heading>
      <VStack
        spacing={8}
        width={{ md: '2/3' }}
        borderWidth="1px"
        border="md"
        padding={8}
        boxShadow="md"
        rounded="sm"
      >
        <VStack>
          <Heading size="md">Subscribe to my mailing list</Heading>
          <Heading size="xs" fontWeight="light" color="grey.300">
            And get the latest articles delivered right to your inbox !
          </Heading>
        </VStack>
        <InputGroup size="lg">
          <Input placeholder="youremail@examle.com" />
          <InputRightAddon>
            <Text>Subscribe</Text>
          </InputRightAddon>
        </InputGroup>
      </VStack>
    </Section>
  );
};

export default ContactSection;
