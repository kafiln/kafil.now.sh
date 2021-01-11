import {
  Heading,
  Stack,
  Text,
  Box,
  VStack,
  Button,
  HStack,
  Link as ChakraLink,
  Tag,
} from '@chakra-ui/react';
import React from 'react';
import { Project } from './ProjectSection';
import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({
  project: { title, subtitle, repo, description, picture, link, tags },
}: ProjectCardProps) => {
  return (
    <Box
      width="100%"
      padding={4}
      borderRadius="sm"
      borderWidth="1px"
      rounded="lg"
      borderColor="gray.300"
      boxShadow="sm"
    >
      <Stack direction={{ base: 'column', md: 'row' }}>
        <VStack width={2 / 3} spacing={4} alignItems="start">
          <VStack spacing={2} alignItems="start">
            <Heading size="lg">{title}</Heading>
            <Heading size="md" fontWeight="normal" color="gray.500">
              {subtitle}
            </Heading>
          </VStack>
          <HStack spacing={2}>
            {tags.map(tag => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </HStack>
          <Text>{description}</Text>

          <HStack alignSelf="center" paddingTop={8}>
            <Button leftIcon={<FaLink />}>
              <ChakraLink target="_blank" as={Link} href={link}>
                Visit
              </ChakraLink>
            </Button>
            <Button leftIcon={<FaGithub />}>
              <ChakraLink
                target="_blank"
                as={Link}
                href={`https://github.com/kafiln/${repo}`}
              >
                View Source
              </ChakraLink>
            </Button>
          </HStack>
        </VStack>
        <Box width={1 / 3}>
          <Image
            layout="responsive"
            width="600px"
            height="400px"
            src={picture}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
