import type { Metadata } from "next";
import { Sansita } from "next/font/google";
import "./globals.css";

const sansita = Sansita({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sansita",
});

export const metadata: Metadata = {
  title: "Jia Amarnani",
  description: "I build human-centered solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sansita.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}