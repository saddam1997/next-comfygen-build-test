import React from "react";

// cache → avoids re-parsing (LCP optimization)
const cache = new Map<string, React.ReactNode>();

export function htmlToReact(html: string) {
  if (!html) return null;

  // ✅ cache hit
  if (cache.has(html)) return cache.get(html);

  // ✅ server-safe fallback (NO DOMParser on server)
  if (typeof window === "undefined") {
    const clean = html.replace(/<[^>]+>/g, "");
    cache.set(html, clean);
    return clean;
  }

  // ✅ client-side parsing
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const convertNode = (node: any, key = 0): any => {
    if (node.nodeType === 3) return node.textContent;

    if (node.nodeType === 1) {
      const tag = node.tagName.toLowerCase();
      const children = Array.from(node.childNodes).map((child, i) =>
        convertNode(child, i)
      );

      switch (tag) {
        case "a":
          return (
            <a key={key} href={node.getAttribute("href") || "#"} className="underline">
              {children}
            </a>
          );

        case "strong":
        case "b":
          return <strong key={key}>{children}</strong>;

        case "em":
        case "i":
          return <em key={key}>{children}</em>;

        case "ul":
          return <ul key={key} className="list-disc pl-5">{children}</ul>;

        case "li":
          return <li key={key}>{children}</li>;

        case "br":
          return <br key={key} />;

        case "p":
          return <p key={key}>{children}</p>;

        default:
          return <span key={key}>{children}</span>;
      }
    }

    return null;
  };

  const result = Array.from(doc.body.childNodes).map((node, i) =>
    convertNode(node, i)
  );

  // ✅ cache result
  cache.set(html, result);

  return result;
}