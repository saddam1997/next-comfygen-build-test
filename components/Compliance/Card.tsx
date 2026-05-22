// components/DynamicCardSection.tsx

const cardData = [
  {
    id: 1,
    title: "Better Customer Experience",
    description:
      "Easy appointment booking, online payments, and instant reminders improve client convenience.",
  },
  {
    id: 2,
    title: "Higher Visibility",
    description:
      "A mobile app helps more customers find and book your salon services online.",
  },
  {
    id: 3,
    title: "Improved Efficiency",
    description:
      "Automate scheduling, staff management, and payments to save time and reduce manual work.",
  },
  {
    id: 4,
    title: "Stronger Customer Loyalty",
    description:
      "Push notifications, rewards, and special offers help retain customers.",
  },
  {
    id: 5,
    title: "Business Insights",
    description:
      "Track customer behavior, bookings, and popular services with real-time data.",
  },
];

export default function Card({item}) {
  return (
    <section className="">
            <div
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-[#f8f9ff] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-2xl"
            >
              {/* Top Border Effect */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-indigo-600 transition-all duration-500 group-hover:w-full"></div>

              {/* Number */}
              <h3 className="mb-5 inline-flex  items-center justify-center  text-lg font-bold text-balck  ">
             {item.title}
              </h3>

              {/* Description */}
              <p className="text-base leading-7 text-gray-600">
                {item.desc}
              </p>
            </div>
      
       
      
    </section>
  );
}