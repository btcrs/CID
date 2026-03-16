import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carothers Interior Design | Modern & Timeless",
  description: "Curated interiors that reflect your vision and elevate your lifestyle. Based in Los Angeles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
