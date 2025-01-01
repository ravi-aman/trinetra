import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; 

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";
// Vercel Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/next";
// Clerk authentication
import {
  ClerkProvider,
} from "@clerk/nextjs";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
  throw new Error("Missing Clerk publishableKey. Ensure the environment variable is set.");
}

export const metadata: Metadata = {
  title: "Stock market course", 
  description: "a health care management system", 
  icons: {
    icon: "/favicon.ico",
    shortcut: "/Rk-white.png",
    apple: "/Rk-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={clerkKey}>
      <html lang="en">
        <head>
          {/* Meta and icon tags */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/Rk-white.png" />
          <link rel="shortcut icon" href="/Rk-white.png" />
        </head>
        <body className={inter.className}>
          <div className="flex min-h-screen flex-col bg-white">
            <Analytics />
            <SpeedInsights /> 
            <Header2 />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
