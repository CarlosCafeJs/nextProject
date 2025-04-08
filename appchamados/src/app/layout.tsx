import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SessionProvider from "@/providers/auth";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "AppChamados",
  description: "Um Aplicativo de chamados!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} `}
      >
        <SessionProvider>
          <Header />
          {children},
        </SessionProvider>
      </body>
    </html>
  );
}
