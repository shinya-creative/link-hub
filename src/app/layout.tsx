import type { Metadata } from "next";
import ThemeRegistry from '@/theme/ThemeRegistry';

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
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
