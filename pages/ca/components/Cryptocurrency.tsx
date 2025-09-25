import React, { useState } from "react";
import Image from "next/image";
import { title } from "process";
import Link from "next/link";
const currency = [
  { img: "https://www.comfygen.com/images/stackimg/binance.svg", name: 'Binance', num: "1", },
  { img: "https://www.comfygen.com/images/stackimg/cardano.svg", name: 'Cardano ', num: "2", },
  { img: "https://www.comfygen.com/images/stackimg/coinbase.svg", name: 'coinbase', num: "3", },
  { img: "https://www.comfygen.com/images/stackimg/eos.svg", name: 'EOS', num: "4", },
  { img: "https://www.comfygen.com/images/stackimg/ethereum.svg", name: 'Ethereum', num: "5", },
  { img: "https://www.comfygen.com/images/stackimg/ethers-js.svg", name: 'Ethers JS', num: "6", },
  { img: "https://www.comfygen.com/images/stackimg/walletconnect.svg", name: 'walletconnect', num: "7", },
  { img: "https://www.comfygen.com/images/stackimg/trust-wallet.svg", name: 'trust wallet ', num: "8", },
  { img: "https://www.comfygen.com/images/stackimg/solona.svg", name: 'Solana', num: "9", },
  { img: "https://www.comfygen.com/images/stackimg/polygon.svg", name: 'Polygon', num: "10", },
  { img: "https://www.comfygen.com/images/stackimg/polkadot.svg", name: 'polkadot', num: "11", },
  { img: "https://www.comfygen.com/images/stackimg/metamask.svg", name: 'metamask', num: "12", },
];
export default function Cryptocurrency() {
  const [showdata, setdata] = useState(1);
  return (
    <>
      <div className="py-10 bg-white">
        <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-14">
          <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
            <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Our Cryptocurrency <span className="text-blue-600">Development Technology</span> Stack
            </h2>
          </div>
          <section className="items-center space-y-10 md:space-y-0 md:px-0 px-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-7 md:grid-cols-4 lg:gap-6 ">
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 bicano backdrop-blur-xl ">
                <div className="">
                  <Image src="https://www.comfygen.com/img/stackimg/binance.svg" alt={title} className="mx-auto" width={80} height={60} />
                </div>
                <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Binance</h3>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl Cardano">
                <div className="">
                  <Image src="https://www.comfygen.com/img/stackimg/cardano.svg" alt={title} className="mx-auto" width={80} height={60} />
                </div>
                <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Cardano</h3>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl Coinbase">
                <div className="">
                  <Image src="https://www.comfygen.com/img/stackimg/coinbase.svg" alt={title} className="mx-auto" width={80} height={60} />
                </div>
                <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Coinbase</h3>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl EOS">
                <div className="">
                  <Image src="https://www.comfygen.com/img/stackimg/eos.svg" alt={title} className="mx-auto" width={80} height={60} />
                </div>
                <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">EOS</h3>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl Ethereum">
                <Link href="/ethereum-token-development" passHref={true}>
                  <div className="">
                    <Image src="https://www.comfygen.com/img/stackimg/ethereum.svg" alt={title} className="mx-auto" width={80} height={60} />
                  </div>
                  <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Ethereum</h3>
                </Link>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl Ethers">
                <div className="">
                  <Image src="https://www.comfygen.com/img/stackimg/ethers-js.svg" alt={title} className="mx-auto" width={80} height={60} />
                </div>
                <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Ethers JS</h3>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl Solana">
                <Link href="/solana-token-development" passHref={true}>
                  <div className="">
                    <Image src="https://www.comfygen.com/img/stackimg/solona.svg" alt={title} className="mx-auto" width={80} height={60} />
                  </div>
                  <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Solana</h3>
                </Link>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl Metamask">
                <div className="">
                  <Image src="https://www.comfygen.com/img/stackimg/metamask.svg" alt={title} className="mx-auto" width={80} height={60} />
                </div>
                <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Metamask</h3>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl Polkadot">
                <div className="">
                  <Image src="https://www.comfygen.com/img/stackimg/polkadot.svg" alt={title} className="mx-auto" width={80} height={60} />
                </div>
                <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Polkadot</h3>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl Trust ">
                <div className="">
                  <Image src="https://www.comfygen.com/img/stackimg/trust-wallet.svg" alt={title} className="mx-auto" width={80} height={60} />
                </div>
                <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Trust Wallet</h3>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl Polygon">
                <Link href="/polygon-blockchain-development" passHref={true}>
                  <div className="">
                    <Image src="https://www.comfygen.com/img/stackimg/polygon.svg" alt={title} className="mx-auto" width={80} height={60} />
                  </div>
                  <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Polygon</h3>
                </Link>
              </div>
              <div className="space-y-4  rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl Wallet">
                <Link href="/crypto-wallet-development" passHref={true}>
                  <div className="">
                    <Image src="https://www.comfygen.com/img/stackimg/walletconnect.svg" alt={title} className="mx-auto" width={80} height={60} />
                  </div>
                  <h3 className="text-center font-semibold text-lg text-slate-800 capitalize ">Wallet C.</h3>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}