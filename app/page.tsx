"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants, MotionConfig } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Scale,
  Award,
  Shield,
  HeartHandshake,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  X,
  Sparkles,
  Briefcase,
  FileText,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Lock,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531994818783";
const PHONE_DISPLAY = "(31) 99481-8783";
const EMAIL_CONTACT = "contato@moraisragone.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/rithianemoraisragone/";
const INSTAGRAM_HANDLE = "@rithianemoraisragone";

const ADDRESS_TEXT = "Av. Santos Dumont, 194 - Sl 4 - Centro, Nanuque - MG, 39860-000";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Morais+Ragone+Advocacia%0ANanuque+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/logo-emblem.png";
const FOTO_HERO_SRC = "/hero.jpg";
const FOTO_ABOUT_SRC = "/about.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Rithiane Morais Ragone! Gostaria de agendar uma consulta jurídica sobre o meu caso.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  category: string;
  icon: typeof Award;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-de-familia",
    title: "Direito de Família & Sucessões",
    category: "Divórcio · Guarda · Pensão Alimentícia · Inventário · Partilha de Bens",
    icon: HeartHandshake,
    tag: "Divórcio Consensual & Litigioso · Inventário em Cartório · Alimentos",
    summary:
      "Condução humanizada, técnica e resolutiva para proteger o seu patrimônio, garantir a segurança dos filhos e transformar impasses familiares em soluções justas e pacificadas.",
    details:
      "Questões familiares demandam acolhimento humano genuíno aliado a uma capacidade técnica e estratégica de alto nível. A Dra. Rithiane Morais Ragone atua na condução de divórcios consensuais e litigiosos, fixação e execução de pensão alimentícia, guarda compartilhada, regime de convivência e inventários extrajudiciais em cartório de forma célere, econômica e sem desgastes emocionais desnecessários.",
    topics: [
      "Inventários em Cartório (Extrajudiciais): transmissão rápida de herança com economia tributária e máxima celeridade",
      "Inventários Judiciais, partilhas litigiosas e proteção do patrimônio familiar construído ao longo da vida",
      "Divórcio Consensual e Litigioso com partilha estratégica de bens e prevenção de litígios futuros",
      "Pensão Alimentícia: fixação justa, revisão para aumento ou redução, exoneração e execução ágil de parcelas atrasadas",
      "Guarda de Filhos e Regulamentação de Convivência com prioridade absoluta para o melhor interesse da criança",
      "Reconhecimento e Dissolução de União Estável, contratos pré-nupciais e pactos patrimoniais de convivência",
    ],
    whatsAppText:
      "Olá, Dra. Rithiane! Gostaria de conversar com discrição sobre uma questão de Direito de Família / Divórcio / Inventário.",
  },
  {
    id: "contratos-negocios",
    title: "Contratos & Negócios Jurídicos",
    category: "Elaboração · Análise de Riscos · Rescisão Segura · Blindagem Patrimonial",
    icon: FileText,
    tag: "Contratos Civis & Comerciais · Compra e Venda · Locação · Rescisões",
    summary:
      "Segurança jurídica preventiva e contratual para blindar transações pessoais e patrimoniais, evitando prejuízos financeiros e cláusulas abusivas.",
    details:
      "Um contrato bem estruturado é a maior salvaguarda contra litígios caros e dores de cabeça futuras. A Morais Ragone Advocacia atua na elaboração e revisão minuciosa de contratos cíveis, imobiliários, comerciais e de prestação de serviços, assegurando cláusulas equilibradas, termos precisos e máxima força executiva perante a Justiça.",
    topics: [
      "Elaboração e revisão minuciosa de contratos imobiliários (compra e venda, promessa, locação comercial e residencial)",
      "Análise de riscos contratuais prévia a assinaturas de alto impacto patrimonial",
      "Rescisão contratual segura, cobrança e execução judicial e extrajudicial de cláusulas, dívidas e multas",
      "Contratos de prestação de serviços, parcerias comerciais e instrumentos negociais para empresas e profissionais",
      "Notificações extrajudiciais estratégicas para cumprimento forçado de obrigações ou distrato amigável",
      "Blindagem e segurança jurídica patrimonial na celebração de transações civis e mercantis",
    ],
    whatsAppText:
      "Olá, Dra. Rithiane! Gostaria de uma consultoria jurídica sobre elaboração ou revisão de contratos.",
  },
  {
    id: "direito-do-consumidor",
    title: "Direito do Consumidor & Defesa Patrimonial",
    category: "Negativação Indevida · Fraudes Bancárias · Danos Morais · Práticas Abusivas",
    icon: Scale,
    tag: "Limpeza de Nome SPC/Serasa · Danos Morais & Materiais · Abusos Bancários",
    summary:
      "Atuação enérgica e combativa contra instituições financeiras, operadoras e fornecedores que lesam seus direitos, buscando indenizações e reparação integral.",
    details:
      "As relações de consumo frequentemente colocam o consumidor em posição de desvantagem perante bancos e corporações. Defendemos você com combatividade dentro da lei contra negativações indevidas, fraudes bancárias, empréstimos consignados não autorizados, compras não entregues e cobranças abusivas, buscando a restauração imediata do seu crédito e a justa indenização moral e material.",
    topics: [
      "Ações contra negativação indevida no SPC/Serasa com pedido de liminar para exclusão imediata e indenização por dano moral",
      "Reparação por fraudes bancárias, clonagem de cartões, golpes do PIX e empréstimos consignados não solicitados",
      "Indenizações por danos morais e materiais decorrentes de falhas graves de prestação de serviços e descumprimento de prazos",
      "Revisão e cancelamento de cobranças abusivas, tarifas ilegais e juros extorsivos aplicados indevidamente",
      "Problemas com compras e serviços: atrasos na entrega, produtos defeituosos sem assistência técnica e recusa de garantia",
      "Defesa integral dos direitos do consumidor com fundamentação sólida no Código de Defesa do Consumidor",
    ],
    whatsAppText:
      "Olá, Dra. Rithiane! Gostaria de uma avaliação sobre uma questão de Direito do Consumidor / Negativação / Indenização.",
  },
  {
    id: "consultoria-estrategica",
    title: "Consultoria Estratégica & Resolução de Conflitos",
    category: "Prevenção de Litígios · Acordos Extrajudiciais · Notificações · Pareceres",
    icon: Shield,
    tag: "Mediação · Acordos com Eficácia Executiva · Atuação Preventiva · Sigilo",
    summary:
      "Orientação jurídica preventiva de excelência para pacificar conflitos, celebrar acordos seguros e evitar litígios judiciais longos e onerosos.",
    details:
      "A melhor vitória jurídica costuma ser aquela que soluciona o impasse antes que ele se transforme em um processo de anos na Justiça. Conduzimos mediações técnicas, negociações entre partes, elaboração de termos de acordo com eficácia executiva e orientações consultivas personalizadas, poupando seu tempo, recursos e desgaste emocional.",
    topics: [
      "Mediação e negociação extrajudicial para celebração de acordos seguros com validade de título executivo",
      "Emissão e resposta a notificações extrajudiciais estratégicas com fundamentação jurídica precisa",
      "Pareceres jurídicos para tomada de decisões patrimoniais, familiares ou empresariais de grande relevância",
      "Atuação consultiva preventiva para mitigar passivos e prevenir contingências judiciais",
      "Auditoria preventiva de riscos em documentações, escrituras, acordos e transações",
      "Atendimento humanizado, direto e descomplicado, com total clareza e transparência em cada etapa",
    ],
    whatsAppText:
      "Olá, Dra. Rithiane! Gostaria de solicitar uma consultoria jurídica estratégica preventiva para o meu caso.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  content: string;
  highlight: string;
}

