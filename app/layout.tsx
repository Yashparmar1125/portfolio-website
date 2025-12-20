import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Parmar | Full Stack Developer & AI Engineer Portfolio",
  description: "Portfolio of Yash Parmar, a Full Stack Developer and AI Engineer specializing in React, Next.js, Python, and Machine Learning. View projects, skills, and contact information.",
  keywords: "Yash Parmar, portfolio, developer, software engineer, full stack developer, AI engineer, machine learning, React, Next.js, Python, web development, projects, resume, contact",
  authors: [{ name: "Yash Parmar" }],
  creator: "Yash Parmar",
  publisher: "Yash Parmar",
  metadataBase: new URL("https://yashparmar.in"), // Added metadataBase for relative image paths
  alternates: {
    canonical: "https://helloyashparmar.dev", // Ensures search engines prioritize the .in domain
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashparmar.in/", // Updated to new domain
    title: "Yash Parmar | Full Stack Developer & AI Engineer Portfolio",
    description: "Portfolio of Yash Parmar, a Full Stack Developer and AI Engineer specializing in React, Next.js, Python, and Machine Learning. View projects, skills, and contact information.",
    siteName: "Yash Parmar Portfolio",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Parmar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Parmar | Full Stack Developer & AI Engineer Portfolio",
    description: "Portfolio of Yash Parmar, a Full Stack Developer and AI Engineer specializing in React, Next.js, Python, and Machine Learning.",
    creator: "@yashparmar",
    images: ["/img/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Mxnl7t8kysSrD-UET1eFQN1RStY0G85a30izbFYLkZ4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        {/* The robots meta tag here is redundant as it's already in the metadata object above */}
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
