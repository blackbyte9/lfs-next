import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { inter } from '@/ui/fonts';

export const metadata: Metadata = {
  title: "LFS Vöhringen",
  description: "erstellt mit Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-bs-theme="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
