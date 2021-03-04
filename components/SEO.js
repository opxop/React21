import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_URL = 'https://react21.vercel.app';
const SITE_NAME = 'React21';
const SITE_DESCRIPTION =
  'Just a collection of projects built from everything I learned from the internet. Thanks, universe.';

export default function SEO() {
  const router = useRouter();

  return (
    <Head>
      <meta property="og:title" content="Home" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={`${SITE_URL}${router.pathname}`} />
    </Head>
  );
}
