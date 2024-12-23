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
  title: "Yash Parmar - Software Engineer | Portfolio ",
  description:
    "Explore the portfolio of Yash Parmar, a passionate software engineer specializing in web development, machine learning, and innovative tech solutions.",
  keywords:
    "Yash Parmar, software engineer, portfolio, web development, machine learning, tech solutions, Yash, AI, software engineering, full-stack development",

  openGraph: {
    title: "Yash Parmar - Software Engineer | Portfolio",
    description:
      "Explore the portfolio of Yash Parmar, a passionate software engineer specializing in web development, machine learning, and innovative tech solutions. ",
    url: "https://yash-parmar.vercel.app/", // Replace with your actual URL
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // Add your custom favicon here
    apple: "/apple-touch-icon.png",
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
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}


//Version 10.3.7