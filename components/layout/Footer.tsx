import {
  Flex,
  Heading,
  Box,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  const bg = useColorModeValue('red.500', 'red.100');
  const color = useColorModeValue('white', 'blue.900');

  const socials = [
    {
      icon: FaGithub,
      display: true,
      name: 'github',
      url: 'https://github.com/kafiln',
    },
    {
      icon: FaTwitter,
      display: true,
      name: 'twitter',
      url: 'https://twitter.com/kafiiil',
    },
    {
      icon: FaLinkedin,
      display: true,
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kafiln/',
    },
    { name: 'blog', url: 'https://kafil.now.sh' },
    { name: 'mail', url: 'mailto:kafil.nasdami@gmail.com' },
  ];
  return (
    <Flex
      p={4}
      as="footer"
      justifyContent="space-between"
      color={color}
      bg={bg}
    >
      <Heading as="h1" mx={2} size="sm">
        Kafil @ {new Date().getFullYear()}
      </Heading>
      <HStack as="ul" spacing={4}>
        {socials
          .filter(item => item.display)
          .map(item => {
            return (
              <Box as="li" key={item.name} style={{ listStyle: 'none' }}>
                <a
                  aria-label={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon size="1.5em" />
                </a>
              </Box>
            );
          })}
      </HStack>
    </Flex>
  );
};

export default Footer;
