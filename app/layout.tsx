import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nolhan BILYJ - Portfolio",
  description: "Bienvenu sur mon portfolio, qui est tenu à jour au fil de mon voyage dans le monde du développement! N'hesitez pas à me contacter au besoin.",
  icons: {
    icon: "/moi.jpg",  // Ajout de l'icône du favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Toaster />
            <Navbar />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}