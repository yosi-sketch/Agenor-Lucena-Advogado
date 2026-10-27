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
  themeColor: "#16060a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rhayssalima.adv.br"),
  title:
    "Dra. Rhayssa Lima de Souza Oliveira | Advogada · OAB/MG 247.321 · Raul Soares - MG",
  description:
    "Dra. Rhayssa Lima de Souza Oliveira — Advocacia de excelência, ágil, humana e resolutiva em Raul Soares - MG e online para todo o Brasil. Atuação especializada em Direito Criminal, Imobiliário & Regularização de Imóveis e Direito Cível. Nota máxima 5,0 ★ com 15 avaliações no Google.",
  keywords: [
    "Rhayssa Lima de Souza Oliveira Advogada",
    "Rhayssa Lima Advogada",
    "Dra Rhayssa Lima",
    "Advogada em Raul Soares MG",
    "Advocacia Raul Soares Minas Gerais",
    "OAB MG 247321",
    "Advogada Criminalista Raul Soares",
    "Direito Criminal Raul Soares",
    "Audiência de Custódia Raul Soares",
    "Regularização de Imóveis Raul Soares MG",
    "Usucapião Raul Soares",
    "Direito Imobiliário Raul Soares",
    "Direito Cível e Contratos Raul Soares",
    "Inventário em Cartório Raul Soares MG",
    "Advogada Zona da Mata e Vale do Rio Doce",
  ],
  authors: [{ name: "Dra. Rhayssa Lima de Souza Oliveira (OAB/MG 247.321)" }],
  creator: "Rhayssa Lima de Souza Oliveira - Advogada",
  publisher: "Rhayssa Lima de Souza Oliveira - Advogada",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=rl1", sizes: "any" },
      { url: "/icon-32x32.png?v=rl1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=rl1", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=rl1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=rl1",
    apple: [{ url: "/apple-icon.png?v=rl1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.rhayssalima.adv.br",
    title:
      "Dra. Rhayssa Lima de Souza Oliveira | Advogada · OAB/MG 247.321 · Raul Soares - MG",
    description:
      "Advocacia acolhedora, clara, ética e de alta resolutividade. Especialista em Direito Criminal, Imobiliário e Cível. Nota máxima 5,0 ★ no Google.",
    siteName: "Rhayssa Lima de Souza Oliveira - Advogada",
    images: [
      {
        url: "/rhayssa-lima-logo-v2.png",
        width: 980,
        height: 482,
        alt: "Rhayssa Lima de Souza Oliveira Advogada OAB/MG 247.321 - Logotipo Oficial",
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
    name: "Rhayssa Lima de Souza Oliveira - Advogada",
    alternateName: "Dra. Rhayssa Lima Advocacia",
    telephone: "+55-33-99806-7570",
    url: "https://www.rhayssalima.adv.br",
    image: "https://www.rhayssalima.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. João Farnez de Araújo, 370",
      addressLocality: "Raul Soares",
      addressRegion: "MG",
      postalCode: "35350-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "15",
    },
    areaServed: [
      "Raul Soares",
      "São Pedro dos Ferros",
      "Rio Casca",
      "Córrego Novo",
      "Pingo-d'Água",
      "Dionísio",
      "Caratinga",
      "Ponte Nova",
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
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://wa.me/5533998067570",
      "https://www.instagram.com/rhayssalimaadvogada/",
      "https://www.google.com/search?q=Rhayssa+Lima+de+Souza+Oliveira+%E2%80%94+Advogada%0ARaul+Soares+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=rl1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=rl1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=rl1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=rl1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#8a1b2c] selection:text-white bg-[#16060a] text-[#fcf8f6]">
        {children}
      </body>
    </html>
  );
}
