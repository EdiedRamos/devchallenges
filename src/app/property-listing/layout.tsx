import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type { PropsWithChildren } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Text To Speech",
};

export default function TextSpeechLayout({ children }: PropsWithChildren) {
  return <body className={outfit.className}>{children}</body>;
}