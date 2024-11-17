import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PageTemplate({ children }: Props) {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center bg-bgImg bg-center bg-no-repeat bg-cover py-20 px-4">
      {children}
    </div>
  );
}
