import HeadingTwo from "../../components/ui/HeadingTwo";


export default function CostTable({ CostData}) {
    return (
        <section className="w-full px-4 py-10 sm:px-6 lg:px-8 border-2 border-gray-900 rounded-md h-full flex items-center justify-center">

            <div className="w-full max-w-7xl space-y-3">

                {/* Heading */}
                <div className="flex flex-col justify-center text-center lg:w-5/6 mx-auto">
                    <HeadingTwo color="black" text={CostData?.heading} />

                    {CostData?.description && (
                        <p
                            className="pt-4 text-black"
                            dangerouslySetInnerHTML={{ __html: CostData.description }}
                        />
                    )}
                </div>

                {/* TABLE */}
                <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 w-full">

                    {/* Desktop */}
                    <table className="hidden md:table w-full text-sm">
                        <thead>
                            <tr className="bg-[#1a3fa8]">
                                {["Package", "Estimated Cost", "Timeline", "Best For"].map((heading) => (
                                    <th
                                        key={heading}
                                        className="px-6 py-4 text-white font-semibold text-center first:text-left"
                                    >
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {CostData?.rows?.map((row:any, i:any) => (
                                <tr
                                    key={row.appType}
                                    className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                                >
                                    <td className="px-6 py-5 text-blue-600 font-medium text-left">
                                        {row.appType}
                                    </td>

                                    <td className="px-6 py-5 text-gray-800 font-semibold text-center">
                                        {row.EstimatedCost}
                                    </td>

                                    <td className="px-6 py-5 text-gray-600 text-center">
                                        {row.Timeline}
                                    </td>

                                    <td className="px-6 py-5 text-gray-600 text-center">
                                        {row.bestFor}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Mobile */}
                    <div className="md:hidden divide-y">
                        <div className="bg-[#1a3fa8] px-5 py-4 text-white text-center font-semibold">
                            App Pricing Overview
                        </div>

                        {CostData?.rows?.map((row:any, i:any) => (
                            <div key={row.appType} className={`p-5 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                <p className="text-blue-600 font-semibold">{row.appType}</p>

                                <p className="text-gray-800 font-semibold">{row.timeline}</p>

                                <p className="text-gray-600 text-sm">{row.bestFor}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* POINTS */}
                {/* {FoodDeliveryCost?.points?.length > 0 && (
                    <div className="py-8 max-w-5xl mx-auto text-center">
                        <HeadingThree color="black" text={FoodDeliveryCost?.subheading} />

                        <ul className="space-y-3 mt-4">
                            {FoodDeliveryCost.points.map((point:any, index:any) => (
                                <li key={index} className="flex items-start gap-2 ">
                                    <div className="w-[10px] h-[10px] border-2 border-black rounded-full mt-1.5"></div>

                                    <span
                                        className="text-sm"
                                        dangerouslySetInnerHTML={{ __html: point }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )} */}
            </div>
        </section>
    );
}