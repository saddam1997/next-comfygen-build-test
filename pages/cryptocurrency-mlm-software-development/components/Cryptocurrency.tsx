import React, { useState } from "react";
import Image from "next/image";
import { title } from "process";
import Link from "next/link";

export default function Cryptocurrency() {
  const currency = [
    { color: "bicano", img: "https://www.comfygen.com/img/bitcoin-cryptocurrency-icon.svg", name: 'Bitcoin', url: "#" },
    { color: "Cardano", img: "https://www.comfygen.com/img/stackimg/ethereum.svg", name: 'Ethereum ', url: "/ethereum-token-development" },
    { color: "Coinbase", img: "https://www.comfygen.com/img/litecoin-cryptocurrency.svg", name: 'Litecoin', url: "#" },
    { color: "EOS", img: "https://www.comfygen.com/img/tether-cryptocurrency.svg", name: 'Tether', url: "#" },
    { color: "Ethereum", img: "https://www.comfygen.com/img/xrp-cryptocurrency.svg", name: 'XRP', url: "#" },
    { color: "Ethers", img: "https://www.comfygen.com/img/binance-coin-bnb.svg", name: 'BNB', url: "#" },
    { color: "Solana", img: "https://www.comfygen.com/img/tron-cryptocurrency.svg", name: 'Tron', url: "/tron-token-development" },
    { color: "Metamask", img: "https://www.comfygen.com/images/icons/polygon.webp", name: 'Polygon', url: "#" },
    { color: "Polkadot", img: "https://www.comfygen.com/img/solana-sol.svg", name: 'Solana', url: "/solana-token-development" },
  ];
  return (
    <>
      <div className="py-10 bg-[#02122D]">
        <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-14">
          <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
            <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Coin/Token Development Solution for <span className="text-blue-600">MLM Business</span>
            </h2>
            <p className="text-white">We provide cryptocurrency coin/token development services for the following platforms in MLM software solutions.</p>
          </div>
          <section className="items-center space-y-10 md:space-y-0 md:px-0 px-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 md:grid-cols-4 lg:gap-6">
              {currency.map((item, index) => (
                <Link href={item.url} passHref={true}>
                  <div key={index} className={`space-y-4 rounded-3xl flex flex-col justify-between p-3 cursor-pointer border transition-all shadow-xl duration-150 backdrop-blur-xl ${item.color.replace(/\s+/g, '-')}`}>
                    <Image src={item.img} alt={item.name} className="mx-auto" width={80} height={60} />
                    <h3 className="text-center font-semibold text-lg text-slate-800 capitalize">{item.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </div>
    </>
  );
}