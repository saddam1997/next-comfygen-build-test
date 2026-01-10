type ParagraphProps = {
  html: string;
  color?: string;
  align?: "left" | "center" | "right";
};

export function Paragraph({
  html,
  color = "#444444",
  align = "left",
}: ParagraphProps) {
  return (
    <p
      className={`text-sm xl:text-[20px] 
      lg:leading-relaxed font-normal font-poppins text-${align}`}
      style={{ color }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
