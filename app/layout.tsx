import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mradul Awasthi — Strategy Analyst · Consumer & Supply Chain",
  description:
    "Portfolio of Mradul Awasthi — Generalist Strategy Analyst with experience in consumer markets, agri value chains, and cross-border e-commerce. BMS student at University of Delhi.",
  keywords:
    "Mradul Awasthi, Strategy Analyst, Consumer Markets, Supply Chain, Delhi University, SSCBS, FarMart, Portfolio",
  openGraph: {
    title: "Mradul Awasthi — Strategy Analyst",
    description: "Consumer markets · Agri value chains · Consulting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
