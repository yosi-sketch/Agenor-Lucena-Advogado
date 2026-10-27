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
  themeColor: "#0b1320",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jessicabernardes.adv.br"),
  title:
    "Jéssica Bernardes — Advogada | OAB/MG 231.560 · Direito do Consumidor, Cível & Previdenciário · Luz - MG",
  description:
    "Dra. Jéssica Oliveira Bernardes Nunes — Advocacia de alto padrão em Luz - MG. Atuação especializada em Direito do Consumidor, combate a golpes e fraudes bancárias, Direito Cível, Família e Previdenciário (INSS). Nota Máxima 5,0 ★ com 21 avaliações no Google. Atendimento presencial no Centro-Oeste de Minas e online para todo o Brasil.",
  keywords: [
    "Jéssica Bernardes Advogada",
    "Jéssica Oliveira Bernardes Nunes",
    "Advogada em Luz MG",
    "Advocacia Luz Minas Gerais",
    "Direito do Consumidor Luz MG",
    "Golpe do Pix Advogada",
    "Fraudes Bancárias Advogado",
    "Direito Cível Luz MG",
    "Direito Previdenciário INSS Luz MG",
    "Direito de Família e Sucessões Luz MG",
    "OAB MG 231560",
    "Advogada Centro-Oeste MG",
  ],
  authors: [{ name: "Jéssica Bernardes — Advogada (OAB/MG 231.560)" }],
  creator: "Jéssica Bernardes — Advogada",
  publisher: "Jéssica Bernardes — Advogada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=jb1", sizes: "any" },
      { url: "/icon-32x32.png?v=jb1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=jb1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=jb1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=jb1",
    apple: [{ url: "/apple-icon.png?v=jb1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.jessicabernardes.adv.br",
    title:
      "Jéssica Bernardes — Advogada | OAB/MG 231.560 · Luz - MG",
    description:
      "Advocacia humana, ética, ágil e de alta resolutividade. Especialista em Direito do Consumidor, Defesa contra Golpes, Cível, Família e Previdenciário. Nota Máxima 5,0 ★ no Google.",
    siteName: "Jéssica Bernardes — Advogada",
    images: [
      {
        url: "/jessica-bernardes-logo-oficial.png",
        width: 1024,
        height: 349,
        alt: "Jéssica Bernardes Advogada OAB/MG 231.560 - Logotipo Oficial",
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
    name: "Jéssica Bernardes — Advogada",
    alternateName: "Jéssica Oliveira Bernardes Nunes — Advocacia",
    telephone: "+55-37-99186-9585",
    url: "https://www.jessicabernardes.adv.br",
    image: "https://www.jessicabernardes.adv.br/jessica-bernardes-logo-oficial.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Cel. José Tomás, 200 - Centro",
      addressLocality: "Luz",
      addressRegion: "MG",
      postalCode: "35595-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "21",
    },
    areaServed: [
      "Luz",
      "Bom Despacho",
      "Santo Antônio do Monte",
      "Lagoa da Prata",
      "Dores do Indaiá",
      "Arcos",
      "Formiga",
      "Centro-Oeste de Minas",
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
      "https://wa.me/5537991869585",
      "https://www.instagram.com/jessicaobernardes.adv",
      "https://www.google.com/search?q=J%C3%A9ssica+Oliveira+Bernardes+Nunes+%E2%80%94+Advogada%0ALuz+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=jb1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=jb1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=jb1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=jb1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#c4a287] selection:text-[#0b1320]">
        {children}
      </body>
    </html>
  );
}
