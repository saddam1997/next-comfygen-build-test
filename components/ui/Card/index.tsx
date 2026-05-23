
const Index = ({Data}) => {
  return (
    <div className="group w-full max-w-[380px] rounded-[28px] bg-[#E9EEF8] px-8 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-[#5556D1] cursor-pointer">
      
      {/* Content */}
      <div className="mt-8">
        <h3 className="text-[16px] leading-[44px] font-bold text-[#111827] transition-colors duration-300 group-hover:text-white">
          {Data.title}
        </h3>

        <p className="mt-5 text-[16px] leading-[38px] text-gray-700 transition-colors duration-300 group-hover:text-white">
          {Data.decs}
        </p>
      </div>
    </div>
  );
};

export default Index;