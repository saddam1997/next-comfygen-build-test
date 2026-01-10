type SubHeadingProps = {
  text: string;
  color?: string;
};

export function SubHeading({
  text,
  color = "#666666",
}: SubHeadingProps) {
  return (
    <h3
      className="text-base lg:text-xl font-medium font-poppins mb-3"
      style={{ color }}
    >
      {text}
    </h3>
  );
}
