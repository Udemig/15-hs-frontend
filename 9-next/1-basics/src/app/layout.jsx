import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: { default: "Amazon", template: "%s - Amazon" },
  description: "En iyi ürünler burada",
  keywords: ["e-ticaret", "elektronik", "eğitim"],
  author: "Furkan Evin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="h-screen flex flex-col justify-between items-center text-3xl text-center gap-10">
        <header>header</header>

        <main className="flex-1 flex flex-col justify-center">{children}</main>

        <footer>footer</footer>
      </body>
    </html>
  );
}
