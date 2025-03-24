import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landingpage/layout/Navbar";
import Footer from "@/components/landingpage/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
// import NextNProgress from "nextjs-progressbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afo Cyber Sec",
  icons: [
    {
      url: "/logo-test.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        <Analytics />
        <Navbar />
        <div className="bg-[#1B043A] text-white px-[1rem] pb-10 lg:px-[4rem] font-[family-name:var(--font-manrope)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
