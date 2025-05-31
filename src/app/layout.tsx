import { Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "react-hot-toast";

const geistSans = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider session={session}>
          <main className="font-sans w-full selection:bg-warning/70">
            <Navbar />
            <section className="w-full min-h-screen"> {children}</section>
            <Footer />
            <Toaster
              containerClassName="font-sans text-xs md:text-sm"
              position="bottom-right"
            />
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
