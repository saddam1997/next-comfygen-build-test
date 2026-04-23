// "use client";

import { useState, useMemo } from "react";

export function useModal(initialData?: any) {
  const [typedText] = useState("");
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);

  const websiteJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Custom Blockchain & Mobile App Development Company",
      url: "https://www.comfygen.com/",
      potentialAction: {
        "@type": "SearchAction",
        target: "{search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
    []
  );

  const openModal = () => setTalkToExpertModal(true);
  const closeModal = () => setTalkToExpertModal(false);

  return {
    initialData,
    typedText,
    talkToExpertModal,
    websiteJsonLd,
    openModal,
    closeModal,
    setTalkToExpertModal,
  };
}
