// components/Sitemap.tsx

import Link from "next/link";
import style from "./Sitemap.module.css"

// ─── TYPES ─────────────────────────────────────────────

interface SitemapLink {
  label: string;
  href: string;
  description?: string;
}

interface SitemapSectionType {
  title: string;
  icon: string;
  links: SitemapLink[];
}

// ─── DATA ─────────────────────────────────────────────



// ─── LINK ITEM ─────────────────────────────────────────

function SitemapLinkItem({ link }: { link: SitemapLink }) {
  return (
    <li>
      <Link
        href={link.href}
        className="block underline rounded-lg px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
      >
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
          {link.label}
        </p>
        {/* {link.description && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {link.description}
          </p>
        )} */}
      </Link>
    </li>
  );
}

// ─── SECTION CARD ──────────────────────────────────────

function SitemapSection({ section }: { section: SitemapSectionType }) {
  return (
    <div className={`group rounded-2xl border border-zinc-200   backdrop-blur p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300  `}>
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {/* <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-100  text-lg">
          {section.icon}
        </div> */}
        <h2 className="text-lg  font-semibold text-zinc-800 dark:text-zinc-200">
          {section.title}
          {/* {section.links.length > 0 ? ` - ${section.links.length} ` : ""} */}
        </h2>
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-1 ">
        {section.links.map((link) => (
          <SitemapLinkItem key={link.href} link={link} />
        ))}
      </ul>
    </div>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────

export default function Sitemap({ sitemapData }: { sitemapData: SitemapSectionType[] }) {
  return (
    <div className="min-h-screen text-white px-6 py-16 bg-[#5951cd]">

      {/* Header */}
      <header className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold text-white ">
          Sitemap
        </h1>
        <p className="mt-3 text-white">
          Explore all pages organized by categories
        </p>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sitemapData.map((section) => (
            <SitemapSection key={section.title} section={section} />
          ))}
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="max-w-6xl mx-auto mt-20 text-center text-sm text-zinc-500 dark:text-zinc-400">
        Missing something?{" "}
        <Link href="/contact" className="underline hover:text-zinc-700">
          Contact us
        </Link>
      </footer> */}
    </div>
  );
}