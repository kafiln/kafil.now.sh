import {
  HeroSection,
  ContactSection,
  PostsSection,
  Layout,
} from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <PostsSection />
      <ContactSection />
    </Layout>
  );
}
