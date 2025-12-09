
import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import AdsPopup from "@/components/AdsPopup";
import JsonLd from "@/components/JsonLd"; // Import component cấu trúc dữ liệu
import { GoogleAnalytics } from "@next/third-parties/google"; // Import thư viện GA


// const inter = Inter({ subsets: ["latin", "vietnamese"] });

// export const metadata: Metadata = {
//   title: "Trung tâm tin học Giáo dục phát triển toàn cầu ",
//   description: "Trang web chính thức của Trung tâm tin học Giáo dục phát triển toàn cầu (ERG), cung cấp các khóa học, tài nguyên và dịch vụ liên quan đến công nghệ thông tin và giáo dục.",
//   icons: {
//     // Đây là icon hiển thị trên tab trình duyệt.
//     icon: [
//       { url: '/icon.png',sizes: '16x32', type: 'image/png' },
//     ],
//   },
//   openGraph: {
//     title: "Trung tâm tin học Giáo dục phát triển toàn cầu ",
//     description: "Trang web chính thức của Trung tâm tin học Giáo dục phát triển toàn cầu (ERG), cung cấp các khóa học, tài nguyên và dịch vụ liên quan đến công nghệ thông tin và giáo dục.",
//     images: [],
//   },
// };


const inter = Inter({ subsets: ["latin", "vietnamese"] });

// Cấu hình URL gốc của website (Thay thế bằng domain thật của bạn khi deploy)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://erg.edu.vn";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Cho phép zoom để tốt cho accessibility (điểm cộng SEO)
  themeColor: "#2563eb", // Màu xanh chủ đạo của ERG
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Trung tâm tin học Giáo dục phát triển toàn cầu",
    template: "%s | Trung tâm tin học Giáo dục phát triển toàn cầu",
  },
  description: "Trang web chính thức của Trung tâm tin học Giáo dục phát triển toàn cầu (ERG), cung cấp các khóa học, tài nguyên và dịch vụ liên quan đến công nghệ thông tin và giáo dục.",
  keywords: [
    "erg", 
    "erg edu vn", 
    "edurise",
    "edurise global",
    "trung tâm tin học erg", 
    "hệ thống giáo dục erg",
    "luyện thi ic3", 
    "luyện thi mos", 
    "tin học văn phòng tphcm", 
    "khóa học excel nâng cao",
    "khóa học tin học cơ bản",
    "trung tâm đào tạo tin học",
    "đào tạo kỹ năng sống",
    "luyện thi tiếng anh",
    "giáo dục phát triển toàn cầu",
    "tin học quốc tế",
    "khóa học tin học online",
    "tin học quốc tế cho tiểu học",
    "tin học quốc tế cho trung học",
    "tin học quốc tế cho đại học",
    "ic3 gs6",
    "microsoft office specialist",
    "mos 2019",
    "mos 365",
    ""
  ],
  authors: [{ name: "ERG Education System", url: BASE_URL }],
  creator: "Edurise Global",
  publisher: "Edurise Global",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Trung tâm tin học Giáo dục phát triển toàn cầu",
    description: "Trang web chính thức của Trung tâm tin học Giáo dục phát triển toàn cầu (ERG), cung cấp các khóa học, tài nguyên và dịch vụ liên quan đến công nghệ thông tin và giáo dục. Cam kết chất lượng đầu ra cho học viên.",
    url: BASE_URL,
    siteName: "Edurise Global",
    images: [
      {
        url: "/erg-og-image.jpg", // Bạn cần thêm ảnh này vào folder public
        width: 1200,
        height: 630,
        alt: "Edurise Global - Trung tâm tin học Giáo dục phát triển toàn cầu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edurise Global - Trung tâm tin học Giáo dục phát triển toàn cầu",
    description: "Trung tâm tin học Giáo dục phát triển toàn cầu",
    images: ["/erg-og-image.jpg"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png',sizes: '16x32', type: 'image/png' }
    ],
    apple: [
      { url: '/icon.png' },
    ],
  },
  verification: {
    // Lấy mã này từ Google Search Console
    google: "MÃ_XÁC_THỰC_GOOGLE_CỦA_BẠN", 
    other: {
      "facebook-domain-verification": "MÃ_XÁC_THỰC_FACEBOOK",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <JsonLd /> {/* Thêm component cấu trúc dữ liệu JSON-LD vào head */}
        <GoogleAnalytics gaId="G-PF00V6RJDD" />
      </head>
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