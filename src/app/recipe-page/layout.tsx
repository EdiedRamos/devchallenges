import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import type { PropsWithChildren } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Recipe Page",
};

export default function RecipeLayout({ children }: PropsWithChildren) {
  return <body className={outfit.className}>{children}</body>;
}
