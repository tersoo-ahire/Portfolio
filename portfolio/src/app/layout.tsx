import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tersoo Ahire David",
  description: "Tersoo Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} 
        flex min-h-screen flex-col justify-between`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
