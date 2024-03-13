import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "App for analyze Finances",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
