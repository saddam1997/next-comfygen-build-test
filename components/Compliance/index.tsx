import React from "react";
import HeadingTwo from "../ui/HeadingTwo";
import Card from "./Card";


const Index = ({ techData }) => {

    const [showAll, setShowAll] = React.useState(false);

    // ✅ Safe structured data
    const safeData = {
        heading: "",
        subheading: "",
        CardGridData: [],
        ...techData,
    };

    const visibleData = showAll
        ? safeData.CardGridData
        : safeData.CardGridData.slice(0, 4);

    return (
        <section className="lg:py-8 py-8">
             <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">

                {/* HEADER */}
                <div className="max-w-7xl mx-auto space-y-4 text-center">
                    {safeData.heading && (
                        <HeadingTwo color="black" text={safeData.heading} />



                    )}

                    {safeData.subheading && (
                        <p
                            className="text-base text-black"
                            dangerouslySetInnerHTML={{ __html: safeData.subheading }}
                        />
                    )}
                </div>

                {/* GRID */}
              <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 py-8">
                    {techData?.tech.map((item: any, index: any) => (
                   <Card key={index} item={item} />
                    ))}
                </div>

                {/* BUTTON */}
                {safeData.CardGridData.length > 4 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-2 rounded-full bg-[#5556D1] text-white font-semibold"
                        >
                            {showAll ? "See Less" : "See More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Index;