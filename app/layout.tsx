import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: "Siztec Technical Services LLC | Manpower Supply Company in UAE",
  description:
    "Siztec Technical Services LLC provides skilled and semi-skilled manpower supply, technical outsourcing, project staffing, and shutdown workforce solutions across key industries in the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/vendors/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" />
        <link href="/fonts/font-awesome/css/fontawesome.min.css" rel="stylesheet" />
        <link href="/fonts/line-awesome/css/line-awesome.min.css" rel="stylesheet" />
        <link href="/vendors/glide/css/glide.core.min.css" rel="stylesheet" />
        <link href="/vendors/mediabox/css/mediabox.min.css" rel="stylesheet" />
        <link href="/css/framework.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${dmSans.variable}`}>
        <div className="main-page-wrapper">
          <Preloader />
          <Navbar />
          {children}
          <Footer />
           <a href="#" id="back2top">
            <i className="fas fa-angle-up"></i>
            </a>
        </div>
        <Script src="/vendors/jquery/jquery.js" strategy="beforeInteractive" />
        <Script src="/vendors/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/vendors/mediabox/js/mediabox.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
