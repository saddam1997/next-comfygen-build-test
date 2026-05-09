
import Link from "next/link";
import React from "react";

const MenuItem = React.memo(({ item, onClick }: any) => {
  return (
    <li className="py-1.5 hover:translate-x-2 transition">
      <Link href={item.url} onClick={onClick} className="block">
        {item.name}
      </Link>
    </li>
  );
});

export default MenuItem;