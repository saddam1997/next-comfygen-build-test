import Image from "next/image";


const screens = [
  {
    icon: '🛒',
    title: 'Home / Discovery',
    desc: 'Categories, deals & offers',
    image: "https://www.comfygen.com/comfygen-images/grocery-delivery-app/home.webp"
  },
  {
    icon: '🔍',
    title: 'Smart Product Search',
    desc: 'Driver',
    image: "https://www.comfygen.com/comfygen-images/grocery-delivery-app/driver.webp"
  },
  {
    icon: '📦',
    title: 'Store',
    desc: 'One-tap UPI & COD',
    image: "https://www.comfygen.com/comfygen-images/grocery-delivery-app/store.webp"
  },
  {
    icon: '🗺️',
    title: 'Admin',
    desc: 'Real-time GPS map',
    image: "https://www.comfygen.com/comfygen-images/grocery-delivery-app/admin.webp"
  }

];

const AppScreens = () => {
  return (
    <section className="py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#E6F7FD] border border-[rgba(0,168,219,0.2)] text-[#00A8DB] py-1.5 px-4 rounded-full text-[11px] font-bold uppercase tracking-wide mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#406AAF] via-[#7D3C97] to-[#EA6224]" /> App Screens
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.18] mb-3.5 text-[#212121]">
            Beautiful, <span className="bg-gradient-to-r from-[#F26622] via-[#7D3C97] to-[#406AAF] bg-clip-text text-transparent">Intuitive UI</span> Across Every App
          </h2>
          <p className="text-base text-[#64748b] max-w-[600px] mx-auto leading-relaxed">
            Every screen crafted for India's diverse users — from metro cities to Tier 3 towns. Scroll to explore all panels.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-[#f1f5fe] [&::-webkit-scrollbar-thumb]:bg-[#e2e8f4] [&::-webkit-scrollbar-thumb]:rounded-full">
          {screens.map((screen, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[195px] bg-white rounded-2xl border-2 border-[#e2e8f4] p-4 text-center transition-all hover:-translate-y-1 hover:shadow-md hover:border-[rgba(64,106,175,0.28)]"
            >
              <div className="w-full h-[310px] bg-[#f8faff] rounded-xl border-2 border-[#e2e8f4] mb-3.5 p-2 flex flex-col overflow-hidden shadow-sm">
                <Image src={screen.image} alt={screen.title} width={420} height={320} className="w-full h-full bg-center object-contain" />
                {/* <div className="h-7 bg-gradient-to-r from-[#406AAF] via-[#7D3C97] to-[#EA6224] flex items-center px-3 gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </div>
                <div className="flex-1 p-3">
                  <div className="w-full h-15 rounded-lg mb-2.5 bg-gradient-to-br from-[#f0f5ff] via-[#f5eeff] to-[#fff5f0] flex items-center justify-center text-2xl">
                    {screen.icon}
                  </div>
                  <div className="h-2.5 bg-[#e2e8f4] rounded mb-2" />
                  <div className="h-2.5 bg-[#e2e8f4] rounded w-3/5 mb-2" />
                  <div className="h-2.5 bg-[#e2e8f4] rounded w-4/5 mb-2" />
                  <div className="h-2.5 bg-[#e2e8f4] rounded w-2/5 mb-2" />
                  <div className="h-7 bg-gradient-to-r from-[#406AAF] via-[#7D3C97] to-[#EA6224] rounded-lg mt-2" />
                </div> */}
              </div>
              <h5 className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#212121]">{screen.title}</h5>
              <p className="text-[11px] text-[#94a3b8] mt-1">{screen.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreens;