const StreamlineHealthcare = ({ heading, description, data=[] }) => {
    return (
        <section className="lg:py-16 py-10 bg-[#fff]">
            <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                <div className="space-y-4 text-center">
                    <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                        <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                            {heading}
                        </h2>
                        <p>{description}</p>
                    </div>
                    <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                        {data?.map((elem, index) => {
                            return (
                                <div
                                    key={index}
                                    className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/40 rounded-xl"
                                >
                                    <h3 className="text-2xl text-[#212121] font-semibold">{elem?.title || ""}</h3>
                                    <p className="text-base font-normal mt-2">{elem?.decs || ""}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StreamlineHealthcare;
