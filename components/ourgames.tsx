import React, { useState } from "react";
import Image from "next/image";
import { url } from "inspector";

const gamedev = [
  { img: "https://www.comfygen.com/svg/ourgames/ludo.webp", name: "Ludo Game Development", num: "1", url: '/ludo-game-development' },
  { img: "https://www.comfygen.com/svg/ourgames/poker.webp", name: "Poker Game Development", num: "2", url: '/poker-game-development' },
  { img: "https://www.comfygen.com/svg/ourgames/rummy.webp", name: "Rummy Game Development", num: "3", url: '/rummy-game-development' },
  { img: "https://www.comfygen.com/svg/ourgames/baccarat.webp", name: "Baccarat Game Development", num: "4", url: '/baccarat-game-development' },
  { img: "https://www.comfygen.com/svg/ourgames/omaha-poker-game-development.webp", name: "Omaha Poker Game Development", num: "5", url: '/omaha-poker-game-development' },
  { img: "https://www.comfygen.com/svg/ourgames/video-game-development.webp", name: "Video Game Development", num: "6", url: '/video-game-development' },
  { img: "https://www.comfygen.com/svg/ourgames/blackjack-game-development.webp", name: "Blackjack Game Development", num: "8", url: '/blackjack-game-development' },
  { img: "https://www.comfygen.com/svg/ourgames/chess-game-development.webp", name: "Chess Game Development", num: "9", url: '/chess-game-development' },
  { img: "https://www.comfygen.com/svg/ourgames/multigaming-plateform-app-development.webp", alt: 'Multigaming Platform App Development', name: "Multigaming Platform App Development", num: "9", url: '/multigaming-platform-app-development' },


];

const GameApiFantasy = [
  { img: "https://www.comfygen.com/svg/ourgames/cricket-live-line-api.webp", name: "Cricket Live Line API", num: "1", url: '/cricket-live-line-api' },

 
  
];
const SportsBetting = [
  { img: "https://www.comfygen.com/svg/tech/poker-chip.webp", name: "Betting App Development", num: "3", url: '/sports-betting-app-development' },
  { img: "https://www.comfygen.com/svg/tech/betting.webp", name: "Sports Betting Software Development", num: "4", url: '/sports-betting-software-development' },
  { img: "https://www.comfygen.com/svg/tech/sports-betting website.webp", name: "Sports Betting Website Development", num: "5", url: '/sports-betting-website-development' },
  { img: "https://www.comfygen.com/svg/tech/cricket.webp", name: "Cricket Betting Software Development", num: "6", url: '/cricket-betting-software-development' },
  { img: "https://www.comfygen.com/svg/tech/snooker.webp", name: "Matka App Development Company", num: "7", url: '/satta-matka-game-app-development-company' },
];

export default function Ourgames({ hideSportBettingTab = false, hideFantasyGames = false }) {
  const [tech, setTech] = useState(0);

  return (
    <>
      {/* technology*/}
      <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
        <div className=" space-y-10  2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className=" py-4">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#fff] text-center xl:w-3/6 mx-auto">
              Our Best Games Development
            </h2>
          </div>
          {/* tabs */}
          <div className="flex md:flex-row flex-col items-center md:space-x-4 space-x-0 md:space-y-0 space-y-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap ">
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={
                tech === 0
                  ? "bg-[#fff] border border-[#fff] text-[#000] px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
                  : "bg-transparent  text-[#fff] border border-[#fff] px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
              }
            >
              game development
            </span>
            {
              !hideSportBettingTab && (
                <span
                  onClick={() => setTech(tech === 2 ? 0 : 2)}
                  className={
                    tech === 2
                      ? "bg-[#fff] border border-[#fff] text-[#000] px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
                      : "bg-transparent  text-[#fff] border border-[#fff] px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
                  }
                >
                  Sports Betting Games
                </span>
              )
            }

            {
              !hideFantasyGames && (<span
                onClick={() => setTech(tech === 1 ? 0 : 1)}
                className={
                  tech === 1
                    ? "bg-[#fff] border border-[#fff] text-[#000] px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
                    : "bg-transparent  text-[#fff] border border-[#fff] px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
                }
              >
                Fantasy & api game  development
              </span>)
            }


          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-8 gap-6 relative capitalize">
            {tech === 0 ? (
              <>
                {gamedev.map((elem: any) => {
                  const { img, name, num, url } = elem;
                  return (
                    <a
                      href={url}
                      key={num}
                      className="flex justify-start items-center rounded-lg bg-white  space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group "
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={name} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {name}
                        </h3>
                      </div>
                    </a>
                  );
                })}
              </>
            ) : null}

            {tech === 1 ? (
              <>
                {GameApiFantasy.map((elem: any) => {
                  const { img, name, num, url } = elem;
                  return (
                    <a
                      href={url}
                      key={num}
                      className="flex justify-start items-center rounded-lg bg-white  space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group "
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={name} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {name}
                        </h3>
                      </div>
                    </a>
                  );
                })}
              </>
            ) : null}
            {tech === 2 ? (
              <>
                {SportsBetting.map((elem: any) => {
                  const { img, name, num, url } = elem;
                  return (
                    <a
                      href={url}
                      key={num}
                      className="flex justify-start items-center rounded-lg bg-white  space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group "
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={name} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {name}
                        </h3>
                      </div>
                    </a>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
