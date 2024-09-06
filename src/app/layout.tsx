import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
