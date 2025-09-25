import React from 'react';

const GameProductSchema = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "brand": {
      "@type": "Brand",
      "name": "Game App Development Company | Game Software Development Company"
    },
    "description": " Comfygen is your dependable partner for the creation of a Top-Notch Game App & Software Development Company in UK, USA and UAE, providing first-class Game Software & Application Development Services to help your online Game software and Application venture to reach new heights.",
    "image": "https://www.comfygen.com/media/svg/comfygen-logo.svg",
    "name": "Game Development Company | Comfygen",
    "review": [{
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Mr. Saddam Husen"
      }
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9"
      },
      "author": {
        "@type": "Person",
        "name": "Mr. Saddam Husen"
      }
    }],
    
    "offers": {
      "@type": "Offer",
      "url": "https://www.comfygen.com/game-development-company",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Organization",
        "name": "Comfygen Private Limited"
      }
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default GameProductSchema;
