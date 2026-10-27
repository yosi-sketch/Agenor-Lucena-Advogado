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
  Building2,
  Users,
  Heart,
  Landmark,
  Compass,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5532984956780";
const PHONE_DISPLAY = "(32) 98495-6780";
const PHONE_LANDLINE = "(32) 3552-0939";
const EMAIL_CONTACT = "contato@mairagomesadvocacia.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/dramairagomes_/";
const INSTAGRAM_HANDLE = "@dramairagomes_";

const ADDRESS_TEXT =
  "R. Pedro Dias Neto, 03 - Centro, Espera Feliz - MG, 36830-000, Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Maira+Gomes+de+Oliveira+%E2%80%94+Advocacia%0AEspera+Feliz+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/logo-emblem.png";
const FOTO_HERO_SRC = "/dra-maira-gomes.jpg";
const FOTO_ABOUT_SRC = "/escritorio-sede.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Maira Gomes! Gostaria de uma orientação jurídica sobre o meu caso.";
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
    id: "direito-civel-contratos",
    title: "Direito Cível, Contratos & Resolução de Litígios",
    category: "Contratos Seguros · Indenizações · Cobranças · Responsabilidade Civil · Posse e Propriedade",
    icon: Scale,
    tag: "Prevenção Eficaz · Resolução Ágil · Rigor Técnico",
    summary:
      "Atuação preventiva e contenciosa de excelência em elaboração e revisão contratual, cobrança e recuperação de créditos, indenizações por danos materiais e morais, e litígios cíveis em geral.",
    details:
      "A segurança jurídica nas relações civis exige técnica minuciosa e visão estratégica. A Dra. Maira Gomes de Oliveira atua com sólida experiência na confecção e auditoria de contratos blindados, recuperação de títulos e créditos inadimplidos, ações possessórias e reparação integral por danos materiais, morais e estéticos, priorizando soluções rápidas e assertivas.",
    topics: [
      "Elaboração, análise e revisão criteriosa de contratos civis, comerciais e de prestação de serviços",
      "Ações de cobrança, recuperação de créditos e execução de títulos judiciais e extrajudiciais",
      "Ações indenizatórias por perdas e danos, danos morais, materiais e lucros cessantes",
      "Rescisão contratual motivada com apuração de penalidades, multas e restituição de valores",
      "Ações de reintegração de posse, usucapião, regularização de imóveis e conflitos imobiliários",
      "Notificações extrajudiciais estratégicas e acordos para evitar litígios prolongados",
    ],
    whatsAppText:
      "Olá, Dra. Maira Gomes! Gostaria de consultar sobre uma questão cível / contrato / cobrança.",
  },
  {
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário & Benefícios do INSS",
    category: "Aposentadorias · Auxílio-Incapacidade · BPC/LOAS · Pensão por Morte · Planejamento Previdenciário",
    icon: Landmark,
    tag: "Concessão Justa · Reversão de Indeferimentos · Proteção Social",
    summary:
      "Assessoria completa para aposentadorias rurais e urbanas, auxílio por incapacidade temporária (auxílio-doença), BPC/LOAS e reversão de benefícios negados pelo INSS perante a Justiça Federal.",
    details:
      "A garantia do benefício previdenciário correto exige contagem minuciosa de tempo de contribuição, análise de vínculos no CNIS e comprovação idônea de atividade rural e urbana. O escritório da Dra. Maira Gomes atua com profundo zelo técnico para destravar pedidos represados, reverter indeferimentos indevidos e planejar a sua aposentadoria com o melhor valor legal possível.",
    topics: [
      "Planejamento Previdenciário completo para identificar a melhor regra e o valor máximo do benefício",
      "Aposentadoria por Idade Urbana e Rural, Tempo de Contribuição e Regras de Transição",
      "Ação judicial para reversão de indeferimento de Auxílio por Incapacidade Temporária (auxílio-doença)",
      "Concessão de BPC/LOAS (Benefício de Prestação Continuada) para idosos de 65+ anos e pessoas com deficiência",
      "Reconhecimento de atividade rural, tempo especial e acerto de divergências no CNIS",
      "Pensão por Morte, Auxílio-Reclusão e Salário-Maternidade para segurados do campo e da cidade",
    ],
    whatsAppText:
      "Olá, Dra. Maira Gomes! Gostaria de auxílio com meu benefício previdenciário do INSS / aposentadoria.",
  },
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família, Sucessões & Inventários",
    category: "Inventário em Cartório · Partilha de Bens · Divórcio · Pensão Alimentícia · Guarda",
    icon: Users,
    tag: "Atendimento Humanizado · Agilidade em Cartório · Preservação Patrimonial",
    summary:
      "Condução sensível, ética e resolutiva para inventários em cartório (extrajudiciais) ágeis, partilha justa de bens familiares, divórcios consensuais e regulamentação de guarda e alimentos.",
    details:
      "Demandas familiares exigem acolhimento humano aliado a firmeza técnica. A Dra. Maira Gomes prioriza métodos ágeis e menos desgastantes, promovendo inventários extrajudiciais em cartório de notas para rápida transmissão patrimonial, divórcios equilibrados, proteção aos direitos de menores e fixação responsável de pensão alimentícia.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas: partilha célere, econômica e sem desgastes para herdeiros",
      "Inventário Judicial e arrolamento de bens quando há menores ou necessidade de partilha judicial",
      "Divórcio consensual e litigioso, partilha de bens e dissolução de união estável",
      "Ações de fixação, revisão, exoneração e execução de pensão alimentícia em atraso",
      "Regulamentação de guarda compartilhada, visitas e convivência familiar equilibrada",
      "Planejamento sucessório familiar, testamentos e doações com cláusulas de usufruto",
    ],
    whatsAppText:
      "Olá, Dra. Maira Gomes! Gostaria de orientação sobre inventário / partilha / questão de família.",
  },
  {
    id: "direito-do-consumidor-fraudes",
    title: "Direito do Consumidor & Defesa contra Golpes",
    category: "Golpe do Pix · Empréstimos Não Autorizados · SPC/Serasa · Planos de Saúde · Cobranças Abusivas",
    icon: Shield,
    tag: "Defesa Ativa · Indenizações por Danos Morais · Recuperação de Valores",
    summary:
      "Defesa enérgica contra fraudes financeiras, golpes digitais do Pix, negativações indevidas nos órgãos de proteção ao crédito, contratos abusivos e negativa de cobertura por planos de saúde.",
    details:
      "O consumidor lesado por fraudes bancárias ou cobranças ilegais necessita de providências imediatas. A Dra. Maira Gomes atua com rigor na solicitação de bloqueio de transações fraudulentas, acionamento judicial de bancos por falhas de segurança, exclusão liminar de inscrições no SPC/Serasa e requerimento de reparações por danos morais.",
    topics: [
      "Ações judiciais por Golpe do Pix, clonagem de contas, fraudes eletrônicas e empréstimos consignados indevidos",
      "Exclusão liminar de registros indevidos nos cadastros do SPC e Serasa com pedido de indenização",
      "Combate a juros abusivos, tarifas não contratadas e descontos ilegais em benefícios previdenciários",
      "Ações contra planos de saúde por recusa de tratamentos, exames, cirurgias ou medicamentos de alto custo",
      "Ações contra companhias aéreas e concessionárias por interrupções injustificadas e danos ao consumidor",
      "Reparação por vícios ocultos de produtos, garantia descumprida e devolução de valores em dobro",
    ],
    whatsAppText:
      "Olá, Dra. Maira Gomes! Fui vítima de fraude / cobrança indevida e preciso de orientação jurídica urgente.",
  },
  {
    id: "direito-trabalhista",
    title: "Direito Trabalhista & Causas Laborais",
    category: "Verbas Rescisórias · Rescisão Indireta · Horas Extras · Vínculo Empregatício · Assédio",
    icon: Briefcase,
    tag: "Defesa dos Direitos · Cálculo Minucioso · Reparação Integral",
    summary:
      "Proteção zelosa e fundamentada dos direitos trabalhistas. Atuação para recebimento de verbas devidas, adicionais de insalubridade, horas extras não pagas e rescisão indireta em faltas graves.",
    details:
      "A análise detalhada de contracheques, acordos e rotinas de trabalho é fundamental para garantir a justa remuneração. O escritório conduz ações trabalhistas com rigor nos cálculos, busca de equiparação salarial, indenização por acidentes e danos morais decorrentes de assédio ou condições inadequadas de trabalho.",
    topics: [
      "Ação trabalhista para pagamento integral de verbas rescisórias, saldo de salário, aviso prévio e FGTS + 40%",
      "Cobrança de horas extras, intervalos suprimidos e desrespeito a descansos remunerados",
      "Reconhecimento de vínculo de emprego sem carteira assinada com anotação retroativa em CTPS",
      "Rescisão Indireta do contrato de trabalho motivada por atrasos reiterados de salários ou faltas graves",
      "Pedidos de adicional de insalubridade e periculosidade para ambientes de risco à saúde e segurança",
      "Indenização por danos morais em virtude de assédio moral, perseguição ou humilhações no ambiente profissional",
    ],
    whatsAppText:
      "Olá, Dra. Maira Gomes! Gostaria de consultar sobre meus direitos trabalhistas / rescisão.",
  },
  {
    id: "assessoria-empresarial-preventiva",
    title: "Assessoria Jurídica Preventiva para Empresas",
    category: "Blindagem Contratual · Adequação ao CDC · Gestão de Riscos · Recuperação de Ativos",
    icon: Building2,
    tag: "Segurança Operacional · Mitigação de Passivos · Suporte Estratégico",
    summary:
      "Consultoria jurídica preventiva para comércios locais, produtores e empresas. Estruturação contratual robusta, mitigação de riscos operacionais e cobrança estratégica de inadimplências.",
    details:
      "Prevenir litígios é a estratégia mais rentável para qualquer negócio. A Dra. Maira Gomes de Oliveira presta assessoria contínua para resguardar empresas em suas relações com parceiros, fornecedores e clientes, elaborando instrumentos contratuais sólidos e intermediando soluções amigáveis com agilidade e respaldo jurídico.",
    topics: [
      "Elaboração e revisão criteriosa de contratos comerciais, termos de parceria e prestação de serviços",
      "Adequação de rotinas de atendimento e vendas às exigências do Código de Defesa do Consumidor",
      "Cobrança extrajudicial estruturada e recuperação judicial célere de títulos e duplicatas inadimplidas",
      "Orientação preventiva nas relações de trabalho para redução de passivos trabalhistas futuros",
      "Notificações extrajudiciais formais e condução de negociações estratégicas de alto impacto",
      "Suporte ágil para tomadas de decisão com respaldo técnico e proteção patrimonial societária",
    ],
    whatsAppText:
      "Olá, Dra. Maira Gomes! Gostaria de uma assessoria jurídica preventiva para a minha empresa.",
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
    name: "Wellington Cabalini",
    badge: "7 avaliações · 3 fotos · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Grande Escritório. Atendimento de qualidade, transparência e eficiência! Gratidão ❤️",
    content:
      "Grande Escritório. Atendimento de qualidade, transferência e eficiência! Gratidão ❤️",
  },
  {
    name: "Samuel Sr. Deputado",
    badge: "4 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Excelente escritório com profissionais preparados e atendimento humanizado, advogada muito competente! 👏👍",
    content:
      "Excelente escritório com profissionais preparados e atendimento humanizado, advogada muito competente! 👏👍",
  },
  {
    name: "Maraisa Gomes",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Escritório muito diferenciado, com profissionais qualificadas e com a excelência da melhor Advogada da região! ❤️",
    content:
      "Escritório muito diferenciado, com profissionais qualificadas e com a excelência da melhor Advogada da região! ❤️",
  },
  {
    name: "Luccas Couto",
    badge: "7 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Competência, comprometimento e qualidade. A melhor da região. ❤️",
    content:
      "Competência, comprometimento e qualidade. A melhor da região. ❤️",
  },
  {
    name: "Gena Moura",
    badge: "4 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Escritório sério, com profissionais comprometidos e qualificados, com o melhor atendimento para seus clientes!!! ❤️",
    content:
      "Escritório sério, com profissionais comprometidos e qualificados,com o melhor atendimento para seus clientes!!! ❤️",
  },
  {
    name: "Filipe Barbosa",
    badge: "2 avaliações · 2 fotos · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Ótimo escritório, com profissionais competentes e qualificados. ❤️",
    content:
      "Ótimo escritório, com profissionais competentes e qualificados. ❤️",
  },
  {
    name: "Flor de Lótus",
    badge: "5 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "A melhor advogada da região. ❤️",
    content:
      "A melhor advogada da região. ❤️",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona a primeira conversa com a Dra. Maira Gomes de Oliveira?",
    answer:
      "O primeiro contato é simples, rápido e direto pelo nosso WhatsApp oficial. Você nos envia um resumo do seu caso ou dúvida e os documentos que possuir. A Dra. Maira Gomes analisa a viabilidade com total transparência e didática, explicando seus direitos sem termos jurídicos complicados e traçando o plano de ação mais seguro.",
  },
  {
    question: "O escritório atende apenas presencialmente em Espera Feliz ou também online?",
    answer:
      "Atendemos com estrutura física acolhedora em nossa sede própria no Centro de Espera Feliz - MG e também de forma 100% digital para clientes de toda a região do Caparaó, Zona da Mata e de qualquer lugar do Brasil. Por meio de videochamadas, envio seguro de arquivos e assinatura eletrônica, você acompanha seu processo com total agilidade.",
  },
  {
    question: "Quais são as vantagens de realizar o inventário em cartório (extrajudicial)?",
    answer:
      "Quando todos os herdeiros são maiores, capazes e há consenso sobre a partilha dos bens, o inventário extrajudicial em cartório de notas é substancialmente mais rápido, econômico e tranquilo do que um processo judicial, podendo ser concluído em poucas semanas com a assistência jurídica do nosso escritório.",
  },
  {
    question: "Tive um benefício do INSS negado ou cortado. Ainda é possível reverter?",
    answer:
      "Sim, com certeza. Indeferimentos administrativos do INSS por análises superficiais de perícia ou de tempo de contribuição são muito comuns. Nosso escritório analisa o processo administrativo e, identificando o direito do segurado, ingressa com ação perante a Justiça Federal, onde médicos e peritos judiciais imparciais avaliam detalhadamente o caso.",
  },
  {
    question: "Fui vítima de golpe do Pix, fraude bancária ou desconto indevido. O que fazer?",
    answer:
      "O tempo é fundamental. Guarde imediatamente comprovantes de transferência, prints de conversas, extratos e registre o Boletim de Ocorrência. Em seguida, entre em contato imediatamente com o nosso escritório pelo WhatsApp para adotarmos as medidas jurídicas cabíveis de bloqueio e requerimento de restituição dos valores com danos morais.",
  },
  {
    question: "Quais são os documentos necessários para a análise jurídica inicial?",
    answer:
      "De início, basta um documento de identificação (RG ou CNH), comprovante de residência e os documentos relacionados ao seu caso específico (extratos bancários, comprovantes, contracheques, certidões ou negativas do INSS). Durante a conversa orientamos exatamente o que precisa ser apresentado.",
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
        className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          dark ? "text-white" : "text-[#0b1322]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            dark ? "text-[#faefd4]" : "text-[#4e5e74]"
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
  const [scrolled, setScrolled] = useState(false);
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(
    null
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#0b1322] text-[#fffaf0] selection:bg-[#df9e32] selection:text-[#060a12]">
        {/* TOP ANNOUNCEMENT BAR (MIDNIGHT NAVY & GOLD) */}
        <div className="border-b border-[#df9e32]/25 bg-[#060a12] py-2 text-xs">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#df9e32] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#fee690]" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                Dra. Maira Gomes de Oliveira · OAB/MG 166.714 · Espera Feliz - MG ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#faefd4]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#df9e32] text-[#df9e32]" />
                <span className="font-bold text-white">5,0 ★</span> (16 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-[#df9e32]/40 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de uma consultoria jurídica sobre o meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#fee690] sm:inline-flex"
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
              ? "border-b border-[#df9e32]/35 bg-[#0b1322]/95 py-3 shadow-xl shadow-black/80 backdrop-blur-md"
              : "border-b border-[#df9e32]/20 bg-[#0b1322]/90 py-4 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Left: Logo + Desktop Navigation */}
            <div className="flex items-center gap-6 xl:gap-10">
              {/* Logo Link */}
              <a
                href="#"
                className="group flex shrink-0 items-center transition-opacity hover:opacity-95"
                aria-label="Escritório de Advocacia Maira Gomes de Oliveira - Início"
              >
                <div className="relative flex items-center py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Escritório de Advocacia Maira Gomes de Oliveira OAB/MG 166.714 - Logotipo Oficial"
                    width={320}
                    height={110}
                    className="h-11 sm:h-12 md:h-13 w-auto max-w-[190px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[270px] object-contain object-left drop-shadow-[0_2px_14px_rgba(223,158,50,0.3)] transition-transform duration-200 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-3.5 lg:gap-4 xl:gap-6 lg:flex">
                <a href="#atuacao" className="nav-link-dark text-[11px] whitespace-nowrap">
                  Atuação
                </a>
                <a href="#sobre" className="nav-link-dark text-[11px] whitespace-nowrap">
                  Sobre a Dra. Maira
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
                  Sede & Contato
                </a>
              </nav>
            </div>

            {/* Right Action */}
            <div className="flex shrink-0 items-center gap-3 ml-4 lg:ml-6 xl:ml-8 pl-2">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de consultar sobre o meu caso.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#060a12]" />
                <span className="hidden 2xl:inline">Atendimento WhatsApp</span>
                <span className="2xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-[#df9e32]/40 bg-[#101a2d] text-[#fffaf0] transition-colors hover:border-[#fee690] hover:text-white lg:hidden"
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
                className="border-b border-[#df9e32]/40 bg-[#060a12] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="pb-3 border-b border-[#df9e32]/20 flex items-center">
                    <Image
                      src={LOGO_SRC}
                      alt="Escritório de Advocacia Maira Gomes de Oliveira"
                      width={280}
                      height={95}
                      className="h-10 w-auto object-contain object-left"
                    />
                  </div>
                  <a
                    href="#atuacao"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#faefd4] uppercase transition-colors hover:text-white"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#df9e32]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#faefd4] uppercase transition-colors hover:text-white"
                  >
                    <span>Sobre a Dra. Maira Gomes</span>
                    <ArrowRight size={14} className="text-[#df9e32]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#faefd4] uppercase transition-colors hover:text-white"
                  >
                    <span>Diferenciais</span>
                    <ArrowRight size={14} className="text-[#df9e32]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#faefd4] uppercase transition-colors hover:text-white"
                  >
                    <span>Avaliações Google (5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#df9e32]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#faefd4] uppercase transition-colors hover:text-white"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#df9e32]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#faefd4] uppercase transition-colors hover:text-white"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-[#df9e32]" />
                  </a>

                  <div className="pt-4 border-t border-[#df9e32]/30">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de agendar um atendimento.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com a Dra. Maira Gomes</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION + FAIXA DE MÉTRICAS (DARK LUXURY)  */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#0b1322]">
          {/* Subtle Ambient Imperial Gold Radial Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-radial from-[#df9e32]/18 via-[#a06008]/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-96 w-96 rounded-full bg-[#1d2d4c]/50 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Copy & Authority */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="lg:col-span-7"
              >
                {/* Eyebrow Badge */}
                <motion.div variants={reveal} className="mb-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#df9e32]/40 bg-[#101a2d] px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-white shadow-sm">
                    <span className="size-1.5 rounded-full bg-[#fee690] animate-pulse" />
                    MR Advocacia · Dra. Maira Gomes de Oliveira · Espera Feliz - MG
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.14] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
                >
                  Advocacia Estratégica, Rigor Técnico e{" "}
                  <span className="bg-gradient-to-r from-white via-[#fee690] to-[#df9e32] bg-clip-text text-transparent">
                    Atendimento Humanizado
                  </span>{" "}
                  para Proteger Você.
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-[#faefd4] sm:text-lg"
                >
                  Com <strong className="text-white font-semibold">mais de 7 anos de experiência</strong> e nota máxima <strong className="text-white font-semibold">5,0 ★ no Google</strong>, a <strong className="text-white font-semibold">Dra. Maira Gomes de Oliveira</strong> lidera um escritório sério, ético e resolutivo, pronto para defender seus interesses em <strong className="text-white font-semibold">Direito Civil, Previdenciário (INSS), Família & Inventários, Consumidor e Trabalhista</strong> — com atendimento presencial em <strong className="text-white font-semibold">Espera Feliz - MG</strong> e online para todo o Brasil.
                </motion.p>

                {/* Direct Trust Highlights */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex items-start gap-3 rounded-xl border border-[#df9e32]/40 bg-[#15223a]/90 p-3.5 backdrop-blur-sm"
                >
                  <Award size={18} className="text-[#df9e32] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#fffaf0] leading-relaxed">
                    <strong className="text-white font-bold">Reconhecimento unânime na região do Caparaó:</strong> Atendimento de qualidade, transparência e eficiência com suporte humanizado em cada etapa do seu processo.
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de consultar sobre a situação do meu caso.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Analisar Meu Caso no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#atuacao"
                    variant="dark"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conhecer Áreas de Atuação</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Visual Frame (Dra. Maira Gomes portrait) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Metallic Border Box */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#df9e32]/50 bg-[#101a2d] p-2 shadow-2xl shadow-black/95">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#060a12]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Maira Gomes de Oliveira - Advogada em Espera Feliz - MG"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1322] via-transparent to-transparent opacity-65" />
                    </div>

                    {/* Subtle Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-[#df9e32]/50 bg-[#060a12]/95 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-white">
                            Dra. Maira Gomes de Oliveira
                          </p>
                          <p className="text-[11px] text-[#faefd4]">
                            Advogada · OAB/MG 166.714
                          </p>
                        </div>
                        <span className="rounded-md border border-[#df9e32]/40 bg-[#15223a] px-2.5 py-1 text-[10px] font-bold text-[#fee690]">
                          Espera Feliz · MG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 5.0 Rating) */}
                  <div className="absolute -top-5 -left-5 hidden rounded-xl border border-[#df9e32]/50 bg-[#101a2d]/95 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#15223a] border border-[#df9e32]/40">
                      <GoogleIcon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-[#df9e32] text-[#df9e32]"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-white mt-0.5">
                        5,0 no Google · 16 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Experiência) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-[#df9e32]/50 bg-[#101a2d]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <Scale size={16} className="text-[#df9e32]" />
                    <span className="text-xs font-bold tracking-wide text-white">
                      +7 Anos de Experiência Jurídica ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN DOBRA 1 (DARK) */}
            <div className="mt-14 border-t border-[#df9e32]/25 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-[#df9e32]/30 bg-[#101a2d]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    5,0 ★
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-[#faefd4]">16 avaliações 100% 5 estrelas</p>
                </div>

                <div className="rounded-xl border border-[#df9e32]/30 bg-[#101a2d]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    +7 Anos
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Sólida Experiência</p>
                  <p className="text-[11px] text-[#faefd4]">Atuação consolidada e segura</p>
                </div>

                <div className="rounded-xl border border-[#df9e32]/30 bg-[#101a2d]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Humanizado
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Atendimento Acolhedor</p>
                  <p className="text-[11px] text-[#faefd4]">Escuta atenta e dedicação integral</p>
                </div>

                <div className="rounded-xl border border-[#df9e32]/30 bg-[#101a2d]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Resolutividade
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Agilidade & Eficiência</p>
                  <p className="text-[11px] text-[#faefd4]">Respostas rápidas e transparentes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: PILARES & ÁREAS DE ATUAÇÃO (LIGHT ALABASTER)    */}
        {/* ======================================================== */}
        <section id="atuacao" className="border-t border-[#e8decc] bg-[#fbf9f5] text-[#0b1322] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="Especialidades & Pilares de Atuação"
                description="Atuação jurídica qualificada e multidisciplinar para proteger seus direitos em questões cíveis, previdenciárias, familiares, do consumidor e trabalhistas."
              >
                Atuação Jurídica Completa e Estratégica
              </Heading>

              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de consultar sobre a minha situação jurídica.")}
                target="_blank"
                variant="gold"
                size="md"
              >
                <WhatsAppIcon size={15} />
                <span>Consultar Minha Demanda</span>
              </GlowingButton>
            </div>

            {/* Practice Areas Grid */}
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#e8decc] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#df9e32] hover:shadow-lg hover:shadow-[#df9e32]/10"
                  >
                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#f4efe6] text-[#df9e32] border border-[#e8decc] transition-colors group-hover:bg-[#df9e32] group-hover:text-[#060a12]">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#f4efe6] px-3 py-1 text-[10px] font-bold text-[#a06008] uppercase tracking-wider">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-[#0b1322] group-hover:text-[#a06008] transition-colors">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#a06008]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-[#4e5e74]">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#e8decc] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex w-full items-center justify-between text-xs font-bold text-[#a06008] transition-colors hover:text-[#0b1322] cursor-pointer"
                      >
                        <span>Ver Detalhes & Tópicos Atendidos</span>
                        <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 3: SOBRE A ADVOGADA & SEDE (DARK LUXURY)           */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-[#df9e32]/25 bg-[#060a12] py-20 lg:py-28 text-[#fffaf0]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Images: Dra. Maira Gomes & Office Sign */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm lg:max-w-none space-y-4">
                  {/* Photo 1: Dra. Maira Gomes */}
                  <div className="overflow-hidden rounded-2xl border-2 border-[#df9e32]/50 bg-[#101a2d] p-2 shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#15223a]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Maira Gomes de Oliveira - Advogada em Espera Feliz - MG"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Photo 2: Office Wall Sign (MR Advocacia) */}
                  <div className="overflow-hidden rounded-xl border border-[#df9e32]/40 bg-[#101a2d] p-1.5 shadow-lg">
                    <div
                      className="relative w-full overflow-hidden rounded-lg bg-[#060a12]"
                      style={{ aspectRatio: "768 / 640" }}
                    >
                      <Image
                        src={FOTO_ABOUT_SRC}
                        alt="MR Advocacia - Sede própria em Espera Feliz - MG"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-center"
                      />
                    </div>
                    <p className="mt-2 text-center text-[10px] font-bold text-[#fee690] uppercase tracking-wider">
                      Sede Própria · R. Pedro Dias Neto, 03 - Centro, Espera Feliz - MG
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre a Profissional & O Escritório"
                  dark={true}
                  description="Mais de 7 anos dedicados a colocar o Direito a serviço da proteção de direitos, segurança patrimonial e amparo de pessoas e famílias."
                >
                  Dra. Maira Gomes de Oliveira: Competência, Rigor & Atendimento Humano
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#faefd4]">
                  <p>
                    Com mais de 7 anos de atuação jurídica consistente e registro profissional <strong className="text-white font-semibold">OAB/MG 166.714</strong>, a <strong className="text-white font-semibold">Dra. Maira Gomes de Oliveira</strong> construiu uma trajetória sólida pautada na ética, na competência técnica e no atendimento profundamente humanizado.
                  </p>
                  <p>
                    À frente do <strong className="text-white font-semibold">Escritório de Advocacia Maira Gomes de Oliveira (MR Advocacia)</strong>, com moderna sede física no Centro de <strong className="text-white font-semibold">Espera Feliz - MG</strong>, o escritório consolidou-se como referência regional em qualidade, clareza e dedicação em cada processo.
                  </p>
                  <p>
                    Seus clientes destacam constantemente o acolhimento diferenciado, a transparência na condução dos casos e a agilidade nas respostas. Cada demanda é tratada com rigor artesanal, unindo conhecimento da legislação a um compromisso inegociável de resolver os problemas com a maior eficiência possível.
                  </p>
                </div>

                {/* 4 Highlights */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-[#df9e32]/30 bg-[#101a2d] p-4">
                    <HeartHandshake size={20} className="text-[#df9e32] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Atendimento Humanizado
                      </h4>
                      <p className="mt-1 text-[11px] text-[#faefd4]">
                        Acolhimento com empatia, escuta ativa e respeito absoluto à história de cada cliente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#df9e32]/30 bg-[#101a2d] p-4">
                    <BadgeCheck size={20} className="text-[#df9e32] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Competência & Qualificação
                      </h4>
                      <p className="mt-1 text-[11px] text-[#faefd4]">
                        Profissionais qualificados com rigor técnico nas peças processuais e estratégias.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#df9e32]/30 bg-[#101a2d] p-4">
                    <FileText size={20} className="text-[#df9e32] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Transparência & Clareza
                      </h4>
                      <p className="mt-1 text-[11px] text-[#faefd4]">
                        Comunicação direta, sem rodeios ou termos técnicos complicados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#df9e32]/30 bg-[#101a2d] p-4">
                    <Sparkles size={20} className="text-[#df9e32] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Eficiência & Agilidade
                      </h4>
                      <p className="mt-1 text-[11px] text-[#faefd4]">
                        Foco nas melhores soluções, atuando com celeridade extrajudicial e judicial.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de conversar com você sobre o meu caso.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com a Dra. Maira Gomes</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#faefd4] transition-colors hover:text-white"
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
        {/* DOBRA 4: DIFERENCIAIS BASEADOS NAS AVALIAÇÕES (LIGHT)    */}
        {/* ======================================================== */}
        <section id="diferenciais" className="border-t border-[#e8decc] bg-[#f4efe6] text-[#0b1322] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow justify-center mb-3">
                Por que Escolher o Escritório Dra. Maira Gomes
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0b1322] sm:text-4xl">
                O Padrão de Excelência com Nota Máxima 5,0 ★ no Google
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4e5e74]">
                Pilares comprovados por quem vivenciou o atendimento e teve seus direitos assegurados com tranquilidade e rigor técnico.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#e8decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#df9e32] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fbf9f5] text-[#a06008] border border-[#e8decc]">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0b1322]">
                  Qualidade e Competência
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4e5e74]">
                  Equipe preparada e advogada altamente competente, com conhecimento aprofundado da legislação e da jurisprudência.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#df9e32] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fbf9f5] text-[#a06008] border border-[#e8decc]">
                  <Heart size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0b1322]">
                  Atendimento Humanizado
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4e5e74]">
                  Cuidado especial em entender a real dor de cada cliente, proporcionando tranquilidade e acolhimento em momentos delicados.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#df9e32] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fbf9f5] text-[#a06008] border border-[#e8decc]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0b1322]">
                  Transparência e Ética
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4e5e74]">
                  Conduta séria e transparente. Informações claras sobre riscos, prazos e chances reais de êxito em cada procedimento.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#df9e32] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fbf9f5] text-[#a06008] border border-[#e8decc]">
                  <Clock size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0b1322]">
                  Eficiência e Rapidez
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4e5e74]">
                  Acompanhamento próximo em todas as fases, atuando de maneira resolutiva para acelerar a conclusão das demandas.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de esclarecer algumas dúvidas sobre o meu caso.")}
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
        <section id="depoimentos" className="border-t border-[#df9e32]/25 bg-[#0b1322] py-20 lg:py-28 text-[#fffaf0]">
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
                        className="fill-[#df9e32] text-[#df9e32]"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">5,0 de 5,0</span>
                  <span className="text-xs text-[#faefd4]">
                    · 16 avaliações unânimes cinco estrelas no Google Meu Negócio
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#df9e32]/40 bg-[#101a2d] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:border-[#fee690] hover:bg-[#15223a]"
              >
                <GoogleIcon size={14} />
                <span>Ver Avaliações no Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Reviews Grid (DARK STYLING) */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between rounded-2xl border border-[#df9e32]/30 bg-[#101a2d] p-6 shadow-md transition-all duration-300 hover:border-[#df9e32] hover:bg-[#15223a]"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#df9e32] text-[#df9e32]"
                        />
                      ))}
                    </div>

                    {/* Highlight Quote */}
                    <p className="mt-3 font-serif text-sm font-bold text-white leading-snug">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    {/* Full Review Text */}
                    <p className="mt-3 text-xs leading-relaxed text-[#faefd4]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#df9e32]/30 pt-4">
                    <p className="font-serif text-xs font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#fee690]">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#df9e32]/40 bg-[#101a2d] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-white sm:text-xl">
                Precisa de orientação jurídica profissional e segura?
              </h3>
              <p className="mt-2 text-xs text-[#faefd4] max-w-xl mx-auto">
                Não enfrente dúvidas ou litígios sem o respaldo de quem atua com seriedade, ética, rapidez e rigor em cada detalhe.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Li as avaliações no site e gostaria de conversar com você sobre o meu caso.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com a Dra. Maira Gomes de Oliveira Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO (LIGHT)             */}
        {/* ======================================================== */}
        <section className="border-t border-[#e8decc] bg-[#fbf9f5] text-[#0b1322] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow justify-center mb-3">
                Processo Transparente
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0b1322] sm:text-4xl">
                Como Funciona o Seu Atendimento
              </h2>
              <p className="mt-3 text-sm text-[#4e5e74]">
                Passo a passo simples, ágil e acolhedor desde o primeiro contato até o desfecho da sua questão jurídica.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#e8decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#df9e32] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#a06008]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0b1322]">
                  Contato Inicial
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4e5e74]">
                  Envie uma mensagem no WhatsApp relatando sua situação e tire as primeiras dúvidas diretamente com a equipe do escritório.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#df9e32] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#a06008]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0b1322]">
                  Análise Documental
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4e5e74]">
                  Avaliamos detalhadamente comprovantes, extratos, contratos ou certidões com rigor técnico para definir a viabilidade jurídica.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#df9e32] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#a06008]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0b1322]">
                  Estratégia Assertiva
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4e5e74]">
                  Traçamos a melhor rota (acordo extrajudicial célere, notificação formal ou ação judicial fundamentada) para proteger você.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8decc] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#df9e32] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#a06008]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0b1322]">
                  Acompanhamento Próximo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4e5e74]">
                  Condução zelosa em todas as etapas, com atualizações periódicas e suporte ágil até a solução definitiva da causa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ (DARK)                 */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-[#df9e32]/25 bg-[#060a12] py-20 lg:py-28 text-[#fffaf0]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow-dark mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-[#faefd4]">
                Respostas diretas e didáticas sobre atendimento jurídico, causas cíveis, previdenciárias e inventários.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-[#df9e32]/30 bg-[#101a2d] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-white transition-colors hover:text-[#fee690] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#df9e32]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#df9e32]" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-[#df9e32]/25 px-5 pt-3 pb-5 text-xs leading-relaxed text-[#faefd4]"
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
              <p className="text-xs text-[#fee690]">
                Sua dúvida específica não está listada acima?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de esclarecer uma dúvida que não encontrei no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Pergunte diretamente à equipe da Dra. Maira Gomes no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDE & CONTATO (LIGHT)            */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#e8decc] bg-[#fbf9f5] text-[#0b1322] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info (LIGHT STYLING) */}
              <div className="lg:col-span-5">
                <span className="eyebrow mb-3.5">Sede & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0b1322] sm:text-4xl">
                  Estamos Prontos para Atender Você
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#4e5e74]">
                  Agende seu atendimento presencial em nossa sede própria no Centro de Espera Feliz - MG, ou realize sua consulta de forma online com total comodidade e discrição de onde você estiver.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e8decc] bg-[#f4efe6] text-[#a06008]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0b1322] uppercase tracking-wider">
                        Endereço da Sede
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#4e5e74]">
                        {ADDRESS_TEXT}
                      </p>
                      <p className="text-[11px] text-[#a06008] font-medium mt-0.5">
                        Centro de Espera Feliz - MG · CEP 36830-000 · Atendimento presencial e online.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e8decc] bg-[#f4efe6] text-[#a06008]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0b1322] uppercase tracking-wider">
                        Telefones & WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-[#4e5e74]">
                        Celular / WhatsApp: <strong className="text-[#0b1322]">{PHONE_DISPLAY}</strong>
                      </p>
                      <p className="text-xs text-[#4e5e74]">
                        Fixo: <strong className="text-[#0b1322]">{PHONE_LANDLINE}</strong>
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de agendar uma consulta jurídica.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#a06008] hover:underline block mt-1"
                      >
                        Clique para enviar mensagem no WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e8decc] bg-[#f4efe6] text-[#a06008]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0b1322] uppercase tracking-wider">
                        Horário de Funcionamento
                      </p>
                      <p className="mt-1 text-xs text-[#4e5e74]">
                        Segunda a Sexta: 09:00 às 18:00
                      </p>
                      <p className="text-[11px] text-[#a06008]">
                        Atendimento presencial com agendamento prévio e online para todo o Brasil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e8decc] bg-[#f4efe6] text-[#a06008]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0b1322] uppercase tracking-wider">
                        Redes Sociais & Perfil
                      </p>
                      <div className="mt-1 flex flex-col gap-1 text-xs">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4e5e74] hover:text-[#0b1322]"
                        >
                          Instagram: <span className="font-bold">{INSTAGRAM_HANDLE}</span>
                        </a>
                        <a
                          href={GOOGLE_SEARCH_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#a06008] hover:underline"
                        >
                          Perfil Google: Escritório de Advocacia Maira Gomes de Oliveira (5,0 ★)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card (LIGHT STYLING) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#e8decc] bg-white p-8 shadow-xl shadow-[#df9e32]/10">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#a06008]">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-[#0b1322] sm:text-3xl">
                    Inicie seu Atendimento com a Equipe da Dra. Maira Gomes
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#4e5e74]">
                    Selecione a área da sua necessidade para ser direcionado(a) com a mensagem adequada ao WhatsApp oficial do escritório:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de consultar sobre Direito Cível / Contratos / Cobranças.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8decc] bg-[#f4efe6] p-4 text-xs font-bold text-[#0b1322] transition-all hover:border-[#df9e32] hover:bg-[#df9e32]/15"
                    >
                      <span>Cível & Contratos</span>
                      <ArrowRight size={14} className="text-[#a06008]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de orientação sobre Aposentadoria / Benefício Previdenciário (INSS).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8decc] bg-[#f4efe6] p-4 text-xs font-bold text-[#0b1322] transition-all hover:border-[#df9e32] hover:bg-[#df9e32]/15"
                    >
                      <span>Previdenciário (INSS)</span>
                      <ArrowRight size={14} className="text-[#a06008]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de orientação sobre Inventário / Partilha de Bens / Família.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8decc] bg-[#f4efe6] p-4 text-xs font-bold text-[#0b1322] transition-all hover:border-[#df9e32] hover:bg-[#df9e32]/15"
                    >
                      <span>Família, Inventário & Partilha</span>
                      <ArrowRight size={14} className="text-[#a06008]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de consultar sobre Direito do Consumidor / Golpe do Pix / Fraude Bancária.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8decc] bg-[#f4efe6] p-4 text-xs font-bold text-[#0b1322] transition-all hover:border-[#df9e32] hover:bg-[#df9e32]/15"
                    >
                      <span>Consumidor & Golpes Bancários</span>
                      <ArrowRight size={14} className="text-[#a06008]" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-[#e8decc] pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de conversar com você sobre a minha situação jurídica.")}
                      target="_blank"
                      variant="gold"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com a Dra. Maira Gomes</span>
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
        <footer className="border-t border-[#df9e32]/25 bg-[#060a12] pt-16 pb-12 text-[#faefd4]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Escritório de Advocacia Maira Gomes de Oliveira OAB/MG 166.714"
                    width={360}
                    height={122}
                    className="h-13 sm:h-14 md:h-16 w-auto max-w-[260px] sm:max-w-[320px] object-contain object-left drop-shadow-[0_2px_12px_rgba(223,158,50,0.25)]"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#faefd4] max-w-md">
                  ⚖️ Escritório de Advocacia Maira Gomes de Oliveira (MR Advocacia). Inscrição OAB/MG 166.714. Atuação especializada em Direito Civil, Previdenciário (INSS), Família & Sucessões, Direito do Consumidor e Trabalhista. Atendimento presencial com estrutura própria em Espera Feliz - MG e digital para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#df9e32]/40 bg-[#101a2d] text-[#faefd4] transition-colors hover:border-white hover:text-white"
                    aria-label="Instagram da Dra. Maira Gomes"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Maira Gomes!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#df9e32]/40 bg-[#101a2d] text-[#faefd4] transition-colors hover:border-white hover:text-white"
                    aria-label="WhatsApp da Dra. Maira Gomes"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#df9e32]/40 bg-[#101a2d] text-[#faefd4] transition-colors hover:border-white hover:text-white"
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
                    <a href="#atuacao" className="footer-link">
                      Áreas de Atuação
                    </a>
                  </li>
                  <li>
                    <a href="#sobre" className="footer-link">
                      Sobre a Dra. Maira Gomes
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
                      Sede em Espera Feliz - MG
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & OAB Column */}
              <div className="lg:col-span-4">
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                  Informações Institucionais & OAB
                </p>
                <p className="mt-4 text-[11px] leading-relaxed text-[#faefd4]/80">
                  Este site possui caráter estritamente institucional e informativo, em estrita observância ao Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não visa à captação indevida de clientela nem substitui consulta jurídica formal.
                </p>
                <div className="mt-4 rounded-lg border border-[#df9e32]/30 bg-[#101a2d] p-3 text-[11px] text-[#faefd4]">
                  <p className="font-bold text-white">
                    Dra. Maira Gomes de Oliveira · OAB/MG 166.714
                  </p>
                  <p className="mt-0.5 text-[#fee690]">
                    {ADDRESS_TEXT}
                  </p>
                  <p className="mt-0.5 text-xs text-[#faefd4]/70">
                    Telefones: {PHONE_DISPLAY} · {PHONE_LANDLINE}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#df9e32]/25 pt-8 text-center text-[11px] sm:flex-row sm:text-left">
              <p>
                © {new Date().getFullYear()} ESCRITÓRIO DE ADVOCACIA MAIRA GOMES DE OLIVEIRA · OAB/MG 166.714. Todos os direitos reservados.
              </p>
              <p className="text-[#df9e32]">
                Espera Feliz · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá, Dra. Maira Gomes! Gostaria de tirar uma dúvida sobre o meu caso.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Maira Gomes"
            className="group flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-black text-white shadow-xl shadow-black/80 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          >
            <WhatsAppIcon size={19} />
            <span className="hidden sm:inline tracking-wide font-bold">
              Falar com a Dra. Maira
            </span>
          </a>
        </div>

        {/* PRACTICE AREA MODAL */}
        <AnimatePresence>
          {selectedPractice && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#df9e32]/50 bg-[#0b1322] p-6 text-white shadow-2xl sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg border border-[#df9e32]/40 bg-[#101a2d] text-[#faefd4] hover:border-white hover:text-white cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2 text-xs font-bold text-[#fee690] uppercase tracking-wider">
                  <span>Especialidade Jurídica</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {selectedPractice.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#df9e32]">
                  {selectedPractice.category}
                </p>

                <p className="mt-4 text-xs leading-relaxed text-[#faefd4] sm:text-sm">
                  {selectedPractice.details}
                </p>

                <div className="mt-6 border-t border-[#df9e32]/30 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Principais Demandas & Procedimentos Atendidos:
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedPractice.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-[#faefd4]"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[#fee690] shrink-0 mt-0.5"
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(selectedPractice.whatsAppText)}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Consultar Dra. Maira nesta Área</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setSelectedPractice(null)}
                    className="w-full rounded-lg border border-[#df9e32]/40 bg-[#101a2d] px-5 py-3 text-xs font-bold text-[#faefd4] hover:bg-[#15223a] hover:text-white sm:w-auto cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
