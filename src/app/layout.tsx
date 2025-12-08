
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import AdsPopup from "@/components/AdsPopup";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Trung tâm tin học Giáo dục phát triển toàn cầu ",
  description: "Trang web chính thức của Trung tâm tin học Giáo dục phát triển toàn cầu (ERG), cung cấp các khóa học, tài nguyên và dịch vụ liên quan đến công nghệ thông tin và giáo dục.",
  icons: {
    // Đây là icon hiển thị trên tab trình duyệt.
    icon: [
      { url: '/icon.png',sizes: '16x32', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Trung tâm tin học Giáo dục phát triển toàn cầu ",
    description: "Trang web chính thức của Trung tâm tin học Giáo dục phát triển toàn cầu (ERG), cung cấp các khóa học, tài nguyên và dịch vụ liên quan đến công nghệ thông tin và giáo dục.",
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body 
        className={`${inter.className} bg-gray-50 text-slate-800 antialiased flex flex-col min-h-screen overflow-x-hidden`} 
        /* THÊM class: overflow-x-hidden vào thẻ body */
        suppressHydrationWarning={true}
      >
        <Header />
        <AdsPopup />
        
        {/* Thêm w-full và max-w-[100vw] để đảm bảo main không bao giờ bị tràn */}
        <main className="flex-grow pt-[65px] lg:pt-[88px] w-full max-w-[100vw] overflow-hidden">
          {children}
        </main>
        
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}