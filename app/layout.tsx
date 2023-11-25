import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIGITOTE",
  description: "Empowering the influencer Industry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
