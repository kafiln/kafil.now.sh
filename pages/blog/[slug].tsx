import { useRouter } from 'next/router';
import React from 'react';
import { Layout } from '../../components/layout';

const BlogItem = () => {
  const router = useRouter();

  let { slug } = router.query;
  return <Layout>{slug}</Layout>;
};

export default BlogItem;
