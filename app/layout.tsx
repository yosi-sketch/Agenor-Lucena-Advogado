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
  themeColor: "#0c121e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://agenorlucena.adv.br"),
  title:
    "Agenor Lucena Advocacia | Cível & Trabalhista · Dr. Alexandre Abreu Lúcio · 5,0 ★ (39 avaliações) · Pitangui - MG",
  description:
    "Agenor Lucena Advocacia — Liderado pelo Dr. Alexandre Abreu Lúcio (OAB/MG 217.363), Presidente da Comissão da OAB Jovem de Pitangui. Especialista em Direito Cível e Trabalhista, com foco em Direito Explicado, transparente e resolutivo. Sede na Praça Dr. Isauro Epifânio, 141, Bairro São Francisco, Pitangui - MG. Atendimento presencial e online nacional. WhatsApp: (37) 99971-0510.",
  keywords: [
    "Agenor Lucena Advocacia",
    "Agenor Lucena",
    "Dr Alexandre Abreu Lucio",
    "Alexandre Abreu Lucio Advogado",
    "Advogado em Pitangui MG",
    "Advocacia Pitangui Minas Gerais",
    "Advogado Trabalhista Pitangui",
    "Advogado Cível Pitangui",
    "Direito do Trabalho Pitangui",
    "Rescisão Indireta e Horas Extras Pitangui",
    "Indenização e Danos Morais Pitangui",
    "Direito de Família Pitangui",
    "Inventário em Cartório Pitangui",
    "Contratos Pitangui MG",
    "Presidente OAB Jovem Pitangui",
    "OAB MG 217363",
    "Direito Explicado Pitangui",
    "Advocacia online Minas Gerais e Brasil",
  ],
  authors: [{ name: "Agenor Lucena Advocacia - Dr. Alexandre Abreu Lúcio" }],
  creator: "Agenor Lucena Advocacia",
  publisher: "Agenor Lucena Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=al1", sizes: "any" },
      { url: "/icon-32x32.png?v=al1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=al1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=al1", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=al1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=al1",
    apple: [{ url: "/apple-icon.png?v=al1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://agenorlucena.adv.br",
    title:
      "Agenor Lucena Advocacia | Cível & Trabalhista · Dr. Alexandre Abreu Lúcio · 5,0 ★ (39 avaliações)",
    description:
      "Defesa estratégica nas áreas Cível e Trabalhista com o conceito de Direito Explicado. Liderado pelo Dr. Alexandre Abreu Lúcio (OAB/MG 217.363), Presidente da Comissão da OAB Jovem de Pitangui - MG. WhatsApp: (37) 99971-0510.",
    siteName: "Agenor Lucena Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Agenor Lucena Advocacia — Cível e Trabalhista",
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
    name: "Agenor Lucena Advocacia - Dr. Alexandre Abreu Lúcio",
    alternateName: "Dr. Alexandre Abreu Lúcio Advocacia | Agenor Lucena Advocacia Cível e Trabalhista",
    telephone: "+55-37-99971-0510",
    url: "https://agenorlucena.adv.br",
    image: "https://agenorlucena.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Dr. Isauro Epifânio, 141 - Bairro São Francisco",
      addressLocality: "Pitangui",
      addressRegion: "MG",
      postalCode: "35650-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "39",
    },
    areaServed: [
      "Pitangui",
      "Conceição do Pará",
      "Nova Serrana",
      "Pará de Minas",
      "Leandro Ferreira",
      "Martinho Campos",
      "Divinópolis",
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
        opens: "08:30",
        closes: "18:30",
      },
    ],
    sameAs: [
      "https://wa.me/5537999710510",
      "https://www.instagram.com/agenor_lucena/",
      "https://www.google.com/search?q=Alexandre+Abreu+L%C3%BAcio+%E2%80%94+Advocacia%0APitangui+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=al1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=al1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=al1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=al1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=al1" />
        <link rel="shortcut icon" href="/favicon.ico?v=al1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=al1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#c59b27] selection:text-[#080c14] bg-[#fcfbf9] text-[#0a0e17]">
        {children}
      </body>
    </html>
  );
}
