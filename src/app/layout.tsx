import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vince Dorell F. Esmero | IT Student & Aspiring Developer",
  description:
    "Digital portfolio of Vince Dorell F. Esmero — BSIT Student at University of San Agustin. Aspiring developer passionate about building impactful digital solutions.",
  keywords: [
    "Vince Dorell F. Esmero",
    "Portfolio",
    "BSIT",
    "University of San Agustin",
    "Web Developer",
    "CommunityVoice",
    "Next.js",
  ],
  authors: [{ name: "Vince Dorell F. Esmero" }],
  openGraph: {
    title: "Vince Dorell F. Esmero | Portfolio",
    description: "BSIT Student & Aspiring Developer — University of San Agustin",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-background text-text-primary font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
