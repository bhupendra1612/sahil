import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sahil Packaging | Industrial Packaging Machines",
    template: "%s | Sahil Packaging"
  },
  description: "High-quality industrial packaging machines and equipment for B2B manufacturers. Explore our catalog of reliable, high-performance machinery.",
  keywords: ["packaging machines", "industrial machinery", "manufacturing", "B2B packaging", "Sahil Packaging"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahilpackaging.com",
    siteName: "Sahil Packaging Industries",
    title: "Sahil Packaging | Industrial Packaging Machines",
    description: "High-quality industrial packaging machines and equipment for B2B manufacturers.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col font-sans`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
