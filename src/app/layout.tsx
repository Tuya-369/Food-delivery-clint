
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { createContext } from 'react';
import { Toaster } from "sonner";
import FoodCardContextProvider, { FoodCartContext } from "@/providers/FoodCard";
const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food delivery",
  description: "Pinecone food delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>
      <FoodCardContextProvider >  
             <main>{children}</main>
       </FoodCardContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
