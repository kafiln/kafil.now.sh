import { Flex } from "@chakra-ui/react";
import { HeroSection, Layout } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Flex direction="column">
        <HeroSection />
      </Flex>
    </Layout>
  );
}
