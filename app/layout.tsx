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
  themeColor: "#fbfbf9",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://antoniocesaradvocacia.com.br"),
  title:
    "Advocacia Antônio Cesar | Advogado em Matozinhos - MG · Avaliação 5,0 ★ (252 avaliações)",
  description:
    "Advocacia Antônio Cesar — Dr. Antônio Cesar. Advogado especialista em Direito Trabalhista, Civil e Previdenciário (INSS) em Matozinhos - MG. Avaliação 5,0 ★ com mais de 250 avaliações no Google. Atendimento presencial e online. WhatsApp: (31) 99699-0842.",
  keywords: [
    "Advocacia Antônio Cesar",
    "Antônio Cesar Advocacia",
    "Dr Antônio Cesar Advogado",
    "Advogado em Matozinhos",
    "Advogado Matozinhos MG",
    "Escritório de Advocacia Matozinhos",
    "Advogado Trabalhista Matozinhos",
    "Processo Trabalhista Matozinhos",
    "Advogado Previdenciário Matozinhos MG",
    "Causas contra o INSS Matozinhos",
    "Aposentadoria Matozinhos",
    "Advogado Cível Matozinhos",
    "Inventário e Família Matozinhos",
    "Direito do Consumidor Matozinhos",
    "Advogado Grande BH",
  ],
  authors: [{ name: "Advocacia Antônio Cesar" }],
  creator: "Advocacia Antônio Cesar",
  publisher: "Advocacia Antônio Cesar",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=ac1", sizes: "any" },
      { url: "/icon-32x32.png?v=ac1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=ac1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=ac1", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=ac1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=ac1",
    apple: [{ url: "/apple-icon.png?v=ac1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://antoniocesaradvocacia.com.br",
    title:
      "Advocacia Antônio Cesar | Advogado em Matozinhos - MG · Avaliação 5,0 ★",
    description:
      "Soluções jurídicas eficientes para proteger o que realmente importa. Especialista em Direito Trabalhista, Civil e Previdenciário (INSS). Av. Bento Gonçalves, 40 - Sl C - Centro, Matozinhos - MG.",
    siteName: "Advocacia Antônio Cesar",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 348,
        alt: "Advocacia Antônio Cesar — Advogado em Matozinhos - MG",
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
    name: "Advocacia Antônio Cesar",
    alternateName: "Antônio Cesar — Advocacia",
    telephone: "+55-31-99699-0842",
    url: "https://antoniocesaradvocacia.com.br",
    image: "https://antoniocesaradvocacia.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Bento Gonçalves, 40 - Sl C - Centro",
      addressLocality: "Matozinhos",
      addressRegion: "MG",
      postalCode: "35720-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "252",
    },
    areaServed: [
      "Matozinhos",
      "Capim Branco",
      "Prudente de Morais",
      "Pedro Leopoldo",
      "Sete Lagoas",
      "Confins",
      "Vespasiano",
      "Belo Horizonte",
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
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5531996990842",
      "https://www.instagram.com/drantoniocesaradvocacia/",
      "https://www.google.com/search?q=Ant%C3%B4nio+Cesar+%E2%80%94+Advocacia%0AMatozinhos+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=ac1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=ac1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=ac1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=ac1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=ac1" />
        <link rel="shortcut icon" href="/favicon.ico?v=ac1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=ac1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#d8a84e] selection:text-[#030a14] bg-[#fbfbf9] text-[#061120]">
        {children}
      </body>
    </html>
  );
}
