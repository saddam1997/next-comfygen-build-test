"use client";
import MenuItem from "./MenuItem";

const MenuSection = ({ section, onLinkClick }: any) => {
  return (
    <div>
      <p className="font-medium mb-2">{section.label}</p>
      <ul className="space-y-2 text-sm">
        {section.items.map((item: any) => (
          <MenuItem key={item.url} item={item} onClick={onLinkClick} />
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;