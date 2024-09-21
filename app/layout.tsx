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
  title: "Rgent Appliance Repair in Los Angeles California - Rgent Appliance Repair Los Angeles, CA",
  description: "Rgent Appliance Repair Los Angeles' Trusted Appliance Repair: Residential, Commercial &amp; Property ManagementLocally Owned &amp; Operated | Recognized by Thumbtack &amp; HomeAdvisorWhy Choose Us?Over 100 Five-Star Reviews on ThumbtackExpert repair of refrigerators, washers, dryers, ovens, dishwashers, and more.Specializing in commercial washer dryer repair.Serving homes, businesses, hotels &amp; property managers in Los Angeles.Proactive Maintenance Plans for Long-Term PerformanceSame-day service,",
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
