const HeroSection = ({ title, description }) => {
    return (
      <section className="lg:pt-16 pt-10 bg-[#fff]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-2">
            <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
              {title}
            </h2>
            <p className="text-base text-center font-normal">
              {description}
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  