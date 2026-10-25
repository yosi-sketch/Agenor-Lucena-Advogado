import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfairFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0a09",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moraisragone.adv.br"),
  title:
    "Morais Ragone Advocacia — Dra. Rithiane Morais Ragone | Nanuque - MG · Direito de Família, Contratos e Consumidor",
  description:
    "Dra. Rithiane Morais Ragone — Morais Ragone Advocacia e Consultoria Jurídica em Nanuque - MG. Transformamos conflitos em soluções jurídicas claras e eficazes em Direito de Família, Contratos e Consumidor. Nota Máxima 5,0 ★ com 28 avaliações no Google. Atendimento presencial e online para todo o Brasil.",
  keywords: [
    "Morais Ragone Advocacia",
    "Dra Rithiane Morais Ragone",
    "Advogada em Nanuque MG",
    "Advocacia Nanuque",
    "Direito de Família Nanuque",
    "Divórcio Nanuque MG",
    "Inventário Nanuque MG",
    "Pensão Alimentícia Nanuque",
    "Direito do Consumidor Nanuque",
    "Contratos Nanuque",
    "Advogado Vale do Mucuri",
    "Advogada Minas Gerais",
  ],
  authors: [{ name: "Morais Ragone Advocacia e Consultoria Jurídica" }],
  creator: "Morais Ragone Advocacia e Consultoria Jurídica",
  publisher: "Morais Ragone Advocacia e Consultoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=mr1", sizes: "any" },
      { url: "/icon-32x32.png?v=mr1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=mr1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=mr1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=mr1",
    apple: [{ url: "/apple-icon.png?v=mr1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.moraisragone.adv.br",
    title:
      "Morais Ragone Advocacia — Dra. Rithiane Morais Ragone | Nanuque - MG",
    description:
      "Transformamos conflitos em soluções jurídicas claras e eficazes. Especialistas em Direito de Família, Contratos e Consumidor. Nota Máxima 5,0 ★ no Google em Nanuque - MG.",
    siteName: "Morais Ragone Advocacia e Consultoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 986,
        height: 208,
        alt: "Morais Ragone Advocacia e Consultoria Jurídica - Logotipo Oficial",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Morais Ragone Advocacia e Consultoria Jurídica",
    alternateName: "Dra. Rithiane Morais Ragone — Advogada em Nanuque",
    telephone: "+55-31-99481-8783",
    url: "https://www.moraisragone.adv.br",
    image: "https://www.moraisragone.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Santos Dumont, 194 - Sl 4 - Centro",
      addressLocality: "Nanuque",
      addressRegion: "MG",
      postalCode: "39860-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "28",
    },
    areaServed: [
      "Nanuque",
      "Serra dos Aimorés",
      "Carlos Chagas",
      "Teófilo Otoni",
      "Mucuri",
      "Posto da Mata",
      "Montanha",
      "Vale do Mucuri",
      "Minas Gerais",
      "Brasil",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5531994818783",
      "https://www.instagram.com/rithianemoraisragone/",
      "https://www.google.com/search?q=Morais+Ragone+Advocacia%0ANanuque+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=mr1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=mr1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=mr1" />
        <link rel="shortcut icon" href="/icon-32x32.png?v=mr1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=mr1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen overflow-x-clip bg-[#0c0a09] font-sans text-[#f7f3ee] antialiased selection:bg-[#d99778] selection:text-[#0c0a09]"
      >
        {children}
      </body>
    </html>
  );
}
