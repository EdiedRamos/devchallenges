import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Feature Section",
};

export default function PropertyListingLayout({ children }: PropsWithChildren) {
  return <body>{children}</body>;
}
