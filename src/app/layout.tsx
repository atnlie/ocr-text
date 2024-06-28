import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Toaster} from "react-hot-toast";


export const metadata: Metadata = {
  title: "OCR by RnD PT SISI",
  description: "OCR for speedup automate faktur pajak, incoming & outcome payment, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
