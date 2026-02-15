import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LMGHI",
  description: "Lambano Medfront Global Health Initiative (LMGHI)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
