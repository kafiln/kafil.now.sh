import { Button, Heading, Link as ChakraLink, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { PostCard, Section } from '.';

export interface Post {
  title: string;
  date: string;
  picture: string;
  tags: string[];
  slug: string;
  description: string;
}

const posts: Post[] = [
  {
    title: 'Caring is the new marketing',
    date: 'September 24, 2017',
    picture: '/images/lamp.png',
    tags: ['javascript', 'npm', 'unit-tests'],
    slug: 'caring-is-the-new-marketing',
    description:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
  },
  {
    title: 'How to design your site footer like we did',
    date: 'September 24, 2017',
    picture: '/images/painting.png',
    tags: ['javascript', 'npm', 'unit-tests'],
    slug: 'how-to-design-your-site-footer-like-we-did',
    description:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
  },
  {
    title: 'Any mechanical keyboard enthusiasts in design?',
    date: 'September 24, 2017',
    picture: '/images/building.png',
    tags: ['javascript', 'npm', 'unit-tests'],
    slug: 'any-mechanical-keyboard-enthusiasts-in-design',
    description:
      'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
  },
];

const PostsSection = () => {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Stack
        spacing={4}
        alignItems="center"
        justify="center"
        direction={{ base: 'column', md: 'row' }}
      >
        {posts.map(post => {
          return <PostCard key={post.slug} post={post} />;
        })}
      </Stack>
      <Button colorScheme="red" variant="link">
        <Link href={`/blog`}>
          <ChakraLink>More Posts ...</ChakraLink>
        </Link>
      </Button>
    </Section>
  );
};

export default PostsSection;
