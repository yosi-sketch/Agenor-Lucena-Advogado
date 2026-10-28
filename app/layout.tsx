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
  metadataBase: new URL("https://pradoramosadvocacia.com.br"),
  title:
    "Prado Ramos Advocacia | Soluções Jurídicas Personalizadas · Avaliação 5,0 ★ (234 avaliações)",
  description:
    "Prado Ramos Advocacia — Liderado pela Dra. Isadora Prado. Soluções jurídicas personalizadas com transparência, agilidade e segurança. Especialistas em Direito do Consumidor (Aéreo & Bancário), Indenizações, Cível e Trabalhista. Atendimento 100% online em todo o Brasil e presencial em Cláudio - MG. WhatsApp: (31) 99825-4289.",
  keywords: [
    "Prado Ramos Advocacia",
    "Dra Isadora Prado",
    "Advocacia Prado Ramos",
    "Prado e Ramos Advocacia",
    "Advogado em Cláudio MG",
    "Advocacia Cláudio MG",
    "Escritório de Advocacia Cláudio Minas Gerais",
    "Extravio de bagagem advogado indenização",
    "Atraso de voo indenização advogado",
    "Companhias aéreas processo danos morais",
    "Direito do Consumidor aéreo MG",
    "Fraudes bancárias e empréstimos indevidos",
    "Indenização por danos morais",
    "Advogado online Brasil seguro",
  ],
  authors: [{ name: "Prado Ramos Advocacia" }],
  creator: "Prado Ramos Advocacia",
  publisher: "Prado Ramos Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=pr1", sizes: "any" },
      { url: "/icon-32x32.png?v=pr1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=pr1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=pr1", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=pr1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=pr1",
    apple: [{ url: "/apple-icon.png?v=pr1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pradoramosadvocacia.com.br",
    title:
      "Prado Ramos Advocacia | Soluções Jurídicas Personalizadas · 5,0 ★ (234 avaliações)",
    description:
      "Soluções jurídicas personalizadas com agilidade, transparência e segurança. Atendimento 100% online em todo o Brasil e presencial em Cláudio - MG. Dra. Isadora Prado. WhatsApp: (31) 99825-4289.",
    siteName: "Prado Ramos Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Prado Ramos Advocacia — Soluções Jurídicas Personalizadas",
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
    name: "Prado Ramos Advocacia",
    alternateName: "Advocacia Prado Ramos",
    telephone: "+55-31-99825-4289",
    url: "https://pradoramosadvocacia.com.br",
    image: "https://pradoramosadvocacia.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Praça Levi Vioy de Freitas, 28, Sl 103 - Centro",
      addressLocality: "Cláudio",
      addressRegion: "MG",
      postalCode: "35530-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "234",
    },
    areaServed: [
      "Cláudio",
      "Divinópolis",
      "Itaúna",
      "Carmópolis de Minas",
      "Oliveira",
      "Nova Serrana",
      "Belo Horizonte",
      "Minas Gerais",
      "Mato Grosso",
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
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://wa.me/5531998254289",
      "https://www.instagram.com/pradoramosadvocacia/",
      "https://www.google.com/search?q=Prado+Ramos+Advocacia%0ACl%C3%A1udio+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=pr1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=pr1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=pr1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=pr1" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=pr1" />
        <link rel="shortcut icon" href="/favicon.ico?v=pr1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=pr1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#c59b4c] selection:text-[#040912] bg-[#fbfbf9] text-[#06101e]">
        {children}
      </body>
    </html>
  );
}
