import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type { PropsWithChildren } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Property Listing",
};

export default function PropertyListingLayout({ children }: PropsWithChildren) {
  return <body className={outfit.className}>{children}</body>;
}
