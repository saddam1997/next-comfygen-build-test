import { useRouter } from "next/router";
import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import JSON_DATA from "./portfolio.json";

import CompanyHeroSection from "../../components/Newcomponet/portfolio/CompanyHeroSection";
import FormSec from "../../components/Newcomponet/portfolio/FormSec";

export default function Portfolio() {
  const router = useRouter();

  /* ✅ FIX 1: NO useEffect (CLS fix) */
  const initialCategory =
    typeof router.query.category === "string"
      ? router.query.category
      : "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);

  const openModal = useCallback(() => setTalkToExpertModal(true), []);
  const closeModal = useCallback(() => setTalkToExpertModal(false), []);

  /* ✅ FIX 2: memoized data (INP fix) */
  const categories = useMemo(() => {
    return Array.from(
      new Set(
        JSON_DATA.NativeAll.flatMap((item) =>
          Array.isArray(item.category) ? item.category : [item.category]
        )
      )
    );
  }, []);

  const filteredData = useMemo(() => {
    if (selectedCategory === "All") return JSON_DATA.NativeAll;

    return JSON_DATA.NativeAll.filter((item) => {
      const categories = Array.isArray(item.category)
        ? item.category
        : [item.category];

      const subcategories = Array.isArray(item.subcategories)
        ? item.subcategories
        : [];

      return (
        categories.includes(selectedCategory) ||
        subcategories.includes(selectedCategory)
      );
    });
  }, [selectedCategory]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = useMemo(() => {
    return filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredData, currentPage]);

  const handleCategory = useCallback((cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  }, []);

  return (
    <div>
      <Head>
        <title>{`${selectedCategory} Portfolio | Comfygen`}</title>
        <link rel="canonical" href="https://www.comfygen.com/portfolio" />
        <meta
          name="description"
          content="Comfygen is a full-service app and web development company..."
        />
      </Head>

      {/* ✅ FIX 3: LOCAL HERO IMAGE (LCP fix) */}
      <div className=" py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
        <CompanyHeroSection
          heading="Our Portfolio"
          subhead="Work We Have Done For Some of Our Great Clients"
          ptag="Delivering Innovative Robust and Result Oriented Business IT Solutions for Medium to Small Businesses."
          imageSrc="https://www.comfygen.com/image/portfolio-hero-img.webp"
          buttonText="Talk To Consultant"
          openModal={openModal}
          closeModal={closeModal}
          talkToExpertModal={talkToExpertModal}
          buttonLink="/portfolio"
        />
      </div>



      {/* CONTENT */}
      <div className="py-10 bg-white">
        <section className="mx-auto w-11/12 max-w-6xl">

          {/* TITLE */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0E1F51]">
              Our Excellent Portfolio
            </h2>
            <p className="text-gray-700">
             Driving growth and success through creative design and development. Showcasing our passion for design and creativity
            </p>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => handleCategory("All")}
              className="px-4 py-2 border rounded-full text-sm"
            >
              All
            </button>

            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategory(category)}
                className="px-4 py-2 border rounded-full text-sm"
              >
                {category}
              </button>
            ))}
          </div>

          {/* ✅ FIX 4: MIN HEIGHT (CLS fix) */}
          <div className="min-h-[1000px] mt-10 space-y-10">

            {currentData.map((portfolio) => (
              <div
                key={portfolio.num}
                className="grid md:grid-cols-2 gap-6 border rounded-xl p-5"
              >
                {/* IMAGE FIX */}
                <div className="relative w-full h-[220px] md:h-[350px]">
                  <Image
                    src={portfolio.img}
                    alt={portfolio.head}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover rounded-md"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {portfolio.head}
                  </h3>
                  <p className="text-sm mt-2">{portfolio.para}</p>

                  {/* ✅ FIX 5: SVG instead of react-icons */}
                  <Link href={portfolio.url}>
                    <button className="mt-4 px-6 py-2 border rounded flex items-center gap-2">
                      {portfolio.btn}
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M7 7h10v10" stroke="currentColor" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
              >
                Prev
              </button>

              <span>
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>

      <FormSec />
    </div>
  );
}

 export async function getStaticProps() {
   try {
     const res = await fetch(
       `${process.env.URL}/api/v1/posts?per_page=3`
     );

    if (!res.ok) throw new Error("API failed");
     const data = await res.json();

     return {
      props: { initialData: data },
      revalidate: 3600, // 24 hours
     };
   } catch (error) {
     console.error("getStaticProps error:", error);

     return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
  }
 }}























// import { useRouter } from "next/router";
// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import Head from "next/head";
// import Link from "next/link";
// import JSON_DATA from "./portfolio.json";
// import { ImArrowUpRight2 } from "react-icons/im";

// import Header from "../../components/Newcomponet/layout/Header";
// import CompanyHeroSection from "../../components/Newcomponet/portfolio/CompanyHeroSection";
// import FormSec from "../../components/Newcomponet/portfolio/FormSec";


// export default function Portfolio(props:any) {
//   const [talkToExpertModal, setTalkToExpertModal] = useState(false);
//   const router = useRouter();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const portfolioRef = useRef(null);

//   useEffect(() => {
//     if (router.isReady) {
//       const queryCategory = router.query.category;
//       if (queryCategory && typeof queryCategory === "string") {
//         setSelectedCategory(queryCategory);
//       } else {
//         setSelectedCategory("All");
//       }
//     }
//   }, [router.isReady, router.query.category]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [selectedCategory]);


//   const openModal = () => setTalkToExpertModal(true);
//   const closeModal = () => setTalkToExpertModal(false);

