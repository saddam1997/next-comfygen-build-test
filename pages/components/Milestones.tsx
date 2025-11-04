import React from 'react';
import { Users, Rocket, Heart, Star } from 'lucide-react';
import Image from 'next/image';

const Milestones = () => {
    const stats = [
        {
            icon: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/years.svg",
            value: "8+",
            label: "Year's"
        },
        {
            icon: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/project.svg",
            value: "350+",
            label: "Project"
        },
        {
            icon: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/client.svg",
            value: "200+",
            label: "Happy Client"
        }
    ];

    const ratings = [
        {
            name: "Clutch",
            rating: 4.8,
            logo: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/clutch.svg",
        },
        {
            name: "D",
            rating: 4.7,
            logo: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/d.svg",
        },
        {
            name: "S",
            rating: 5.0,
            logo: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/s.svg",
        },
        {
            name: "U",
            rating: 5.0,
            logo: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/u.svg",
        },
        {
            name: "G",
            rating: 5.0,
            logo: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/g.svg",
        }
    ];

    return (
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 py-2 px-4 sm:px-6 lg:px-8 mt-8 sm:rounded-full">
            <div className="max-w-7xl mx-auto">
                {/* Content Container */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {/* Stats Section */}
                    <div className='w-full space-y-2'>
                        {/* Title */}
                        <h2 className="text-white text-3xl font-bold text-center  flex justify-center">
                            Our Milestones
                        </h2>
                        <div className="flex justify-between ">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col justify-center items-center w-full">
                                    <div className="flex items-center justify-center">
                                        <Image src={stat.icon} alt='' width={50} height={20} className='bg-white rounded-full w-12 h-12 p-2'/>
                                        {/* <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-900 " /> */}
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <h3 className="text-white text-xl sm:text-2xl font-bold ">
                                            {stat.value}
                                        </h3>
                                        <p className="text-gray-200 text-sm sm:text-base hidden lg:block">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ratings Section */}
                    <div className="grid grid-cols-5 gap-2 w-full">
                        {ratings.map((rating, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center min-w-[60px] sm:min-w-[100px] hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="flex items-center justify-center">
                                    <span className="w-full h-full">
                                      <Image src={rating.logo} alt='' width={50} height={20} className=''/>
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-white font-semibold text-sm sm:text-base">
                                        {rating.rating}
                                    </span>
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Milestones;