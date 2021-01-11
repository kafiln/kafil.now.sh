import {
  ContactSection,
  HeroSection,
  Layout,
  PostsSection,
  ProjectSection,
} from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProjectSection />
      <PostsSection />
      <ContactSection />
    </Layout>
  );
}
