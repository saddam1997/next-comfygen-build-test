import styles from '../styles.module.css'

export default function GuidSectionBlockchain() {
  return (
    <section className="bg-gray-100 space-y-10 py-10 ">
      <div className="flex flex-col justify-center text-center mx-auto   2xl:w-9/12 xl:w-5/6 w-11/12">
        <h2 className=" py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
          A Guide to Blockchain Development
        </h2>
        <p className='text-base text-slate-800'>Blockchain acquired an integral part in small start-ups to large-scale enterprises in different industries. The immutability, security, and tracking made technology vastly known and useful. Before you sign the NDA with us for your next blockchain project with us, we would enlighten the blockchain development guide. This knowledge will help you understand things better, and learn what we are doing. </p>
      </div>
      <div className="items-start mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-10 xl:flex xl:space-x-10 xl:space-y-0">
        <div className="flex flex-col  justify-center lg:w-[30%] w-full lg:justify-start space-y-2 bg-[#F1F5F9] rounded-lg shadow-2xl p-6 sticky top-0">
          <a href="#what-is-blockchain">
            What is Blockchain?
          </a>
          <a href="#how-does-blockchain-work?">
            How Does Blockchain Work?
          </a>
          <a href="#benefits-of-blockchain-solution-in-organizations">
            Benefits of Blockchain Solution in Organizations
          </a>
          <a href="#when-should-i-invest-in-blockchain-development">
            When Should I Invest in Blockchain Development?
          </a>
        </div>
        <div className={`lg:w-[70%] w-full space-y-4 h-[900px]  overflow-y-auto ${styles.hidescroller}`}>
          <div className="">
            <div className="p-4 space-y-3 bg-white" id='what-is-blockchain'>
              <h3 className="text-[#0E1F51] text-xl font-bold">
                What is Blockchain?
              </h3>
              <p>Blockchain is an immutable digital ledger, where the transactions and data is stored and tracked in real-time. Also the technology will keep monitoring tangible and intangible assets lying in the computer network. The transactions are in the form of blocks through cryptography, and later they are recorded, tracked, and copied into each server known as node; which is linked to the whole computer network.</p>
              <p>However blockchain is decentralized, meaning a distributed database where the stored data is accessible through the members of the blockchain network on their dedicated servers. This is how every member can function with data on their computer, but if in case any file or data is manipulated then thousands other existing copies of similar data at different servers will identify malpractice and eliminate the error immediately.</p>
              <p>Blockchain technology brings transparency, real-time traceability, speed, and reduced time & cost in the organizational operations.</p>
            </div>
            <div className="p-4 space-y-3 bg-white" id='how-does-blockchain-work?' >
              <h3 className="text-[#0E1F51] text-lg font-bold">
                How Does Blockchain Work?
              </h3>
              <p>Before Comfygen receives any query or project; we would like to clear the techies of how blockchain works. Read the 3 simple steps to understand its working process: </p>
              <ul className='list-disc px-6'>
                <li><span className='text-sm font-bold'>Creation of Blocks :</span> When any transaction happens, the data is transmitted to a node distributed network. The nodes will verify the transaction. If it's an approved transaction, later the data gets recorded in block.</li>
                <li><span className='text-sm font-bold'>Block Linking :</span> Every block has a certain storage capacity. Once the block is full, remaining data will be transferred to the newly generated block in real-time. The new block will use code called hash to link previous blocks together. However, the linking also enables tracing any tampering that happens with the transaction meanwhile. The linking process from one block to another will create a chain.</li>
                <li><span className='text-sm font-bold'>Complete the Chain :</span> All the transactions are blocked together at one blockchain, which is wholly verified and secured to record the entire database.</li>
                <li>With the fully verified and secured technology, SMBs to Large Scale Enterprises; all can save, secure, trace, and trade with data in the real-time. </li>
              </ul>
            </div>
            <div className="p-4 space-y-3 bg-white" id='benefits-of-blockchain-solution-in-organizations' >
              <h3 className="text-[#0E1F51] text-lg font-bold">
                Benefits of Blockchain Solution in Organisations
              </h3>
              <p>Investment before knowing the possible perks isn’t of any good. Rather you stay here and read to know more of its benefits to give more authenticity on decisions:</p>
              <ul className='list-disc px-6'>
                <li><span className='text-sm font-bold'>Transparency Among All :</span> When any transaction is made, blockchain validates and verifies it certainly. The Hash (explained above) agrees and later transactions get validation. The history has been recorded and every member of the network has accessibility to distributed ledger. It brings transparency among all, and even traces the frauds between. </li>
                <li><span className='text-sm font-bold'>Increased Efficiency :</span> There's no need for paper and giving time on manual documentations when we have an incredibly tech-savvy solution “Blockchain”. The network has all the data, and even it is immutable so nothing has been erased. It is a huge storage and secured database to entrepreneurs; which makes them think of other imperative aspects in business left behind. The drift in concerns to other productive things will improve productions and bring more efficiency to organization.</li>
                <li><span className='text-sm font-bold'>No Frauds and No Malpractices :</span> When every piece of data is recorded and fully secured with no alterations possible, the members of the network can run audit trails for verifications and tracking. With the accessibility to entire data, members can identify and prevent fraudulent activities immediately. </li>
                <li><span className='text-sm font-bold'>Less Costlier :</span> No more trust and money transferring to third-parties for own data analytics, tracing, and auditing. With blockchain, you can easily access the network where the data has been stored. It is a less costly and more reliable deal to lock-in for business secrecy yet transparency among members. </li>

              </ul>
            </div>
            <div className="p-4 space-y-3 bg-white" id='when-should-i-invest-in-blockchain-development' >
              <h3 className="text-[#0E1F51] text-lg font-bold">
                When Should I Invest in Blockchain Development?
              </h3>
              <p>Blockchain Technology is worth millions and billions, and its perks prove that indeed. It is a bull-eye strategy to all the organizations belonging to different industries in fact. But it is a genuine yet important question from organizations, “When Should I Invest in Blockchain Development Services”. Here are some stages when to invest:</p>
              <ul className='list-disc px-6'>
                <li><span className='text-sm font-bold'>Do You Process Humongous Data?  :</span> If your company processes huge databases, then it is better to invest in blockchain to have them in records. There are chances of misplacing, committing frauds, or any tampering with the database. Blockchain is secured and immutable; which keeps the data within the network without letting anyone tamper due to its transparency and traceable properties. </li>
                <li><span className='text-sm font-bold'>Do Require frequent data updates and sharing?  :</span> Is your data in constant flux, needing frequent updates and sharing? Blockchain development streamlines the tedious manual and paper-based processes often associated with data maintenance. A blockchain solution can automate processes, facilitate multiple entries from authorized members, and safeguard against unauthorized data modifications for businesses counting on ever-evolving, historical data. </li>
                <li><span className='text-sm font-bold'>Slow transaction speeds affecting your business :</span> Blockchain can eliminate obstacles that obstruct certain workflows. it often lacks rapid transactional speed without an accelerator. If speed is not paramount and you prioritize application security, blockchain remains an optimal choice.</li>
                <li><span className='text-sm font-bold'>Is third-party authorization necessary for your requirements? :</span> Certain businesses rely on intermediaries for data control and authentication. In such cases, blockchain may not be suitable. However, for businesses operating independently of third-party solutions, blockchain offers complete transparency and consensus validation. It also minimizes costs and delays associated with intermediary transactions. </li>

              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
