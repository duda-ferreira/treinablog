import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Home from './page';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TreinaBlog",
  description: "Aplicação desenvolvida no curso Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles['title']}>
          <h1>
            Treina
            <span className={styles['title-second-word']}>Blog</span>
          </h1>
        </header>
        {children}</body>
    </html>
  );
}
