type FeatureListProps = {
  items: string[];
  color?: string;
};

export function FeatureList({
  items,
  color = "#333333",
}: FeatureListProps) {
  return (
    <ul className="">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-sm lg:text-base font-poppins flex gap-2"
          style={{ color }}
          dangerouslySetInnerHTML={{ __html: ` ${item}` }}
        />
      ))}
    </ul>
  );
}
