import React from "react";
import HeadingTwo from "../../../components/ui/HeadingTwo";

const CardGrid = ({ techData }) => {

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
            <div className="mx-auto 2xl:w-10/12 lg:w-11/12 px-6 w-full">

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
                <div className="grid py-10 md:grid-cols-2 gap-2">
                    {visibleData.map((techItem: any, index: any) => (
                        <div
                            key={index}
                            className="bg-[#FAFAFA] p-6 border rounded-md space-y-4 hover:bg-[#5556D1]/10 transition"
                        >
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-[#212121]">
                                    {techItem?.title}
                                </h3>

                                {techItem?.desc && (
                                    <p
                                        className="text-base"
                                        dangerouslySetInnerHTML={{ __html: techItem.desc }}
                                    />
                                )}
                            </div>

                            {Array.isArray(techItem?.listItems) &&
                                techItem.listItems.length > 0 && (
                                    <ul className="mt-4 space-y-2">
                                        {techItem.listItems.map((item: any, idx: any) => (
                                            <li
                                                key={idx}
                                                className="text-sm  gap-1"
                                                dangerouslySetInnerHTML={{ __html: item }}
                                            />
                                        ))}
                                    </ul>
                                )}
                        </div>
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

export default CardGrid;