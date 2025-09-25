import React, { useState } from "react";
import Image from "next/image";

const Supported = [
  { img: "https://www.comfygen.com/media/svg/file-type-light-solidity.svg", name: "Solidity", },
  { img: "https://www.comfygen.com/img/chaincode.webp", name: "Chaincode", },
  { img: "https://www.comfygen.com/img/consensus-alogorithm.webp", name: "Consensus Alogorithm", },
  { img: "https://www.comfygen.com/img/etherum-virtual-machine.webp", name: "Etherum Virtual Machine", },
  { img: "https://www.comfygen.com/img/dapp.webp", name: "dApp", },
];

const Containerization = [
  { img: "https://www.comfygen.com/img/docker.webp", name: "Docker", },
  { img: "https://www.comfygen.com/img/kubernetes.webp", name: "Kubernetes", },
  { img: "https://www.comfygen.com/img/elastic-box.webp", name: "Elastic Box", },
  { img: "https://www.comfygen.com/img/eks-ecr.webp", name: "EKS/ECR", },
];

const Cryptocurrencies = [
  { img: "https://www.comfygen.com/img/eks-ecr.webp", name: "ECR", },
  { img: "https://www.comfygen.com/img/bitcoin.webp", name: "Bitcoin", },
  { img: "https://www.comfygen.com/img/ethererum.webp", name: "Ethereum", },
  { img: "https://www.comfygen.com/img/ripple-xpr.webp", name: "Ripple (XPR)", },
  { img: "https://www.comfygen.com/img/xpr.webp", name: "XPR", },
  { img: "https://www.comfygen.com/img/hire-blockchain-stellar.webp", name: "Stellar", },
  { img: "https://www.comfygen.com/img/hire-blockchain-tron.webp", name: "Tron", },
  { img: "https://www.comfygen.com/img/doge.webp", name: "DOGE", },
];
const ApiIntegration = [
  { img: "https://www.comfygen.com/img/binance.webp", name: "Binance", },
  { img: "https://www.comfygen.com/img/coinbase.webp", name: "Coinbase", },
  { img: "https://www.comfygen.com/img/swytx.webp", name: "Swytx", },
  { img: "https://www.comfygen.com/img/xpr.webp", name: "XPR", },
  { img: "https://www.comfygen.com/img/cardano.webp", name: "Cardano", },
];
const TransactionalComponent = [
  { img: "https://www.comfygen.com/img/hire-blockchain-smart-contract.webp", name: "Smart Contract", },
  { img: "https://www.comfygen.com/img/gas-limit-transactions.webp", name: "Gas Limit, Transactions", },
  { img: "https://www.comfygen.com/img/gas-optimisation.webp", name: "Gas Optimisation", },
  { img: "https://www.comfygen.com/img/fungible-token.webp", name: "Fungible Token", },
  { img: "https://www.comfygen.com/img/nft.webp", name: "NFT", },
  { img: "https://www.comfygen.com/img/ico.webp", name: "ICO", },
];
const NetworkSecurity = [
  { img: "https://www.comfygen.com/img/node.webp", name: "Node", },
  { img: "https://www.comfygen.com/img/ledger.webp", name: "Ledger", },
  { img: "https://www.comfygen.com/img/wallet.webp", name: "Wallet", },
  { img: "https://www.comfygen.com/img/nonce.webp", name: "Nonce", },
  { img: "https://www.comfygen.com/img/hash.webp", name: "Hash", },
];
const Ledgers = [
  { img: "https://www.comfygen.com/img/public-ledger.webp", name: "Public Ledger", },
  { img: "https://www.comfygen.com/img/distributed-ledger.webp", name: "Distributed Ledger", },
  { img: "https://www.comfygen.com/img/decentralized-ledger.webp", name: "Decentralized Ledger", },
];
const Wallets = [
  { img: "https://www.comfygen.com/img/my-ether-wallet.webp", name: "MyEther Wallet", },
  { img: "https://www.comfygen.com/img/metamask-wallet.webp", name: "MetaMask Wallet", },
  { img: "https://www.comfygen.com/img/non-custodial-wallets.webp", name: "Non-Custodial Wallet", },
  { img: "https://www.comfygen.com/img/mobile-wallets.webp", name: "Mobile Wallets", },
  { img: "https://www.comfygen.com/img/paper-wallet.webp", name: "Paper Wallet", },
  { img: "https://www.comfygen.com/img/hardware-wallet.webp", name: "Hardware Wallet", },
  { img: "https://www.comfygen.com/img/desktop-wallet.webp", name: "Desktop Wallet", },
];
const Languages = [
  { img: "https://www.comfygen.com/img/node.webp", name: "Node.js", },
  { img: "https://www.comfygen.com/img/golang.webp", name: "Golang", },
  { img: "https://www.comfygen.com/img/javascript-jquery.webp", name: "JavaScript/JQuery", },
  { img: "https://www.comfygen.com/img/angular.webp", name: "Angular", },
  { img: "https://www.comfygen.com/img/java.webp", name: "Java", },
];

export default function Ourgames() {
  const [tech, setTech] = useState(0);
  const technologyData = [Supported, Containerization, Cryptocurrencies, ApiIntegration, TransactionalComponent, NetworkSecurity, Ledgers, Wallets, Languages];

  return (
    <section className="lg:py-16 py-10">
      <div className="space-y-10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h2 className="font-bold text-2xl 2xl:text-4xl xl:text-3xl text-[#212121] text-center">Technology Included Blockchain Development</h2>
          <p>Hire offshore Blockchain developers with expertise in the newest Blockchain technology to create custom apps that meet your company's needs:</p>
        </div>
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 py-6 overflow-x-auto whitespace-nowrap">
          {["Supported Environment", "Containerization", "Cryptocurrencies", "API Integration", "Transactional Component", "Network & Security", "Ledgers", "Wallets", "Languages"].map((label, index) => (
            <span
              key={index}
              onClick={() => setTech(index)}
              className={`border border-[#5556D1]  ${tech === index ? "bg-[#5556D1] text-white" : "bg-transparent text-[#5556D1]"} px-4 py-2 text-sm font-bold rounded-full capitalize cursor-pointer flex justify-center text-center w-full`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 capitalize">
          {technologyData[tech].map((elem, index) => (
            <a
              key={index}
              className="flex items-center justify-start rounded-lg bg-[#5556D1]/20 space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center">
                <Image src={elem.img} alt={elem.name} width={50} height={50} className="group-hover:scale-105 transition-all duration-200 transform" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">{elem.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
