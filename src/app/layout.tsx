import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Willingham Law Group | Trusts, Probate & Elder Law",
    template: "%s | Willingham Law Group",
  },
  description:
    "Experienced attorneys helping families with trusts, probate, elder law, business formation, and litigation defense. Serving clients with integrity and clarity.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://lawwg.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Willingham Law Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
