import Link from "next/link";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";

const industries = [
    { name: "Healthcare", icon: "🏥", link: "https://www.comfygen.com/healthcare-app-development" },
    { name: "Banking", icon: "🏦", link: "https://www.comfygen.com/banking-software-development" },
    { name: "Insurance", icon: "📜", link: "https://www.comfygen.com/insurance-app-development" },
    { name: "Finance", icon: "💰", link: "https://www.comfygen.com/finance-app-development " },
    { name: "eCommerce", icon: "🛒", link: "https://www.comfygen.com/ecommerce" },
    { name: "Logistics & Transportation", icon: "🚚", link: "https://www.comfygen.com/logistics-app-development " },
    { name: "Education", icon: "🎓", link: "https://www.comfygen.com/ca/education-app-development-company" },
    { name: "Gaming", icon: "🎮", link: "https://www.comfygen.com/game-development-company " },
    { name: "Dating", icon: "💘", link: "https://www.comfygen.com/dating-app-development" },
    { name: "Entertainment and media ", icon: "🎬", link: "https://www.comfygen.com/social-media-app-development " },
    { name: "Food & Restaurant", icon: "🍔", link: "https://www.comfygen.com/food-delivery-app-development" },
    { name: "Beauty & Lifestyle", icon: "💄", link: "https://www.comfygen.com/salon-app-development " },

];


export default function IndustryGrid() {

    return (
<section className="py-8 bg-gradient-to-b from-white via-gray-50 to-white lg:px-20 2xl:px-0">
  <div className="px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto space-y-4">
      <HeadingTwo
        color={"black"}
        text={"Industries We Serve – Comfygen Technologies"}
      />
      <ParagraphText
        color={"black"}
        text={
          "At Comfygen Technologies, we deliver innovative digital solutions for various industries, helping businesses leverage AI, Blockchain, and modern app development."
        }
      />

      {/* Decorative line */}
      <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">

      {industries.map((item, index) => (
        <Link
          href={item?.link}
          key={index}
          className="group relative"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

          {/* Gradient Border */}
          <div className="relative z-10 rounded-2xl p-[1px] bg-gradient-to-br from-gray-200 to-gray-100 group-hover:from-blue-500 group-hover:to-purple-500 transition duration-300">

            {/* Card */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">

              {/* Icon Wrapper */}
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-full bg-blue-100 blur-xl opacity-0 group-hover:opacity-60 transition"></div>

                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 text-2xl group-hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-gray-800 font-semibold text-sm sm:text-base group-hover:text-gray-900 transition">
                {item.name}
              </h3>

              {/* CTA */}
              {/* <span className="mt-2 text-xs text-gray-500 group-hover:text-blue-600 transition">
                Learn More →
              </span> */}

              {/* Bottom Animation Line */}
              <div className="mt-3 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-10 transition-all duration-300"></div>

            </div>
          </div>
        </Link>
      ))}

    </div>
  </div>
</section>
    );
}