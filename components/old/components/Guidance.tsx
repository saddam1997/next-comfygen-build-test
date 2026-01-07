import Link from "next/link";
import React from "react";

const AboutSection = (props) => {
  return (
    <section className="bg-[#F5F5F9] lg:py-16 py-10">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="text-center">
          <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
            NFT Marketplaces Explained
          </h2>
          <p className="xl:text-base text-sm text-black lg:w-1/2 mx-auto w-full">
            NFT marketplaces are decentralized platforms where users can buy,
            sell, trade, and mint digital assets as non-fungible tokens (NFTs).
            These platforms function like digital auction houses, allowing
            creators to tokenize their assets and buyers to own verifiable
            digital assets on blockchain networks like Ethereum, Solana, Binance
            Smart Chain, and Polygon.
          </p>
        </div>
        <div className="flex mt-10 mx-auto gap-8 relative">
          <div className="sticky top-0 h-[50vh] lg:block hidden">
            <div className="bg-white rounded-lg border border-[#000]/20 py-6 px-4">
              <ul className="text-xl font-semibold space-y-4 cursor-pointer">
                <li><Link href={"#how-do-nft-marketplaces-work?"}>How Do NFT Marketplaces Work?</Link></li>
                <li><Link href={"#popular-nft-marketplaces"}>Popular NFT Marketplaces</Link></li>
                <li><Link href={"#how-to-build-an-nft-marketplace"}>How to Build an NFT Marketplace</Link></li>
                <li><Link href={"#key-features-of-an-nft-marketplace"}>Key Features of an NFT Marketplace</Link></li>
                <li><Link href={"#launching-a-successful-nft-marketplace"}>Launching a Successful NFT Marketplace</Link></li>
                <li><Link href={"#what-can-be-minted-as-nfts?"}>What Can Be Minted as NFTs?</Link></li>
                <li><Link href={"#challenges-in-nft-marketplace-development"}>Challenges in NFT Marketplace Development</Link></li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 h-screen bg-white overflow-y-scroll scrollbar-hide p-8 rounded-lg">
            <div className="space-y-2" id="how-do-nft-marketplaces-work?">
              <h2 className="text-2xl font-semibold ">
                How Do NFT Marketplaces Work?
              </h2>
              <div className="space-y-1">
                <p className="text-base text-black">
                  Users connect their crypto wallets (MetaMask, Trust Wallet,
                  etc.).
                </p>
                <p className="text-base text-black">
                  Creators mint their digital assets into NFTs.
                </p>
                <p className="text-base text-black">
                  NFTs are listed for sale with fixed prices or auctions.
                </p>
                <p className="text-base text-black">
                  Buyers purchase NFTs using cryptocurrency, ensuring
                  transparent ownership transfer.
                </p>
              </div>
            </div>
            <div className="space-y-2"  id="popular-nft-marketplaces">
              <h2 className="text-2xl font-semibold ">
                Popular NFT Marketplaces
              </h2>
              <div className="space-y-1">
                <p className="text-base text-black">
                  OpenSea – The largest NFT marketplace with multi-chain
                  support.
                </p>
                <p className="text-base text-black">
                  Rarible – A community-driven marketplace with governance
                  tokens.
                </p>
                <p className="text-base text-black">
                  SuperRare – A curated NFT art platform.
                </p>
                <p className="text-base text-black">
                  Axie Infinity – A gaming-focused NFT marketplace.
                </p>
              </div>
            </div>
            <div className="space-y-2" id="how-to-build-an-nft-marketplace">
              <h2 className="text-2xl font-semibold ">
                How to Build an NFT Marketplace
              </h2>
              <p className="text-base text-black">
                Creating a successful NFT marketplace involves multiple
                development stages. Here’s a step-by-step process:
              </p>
              <div className="space-y-1">
                <div>
                  <h3 className="text-lg font-semibold">
                    Step 1: Market Research & Planning
                  </h3>
                  <p className="text-base text-black">
                    Identify your target audience and niche (art, gaming,
                    sports, real estate, etc.). Choose the blockchain network
                    (Ethereum, Polygon, Binance Smart Chain, Solana). Decide on
                    the revenue model (transaction fees, listing fees,
                    subscriptions).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                  Step 2: UI/UX Design
                  </h3>
                  <p className="text-base text-black">
                  Design an intuitive interface for easy NFT browsing and trading.
                  Ensure mobile responsiveness for seamless transactions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                  Step 3: Smart Contract Development
                  </h3>
                  <p className="text-base text-black">
                  Develop and audit smart contracts to enable secure transactions.
                  Implement royalties for creators.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                  Step 4: Backend & Frontend Development
                  </h3>
                  <p className="text-base text-black">
                  Integrate blockchain APIs for transaction processing.
                  Implement real-time notifications for auctions and sales.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                  Step 5: Testing & Deployment
                  </h3>
                  <p className="text-base text-black">
                  Conduct security audits to prevent vulnerabilities.
                  Deploy on mainnet after testing on testnets.
                  </p>
                </div>

              </div>

              
            </div>
            <div className="space-y-2" id="key-features-of-an-nft-marketplace">
              <h2 className="text-2xl font-semibold ">
              Key Features of an NFT Marketplace
              </h2>
              <p className="text-base text-black">
              A feature-rich NFT marketplace enhances user experience and ensures platform security.
              </p>
              <div className="space-y-1">
                <div>
                  <h3 className="text-lg font-semibold">
                  Essential Features:
                  </h3>
                  <p className="text-base text-black">
                   Decentralized Wallet Integration – Supports MetaMask, WalletConnect, Coinbase Wallet.</p>
                  <p className="text-base text-black">Multi-Chain Compatibility – Ethereum, Polygon, BSC, Solana.</p>
                  <p className="text-base text-black">NFT Minting & Listing – Users can create and sell NFTs easily. </p>
                  <p className="text-base text-black">Bidding & Auction System – Enables live NFT auctions.</p>
                  <p className="text-base text-black"> Royalty System for Creators – Automates earnings for NFT resales.</p>
                  <p className="text-base text-black"> Search & Filter Options – Enhances discoverability of NFTs.</p>
                  <p className="text-base text-black"> KYC & Security Protocols – Prevents fraud and ensures compliance.</p>
                </div>
              </div>

              
            </div>
            <div className="space-y-2" id="launching-a-successful-nft-marketplace">
              <h2 className="text-2xl font-semibold ">
              Launching a Successful NFT Marketplace
              </h2>
              <p className="text-base text-black">
              For a profitable and scalable NFT marketplace, follow these steps:
              </p>
              <div className="space-y-1">
                <div>
                  <h3 className="text-lg font-semibold">
                  1. Choose the Right Blockchain
                  </h3>
                  <p className="text-base text-black">
                  Ethereum – Most widely used but has high gas fees.
                  </p>
                  <p className="text-base text-black">Polygon – Low fees and fast transactions.</p>
                  <p className="text-base text-black">Solana – Best for gaming and DeFi NFTs.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                  2. Implement a Robust Business Model
                  </h3>
                  <p className="text-base text-black">
                  Transaction Fees – Charge a percentage on every NFT sale.
                  </p>
                  <p>Membership Plans – Offer premium access for special features.</p>
                  <p>Ad Monetization – Allow creators to promote NFTs.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                  3. Focus on User Acquisition & Retention
                  </h3>
                  <p className="text-base text-black">
                  Influencer & Community Marketing – Build a strong Web3 community.
                  </p>
                  <p className="text-base text-black">Multi-Device Support – Optimize for both desktop and mobile.</p>
                  <p className="text-base text-black">Security & Compliance – Regular audits to prevent hacks.</p>
                </div>
              </div>

              
            </div>
            <div className="space-y-2" id="what-can-be-minted-as-nfts?">
              <h2 className="text-2xl font-semibold ">
              What Can Be Minted as NFTs?
              </h2>
              <p className="text-base text-black">
              NFTs can represent various digital and physical assets.
              </p>
              <div className="space-y-1">
                <div>
                  <h3 className="text-lg font-semibold">
                  Types of NFTs:
                  </h3>
                  <p className="text-base text-black">
                  Digital Art – Unique digital paintings, 3D models, AI-generated art.
                  </p>
                  <p className="text-base text-black">Music & Videos – Tokenized songs, albums, and short films.</p>
                  <p className="text-base text-black"> Virtual Real Estate – Lands in Metaverse platforms (Decentraland, Sandbox).</p>
                  <p className="text-base text-black">Gaming Assets – Play-to-earn game skins, characters, and weapons.</p>
                  <p className="text-base text-black"> Sports & Collectibles – Tokenized sports moments, trading cards.</p>
                  <p className="text-base text-black">Domain Names – Web3 domains like .eth, .crypto.</p>
                </div>
              </div>

              
            </div>
            <div className="space-y-2" id="challenges-in-nft-marketplace-development">
              <h2 className="text-2xl font-semibold ">
              Challenges in NFT Marketplace Development
              </h2>
              <p className="text-base text-black">
              Developing an NFT marketplace comes with its own set of challenges.
              </p>
              <div className="space-y-1">
                <div>
                  <h3 className="text-lg font-semibold">
                  1. High Gas Fees & Scalability Issues
                  </h3>
                  <p className="text-base text-black">
                  Solution: Use Layer-2 solutions (Polygon, Optimism) for cost-effective transactions.
                  </p>
          
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                  2. Security Risks & Smart Contract Vulnerabilities
                  </h3>
                  <p className="text-base text-black">
                  Solution: Conduct regular security audits and implement multi-signature wallets.
                  </p>
          
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                  3. Regulatory Compliance & Copyright Issues
                  </h3>
                  <p className="text-base text-black">
                  Solution: Implement KYC & AML policies and intellectual property verification.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                  4. Low Liquidity & Market Competition
                  </h3>
                  <p className="text-base text-black">
                  Solution: Build community engagement strategies and offer unique platform features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
