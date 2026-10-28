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
  themeColor: "#fbfaf8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.frbadvogados.adv.br"),
  title:
    "FRB Advogados | Causas Contra o INSS · Dr. Filipe Rabelo · Capelinha - MG · 10 Escritórios em MG",
  description:
    "FRB Advogados — Advocacia & Assessoria Jurídica especializada em Direito Previdenciário e Causas contra o INSS. Liderada pelo Dr. Filipe Rabelo, aposentando pessoas todos os dias com excelência e nota máxima 5,0 ★ no Google. 10 escritórios de portas abertas em Minas Gerais e atendimento digital para todo o Brasil.",
  keywords: [
    "FRB Advogados",
    "Causas contra o INSS Capelinha",
    "Advogado Previdenciário Capelinha MG",
    "Filipe Rabelo Advogado",
    "Dr Filipe Rabelo Braga",
    "FRB Advocacia e Assessoria Jurídica",
    "Aposentadoria INSS Minas Gerais",
    "Benefício Negado INSS",
    "Auxílio Doença e Invalidez INSS",
    "BPC LOAS Capelinha MG",
    "Pensão por Morte INSS",
    "Revisão de Aposentadoria INSS",
    "Advogado INSS Santa Maria do Suaçuí",
    "Advogado Previdenciário Vale do Jequitinhonha",
    "Aposentadoria Rural MG",
  ],
  authors: [{ name: "Dr. Filipe Rabelo Braga - FRB Advogados" }],
  creator: "FRB Advogados — Advocacia & Assessoria Jurídica",
  publisher: "FRB Advogados — Advocacia & Assessoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=frb1", sizes: "any" },
      { url: "/icon-32x32.png?v=frb1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=frb1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=frb1", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=frb1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=frb1",
    apple: [{ url: "/apple-icon.png?v=frb1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.frbadvogados.adv.br",
    title:
      "FRB Advogados | Causas Contra o INSS · Dr. Filipe Rabelo · Capelinha - MG",
    description:
      "Especialistas em causas contra o INSS, aposentadorias, benefícios negados e BPC/LOAS. Nota máxima 5,0 ★ no Google com 10 escritórios de portas abertas em MG.",
    siteName: "FRB Advogados — Advocacia & Assessoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "FRB Advogados — Advocacia & Assessoria Jurídica",
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
    name: "FRB Advogados / Causas Contra o INSS",
    alternateName: "FRB Advocacia & Assessoria Jurídica",
    telephone: "+55-33-98818-1310",
    url: "https://www.frbadvogados.adv.br",
    image: "https://www.frbadvogados.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Gov. Valadares, 213 - Centro",
      addressLocality: "Capelinha",
      addressRegion: "MG",
      postalCode: "39680-060",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "14",
    },
    areaServed: [
      "Capelinha",
      "Santa Maria do Suaçuí",
      "Água Boa",
      "Aricanduva",
      "Minas Novas",
      "Turmalina",
      "Itamarandiba",
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
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5533988181310",
      "https://www.instagram.com/frbadvogados_/",
      "https://www.instagram.com/filiperabelobraga/",
      "https://www.google.com/search?q=FRB+Advogados+%E2%80%94+Filipe+Rabelo%0ACapelinha+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=frb1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=frb1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=frb1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=frb1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=frb1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#caa24d] selection:text-[#0c0f17] bg-[#fbfaf8] text-[#0f172a]">
        {children}
      </body>
    </html>
  );
}
