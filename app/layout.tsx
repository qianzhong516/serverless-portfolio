import type { Metadata } from "next";
import { Geist, Geist_Mono, Righteous } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serveless Portfolio",
  description:
    "This project demonstrates a production-style serverless deployment on AWS featuring Infrastructure as Code, CI/CD, multi-environment deployment, and a serverless backend that maintains a page visitor counter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${righteous.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
