// components/MetaTags.tsx
import Head from 'next/head';

interface MetaData {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  author?: string;
  webAuthor?: string;
  replyTo?: string;
  rights?: string;
  copyright?: string;
  robots?: string;
  geoRegions?: string[];
}

 interface SchemaData {
  [key: string]: any;
}


interface MetaTagsProps {
  meta: MetaData;
  schemaData?: SchemaData[];
}

const MetaTags: React.FC<MetaTagsProps> = ({ meta, schemaData }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />
      <meta name="keywords" content={meta.keywords} />
      
      {/* Default Meta Tags */}
      <meta name="robots" content={meta.robots || "index, follow"} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="viewport-fit" content="cover" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
      <meta name="apple-mobile-web-app-title" content="Comfygen Delivery App" />
      
      {/* Author & Rights */}
      <meta name="author" content={meta.author || "Comfygen Technologies"} />
      <meta name="web-author" content={meta.webAuthor || "Comfygen Technologies"} />
      <meta name="reply-to" content={meta.replyTo || "sales@comfygen.com"} />
      <meta name="rights" content={meta.rights || "Copyright Comfygen Technologies"} />
      <meta name="copyright" content={meta.copyright || "Comfygen Technologies"} />
      
      {/* SEO */}
      <meta name="googlebot" content="all" />
      <meta name="revisit-after" content="3 days" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="coverage" content="Worldwide" />
      <meta name="language" content="English" />
      
      {/* Geo Tags */}
      {meta.geoRegions && meta.geoRegions.map((region, index) => (
        <meta key={index} name="geo.region" content={region} />
      ))}
      
      {/* Open Graph (Facebook) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Comfygen Technologies" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_CA" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_DE" />
      <meta property="og:locale:alternate" content="en_AE" />
      <meta property="fb:page_id" content="110909321596135" />
      <meta property="og:email" content={meta.replyTo || "sales@comfygen.com"} />
      <meta property="og:phone_number" content="+91-958-786-7258" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image" content={meta.ogImage || "https://www.comfygen.com/comfygen-images/delivery-app-development/delivery_og2.webp"} />
      <meta property="og:image:secure_url" content={meta.ogImage || "https://www.comfygen.com/comfygen-images/delivery-app-development/delivery_og2.webp"} />
      <meta property="og:image:alt" content="Delivery App Development" />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:title" content={meta.ogTitle || meta.title} />
      <meta property="og:description" content={meta.ogDescription || meta.description} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.twitterTitle || meta.title} />
      <meta name="twitter:description" content={meta.twitterDescription || meta.description} />
      <meta name="twitter:image" content={meta.twitterImage || meta.ogImage || "https://www.comfygen.com/comfygen-images/delivery-app-development/delivery_og2.webp"} />
      <meta name="twitter:site" content="@Comfygen_Tech" />
      
      {/* Structured Data Scripts */}
      {schemaData && schemaData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Head>
  );
};

export default MetaTags;