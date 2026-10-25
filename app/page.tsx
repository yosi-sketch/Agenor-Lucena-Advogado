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
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Lock,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5533991136870";
const PHONE_DISPLAY = "(33) 99113-6870";
const EMAIL_CONTACT = "contato@luanamoreira.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/luanamoreiraadv/";
const INSTAGRAM_HANDLE = "@luanamoreiraadv";
const LINKTREE_URL = "https://linktr.ee/draluanadvogada";

const ADDRESS_TEXT = "R. Gov. Valadares, 1429 - Maria Lúcia, Capelinha - MG, 39680-000";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Luana+Moreira+%E2%80%94+Advogada+Previdenci%C3%A1ria%0ACapelinha+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/logo-emblem.png";
const FOTO_HERO_SRC = "/hero.jpg";
const FOTO_ABOUT_SRC = "/about.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Luana Moreira! Gostaria de agendar uma consulta jurídica sobre o meu caso.";
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
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Aposentadorias (INSS)",
    category: "Previdenciário · Aposentadorias · BPC/LOAS · Auxílios · Revisões",
    icon: Award,
    tag: "Aposentadoria por Idade · Rural & Urbana · BPC/LOAS · Auxílio-Doença · INSS",
    summary:
      "Planejamento minucioso e atuação firme contra o INSS para desbloquear o benefício a que você tem direito, garantindo o melhor valor mensal e recebimento dos retroativos.",
    details:
      "A conquista do benefício do INSS representa a segurança financeira da sua vida e da sua família. A Dra. Luana Moreira é especialista dedicada com mais de 10 anos de experiência na área previdenciária. Atuamos desde a conferência minuciosa do CNIS e planejamento previdenciário preventivo até recursos administrativos e ações judiciais combativas contra indeferimentos indevidos.",
    topics: [
      "Planejamento Previdenciário Estratégico para conquistar a maior renda mensal permitida por lei",
      "Aposentadoria por Idade Urbana e Rural (reconhecimento de atividade rural e agricultura familiar em Capelinha e região)",
      "Aposentadoria por Tempo de Contribuição e aplicação das melhores regras de transição da Reforma",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos com 65+ anos e pessoas com deficiência de qualquer idade",
      "Auxílio por Incapacidade Temporária (auxílio-doença) e Aposentadoria por Incapacidade Permanente (invalidez)",
      "Pensão por morte, salário-maternidade, auxílio-reclusão e reversão de benefícios cessados indevidamente",
    ],
    whatsAppText:
      "Olá, Dra. Luana Moreira! Gostaria de uma análise detalhada sobre a minha aposentadoria ou benefício do INSS.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões",
    category: "Família · Inventários · Divórcio · Pensão · Guarda · Partilha",
    icon: HeartHandshake,
    tag: "Inventário em Cartório · Partilhas de Bens · Divórcio Consensual & Litigioso",
    summary:
      "Condução sensível, técnica e equilibrada para momentos decisivos da vida familiar, assegurando proteção aos filhos, acordos justos e tranquilidade patrimonial.",
    details:
      "Questões familiares demandam profundo acolhimento humano aliado a um rigor jurídico absoluto. Conduzimos inventários extrajudiciais em cartório de forma célere e econômica, inventários judiciais, divórcios com partilha equilibrada, fixação e execução de alimentos, resguardando sempre a dignidade e a paz da sua família.",
    topics: [
      "Inventários Extrajudiciais em cartório: transmissão rápida de herança e partilha com economia tributária",
      "Inventários judiciais, partilha litigiosa e alvarás para liberação célere de valores",
      "Divórcio consensual e litigioso com partilha justa e proteção do patrimônio construído",
      "Fixação, revisão, exoneração e cobrança/execução de pensão alimentícia atrasada",
      "Guarda compartilhada, regulamentação de visitas e convivência com foco no bem-estar dos filhos",
      "Reconhecimento e dissolução de união estável, contratos de convivência e pactos patrimoniais",
    ],
    whatsAppText:
      "Olá, Dra. Luana Moreira! Gostaria de conversar com sigilo sobre uma questão de Família / Inventário / Divórcio.",
  },
  {
    id: "direito-civel",
    title: "Direito Cível & Defesa Patrimonial",
    category: "Cível · Contratos · Indenizações · Cobranças · Consumidor",
    icon: Scale,
    tag: "Ações Indenizatórias · Contratos · Danos Morais & Materiais · Recuperação de Crédito",
    summary:
      "Atuação contenciosa e consultiva com alta precisão técnica para resguardar seus direitos civis, recuperar valores e solucionar conflitos com segurança jurídica.",
    details:
      "As relações civis e contratuais exigem rigor técnico e estratégia firme. Defendemos pessoas físicas e jurídicas em ações de indenização por perdas, danos morais e materiais, elaboração e revisão de contratos, recuperação de créditos e resolução de litígios perante a Justiça comum com combatividade.",
    topics: [
      "Ações indenizatórias por danos morais, materiais e prejuízos financeiros",
      "Elaboração, análise e rescisão segura de contratos civis e comerciais",
      "Cobrança judicial e extrajudicial de títulos de crédito, notas e dívidas",
      "Defesa dos direitos do consumidor contra abusos bancários, fraudes e negativações indevidas",
      "Conflitos imobiliários, locações, despejos e litígios de posse e propriedade",
      "Notificações extrajudiciais, medidas cautelares e acordos amigáveis para evitar litígios longos",
    ],
    whatsAppText:
      "Olá, Dra. Luana Moreira! Gostaria de consultar sobre uma questão de Direito Cível / Contratos / Indenização.",
  },
  {
    id: "consultoria-preventiva",
    title: "Consultoria Jurídica Preventiva & Resoluções Extrajudiciais",
    category: "Consultoria · Acordos · Prevenção de Litígios · Suporte Contínuo",
    icon: Shield,
    tag: "Mediação · Notificações Extrajudiciais · Pareceres · Atendimento com Sigilo",
    summary:
      "Orientação estratégica preventiva para antecipar problemas, blindar acordos e resolver impasses antes que se tornem processos custosos e demorados.",
    details:
      "Evitar o litígio costuma ser o caminho mais rápido, inteligente e econômico para proteger seus interesses. Oferecemos assessoria consultiva personalizada, emissão de pareceres jurídicos, condução de acordos extrajudiciais e assessoria jurídica contínua com máxima discrição e proximidade.",
    topics: [
      "Análise preventiva de riscos contratuais e patrimoniais antes de assinaturas importantes",
      "Mediação e negociação extrajudicial para celebração de acordos com validade de título executivo",
      "Envio e resposta a notificações extrajudiciais estratégicas",
      "Assessoria jurídica consultiva para empresas e profissionais de Capelinha e região",
      "Revisão de documentos e orientação para tomadas de decisão de alto impacto patrimonial",
      "Atendimento direto e descomplicado, com total clareza em cada orientação",
    ],
    whatsAppText:
      "Olá, Dra. Luana Moreira! Gostaria de solicitar uma consultoria jurídica preventiva para o meu caso.",
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
    name: "Marcelo de Freitas",
    badge: "Local Guide · 52 avaliações · 20 fotos · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Fará todo o possível para atender suas necessidades e chegar a uma boa solução",
    content:
      "Ótima profissional. Recomendo. Cada caso é único e sabemos como a justiça pode ser frustrante as vezes. Já conheço o trabalho dela e posso dizer que fará todo o possível para atender as suas necessidades e chegar a uma boa solução. Local de fácil acesso e não há problemas para estacionar por perto. Telefone acessível e trata os casos com boa discrição.",
  },
  {
    name: "Mayara Neres",
    badge: "2 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Sempre disponível para nos atender! Simplesmente a melhor!",
    content:
      "Excelente profissional, está sempre disponível para nos atender!! Simplesmente a melhor!",
  },
  {
    name: "Karine Carvalho",
    badge: "2 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Atenciosa e sempre prestativa com seus clientes",
    content:
      "Excelente profissional, atenciosa e sempre prestativa cm seus clientes.",
  },
  {
    name: "Edvaldo Sousa",
    badge: "Avaliação no Google · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "O carinho e esclarecimento sobre as dúvidas foi 100% proveitoso",
    content:
      "Maravilhosa o carinho e esclarecimento sobre as minhas dúvidas foi 100% a proveitoso.",
  },
  {
    name: "Francielle Martins",
    badge: "Avaliação no Google · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Atendimento de excelência! Ótima profissional!",
    content:
      "Atendimento de excelência! Ótima profissional!!!",
  },
  {
    name: "Agência Imperial BR",
    badge: "2 avaliações · 1 foto · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Com certeza é a melhor profissional que poderia atender nossa empresa!",
    content:
      "Com certeza é a melhor profissional que poderia atender nossa empresa!",
  },
  {
    name: "Cesar Paranhos",
    badge: "6 avaliações · 13 fotos · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Grande profissional, recomendadíssima. Muito competente no que faz",
    content:
      "Grande profissional, recomendadíssima. Muito competente no que faz.",
  },
  {
    name: "Vanilde Fernandes",
    badge: "3 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Atendimento atencioso e trabalho diligente. Recomendo!",
    content:
      "Atendimento atencioso e trabalho diligente. Ótima advogada! Recomendo.",
  },
  {
    name: "Andreia Cristina",
    badge: "Avaliação no Google · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Indico sempre a Dra. Luana Moreira, faz um ótimo trabalho!",
    content:
      "Indico sempre a Advogada Luana Moreira e uma excelente advogada ela faz um ótimo trabalho parabéns Doutora pelo seu trabalho e continue sempre assim Bjs",
  },
  {
    name: "Maria Aparecida",
    badge: "Local Guide · 47 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "ÓTIMA, HONESTA, INTELIGENTE e Competente",
    content:
      "OTIMA HONESTA INTELIGENTE Competente",
  },
  {
    name: "Cristiane Camargos",
    badge: "3 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Super recomendo, grande profissional!",
    content:
      "Super recomendo, grande profissional!",
  },
  {
    name: "Frederico Lopes Santos",
    badge: "7 avaliações · 1 foto · 5 Estrelas",
    date: "2 anos atrás",
    highlight: "Excelente advogada de alta confiança",
    content:
      "Excelente advogada",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "O INSS negou ou cessou meu benefício. Ainda é possível reverter?",
    answer:
      "Sim, absolutamente. É muito frequente que o INSS indefira pedidos de aposentadoria, auxílio-doença ou BPC por falhas na análise de documentos ou perícias superficiais. Analisamos detalhadamente a negativa e ingressamos com ação judicial fundamentada na Justiça Federal, onde a perícia é realizada por perito neutro e há possibilidade real de reverter a decisão e receber os retroativos devidos desde o dia do primeiro pedido.",
  },
  {
    question: "Moro em outra cidade ou estado. É possível ser atendido(a) online?",
    answer:
      "Sim! Embora tenhamos nossa sede física na Rua Gov. Valadares em Capelinha - MG, todo o nosso processo de atendimento pode ser realizado de forma 100% digital com total segurança e comodidade. Realizamos consultas por WhatsApp, envio seguro de documentos em PDF ou fotos, e audiências virtuais diretamente com a Dra. Luana Moreira.",
  },
  {
    question: "O que é o Planejamento Previdenciário e por que ele é tão vantajoso?",
    answer:
      "O Planejamento Previdenciário é um estudo minucioso de toda a sua vida contributiva (CNIS, carteiras de trabalho, carnês e períodos rurais). Ele calcula a melhor data para você se aposentar e simula os diferentes cenários após a Reforma da Previdência, evitando que você perca dinheiro pedindo o benefício na regra errada ou pague contribuições desnecessárias.",
  },
  {
    question: "Trabalhei na roça/agricultura familiar. Esse tempo conta para minha aposentadoria?",
    answer:
      "Sim! O tempo de trabalho na atividade rural em regime de economia familiar pode ser reconhecido tanto para aposentadoria rural pura quanto para a modalidade híbrida (tempo rural somado ao urbano). Ajudamos você a reunir e formalizar as provas documentais exigidas pela lei para garantir esse direito.",
  },
  {
    question: "Como funciona o inventário em cartório e quando ele pode ser feito?",
    answer:
      "O inventário extrajudicial (em cartório) pode ser realizado quando todos os herdeiros forem maiores, capazes e estiverem de comum acordo quanto à divisão dos bens, sem testamento pendente. É um procedimento consideravelmente mais rápido que o judicial, economizando tempo, desgaste emocional e custos.",
  },
  {
    question: "Como é feita a primeira consulta com a Dra. Luana Moreira?",
    answer:
      "O primeiro contato é realizado diretamente pelo nosso WhatsApp. Você relata a situação, analisamos a documentação necessária e agendamos a consulta (presencial em Capelinha ou online). Você terá uma conversa clara, transparente e acolhedora, com orientação objetiva sobre as reais possibilidades jurídicas do seu caso.",
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
          dark ? "text-white" : "text-[#171310]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-7 ${
            dark ? "text-[#d8cec3]" : "text-[#5c5044]"
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
      <main className="relative min-h-screen bg-[#0d0b0a] text-[#f2ece4]">
        {/* Top Notification Strip */}
        <div className="relative z-50 border-b border-[#d4af7a]/25 bg-[#14100d] px-4 py-2 text-xs text-[#d8cec3]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2 sm:px-6">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f5e5cb] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#d4af7a]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[#f5e5cb] font-semibold">
                Dra. Luana Moreira · Toda causa importa! ⚖️ Mais de 10 anos de compromisso em Capelinha - MG
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#e8ceaa]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#f5e5cb] text-[#d4af7a]" />
                <span className="font-bold text-white">5,0 ★</span> (31 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-[#d4af7a]/30 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de um atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#f5e5cb] sm:inline-flex"
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
              ? "border-b border-[#d4af7a]/30 bg-[#0d0b0a]/95 py-3 shadow-xl backdrop-blur-md"
              : "border-b border-[#d4af7a]/15 bg-[#0d0b0a]/80 py-4 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo Link */}
            <a
              href="#"
              className="group flex items-center gap-3 transition-opacity hover:opacity-95"
              aria-label="Luana Moreira Advocacia e Consultoria Jurídica - Início"
            >
              <div className="relative h-12 w-32 sm:h-14 sm:w-44 md:w-52">
                <Image
                  src={LOGO_SRC}
                  alt="Luana Moreira Advocacia e Consultoria Jurídica"
                  fill
                  sizes="(max-width: 768px) 180px, 240px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 lg:flex">
              <a href="#especialidades" className="nav-link-dark text-[11px]">
                Especialidades
              </a>
              <a href="#sobre" className="nav-link-dark text-[11px]">
                Sobre a Dra. Luana
              </a>
              <a href="#diferenciais" className="nav-link-dark text-[11px]">
                Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link-dark text-[11px]">
                Avaliações Google (5,0 ★)
              </a>
              <a href="#duvidas" className="nav-link-dark text-[11px]">
                Dúvidas
              </a>
              <a href="#contato" className="nav-link-dark text-[11px]">
                Sede & Contato
              </a>
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de consultar sobre meus direitos.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <WhatsAppIcon size={14} />
                <span>Atendimento WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-[#d4af7a]/30 bg-[#161311] text-[#f5e5cb] transition-colors hover:border-[#d4af7a] hover:text-white lg:hidden"
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
                className="border-b border-[#d4af7a]/30 bg-[#120f0d] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <a
                    href="#especialidades"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#d8cec3] uppercase transition-colors hover:text-[#f5e5cb]"
                  >
                    <span>Especialidades</span>
                    <ArrowRight size={14} className="text-[#d4af7a]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#d8cec3] uppercase transition-colors hover:text-[#f5e5cb]"
                  >
                    <span>Sobre a Dra. Luana Moreira</span>
                    <ArrowRight size={14} className="text-[#d4af7a]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#d8cec3] uppercase transition-colors hover:text-[#f5e5cb]"
                  >
                    <span>Diferenciais</span>
                    <ArrowRight size={14} className="text-[#d4af7a]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#d8cec3] uppercase transition-colors hover:text-[#f5e5cb]"
                  >
                    <span>Avaliações Google (5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#d4af7a]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#d8cec3] uppercase transition-colors hover:text-[#f5e5cb]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#d4af7a]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#d8cec3] uppercase transition-colors hover:text-[#f5e5cb]"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-[#d4af7a]" />
                  </a>

                  <div className="pt-4 border-t border-[#d4af7a]/20">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Luana Moreira! Gostaria de um atendimento.")}
                      target="_blank"
                      variant="gold"
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
        <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#0d0b0a]">
          {/* Subtle Ambient Gold Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-radial from-[#d4af7a]/14 via-[#8c673b]/6 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-96 w-96 rounded-full bg-[#b91c1c]/10 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af7a]/40 bg-[#161311] px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#f5e5cb] shadow-sm">
                    <span className="size-1.5 rounded-full bg-[#d4af7a]" />
                    Toda Causa Importa · Advocacia Previdenciária & Cível
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
                >
                  Garantindo seus direitos com{" "}
                  <span className="bg-gradient-to-r from-[#f5e5cb] via-[#d4af7a] to-[#e8ceaa] bg-clip-text text-transparent">
                    firmeza técnica
                  </span>
                  , humanidade e mais de 10 anos de experiência.
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-[#d8cec3] sm:text-lg"
                >
                  Conquiste sua aposentadoria ou benefício do INSS com quem realmente
                  domina a lei e luta por você. A <strong className="text-white font-semibold">Dra. Luana Moreira</strong> oferece
                  atuação combativa e transparente em Direito Previdenciário, Família e Cível,
                  com atendimento presencial acolhedor em <strong className="text-[#f5e5cb] font-semibold">Capelinha - MG</strong> e
                  digital com máxima discrição para todo o Brasil.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de consultar a viabilidade do meu benefício/aposentadoria.")}
                    target="_blank"
                    variant="gold"
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

              {/* Right Column: Hero Visual Frame (Dra. Luana Moreira at desk) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Metallic Border Box */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#d4af7a]/45 bg-[#161311] p-2 shadow-2xl shadow-black/80">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#1c1815]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Luana Moreira em seu escritório de advocacia"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a] via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Subtle Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-[#d4af7a]/30 bg-[#0d0b0a]/90 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-[#f5e5cb]">
                            Dra. Luana Moreira
                          </p>
                          <p className="text-[11px] text-[#d8cec3]">
                            Advogada Previdenciária & Consultora Jurídica
                          </p>
                        </div>
                        <span className="rounded-md border border-[#d4af7a]/40 bg-[#1e1916] px-2.5 py-1 text-[10px] font-bold text-[#f5e5cb]">
                          Capelinha · MG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 5.0 Rating) */}
                  <div className="absolute -top-5 -left-5 hidden rounded-xl border border-[#d4af7a]/50 bg-[#161311]/95 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#25201b] border border-[#d4af7a]/30">
                      <GoogleIcon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-[#f5e5cb] text-[#d4af7a]"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-white mt-0.5">
                        5,0 no Google · 31 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Toda causa importa) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-[#d4af7a]/50 bg-[#161311]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <Scale size={16} className="text-[#f5e5cb]" />
                    <span className="text-xs font-bold tracking-wide text-white">
                      Toda causa importa! ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN DOBRA 1 (DARK) */}
            <div className="mt-14 border-t border-[#d4af7a]/20 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-[#d4af7a]/25 bg-[#161311]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-[#f5e5cb]">
                    5,0 ★
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-[#a89b8f]">31 avaliações de clientes reais</p>
                </div>

                <div className="rounded-xl border border-[#d4af7a]/25 bg-[#161311]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-[#f5e5cb]">
                    +10 Anos
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Experiência Jurídica</p>
                  <p className="text-[11px] text-[#a89b8f]">Atuação firme e dedicada</p>
                </div>

                <div className="rounded-xl border border-[#d4af7a]/25 bg-[#161311]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-[#f5e5cb]">
                    100%
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Esclarecimento Total</p>
                  <p className="text-[11px] text-[#a89b8f]">Dúvidas explicadas com clareza</p>
                </div>

                <div className="rounded-xl border border-[#d4af7a]/25 bg-[#161311]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-[#f5e5cb]">
                    Capelinha
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Sede de Fácil Acesso</p>
                  <p className="text-[11px] text-[#a89b8f]">Rua Gov. Valadares c/ estacionamento</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: ESPECIALIDADES & ÁREAS DE ATUAÇÃO (LIGHT)      */}
        {/* ======================================================== */}
        <section id="especialidades" className="border-t border-[#e6ded1] bg-[#fbf9f6] text-[#171310] py-20 lg:py-28">
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
                href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de uma avaliação jurídica para o meu caso.")}
                target="_blank"
                variant="gold"
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
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#e4ded4] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af7a] hover:shadow-xl hover:shadow-[#d4af7a]/15"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-14 items-center justify-center rounded-xl border border-[#d4af7a]/35 bg-[#faf4ea] text-[#9e7543] transition-colors group-hover:border-[#d4af7a] group-hover:bg-[#d4af7a] group-hover:text-[#0d0b0a]">
                        <IconComponent size={26} />
                      </div>
                      <span className="rounded-full border border-[#d4af7a]/35 bg-[#faf4ea] px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-[#8c673b]">
                        {area.tag.split("·")[0].trim()}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-xl font-bold text-[#171310] transition-colors group-hover:text-[#9e7543]">
                      {area.title}
                    </h3>

                    <p className="mt-2 text-xs font-semibold text-[#9e7543]">
                      {area.category}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[#5c5044]">
                      {area.summary}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#e8e0d5] pt-4">
                      <span className="text-xs font-semibold text-[#8c673b] group-hover:underline">
                        Ver detalhes & situações atendidas
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-[#9e7543] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#d4af7a]/50 bg-[#14100d] p-6 shadow-2xl sm:p-8 text-[#f2ece4]"
              >
                <button
                  type="button"
                  onClick={() => setActiveArea(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-full border border-[#d4af7a]/30 bg-[#1c1815] text-[#d8cec3] transition-colors hover:border-[#f5e5cb] hover:text-white"
                  aria-label="Fechar modal de detalhes"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#d4af7a]">
                  <Scale size={15} />
                  <span>Área de Atuação Especializada</span>
                </div>

                <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {activeArea.title}
                </h3>
                <p className="mt-1 text-xs text-[#a89b8f]">
                  {activeArea.category}
                </p>

                <div className="mt-5 border-t border-[#d4af7a]/20 pt-4">
                  <p className="text-sm leading-relaxed text-[#d8cec3]">
                    {activeArea.details}
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#f5e5cb]">
                    Situações & Ações Frequentes
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {activeArea.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#d8cec3]">
                        <CheckCircle2 size={15} className="shrink-0 text-[#d4af7a] mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end border-t border-[#d4af7a]/20 pt-6">
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#a89b8f] transition-colors hover:text-white"
                  >
                    Voltar
                  </button>

                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    variant="gold"
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
        {/* DOBRA 3: SOBRE A DRA. LUANA MOREIRA (DARK)              */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-[#d4af7a]/20 bg-[#120f0d] py-20 lg:py-28 text-[#f2ece4]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Image: Studio Portrait of Dra. Luana Moreira */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="overflow-hidden rounded-2xl border-2 border-[#d4af7a]/45 bg-[#161311] p-2.5 shadow-2xl">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#1c1815]">
                      <Image
                        src={FOTO_ABOUT_SRC}
                        alt="Dra. Luana Moreira - Advogada Previdenciária"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -bottom-6 -right-4 rounded-xl border border-[#d4af7a]/50 bg-[#0d0b0a] p-4 shadow-xl">
                    <p className="font-serif text-3xl font-bold text-[#f5e5cb]">
                      +10 Anos
                    </p>
                    <p className="text-[11px] font-semibold text-[#a89b8f]">
                      De compromisso jurídico
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre a Advogada"
                  dark={true}
                  description="Uma trajetória pautada pela ética inabalável, técnica refinada e atendimento genuinamente humano."
                >
                  Toda Causa Importa: Advocacia que Cuida dos Seus Interesses
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#d8cec3]">
                  <p>
                    Com mais de uma década de dedicação exclusiva aos direitos dos seus clientes, a{" "}
                    <strong className="text-white font-semibold">Dra. Luana Moreira</strong> construiu uma reputação
                    sólida no Vale do Jequitinhonha e em Minas Gerais, destacando-se pelo domínio técnico aprofundado em{" "}
                    <strong className="text-[#f5e5cb] font-semibold">Direito Previdenciário (INSS)</strong>, além de sólida
                    atuação em matérias de Família e Direito Cível.
                  </p>
                  <p>
                    O manifesto do escritório é direto e verdadeiro:{" "}
                    <em className="text-[#f5e5cb] font-serif not-italic font-bold">
                      &ldquo;Toda causa importa!&rdquo;
                    </em>{" "}
                    Por trás de cada processo previdenciário ou familiar, existem anos de trabalho árduo, esforço e a
                    esperança de um futuro seguro. É por isso que cada caso é estudado de maneira única e personalizada,
                    sem fórmulas genéricas.
                  </p>
                  <p>
                    Como atestam os mais de 30 clientes satisfeitos com nota máxima no Google, o grande diferencial da Dra. Luana
                    está no acolhimento, na paciência para esclarecer cada dúvida em linguagem acessível e no tratamento com máxima discrição.
                  </p>
                </div>

                {/* 4 Highlights */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-[#d4af7a]/20 bg-[#161311] p-4">
                    <Shield size={20} className="text-[#d4af7a] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Transparência Radical
                      </h4>
                      <p className="mt-1 text-[11px] text-[#a89b8f]">
                        Análise realista da viabilidade jurídica, sem falsas promessas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#d4af7a]/20 bg-[#161311] p-4">
                    <Briefcase size={20} className="text-[#d4af7a] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Atendimento Direto
                      </h4>
                      <p className="mt-1 text-[11px] text-[#a89b8f]">
                        Você conversa e é orientado(a) diretamente pela própria advogada.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#d4af7a]/20 bg-[#161311] p-4">
                    <Lock size={20} className="text-[#d4af7a] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Sigilo & Discrição
                      </h4>
                      <p className="mt-1 text-[11px] text-[#a89b8f]">
                        Total reserva e proteção aos dados e informações do seu caso.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#d4af7a]/20 bg-[#161311] p-4">
                    <FileText size={20} className="text-[#d4af7a] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Acompanhamento Diligente
                      </h4>
                      <p className="mt-1 text-[11px] text-[#a89b8f]">
                        Informação constante sobre o andamento e cumprimento de prazos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de falar sobre o meu processo.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com a Dra. Luana</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#d8cec3] transition-colors hover:text-[#f5e5cb]"
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
        <section id="diferenciais" className="border-t border-[#e6ded1] bg-[#f5efe6] text-[#171310] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow justify-center mb-3">
                Por que Escolher Nosso Escritório
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#171310] sm:text-4xl">
                O Padrão de Atendimento Reconhecido com Nota Máxima
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#63574c]">
                Princípios que orientam cada consulta, parecer e ação jurídica defendida pela Dra. Luana Moreira.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#e2d9cd] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af7a] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#faf4ea] text-[#9e7543] border border-[#d4af7a]/30">
                  <Scale size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#171310]">
                  Especialização em INSS
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#63574c]">
                  Conhecimento profundo das regras da Reforma, jurisprudência recente e cálculos precisos para conquistar o melhor benefício.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2d9cd] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af7a] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#faf4ea] text-[#9e7543] border border-[#d4af7a]/30">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#171310]">
                  Escuta Atenta e Humana
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#63574c]">
                  Tratamos o seu caso como único. Você recebe esclarecimento 100% didático sobre cada dúvida jurídica.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2d9cd] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af7a] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#faf4ea] text-[#9e7543] border border-[#d4af7a]/30">
                  <BadgeCheck size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#171310]">
                  Sede com Fácil Acesso
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#63574c]">
                  Localização privilegiada na R. Gov. Valadares em Capelinha, com facilidade de estacionamento e conforto.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2d9cd] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af7a] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#faf4ea] text-[#9e7543] border border-[#d4af7a]/30">
                  <Lock size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#171310]">
                  Absoluta Discrição
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#63574c]">
                  Tratamento reservado e ético para assuntos sensíveis de previdência, partilhas de família e disputas patrimoniais.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de tirar algumas dúvidas sobre meu caso.")}
                target="_blank"
                variant="gold"
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
        <section id="depoimentos" className="border-t border-[#d4af7a]/25 bg-[#0d0b0a] py-20 lg:py-28 text-[#f2ece4]">
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
                        className="fill-[#f5e5cb] text-[#d4af7a]"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">5,0 de 5,0</span>
                  <span className="text-xs text-[#a89b8f]">
                    · 31 avaliações no Google Meu Negócio
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#d4af7a]/40 bg-[#161311] px-4 py-2.5 text-xs font-bold text-[#f5e5cb] transition-colors hover:border-[#f5e5cb] hover:bg-[#25201b]"
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
                  className="relative flex flex-col justify-between rounded-2xl border border-[#d4af7a]/25 bg-[#161311] p-6 shadow-md transition-all duration-300 hover:border-[#d4af7a] hover:bg-[#1d1815]"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#f5e5cb] text-[#d4af7a]"
                        />
                      ))}
                    </div>

                    {/* Highlight Quote */}
                    <p className="mt-3 font-serif text-sm font-bold text-[#f5e5cb] leading-snug">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    {/* Full Review Text */}
                    <p className="mt-3 text-xs leading-relaxed text-[#d8cec3]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#d4af7a]/15 pt-4">
                    <p className="font-serif text-xs font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#a89b8f]">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#d4af7a]/35 bg-[#161311] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-white sm:text-xl">
                Precisa de auxílio com a sua aposentadoria, pensão ou direito de família?
              </h3>
              <p className="mt-2 text-xs text-[#a89b8f] max-w-xl mx-auto">
                Não deixe para depois. Pequenos detalhes em datas ou documentos podem adiantar seu benefício e garantir valores retroativos significativos.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Luana! Li os depoimentos e gostaria de avaliar meu caso com você.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com a Dra. Luana Moreira Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO (LIGHT)             */}
        {/* ======================================================== */}
        <section className="border-t border-[#e6ded1] bg-[#f8f4ed] text-[#171310] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow justify-center mb-3">
                Processo Transparente
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#171310] sm:text-4xl">
                Como Funciona o Seu Atendimento
              </h2>
              <p className="mt-3 text-sm text-[#63574c]">
                Passo a passo simples, ágil e descomplicado desde o primeiro contato até a solução.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#e4ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af7a] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#9e7543]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#171310]">
                  Contato Inicial
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#63574c]">
                  Envie uma mensagem no WhatsApp relatando brevemente sua situação e tire dúvidas preliminares.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e4ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af7a] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#9e7543]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#171310]">
                  Análise Documental
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#63574c]">
                  Conferimos seu CNIS, carteira de trabalho, laudos médicos ou certidões para mapear todas as possibilidades.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e4ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af7a] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#9e7543]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#171310]">
                  Estratégia Jurídica
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#63574c]">
                  Apresentamos com clareza o caminho mais seguro e vantajoso (administrativo ou judicial) para o seu caso.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e4ded4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af7a] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#9e7543]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#171310]">
                  Acompanhamento Total
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#63574c]">
                  Atuação diligente em cada petição, perícia ou audiência, mantendo você informado(a) constantemente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ (DARK)                 */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-[#d4af7a]/25 bg-[#120f0d] py-20 lg:py-28 text-[#f2ece4]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow-dark mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-[#d8cec3]">
                Respostas diretas para as dúvidas mais comuns dos nossos clientes.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-[#d4af7a]/25 bg-[#161311] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-white transition-colors hover:text-[#f5e5cb]"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#d4af7a]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#d4af7a]" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-[#d4af7a]/15 px-5 pt-3 pb-5 text-xs leading-relaxed text-[#d8cec3]"
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
              <p className="text-xs text-[#a89b8f]">
                Sua dúvida não está listada acima?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de esclarecer uma dúvida que não vi no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#f5e5cb] hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Pergunte diretamente à Dra. Luana Moreira no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDE & CONTATO (LIGHT)            */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#e6ded1] bg-[#fbf9f6] text-[#171310] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info (LIGHT STYLING) */}
              <div className="lg:col-span-5">
                <span className="eyebrow mb-3.5">Sede & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#171310] sm:text-4xl">
                  Estamos Prontos para Ouvir Você
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5c5044]">
                  Venha tomar um café em nosso escritório em Capelinha ou faça sua consulta digital com todo o sigilo e segurança jurídica.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d4af7a]/35 bg-[#faf4ea] text-[#9e7543]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#171310] uppercase tracking-wider">
                        Endereço da Sede
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#5c5044]">
                        {ADDRESS_TEXT}
                      </p>
                      <p className="text-[11px] text-[#8c673b] font-medium mt-0.5">
                        Local de fácil acesso com facilidade para estacionar por perto.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d4af7a]/35 bg-[#faf4ea] text-[#9e7543]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#171310] uppercase tracking-wider">
                        Telefone & WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-[#5c5044]">
                        {PHONE_DISPLAY}
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de agendar uma consulta.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#9e7543] hover:underline"
                      >
                        Clique para enviar mensagem no WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d4af7a]/35 bg-[#faf4ea] text-[#9e7543]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#171310] uppercase tracking-wider">
                        Horário de Funcionamento
                      </p>
                      <p className="mt-1 text-xs text-[#5c5044]">
                        Segunda a Sexta: 09:00 às 18:00
                      </p>
                      <p className="text-[11px] text-[#8c673b]">
                        Atendimento presencial com agendamento prévio.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d4af7a]/35 bg-[#faf4ea] text-[#9e7543]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#171310] uppercase tracking-wider">
                        Redes Sociais & Conteúdo
                      </p>
                      <div className="mt-1 flex flex-col gap-1 text-xs">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5c5044] hover:text-[#9e7543]"
                        >
                          Instagram: <span className="font-bold">{INSTAGRAM_HANDLE}</span>
                        </a>
                        <a
                          href={LINKTREE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8c673b] hover:underline"
                        >
                          Links úteis: {LINKTREE_URL}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card (LIGHT STYLING) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#e4ded4] bg-white p-8 shadow-xl shadow-stone-200/50">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#9e7543]">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-[#171310] sm:text-3xl">
                    Inicie sua Consulta com a Dra. Luana Moreira
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5c5044]">
                    Selecione o assunto do seu caso para ser direcionado(a) com a mensagem adequada ao WhatsApp oficial do escritório:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de consultar sobre Aposentadoria / INSS.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e4ded4] bg-[#faf7f2] p-4 text-xs font-bold text-[#171310] transition-all hover:border-[#d4af7a] hover:bg-[#faf4ea]"
                    >
                      <span>Aposentadoria / INSS</span>
                      <ArrowRight size={14} className="text-[#9e7543]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de orientação sobre BPC / LOAS ou Auxílio.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e4ded4] bg-[#faf7f2] p-4 text-xs font-bold text-[#171310] transition-all hover:border-[#d4af7a] hover:bg-[#faf4ea]"
                    >
                      <span>BPC/LOAS ou Auxílio</span>
                      <ArrowRight size={14} className="text-[#9e7543]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de orientação sobre Inventário ou Divórcio.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e4ded4] bg-[#faf7f2] p-4 text-xs font-bold text-[#171310] transition-all hover:border-[#d4af7a] hover:bg-[#faf4ea]"
                    >
                      <span>Inventário & Família</span>
                      <ArrowRight size={14} className="text-[#9e7543]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Luana! Gostaria de orientação sobre Contratos ou Ação Cível.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e4ded4] bg-[#faf7f2] p-4 text-xs font-bold text-[#171310] transition-all hover:border-[#d4af7a] hover:bg-[#faf4ea]"
                    >
                      <span>Direito Cível & Contratos</span>
                      <ArrowRight size={14} className="text-[#9e7543]" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-[#e8e0d5] pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Luana Moreira! Gostaria de conversar com você sobre meus direitos.")}
                      target="_blank"
                      variant="gold"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com a Dra. Luana</span>
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
        <footer className="border-t border-[#d4af7a]/25 bg-[#0d0b0a] pt-16 pb-12 text-[#a89b8f]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative h-14 w-52">
                  <Image
                    src={LOGO_SRC}
                    alt="Luana Moreira Advocacia e Consultoria Jurídica"
                    fill
                    sizes="220px"
                    className="object-contain object-left"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#d8cec3] max-w-md">
                  ⚖️ Toda causa importa! Há mais de 10 anos comprometida com a defesa incansável dos direitos previdenciários, cíveis e familiares de nossos clientes. Atendimento presencial em Capelinha - MG e online para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#d4af7a]/30 bg-[#161311] text-[#f5e5cb] transition-colors hover:border-[#f5e5cb] hover:text-white"
                    aria-label="Instagram da Dra. Luana Moreira"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Luana Moreira!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#d4af7a]/30 bg-[#161311] text-[#f5e5cb] transition-colors hover:border-[#f5e5cb] hover:text-white"
                    aria-label="WhatsApp da Dra. Luana Moreira"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#d4af7a]/30 bg-[#161311] text-[#f5e5cb] transition-colors hover:border-[#f5e5cb] hover:text-white"
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
                      Sobre a Dra. Luana Moreira
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
                      Sede em Capelinha - MG
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
                  Este site tem finalidade estritamente institucional e informativa, em estrita observância ao Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não visa à captação de clientela nem substitui consulta jurídica formal.
                </p>
                <div className="mt-4 rounded-lg border border-[#d4af7a]/20 bg-[#161311] p-3 text-[11px] text-[#d8cec3]">
                  <p className="font-bold text-[#f5e5cb]">
                    Luana Moreira Advocacia e Consultoria Jurídica
                  </p>
                  <p className="mt-0.5 text-[#a89b8f]">
                    {ADDRESS_TEXT}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#d4af7a]/15 pt-8 text-center text-[11px] sm:flex-row sm:text-left">
              <p>
                © {new Date().getFullYear()} LUANA MOREIRA ADVOCACIA E CONSULTORIA JURÍDICA. Todos os direitos reservados.
              </p>
              <p className="text-[#8c8075]">
                Capelinha · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá, Dra. Luana Moreira! Gostaria de consultar sobre meus direitos.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Luana Moreira"
            className="group flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-black text-white shadow-xl shadow-black/60 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          >
            <WhatsAppIcon size={19} />
            <span className="hidden sm:inline tracking-wide font-bold">
              Falar com a Dra. Luana
            </span>
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
