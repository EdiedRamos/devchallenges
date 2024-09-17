import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { PropsWithChildren } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Join Our Newsletter",
};

export default function PropertyListingLayout({ children }: PropsWithChildren) {
  return <body className={poppins.className}>{children}</body>;
}
