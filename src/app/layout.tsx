import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sommy Smart Care - Pharmacy & POS Services",
  description:
    "Your trusted partner for health and financial services. Discover a wide range of healthcare products, expert medical advice, and convenient POS solutions all in one place.",
  keywords: [
    "pharmacy",
    "chemist",
    "POS services",
    "healthcare",
    "medicines",
    "prescriptions",
    "medical consultation",
    "financial solutions",
    "Sommy Smart Care",
  ],
  authors: [{name:"Sommy Smart Care"}],
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
