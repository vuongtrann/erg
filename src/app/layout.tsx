
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Hệ thống Giáo dục ERG",
  description: "Trang web hệ thống giáo dục ERG với đầy đủ các trang giới thiệu, khóa học và liên hệ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body 
        className={`${inter.className} bg-gray-50 text-slate-800 antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex-grow pt-[72px] lg:pt-[88px]">
          {children}
        </main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