const clientReviews: Review[] = [
  {
    name: "Francisco Araujo Junior",
    badge: "Local Guide · 17 avaliações · 4 fotos · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Profissional muito competente, muita dedicação e cumplicidade na parceria!",
    content:
      "A Dra Rithiane Morais me foi indicada por outros advogados. Profissional muito competente e a atuação de seu escritório mostrou-me até agora muita dedicação e cumplicidade na parceria ! Parabéns e super indico !",
  },
  {
    name: "Alice Assis",
    badge: "Avaliação no Google · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Notável capacidade técnica, competência ímpar e seriedade. Recomendo de olhos fechados!",
    content:
      "Tive uma experiência maravilhosa no escritório. A dra. Rithiane é uma profissional extremamente dedicada, com notável capacidade técnica e um nível de competência ímpar. Atua com seriedade, clareza e segurança, transmitindo total confiança ao cliente. Recomendo de olhos fechados!",
  },
  {
    name: "Júlia Vidal",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Ética, responsabilidade e muita competência. Atendimento impecável!",
    content:
      "A Dra Rithiane é uma excelente profissional, atua com ética, responsabilidade e muita competência. O atendimento é impecável, com atenção aos detalhes, clareza nas orientações e verdadeiro comprometimento. Recomendo sempre!",
  },
  {
    name: "Camila Lopes Sathler",
    badge: "5 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Competente e humana quando a gente mais precisa. Obrigada por tudo Dra. Rithiane!",
    content:
      "É tão bom contar com uma profissional competente e humana quando a gente mais precisa. Obrigada por tudo Dra. Rithiane.",
  },
  {
    name: "Ramon Camargo",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Uma das melhores advogadas na região! Gosta da verdade e vai pra briga dentro da lei!",
    content:
      "A Rithiane hoje é uma das melhores advogadas não só na cidade mas na região ! Elogiada por quem já foi cliente e por profissionais da própria área dela ! Uma advogada que gosta da verdade , e que vai pra briga dentro da lei !",
  },
  {
    name: "Vania Lamas",
    badge: "5 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Atendimento de excelência. Organização, dedicação, presteza e acolhimento!",
    content:
      "Atendimento de excelência. Competência, conhecimento, organização, dedicação, presteza, acolhimento. Encantada com os serviços prestados, principalmente na pessoa da Dra Rhitiane.",
  },
  {
    name: "Escritório Jucilene Fontoura Advocacia",
    badge: "4 avaliações · 1 foto · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Escritório referência! Qualidade, responsabilidade e respeito ao cliente.",
    content:
      "Escritório referência! Recomendo fortemente para quem busca um serviço jurídico de qualidade, com responsabilidade e respeito ao cliente.",
  },
  {
    name: "Melissa Bastos",
    badge: "11 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Advogada exemplar; muito esclarecedora e capacitada tecnicamente!",
    content:
      "Excelente profissional! Ambiente agradável e advogada exemplar; muito esclarecedora e capacitada tecnicamente!",
  },
  {
    name: "Edinilton Chaves",
    badge: "Avaliação no Google · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Seriedade e competência fundamentais para a resolução deste caso!",
    content:
      "Sua seriedade e competência foram fundamentais para a resolução deste caso . Que o Senhor continue iluminando os seus caminhos... Recomendo, uma ótima profissional . Muito obrigado , Dra Rithiane .",
  },
  {
    name: "Danilo Silva Oliveira",
    badge: "Avaliação no Google · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Humanismo, muita segurança, transparência, agilidade e comprometimento!",
    content:
      "Excelente. Humanismo ,Muita segurança,transparência, agilidade,atenção, comprometimento,dentre outros fatores.",
  },
  {
    name: "Elaine Barcelos de Assis",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Entendimento do caso, argumentação e atendimento de prazos com excelência!",
    content:
      "Excelente assessoria: dedicação, entendimento do caso, argumentação e atendimento de prazos! Tudo com excelência!",
  },
  {
    name: "Elis Leôncio",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Ética, acolhedora, investigativa, cumpre prazos e extremamente confiável!",
    content:
      "Ética, acolhedora, investigativa, cumpre prazos e extremamente confiável!",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona a primeira consulta com a Dra. Rithiane Morais Ragone?",
    answer:
      "O atendimento inicial começa através do nosso WhatsApp. Você nos relata o seu caso de forma segura e com total sigilo. Analisamos a situação jurídica e agendamos a consulta (presencial em nossa sede em Nanuque ou online por videoconferência para qualquer localidade do país). Durante a conversa, você recebe orientações claras, sem juridiquês, sobre a viabilidade e os próximos passos estratégicos.",
  },
  {
    question: "Moro em outra cidade ou estado. Posso ser atendido(a) de forma 100% online?",
    answer:
      "Sim, perfeitamente! Atendemos clientes de todo o Brasil e brasileiros no exterior. Todo o procedimento — desde a consulta inicial e envio seguro de documentos até a assinatura eletrônica e o protocolo das ações — é realizado digitalmente com total segurança jurídica, conforto e a mesma proximidade de uma reunião presencial.",
  },
  {
    question: "Quanto tempo demora um inventário em cartório e quais os requisitos?",
    answer:
      "O inventário extrajudicial (em cartório) é muito mais rápido e econômico do que a via judicial, podendo ser finalizado em poucas semanas. Os requisitos legais são: todos os herdeiros devem ser maiores e capazes, haver consenso sobre a divisão dos bens e a assistência obrigatória de um advogado. Cuidamos de todo o levantamento de certidões, tributos e minutas para assegurar celeridade e economia tributária.",
  },
  {
    question: "Como funciona a ação de divórcio e partilha de bens?",
    answer:
      "Se houver consenso entre o casal e não houver filhos menores ou incapazes, o divórcio pode ser homologado em cartório em curto prazo. Havendo filhos menores ou divergência quanto à partilha, conduzimos o procedimento judicial com firmeza e sensibilidade, resguardando os alimentos, o regime de convivência dos filhos e a justa divisão patrimonial.",
  },
  {
    question: "Tive meu nome negativado indevidamente ou caí em fraude bancária. O que fazer?",
    answer:
      "A negativação indevida nos órgãos de proteção ao crédito (SPC/Serasa) e fraudes bancárias (golpes do PIX, clonagem, empréstimos não contratados) geram direito a pedido de liminar para imediata exclusão da restrição, cancelamento da dívida e indenização por danos morais e materiais. Nossa atuação é célere e focada na reparação integral dos prejuízos sofridos.",
  },
  {
    question: "Por que investir em consultoria jurídica preventiva para contratos?",
    answer:
      "A consultoria preventiva evita que você assine instrumentos com cláusulas abusivas, penalidades ocultas ou falta de garantias que poderiam gerar litígios judiciais desgastantes de dezenas ou centenas de milhares de reais. Analisamos contratos imobiliários, locações comerciais e parcerias, blindando seus interesses patrimoniais antes de qualquer assinatura.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  dark = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className={dark ? "eyebrow-dark mb-3.5" : "eyebrow mb-3.5"}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl leading-[1.14] tracking-[-0.02em] font-bold sm:text-4xl lg:text-[2.65rem] ${
          dark ? "text-white" : "text-[#1a1412]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-7 ${
            dark ? "text-[#dacdc5]" : "text-[#6b5c53]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArea(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen bg-[#0c0a09] text-[#f7f3ee]">
        {/* Top Notification Strip */}
        <div className="relative z-50 border-b border-[#d99778]/25 bg-[#14100e] px-4 py-2 text-xs text-[#dacdc5]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2 sm:px-6">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#fce0d2] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#d99778]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#fce0d2] font-semibold">
                Morais Ragone Advocacia · Transformamos conflitos em soluções jurídicas claras e eficazes ⚖️ Nanuque - MG
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#f3c2a9]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#fce0d2] text-[#d99778]" />
                <span className="font-bold text-white">5,0 ★</span> (28 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-[#d99778]/30 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de um atendimento jurídico.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#fce0d2] sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-[#25D366]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Sticky Header / Navbar */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-[#d99778]/30 bg-[#0c0a09]/95 py-3 shadow-xl backdrop-blur-md"
              : "border-b border-[#d99778]/15 bg-[#0c0a09]/80 py-4 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo Link */}
            <a
              href="#"
              className="group flex shrink-0 items-center transition-opacity hover:opacity-95"
              aria-label="Morais Ragone Advocacia e Consultoria Jurídica - Início"
            >
              <div className="relative flex items-center py-1">
                <Image
                  src={LOGO_SRC}
                  alt="Morais Ragone Advocacia e Consultoria Jurídica"
                  width={240}
                  height={48}
                  className="h-9 sm:h-10 md:h-11 w-auto max-w-[200px] sm:max-w-[230px] md:max-w-[250px] object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-4 xl:gap-6 2xl:gap-7 lg:flex">
              <a href="#especialidades" className="nav-link-dark text-[11px] whitespace-nowrap">
                Especialidades
              </a>
              <a href="#sobre" className="nav-link-dark text-[11px] whitespace-nowrap">
                Sobre
              </a>
              <a href="#diferenciais" className="nav-link-dark text-[11px] whitespace-nowrap">
                Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link-dark text-[11px] whitespace-nowrap">
                Avaliações (5,0 ★)
              </a>
              <a href="#duvidas" className="nav-link-dark text-[11px] whitespace-nowrap">
                Dúvidas
              </a>
              <a href="#contato" className="nav-link-dark text-[11px] whitespace-nowrap">
                Contato
              </a>
            </nav>

            {/* Right Action */}
            <div className="flex shrink-0 items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de consultar sobre meus direitos.")}
                target="_blank"
                variant="rosegold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} />
                <span className="hidden xl:inline">Atendimento WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-[#d99778]/30 bg-[#171210] text-[#fce0d2] transition-colors hover:border-[#d99778] hover:text-white lg:hidden"
                aria-label="Abrir menu principal"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-[#d99778]/30 bg-[#14100e] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <a
                    href="#especialidades"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#dacdc5] uppercase transition-colors hover:text-[#fce0d2]"
                  >
                    <span>Especialidades</span>
                    <ArrowRight size={14} className="text-[#d99778]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#dacdc5] uppercase transition-colors hover:text-[#fce0d2]"
                  >
                    <span>Sobre a Dra. Rithiane</span>
                    <ArrowRight size={14} className="text-[#d99778]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#dacdc5] uppercase transition-colors hover:text-[#fce0d2]"
                  >
                    <span>Diferenciais</span>
                    <ArrowRight size={14} className="text-[#d99778]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#dacdc5] uppercase transition-colors hover:text-[#fce0d2]"
                  >
                    <span>Avaliações Google (5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#d99778]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#dacdc5] uppercase transition-colors hover:text-[#fce0d2]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#d99778]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#dacdc5] uppercase transition-colors hover:text-[#fce0d2]"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-[#d99778]" />
                  </a>

                  <div className="pt-4 border-t border-[#d99778]/20">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Rithiane Morais Ragone! Gostaria de um atendimento.")}
                      target="_blank"
                      variant="rosegold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION + FAIXA DE MÉTRICAS (DARK)        */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#0c0a09]">
          {/* Subtle Ambient Rose Gold & Bronze Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-radial from-[#d99778]/14 via-[#b36f52]/6 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-96 w-96 rounded-full bg-[#9f1d24]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Headline & Value Proposition */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="lg:col-span-7"
              >
                {/* Eyebrow Badge */}
                <motion.div variants={reveal} className="mb-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#d99778]/40 bg-[#171210] px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#fce0d2] shadow-sm">
                    <span className="size-1.5 rounded-full bg-[#d99778]" />
                    Morais Ragone Advocacia · Direito de Família · Contratos · Consumidor
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
                >
                  Transformamos Conflitos em{" "}
                  <span className="bg-gradient-to-r from-[#fce0d2] via-[#d99778] to-[#f3c2a9] bg-clip-text text-transparent">
                    Soluções Jurídicas Claras
                  </span>
                  , Seguras e Eficazes.
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-[#dacdc5] sm:text-lg"
                >
                  Advocacia de excelência com capacidade técnica ímpar, seriedade e dedicação. A{" "}
                  <strong className="text-white font-semibold">Dra. Rithiane Morais Ragone</strong> atua
                  com combatividade dentro da lei e zelo irrepreensível em Direito de Família, Contratos e Consumidor —
                  com atendimento acolhedor presencial em{" "}
                  <strong className="text-[#fce0d2] font-semibold">Nanuque - MG</strong> e online com máximo sigilo para todo o Brasil.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de consultar sobre o meu caso.")}
                    target="_blank"
                    variant="rosegold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Analisar Meu Caso no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#especialidades"
                    variant="dark"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conhecer Especialidades</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Visual Frame (Dra. Rithiane standing in white blazer) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Metallic Border Box */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#d99778]/45 bg-[#171210] p-2 shadow-2xl shadow-black/85">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#1d1714]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Rithiane Morais Ragone - Morais Ragone Advocacia"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-65" />
                    </div>

                    {/* Subtle Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-[#d99778]/30 bg-[#0c0a09]/90 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-[#fce0d2]">
                            Dra. Rithiane Morais Ragone
                          </p>
                          <p className="text-[11px] text-[#dacdc5]">
                            Advogada & Consultora Jurídica
                          </p>
                        </div>
                        <span className="rounded-md border border-[#d99778]/40 bg-[#261f1c] px-2.5 py-1 text-[10px] font-bold text-[#fce0d2]">
                          Nanuque · MG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 5.0 Rating) */}
                  <div className="absolute -top-5 -left-5 hidden rounded-xl border border-[#d99778]/50 bg-[#171210]/95 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#261f1c] border border-[#d99778]/30">
                      <GoogleIcon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-[#fce0d2] text-[#d99778]"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-white mt-0.5">
                        5,0 no Google · 28 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Soluções Claras) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-[#d99778]/50 bg-[#171210]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <Scale size={16} className="text-[#fce0d2]" />
                    <span className="text-xs font-bold tracking-wide text-white">
                      Soluções Jurídicas Claras ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN DOBRA 1 (DARK) */}
            <div className="mt-14 border-t border-[#d99778]/20 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-[#d99778]/25 bg-[#171210]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-[#fce0d2]">
                    5,0 ★
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-[#aa9a90]">28 avaliações de clientes reais</p>
                </div>

                <div className="rounded-xl border border-[#d99778]/25 bg-[#171210]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-[#fce0d2]">
                    Referência
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Nanuque & Região</p>
                  <p className="text-[11px] text-[#aa9a90]">Atuação reconhecida por pares e clientes</p>
                </div>

                <div className="rounded-xl border border-[#d99778]/25 bg-[#171210]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-[#fce0d2]">
                    100%
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Clareza & Ética</p>
                  <p className="text-[11px] text-[#aa9a90]">Orientações seguras e sem juridiquês</p>
                </div>

                <div className="rounded-xl border border-[#d99778]/25 bg-[#171210]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-[#fce0d2]">
                    Nanuque
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Sede no Centro</p>
                  <p className="text-[11px] text-[#aa9a90]">Av. Santos Dumont, 194 - Sl 4</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: ESPECIALIDADES & ÁREAS DE ATUAÇÃO (LIGHT)      */}
        {/* ======================================================== */}
        <section id="especialidades" className="border-t border-[#e8ded4] bg-[#fcf9f6] text-[#1a1412] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="Especialidades & Atuação"
                dark={false}
                description="Conheça nossas principais áreas de concentração jurídica. Clique em qualquer especialidade para ver detalhes, situações atendidas e consultar diretamente."
              >
                Defesa Rigorosa e Soluções Estratégicas para Seus Direitos
              </Heading>

              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de uma avaliação jurídica para o meu caso.")}
                target="_blank"
                variant="rosegold"
                size="md"
              >
                <WhatsAppIcon size={14} />
                <span>Consultar Meu Caso</span>
              </GlowingButton>
            </div>

            {/* Grid of Practice Cards (LIGHT STYLING) */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.id}
                    onClick={() => setActiveArea(area)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#e8ded4] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d99778] hover:shadow-xl hover:shadow-[#d99778]/15"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-14 items-center justify-center rounded-xl border border-[#d99778]/35 bg-[#fdf8f4] text-[#b36f52] transition-colors group-hover:border-[#d99778] group-hover:bg-[#d99778] group-hover:text-[#0c0a09]">
                        <IconComponent size={26} />
                      </div>
                      <span className="rounded-full border border-[#d99778]/35 bg-[#fdf8f4] px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-[#8e4f35]">
                        {area.tag.split("·")[0].trim()}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-xl font-bold text-[#1a1412] transition-colors group-hover:text-[#b36f52]">
                      {area.title}
                    </h3>

                    <p className="mt-2 text-xs font-semibold text-[#b36f52]">
                      {area.category}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[#6b5c53]">
                      {area.summary}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#f0e7dd] pt-4">
                      <span className="text-xs font-semibold text-[#8e4f35] group-hover:underline">
                        Ver detalhes & situações atendidas
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-[#b36f52] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MODAL INTERATIVO DE ESPECIALIDADES */}
        <AnimatePresence>
          {activeArea && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveArea(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#d99778]/50 bg-[#14100e] p-6 shadow-2xl sm:p-8 text-[#f7f3ee]"
              >
                <button
                  type="button"
                  onClick={() => setActiveArea(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-full border border-[#d99778]/30 bg-[#1d1714] text-[#dacdc5] transition-colors hover:border-[#fce0d2] hover:text-white"
                  aria-label="Fechar modal de detalhes"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#d99778]">
                  <Scale size={15} />
                  <span>Área de Atuação Especializada</span>
                </div>

                <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {activeArea.title}
                </h3>
                <p className="mt-1 text-xs text-[#aa9a90]">
                  {activeArea.category}
                </p>

                <div className="mt-5 border-t border-[#d99778]/20 pt-4">
                  <p className="text-sm leading-relaxed text-[#dacdc5]">
                    {activeArea.details}
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#fce0d2]">
                    Situações & Ações Frequentes
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {activeArea.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#dacdc5]">
                        <CheckCircle2 size={15} className="shrink-0 text-[#d99778] mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end border-t border-[#d99778]/20 pt-6">
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#aa9a90] transition-colors hover:text-white"
                  >
                    Voltar
                  </button>

                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    variant="rosegold"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Consultar no WhatsApp</span>
                  </GlowingButton>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* DOBRA 3: SOBRE A DRA. RITHIANE MORAIS RAGONE (DARK)     */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-[#d99778]/20 bg-[#120e0d] py-20 lg:py-28 text-[#f7f3ee]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Image: Dra. Rithiane seated in camel suit */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="overflow-hidden rounded-2xl border-2 border-[#d99778]/45 bg-[#171210] p-2.5 shadow-2xl">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#1d1714]">
                      <Image
                        src={FOTO_ABOUT_SRC}
                        alt="Dra. Rithiane Morais Ragone - Morais Ragone Advocacia"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -bottom-6 -right-4 rounded-xl border border-[#d99778]/50 bg-[#0c0a09] p-4 shadow-xl">
                    <p className="font-serif text-3xl font-bold text-[#fce0d2]">
                      Nota 5,0 ★
                    </p>
                    <p className="text-[11px] font-semibold text-[#aa9a90]">
                      Reconhecimento Máximo Google
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre a Advogada"
                  dark={true}
                  description="Uma trajetória pautada pela ética inabalável, rigor técnico e atendimento genuinamente humano."
                >
                  Compromisso, Verdade e Excelência Jurídica em Cada Causa
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#dacdc5]">
                  <p>
                    Fundadora da Morais Ragone Advocacia e Consultoria Jurídica, a{" "}
                    <strong className="text-white font-semibold">Dra. Rithiane Morais Ragone</strong> consolidou
                    seu nome como uma das principais referências da advocacia em Nanuque e no Leste de Minas Gerais,
                    sendo constantemente elogiada por clientes e por colegas da própria área jurídica por sua
                    competência técnica, presteza e postura ética irretocável.
                  </p>
                  <p>
                    Com atuação sólida e estratégica em{" "}
                    <strong className="text-[#fce0d2] font-semibold">Direito de Família, Contratos e Direito do Consumidor</strong>,
                    a Dra. Rithiane alia profundo conhecimento da lei a uma escuta empática e cuidadosa.
                    Seu posicionamento é transparente: transformar conflitos complexos em soluções claras, seguras e eficazes,
                    lutando pelos direitos de cada cliente com combatividade estrita dentro da lei.
                  </p>
                  <p>
                    O reconhecimento com <strong className="text-white font-semibold">nota 5,0 no Google com 28 avaliações</strong> comprova
                    a dedicação diária a cada processo, o cumprimento rigoroso de prazos e o acolhimento acolhedor que faz toda a diferença
                    nos momentos mais decisivos da vida dos nossos clientes.
                  </p>
                </div>

                {/* 4 Highlights */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-[#d99778]/20 bg-[#171210] p-4">
                    <Shield size={20} className="text-[#d99778] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Verdade & Ética
                      </h4>
                      <p className="mt-1 text-[11px] text-[#aa9a90]">
                        Análise realista da viabilidade jurídica, atuando com seriedade e retidão.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#d99778]/20 bg-[#171210] p-4">
                    <Briefcase size={20} className="text-[#d99778] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Atendimento Próximo & Direto
                      </h4>
                      <p className="mt-1 text-[11px] text-[#aa9a90]">
                        Você conversa e é orientado(a) diretamente pela própria advogada.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#d99778]/20 bg-[#171210] p-4">
                    <Lock size={20} className="text-[#d99778] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Sigilo & Discrição
                      </h4>
                      <p className="mt-1 text-[11px] text-[#aa9a90]">
                        Total reserva e proteção aos dados e informações do seu caso.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#d99778]/20 bg-[#171210] p-4">
                    <FileText size={20} className="text-[#d99778] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Cumprimento Rigoroso de Prazos
                      </h4>
                      <p className="mt-1 text-[11px] text-[#aa9a90]">
                        Acompanhamento investigativo, diligente e transparente em todas as fases.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de falar sobre o meu processo.")}
                    target="_blank"
                    variant="rosegold"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com a Dra. Rithiane</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#dacdc5] transition-colors hover:text-[#fce0d2]"
                  >
                    <InstagramIcon size={15} />
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 4: DIFERENCIAIS DO ESCRITÓRIO (LIGHT)             */}
        {/* ======================================================== */}
        <section id="diferenciais" className="border-t border-[#e8ded4] bg-[#f5efe8] text-[#1a1412] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow justify-center mb-3">
                Por que Escolher Morais Ragone Advocacia
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1a1412] sm:text-4xl">
                O Padrão de Atendimento Reconhecido com Nota Máxima 5,0 ★
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6b5c53]">
                Pilares que fundamentam cada consulta, orientação e defesa conduzida pela Dra. Rithiane Morais Ragone.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#e4ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d99778] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fdf8f4] text-[#b36f52] border border-[#d99778]/30">
                  <Scale size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1a1412]">
                  Soluções Claras & Eficazes
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6b5c53]">
                  Desmistificamos o juridiquês para entregar caminhos jurídicos diretos, objetivos e verdadeiramente resolutivos.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e4ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d99778] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fdf8f4] text-[#b36f52] border border-[#d99778]/30">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1a1412]">
                  Humanismo & Acolhimento
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6b5c53]">
                  Tratamos cada cliente com empatia genuína e respeito aos detalhes, oferecendo serenidade nos momentos difíceis.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e4ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d99778] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fdf8f4] text-[#b36f52] border border-[#d99778]/30">
                  <BadgeCheck size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1a1412]">
                  Pontualidade & Prazos
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6b5c53]">
                  Rigor absoluto com prazos judiciais e administrativos, com acompanhamento investigativo constante de cada ato processual.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e4ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d99778] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fdf8f4] text-[#b36f52] border border-[#d99778]/30">
                  <Lock size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1a1412]">
                  Sigilo & Segurança
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6b5c53]">
                  Tratamento confidencial e resguardado para questões sensíveis de família, patrimônio e litígios contratuais.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de tirar algumas dúvidas sobre meu caso.")}
                target="_blank"
                variant="rosegold"
                size="md"
              >
                <WhatsAppIcon size={15} />
                <span>Iniciar Atendimento Personalizado</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 5: AVALIAÇÕES GOOGLE MEU NEGÓCIO 5,0 ★ (DARK)      */}
        {/* ======================================================== */}
        <section id="depoimentos" className="border-t border-[#d99778]/25 bg-[#0c0a09] py-20 lg:py-28 text-[#f7f3ee]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="eyebrow-dark mb-3.5">
                  Avaliações Verificadas no Google
                </span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  A Palavra de Quem Confia em Nosso Trabalho
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#fce0d2] text-[#d99778]"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">5,0 de 5,0</span>
                  <span className="text-xs text-[#aa9a90]">
                    · 28 avaliações no Google Meu Negócio
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#d99778]/40 bg-[#171210] px-4 py-2.5 text-xs font-bold text-[#fce0d2] transition-colors hover:border-[#fce0d2] hover:bg-[#261f1c]"
              >
                <GoogleIcon size={14} />
                <span>Ver no Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Reviews Grid (DARK STYLING) */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between rounded-2xl border border-[#d99778]/25 bg-[#171210] p-6 shadow-md transition-all duration-300 hover:border-[#d99778] hover:bg-[#1f1815]"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#fce0d2] text-[#d99778]"
                        />
                      ))}
                    </div>

                    {/* Highlight Quote */}
                    <p className="mt-3 font-serif text-sm font-bold text-[#fce0d2] leading-snug">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    {/* Full Review Text */}
                    <p className="mt-3 text-xs leading-relaxed text-[#dacdc5]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#d99778]/15 pt-4">
                    <p className="font-serif text-xs font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#aa9a90]">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#d99778]/35 bg-[#171210] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-white sm:text-xl">
                Precisa de orientação jurídica segura em Família, Contratos ou Consumidor?
              </h3>
              <p className="mt-2 text-xs text-[#aa9a90] max-w-xl mx-auto">
                Não enfrente conflitos sem o respaldo de quem entende a fundo a lei e se dedica com combatividade e humanismo pela sua causa.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Rithiane! Li as avaliações no site e gostaria de avaliar meu caso com você.")}
                  target="_blank"
                  variant="rosegold"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com a Dra. Rithiane Morais Ragone Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO (LIGHT)             */}
        {/* ======================================================== */}
        <section className="border-t border-[#e8ded4] bg-[#fbf9f6] text-[#1a1412] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow justify-center mb-3">
                Processo Transparente
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1a1412] sm:text-4xl">
                Como Funciona o Seu Atendimento
              </h2>
              <p className="mt-3 text-sm text-[#6b5c53]">
                Passo a passo simples, ágil e descomplicado desde o primeiro contato até a solução eficaz.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#e8ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d99778] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#b36f52]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1a1412]">
                  Contato Inicial
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6b5c53]">
                  Envie uma mensagem no WhatsApp relatando brevemente sua situação e esclareça dúvidas preliminares.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d99778] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#b36f52]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1a1412]">
                  Análise Documental
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6b5c53]">
                  Analisamos contratos, certidões, notificações ou extratos para mapear todas as possibilidades legais.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d99778] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#b36f52]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1a1412]">
                  Estratégia Jurídica
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6b5c53]">
                  Apresentamos com clareza o caminho mais seguro e vantajoso (extrajudicial ou judicial) para o seu caso.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d99778] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#b36f52]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1a1412]">
                  Acompanhamento Total
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6b5c53]">
                  Atuação diligente em cada petição, negociação ou audiência, mantendo você informado(a) constantemente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ (DARK)                 */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-[#d99778]/25 bg-[#120e0d] py-20 lg:py-28 text-[#f7f3ee]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow-dark mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-[#dacdc5]">
                Respostas diretas para as dúvidas mais comuns dos nossos clientes.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-[#d99778]/25 bg-[#171210] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-white transition-colors hover:text-[#fce0d2]"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#d99778]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#d99778]" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-[#d99778]/15 px-5 pt-3 pb-5 text-xs leading-relaxed text-[#dacdc5]"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs text-[#aa9a90]">
                Sua dúvida não está listada acima?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de esclarecer uma dúvida que não vi no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#fce0d2] hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Pergunte diretamente à Dra. Rithiane Morais Ragone no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDE & CONTATO (LIGHT)            */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#e8ded4] bg-[#fcf9f6] text-[#1a1412] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info (LIGHT STYLING) */}
              <div className="lg:col-span-5">
                <span className="eyebrow mb-3.5">Sede & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1a1412] sm:text-4xl">
                  Estamos Prontos para Ouvir Você
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#6b5c53]">
                  Venha nos visitar em nosso escritório no centro de Nanuque ou agende sua consulta digital com todo o sigilo e segurança jurídica.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d99778]/35 bg-[#fdf8f4] text-[#b36f52]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1a1412] uppercase tracking-wider">
                        Endereço da Sede
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#6b5c53]">
                        {ADDRESS_TEXT}
                      </p>
                      <p className="text-[11px] text-[#8e4f35] font-medium mt-0.5">
                        Centro de Nanuque - MG · Atendimento com agendamento prévio.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d99778]/35 bg-[#fdf8f4] text-[#b36f52]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1a1412] uppercase tracking-wider">
                        Telefone & WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-[#6b5c53]">
                        {PHONE_DISPLAY}
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de agendar uma consulta.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#b36f52] hover:underline"
                      >
                        Clique para enviar mensagem no WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d99778]/35 bg-[#fdf8f4] text-[#b36f52]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1a1412] uppercase tracking-wider">
                        Horário de Funcionamento
                      </p>
                      <p className="mt-1 text-xs text-[#6b5c53]">
                        Segunda a Sexta: 09:00 às 18:00
                      </p>
                      <p className="text-[11px] text-[#8e4f35]">
                        Atendimento presencial e online em todo o Brasil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d99778]/35 bg-[#fdf8f4] text-[#b36f52]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1a1412] uppercase tracking-wider">
                        Redes Sociais & Perfil
                      </p>
                      <div className="mt-1 flex flex-col gap-1 text-xs">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6b5c53] hover:text-[#b36f52]"
                        >
                          Instagram: <span className="font-bold">{INSTAGRAM_HANDLE}</span>
                        </a>
                        <a
                          href={GOOGLE_SEARCH_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8e4f35] hover:underline"
                        >
                          Perfil Google: Morais Ragone Advocacia (5,0 ★)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card (LIGHT STYLING) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#e8ded4] bg-white p-8 shadow-xl shadow-stone-200/50">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#b36f52]">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-[#1a1412] sm:text-3xl">
                    Inicie sua Consulta com a Dra. Rithiane Morais Ragone
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6b5c53]">
                    Selecione o assunto do seu caso para ser direcionado(a) com a mensagem adequada ao WhatsApp oficial do escritório:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de consultar sobre Direito de Família / Divórcio / Pensão.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8ded4] bg-[#fcf9f6] p-4 text-xs font-bold text-[#1a1412] transition-all hover:border-[#d99778] hover:bg-[#fdf8f4]"
                    >
                      <span>Direito de Família & Divórcio</span>
                      <ArrowRight size={14} className="text-[#b36f52]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de orientação sobre Inventário & Partilha de Bens.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8ded4] bg-[#fcf9f6] p-4 text-xs font-bold text-[#1a1412] transition-all hover:border-[#d99778] hover:bg-[#fdf8f4]"
                    >
                      <span>Inventário & Herança</span>
                      <ArrowRight size={14} className="text-[#b36f52]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de orientação sobre Contratos & Negócios Jurídicos.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8ded4] bg-[#fcf9f6] p-4 text-xs font-bold text-[#1a1412] transition-all hover:border-[#d99778] hover:bg-[#fdf8f4]"
                    >
                      <span>Contratos & Negócios</span>
                      <ArrowRight size={14} className="text-[#b36f52]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Rithiane! Gostaria de orientação sobre Direito do Consumidor / Negativação / Indenização.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8ded4] bg-[#fcf9f6] p-4 text-xs font-bold text-[#1a1412] transition-all hover:border-[#d99778] hover:bg-[#fdf8f4]"
                    >
                      <span>Direito do Consumidor</span>
                      <ArrowRight size={14} className="text-[#b36f52]" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-[#f0e7dd] pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Rithiane Morais Ragone! Gostaria de conversar com você sobre meus direitos.")}
                      target="_blank"
                      variant="rosegold"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com a Dra. Rithiane</span>
                    </GlowingButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: FOOTER INSTITUCIONAL (DARK)                    */}
        {/* ======================================================== */}
        <footer className="border-t border-[#d99778]/25 bg-[#0c0a09] pt-16 pb-12 text-[#aa9a90]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Morais Ragone Advocacia e Consultoria Jurídica"
                    width={260}
                    height={52}
                    className="h-10 sm:h-12 w-auto max-w-[240px] sm:max-w-[270px] object-contain object-left"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#dacdc5] max-w-md">
                  ⚖️ Morais Ragone Advocacia e Consultoria Jurídica. Transformamos conflitos em soluções jurídicas claras, seguras e eficazes. Atendimento humanizado e resolutivo presencial em Nanuque - MG e online para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#d99778]/30 bg-[#171210] text-[#fce0d2] transition-colors hover:border-[#fce0d2] hover:text-white"
                    aria-label="Instagram da Dra. Rithiane Morais Ragone"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Rithiane Morais Ragone!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#d99778]/30 bg-[#171210] text-[#fce0d2] transition-colors hover:border-[#fce0d2] hover:text-white"
                    aria-label="WhatsApp da Dra. Rithiane Morais Ragone"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#d99778]/30 bg-[#171210] text-[#fce0d2] transition-colors hover:border-[#fce0d2] hover:text-white"
                    aria-label="Avaliações do Google"
                  >
                    <GoogleIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Links Column */}
              <div className="lg:col-span-3">
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                  Navegação
                </p>
                <ul className="mt-4 space-y-2.5 text-xs">
                  <li>
                    <a href="#especialidades" className="footer-link">
                      Especialidades Jurídicas
                    </a>
                  </li>
                  <li>
                    <a href="#sobre" className="footer-link">
                      Sobre a Dra. Rithiane
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="footer-link">
                      Diferenciais do Escritório
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="footer-link">
                      Avaliações Google (5,0 ★)
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="footer-link">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="footer-link">
                      Sede em Nanuque - MG
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & OAB Column */}
              <div className="lg:col-span-4">
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                  Informações Institucionais & OAB
                </p>
                <p className="mt-4 text-[11px] leading-relaxed text-[#8c8075]">
                  Este site tem finalidade estritamente institucional e informativa, em estrita observância ao Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não visa à captação indevida de clientela nem substitui consulta jurídica formal.
                </p>
                <div className="mt-4 rounded-lg border border-[#d99778]/20 bg-[#171210] p-3 text-[11px] text-[#dacdc5]">
                  <p className="font-bold text-[#fce0d2]">
                    Morais Ragone Advocacia e Consultoria Jurídica
                  </p>
                  <p className="mt-0.5 text-[#aa9a90]">
                    {ADDRESS_TEXT}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#d99778]/15 pt-8 text-center text-[11px] sm:flex-row sm:text-left">
              <p>
                © {new Date().getFullYear()} MORAIS RAGONE ADVOCACIA E CONSULTORIA JURÍDICA. Todos os direitos reservados.
              </p>
              <p className="text-[#8c8075]">
                Nanuque · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá, Dra. Rithiane Morais Ragone! Gostaria de consultar sobre meus direitos.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Rithiane Morais Ragone"
            className="group flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-black text-white shadow-xl shadow-black/60 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          >
            <WhatsAppIcon size={19} />
            <span className="hidden sm:inline tracking-wide font-bold">
              Falar com a Dra. Rithiane
            </span>
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
