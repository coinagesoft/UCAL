"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Urbanist, Telex } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
});

const telex = Telex({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-telex",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${urbanist.variable} ${telex.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
