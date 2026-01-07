import React from 'react';

const GameFAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is Game Development ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Game development is the process of designing, developing, and releasing a video game. In most cases, multiple departments collaborate on the process. It can sometimes be handled by a single developer.</p>"
      }
    }, {
      "@type": "Question",
      "name": "What services do game development companies offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": " Game development companies offer a range of services including game concept development, game design, programming, art and asset creation, quality assurance testing, deployment, and ongoing support and updates for the game."
      }
    }, {
      "@type": "Question",
      "name": "How long does it take to develop a video game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The time it takes to develop a video game can vary significantly depending on the complexity of the game, the size of the development team, and other factors. Generally, small indie games can take several months to a year to develop, while larger AAA games can take several years to complete."
      }
    }, {
      "@type": "Question",
      "name": "How much does it cost to hire a game development company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of hiring a game development company can vary based on several factors such as the complexity of the game, the size of the development team, the required technologies, and the level of customization. Small indie games can cost around $10,000 to $100,000, while larger AAA games can cost several million dollars."
      }
    }, {
      "@type": "Question",
      "name": "Can game development companies help with marketing and publishing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many game development companies offer additional services such as marketing and publishing support. They can help with creating marketing strategies, promoting the game, optimizing app store presence, and even finding publishing partners to help distribute the game to a wider audience."
      }
    }, {
      "@type": "Question",
      "name": "Can game development companies develop games for multiple platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most game development companies have experience developing games for multiple platforms such as PC, consoles (like PlayStation, Xbox), and mobile devices (iOS, Android)."
      }
    }]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default GameFAQSchema;
