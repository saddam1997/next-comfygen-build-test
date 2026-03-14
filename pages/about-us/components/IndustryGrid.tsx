import Link from "next/link";

const industries = [
    { name: "Healthcare", icon: "🏥", link:"https://www.comfygen.com/healthcare-app-development" },
    { name: "Banking", icon: "🏦", link:"https://www.comfygen.com/banking-software-development" },
    { name: "Insurance", icon: "📜" , link:"https://www.comfygen.com/insurance-app-development"},
    { name: "Finance", icon: "💰" , link:"https://www.comfygen.com/finance-app-development "},
    { name: "eCommerce", icon: "🛒" , link:"https://www.comfygen.com/ecommerce"},
    { name: "Logistics & Transportation", icon: "🚚", link:"https://www.comfygen.com/logistics-app-development " },
    { name: "Education", icon: "🎓" , link:"https://www.comfygen.com/ca/education-app-development-company"},
    { name: "Gaming", icon: "🎮", link:"https://www.comfygen.com/game-development-company " },
    { name: "Dating", icon: "💘", link:"https://www.comfygen.com/dating-app-development" },
    { name: "Entertainment and media ", icon: "🎬", link:"https://www.comfygen.com/social-media-app-development " },
    { name: "Food & Restaurant", icon: "🍔" , link:"https://www.comfygen.com/food-delivery-app-development"},
    { name: "Beauty & Lifestyle", icon: "💄", link:"https://www.comfygen.com/salon-app-development " },

];


export default function IndustryGrid() {

    return (
        <section className="py-16 ">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">
                    <h2 className="text-4xl font-serif text-[#1e3a5f] mb-4">
                        Industries We Serve – Comfygen Technologies

                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        At Comfygen Technologies, we deliver innovative digital solutions for various industries, helping businesses leverage technologies like AI, Blockchain, and Web & Mobile App Development to improve efficiency and growth.


                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">

                    {industries.map((item, index) => (
                        <Link href={item?.link}
                            key={index}
                            className="
              group relative bg-white border border-gray-200
              rounded-md p-6 flex flex-col items-center justify-center
              text-center cursor-pointer
              transition-all duration-300

              after:absolute after:bottom-0 after:left-0
              after:h-[3px] after:w-0
              after:bg-blue-600
              after:transition-all after:duration-500

              hover:after:w-full
              "
                        >

                            <div className="text-3xl mb-3">{item.icon}</div>

                            <h3 className="text-gray-700 font-medium">
                                {item.name}
                            </h3>

                        </Link>
                    ))}

                </div>
            </div>
        </section>
    );
}