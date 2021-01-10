import { Flex } from '@chakra-ui/react';
import { HeroSection, ProjectSection, Layout } from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProjectSection />
    </Layout>
  );
}
