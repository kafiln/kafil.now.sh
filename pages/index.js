import { HeroSection, Layout } from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="flex flex-col">
          <HeroSection />
        </div>
      </Layout>
    </div>
  );
}
