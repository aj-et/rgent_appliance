import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  Footer,
  Header
} from "../components/sections";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rgent Appliance Repair in Los Angeles County, California",
  description: "Rgent Appliance Repair is Los Angeles' Trusted Appliance Repair. Specializing in Appliance Repair for Residential, Commercial and Property Management. Locally Owned and Operated. Call 818-915-5577.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
