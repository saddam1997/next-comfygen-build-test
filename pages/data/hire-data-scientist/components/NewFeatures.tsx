import React, { useState, useEffect } from "react";

interface Feature {
  id: number;
  title: string;
  btnname: string;
  content: string;
  additionalDetails: { title: string; content: string }[];
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Healthcare",
    btnname: "Healthcare",
    content:
      "In <a class='underline font-bold' href='https://www.comfygen.com/healthcare-app-development' >healthcare</a>, precision, timeliness, and informed decision-making can save lives. Data science empowers healthcare providers to enhance diagnostics, streamline operations, and accelerate research by turning raw medical data into actionable insights. When you hire healthcare data scientists, key healthcare solutions we can build include:",
    additionalDetails: [
      {
        title: "Early Disease Detection",
        content:
          "Data scientists develop predictive models that analyse patient history, diagnostic reports, and real-time health data (like from wearables) to detect early signs of chronic diseases such as diabetes, heart failure, or sepsis, enabling timely and preventive care.",
      },
      {
        title: "Clinical Workflow Automation",
        content:
          "Data science developers apply NLP and process mining to extract insights from unstructured clinical records, streamlining routine tasks like appointment scheduling, patient triage, and billing - reducing bottlenecks and freeing up medical staff for critical care.",
      },
      {
        title: "Intelligent Resource Planning",
        content:
          "Data science developers leverage historical patient admission records, EMR data, and live patient monitoring data to build predictive models that anticipate ICU occupancy, surgical load, and equipment needs. It helps to prevent resource shortages and improve emergency preparedness.",
      },
    ],
  },
  {
    id: 2,
    title: "E-commerce and Retail",
    btnname: "E-commerce",
    content:
      "In a fiercely competitive space, retail success hinges on extracting insights from customer behaviour, forecasting trends, and delivering hyper-personalised experiences. Hire <a class='underline font-bold' href='https://www.comfygen.com/ecommerce' >e-commerce</a> Data scientist to transform E-commerce and Retail raw data into insights that drive personalisation, operational efficiency, and customer retention. Key solutions that can be built in the retail sector with the help of our data scientists are:",
    additionalDetails: [
      {
        title: "Demand Forecasting",
        content:
          "By analysing historical sales data and market trends, data science developers build forecasting models that help retailers maintain optimal inventory levels and respond to shifting consumer demand.",
      },
      {
        title: "Personalised Product Recommendations",
        content:
          "Leveraging user interaction data, such as clicks, purchases, and browsing history, data science developers build recommendation engines that dynamically suggest relevant products, thereby enhancing the customer experience and increasing the average order value.",
      },
      {
        title: "Customer Churn Prediction",
        content:
          "Data from transactions, loyalty programs, support logs, and customer activity patterns is fed into classification models developed by data scientists to identify early signs of customer churn, enabling timely and targeted retention efforts.",
      },
    ],
  },
  {
    id: 3,
    title: "Manufacturing",
    btnname: "Manufacturing",
    content:
      "Modern manufacturing generates enormous volumes of machine, process, and supply data. Data science developers harness this data to build intelligent systems that reduce waste and improve production efficiency. When you hire data scientist, key solutions we can build include:",
    additionalDetails: [
      {
        title: "Quality Control Automation",
        content:
          "Data scientists develop ML models using real-time sensor data and historical defect patterns to detect anomalies early in the production line, ensuring consistent product quality. This reduces the need for manual inspection and helps prevent quality issues from escalating.",
      },
      {
        title: "Supply Chain Forecasting",
        content:
          "Using order history, lead times, and market trends data, our data science developers create forecasting models that help manufacturers plan material procurement and avoid stockouts. This ensures a smoother production flow and cost efficiency.",
      },
      {
        title: "Predictive Equipment Maintenance",
        content:
          "By analysing IoT sensor streams and machine logs, data scientists predict machine wear and tear, enabling pre-emptive maintenance before failures occur. This reduces unplanned downtime and extends equipment lifespan.",
      },
    ],
  },
  {
    id: 4,
    title: "Logistics and Supply Chain",
    btnname: "Logistics",
    content:
      "In logistics, where delays and inefficiencies cost millions, data is the key to smart decision-making. Hire data scientists to analyse complex datasets - from supply networks to IoT sensors - to build solutions that enhance efficiency, cut costs, and improve delivery precision.",
    additionalDetails: [
      {
        title: "Inventory Management",
        content:
          "Data scientists can build forecasting models using sales history, seasonal demand, and vendor data to maintain ideal stock levels. This ensures minimum shortages and avoids overstocking, maximising efficiency across warehouses.",
      },
      {
        title: "Dynamic Route Planning",
        content:
          "By processing GPS, weather, and traffic data, data science developers create real-time routing solutions. These solutions reduce delivery delays, lower fuel consumption, and enhance fleet productivity.",
      },
      {
        title: "Predictive Maintenance",
        content:
          "Data scientists use sensor and equipment data to build solutions that can predict potential breakdowns before they occur. This minimises downtime, prevents costly disruptions, and extends the life of critical assets.",
      },
    ],
  },
  {
    id: 5,
    title: "Marketing and Advertising",
    btnname: "Marketing",
    content:
      "Marketing teams rely on data to understand audience behaviour, optimise campaigns, and drive ROI. Hire data scientist to turn massive volumes of consumer and campaign data into actionable insights that fuel precision targeting and performance. Our data science developers can develop the following solutions:",
    additionalDetails: [
      {
        title: "Audience Segmentation",
        content:
          "Data scientists analyse demographics, purchase history, and user interaction data (such as clicks, time spent, and content viewed) to group customers into meaningful segments. This enables highly personalised marketing efforts and improved conversion rates.",
      },
      {
        title: "Campaign Performance Optimisation",
        content:
          "Data science developers build models that analyse multichannel campaign data, clicks, conversions, and impressions - to identify what’s working. This helps marketers allocate budgets efficiently and maximise ROI in real-time.",
      },
      {
        title: "Customer Intent Prediction",
        content:
          "Data scientists use click rates, search behaviour, and past interactions to predict what customers are likely to buy next. This empowers marketers to deliver timely offers and content that influence purchase decisions.",
      },
    ],
  },
];

