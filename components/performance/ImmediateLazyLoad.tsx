import type { ReactNode } from "react";

type ImmediateLazyLoadProps = {
  children?: ReactNode;
  className?: string;
};

export default function ImmediateLazyLoad({ children, className }: ImmediateLazyLoadProps) {
  if (!className) {
    return <>{children}</>;
  }

  return <div className={className}>{children}</div>;
}
