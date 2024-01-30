// components/SEO.js

import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

const SEO = ({ title, description, image }) => (
  <>
    <DefaultSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        images: [{ url: image }],
        type: 'article',
      }}
    />
    <Head>
    </Head>
  </>
);

export default SEO;
