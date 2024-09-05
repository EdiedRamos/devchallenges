import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type { PropsWithChildren } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Search App",
};

export default function TextSpeechLayout({ children }: PropsWithChildren) {
  return <body className={outfit.className}>{children}</body>;
}
