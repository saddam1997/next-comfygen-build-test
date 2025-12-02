import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Tech({
  title,
  description,
  filterCategory = [],
  customTechData = null,
}) {
  const [tech, setTech] = useState(0);
  const router = useRouter();

  const defaultTechData = {
    
    Blockchain: [
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/ethereum.svg",
        alt: "Ethereum",
        name: "Ethereum",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/hyperledger-fabric.svg",
        alt: "Hyperledger Fabric",
        name: "Hyperledger Fabric",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/corda.svg",
        alt: "R3 Corda",
        name: "Corda",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/quorum.svg",
        alt: "Quorum",
        name: "Quorum",
        num: "4",
      }
    ],
    FrontEnd: [
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/html5.svg",
        alt: "HTML5",
        name: "HTML5",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/css3.svg",
        alt: "CSS3",
        name: "CSS3",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/javascript.svg",
        alt: "JavaScript",
        name: "JavaScript",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/typescript.svg",
        alt: "TypeScript",
        name: "TypeScript",
        num: "4",
      }
    ],
    Frameworks: [
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/angular.svg",
        alt: "Angular",
        name: "Angular",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/react.svg",
        alt: "React",
        name: "React",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/vue.svg",
        alt: "Vue.js",
        name: "Vue.js",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/svelte.svg",
        alt: "Svelte",
        name: "Svelte",
        num: "4",
      }
    ],
    Backend: [
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/java.svg",
        alt: "Java",
        name: "Java",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/python.svg",
        alt: "Python",
        name: "Python",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/nodejs.svg",
        alt: "Node.js",
        name: "Node.js",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/csharp.svg",
        alt: "C#",
        name: "C#",
        num: "4",
      }
    ],
    DevOpsAutomation: [
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/jenkins.svg",
        alt: "Jenkins",
        name: "Jenkins",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/ansible.svg",
        alt: "Ansible",
        name: "Ansible",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/terraform.svg",
        alt: "Terraform",
        name: "Terraform",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/chef.svg",
        alt: "Chef",
        name: "Chef",
        num: "4",
      }
    ],
    DevOpsContainerization: [
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/docker.svg",
        alt: "Docker",
        name: "Docker",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/kubernetes.svg",
        alt: "Kubernetes",
        name: "Kubernetes",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/openshift.svg",
        alt: "OpenShift",
        name: "OpenShift",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/rancher.svg",
        alt: "Rancher",
        name: "Rancher",
        num: "4",
      }
    ],
    ContractTesting: [
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/truffle.svg",
        alt: "Truffle",
        name: "Truffle",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/hardhat.svg",
        alt: "Hardhat",
        name: "Hardhat",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/ganache.svg",
        alt: "Ganache",
        name: "Ganache",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/mythx.svg",
        alt: "MythX",
        name: "MythX",
        num: "4",
      }
    ],
    ContractLanguages: [
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/solidity.svg",
        alt: "Solidity",
        name: "Solidity",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/go.svg",
        alt: "Go",
        name: "Go",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/java.svg",
        alt: "Java",
        name: "Java",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/kotlin.svg",
        alt: "Kotlin",
        name: "Kotlin",
        num: "4",
      }
    ],
    CloudServices: [
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/aws.svg",
        alt: "AWS Managed Blockchain",
        name: "AWS",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/ibm.svg",
        alt: "IBM Blockchain",
        name: "IBM",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/azure.svg",
        alt: "Azure Blockchain Service",
        name: "Azure",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/enterprise-blockchain-development/oracle.svg",
        alt: "Oracle Blockchain Platform",
        name: "Oracle",
        num: "4",
      }
    ],
  };

  const techData = customTechData || defaultTechData;

  const filteredTechData = Object.keys(techData)
    .filter((key) => !filterCategory.includes(key))
    .reduce((obj, key) => {
      obj[key] = techData[key];
      return obj;
    }, {});

  const techCategories = Object.keys(filteredTechData);

  return (
    <section className="lg:py-16 py-10 bg-[#F3F4F6]">
      <div className="bg-[#0C0F18] mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 md:py-14 py-8 md:px-10 px-6 rounded-3xl">
        <div className="">
          <div>
            <div className="py-4">
              <h2 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl text-white">
                {title}
              </h2>
              <p
                className="text-base mt-2 text-white"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>

          <div>
            <div className="flex whitespace-nowrap items-center gap-3 justify-start mt-2 overflow-x-auto button-scroll py-3">
              {techCategories.map((key, index) => (
                <span
                  key={index}
                  onClick={() => setTech(index)}
                  className={`px-6 py-2 md:text-base  text-sm font-normal rounded-full cursor-pointer capitalize ${
                    tech === index
                      ? "bg-[#5556D1] border border-[#5556D1] text-white"
                      : "text-white border border-white/20 hover:bg-gray-950"
                  }`}
                >
                  {key}
                </span>
              ))}
            </div>

            <div className="grid xl:grid-cols-4 gap-2 md:grid-cols-3 grid-cols-1 mt-3 max-h-[275px] overflow-y-auto  overflow-hidden  head-scroll">
              {filteredTechData[techCategories[tech]]?.map((elem) => (
                <div
                  key={elem.num}
                  className="flex items-center border justify-center rounded bg-[#1d1d1d] border-white/5 px-6 py-2 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="h-12 md:h-16 w-16 flex items-center justify-center">
                    <Image
                      src={elem.img}
                      alt={elem.name}
                      width={50}
                      height={50}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-semibold  text-white ml-3">
                    {elem.name}
                  </h3>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                // onClick={() => router.push('/contact-us')}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey) {
                    window.open("/contact-us", "_blank");
                  } else {
                    router.push("/contact-us");
                  }
                }}
                className="text-white hover:bg-[#5556D1] bg-[#0C0F18] border border-whitesss px-8 py-2.5 text-lg font-semibold rounded-full flex items-center  gap-1"
              >
                Connect Experts <MdOutlineArrowOutward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
