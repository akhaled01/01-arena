import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "01 Arena",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );

export default RootLayout;
