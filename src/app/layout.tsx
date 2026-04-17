import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Legado — Financial Guidance for Immigrants",
  description:
    "The financial guide nobody gave you growing up. Built for immigrants and first-gen earners navigating the US money system alone. Join the waitlist.",
  metadataBase: new URL("https://legado-website.vercel.app"),
  openGraph: {
    title: "Legado — Financial Guidance for Immigrants",
    description:
      "The financial guide nobody gave you growing up. Built for immigrants and first-gen earners navigating the US money system alone. Join the waitlist.",
    url: "https://legado-website.vercel.app",
    siteName: "Legado",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legado — Financial Guidance for Immigrants",
    description:
      "The financial guide nobody gave you growing up. Built for immigrants and first-gen earners navigating the US money system alone.",
  },
  alternates: {
    canonical: "https://legado-website.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green to-[#86EFAC] z-[110]" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
