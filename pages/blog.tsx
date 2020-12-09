import React from "react";
import { Layout } from "../components/layout";
import { useRouter } from "next/router";

const Blog = () => {
  const { locale } = useRouter();
  return <Layout>The Blog page for the language {locale}</Layout>;
};

export default Blog;
