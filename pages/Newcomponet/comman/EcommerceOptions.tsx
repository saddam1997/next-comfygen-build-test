export default function EcommerceOptions({ optionsdata = [], heading = "", description = "" }) {
    return (
        <div className="bg-[#F5F5F9] py-12 px-4 ">
            <div className="max-w-6xl mx-auto">
                <div className="py-5">
                    <h2 className="text-4xl font-bold text-center text-gray-800 ">
                        {heading}

                    </h2>

                    <p
                        className="text-base font-normal text-center mt-2 mx-auto w-full"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />

                </div>
                <div className="grid md:grid-cols-2 gap-8 py-12">
                    {optionsdata.map((option) => (
                        <div
                            key={option.id}
                            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-blue-100 p-6 rounded-2xl">
                                    {option.icon === "mobile" ? (
                                        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            {/* Title */}
                            <div className="py-4 space-y-2">
                                <h3 className="text-lg font-bold text-center text-gray-800 " dangerouslySetInnerHTML={{ __html: option.type }}>
                                </h3>
                                <p
                                    className="text-sm font-normal text-center mx-auto w-full"
                                    dangerouslySetInnerHTML={{ __html: option?.description }}
                                />
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {option.features.map((feature: any, i: any) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button className="w-full bg-white border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center justify-center group">
                                {option.cta.label}
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
