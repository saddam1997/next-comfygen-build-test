import Image from "next/image";
import Link from "next/link";

const flags = [
  "https://www.comfygen.com/comfygen-images/home-image/india.webp",
  "https://www.comfygen.com/comfygen-images/home-image/USA.webp",
  "https://www.comfygen.com/comfygen-images/home-image/GERMANY.webp",
  "https://www.comfygen.com/comfygen-images/home-image/United Arab Emirates.webp",
   "https://www.comfygen.com/comfygen-images/home-image/canada.webp"
];

const avatars = [
  "https://www.comfygen.com/comfygen-images/home-image/Nhi Do.webp",
  "https://www.comfygen.com/comfygen-images/home-image/James Lawrence.webp",
  "https://www.comfygen.com/comfygen-images/home-image/Avinash.webp",
  "https://www.comfygen.com/comfygen-images/home-image/Rob Lipps.webp",
];

export default function StatsBanner() {
  return (
    <div className="hidden lg:block w-full max-w-2xl   px-4 py-4 rounded-2xl">
      <div className="grid grid-cols-3 gap-3">

        {/* Left column — 2 stacked cards */}
        <div className="flex flex-col gap-3">
          {/* Experience */}
          <Link href={"https://www.comfygen.com/about-us "} className="bg-indigo-400/60 rounded-xl px-2 py-3 flex items-center gap-3">
            <div className="bg-[#E1EED0] rounded-lg p-2 flex-shrink-0">
              {/* Briefcase icon */}
              <svg
                className="w-5 h-5 text-white"
               fill="#78A43F"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
                />
              </svg>
            </div>
            <p className="text-white font-semibold text-sm leading-tight">
              8+ Years of<br />experience
            </p>
          </Link>

          {/* Projects */}
          <Link href={"https://www.comfygen.com/portfolio "} className="bg-indigo-400/60 rounded-xl px-4 py-3 flex items-center gap-3">
            <div className="bg-[#D0E2EF] rounded-lg p-2 flex-shrink-0">
              {/* Lightning icon */}
              <svg
                className="w-5 h-5 text-white"
                fill="#63A2CF"
                viewBox="0 0 24 24"
              >
                <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
              </svg>
            </div>
            <p className="text-white font-semibold text-sm leading-tight">
              550+ Projects<br />Delivered
            </p>
          </Link>
        </div>

        {/* Middle — Clients */}
        <div className="bg-indigo-400/60 rounded-xl px-4 py-3 flex flex-col justify-center gap-3">
          {/* Overlapping avatars */}
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <Link
              href={"https://www.comfygen.com/client-testimonials"}
                key={i}
                className="w-12 h-12 rounded-full border-2 border-white overflow-hidden flex-shrink-0"
                style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: i }}
              >
                <Image
                  src={src}
                  alt={`Client ${i + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
          <p className="text-white font-semibold text-sm leading-tight">
            400+ Happy<br />Clients
          </p>
        </div>

        {/* Right — Countries */}
        <div className="bg-indigo-400/60 rounded-xl px-4 py-3 flex flex-col justify-center gap-3">
          <p className="text-white font-semibold text-sm leading-tight">
            30+ Countries<br />Served
          </p>
          {/* Flag emojis */}
          <div className="flex flex-wrap ">
            {flags.map((flag, i) => (
              <div key={i}
                className="w-10 h-10 text-center  rounded-full border-2 border-white overflow-hidden flex-shrink-0"
                style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: i }}>
                  <Image
                  src={flag}
                  alt={`Client ${i + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}