import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { SiteHeader } from "./_components/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VideoMarket — видеоработы и специалисты",
  description: "Находите видеоспециалистов, заказывайте услуги и делитесь своим портфолио на VideoMarket.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="page-shell footer-inner">
            <Link className="brand footer-brand" href="/"><span className="brand-mark">V</span><span>video<span className="brand-light">market</span></span></Link>
            <p>Платформа, где встречаются идеи и люди.</p>
            <span>© 2026 VideoMarket</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
