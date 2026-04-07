import Image from "next/image";
import HeroClient from "./HeroClient";
import StatsBanner from "./StatsBanner";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-[#1a1a4f]">

        {/*  Background Image (SSR + CLS SAFE) */}
        <Image
          src="https://www.comfygen.com/comfygen-images/crypto-wallet-development/crypto-development-company.webp"
          alt="AI Development Company"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/90 to-transparent" /> */}

        {/*  Content (VISIBLE IN VIEW SOURCE) */}
        <div className="relative z-10 max-w-[1200px] xl:px-0 px-4 mx-auto  h-full flex items-center">
          <div className="max-w-[600px] space-y-4">

            <h1 className="text-white text-3xl sm:text-4xl lg:text-3xl font-bold leading-tight">
              AI-Powered Crypto Wallet Development Company
            </h1>

            <p className="text-white text-sm sm:text-base min-h-[60px]">
              Empower your users with next-generation crypto wallet development services that combine advanced blockchain security, seamless user experience, and multi-chain support. Whether you need a custom crypto wallet app, DeFi wallet, or NFT-compatible digital wallet, our blockchain development experts deliver tailor-made crypto wallet development solutions for startups and enterprises alike.
            </p>

            {/*  CLIENT CTA (only this part hydrates) */}
            <HeroClient />
            <StatsBanner />
          </div>
        </div>
      </section>
    </>
  );
}