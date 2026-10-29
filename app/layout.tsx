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
  metadataBase: new URL("https://santosteixeiraadvogados.com.br"),
  title:
    "Santos Teixeira Advogados Associados | Previdenciário, Família & Usucapião · 5,0 ★ (41 avaliações)",
  description:
    "Santos Teixeira Advogados Associados — Advocacia especializada em Direito Previdenciário (Aposentadorias e Benefícios do INSS), Direito de Família e Sucessões (Divórcio, Guarda, Pensão e Inventários) e Usucapião / Regularização de Imóveis. Sede na Praça XV de Novembro, 20, Centro, Oliveira - MG (Condomínio Shopping XV). Atendimento presencial e online nacional. WhatsApp: (37) 99967-4308.",
  keywords: [
    "Santos Teixeira Advogados Associados",
    "Santos Teixeira Advogados",
    "Dr Wesley Santos Advogado",
    "Advogado em Oliveira MG",
    "Advocacia Oliveira Minas Gerais",
    "Direito Previdenciário Oliveira MG",
    "Aposentadoria INSS Oliveira MG",
    "BPC LOAS Oliveira MG",
    "Usucapião Oliveira MG",
    "Regularização de Imóveis Oliveira MG",
    "Direito de Família Oliveira MG",
    "Divórcio e Guarda Oliveira MG",
    "Pensão Alimentícia Oliveira MG",
    "Inventário em Cartório Oliveira MG",
    "Shopping XV Oliveira MG",
    "Advogado Previdenciário Campo Belo e Oliveira",
    "Advocacia online Minas Gerais e Brasil",
  ],
  authors: [{ name: "Santos Teixeira Advogados Associados" }],
  creator: "Santos Teixeira Advogados Associados",
  publisher: "Santos Teixeira Advogados Associados",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=st1", sizes: "any" },
      { url: "/icon-32x32.png?v=st1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=st1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=st1", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=st1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=st1",
    apple: [{ url: "/apple-icon.png?v=st1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://santosteixeiraadvogados.com.br",
    title:
      "Santos Teixeira Advogados Associados | Previdenciário, Família & Usucapião · 5,0 ★ (41 avaliações)",
    description:
      "Protegendo o seu patrimônio, sua família e sua aposentadoria com segurança jurídica e atendimento resolutivo. Sede no Centro de Oliveira - MG (Shopping XV) e atendimento online para todo o Brasil. WhatsApp: (37) 99967-4308.",
    siteName: "Santos Teixeira Advogados Associados",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Santos Teixeira Advogados Associados — Previdenciário, Família e Usucapião",
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
    name: "Santos Teixeira Advogados Associados",
    alternateName: "Santos Teixeira Advogados | Previdenciário, Família e Usucapião",
    telephone: "+55-37-99967-4308",
    url: "https://santosteixeiraadvogados.com.br",
    image: "https://santosteixeiraadvogados.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça XV de Novembro, 20 - 2° andar - Sala 202 - Condomínio Shopping XV - Centro",
      addressLocality: "Oliveira",
      addressRegion: "MG",
      postalCode: "35540-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "41",
    },
    areaServed: [
      "Oliveira",
      "Campo Belo",
      "Carmópolis de Minas",
      "Santo Antônio do Amparo",
      "Passa Tempo",
      "São Francisco de Paula",
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
        opens: "12:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/5537999674308",
      "https://www.instagram.com/santosteixeiraadvogados/",
      "https://www.google.com/search?q=Santos+Teixeira+Advogados+Associados%0AOliveira+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=st1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=st1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=st1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=st1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=st1" />
        <link rel="shortcut icon" href="/favicon.ico?v=st1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=st1" />
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
