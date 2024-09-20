import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import RootLayout from "../layout";

export const metadata: Metadata = {
  title: "Simple Product Page",
};

export default function RecipeLayout({ children }: PropsWithChildren) {
  return (
    <body>
      <RootLayout>{children}</RootLayout>
    </body>
  );
}
