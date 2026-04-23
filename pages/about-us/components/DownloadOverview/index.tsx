// "use client";

import React from "react";

const DownloadOverview = () => {
  const handleDownload = () => {
    // File should be inside /public folder
    const link = document.createElement("a");
    link.href = "https://www.comfygen.com/comfygen-images/pdf/Comfygen-Portfolio.pdf"; 
    link.download = "https://www.comfygen.com/comfygen-images/pdf/Comfygen-Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-gray-100 py-6 px-4">
      <div className="max-w-6xl mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 p-6">
        {/* Left Content */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          Download Comfygen Company Overview
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl">
            Get a quick look at Comfygen’s expertise in AI, mobile app, web, and 
            blockchain development. Explore our services, innovative solutions, 
            and global project experience — all in one comprehensive PDF.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleDownload}
          className="bg-[#5556D1] hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition duration-200"
        >
          Company Overview (Download PDF)
        </button>
      </div>
    </div>
  );
};

export default DownloadOverview;