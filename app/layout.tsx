import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Parmar | Software Developer & AI Engineer",
  description:
    "Official portfolio of Yash Parmar, a Software Developer and AI Engineer specializing in React, Next.js, and ML. Explore projects and skills by Yash Parmar.",
  keywords:
    "Yash Parmar, portfolio, developer, software engineer, full stack developer, AI engineer, machine learning, React, Next.js, Python, web development, projects, resume, contact",
  authors: [{ name: "Yash Parmar" }],
  creator: "Yash Parmar",
  publisher: "Yash Parmar",
  metadataBase: new URL("https://yashparmar.in"),
  alternates: {
    canonical: "https://yashparmar.in",
  },

  /** Favicon metadata (browser-level) */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashparmar.in/",
    title: "Yash Parmar | Software Developer & AI Engineer Portfolio",
    description:
      "Portfolio of Yash Parmar, a Software Developer and AI Engineer specializing in React, Next.js, and Machine Learning.",
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
    description:
      "Portfolio of Yash Parmar, a Full Stack Developer and AI Engineer specializing in React, Next.js, and Machine Learning.",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000000" />

        {/* Explicit favicon links for Google Search */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Yash Parmar",
      url: "https://yashparmar.in",
      image: "https://yashparmar.in/img/yash2.jpg",
      sameAs: [
        "https://www.linkedin.com/in/yashparmar1125",
        "https://github.com/Yashparmar1125",
        "https://instagram.com/yash11_25"
      ],
      jobTitle: "Software Developer and AI Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressCountry: "India"
      }
    }),
  }}
/>

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
