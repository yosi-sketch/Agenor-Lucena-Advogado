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
  metadataBase: new URL("https://www.ferreiraebolleliadv.com.br"),
  title:
    "Ferreira e Bolleli Advogados | Advocacia em Nanuque - MG · Avaliação 4,9 ★",
  description:
    "Ferreira e Bolleli Advogados — Escritório de advocacia em Nanuque - MG especializado em Direito Trabalhista, Previdenciário (INSS), Cível e de Família. Avaliação 4,9 ★ no Google. Atendimento ético, combativo e humanizado. WhatsApp: (33) 98715-6234.",
  keywords: [
    "Ferreira e Bolleli Advogados",
    "Ferreira & Bolleli Advogados",
    "Advogado em Nanuque",
    "Advogado Nanuque MG",
    "Escritório de Advocacia Nanuque",
    "Ferreira e Bolleli Nanuque",
    "Advogado Trabalhista Nanuque",
    "Processo Trabalhista Nanuque",
    "Advogado Previdenciário Nanuque MG",
    "Causas contra o INSS Nanuque",
    "Aposentadoria Nanuque",
    "Advogado Cível Nanuque",
    "Inventário e Família Nanuque",
    "Direito do Consumidor Nanuque",
    "Advogado Vale do Mucuri",
  ],
  authors: [{ name: "Ferreira e Bolleli Advogados" }],
  creator: "Ferreira e Bolleli Advogados",
  publisher: "Ferreira e Bolleli Advogados",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=fb2", sizes: "any" },
      { url: "/icon-32x32.png?v=fb2", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=fb2", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=fb2", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=fb2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=fb2",
    apple: [{ url: "/apple-icon.png?v=fb2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.ferreiraebolleliadv.com.br",
    title:
      "Ferreira e Bolleli Advogados | Advocacia em Nanuque - MG · Avaliação 4,9 ★",
    description:
      "Soluções jurídicas estratégicas em Direito Trabalhista, Previdenciário, Cível e de Família. Avaliação 4,9 ★ no Google. R. São Lourenço, 410 - Sl 03 - Centro, Nanuque - MG.",
    siteName: "Ferreira e Bolleli Advogados",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Ferreira e Bolleli Advogados — Advocacia em Nanuque",
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
    name: "Ferreira e Bolleli Advogados",
    alternateName: "Ferreira & Bolleli Advogados",
    telephone: "+55-33-98715-6234",
    url: "https://www.ferreiraebolleliadv.com.br",
    image: "https://www.ferreiraebolleliadv.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. São Lourenço, 410 - Sl 03 - Centro",
      addressLocality: "Nanuque",
      addressRegion: "MG",
      postalCode: "39860-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "12",
    },
    areaServed: [
      "Nanuque",
      "Serra dos Aimorés",
      "Carlos Chagas",
      "Teófilo Otoni",
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
        opens: "08:00",
        closes: "11:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "13:30",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5533987156234",
      "https://www.instagram.com/ferreiraebolleliadv/",
      "https://beacons.ai/ferreiraebolleliadv",
      "https://www.google.com/search?q=Ferreira+e+Bolleli+Advogados%0ANanuque+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=fb2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=fb2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=fb2" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=fb2" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=fb2" />
        <link rel="shortcut icon" href="/favicon.ico?v=fb2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=fb2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#e5b448] selection:text-[#040914] bg-[#fbfbf9] text-[#071126]">
        {children}
      </body>
    </html>
  );
}
