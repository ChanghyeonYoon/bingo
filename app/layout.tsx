import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud Club BINGO",
  description: "사람을 찾아라! 빙고게임",
  openGraph: {
    title: "Cloud Club BINGO",
    description: "사람을 찾아라! 빙고게임",
    images: "/images/title.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1.0, initial-scale=1.0, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta name='robots' content='index,nofollow' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
