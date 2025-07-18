import ConvexClientProvider from "@/lib/providers/convex-clerk";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { dark } from "@clerk/themes";
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
    <body className="antialiased dark">
      <ClerkProvider appearance={{ baseTheme: dark }}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </ClerkProvider>
    </body>
  </html>
);

export default RootLayout;
