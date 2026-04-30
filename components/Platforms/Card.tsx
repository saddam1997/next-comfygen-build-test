

interface WhyChooseItem {
    title: string;
    decs: string;
    points?: string[];
}

interface WhyChooseSectionProps {
    heading: string;
    description: string;
    items: WhyChooseItem[];
    buttonText?: string;
    buttonLink?: string;
}

const Card = ({PlatformsData}) => {
    return (
        <div className="bg-gradient-to-r from-[#272868] to-[#5556D1] py-10 lg:py-16">
            <section className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                <div className="space-y-4 text-center">
                    <div className="flex flex-col justify-center mx-auto">
                        <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-white">
                            {PlatformsData?.heading}
                        </h2>
                        <p className="text-base text-white md:text-center text-justify tracking-tight">
                            {PlatformsData?.description}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                        {Array.isArray(PlatformsData?.items) &&
                            PlatformsData?.items?.map((elem:any, index:any) => (
                                <div
                                    key={index}
                                    className="space-y-4 p-6 border border-white rounded-md"
                                >
                                    <p className="text-2xl font-bold text-white">{elem.title}</p>
                                    <p className="text-white" dangerouslySetInnerHTML={{ __html: elem.decs }}></p>
                                    {elem.points && (
                                        <ul className="space-y-2">
                                            {elem.points?.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <div className="min-w-[10px] min-h-[10px] mt-2 bg-white rounded-full"></div>
                                                    <p
                                                        className="text-white"
                                                        dangerouslySetInnerHTML={{ __html: point }}
                                                    ></p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                    </div>

                    <div className="flex justify-center">
                        <a href={PlatformsData?.buttonLink}>
                            <button className="text-white hover:bg-white hover:text-[#5556D1] border border-white px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                                {PlatformsData?.buttonText} 
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Card;
