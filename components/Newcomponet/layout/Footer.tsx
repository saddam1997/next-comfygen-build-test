import Image from "next/image";
import Link from "next/link";
import JSON_DATA from "./json/footermenu.json";
import styles from "./styles.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#0C0F18] text-white w-full">
      <div className="space-y-8 md:px-4 py-10 lg:space-y-8 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">

        {/* ===== Footer CTA Section ===== */}
        <div className="relative overflow-hidden rounded-2xl p-10 min-h-[300px] md:min-h-[350px]">
          
          {/* Background Image (Optimized) */}
          <Image
            src="https://www.comfygen.com/image/footer-top-img.webp"
            alt="Comfygen project consultation"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            quality={80}
            loading="lazy"
            className="object-cover object-center hidden md:block "
          />

          <div className="relative z-10">
            <h2 className="text-white lg:text-3xl text-2xl font-bold">
              Have a Project in Your Mind ?
            </h2>

            <p className="text-white font-normal mt-1 text-base lg:w-[60%] w-full">
              At Comfygen, we use creativity and teamwork to shape the direction
              of technology. Our innovative solutions help organisations stay
              ahead of the times in a world that is changing quickly. Together,
              let's develop the technologies of the future.
            </p>

            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center gap-1 border border-white 
              px-10 py-2 text-lg font-semibold rounded-full capitalize
              hover:bg-white hover:text-[#5556D1] transition"
            >
              Get Started <MdOutlineArrowOutward size={20}/>
            </Link>
          </div>
        </div>

        {/* ===== Footer Links ===== */}
        <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Web & App", data: JSON_DATA.Development },
            { title: "Blockchain", data: JSON_DATA.Blockchain },
            { title: "Crypto & Token", data: JSON_DATA.CryptoToken },
            { title: "Gaming", data: JSON_DATA.Gaming },
          ].map(({ title, data }) => (
            <div key={title} className="space-y-6">
              <p className="text-sm uppercase text-white/70">{title}</p>

              <div
                className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}
              >
                {data.map(({ name, url }) => (
                  <Link
                    key={url}
                    href={url}
                    className="block text-white text-md font-medium"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="lg:flex items-center justify-between py-6 text-sm border-t border-white/10 
      2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto  lg:pb-6">

        <p>© 2026 Comfygen Pvt Ltd.</p>

        <div className="flex items-center lg:space-x-4">
          <Link className="px-2 py-3 text-sm sm:text-base hover:underline" href="/about-us">About Us</Link>
          <Link className="px-2 py-3 text-sm sm:text-base hover:underline" href="/career">Career</Link>
          <a
            href="https://www.comfygen.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
              className="px-2 py-3 text-sm sm:text-base hover:underline"
          >
            Our Blog
          </a>
          <Link   className="px-2 py-3 text-sm sm:text-base hover:underline" href="/disclaimer">Disclaimer</Link>
        </div>

        <p>
          All Rights Reserved{" "}
          <Link   className="px-2 py-3 text-sm sm:text-base hover:underline" href="/terms-and-conditions">Terms & Conditions</Link> ~{" "}
          <Link   className="px-2 py-3 text-sm sm:text-base hover:underline" href="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}












