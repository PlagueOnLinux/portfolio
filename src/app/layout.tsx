import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maciej Błędowski | IT Support Engineer",
  description: "IT Support Engineer with 3+ years of experience in enterprise IT, endpoint management, Linux systems and self-hosted infrastructure. Explore my HomeLab, HireMate project and professional portfolio.",
  keywords: ["IT Support Engineer", "Linux", "HomeLab", "Proxmox", "Infrastructure", "AI", "Portfolio"],
  authors: [{ name: "Maciej Błędowski" }],
  openGraph: {
    title: "Maciej Błędowski | IT Support Engineer",
    description: "IT Support Engineer with 3+ years of experience in enterprise IT, endpoint management, Linux systems and self-hosted infrastructure.",
    url: "https://maciejbledowski.pl",
    siteName: "Maciej Błędowski",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
