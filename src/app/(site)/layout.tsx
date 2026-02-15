import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "LMGHI — Lambano Medfront Global Health Initiative",
  description:
    "Structured, governed, evidence-driven programs strengthening health delivery across West Africa.",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
