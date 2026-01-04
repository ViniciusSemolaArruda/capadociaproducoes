import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderOffset from "./_components/HeaderOffset/HeaderOffset";
import WhatsappFloat from "./_components/WhatsappFloat/WhatsappFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Capadócia Produções e Eventos",
    template: "%s | Capadócia Produções",
  },
  description:
    "Produtora cultural e de eventos com quase 30 anos de atuação. Projetos com propósito, ética, excelência e soluções digitais.",
  applicationName: "Capadócia Produções e Eventos",
  metadataBase: new URL("https://capadociaproducoes.vercel.app/"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Capadócia Produções e Eventos",
    description:
      "Produção de eventos culturais, esportivos e corporativos com soluções digitais e excelência na execução.",
    url: "https://capadociaproducoes.vercel.app/",
    siteName: "Capadócia Produções e Eventos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Capadócia Produções e Eventos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capadócia Produções e Eventos",
    description:
      "Produção de eventos com propósito, ética, excelência e soluções digitais.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Ajusta automaticamente o scroll-padding-top com base na altura do header */}
        <HeaderOffset />
        <WhatsappFloat />
        {children}
      </body>
    </html>
  );
}
