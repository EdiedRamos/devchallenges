import { PropsWithChildren } from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Device Shop Checkout",
};

export default function Layout({ children }: PropsWithChildren) {
  return <main className={inter.className}>{children}</main>;
}
