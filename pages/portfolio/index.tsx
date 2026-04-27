import { useRouter } from "next/router";
import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import JSON_DATA from "./portfolio.json";
import PortfolioHero from '../../components/PortfolioPage/PortfolioHero';

export default function Portfolio() {
  const router = useRouter();

  /* ✅ FIX 1: NO useEffect (CLS fix) */
  const initialCategory =
    typeof router.query.category === "string"
      ? router.query.category
      : "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);


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

      <PortfolioHero Data={JSON_DATA.HeroSection} />

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

      {/* <FormSec /> */}
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
