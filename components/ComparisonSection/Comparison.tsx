
import { CircleCheck } from 'lucide-react';


type Props = {
  data: {
    heading: string;
    description: string;
    customTaxiBookingApp: {
      title: string;
      points: string[];
    };
    readyMadeTaxiAppSolution: {
      title: string;
      points: string[];
    };
  };
};

export default function Comparison({ data }: Props) {
  const { heading, description, customTaxiBookingApp, readyMadeTaxiAppSolution } =
    data;

  return (
    <section className="py-16 bg-slate-50 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center container mx-auto mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            {heading}
          </h2>
          <p className="mt-4 text-black">{description}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Custom Taxi App */}
          <div className="bg-white rounded-2xl shadow-md p-8 border">
            <h3 className="text-xl font-semibold text-indigo-600 mb-6">
              {customTaxiBookingApp.title}
            </h3>

            <ul className="space-y-4">
              {customTaxiBookingApp.points.map((point, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CircleCheck className="text-green-600 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ready Made Taxi App */}
          <div className="bg-white rounded-2xl shadow-md p-8 border">
            <h3 className="text-xl font-semibold text-indigo-600 mb-6">
              {readyMadeTaxiAppSolution.title}
            </h3>

            <ul className="space-y-4">
              {readyMadeTaxiAppSolution.points.map((point, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CircleCheck className="text-green-600 mt-1" size={20} />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
