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
  themeColor: "#0d040a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yanrezende.adv.br"),
  title:
    "Yan Rezende Advocacia e Consultoria Jurídica | Caxambu - MG · Cível, Consumidor, Previdenciário & Trabalhista",
  description:
    "Yan Rezende — Advocacia e Consultoria Jurídica em Caxambu - MG. Atendimento especializado em Direito Cível, Consumidor, Previdenciário (INSS), Trabalhista e Assessoria Empresarial. Nota Máxima 5,0 ★ com 24 avaliações no Google. Atendimento presencial no Sul de Minas e online para todo o Brasil.",
  keywords: [
    "Yan Rezende Advocacia",
    "Yan Rezende Advogado",
    "Advogado em Caxambu MG",
    "Advocacia Caxambu Minas Gerais",
    "Direito do Consumidor Caxambu",
    "Advogado Trabalhista Caxambu MG",
    "Direito Previdenciário INSS Caxambu",
    "Direito Cível Caxambu MG",
    "Consultoria Jurídica Caxambu",
    "Galeria Pan América Caxambu",
    "Advogado Sul de Minas",
    "Direito na Escola Caxambu",
    "Yan Rezende OAB MG",
  ],
  authors: [{ name: "Yan Rezende — Advocacia e Consultoria Jurídica" }],
  creator: "Yan Rezende — Advocacia e Consultoria Jurídica",
  publisher: "Yan Rezende — Advocacia e Consultoria Jurídica",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=yr2", sizes: "any" },
      { url: "/icon-32x32.png?v=yr2", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=yr2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=yr2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=yr2",
    apple: [{ url: "/apple-icon.png?v=yr2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.yanrezende.adv.br",
    title:
      "Yan Rezende — Advocacia e Consultoria Jurídica | Caxambu - MG",
    description:
      "Advocacia estratégica, humana e de alta resolutividade. Especialista em Direito Cível, Consumidor, Previdenciário, Trabalhista e Empresarial. Nota Máxima 5,0 ★ no Google.",
    siteName: "Yan Rezende — Advocacia e Consultoria Jurídica",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "Yan Rezende Advocacia e Consultoria Jurídica - Logotipo Oficial",
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
    name: "Yan Rezende — Advocacia e Consultoria Jurídica",
    alternateName: "Yan Rezende Advogado",
    telephone: "+55-35-99809-8019",
    url: "https://www.yanrezende.adv.br",
    image: "https://www.yanrezende.adv.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Galeria Pan América - R. Conselheiro Mayrink, n° 217 - Sala 6 - Centro",
      addressLocality: "Caxambu",
      addressRegion: "MG",
      postalCode: "37440-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "24",
    },
    areaServed: [
      "Caxambu",
      "Baependi",
      "Cruzília",
      "São Lourenço",
      "Pouso Alto",
      "Itamonte",
      "Passa Quatro",
      "Sul de Minas",
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
      "https://wa.me/5535998098019",
      "https://www.instagram.com/yanrezende.adv/",
      "https://linktr.ee/yanrezende.adv",
      "https://www.google.com/search?q=Yan+Rezende+%E2%80%94+Advocacia+e+Consultoria+Jur%C3%ADdica%0ACaxambu+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=yr2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=yr2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=yr2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=yr2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#9f526c] selection:text-white">
        {children}
      </body>
    </html>
  );
}
