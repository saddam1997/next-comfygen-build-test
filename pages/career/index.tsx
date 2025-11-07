import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/career.json"
import LazyLoad from "react-lazy-load";
import HeroSectionForCompany from "../components/HeroSectionForCompany";
import PositionSec from "./components/PositionSec";
import CareerForm from "../components/CareerForm";


const BlogSection = dynamic(() => import("../components/BlogSection1"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
export default function career(props) {
  let { initialData } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [states, setStates] = useState("");
  const [jobType, setJobType] = useState<any>();
  const [city, setCity] = useState("");
  const [relocate, setRelocate] = useState("");
  const [crntLocation, setCrntLocation] = useState("");
  const [stdCode, setStdCode] = useState("");
  const [msg, setMsg] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    const dataData = async () => {
      const data = {
        name: name,
        email: email,
        mobNo: mobNo,
        jobType: jobType,
        msg: msg,
        states: states,
        city: city,
        stdCode: stdCode,
        crntLocation: crntLocation,
        relocate: "YES"
      };
      console.log("datad ", data);
      const response = await fetch(process.env.URL + "/api/v1/createCareer ", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      console.log("datadatada ", data);
      return response.json();
    };
    setShowThankYou(true);
    dataData().then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }



  const [showThankYou, setShowThankYou] = useState(false);


  const [apiData, setApiData] = useState("");
  const [apiDataJobType, setApiDataJobType] = useState("");



  async function CallAllAPIfunction() {
    const apiUrl1 = 'https://www.comfygen.com/api/v1/getAllCategory';
    const apiUrl2 = 'https://www.comfygen.com/api/v1/getJobCategoryList';

    const data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    };

    const header = {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // body:JSON.stringify(data)
    };

    try {
      const response1 = await fetch(apiUrl1);
      const data1 = await response1.json();
      setApiData(data1);

      const response2 = await fetch(apiUrl2, header);
      const data2 = await response2.json();
      setApiDataJobType(data2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    CallAllAPIfunction();
  }, []);



  console.log("apiData::::", apiData)
  console.log("apiDataJobType::::", apiDataJobType)

  const [currentCount, setCurrentCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenData, setModalOpenData] = useState<any>({});


  console.log("RENDER____________modalOpenData", modalOpenData);


  const [errorsContactUs, setErrorsContactUs] = useState({});

  const handleCountryChange = (event) => {
    let errors = {};
    if (event.target.value !== "SELECTED") {
      setStdCode(event.target.value);
      errors["stdCode"] = "";
    } else {
      errors["stdCode"] = "Please select Std Code!";
    }
    setErrorsContactUs(errors);
  };


  function handleRecaptchaChange(token) {
    setRecaptchaToken(token);
  }




  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };



  return (
    <>
      <Head>
        <title>Job Openings & Career opportunities at - Comfygen.com</title>
        <meta
          name="description"
          content="Work at Comfygen, Join a team and inspire the work. Find the best job opportunity to advance your career."
        />
        <link rel="canonical" href="https://www.comfygen.com/career" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Job Openings & Career opportunities at - Comfygen.com"
        />
        <meta
          property="og:description"
          content="Work at Comfygen, Join a team and inspire the work. Find the best job opportunity to advance your career."
        />
        <meta property="og:url" content="https://www.comfygen.com/career" />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-06T08:49:10+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/blockchain-mim-software.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">
        <div className="lg:bg-right bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/career-hero-img.webp')]">
          <HeroSectionForCompany
            heading="Join Our Tech Revolution"
            ptag="Empowering Innovators to Shape the Future of IT."
            btnName="Talk With Expert"
            btnLink="/contact-us"
            img={{
              src: "https://www.comfygen.com/image/career-hero-image.webp",
              width: 754, 
              height: 382  
            }}
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />

        </div>
        <PositionSec />
        <section className="w-full lg:py-16 py-10 bg-white">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 ">
              <div className="space-y-4 text-center">
                <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                  What are we looking for?
                </h2>
                <p className="text-base text-[#212121] font-normal w-full">
                  We’re not just developing websites and apps here, we’re making
                  values and the foundation of our company.
                </p>
              </div>
              <div className="grid lg:gap-10 gap-6 pt-8 lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.Arena.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="space-y-4 career-card-item relative overflow-hidden text-left border text-white rounded-md bg-gradient-to-r from-[#272868] to-[#5556d1] duration-200 transition cursor-pointer" >
                      <div className="p-10 space-y-3">
                        <h2 className="lg:text-3xl text-xl font-bold ">{title}</h2>
                        <p className="text-base  ">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <CareerForm/>
        {/*<BlogSection initialData={initialData} />*/}
      </div >
    </>
  );
}
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
