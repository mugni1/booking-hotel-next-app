import { Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

const geistSans = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="font-sans w-full">
          <Navbar />
          <section className="w-full min-h-screen"> {children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
