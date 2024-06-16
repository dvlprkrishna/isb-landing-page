import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const source_sans_pro = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISB",
  description: " ISB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={source_sans_pro.className}>{children}</body>
    </html>
  );
}
