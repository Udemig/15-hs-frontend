import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/styles/globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Paneli",
  description: "Yönetim arayüzü",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <div className="flex min-h-screen overflow-hidden">
          <Sidebar />

          <div className="flex flex-col w-full overflow-hidden">
            <Header />

            <main className="flex-1 bg-zinc-50 text-zinc-900 overflow-y-auto">{children}</main>

            <ToastContainer position="bottom-left" autoClose={2000} />
          </div>
        </div>
      </body>
    </html>
  );
}
