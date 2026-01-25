import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Security Portfolio | Terminal Theme",
  description: "Portofolio Security bertema terminal: About, Projects, Contact.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-rwa">{children}</body>
    </html>
  );
}
