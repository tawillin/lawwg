import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter.woff2",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const playfair = localFont({
  src: [
    {
      path: "./fonts/PlayfairDisplay.woff2",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "serif"],
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
        <GoogleAnalytics />
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
