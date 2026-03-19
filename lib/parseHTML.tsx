import { Fragment } from "react";

export function parseHTMLString(html?: string) {
  if (!html || typeof html !== "string") return null;

  const parts = html.split(/(<a [^>]+>.*?<\/a>)/gi);

  return parts.map((part, i) => {
    if (part.toLowerCase().startsWith("<a")) {
      //  Extract href
      const href = part.match(/href=["'](.*?)["']/i)?.[1];
      //  Extract class
      const className = part.match(/class=["'](.*?)["']/i)?.[1];
      //  Extract text (clean)
      const text = part.replace(/<[^>]+>/g, "");

      return (
        <a
          key={i}
          href={href || "#"}
          className={className || ""}
        >
          {text}
        </a>
      );
    }

    return <Fragment key={i}>{part}</Fragment>;
  });
}