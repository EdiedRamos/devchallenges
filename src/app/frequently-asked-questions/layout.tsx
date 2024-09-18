import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
};

export default function PropertyListingLayout({ children }: PropsWithChildren) {
  return <body>{children}</body>;
}
