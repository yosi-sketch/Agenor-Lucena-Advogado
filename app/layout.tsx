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
  themeColor: "#051833",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://deboracupertinoadvocacia.com.br"),
  title:
    "Débora Cupertino Advocacia | Direito das Famílias & Previdenciário · 5,0 ★ (106 avaliações)",
  description:
    "Débora Cupertino Advocacia — Especialista em Direito das Famílias e Previdenciário. Atendimento humanizado e acolhedor em Divórcio, Guarda, Convivência, Pensão Alimentícia, Salário Maternidade, BPC/LOAS e Auxílios do INSS. Sede em Matozinhos - MG e atendimento 100% online para todo o Brasil. WhatsApp: (31) 99766-1362.",
  keywords: [
    "Débora Cupertino Advocacia",
    "Dra Débora Cupertino",
    "Advogada em Matozinhos MG",
    "Advocacia Matozinhos MG",
    "Direito das Famílias Matozinhos",
    "Advogado de Família Divórcio Guarda",
    "Divórcio consensual Matozinhos MG",
    "Pensão alimentícia advogado Matozinhos",
    "Guarda compartilhada e convivência familiar",
    "Direito Previdenciário Matozinhos MG",
    "Salário Maternidade advogada INSS",
    "BPC LOAS advogado autismo idoso",
    "Auxílio doença aposentadoria INSS Matozinhos",
    "Advocacia humanizada",
    "Advogada online família e previdenciário Brasil",
  ],
  authors: [{ name: "Débora Cupertino Advocacia" }],
  creator: "Débora Cupertino Advocacia",
  publisher: "Débora Cupertino Advocacia",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=dc2", sizes: "any" },
      { url: "/icon-32x32.png?v=dc2", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=dc2", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=dc2", type: "image/png", sizes: "48x48" },
      { url: "/icon.png?v=dc2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/icon-32x32.png?v=dc2",
    apple: [{ url: "/apple-icon.png?v=dc2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://deboracupertinoadvocacia.com.br",
    title:
      "Débora Cupertino Advocacia | Direito das Famílias & Previdenciário · 5,0 ★ (106 avaliações)",
    description:
      "Protegendo seus direitos, cuidando do que realmente importa: sua família e seu futuro. Especialista em Direito das Famílias e Previdenciário. Atendimento humanizado presencial em Matozinhos - MG e online para todo o Brasil. WhatsApp: (31) 99766-1362.",
    siteName: "Débora Cupertino Advocacia",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 356,
        alt: "Débora Cupertino Advocacia — Direito das Famílias e Previdenciário",
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
    name: "Débora Cupertino Advocacia",
    alternateName: "Débora Cupertino | Famílias e Previdenciário",
    telephone: "+55-31-99766-1362",
    url: "https://deboracupertinoadvocacia.com.br",
    image: "https://deboracupertinoadvocacia.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Claudomiro Cupertino, 55 A - Centro",
      addressLocality: "Matozinhos",
      addressRegion: "MG",
      postalCode: "35720-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "106",
    },
    areaServed: [
      "Matozinhos",
      "Sete Lagoas",
      "Pedro Leopoldo",
      "Capim Branco",
      "Prudente de Morais",
      "Vespasiano",
      "Confins",
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
        closes: "17:30",
      },
    ],
    sameAs: [
      "https://wa.me/5531997661362",
      "https://www.instagram.com/deboracupertinoadvocacia/",
      "https://www.google.com/search?q=D%C3%A9bora+Cupertino+Advocacia%0AMatozinhos+%C2%B7+MG&sourceid=chrome&ie=UTF-8#",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cinzelFont.variable} ${playfairFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* Favicon & Web App Icons with Cache Busting */}
        <link rel="icon" href="/favicon.ico?v=dc2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=dc2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=dc2" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png?v=dc2" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=dc2" />
        <link rel="shortcut icon" href="/favicon.ico?v=dc2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=dc2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-[#c89b3c] selection:text-[#020b18] bg-[#fcfbfa] text-[#061224]">
        {children}
      </body>
    </html>
  );
}
