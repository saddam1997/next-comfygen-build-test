// WhoCanStartServer.tsx
import React from "react";
import WhoCanStartClient from "./WhoCanStartClient";



const WhoCanStartServer = ({ cards }:any) => {
  return (
    <section className="bg-[#5556D1] max-w-9xl mt-8">

      <div className="py-10 px-4 max-w-6xl mx-auto">

        {/* ✅ SEO IMPROVED HEADER */}
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-white">
            {cards?.title}
          </h2>

          {/* If HTML needed, switch back to dangerouslySetInnerHTML */}
          <p className="text-white">
            {cards?.description}
          </p>
        </header>

        {/* CLIENT PART */}
        <WhoCanStartClient card={cards?.WhoCanStart} />

      </div>
    </section>
  );
};

export default WhoCanStartServer;