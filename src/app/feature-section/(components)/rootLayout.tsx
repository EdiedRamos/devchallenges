import { PropsWithChildren } from "react";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <section
      className={`${outfit.className} bg-fs-bg bg-fs-black min-h-screen pb-10`}
    >
      {children}
    </section>
  );
}
