
const Tabs = ({Data, activeTab, setActiveTab}) => {
  return (
     <div className="flex flex-wrap items-center justify-center gap-8">
            {Data.map((tab:any) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-300
                  ${
                    isActive
                      ? "border-black bg-white text-black shadow-sm"
                      : "border-[#DADADA] bg-white text-[#666]"
                  }`}
                >
              <span className="h-5 w-5">{tab.icon}</span>
                  {tab.label}
                </button>
              );
            })}
          </div>
  )
}

export default Tabs
