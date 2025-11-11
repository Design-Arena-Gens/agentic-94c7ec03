import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProfitChart Indicator Builder",
  description: "Interactive generator for a custom ProfitChart Pro Pascal indicator"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
