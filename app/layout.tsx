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
  themeColor: "#07090e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fabriciafragoso.adv.br"),
  title:
    "Fabrícia Fragoso Advocacia — Dra. Fabrícia Fragoso | Resplendor - MG · Direito Imobiliário & Regularização de Imóveis",
  description:
    "Dra. Fabrícia Fragoso — Alves e Fragoso Advogados Associados em Resplendor - MG. Especialistas em Regularização de Imóveis, Usucapião, Cartório, Prefeitura, Receita Federal e Contratos Imobiliários. Nota Máxima 5,0 ★ com 25 avaliações no Google. Atendimento presencial e online em todo o Brasil.",
  keywords: [
    "Fabrícia Fragoso Advocacia",
    "Alves e Fragoso Advogados Associados",
    "Dra Fabrícia Fragoso",
    "Advogada em Resplendor MG",
    "Advogado Imobiliário Resplendor",
    "Regularização de Imóveis Resplendor MG",
    "Usucapião em Cartório Resplendor",
    "Escritura de Imóvel Resplendor",
    "Direito Imobiliário Minas Gerais",
    "Advocacia Imobiliária Vale do Rio Doce",
    "Cartório Prefeitura Receita Federal Imóveis",
    "Inventário de Imóveis MG",
    "Advogada Minas Gerais",
  ],
  authors: [{ name: "Alves e Fragoso Advogados Associados" }],
  creator: "Alves e Fragoso Advogados Associados",
  publisher: "Alves e Fragoso Advogados Associados",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=af1", sizes: "any" },
      { url: "/icon-32x32.png?v=af1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=af1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=af1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=af1",
    apple: [{ url: "/apple-icon.png?v=af1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.fabriciafragoso.adv.br",
    title:
      "Fabrícia Fragoso Advocacia — Alves e Fragoso Advogados Associados | Resplendor - MG",
    description:
      "Especialistas em Direito Imobiliário e Regularização de Imóveis. Proteja seu patrimônio com escritura definitiva perante Cartórios, Prefeitura e Receita Federal. Nota Máxima 5,0 ★ no Google.",
    siteName: "Alves e Fragoso Advogados Associados",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 512,
        alt: "Alves e Fragoso Advogados Associados - Logotipo Oficial",
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
    name: "Fabrícia Fragoso Advocacia Especializada em Direito Imobiliário",
    alternateName: "Alves e Fragoso Advogados Associados",
    telephone: "+55-33-99827-7799",
    url: "https://www.fabriciafragoso.adv.br",
    image: "https://www.fabriciafragoso.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Galeria Ebal Franco - R. Morais de Carvalho, 653 - Sl 03 - Centro",
      addressLocality: "Resplendor",
      addressRegion: "MG",
      postalCode: "35230-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "25",
    },
    areaServed: [
      "Resplendor",
      "Aimorés",
      "Conselheiro Pena",
      "Itueta",
      "Governador Valadares",
      "Baixo Guandu",
      "Colatina",
      "Vale do Rio Doce",
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
      "https://wa.me/5533998277799",
      "https://www.instagram.com/fabriciafragoso/",
      "https://www.google.com/search?q=Fabr%C3%ADcia+Fragoso+Advocacia%0AResplendor+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${playfairFont.variable} ${cinzelFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=af1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=af1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=af1" />
        <link rel="shortcut icon" href="/icon-32x32.png?v=af1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=af1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen overflow-x-clip bg-[#07090e] font-sans text-[#f8fafc] antialiased selection:bg-[#cbd5e1] selection:text-[#07090e]"
      >
        {children}
      </body>
    </html>
  );
}
