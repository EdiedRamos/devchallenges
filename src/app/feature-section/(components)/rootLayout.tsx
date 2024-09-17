import { PropsWithChildren } from "react";

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <section className="bg-fs-bg bg-fs-black min-h-screen pb-10">
      {children}
    </section>
  );
}
