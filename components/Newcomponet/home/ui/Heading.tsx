type HeadingProps = {
  text: string;

  // solid color
  color?: string;

  // gradient support
  gradient?: {
    from: string;
    via?: string;
    to: string;
  };

  align?: "left" | "center" | "right";
};

export function Heading({
  text,
  color = "#000000",
  gradient,
  align = "left",
}: HeadingProps) {
  return (
    <h2
      className={`text-sm lg:text-lg xl:text-[45px] 
      font-poppins font-semibold lg:leading-tight`}
      style={{ textAlign: align }}
    >
      {gradient ? (
        <span
          className="bg-gradient-to-r text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              gradient.via
                ? `${gradient.from}, ${gradient.via}, ${gradient.to}`
                : `${gradient.from}, ${gradient.to}`
            })`,
          }}
        >
          {text}
        </span>
      ) : (
        <span style={{ color }}>{text}</span>
      )}
    </h2>
  );
}
