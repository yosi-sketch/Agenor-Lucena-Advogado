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
  FileText,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Building2,
  Users,
  Heart,
  Home as HomeIcon,
  Siren,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5533998067570";
const PHONE_DISPLAY = "(33) 99806-7570";
const EMAIL_CONTACT = "contato@rhayssalima.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/rhayssalimaadvogada/";
const INSTAGRAM_HANDLE = "@rhayssalimaadvogada";

const ADDRESS_TEXT =
  "R. João Farnez de Araújo, 370 - Raul Soares, MG, 35350-000, Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Rhayssa+Lima+de+Souza+Oliveira+%E2%80%94+Advogada%0ARaul+Soares+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=aafa6ca6a126c165&sxsrf=APpeQnu4G8QYX1Sz2Knyu_eoKgdX1WmHRg:1793128538006&q=rhayssa+lima+de+souza+oliveira-+advogada+raul+soares+endere%C3%A7o&ludocid=10623522670154647984&sa=X&ved=2ahUKEwj5hq2s9NqXAxWypJUCHQkOGZMQ6BN6BAgxEAI";

const LOGO_SRC = "/rhayssa-logo-vivid.png";
const LOGO_EMBLEM_SRC = "/rhayssa-emblem-vivid.png";
const LOGO_EMBLEM_VIVID_SRC = "/rhayssa-emblem-vivid.png";
const FOTO_HERO_SRC = "/dra-rhayssa-lima.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Rhayssa! Gostaria de uma orientação jurídica sobre o meu caso.";
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
    id: "direito-criminal",
    title: "Direito Criminal & Defesa Penal Especializada",
    category: "Delegacia 24h · Audiência de Custódia · Inquérito Policial · Habeas Corpus · Execução Penal",
    icon: Siren,
    tag: "Defesa Técnica Intransigente · Sigilo Absoluto · Pronta Resposta",
    summary:
      "Atuação combativa e estratégica em defesa da liberdade e das garantias constitucionais, desde o acompanhamento presencial em delegacias 24h até a sustentação perante tribunais superiores.",
    details:
      "A liberdade e a dignidade humana não admitem hesitação. A Dra. Rhayssa Lima atua de forma diligente e técnica em investigações policiais, prisões em flagrante, pedidos urgentes de liberdade provisória, relaxamento de prisões ilegais, impetração de Habeas Corpus e condução minuciosa de processos penais com defesa substancial e fundamentada.",
    topics: [
      "Acompanhamento presencial e imediato em flagrantes e delegacias de polícia 24 horas",
      "Atuação célere em Audiências de Custódia para requerimento de liberdade provisória e revogação de prisão",
      "Elaboração de pedidos de relaxamento de prisão ilegal e revogação de prisão preventiva",
      "Defesa técnica estratégica em Inquéritos Policiais, Termos Circunstanciados e Procedimentos Investigatórios",
      "Impetração de Habeas Corpus preventivo e liberatório perante TJMG, STJ e STF",
      "Acompanhamento em Execução Penal: progressão de regime prisional, livramento condicional e remição de pena",
    ],
    whatsAppText:
      "Olá, Dra. Rhayssa Lima! Preciso de atendimento urgente em Direito Criminal / Delegacia / Processo Penal.",
  },
  {
    id: "direito-imobiliario",
    title: "Direito Imobiliário & Regularização de Imóveis",
    category: "Usucapião Judicial e em Cartório · Regularização Fundiária · Escrituras · Contratos · Posse",
    icon: HomeIcon,
    tag: "Segurança Patrimonial · Resolução Descomplicada · Regularização Definitiva",
    summary:
      "Regularização completa de imóveis urbanos e rurais sem escritura, usucapião extrajudicial ágil em cartório, contratos blindados de compra e venda e proteção da posse e propriedade.",
    details:
      "Um imóvel irregular gera insegurança jurídica, desvalorização e riscos de litígios familiares. A Dra. Rhayssa Lima é especialista em destravar procedimentos imobiliários, conduzindo usucapião em cartório de notas com agilidade sem burocracia desnecessária, retificação de matrículas, elaboração de contratos de compra e venda seguros e proteção patrimonial.",
    topics: [
      "Ação de Usucapião Extrajudicial (em cartório de notas, rápida e econômica) e Usucapião Judicial",
      "Regularização jurídica e registral de imóveis rurais e urbanos com divergências de escritura ou posse",
      "Elaboração, análise e auditoria contratual (Due Diligence) de compra, venda, permuta e locação imobiliária",
      "Ações possessórias: reintegração de posse, manutenção de posse e interdito proibitório",
      "Desmembramento, unificação de lotes e retificação de áreas junto ao Cartório de Registro de Imóveis",
      "Assessoria jurídica para regularização de imóveis herdados em inventários e partilhas",
    ],
    whatsAppText:
      "Olá, Dra. Rhayssa Lima! Gostaria de consultar sobre Regularização de Imóvel / Usucapião / Direito Imobiliário.",
  },
  {
    id: "direito-civel",
    title: "Direito Cível & Responsabilidade Civil",
    category: "Contratos Blindados · Ações Indenizatórias · Danos Morais · Cobranças & Execuções · Obrigações",
    icon: Scale,
    tag: "Rigor Técnico · Prevenção Estratégica · Reparação Integral",
    summary:
      "Atuação preventiva e contenciosa de excelência para confecção de contratos seguros, cobrança de créditos, reparação integral por danos materiais e morais e resolução eficaz de conflitos.",
    details:
      "Relações civis seguras dependem de instrumentos bem estruturados e atuação técnica contundente. A Dra. Rhayssa Lima presta assessoria completa na elaboração de contratos personalizados, recuperação judicial e extrajudicial de créditos, indenizações por danos morais e materiais e defesa dos direitos do consumidor lesado.",
    topics: [
      "Elaboração, revisão criteriosa e rescisão motivada de contratos civis, comerciais e de serviços",
      "Ações indenizatórias por danos materiais, danos morais, danos estéticos e lucros cessantes",
      "Ações de cobrança e execução de títulos de crédito judiciais e extrajudiciais (notas promissórias, cheques)",
      "Notificações extrajudiciais formais e condução de negociações amigáveis céleres para evitar litígios",
      "Ações revisionais de cláusulas contratuais abusivas e descumprimento de obrigações de fazer",
      "Assessoria jurídica preventiva para particulares e empresas em Raul Soares e região",
    ],
    whatsAppText:
      "Olá, Dra. Rhayssa Lima! Gostaria de consultar sobre uma questão Cível / Contratos / Indenização.",
  },
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família, Sucessões & Inventários",
    category: "Inventário em Cartório · Partilha de Bens · Divórcio Consensual · Pensão Alimentícia · Guarda",
    icon: Users,
    tag: "Atendimento Humanizado · Agilidade Extrajudicial · Preservação Familiar",
    summary:
      "Condução acolhedora, ética e resolutiva para inventários extrajudiciais rápidos em cartório de notas, partilhas justas de patrimônio, divórcios e regulamentação responsável de guarda e alimentos.",
    details:
      "Momentos delicados na vida familiar exigem escuta empática e segurança jurídica. A Dra. Rhayssa Lima busca sempre a solução mais leve e econômica para os clientes, viabilizando inventários em cartório concluídos com agilidade, divórcios consensuais e acordos equilibrados que priorizam o bem-estar dos filhos e a paz de espírito dos familiares.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas: partilha célere, econômica e sem desgastes para herdeiros",
      "Inventário Judicial e arrolamento de bens quando houver discordância ou interesse de menores",
      "Divórcio consensual e litigioso, partilha equilibrada de bens e dissolução de união estável",
      "Ações de fixação, revisão, exoneração e execução de pensão alimentícia em atraso",
      "Regulamentação de guarda compartilhada, visitas e convivência familiar equilibrada",
      "Planejamento sucessório patrimonial e doações com reserva de usufruto",
    ],
    whatsAppText:
      "Olá, Dra. Rhayssa Lima! Gostaria de orientação sobre Inventário / Partilha de Bens / Questão de Família.",
  },
  {
    id: "direito-do-consumidor-fraudes",
    title: "Direito do Consumidor & Defesa contra Golpes",
    category: "Golpe do Pix · Fraudes Bancárias · SPC/Serasa · Empréstimos Não Autorizados · Juros Abusivos",
    icon: Shield,
    tag: "Defesa Ativa · Exclusão Liminar · Restituição com Indenização",
    summary:
      "Defesa enérgica contra golpes eletrônicos do Pix, fraudes bancárias, negativas indevidas nos cadastros do SPC/Serasa, contratos abusivos e descontos indevidos em benefícios.",
    details:
      "Vítimas de golpes ou cobranças ilegais precisam de providências técnicas imediatas. O escritório atua com rapidez na solicitação de bloqueio de transações fraudulentas, responsabilização judicial de instituições bancárias por falha de segurança, exclusão urgente de negativações indevidas e requerimento de reparações por danos morais.",
    topics: [
      "Ações judiciais por Golpe do Pix, clonagem de contas e fraudes digitais contra bancos",
      "Cancelamento de empréstimos consignados não autorizados e devolução dos valores debitados em dobro",
      "Exclusão liminar imediata de inscrições indevidas no SPC e Serasa cumulada com indenização por dano moral",
      "Ações contra juros abusivos, tarifas ocultas e cobranças indevidas de serviços não contratados",
      "Ações indenizatórias por cancelamentos, extravio de bagagem e desrespeito de concessionárias",
      "Reparação por vícios de produtos, garantias descumpridas e danos nas relações de consumo",
    ],
    whatsAppText:
      "Olá, Dra. Rhayssa Lima! Fui vítima de fraude / cobrança indevida e preciso de orientação jurídica urgente.",
  },
  {
    id: "assessoria-preventiva",
    title: "Assessoria Jurídica Preventiva & Extrajudicial",
    category: "Consultoria Estratégica · Mediação de Conflitos · Pareceres · Notificações Extrajudiciais",
    icon: Building2,
    tag: "Prevenção Eficaz · Economia de Tempo · Segurança em Negócios",
    summary:
      "Consultoria jurídica consultiva para empreendedores e particulares. Estruturação preventiva de negócios, mediação de acordos amigáveis e orientação antes da assinatura de documentos.",
    details:
      "Prevenir o litígio é o caminho mais seguro e econômico. A Dra. Rhayssa Lima presta consultoria para avaliar riscos antes do fechamento de negócios, elaborando notificações extrajudiciais, conduzindo mediações de conflitos e emitindo pareceres técnicos com explicações didáticas e acessíveis.",
    topics: [
      "Análise de riscos jurídicos antes da assinatura de contratos e compromissos patrimoniais",
      "Elaboração de notificações extrajudiciais estratégicas para cumprimento voluntário de acordos",
      "Mediação e conciliação extrajudicial para resolução amigável de controvérsias",
      "Adequação de rotinas de atendimento e vendas para proteção jurídica de prestadores e comércios",
      "Acompanhamento em cartórios para conferência de minutas de escrituras e registros",
      "Consultoria jurídica contínua e personalizada para pessoas físicas e pequenas empresas",
    ],
    whatsAppText:
      "Olá, Dra. Rhayssa Lima! Gostaria de uma assessoria jurídica preventiva / consultoria extrajudicial.",
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
    name: "Regina Lima",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Orienta o cliente com informações claras e precisas, apresentando competência técnica para atuar nas diversas áreas do direito.",
    content:
      "A dra. Rhayssa é uma excelente advogada; ela orienta o cliente com informações claras e precisas, apresentando competência técnica para atuar nas diversas áreas do direito.",
  },
  {
    name: "Jean Sant'Clair",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "O atendimento é super acolhedor e ela explica tudo com muita clareza, tirando todas as dúvidas sem complicação. Passa uma segurança enorme!",
    content:
      "Profissional maravilhosa! O atendimento é super acolhedor e ela explica tudo com muita clareza, tirando todas as dúvidas sem complicação. Dá para ver que ela entende muito do assunto e passa uma segurança enorme. Recomendo demais!",
  },
  {
    name: "Camila Cota",
    badge: "7 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Uma advogada incrível que sempre pensa em todas as soluções para que o cliente passe pela situação de forma mais leve possível!",
    content:
      "Uma advogada incrível que sempre pensa em todas as soluções para que o cliente passe pela situação de forma mais leve possível! Indico para todos, super atenciosa e profissional!",
  },
  {
    name: "Antonio Marcos dos Reis Junior",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Desde o primeiro atendimento, demonstrou muito conhecimento, profissionalismo e atenção. Sempre muito clara ao explicar cada etapa.",
    content:
      "Excelente profissional! Desde o primeiro atendimento, demonstrou muito conhecimento, profissionalismo e atenção. Sempre foi muito clara ao explicar cada etapa do processo, além de estar disponível para esclarecer minhas dúvidas e me deixar totalmente seguro.",
  },
  {
    name: "Nicole de Paula",
    badge: "5 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Rhayssa foi uma profissional atenciosa desde quando a procurei. Sanou todas as minhas dúvidas e me explicou sem problemas todo o processo.",
    content:
      "Rhayssa foi uma profissional atenciosa desde quando a procurei. Sanou todas as minhas dúvidas e me explicou sem problemas todo o processo. Recomendo pra todo mundo!",
  },
  {
    name: "Leticia Juste",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Fiquei muito satisfeita com o atendimento e com todo o suporte durante o processo. Muito atenciosa, responsável e competente!",
    content:
      "Excelente profissional! Fiquei muito satisfeita com o atendimento e com todo o suporte durante o processo. Ela foi muito atenciosa, responsável e competente, sempre me orientando de forma clara e segura. Graças ao trabalho dela, consegui alcançar meu objetivo!",
  },
  {
    name: "Rute Lima de Souza",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Ótima profissional, resolveu meu caso com total dedicação e competência.",
    content:
      "Ótima profissional, resolveu meu caso com total dedicação e competência.",
  },
  {
    name: "Jéssica Dias Bitencourt",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Ótima advogada, respondeu todas as minhas dúvidas de uma forma clara, e foi super profissional durante todo o processo.",
    content:
      "Ótima advogada, respondeu todas as minhas dúvidas de uma forma clara, e foi super profissional durante todo o processo.",
  },
  {
    name: "Lucas Trevenzoli",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Excelente advogada! Muito profissional, atenciosa e competente.",
    content:
      "Excelente advogada! Muito profissional, atenciosa e competente.",
  },
  {
    name: "Ana Paula Vilela Duarte",
    badge: "5 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Ótima profissional! Muito atenciosa e esclarecedora em cada orientação.",
    content:
      "Ótima profissional! Muito atenciosa e esclarecedora em cada orientação prestada.",
  },
  {
    name: "Stefani Trevenzolli",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Excelente profissional e humana, atenciosa e dedicada a cada detalhe do caso.",
    content:
      "Excelente profissional e humana, com atendimento acolhedor e escuta atenta.",
  },
  {
    name: "Maria Clara Ramos",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Ótimo atendimento. Profissional super competente e comprometida!",
    content:
      "Ótimo atendimento. Profissional super competente e comprometida em buscar os melhores resultados!",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona o primeiro contato com a Dra. Rhayssa Lima de Souza Oliveira?",
    answer:
      "O primeiro contato é simples, seguro e sigiloso pelo WhatsApp oficial do escritório. Você envia um resumo da sua situação e documentos que possuir. A Dra. Rhayssa analisa os fatos com rigor técnico e didática transparente, esclarecendo dúvidas sem termos jurídicos complicados e apresentando o caminho mais assertivo.",
  },
  {
    question: "O escritório atende apenas em Raul Soares ou também online para outras cidades?",
    answer:
      "A Dra. Rhayssa Lima possui sede física estruturada em Raul Soares - MG e atende também clientes de toda a Zona da Mata, Vale do Rio Doce, Belo Horizonte e qualquer lugar do Brasil de forma 100% digital. Reuniões por videochamada, envio criptografado de arquivos e assinatura eletrônica garantem total agilidade sem você precisar sair de casa.",
  },
  {
    question: "O que fazer em caso de prisão em flagrante ou emergência criminal?",
    answer:
      "O tempo é precioso e as primeiras horas são fundamentais para assegurar a integridade dos direitos constitucionais. Em situações de flagrante, mandados de prisão ou intimações para comparecer à delegacia, entre em contato imediatamente com o escritório pelo WhatsApp ou telefone para atuação e acompanhamento de urgência 24 horas.",
  },
  {
    question: "Como funciona a regularização de imóveis ou terrenos sem escritura (Usucapião)?",
    answer:
      "Imóveis adquiridos por contrato de gaveta, recibos ou posse antiga podem ser regularizados de forma célere através da Usucapião Extrajudicial, realizada diretamente no Cartório de Registro de Imóveis, sem a necessidade de um longo processo judicial. Nosso escritório cuida de toda a documentação, plantas, memoriais e notificações até a expedição da matrícula definitiva em seu nome.",
  },
  {
    question: "Quais são as vantagens de fazer o inventário em cartório (extrajudicial)?",
    answer:
      "Quando todos os herdeiros são maiores de idade, capazes e concordam com a divisão dos bens, o inventário extrajudicial em cartório de notas é substancialmente mais rápido, econômico e tranquilo do que um processo na Justiça, podendo ser finalizado em poucas semanas com a assistência jurídica do nosso escritório.",
  },
  {
    question: "Quais documentos preciso apresentar na primeira análise jurídica?",
    answer:
      "Inicialmente, basta um documento oficial com foto (RG ou CNH), comprovante de endereço e os documentos específicos da sua demanda (boletim de ocorrência, contratos, comprovantes de posse ou documentos do imóvel, comprovantes de transferências ou extratos). Durante nossa primeira conversa, a Dra. Rhayssa instrui com clareza o que é indispensável.",
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
          dark ? "text-white" : "text-[#1c070a]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            dark ? "text-[#f5d0cb]" : "text-[#5c3d44]"
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
      <main className="min-h-screen bg-[#16060a] text-[#fcf8f6] selection:bg-[#8a1b2c] selection:text-white">
        {/* TOP ANNOUNCEMENT BAR (LUXURY WINE NOIR & ROSE-WINE SHINE) */}
        <div className="border-b border-[#8a1b2c]/30 bg-[#0f0305] py-2 text-xs">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d46f73] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#f5d0cb]" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                Dra. Rhayssa Lima de Souza Oliveira · OAB/MG 247.321 · Raul Soares - MG ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#f5d0cb]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#d46f73] text-[#d46f73]" />
                <span className="font-bold text-white">5,0 ★</span> (15 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-[#8a1b2c]/50 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de consultar sobre a situação do meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#f5d0cb] sm:inline-flex"
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
              ? "border-b border-[#8a1b2c]/40 bg-[#16060a]/95 py-3 shadow-xl shadow-black/85 backdrop-blur-md"
              : "border-b border-[#8a1b2c]/25 bg-[#16060a]/90 py-4 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Brand Logo (Natural presentation without box) */}
            <a
              href="#"
              className="group flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95"
              aria-label="Rhayssa Lima de Souza Oliveira - Advogada - Início"
            >
              {/* Large Vivid 3D Emblem */}
              <div className="relative shrink-0">
                <Image
                  src={LOGO_EMBLEM_VIVID_SRC}
                  alt="Emblema Rhayssa Lima de Souza Oliveira"
                  width={160}
                  height={120}
                  className="h-11 sm:h-12 md:h-13 w-auto object-contain drop-shadow-[0_2px_12px_rgba(238,148,146,0.55)] transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Crisp High-Contrast Brand Typography */}
              <div className="flex flex-col justify-center">
                <span className="font-cinzel text-sm sm:text-base md:text-[1.05rem] font-bold tracking-[0.06em] text-white uppercase leading-none drop-shadow-sm transition-colors group-hover:text-[#f5d0cb]">
                  Rhayssa Lima
                </span>
                <span className="font-cinzel text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#f5d0cb] uppercase leading-tight mt-0.5">
                  de Souza Oliveira
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-px w-4 sm:w-5 bg-gradient-to-r from-[#ee9492] to-transparent" />
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#ee9492] uppercase leading-none">
                    Advogada · OAB/MG 247.321
                  </span>
                </div>
              </div>
            </a>

            {/* Center: Desktop Navigation (Spacious and cleanly separated) */}
            <nav className="hidden items-center gap-5 xl:gap-7 xl:flex">
              <a href="#atuacao" className="nav-link-dark text-[11px] whitespace-nowrap">
                Atuação
              </a>
              <a href="#sobre" className="nav-link-dark text-[11px] whitespace-nowrap">
                Sobre a Dra. Rhayssa
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

            {/* Right Action: WhatsApp CTA (Zero overlap, dedicated flex container) */}
            <div className="flex shrink-0 items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de consultar sobre o meu caso.")}
                target="_blank"
                variant="wine"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-white" />
                <span className="hidden 2xl:inline">Atendimento WhatsApp</span>
                <span className="2xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-[#8a1b2c]/50 bg-[#1d090e] text-[#fcf8f6] transition-colors hover:border-[#f5d0cb] hover:text-white xl:hidden cursor-pointer"
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
                className="border-b border-[#8a1b2c]/40 bg-[#0f0305] px-5 py-6 xl:hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#8a1b2c]/35">
                    <Image
                      src={LOGO_EMBLEM_VIVID_SRC}
                      alt="Emblema Dra. Rhayssa Lima"
                      width={120}
                      height={90}
                      className="h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(238,148,146,0.5)]"
                    />
                    <div className="flex flex-col">
                      <span className="font-cinzel text-base font-bold tracking-wider text-white uppercase leading-tight">
                        Rhayssa Lima
                      </span>
                      <span className="font-cinzel text-[10px] font-semibold tracking-[0.14em] text-[#f5d0cb] uppercase leading-tight mt-0.5">
                        de Souza Oliveira
                      </span>
                      <span className="text-[9px] font-bold tracking-[0.18em] text-[#ee9492] uppercase mt-1">
                        Advogada · OAB/MG 247.321
                      </span>
                    </div>
                  </div>
                  <a
                    href="#atuacao"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f5d0cb] uppercase transition-colors hover:text-white"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#d46f73]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f5d0cb] uppercase transition-colors hover:text-white"
                  >
                    <span>Sobre a Dra. Rhayssa Lima</span>
                    <ArrowRight size={14} className="text-[#d46f73]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f5d0cb] uppercase transition-colors hover:text-white"
                  >
                    <span>Diferenciais</span>
                    <ArrowRight size={14} className="text-[#d46f73]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f5d0cb] uppercase transition-colors hover:text-white"
                  >
                    <span>Avaliações Google (5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#d46f73]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f5d0cb] uppercase transition-colors hover:text-white"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#d46f73]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f5d0cb] uppercase transition-colors hover:text-white"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-[#d46f73]" />
                  </a>

                  <div className="pt-4 border-t border-[#8a1b2c]/35">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de agendar um atendimento jurídico.")}
                      target="_blank"
                      variant="wine"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com a Dra. Rhayssa</span>
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
        <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#16060a]">
          {/* Subtle Ambient Velvet Wine & Rose Luster Radial Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-radial from-[#8a1b2c]/22 via-[#5a0e19]/12 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-96 w-96 rounded-full bg-[#32121a]/60 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#8a1b2c]/45 bg-[#1d090e] px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-white shadow-sm">
                    <span className="size-1.5 rounded-full bg-[#f5d0cb] animate-pulse" />
                    Dra. Rhayssa Lima de Souza Oliveira · OAB/MG 247.321 · Raul Soares - MG
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.14] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
                >
                  Advocacia Estratégica, Rigor Técnico e{" "}
                  <span className="bg-gradient-to-r from-white via-[#f5d0cb] to-[#ee9492] bg-clip-text text-transparent">
                    Atendimento Humanizado
                  </span>{" "}
                  para Proteger os Seus Direitos.
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-[#f5d0cb] sm:text-lg"
                >
                  Com nota máxima <strong className="text-white font-semibold">5,0 ★ no Google</strong> e reputação consolidada por sua clareza didática e empatia, a <strong className="text-white font-semibold">Dra. Rhayssa Lima de Souza Oliveira</strong> atua de forma resolutiva em <strong className="text-white font-semibold">Direito Criminal, Imobiliário & Regularização de Imóveis e Direito Cível</strong> — com atendimento presencial em <strong className="text-white font-semibold">Raul Soares - MG</strong> e online para todo o Brasil.
                </motion.p>

                {/* Direct Trust Highlights */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex items-start gap-3 rounded-xl border border-[#8a1b2c]/45 bg-[#260d14]/90 p-3.5 backdrop-blur-sm"
                >
                  <Award size={18} className="text-[#ee9492] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#fcf8f6] leading-relaxed">
                    <strong className="text-white font-bold">Reconhecimento unânime de clientes reais:</strong> &ldquo;O atendimento é super acolhedor, explica tudo com clareza, sem complicação e passa uma segurança enorme.&rdquo; (Google Reviews 5,0 ★)
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de uma consultoria jurídica sobre o meu caso.")}
                    target="_blank"
                    variant="wine"
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

              {/* Right Column: Hero Visual Frame (Dra. Rhayssa Lima portrait) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Metallic Border Box */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#8a1b2c]/55 bg-[#1d090e] p-2 shadow-2xl shadow-black/95">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#0f0305]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Rhayssa Lima de Souza Oliveira - Advogada OAB/MG 247.321 em Raul Soares - MG"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#16060a] via-transparent to-transparent opacity-65" />
                    </div>

                    {/* Subtle Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-[#8a1b2c]/50 bg-[#0f0305]/95 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-white">
                            Dra. Rhayssa Lima de Souza Oliveira
                          </p>
                          <p className="text-[11px] text-[#f5d0cb]">
                            Advogada · OAB/MG 247.321
                          </p>
                        </div>
                        <span className="rounded-md border border-[#8a1b2c]/45 bg-[#260d14] px-2.5 py-1 text-[10px] font-bold text-[#f5d0cb]">
                          Raul Soares · MG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 5.0 Rating) */}
                  <div className="absolute -top-5 -left-5 hidden rounded-xl border border-[#8a1b2c]/50 bg-[#1d090e]/95 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#260d14] border border-[#8a1b2c]/40">
                      <GoogleIcon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-[#d46f73] text-[#d46f73]"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-white mt-0.5">
                        5,0 no Google · 15 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Especialidade) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-[#8a1b2c]/50 bg-[#1d090e]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <Scale size={16} className="text-[#ee9492]" />
                    <span className="text-xs font-bold tracking-wide text-white">
                      Criminal · Imobiliário · Cível ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN DOBRA 1 (DARK) */}
            <div className="mt-14 border-t border-[#8a1b2c]/30 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-[#8a1b2c]/35 bg-[#1d090e]/85 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    5,0 ★
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-[#f5d0cb]">15 avaliações unânimes 5 estrelas</p>
                </div>

                <div className="rounded-xl border border-[#8a1b2c]/35 bg-[#1d090e]/85 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Agilidade
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Defesa Penal 24h</p>
                  <p className="text-[11px] text-[#f5d0cb]">Pronta resposta em flagrantes</p>
                </div>

                <div className="rounded-xl border border-[#8a1b2c]/35 bg-[#1d090e]/85 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Humanizado
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Atendimento Acolhedor</p>
                  <p className="text-[11px] text-[#f5d0cb]">Didática clara e sem complicações</p>
                </div>

                <div className="rounded-xl border border-[#8a1b2c]/35 bg-[#1d090e]/85 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Segurança
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Regularização de Imóveis</p>
                  <p className="text-[11px] text-[#f5d0cb]">Proteção definitiva do seu patrimônio</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: PILARES & ÁREAS DE ATUAÇÃO (LIGHT ALABASTER)    */}
        {/* ======================================================== */}
        <section id="atuacao" className="border-t border-[#ebdccd] bg-[#fcfaf7] text-[#1c070a] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="Especialidades & Pilares de Atuação"
                description="Atuação jurídica qualificada e resolutiva para defender sua liberdade, regularizar seu patrimônio imobiliário e garantir seus direitos com firmeza técnica."
              >
                Atuação Jurídica Estratégica e Resolutiva
              </Heading>

              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de consultar sobre a minha situação jurídica.")}
                target="_blank"
                variant="wine"
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
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#ebdccd] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#8a1b2c] hover:shadow-lg hover:shadow-[#8a1b2c]/10"
                  >
                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#f6f0e8] text-[#8a1b2c] border border-[#ebdccd] transition-colors group-hover:bg-[#8a1b2c] group-hover:text-white">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#f6f0e8] px-3 py-1 text-[10px] font-bold text-[#8a1b2c] uppercase tracking-wider">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-[#1c070a] group-hover:text-[#8a1b2c] transition-colors">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#8a1b2c]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-[#5c3d44]">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#ebdccd] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex w-full items-center justify-between text-xs font-bold text-[#8a1b2c] transition-colors hover:text-[#1c070a] cursor-pointer"
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
        {/* DOBRA 3: SOBRE A ADVOGADA & DEDICAÇÃO (DARK LUXURY)      */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-[#8a1b2c]/30 bg-[#0f0305] py-20 lg:py-28 text-[#fcf8f6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Dra. Rhayssa Lima Portrait (Single, Imposing & Uncropped) */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Frame with luxury wine/rose border */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#8a1b2c]/55 bg-[#1d090e] p-2.5 shadow-2xl shadow-black/95">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#0f0305]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Rhayssa Lima de Souza Oliveira - Advogada OAB/MG 247.321 em Raul Soares - MG"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0305] via-[#0f0305]/20 to-transparent opacity-85" />

                      {/* Overlay Badge at Bottom of Photo */}
                      <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-[#8a1b2c]/50 bg-[#16060a]/95 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-serif text-sm font-bold text-white">
                              Dra. Rhayssa Lima de Souza Oliveira
                            </p>
                            <p className="text-[11px] text-[#f5d0cb] mt-0.5">
                              Advogada · OAB/MG 247.321
                            </p>
                          </div>
                          <span className="rounded-md border border-[#8a1b2c]/40 bg-[#260d14] px-2.5 py-1 text-[10px] font-bold text-[#ee9492]">
                            Raul Soares · MG
                          </span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-[#8a1b2c]/30 flex items-center justify-between text-[10px] text-[#f5d0cb]/90">
                          <span>Atendimento Humanizado & Rigor Técnico</span>
                          <span className="text-[#25D366] font-semibold">Plantão 24h</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Pill */}
                  <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-xl border border-[#8a1b2c]/50 bg-[#1d090e]/95 px-3.5 py-2 shadow-xl backdrop-blur-md">
                    <Star size={13} className="fill-[#d46f73] text-[#d46f73]" />
                    <span className="text-[11px] font-bold text-white">
                      5,0 no Google · 15 Avaliações
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre a Profissional & O Escritório"
                  dark={true}
                  description="Advocacia pautada na empatia, no rigor jurídico e no compromisso inegociável de descomplicar o processo para o cliente."
                >
                  Dra. Rhayssa Lima: Clareza, Rigor & Atendimento Acolhedor
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#f5d0cb]">
                  <p>
                    Com registro profissional <strong className="text-white font-semibold">OAB/MG 247.321</strong> e sede na comarca de <strong className="text-white font-semibold">Raul Soares - MG</strong>, a <strong className="text-white font-semibold">Dra. Rhayssa Lima de Souza Oliveira</strong> consolidou sua atuação jurídica destacando-se pela competência técnica refinada e pelo acolhimento genuíno prestado a cada cliente.
                  </p>
                  <p>
                    Especialista nas áreas de <strong className="text-white font-semibold">Direito Criminal, Imobiliário & Regularização de Imóveis e Direito Cível</strong>, sua atuação é guiada pelo princípio de que todo cliente merece compreender exatamente cada fase do seu processo, sem rodeios ou juridiquês incompreensível.
                  </p>
                  <p>
                    Quem confia em seu trabalho ressalta constantemente a postura atenciosa, a agilidade na resposta e a serenidade transmitida até nas situações mais complexas e urgentes. Cada causa é conduzida com dedicação artesanal e foco incansável na melhor solução jurídica.
                  </p>
                </div>

                {/* 4 Highlights */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-[#8a1b2c]/35 bg-[#1d090e] p-4">
                    <HeartHandshake size={20} className="text-[#ee9492] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Atendimento Acolhedor
                      </h4>
                      <p className="mt-1 text-[11px] text-[#f5d0cb]">
                        Escuta atenta e sensível para entender a dor do cliente e propor a saída mais leve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#8a1b2c]/35 bg-[#1d090e] p-4">
                    <BadgeCheck size={20} className="text-[#ee9492] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Competência Técnica
                      </h4>
                      <p className="mt-1 text-[11px] text-[#f5d0cb]">
                        Domínio seguro da legislação, com peças processuais fundamentadas e estratégicas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#8a1b2c]/35 bg-[#1d090e] p-4">
                    <FileText size={20} className="text-[#ee9492] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Clareza & Transparência
                      </h4>
                      <p className="mt-1 text-[11px] text-[#f5d0cb]">
                        Explicação de cada passo sem complicar, mantendo o cliente seguro e informado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#8a1b2c]/35 bg-[#1d090e] p-4">
                    <Sparkles size={20} className="text-[#ee9492] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Agilidade Resolutiva
                      </h4>
                      <p className="mt-1 text-[11px] text-[#f5d0cb]">
                        Prioridade na resolução célere, com atuação em cartório e firmeza judicial.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de conversar com você sobre o meu caso.")}
                    target="_blank"
                    variant="wine"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com a Dra. Rhayssa Lima</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#f5d0cb] transition-colors hover:text-white"
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
        <section id="diferenciais" className="border-t border-[#ebdccd] bg-[#f6f0e8] text-[#1c070a] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow justify-center mb-3">
                Por que Escolher a Dra. Rhayssa Lima
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1c070a] sm:text-4xl">
                O Padrão de Confiança com Nota Máxima 5,0 ★ no Google
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5c3d44]">
                Qualidades comprovadas por quem já vivenciou o atendimento e teve suas dúvidas sanadas e seus problemas solucionados com segurança.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#ebdccd] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#8a1b2c] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fcfaf7] text-[#8a1b2c] border border-[#ebdccd]">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1c070a]">
                  Competência Técnica
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c3d44]">
                  Informações precisas, fundamentação sólida da lei e atuação segura perante os juízos e cartórios.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebdccd] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#8a1b2c] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fcfaf7] text-[#8a1b2c] border border-[#ebdccd]">
                  <Heart size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1c070a]">
                  Atendimento Acolhedor
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c3d44]">
                  Empatia e cuidado em cada contato, buscando sempre caminhos para que a situação seja enfrentada com leveza.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebdccd] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#8a1b2c] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fcfaf7] text-[#8a1b2c] border border-[#ebdccd]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1c070a]">
                  Explicação Clara
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c3d44]">
                  Tira todas as dúvidas sem complicação, explicando cada etapa do processo de forma transparente e compreensível.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebdccd] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#8a1b2c] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#fcfaf7] text-[#8a1b2c] border border-[#ebdccd]">
                  <Clock size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1c070a]">
                  Resolução & Agilidade
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c3d44]">
                  Acompanhamento próximo, respostas rápidas no WhatsApp e dedicação até a solução definitiva do caso.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de esclarecer algumas dúvidas sobre o meu caso.")}
                target="_blank"
                variant="wine"
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
        <section id="depoimentos" className="border-t border-[#8a1b2c]/30 bg-[#16060a] py-20 lg:py-28 text-[#fcf8f6]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="eyebrow-dark mb-3.5">
                  Avaliações Verificadas no Google
                </span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  A Opinião de Quem Confia na Dra. Rhayssa Lima
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#d46f73] text-[#d46f73]"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">5,0 de 5,0</span>
                  <span className="text-xs text-[#f5d0cb]">
                    · 15 avaliações unânimes cinco estrelas no Google Meu Negócio
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#8a1b2c]/45 bg-[#1d090e] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:border-[#f5d0cb] hover:bg-[#260d14]"
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
                  className="relative flex flex-col justify-between rounded-2xl border border-[#8a1b2c]/35 bg-[#1d090e] p-6 shadow-md transition-all duration-300 hover:border-[#ee9492] hover:bg-[#260d14]"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#d46f73] text-[#d46f73]"
                        />
                      ))}
                    </div>

                    {/* Highlight Quote */}
                    <p className="mt-3 font-serif text-sm font-bold text-white leading-snug">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    {/* Full Review Text */}
                    <p className="mt-3 text-xs leading-relaxed text-[#f5d0cb]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#8a1b2c]/35 pt-4">
                    <p className="font-serif text-xs font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#ee9492]">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#8a1b2c]/45 bg-[#1d090e] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-white sm:text-xl">
                Precisa de orientação jurídica profissional e segura?
              </h3>
              <p className="mt-2 text-xs text-[#f5d0cb] max-w-xl mx-auto">
                Não enfrente dúvidas ou litígios sem o respaldo de quem atua com competência, rigor, transparência e acolhimento humano.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Rhayssa! Li as avaliações no site e gostaria de conversar com você sobre o meu caso.")}
                  target="_blank"
                  variant="wine"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com a Dra. Rhayssa Lima de Souza Oliveira Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO (LIGHT)             */}
        {/* ======================================================== */}
        <section className="border-t border-[#ebdccd] bg-[#fcfaf7] text-[#1c070a] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow justify-center mb-3">
                Processo Transparente
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1c070a] sm:text-4xl">
                Como Funciona o Seu Atendimento
              </h2>
              <p className="mt-3 text-sm text-[#5c3d44]">
                Passo a passo simples, didático e acolhedor desde o primeiro contato até a solução do seu problema jurídico.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#ebdccd] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#8a1b2c] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#8a1b2c]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1c070a]">
                  Contato no WhatsApp
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c3d44]">
                  Envie sua dúvida ou descreva brevemente seu caso para receber a primeira orientação direta da Dra. Rhayssa.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebdccd] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#8a1b2c] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#8a1b2c]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1c070a]">
                  Análise Detalhada
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c3d44]">
                  Avaliamos documentos, contratos, escrituras ou ocorrências policiais com rigor técnico para definir a viabilidade jurídica.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebdccd] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#8a1b2c] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#8a1b2c]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1c070a]">
                  Estratégia Clara
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c3d44]">
                  Explicamos a rota mais rápida e segura — seja via acordo extrajudicial, procedimento em cartório ou ação judicial fundamentada.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebdccd] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#8a1b2c] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#8a1b2c]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1c070a]">
                  Acompanhamento Próximo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c3d44]">
                  Você recebe atualizações constantes do andamento, com suporte ágil para sanar qualquer dúvida até a conclusão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ (DARK)                 */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-[#8a1b2c]/30 bg-[#0f0305] py-20 lg:py-28 text-[#fcf8f6]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow-dark mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-[#f5d0cb]">
                Respostas diretas e didáticas sobre atendimento jurídico, processos criminais, regularização de imóveis e inventários.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-[#8a1b2c]/35 bg-[#1d090e] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-white transition-colors hover:text-[#f5d0cb] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#ee9492]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#ee9492]" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-[#8a1b2c]/25 px-5 pt-3 pb-5 text-xs leading-relaxed text-[#f5d0cb]"
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
              <p className="text-xs text-[#f5d0cb]">
                Sua dúvida específica não está listada acima?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de esclarecer uma dúvida que não encontrei no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Pergunte diretamente à Dra. Rhayssa Lima no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDE & CONTATO (LIGHT)            */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#ebdccd] bg-[#fcfaf7] text-[#1c070a] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info (LIGHT STYLING) */}
              <div className="lg:col-span-5">
                <span className="eyebrow mb-3.5">Sede & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1c070a] sm:text-4xl">
                  Estamos Prontos para Atender Você
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5c3d44]">
                  Agende seu atendimento presencial em Raul Soares - MG, ou realize sua consulta de forma 100% online com total privacidade, agilidade e conforto.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#ebdccd] bg-[#f6f0e8] text-[#8a1b2c]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1c070a] uppercase tracking-wider">
                        Endereço
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#5c3d44]">
                        {ADDRESS_TEXT}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#8a1b2c] font-semibold hover:underline block mt-1"
                      >
                        Ver localização e rotas no Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#ebdccd] bg-[#f6f0e8] text-[#8a1b2c]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1c070a] uppercase tracking-wider">
                        Telefone & WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-[#5c3d44]">
                        Celular / WhatsApp: <strong className="text-[#1c070a]">{PHONE_DISPLAY}</strong>
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de agendar uma consulta jurídica.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#8a1b2c] hover:underline block mt-1"
                      >
                        Clique para enviar mensagem direta no WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#ebdccd] bg-[#f6f0e8] text-[#8a1b2c]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1c070a] uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="mt-1 text-xs text-[#5c3d44]">
                        Segunda a Sexta: 08:30 às 18:00
                      </p>
                      <p className="text-[11px] text-[#8a1b2c]">
                        Plantão criminal 24 horas para flagrantes e urgências penais.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#ebdccd] bg-[#f6f0e8] text-[#8a1b2c]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1c070a] uppercase tracking-wider">
                        E-mail de Contato
                      </p>
                      <a
                        href={`mailto:${EMAIL_CONTACT}`}
                        className="mt-1 text-xs text-[#5c3d44] hover:text-[#8a1b2c] block font-semibold"
                      >
                        {EMAIL_CONTACT}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#ebdccd] bg-[#f6f0e8] text-[#8a1b2c]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1c070a] uppercase tracking-wider">
                        Redes Sociais & Perfil
                      </p>
                      <div className="mt-1 flex flex-col gap-1 text-xs">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5c3d44] hover:text-[#1c070a]"
                        >
                          Instagram: <span className="font-bold">{INSTAGRAM_HANDLE}</span>
                        </a>
                        <a
                          href={GOOGLE_SEARCH_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8a1b2c] hover:underline"
                        >
                          Perfil Google: Rhayssa Lima de Souza Oliveira - Advogada (5,0 ★)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card (LIGHT STYLING) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#ebdccd] bg-white p-8 shadow-xl shadow-[#8a1b2c]/10">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#8a1b2c]">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-[#1c070a] sm:text-3xl">
                    Inicie seu Atendimento com a Dra. Rhayssa Lima
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5c3d44]">
                    Selecione a área da sua necessidade para ser direcionado(a) com a mensagem adequada ao WhatsApp oficial:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá, Dra. Rhayssa! Preciso de atendimento em Direito Criminal / Defesa Penal.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#ebdccd] bg-[#f6f0e8] p-4 text-xs font-bold text-[#1c070a] transition-all hover:border-[#8a1b2c] hover:bg-[#8a1b2c]/10"
                    >
                      <span>Direito Criminal & Flagrantes</span>
                      <ArrowRight size={14} className="text-[#8a1b2c]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de consultar sobre Regularização de Imóveis / Usucapião.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#ebdccd] bg-[#f6f0e8] p-4 text-xs font-bold text-[#1c070a] transition-all hover:border-[#8a1b2c] hover:bg-[#8a1b2c]/10"
                    >
                      <span>Regularização de Imóveis & Usucapião</span>
                      <ArrowRight size={14} className="text-[#8a1b2c]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de orientação sobre Direito Cível / Contratos / Indenizações.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#ebdccd] bg-[#f6f0e8] p-4 text-xs font-bold text-[#1c070a] transition-all hover:border-[#8a1b2c] hover:bg-[#8a1b2c]/10"
                    >
                      <span>Direito Cível & Contratos</span>
                      <ArrowRight size={14} className="text-[#8a1b2c]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de orientações sobre Inventário / Partilha de Bens / Família.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#ebdccd] bg-[#f6f0e8] p-4 text-xs font-bold text-[#1c070a] transition-all hover:border-[#8a1b2c] hover:bg-[#8a1b2c]/10"
                    >
                      <span>Inventários & Família</span>
                      <ArrowRight size={14} className="text-[#8a1b2c]" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-[#ebdccd] pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de conversar com você sobre a minha situação jurídica.")}
                      target="_blank"
                      variant="wine"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com a Dra. Rhayssa Lima</span>
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
        <footer className="border-t border-[#8a1b2c]/30 bg-[#0f0305] pt-16 pb-12 text-[#f5d0cb]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Rhayssa Lima de Souza Oliveira Advogada OAB/MG 247.321"
                    width={360}
                    height={177}
                    className="h-16 sm:h-20 md:h-22 w-auto max-w-[280px] sm:max-w-[340px] object-contain object-left drop-shadow-[0_2px_16px_rgba(238,148,146,0.35)]"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#f5d0cb] max-w-md">
                  ⚖️ Rhayssa Lima de Souza Oliveira — Advogada. Inscrição OAB/MG 247.321. Atuação especializada em Direito Criminal, Imobiliário & Regularização de Imóveis e Direito Cível. Atendimento presencial em Raul Soares - MG e assessoria jurídica digital para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#8a1b2c]/45 bg-[#1d090e] text-[#f5d0cb] transition-colors hover:border-white hover:text-white"
                    aria-label="Instagram da Dra. Rhayssa Lima"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Rhayssa!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#8a1b2c]/45 bg-[#1d090e] text-[#f5d0cb] transition-colors hover:border-white hover:text-white"
                    aria-label="WhatsApp da Dra. Rhayssa Lima"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#8a1b2c]/45 bg-[#1d090e] text-[#f5d0cb] transition-colors hover:border-white hover:text-white"
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
                      Sobre a Dra. Rhayssa
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="footer-link">
                      Diferenciais do Atendimento
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
                      Sede em Raul Soares - MG
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & OAB Column */}
              <div className="lg:col-span-4">
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                  Informações Institucionais & OAB
                </p>
                <p className="mt-4 text-[11px] leading-relaxed text-[#f5d0cb]/80">
                  Este website possui caráter estritamente institucional e informativo, em estrita observância ao Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não visa à captação indevida de clientela nem substitui consulta jurídica formal.
                </p>
                <div className="mt-4 rounded-lg border border-[#8a1b2c]/35 bg-[#1d090e] p-3 text-[11px] text-[#f5d0cb]">
                  <p className="font-bold text-white">
                    Rhayssa Lima de Souza Oliveira · OAB/MG 247.321
                  </p>
                  <p className="mt-0.5 text-[#ee9492]">
                    {ADDRESS_TEXT}
                  </p>
                  <p className="mt-0.5 text-xs text-[#f5d0cb]/80">
                    Telefone / WhatsApp: {PHONE_DISPLAY}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#8a1b2c]/30 pt-8 text-center text-[11px] sm:flex-row sm:text-left">
              <p>
                © {new Date().getFullYear()} RHAYSSA LIMA DE SOUZA OLIVEIRA · ADVOGADA · OAB/MG 247.321. Todos os direitos reservados.
              </p>
              <p className="text-[#ee9492]">
                Raul Soares · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá, Dra. Rhayssa! Gostaria de tirar uma dúvida sobre o meu caso.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Rhayssa Lima"
            className="group flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-black text-white shadow-xl shadow-black/85 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          >
            <WhatsAppIcon size={19} />
            <span className="hidden sm:inline tracking-wide font-bold">
              Falar com a Dra. Rhayssa
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
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#8a1b2c]/55 bg-[#16060a] p-6 text-white shadow-2xl sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg border border-[#8a1b2c]/45 bg-[#1d090e] text-[#f5d0cb] hover:border-white hover:text-white cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2.5 text-xs font-bold text-[#ee9492] uppercase tracking-wider">
                  <Image
                    src={LOGO_EMBLEM_SRC}
                    alt="Emblema OAB/MG 247.321"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                  <span>Especialidade Jurídica</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {selectedPractice.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#d46f73]">
                  {selectedPractice.category}
                </p>

                <p className="mt-4 text-xs leading-relaxed text-[#f5d0cb] sm:text-sm">
                  {selectedPractice.details}
                </p>

                <div className="mt-6 border-t border-[#8a1b2c]/35 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Principais Demandas & Procedimentos Atendidos:
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedPractice.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-[#f5d0cb]"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[#ee9492] shrink-0 mt-0.5"
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
                    variant="wine"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Consultar Dra. Rhayssa nesta Área</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setSelectedPractice(null)}
                    className="w-full rounded-lg border border-[#8a1b2c]/45 bg-[#1d090e] px-5 py-3 text-xs font-bold text-[#f5d0cb] hover:bg-[#260d14] hover:text-white sm:w-auto cursor-pointer"
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
