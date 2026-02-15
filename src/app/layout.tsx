import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link Hub",
  description: "A high-performance bookmarking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