//   const categories = Array.from(
//     new Set(
//       JSON_DATA.NativeAll.flatMap((item) =>
//         Array.isArray(item.category) ? item.category : [item.category]
//       )
//     )
//   );

//   const filteredData =
//     selectedCategory === "All"
//       ? JSON_DATA.NativeAll
//       : JSON_DATA.NativeAll.filter((item) => {
//         const categories = Array.isArray(item.category)
//           ? item.category
//           : [item.category];
//         const subcategories = Array.isArray(item.subcategories)
//           ? item.subcategories
//           : [];
//         return (
//           categories.includes(selectedCategory) ||
//           subcategories.includes(selectedCategory)
//         );
//       });

//   const itemsPerPage = 10;
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const currentData = filteredData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="overflow-hidden">
//       <Head>
//         <title>
//           {selectedCategory} Portfolio comfygen.com | App and Web Development Company
//         </title>
//         <link rel="canonical" href="https://www.comfygen.com/portfolio" />
//         <meta
//           name="description"
//           content="Comfygen is a full-service app and web development company..."
//         />
//       </Head>

//       {/* <Header /> */}

//       <div className=" py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
//         <CompanyHeroSection
//           heading="Our Portfolio"
//           subhead="Work We Have Done For Some of Our Great Clients"
//           ptag="Delivering Innovative Robust and Result Oriented Business IT Solutions for Medium to Small Businesses."
//           imageSrc="https://www.comfygen.com/image/portfolio-hero-img.webp"
//           buttonText="Talk To Consultant"
//           openModal={openModal}
//           closeModal={closeModal}
//           talkToExpertModal={talkToExpertModal}
//           buttonLink="/portfolio"
//         />
//       </div>

//       <div className="py-8 bg-white lg:py-20" ref={portfolioRef}>
//         <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
//           <div className="space-y-4 flex flex-col justify-center text-center mx-auto lg:w-4/6">
//             <h2 className="text-[29px] lg:text-[35px] font-bold capitalize text-[#0E1F51]">
//               Our Excellent Portfolio
//             </h2>
//             <p className="text-base text-slate-800">
//               Driving growth and success through creative design and development. Showcasing our passion for design and creativity
//             </p>
//           </div>

//           <div className="flex gap-4 justify-center mt-10 flex-wrap">
//             <button
//               onClick={() => setSelectedCategory("All")}
//               className={`px-4 py-2 rounded-full border ${selectedCategory === "All"
//                 ? "border border-[#5556D1] hover:bg-[#5556D1] hover:text-white transition-all duration-200 text-[#5556D1] text-lg font-semibold"
//                 : ""
//                 }`}
//             >
//               All
//             </button>
//             {categories.map((category, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2 rounded-full border ${selectedCategory === category
//                   ? "border border-[#5556D1] hover:bg-[#5556D1] hover:text-white transition-all duration-200 text-[#5556D1] text-lg font-semibold"
//                   : ""
//                   }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           <div className="grid gap-8 py-10 text-left lg:grid-cols-1 lg:gap-14 container">
//             {currentData.length === 0 ? (
//               <p className="text-center text-gray-500 w-full">
//                 No projects found in this category.
//               </p>
//             ) : (
//               currentData.map((portfolio) => (
//                 <div
//                   key={portfolio.num}
//                   className="odd:bg-[#F5F5F9] even:bg-white border border-[#000000]/10 grid lg:grid-cols-2 grid-cols-1 md:gap-12 gap-8 rounded-3xl xl:p-10 lg:p-8 p-6 items-center"
//                 >
//                   <div className="flex justify-center w-full md:justify-start">
//                     <Image
//                       className="rounded-md w-full h-auto"
//                       title={portfolio.head}
//                       alt={portfolio.head}
//                       src={portfolio.img}
//                       width={600}
//                       height={600}
//                       quality={70}
//                       sizes="(max-width: 768px) 100vw, 50vw"
//                     />
//                   </div>
//                   <div className="w-full text-left">
//                     <div className="space-y-3">
//                       <h3 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">
//                         {portfolio.head}
//                       </h3>
//                       {portfolio.subhead && <h3>{portfolio.subhead}</h3>}
//                       <p className="text-base font-light text-black">
//                         {portfolio.para}
//                       </p>
//                     </div>
//                     <div className="mt-8">
//                       <Link href={portfolio.url} passHref>
//                         <button className="text-[#5556D1] border border-[#5556D1] hover:bg-[#5556D1] hover:text-white transition-all duration-200 px-10 py-2 text-lg font-semibold rounded-full capitalize cursor-pointer flex items-center gap-1">
//                           <span>{portfolio.btn}</span>
//                           <ImArrowUpRight2 />
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {totalPages > 1 && (
//             <div className="flex justify-center items-center gap-4 mt-8">
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className={`px-6 py-2 border rounded bg-[#5556D1] text-white ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//               >
//                 Previous
//               </button>
//               <span className="text-base text-[#212121]">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className={`px-6 py-2 border rounded bg-[#5556D1] text-white ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </section>
//       </div>

//       <FormSec />
//     </div>
//   );
// }
// export async function getStaticProps() {
//   try {
//     const res = await fetch(
//       `${process.env.URL}/api/v1/posts?per_page=3`
//     );

//     if (!res.ok) throw new Error("API failed");

//     const data = await res.json();

//     return {
//       props: { initialData: data },
//       revalidate: 3600, // 24 hours
//     };
//   } catch (error) {
//     console.error("getStaticProps error:", error);

//     return {
//       props: { initialData: [] },
//       revalidate: 3600, // retry in 1 hour
//     };
//   }
// }
