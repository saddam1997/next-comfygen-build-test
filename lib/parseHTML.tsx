import { Fragment } from "react";

export function parseHTMLString(html?: string) {
  if (!html || typeof html !== "string") return null;

  const parts = html.split(
    /(<a [^>]+>.*?<\/a>|<(?:b|strong)>.*?<\/(?:b|strong)>)/gi
  );

  return parts.map((part, i) => {
    if (!part) return null;

    // Handle <a>
    if (part.toLowerCase().startsWith("<a")) {
      const href = part.match(/href=["'](.*?)["']/i)?.[1];
      const className = part.match(/class=["'](.*?)["']/i)?.[1];

      const innerHTML = part.match(/<a [^>]+>(.*?)<\/a>/i)?.[1];

      return (
        <a
          key={i}
          href={href || "#"}
          className={className || ""}
          dangerouslySetInnerHTML={{ __html: innerHTML || "" }}
        />
      );
    }

    // Handle <b> / <strong>
    if (
      part.toLowerCase().startsWith("<b>") ||
      part.toLowerCase().startsWith("<strong>")
    ) {
      const innerHTML = part.match(/<(?:b|strong)>(.*?)<\/(?:b|strong)>/i)?.[1];

      return (
        <strong
          key={i}
          dangerouslySetInnerHTML={{ __html: innerHTML || "" }}
        />
      );
    }

    // Render normal text (HTML safe)
    return (
      <span
        key={i}
        dangerouslySetInnerHTML={{ __html: part }}
      />
    );
  });
}






// import { Fragment } from "react";

// export function parseHTMLString(html?: string) {
//   if (!html || typeof html !== "string") return null;

//   const parts = html.split(/(<a [^>]+>.*?<\/a>)/gi);

//   return parts.map((part, i) => {
//     if (part.toLowerCase().startsWith("<a")) {
//       //  Extract href
//       const href = part.match(/href=["'](.*?)["']/i)?.[1];
//       //  Extract class
//       const className = part.match(/class=["'](.*?)["']/i)?.[1];
//       //  Extract text (clean)
//       const text = part.replace(/<[^>]+>/g, "");

//       return (
//         <a
//           key={i}
//           href={href || "#"}
//           className={className || ""}
//         >
//           {text}
//         </a>
//       );
//     }

//     return <Fragment key={i}>{part}</Fragment>;
//   });
// }