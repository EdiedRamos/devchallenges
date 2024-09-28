import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type { PropsWithChildren } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bank Dashboard",
};

export default function TextSpeechLayout({ children }: PropsWithChildren) {
  return <div className={outfit.className}>{children}</div>;
}
