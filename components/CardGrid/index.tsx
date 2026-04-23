import CardClient from "./CardClient";

const Card = ({ techData }) => {
  const safeData = Array.isArray(techData?.Card) ? techData.Card : [];

  return (
    <section className="lg:py-14 py-8">
      <div className="mx-auto 2xl:w-10/12 lg:w-11/12 lg:px-0 px-6 w-full">
        
        {/* Heading */}
        <div className="2xl:max-w-5xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
            {techData?.heading}
          </h2>
          <p
            className="text-base text-black text-center"
            dangerouslySetInnerHTML={{ __html: techData?.subheading }}
          />
        </div>

        {/* 👇 Pass data to client component */}
        <CardClient safeData={safeData} />
      </div>
    </section>
  );
};

export default Card;
