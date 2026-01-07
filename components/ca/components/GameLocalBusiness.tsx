// components/LocalBusiness.js

import Script from 'next/script';

const GameLocalBusiness = () => {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "priceRange": "$20-$55",
    "image": "https://www.comfygen.com/media/svg/comfygen-logo.svg",
    "@id": "https://www.comfygen.com",
    "name": "Game App Development Company India, USA, UAE, Germany",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F-152, Dayanand Marg, Nemi Nagar,",
      "addressLocality": "Vaishali Nagar, Near D A V Centenary Public School",
      "addressRegion": "Jaipur, Rajasthan",
      "postalCode": "302021",
      "addressCountry": "IN"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Saddam Husen"
      }
    },
    "url": "https://www.comfygen.com",
    "telephone": "+91 9587867258"
  };

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(ldJson)
      }}
    />
  );
};

export default GameLocalBusiness;
