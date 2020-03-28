import Head from 'next/head'
import Link from 'next/link'
import SiteHeader from '../../components/siteHeader'
import SiteFooter from '../../components/siteFooter'

import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}
