import { useState } from "react";
import React from "react";
import Head from "next/head";
import LazyLoad from "react-lazy-load";
import BlogSection from "../componentsnew/BlogSection";
import Header from "../componentsnew/Header";
import { componentsMap } from "../../super-admin-components/AllComponents";

const postal_local_organization_schema = [
  {
    "@context": "https://schema.org",
    "@type": "PostalAddress",
    streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
    addressLocality: "Jaipur, Rajasthan",
    addressRegion: "India",
    postalCode: "302006",
    telephone: "+91-958-786-7258",
  },
  {
    "@context": "https://schema.org",
    "@type": "PostalAddress",
    streetAddress: "40 Tuxedo Ct, Toronto, ON",
    addressLocality: "Toronto",
    addressRegion: "Canada",
    postalCode: "M1G3S7",
    telephone: "+1 579-977-4475",
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Comfygen",
    image: "https://www.comfygen.com/svg/Logo1.svg",
    "@id": "Comfygen",
    url: "https://www.comfygen.com/",
    telephone: "+91-958-786-7258",
    priceRange: "$",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
        addressLocality: "Jaipur",
        postalCode: "302006",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "40 Tuxedo Ct, Toronto, ON M1G 3S7",
        addressLocality: "Toronto",
        postalCode: "M1G3S7",
        addressCountry: "Canada",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/comfygen",
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://www.youtube.com/@ComfygenBusiness",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://www.comfygen.com/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Comfygen",
    url: "https://www.comfygen.com/",
    logo: "https://www.comfygen.com/svg/Logo1.svg",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      contactOption: "WhatsApp",
      telephone: "+91 9587867258",
      email: "sales@comfygen.com",
      areaServed: ["IN", "US", "CA", "GB", "AU"],
      availableLanguage: "en, in",
    },
    sameAs: [
      "https://www.facebook.com/comfygen",
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://youtube.com/@comfygenbusiness",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://in.pinterest.com/comfygenpvt/",
    ],
  },
];

export default function Mobile(props) {
  let { initialData, pageData } = props;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  if (!pageData) {
    return <h1 className="text-red-900">Page not found.</h1>;
  }
  const metaComponents = pageData?.metsKeyValues || [];
  const linkComponents = pageData?.linkKeyValues || [];
  const dynamicComponents = pageData?.components || [];
  const faqSchemaValues = pageData?.faqSchema || [];
  const productSchemaValues = pageData?.productSchema || null;
  const serviceSchemaValues = pageData?.serviceSchema || null;
  let productSchema = null;
  let serviceSchema = null;
  let faqsSchema = null;
  if (productSchemaValues) {
    productSchema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: productSchemaValues?.name || "",
      image: productSchemaValues?.imageUrl || "Link to relevant service image",
      description: productSchemaValues?.description || "",
      brand: {
        "@type": "Brand",
        name: "Comfygen",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: productSchemaValues?.ratingValue || "",
        reviewCount: productSchemaValues?.reviewCount || "",
      },
    };
  }
  if (serviceSchemaValues) {
    serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceSchemaValues?.name || "",
      provider: {
        "@type": "Organization",
        name: "Comfygen",
        url: "https://www.comfygen.com",
      },
      description: serviceSchemaValues?.description || "",
      url: serviceSchemaValues?.url || "",
      mainEntityOfPage: serviceSchemaValues?.mainEntityOfPage || "",
      areaServed: "Global",
      serviceType: serviceSchemaValues?.serviceType || [],
      sameAs: [
        "https://www.facebook.com/comfygen",
        "https://www.linkedin.com/company/comfygen-private-limited",
      ],
    };
  }
  if (
    faqSchemaValues &&
    Array.isArray(faqSchemaValues) &&
    faqSchemaValues?.length > 0
  ) {
    faqsSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqSchemaValues?.map((e) => ({
        "@type": "Question",
        name: e?.question || "",
        acceptedAnswer: {
          "@type": "Answer",
          text: e?.answer || "",
        },
      })),
    };
  }
  return (
    <>
      <Head>
        <title>{pageData?.siteTitle || "Comfygen"}</title>
        <meta name={"description"} content={pageData?.metaDesc || "Comfygen"} />
        {metaComponents.map((meta: any, i: number) => {
          const [property, content] = Object.entries(meta)[0] || [];
          return <meta key={i} name={property} content={String(content)} />;
        })}
        {linkComponents?.map((meta: any, i: number) => {
          const [property, content] = Object.entries(meta)[0] || [];
          return <link rel={property} href={String(content)} data-next-head=""  />;
        })}
        
        {productSchema && productSchema != null && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
          />
        )}
        {serviceSchema && serviceSchema != null && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          />
        )}
        {faqsSchema && faqsSchema != null && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema) }}
          />
        )}
        {postal_local_organization_schema.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </Head>

      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>
      <div className="overflow-hidden">
        {dynamicComponents?.map((component: any, index: number) => {
          const Component = componentsMap[component.componentId?.name];
          if (component.componentId?.name === "HeroSectionForAllPages") {
            return Component ? (
              <Component
                key={index}
                {...component.propValues}
                openModal={openModal}
                talkToExpertModal={talkToExpertModal}
                setTalkToExpertModal={setTalkToExpertModal}
                closeModal={closeModal}
              />
            ) : null;
          } else {
            return Component ? (
              <Component key={index} {...component.propValues} />
            ) : null;
          }
        })}
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const { params, res } = context;
    const { id } = params; // Get the dynamic id from the URL

    const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
    const data = await resData.json();
    let pageName = id;
    if (Array.isArray(id)) {
      pageName = id.join("/");
    }
    const pageData = await fetch(
      `https://dynamic.comfygen.in/api/v1/page/get?name=${pageName}`
    );
    // const pageData = await fetch(`https://comfygen-dynamic.jamsara.com/api/v1/page/get?name=${id}`);
    // const pageData = await fetch(`http://localhost:1225/api/v1/page/get?name=${id}`);
    const pageDataJson = await pageData.json();
    if(pageDataJson?.error || !pageDataJson?.data) {
      return {
        redirect: {
          destination: "https://www.comfygen.com/404",
          permanent: false, 
        },
      };
    }
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
    return { props: { initialData: data, pageData: pageDataJson?.data } };
  } catch (error) {
    console.error("error", error);
    return {
      redirect: {
        destination: "https://www.comfygen.com/thankyou",
        permanent: false,
      },
    };
    // return { props: { initialData: [], pageData: [] } };
  }
}
