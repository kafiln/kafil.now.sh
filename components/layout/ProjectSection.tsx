import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import Section from './Section';

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  tags: string[];
  picture: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: 'Personal Website',
    subtitle: 'My home in the World Wide Web',
    description:
      "A personal website, or as I like to call it, my home in the large web world. In this place you will learn more about me, see the projects I'm working on, read my blog posts and more.",
    link: 'https://dev.kafil.now.sh',
    tags: ['reactjs', 'nextjs', 'chakra UI', 'jest', 'cypress', 'storybook'],
    picture: '/images/blog.png',
    repo: 'kafil.now.sh',
  },
  {
    title: 'Salat',
    description:
      'Displaying prayer times in all the cities in Morocco, according to data from the Official Ministry.',
    subtitle: 'Prayer time in Morocco ',
    link: 'https://salat.now.sh',
    tags: [
      'reactjs',
      'nextjs',
      'styled-components',
      'tailwindcss',
      'storybook',
    ],
    picture: '/images/salat.png',
    repo: 'salat-next',
  },
];

const ProjectSection = () => {
  return (
    <Section>
      <Heading>Projects</Heading>
      <VStack spacing={4} alignItems="center" justify="center">
        {projects.map(project => {
          return <ProjectCard project={project} key={project.link} />;
        })}
      </VStack>
    </Section>
  );
};

export default ProjectSection;
