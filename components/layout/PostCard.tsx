import {
  Box,
  Button,
  HStack,
  Image,
  Link as ChakraLink,
  Tag,
  Text,
  Heading,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const PostCard = ({ post }) => {
  const { title, date, description, slug, picture, tags } = post;
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="gray.300"
    >
      <Image src={picture} alt={title} />
      <VStack spacing={2} padding={2}>
        <Heading as="h3" size="sm" isTruncated>
          {title}
        </Heading>
        <Heading color="red.600" fontWeight="500" as="h4" size="xs">
          {date}
        </Heading>

        <HStack spacing={2}>
          {tags.map(tag => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </HStack>
        <Text>{description}</Text>
        <Button colorScheme="red">
          <Link href={`/blog/${slug}`}>
            <ChakraLink>Read More ...</ChakraLink>
          </Link>
        </Button>
      </VStack>
    </Box>
  );
};

export default PostCard;