const Features: React.FC = () => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(null);

  useEffect(() => {
    // Set default opened feature to first one if available
    if (featuresData.length > 0) {
      setOpenedFeature(featuresData[0]);
    }
  }, []);

  const handleButtonClick = (feature: Feature) => {
    setOpenedFeature(feature);
  };

  return (
    <section
      className="bg-center bg-repeat bg-fixed"
      style={{
        backgroundImage: `url("https://www.comfygen.com/img/grid-box-dark.svg")`,
      }}
    >
      <div className="bg-[#5556D1] py-10 lg:py-16">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white">
            Hire Domain-Specific Data Scientists for Maximum Impact
          </h2>
          <p className="text-white max-w-4xl mx-auto px-2">
            At Comfygen, our developers tailor data science solutions to the
            unique needs of each sector—from healthcare to finance—empowering
            organizations with predictive intelligence, automation, and
            operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 mx-auto w-10/12 lg:w-11/12 2xl:w-10/12 mt-10">
          {featuresData.slice(0, 5).map((feature) => (
            <button
              key={feature.id}
              className={`rounded-full border text-sm font-medium py-2 px-2 transition w-full max-w-[450px] mx-auto ${
                openedFeature?.id === feature.id
                  ? "bg-white text-black border-white"
                  : "bg-[#5556D1] text-white "
              }`}
              onMouseOver={() => handleButtonClick(feature)}
            >
              {feature.btnname}
            </button>
          ))}
        </div>

        {openedFeature && (
          <div className="mt-10 text-white w-11/12 lg:w-10/12 mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 ">
              {/* Left Side: Main Content */}
              <div className="lg:w-1/2 sm:mt-20  space-y-4">
                <h3 className="text-3xl font-semibold">
                  {openedFeature.title}
                </h3>
                <p
                  className="text-xl"
                  dangerouslySetInnerHTML={{ __html: openedFeature.content }}
                ></p>
              </div>

              {/* Right Side: Three Points */}
              <div className="lg:w-1/2 space-y-6">
                {openedFeature.additionalDetails &&
                  openedFeature.additionalDetails
                    .slice(0, 3)
                    .map((detail, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-lg">
                          {detail.title}
                        </h4>
                        <p className="mt-1 text-sm  ">{detail.content}</p>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
