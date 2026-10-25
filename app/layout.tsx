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
  themeColor: "#0d0b0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luanamoreira.adv.br"),
  title:
    "Luana Moreira — Advogada Previdenciária | Capelinha - MG · Toda causa importa",
  description:
    "Dra. Luana Moreira Advocacia e Consultoria Jurídica em Capelinha - MG. Toda causa importa! Mais de 10 anos garantindo seus direitos em ações previdenciárias (INSS), cíveis e família. Nota Máxima 5,0 ★ com 31 avaliações no Google. Atendimento presencial e online para todo o Brasil.",
  keywords: [
    "Luana Moreira Advogada",
    "Luana Moreira Advogada Previdenciária",
    "Advogada em Capelinha MG",
    "Advocacia Capelinha",
    "Dra Luana Moreira",
    "Direito Previdenciário Capelinha",
    "Aposentadoria INSS Capelinha MG",
    "Aposentadoria Rural Capelinha",
    "BPC LOAS Capelinha",
    "Direito de Família Capelinha",
    "Inventário Capelinha MG",
    "Advogado Vale do Jequitinhonha",
    "Advogada Minas Gerais",
  ],
  authors: [{ name: "Luana Moreira Advocacia e Consultoria Jurídica" }],
  creator: "Luana Moreira Advocacia e Consultoria Jurídica",
  publisher: "Luana Moreira Advocacia e Consultoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=lm1", sizes: "any" },
      { url: "/icon-32x32.png?v=lm1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=lm1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=lm1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=lm1",
    apple: [{ url: "/apple-icon.png?v=lm1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.luanamoreira.adv.br",
    title:
      "Luana Moreira — Advogada Previdenciária | Capelinha - MG",
    description:
      "Toda causa importa! Mais de 10 anos comprometida a garantir seus direitos em ações previdenciárias, cíveis e família. Nota Máxima 5,0 ★ no Google em Capelinha - MG.",
    siteName: "Luana Moreira Advocacia e Consultoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 886,
        height: 471,
        alt: "Luana Moreira Advocacia e Consultoria Jurídica - Logotipo Oficial",
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
    name: "Luana Moreira Advocacia e Consultoria Jurídica",
    alternateName: "Luana Moreira — Advogada Previdenciária",
    telephone: "+55-33-99113-6870",
    url: "https://www.luanamoreira.adv.br",
    image: "https://www.luanamoreira.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Gov. Valadares, 1429 - Maria Lúcia",
      addressLocality: "Capelinha",
      addressRegion: "MG",
      postalCode: "39680-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "31",
    },
    areaServed: [
      "Capelinha",
      "Minas Novas",
      "Água Boa",
      "Aricanduva",
      "Turmalina",
      "Itamarandiba",
      "Diamantina",
      "Vale do Jequitinhonha",
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
      "https://wa.me/5533991136870",
      "https://www.instagram.com/luanamoreiraadv/",
      "https://linktr.ee/draluanadvogada",
      "https://www.google.com/search?q=Luana+Moreira+%E2%80%94+Advogada+Previdenci%C3%A1ria%0ACapelinha+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=lm1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=lm1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=lm1" />
        <link rel="shortcut icon" href="/icon-32x32.png?v=lm1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=lm1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-[#0d0b0a] font-sans text-[#f2ece4] antialiased selection:bg-[#d4af7a] selection:text-[#0d0b0a]">
        {children}
      </body>
    </html>
  );
}
