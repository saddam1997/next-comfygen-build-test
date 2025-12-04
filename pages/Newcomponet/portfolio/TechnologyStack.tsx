import React from 'react'
import Image from 'next/image';

const technologyStack = [
    {
        "num": "1",
        "img": "https://www.comfygen.com/svg/tech/react-original.svg",
        "title": "React js",
        "borderColor": "border-sky-500"
    },
    {
        "num": "2",
        "img": "https://www.comfygen.com/svg/tech/html5-original.svg",
        "title": "HTML 5",
        "borderColor": "border-orange-500"
    },
    {
        "num": "3",
        "img": "https://www.comfygen.com/svg/tech/nodejs-original.svg",
        "title": "Node js",
        "borderColor": "border-green-500"
    },
    {
        "num": "4",
        "img": "https://www.comfygen.com/svg/tech/tailwindcss-plain.svg",
        "title": "Tailwind Css",
        "borderColor": "border-cyan-700"
    },
    {
        "num": "5",
        "img": "https://www.comfygen.com/svg/tech/mongodb-original.svg",
        "title": "Mongodb",
        "borderColor": "border-green-700"
    },
    {
        "num": "6",
        "img": "https://www.comfygen.com/svg/tech/bootstrap-original.svg",
        "title": "Bootstrap",
        "borderColor": "border-purple-500"
    }
];

export default function TechnologyStack() {
    return (
        <section className="lg:py-10 py-4 bg-white">
            <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
                <div className="">
                    <div className="w-full md:text-left">
                        <h2 className=" py-4 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                            Technology Stacks
                        </h2>
                    </div>
                </div>
                <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
                    {technologyStack.map((elem) => {
                        const { title, img, num, borderColor } = elem;
                        return (
                            <div key={num} className={`flex items-center justify-center p-4 space-x-4 rounded-full border ${borderColor} cursor-pointer`}>
                                <div className="flex items-center justify-center ">
                                    <Image src={img} alt={title} width="40" height="40" />
                                </div>
                                <h3 className="text-base font-bold text-black">
                                    {title}
                                </h3>
                            </div>);
                    })}
                </div>
            </div>
        </section>
    );
}
