import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const poppins = Sora({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Devchallanges Solutions",
  description:
    "Devchallanges solutions project where I will save my solutions for this platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
