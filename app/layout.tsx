import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
  title: "Yash Parmar - Software Engineer | Portfolio & Projects",
  description:
    "Explore the portfolio of Yash Parmar, a passionate software engineer specializing in web development, machine learning, and innovative tech solutions. Discover projects, skills, and expertise.",
  keywords: "Yash Parmar, software engineer, portfolio, web development, machine learning, tech solutions, projects, programming, software engineering, full-stack development",
  
  openGraph: {
    title: "Yash Parmar - Software Engineer | Portfolio & Projects",
    description:
      "Explore the portfolio of Yash Parmar, a passionate software engineer specializing in web development, machine learning, and innovative tech solutions. Discover projects, skills, and expertise.",
    url: "https://yash-parmar.vercel.app/", // Replace with your actual URL
    type: "website",
     
  },
  icons: {
    icon: "/favicon.ico", // Add your custom favicon here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" /> {/* Allows search engines to index the page */}
        <meta name="theme-color" content="#000000" /> {/* Theme color for mobile browsers */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
