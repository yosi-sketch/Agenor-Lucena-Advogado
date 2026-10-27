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
  themeColor: "#0b1322",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mairagomesadvocacia.com.br"),
  title:
    "Escritório de Advocacia Maira Gomes de Oliveira | OAB/MG 166.714 · Espera Feliz - MG",
  description:
    "Dra. Maira Gomes de Oliveira — Advocacia de alto padrão em Espera Feliz - MG e online para todo o Brasil. Mais de 7 anos de experiência jurídica. Nota Máxima 5,0 ★ com 16 avaliações no Google. Atendimento humanizado, ético e resolutivo em Direito Civil, Previdenciário (INSS), Família & Sucessões, Consumidor e Trabalhista.",
  keywords: [
    "Maira Gomes de Oliveira Advogada",
    "Escritório de Advocacia Maira Gomes de Oliveira",
    "MR Advocacia",
    "Dra Maira Gomes",
    "Advogada em Espera Feliz MG",
    "Advocacia Espera Feliz Minas Gerais",
    "OAB MG 166714",
    "OAB MG 306195",
    "Direito Previdenciário INSS Espera Feliz",
    "Inventário e Família Espera Feliz MG",
    "Direito Cível e Contratos Espera Feliz",
    "Advogada Região do Caparaó MG",
  ],
  authors: [{ name: "Dra. Maira Gomes de Oliveira (OAB/MG 166.714)" }],
  creator: "Escritório de Advocacia Maira Gomes de Oliveira",
  publisher: "Escritório de Advocacia Maira Gomes de Oliveira",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=mg1", sizes: "any" },
      { url: "/icon-32x32.png?v=mg1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=mg1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=mg1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=mg1",
    apple: [{ url: "/apple-icon.png?v=mg1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.mairagomesadvocacia.com.br",
    title:
      "Escritório de Advocacia Maira Gomes de Oliveira | OAB/MG 166.714 · Espera Feliz - MG",
    description:
      "Advocacia humanizada, ética, ágil e de alta resolutividade. Mais de 7 anos de experiência. Nota Máxima 5,0 ★ no Google.",
    siteName: "Escritório de Advocacia Maira Gomes de Oliveira",
    images: [
      {
        url: "/logo.png",
        width: 973,
        height: 466,
        alt: "Escritório de Advocacia Maira Gomes de Oliveira OAB/MG 166.714 - Logotipo Oficial",
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
    name: "Escritório de Advocacia Maira Gomes de Oliveira",
    alternateName: "MR Advocacia — Dra. Maira Gomes de Oliveira",
    telephone: "+55-32-98495-6780",
    url: "https://www.mairagomesadvocacia.com.br",
    image: "https://www.mairagomesadvocacia.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Pedro Dias Neto, 03 - Centro",
      addressLocality: "Espera Feliz",
      addressRegion: "MG",
      postalCode: "36830-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "16",
    },
    areaServed: [
      "Espera Feliz",
      "Carangola",
      "Manhumirim",
      "Manhuaçu",
      "Alto Caparaó",
      "Caparaó",
      "Divino",
      "Dores do Rio Preto",
      "Zona da Mata Mineira",
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
      "https://wa.me/5532984956780",
      "https://www.instagram.com/dramairagomes_/",
      "https://www.google.com/search?q=Maira+Gomes+de+Oliveira+%E2%80%94+Advocacia%0AEspera+Feliz+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=mg1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=mg1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=mg1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=mg1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#df9e32] selection:text-[#060a12]">
        {children}
      </body>
    </html>
  );
}
