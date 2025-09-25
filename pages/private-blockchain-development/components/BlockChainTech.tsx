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
    
    permissioned: [
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/hyperledger-fabric.svg",
        alt: "Hyperledger Fabric",
        name: "Hyperledger Fabric",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/corda.svg",
        alt: "R3 Corda",
        name: "R3 Corda",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/quorum.svg",
        alt: "Quorum",
        name: "Quorum",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/multichain.svg",
        alt: "Multichain",
        name: "Multichain",
        num: "4",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/besu.svg",
        alt: "Besu",
        name: "Besu",
        num: "5",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/tendermint.svg",
        alt: "Tendermint",
        name: "Tendermint",
        num: "6",
      },
    ],
    integration: [
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/kafka.svg",
        alt: "Kafka",
        name: "Kafka",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/restapi.svg",
        alt: "RESTful APIs",
        name: "RESTful APIs",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/grpc.svg",
        alt: "gRPC",
        name: "gRPC",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/mulesoft.svg",
        alt: "MuleSoft",
        name: "MuleSoft",
        num: "4",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/rabbitmq.svg",
        alt: "RabbitMQ",
        name: "RabbitMQ",
        num: "5",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/esb.svg",
        alt: "Enterprise Service Bus",
        name: "Enterprise Service Bus",
        num: "6",
      },
    ],
    backendLogic: [
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/java.svg",
        alt: "Java",
        name: "Java",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/go.svg",
        alt: "Go",
        name: "Go",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/typescript.svg",
        alt: "TypeScript",
        name: "TypeScript",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/python.svg",
        alt: "Python",
        name: "Python",
        num: "4",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/nodejs.svg",
        alt: "Node.js",
        name: "Node.js",
        num: "5",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/chaincode.svg",
        alt: "Chaincode (Fabric)",
        name: "Chaincode (Fabric)",
        num: "6",
      },
    ],
    identityAccess: [
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/ldap.svg",
        alt: "LDAP",
        name: "LDAP",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/oauth.svg",
        alt: "OAuth 2.0",
        name: "OAuth 2.0",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/active-directory.svg",
        alt: "Active Directory",
        name: "Active Directory",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/saml.svg",
        alt: "SAML",
        name: "SAML",
        num: "4",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/zero-trust.svg",
        alt: "Zero Trust Policies",
        name: "Zero Trust Policies",
        num: "5",
      },
    ],        
    consensus: [
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/pbft.svg",
        alt: "PBFT",
        name: "PBFT",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/raft.svg",
        alt: "Raft",
        name: "Raft",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/ibft.svg",
        alt: "IBFT",
        name: "IBFT",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/zkp.svg",
        alt: "ZKP Integration",
        name: "ZKP Integration",
        num: "4",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/private-channels.svg",
        alt: "Private Channels",
        name: "Private Channels",
        num: "5",
      },
    ],

    Auditability: [
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/logdna.svg",
        alt: "LogDNA",
        name: "LogDNA",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/prometheus.svg",
        alt: "Prometheus",
        name: "Prometheus",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/grafana.svg",
        alt: "Grafana",
        name: "Grafana",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/siem.svg",
        alt: "SIEM Integrations",
        name: "SIEM Integrations",
        num: "4",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/chain-monitoring.svg",
        alt: "Chain Monitoring Tools",
        name: "Chain Monitoring Tools",
        num: "5",
      },
    ],

    secureDevOps: [
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/docker.svg",
        alt: "Docker",
        name: "Docker",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/kubernetes.svg",
        alt: "Kubernetes",
        name: "Kubernetes",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/terraform.svg",
        alt: "Terraform",
        name: "Terraform",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/vault.svg",
        alt: "Vault by HashiCorp",
        name: "Vault by HashiCorp",
        num: "4",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/jenkins.svg",
        alt: "Jenkins",
        name: "Jenkins",
        num: "5",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/aws-govcloud.svg",
        alt: "AWS GovCloud",
        name: "AWS GovCloud",
        num: "6",
      },
    ],
    
    dataStorage: [
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/postgresql.svg",
        alt: "PostgreSQL",
        name: "PostgreSQL",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/couchdb.svg",
        alt: "CouchDB (Fabric)",
        name: "CouchDB (Fabric)",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/hsm.svg",
        alt: "HSM Integration",
        name: "HSM Integration",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/tls.svg",
        alt: "TLS Encryption",
        name: "TLS Encryption",
        num: "4",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/private-data.svg",
        alt: "Private Data Collections",
        name: "Private Data Collections",
        num: "5",
      },
    ],

    testingGovernance: [
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/explorer.svg",
        alt: "Hyperledger Explorer",
        name: "Hyperledger Explorer",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/unit-testing.svg",
        alt: "Smart Contract Unit Testing",
        name: "Smart Contract Unit Testing",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/policy-engine.svg",
        alt: "Policy Engines",
        name: "Policy Engines",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/governance-dashboard.svg",
        alt: "Governance Dashboards",
        name: "Governance Dashboards",
        num: "4",
      },
    ],
    
    advancedPlatforms: [
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/hyperledger-fabric.svg",
        alt: "Hyperledger Fabric",
        name: "Hyperledger Fabric",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/corda2.svg",
        alt: "Corda",
        name: "Corda",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/quorum.svg",
        alt: "Quorum",
        name: "Quorum",
        num: "3",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/ripple.svg",
        alt: "Ripple",
        name: "Ripple",
        num: "4",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/multichain.svg",
        alt: "MultiChain",
        name: "MultiChain",
        num: "5",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/private-blockchain-development/stellar.svg",
        alt: "Stellar",
        name: "Stellar",
        num: "6",
      },
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
