import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import type { PropsWithChildren } from "react";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Bento Box Layout",
};

export default function TextSpeechLayout({ children }: PropsWithChildren) {
  return <div className={beVietnamPro.className}>{children}</div>;
}
