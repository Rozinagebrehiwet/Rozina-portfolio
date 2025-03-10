import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { langar } from "./fonts";
import FixedSocialLinks from "@/components/FixedSocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rozina Gebrehiwet- Software Developer",
  description: "Professional portfolio showcasing software development projects and skills",
  icons: {
    icon: '/G.png',
    shortcut: '/G.png',
    apple: '/G.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
     
      <body className={`${inter.className}  min-h-screen overflow-x-hidden`}>
        <div className="relative z-[1] font-light">
          <ThemeSwitcher />
          <FixedSocialLinks />
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}