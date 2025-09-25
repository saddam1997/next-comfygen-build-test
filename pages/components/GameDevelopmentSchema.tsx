// GameDevelopmentSchema.js

import React from 'react';

const GameDevelopmentSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.comfygen.com/game-development-company/",
        "url": "https://www.comfygen.com/game-development-company/",
        "name": "Game Development Company | Comfygen",
        "isPartOf": {
          "@id": "https://www.comfygen.com/#website"
        },
        "primaryImageOfPage": {
          "@id": "https://www.comfygen.com/game-development-company/#primaryimage"
        },
        "image": {
          "@id": "https://www.comfygen.com/game-development-company/#primaryimage"
        },
        "thumbnailUrl": "https://www.comfygen.com/media/svg/comfygen-logo.svg",
        "dateModified": "2023-09-15T06:58:46+00:00",
        "description": "Comfygen is a leading game development company that can offer end-to-end game design and development services. Hire our highly skilled game developers now to build a world-class Game development app & software at an affordable price.",
        "breadcrumb": {
          "@id": "https://www.comfygen.com/game-development-company/#breadcrumb"
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://www.comfygen.com/game-development-company/"]
          }
        ]
      },
      {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://www.comfygen.com/game-development-company/#primaryimage",
        "url": "https://www.comfygen.com/img/game-app-development-company.webp",
        "contentUrl": "https://www.comfygen.com/img/game-app-development-company.webp",
        "width": 365,
        "height": 250,
        "caption": "Game Development Company In USA"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.comfygen.com/game-development-company/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.comfygen.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Game Development Industry in USA, UK"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.comfygen.com/#website",
        "url": "https://www.comfygen.com/",
        "name": "Comfygen - Blockchain and Game AI Development Company",
        "description": "Simple | Secure | Successive",
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.comfygen.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      }
    ]
  };

  const scriptTag = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;

  return (
    <div dangerouslySetInnerHTML={{ __html: scriptTag }} />
  );
};

export default GameDevelopmentSchema;
