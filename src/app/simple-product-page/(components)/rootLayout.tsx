import { Outfit } from "next/font/google";
import { PropsWithChildren } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export function RootLayout({ children }: PropsWithChildren) {
  return <div className={outfit.className}>{children}</div>;
}
