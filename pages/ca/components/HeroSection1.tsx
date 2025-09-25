import { useState, useEffect } from "react";
export default function HeroSection1(props: any) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 7) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const [counttwo, setCounttwo] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounttwo((prevCount) => {
        if (prevCount === 100) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const [countthree, setCountthree] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountthree((prevCount) => {
        if (prevCount === 50) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const [countfour, setCountfour] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountfour((prevCount) => {
        if (prevCount === 100) {
          clearInterval(interval);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const [typedText] = useState("");
  const CompanyData =
    [
      {
        num: '1',
        title: 'country served',
        data: count,
      },
      {
        num: '2',
        title: ' project delivered',
        data: counttwo,
      },
      {
        num: '3',
        title: 'running project',
        data: countthree,
      },
      {
        num: '4',
        title: 'Total Client',
        data: countfour,
      }
    ]
  return (
    <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:block hidden">
                <div className="blur-0  bg-gradient-to-br from-[#16BDFA]/20 to-[#B463BF]/20 rounded-2xl capitalize">
                  <div className="grid grid-cols-2 gap-10 py-10 lg:grid-cols-4 xl:gap-6 lg:divide-x divide-white/20">
                    {CompanyData.map((elem, index) => {
                      const { title, data, num } = elem;
                      return (
                        <div key={index} className="space-y-4 text-center capitalize">
                          <p className="text-2xl font-bold text-white lg:text-5xl">
                            {data} +
                          </p>
                          <p className="text-[12px] lg:text-xl text-white/80 ">
                            {title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
  );
}