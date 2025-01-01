"use client";

import { Inter } from "next/font/google";
import "./globals.css";

// font
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/Rk-white.png" />
          <link rel="shortcut icon" href="/Rk-white.png" />
        </head>
        <body className={inter.className}>
          <div className="flex min-h-screen flex-col bg-slate-100">
            <main>{children}</main> 
          </div>
        </body>
      </html>
  );
}
