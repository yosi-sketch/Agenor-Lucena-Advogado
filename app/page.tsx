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
  AlertTriangle,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537991869585";
const PHONE_DISPLAY = "(37) 99186-9585";
const EMAIL_CONTACT = "contato@jessicabernardes.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/jessicaobernardes.adv";
const INSTAGRAM_HANDLE = "@jessicaobernardes.adv";

const ADDRESS_TEXT =
  "R. Cel. José Tomás, 200 - Centro, Luz - MG, 35595-000, Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=J%C3%A9ssica+Oliveira+Bernardes+Nunes+%E2%80%94+Advogada%0ALuz+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/jessica-bernardes-logo-oficial.png";
const LOGO_WHITE_SRC = "/jessica-bernardes-logo-oficial.png";
const LOGO_EMBLEM_SRC = "/jessica-bernardes-emblem-balanca.png";
const FOTO_HERO_SRC = "/jessica-bernardes-hero-foto.jpg";
const FOTO_ABOUT_SRC = "/jessica-bernardes-about-foto.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Jéssica Bernardes! Gostaria de uma orientação jurídica sobre o meu caso.";
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
    id: "direito-do-consumidor-golpes",
    title: "Direito do Consumidor & Defesa contra Golpes",
    category: "Golpe do Pix · Fraudes Bancárias · SPC/Serasa · Planos de Saúde · Cobranças Abusivas",
    icon: Shield,
    tag: "Defesa Ativa · Indenizações por Danos Morais · Recuperação de Valores",
    summary:
      "Atuação implacável contra golpes financeiros, fraudes do Pix, clonagem de cartões, descontos indevidos em aposentadorias, negativações injustas e abusos de bancos, operadoras e planos de saúde.",
    details:
      "Relações de consumo desiguais e o avanço de golpes digitais exigem resposta jurídica rápida e enérgica. Conforme reconhecido por clientes atendidos em momentos de angústia após serem vítimas de fraudes, a Dra. Jéssica Bernardes atua com dedicação integral para suspender cobranças ilegais, retirar restrições no SPC/Serasa, buscar a devolução de quantias debitadas indevidamente e exigir as devidas reparações por danos morais.",
    topics: [
      "Ações judiciais por Golpe do Pix, fraudes eletrônicas, clonagem e empréstimos consignados não autorizados",
      "Exclusão liminar de negativação indevida nos cadastros de inadimplentes (SPC e Serasa) com pedido de indenização",
      "Combate a juros abusivos, tarifas bancárias indevidas e descontos não autorizados em benefícios do INSS",
      "Defesa do consumidor contra planos de saúde: negativas de cobertura médica, cirurgias e remédios de alto custo",
      "Ações contra companhias aéreas por atrasos excessivos, cancelamento de voos e extravio de bagagens",
      "Reparação por vícios ocultos e defeitos em produtos, cancelamento de compras enganosas e restituição em dobro",
    ],
    whatsAppText:
      "Olá, Dra. Jéssica Bernardes! Fui vítima de um golpe / cobrança indevida e preciso de orientação jurídica urgente.",
  },
  {
    id: "direito-civel-contratos",
    title: "Direito Cível, Contratos & Resolução de Conflitos",
    category: "Resolução & Prevenção · Contratos Seguros · Cobranças · Responsabilidade Civil",
    icon: Scale,
    tag: "Prevenção Eficaz · Resolução Ágil · Blindagem Jurídica",
    summary:
      "Como destacam os clientes: 'O difícil é decidir se ela é melhor resolvendo problemas ou evitando que eles aconteçam.' Atuação preventiva e contenciosa de excelência em contratos, cobranças e indenizações.",
    details:
      "A segurança jurídica nas relações civis depende de clareza e solidez técnica. A Dra. Jéssica Bernardes analisa e redige contratos blindados para evitar litígios futuros, conduz execuções de títulos de crédito e ações de cobrança com rigor estratégico, e atua firmemente na reparação de danos morais, materiais e estéticos decorrentes de descumprimentos de acordos e obrigações.",
    topics: [
      "Elaboração, análise e revisão criteriosa de contratos civis, comerciais e de prestação de serviços",
      "Ações de cobrança, recuperação de créditos e execução de títulos extrajudiciais (cheques, notas e contratos)",
      "Ações indenizatórias por perdas e danos, danos morais, materiais e lucros cessantes",
      "Rescisão contratual motivada com apuração de penalidades, multas e devolução de valores",
      "Medidas cautelares urgentes, liminares e notificações extrajudiciais estratégicas",
      "Resolução pacífica e mediação de conflitos patrimoniais entre particulares e vizinhança",
    ],
    whatsAppText:
      "Olá, Dra. Jéssica Bernardes! Gostaria de consultar sobre uma questão cível / análise de contrato / cobrança.",
  },
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família, Sucessões & Inventários",
    category: "Inventário em Cartório · Partilha de Bens · Divórcio · Pensão Alimentícia · Guarda",
    icon: Users,
    tag: "Condução Ética, Paciente & Humanizada · Preservação do Patrimônio Familiar",
    summary:
      "Atendimento sensível, acolhedor e resolutivo para questões familiares e sucessórias. Inventários ágeis em cartório de notas, partilhas justas e divórcios com foco na preservação da tranquilidade.",
    details:
      "Questões de família exigem tato humano aliado a rigor técnico. A Dra. Jéssica Bernardes prioriza soluções céleres e menos desgastantes, como inventários extrajudiciais em cartório de notas quando há consenso, partilhas equitativas de bens, formalização de acordos de guarda e fixação justa de alimentos, garantindo que os direitos de todos sejam respeitados com total discrição e ética.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas: partilha célere, econômica e sem burocracia para os herdeiros",
      "Inventário Judicial e arrolamento de bens para heranças com particularidades ou menores de idade",
      "Divórcio consensual e litigioso, partilha de patrimônio e dissolução de união estável",
      "Ações de pensão alimentícia (fixação, revisão, execução de débitos e exoneração)",
      "Regulamentação de guarda compartilhada, visitas e convivência com filhos menores",
      "Planejamento sucessório, testamentos e doações com cláusulas de usufruto protetivo",
    ],
    whatsAppText:
      "Olá, Dra. Jéssica Bernardes! Gostaria de orientação sobre inventário / partilha / questão de família.",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Benefícios INSS",
    category: "Aposentadorias · Auxílio por Incapacidade · BPC/LOAS · Pensão por Morte · Planejamento",
    icon: Landmark,
    tag: "Concessão Justa · Reversão de Indeferimentos · Proteção Social",
    summary:
      "Orientação técnica segura e planejamento previdenciário para assegurar o benefício correto. Reversão ágil de pedidos negados pelo INSS na via judicial perante a Justiça Federal.",
    details:
      "A conquista da aposentadoria e o amparo nos momentos de incapacidade são direitos fundamentais. A Dra. Jéssica Bernardes realiza contagem detalhada de tempo de contribuição, análise de vínculos rurais e urbanos, e atua fortemente na concessão e restabelecimento de auxílio por incapacidade temporária (auxílio-doença), aposentadoria por idade e BPC/LOAS para idosos e pessoas com deficiência.",
    topics: [
      "Planejamento Previdenciário individualizado para encontrar o momento ideal e maior valor de aposentadoria",
      "Aposentadoria por Idade Urbana e Rural, Tempo de Contribuição e Regras de Transição da Reforma",
      "Ação judicial para reversão de indeferimento de Auxílio por Incapacidade Temporária (auxílio-doença)",
      "Concessão de BPC/LOAS (Benefício de Prestação Continuada) para idosos com 65+ anos e pessoas com deficiência",
      "Reconhecimento de período rural e acerto de pendências cadastrais no CNIS",
      "Concessão de Pensão por Morte e Auxílio-Reclusão para dependentes",
    ],
    whatsAppText:
      "Olá, Dra. Jéssica Bernardes! Gostaria de auxílio para solicitar ou destravar meu benefício do INSS.",
  },
  {
    id: "direito-trabalhista",
    title: "Direito Trabalhista & Causas Laborais",
    category: "Rescisão Indireta · Verbas Rescisórias · Horas Extras · Vínculo Empregatício · Assédio",
    icon: Briefcase,
    tag: "Defesa dos Direitos do Trabalhador · Cálculo Minucioso · Reparação Integral",
    summary:
      "Defesa firme e detalhista dos direitos trabalhistas. Atuação para recebimento integral de verbas devidas, horas extras, adicionais e indenizações por abusos no ambiente corporativo.",
    details:
      "Com escuta atenta e respeito absoluto à trajetória do trabalhador, a Dra. Jéssica Bernardes analisa minuciosamente contracheques, registros de jornada e condições de trabalho. Atuamos para cobrar diferenças rescisórias, horas extras não quitadas, adicional de insalubridade e propor rescisão indireta em situações de falta grave do empregador.",
    topics: [
      "Ação trabalhista para pagamento de verbas rescisórias integrais, saldo de salário, aviso prévio e FGTS + 40%",
      "Cobrança de horas extras, intervalos intrajornada suprimidos e banco de horas descumprido",
      "Reconhecimento de vínculo de emprego informal (sem carteira assinada) com recolhimento de benefícios",
      "Rescisão Indireta do contrato de trabalho por atrasos reiterados ou descumprimento de obrigações legais",
      "Pedidos de adicional de insalubridade e periculosidade para ambientes de risco à saúde",
      "Indenização por danos morais decorrentes de assédio moral, perseguição ou condições degradantes",
    ],
    whatsAppText:
      "Olá, Dra. Jéssica Bernardes! Gostaria de consultar sobre os meus direitos trabalhistas / rescisão.",
  },
  {
    id: "consultoria-empresarial-preventiva",
    title: "Assessoria Jurídica Preventiva para Empresas",
    category: "Adequação ao CDC · Gestão de Riscos · Contratos Comerciais · Proteção do Negócio",
    icon: Building2,
    tag: "Segurança Operacional · Mitigação de Passivos · Suporte Ágil",
    summary:
      "Consultoria jurídica estratégica e resolutiva para comércios locais, empreendedores e empresas. Redução de riscos contratuais, conformidade com o CDC e resolução célere de litígios.",
    details:
      "Empreender com tranquilidade exige respaldo legal seguro. A Dra. Jéssica Bernardes auxilia negócios na revisão de contratos com fornecedores e clientes, implementação de termos claros conforme as diretrizes do Código de Defesa do Consumidor e gerenciamento preventivo de conflitos para evitar que divergências se tornem ações judiciais onerosas.",
    topics: [
      "Adequação de práticas de vendas e atendimento ao Código de Defesa do Consumidor (evitando autuações)",
      "Elaboração e revisão de contratos com parceiros, fornecedores e prestadores de serviços",
      "Cobrança extrajudicial e judicial célere de títulos e faturas inadimplidas",
      "Consultoria preventiva em rotinas de trabalho para reduzir riscos de passivos trabalhistas",
      "Envio de notificações extrajudiciais fundamentadas e condução de acordos estratégicos",
      "Orientação ágil para tomada de decisões com segurança jurídica patrimonial",
    ],
    whatsAppText:
      "Olá, Dra. Jéssica Bernardes! Gostaria de uma assessoria preventiva para a minha empresa.",
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
    name: "Rafael Brito",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Amei ser atendido pela Dra. Jéssica, destaca-se pelo demasiado e notório saber jurídico!",
    content:
      "Amei ser atendido pela dra Jessica, destaca-se pelo demasiado e notório saber jurídico.",
  },
  {
    name: "Bruno Resende",
    badge: "Local Guide · 6 avaliações · 11 fotos · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "O difícil é decidir se ela é melhor resolvendo problemas ou evitando que eles aconteçam!",
    content:
      "Recomendo muito, de olhos fechados. O difícil é decidir se ela é melhor resolvendo problemas ou evitando que eles aconteçam. 🫣",
  },
  {
    name: "Katia Aparecida de Lima",
    badge: "3 avaliações · 1 foto · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Estava passando por muita angústia após ser vítima de golpe... a Dra. Jéssica tem me ajudado com muito carinho e profissionalismo!",
    content:
      "Estava passando por muita angústia, sem saber o que fazer, depois de ter sido vítima de um golpe, pois nunca passei por essa situação antes, foi quando conheci o trabalho da dra Jéssica, que com muito carinho e profissionalismo tem me ajudado a resolver essa pendência, além da parte como advogada, com uma atenção especial. Agradeço muito, sei que terei uma solução para meu caso!",
  },
  {
    name: "Eduarda Ferreira",
    badge: "4 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Sua agilidade, comprometimento e cuidado com cada detalhe fazem toda a diferença!",
    content:
      "Excelente profissional! A Dra. Jessica Bernardes demonstra muito conhecimento, competência e dedicação em tudo o que faz. Sempre atenciosa, prestativa e transparente, transmite confiança e segurança durante todo o atendimento. Sua agilidade, comprometimento e cuidado com cada detalhe fazem toda a diferença. Recomendo fortemente para quem procura um serviço jurídico de qualidade, realizado com ética e profissionalismo.",
  },
  {
    name: "Negão AutoCenter",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Advogada de alto nível, incansável e comprometida. Seu rigor nos detalhes faz toda a diferença!",
    content:
      "Advogada de alto nível, incansável e comprometida com cada demanda que abraça. Seu rigor nos detalhes e sua postura profissional fazem toda a diferença na gestão dos processos. Referência em confiabilidade, exerce sua função com integridade, responsabilidade e clareza, transmitindo segurança e paz de espírito aos seus clientes em todas as fases. Sua solidez técnica, somada ao empenho contínuo e à busca pelas melhores alternativas, evidencia seu compromisso com a excelência.",
  },
  {
    name: "Gabriela Cardozo",
    badge: "4 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Excelente profissional e totalmente responsável ao caso, dedicação do começo ao fim ❤️",
    content:
      "Boa noite Jessica, gostaria de agradecer todo apoio e dedicação ao meu caso e dizer que é uma excelente profissional e totalmente responsável ao caso, obrigada mais uma vez pela dedicação do começo ao fim ❤️",
  },
  {
    name: "Fabiola Santos",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Durante todo o processo, demonstrou paciência para esclarecer minhas dúvidas e me passou muita segurança!",
    content:
      "Gostaria de deixar minha recomendação e avaliação sobre o excelente trabalho da Dra. Jéssica. Sempre fui atendida com muita atenção, profissionalismo e dedicação. É uma profissional extremamente competente, responsável e comprometida em buscar as melhores soluções para seus clientes. Durante todo o processo, demonstrou paciência para esclarecer minhas dúvidas e me passou muita segurança e confiança. Sou muito grata por todo o empenho!",
  },
  {
    name: "Stefany Bernardes",
    badge: "4 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Profissional de confiança exemplar, atua com ética, responsabilidade e transparência!",
    content:
      "Advogada extremamente competente, dedicada e comprometida com cada caso que assume. Sua atenção aos detalhes e seu profissionalismo fazem toda a diferença na condução dos processos. Profissional de confiança exemplar, atua com ética, responsabilidade e transparência, transmitindo segurança e tranquilidade aos seus clientes em todas as etapas.",
  },
  {
    name: "Michelle Lopes",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Conduz tudo muito bem e explica cada etapa super bem! Super indico!",
    content:
      "Jessica é uma ótima advogada, atenciosa e dedicada. E conduz tudo muito bem e explica cada etapa super bem! Super indico.",
  },
  {
    name: "Amanda",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Excelente profissional. Recomendo de olhos fechados!",
    content:
      "Excelente profissional. Recomendo de olhos fechados.",
  },
  {
    name: "Silveri Caetano",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Profissional de muita responsabilidade e dedicada, faz jus à profissão que exerce!",
    content:
      "Profissional de muita responsabilidade, e dedicada que faz jus a profissão que exerce, parabéns.",
  },
  {
    name: "Vivian Alencar",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Muito boa experiência, tudo muito bem explicado, ótimo atendimento!",
    content:
      "Muito boa experiência, tudo muito bem explicado, ótimo atendimento.",
  },
  {
    name: "Jonas Alencar",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Ótimo atendimento, profissional super educada e atenciosa 🙏🏼",
    content:
      "Ótimo atendimento, profissional super educada e atenciosa 🙏🏼",
  },
  {
    name: "Jessica Cristina",
    badge: "5 avaliações · 4 fotos · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Excelente profissional, sempre pronta a resolver os problemas. Super indico!",
    content:
      "Excelente profissional, sempre pronta a resolver os problemas. Super indico.",
  },
  {
    name: "Anacione Bernades",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Minha experiência foi muito boa. Advogada muito competente!!",
    content:
      "Minha experiência foi muito boa. Advogada muito competente!!",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Fui vítima de um golpe (Pix, cartão ou empréstimo). O que devo fazer de imediato?",
    answer:
      "O tempo é um fator determinante. Primeiro, registre prints de todas as conversas, comprovantes bancários com chave Pix ou dados da transação, extratos e o Boletim de Ocorrência. Em seguida, entre em contato imediatamente com o nosso escritório pelo WhatsApp. A Dra. Jéssica Bernardes adotará as providências legais cabíveis contra as instituições financeiras envolvidas para acionar o Mecanismo Especial de Devolução (MED), buscar o bloqueio de valores e ingressar com ação para ressarcimento e indenização por danos morais.",
  },
  {
    question: "Como funciona a primeira conversa com a Dra. Jéssica Bernardes?",
    answer:
      "O primeiro contato é simples e direto pelo WhatsApp oficial. Você nos envia um resumo do ocorrido e os documentos que possuir. A Dra. Jéssica analisa a viabilidade jurídica do seu caso de forma didática, sem juridiquês, esclarecendo seus direitos, os prazos e as estratégias mais assertivas — tanto para atendimento presencial em Luz - MG quanto online para clientes de qualquer localidade.",
  },
  {
    question: "Moro em outra cidade ou estado. É possível ser atendido(a) 100% online?",
    answer:
      "Sim, perfeitamente! Os processos judiciais brasileiros tramitam de maneira eletrônica. Nós realizamos consultas por videochamada, envio seguro de documentos digitalizados e assinatura digital direta pelo seu celular. Você acompanha cada movimentação com total transparência e comodidade, recebendo orientações claras em cada etapa.",
  },
  {
    question: "Meu nome foi negativado indevidamente no SPC/Serasa. Quais são meus direitos?",
    answer:
      "Se você sofreu negativação por dívida inexistente, já quitada ou decorrente de golpe/fraude cometida por terceiros, trata-se de dano moral presumido pela lei (in re ipsa). Ingressamos com ação judicial exigindo a exclusão imediata do seu nome dos cadastros de proteção ao crédito em tutela de urgência (liminar), além de indenização proporcional aos constrangimentos gerados.",
  },
  {
    question: "Qual a vantagem de fazer o inventário em cartório (extrajudicial)?",
    answer:
      "O inventário extrajudicial em cartório de notas é substancialmente mais rápido, econômico e menos desgastante do que a via judicial. Quando todos os herdeiros são capazes e concordam com a partilha dos bens, a partilha pode ser lavrada em poucos dias ou semanas, garantindo a regularização do patrimônio com total segurança jurídica e assessoria da Dra. Jéssica Bernardes.",
  },
  {
    question: "Tive um benefício negado pelo INSS. Ainda posso recorrer?",
    answer:
      "Sim! É muito comum o INSS negar pedidos de aposentadoria, auxílio-doença ou BPC/LOAS por equívocos na análise de vínculos ou perícias superficiais. Analisamos o processo administrativo e, se viável, ajuizamos ação perante a Justiça Federal, onde peritos judiciais independentes avaliam com rigor e imparcialidade sua real situação.",
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
          dark ? "text-white" : "text-[#0d1726]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            dark ? "text-[#ecdecc]" : "text-[#4a576b]"
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
      <main className="min-h-screen bg-[#0b1320] text-[#fbf7f1] selection:bg-[#c4a287] selection:text-[#0b1320]">
        {/* TOP ANNOUNCEMENT BAR (MIDNIGHT NAVY & GOLD) */}
        <div className="border-b border-[#c4a287]/25 bg-[#070c14] py-2 text-xs">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#ecdecc] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-white" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                Dra. Jéssica Bernardes — Advogada · OAB/MG 231.560 · Luz - MG ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#ecdecc]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#ecdecc] text-white" />
                <span className="font-bold text-white">5,0 ★</span> (21 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-[#c4a287]/40 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de uma consultoria sobre o meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#ecdecc] sm:inline-flex"
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
              ? "border-b border-[#c4a287]/35 bg-[#0b1320]/95 py-3 shadow-xl shadow-black/80 backdrop-blur-md"
              : "border-b border-[#c4a287]/20 bg-[#0b1320]/90 py-4 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Left: Logo + Desktop Navigation */}
            <div className="flex items-center gap-8 lg:gap-12 xl:gap-16">
              {/* Logo Link */}
              <a
                href="#"
                className="group flex shrink-0 items-center transition-opacity hover:opacity-95"
                aria-label="Jéssica Bernardes Advogada - Início"
              >
                <div className="relative flex items-center py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Jéssica Bernardes Advogada OAB/MG 231.560 - Logotipo Oficial"
                    width={340}
                    height={116}
                    className="h-12 sm:h-13 md:h-14 lg:h-15 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] object-contain object-left drop-shadow-[0_2px_14px_rgba(236,222,204,0.22)] transition-transform duration-200 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-4 lg:gap-5 xl:gap-7 lg:flex">
                <a href="#atuacao" className="nav-link-dark text-[11px] whitespace-nowrap">
                  Áreas de Atuação
                </a>
                <a href="#sobre" className="nav-link-dark text-[11px] whitespace-nowrap">
                  Sobre a Advogada
                </a>
                <a href="#diferenciais" className="nav-link-dark text-[11px] whitespace-nowrap">
                  Diferenciais
                </a>
                <a href="#depoimentos" className="nav-link-dark text-[11px] whitespace-nowrap">
                  Avaliações (5,0 ★)
                </a>
                <a href="#duvidas" className="nav-link-dark text-[11px] whitespace-nowrap">
                  Dúvidas Frequentes
                </a>
                <a href="#contato" className="nav-link-dark text-[11px] whitespace-nowrap">
                  Sede & Contato
                </a>
              </nav>
            </div>

            {/* Right Action */}
            <div className="flex shrink-0 items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de consultar sobre o meu caso.")}
                target="_blank"
                variant="platinum"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#0b1320]" />
                <span className="hidden xl:inline">Atendimento WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-[#c4a287]/40 bg-[#111c2e] text-[#fbf7f1] transition-colors hover:border-[#ecdecc] hover:text-white lg:hidden"
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
                className="border-b border-[#c4a287]/40 bg-[#070c14] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="pb-3 border-b border-[#c4a287]/20 flex items-center">
                    <Image
                      src={LOGO_SRC}
                      alt="Jéssica Bernardes Advogada"
                      width={280}
                      height={95}
                      className="h-10 w-auto object-contain object-left"
                    />
                  </div>
                  <a
                    href="#atuacao"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#ecdecc] uppercase transition-colors hover:text-white"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#d9ba9e]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#ecdecc] uppercase transition-colors hover:text-white"
                  >
                    <span>Sobre a Dra. Jéssica Bernardes</span>
                    <ArrowRight size={14} className="text-[#d9ba9e]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#ecdecc] uppercase transition-colors hover:text-white"
                  >
                    <span>Diferenciais</span>
                    <ArrowRight size={14} className="text-[#d9ba9e]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#ecdecc] uppercase transition-colors hover:text-white"
                  >
                    <span>Avaliações Google (5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#d9ba9e]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#ecdecc] uppercase transition-colors hover:text-white"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#d9ba9e]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#ecdecc] uppercase transition-colors hover:text-white"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-[#d9ba9e]" />
                  </a>

                  <div className="pt-4 border-t border-[#c4a287]/30">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de agendar um atendimento.")}
                      target="_blank"
                      variant="platinum"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com a Dra. Jéssica</span>
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
        <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#0b1320]">
          {/* Subtle Ambient Champagne Gold Radial Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-radial from-[#dfc8ac]/15 via-[#81654e]/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-96 w-96 rounded-full bg-[#1e304e]/50 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#c4a287]/40 bg-[#111c2e] px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-white shadow-sm">
                    <span className="size-1.5 rounded-full bg-[#ecdecc] animate-pulse" />
                    Jéssica Bernardes · Advogada · OAB/MG 231.560 · Luz - MG
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.14] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
                >
                  Advocacia Estratégica, Humana e com{" "}
                  <span className="bg-gradient-to-r from-white via-[#fbf7f1] to-[#dfc8ac] bg-clip-text text-transparent">
                    Rigor nos Detalhes
                  </span>{" "}
                  para Proteger Você.
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-[#ecdecc] sm:text-lg"
                >
                  Segurança jurídica, acolhimento transparente e atuação incansável. A advogada{" "}
                  <strong className="text-white font-semibold">Dra. Jéssica Bernardes</strong> atua com notório saber jurídico e excelência em{" "}
                  <strong className="text-white font-semibold">Direito do Consumidor, Defesa contra Golpes Financeiros, Cível, Família e Previdenciário</strong>{" "}
                  em <strong className="text-white font-semibold">Luz, Centro-Oeste de Minas</strong> e online para todo o Brasil.
                </motion.p>

                {/* Direct Alert for Victims of Scams / Fraud */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex items-start gap-3 rounded-xl border border-[#c4a287]/40 bg-[#16243b]/90 p-3.5 backdrop-blur-sm"
                >
                  <AlertTriangle size={18} className="text-[#dfc8ac] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#fbf7f1] leading-relaxed">
                    <strong className="text-white font-bold">Foi vítima de golpe do Pix, fraude bancária ou clonagem?</strong> Atendimento prioritário e imediato para bloqueio de transações e recuperação de valores.
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de consultar sobre a situação do meu caso.")}
                    target="_blank"
                    variant="platinum"
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

              {/* Right Column: Hero Visual Frame (Dra. Jéssica Bernardes portrait) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Metallic Border Box */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#c4a287]/50 bg-[#111c2e] p-2 shadow-2xl shadow-black/95">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#070c14]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Jéssica Bernardes - Advogada em Luz - MG (OAB/MG 231.560)"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320] via-transparent to-transparent opacity-65" />
                    </div>

                    {/* Subtle Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-[#c4a287]/50 bg-[#070c14]/95 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-white">
                            Jéssica Bernardes
                          </p>
                          <p className="text-[11px] text-[#ecdecc]">
                            Advogada · OAB/MG 231.560
                          </p>
                        </div>
                        <span className="rounded-md border border-[#c4a287]/40 bg-[#16243b] px-2.5 py-1 text-[10px] font-bold text-[#ecdecc]">
                          Luz · MG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 5.0 Rating) */}
                  <div className="absolute -top-5 -left-5 hidden rounded-xl border border-[#c4a287]/50 bg-[#111c2e]/95 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#16243b] border border-[#c4a287]/40">
                      <GoogleIcon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-[#ecdecc] text-white"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-white mt-0.5">
                        5,0 no Google · 21 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Especialidades) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-[#c4a287]/50 bg-[#111c2e]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <Scale size={16} className="text-[#dfc8ac]" />
                    <span className="text-xs font-bold tracking-wide text-white">
                      Consumidor · Golpes · Cível · Família ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN DOBRA 1 (DARK) */}
            <div className="mt-14 border-t border-[#c4a287]/25 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-[#c4a287]/30 bg-[#111c2e]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    5,0 ★
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-[#ecdecc]">21 avaliações 100% 5 estrelas</p>
                </div>

                <div className="rounded-xl border border-[#c4a287]/30 bg-[#111c2e]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Notório Saber
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Solidez Técnica</p>
                  <p className="text-[11px] text-[#ecdecc]">Rigor em cada detalhe processual</p>
                </div>

                <div className="rounded-xl border border-[#c4a287]/30 bg-[#111c2e]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Humanizado
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Atendimento Acolhedor</p>
                  <p className="text-[11px] text-[#ecdecc]">Paciência, didática e clareza</p>
                </div>

                <div className="rounded-xl border border-[#c4a287]/30 bg-[#111c2e]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Resolutividade
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Prevenção & Solução</p>
                  <p className="text-[11px] text-[#ecdecc]">Agilidade com ética irretocável</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: PILARES & ÁREAS DE ATUAÇÃO (LIGHT ALABASTER)    */}
        {/* ======================================================== */}
        <section id="atuacao" className="border-t border-[#e8dfd3] bg-[#fdfbf8] text-[#0d1726] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="Especialidades & Pilares de Atuação"
                description="Soluções jurídicas estruturadas para defender seus direitos em causas do consumidor, proteção contra fraudes, relações cíveis, familiares e previdenciárias."
              >
                Atuação Jurídica Completa e Especializada
              </Heading>

              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de consultar sobre a minha situação jurídica.")}
                target="_blank"
                variant="rosegold"
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
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#e8dfd3] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a287] hover:shadow-lg hover:shadow-[#81654e]/10"
                  >
                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#f7f4ee] text-[#81654e] border border-[#e8dfd3] transition-colors group-hover:bg-[#81654e] group-hover:text-white">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#f7f4ee] px-3 py-1 text-[10px] font-bold text-[#81654e] uppercase tracking-wider">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-[#0d1726] group-hover:text-[#81654e] transition-colors">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#81654e]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-[#4a576b]">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#e8dfd3] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex w-full items-center justify-between text-xs font-bold text-[#81654e] transition-colors hover:text-[#0d1726] cursor-pointer"
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
        {/* DOBRA 3: SOBRE A ADVOGADA (DARK LUXURY MIDNIGHT NAVY)    */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-[#c4a287]/25 bg-[#070c14] py-20 lg:py-28 text-[#fbf7f1]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Image: Dra. Jéssica Bernardes portrait */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="overflow-hidden rounded-2xl border-2 border-[#c4a287]/50 bg-[#111c2e] p-2.5 shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#16243b]">
                      <Image
                        src={FOTO_ABOUT_SRC}
                        alt="Dra. Jéssica Oliveira Bernardes Nunes - Advogada em Luz - MG"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -bottom-6 -right-4 rounded-xl border border-[#c4a287]/50 bg-[#0b1320] p-4 shadow-xl">
                    <p className="font-serif text-3xl font-bold text-white">
                      Nota 5,0 ★
                    </p>
                    <p className="text-[11px] font-semibold text-[#ecdecc]">
                      21 Avaliações 100% 5 Estrelas no Google
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre a Advogada"
                  dark={true}
                  description="Uma trajetória alicerçada em trabalho honesto, persistência diária e o compromisso irrestrito de colocar o Direito a serviço de pessoas e famílias."
                >
                  Dra. Jéssica Bernardes: Notório Saber & Advocacia Humanizada
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#ecdecc]">
                  <p>
                    <strong className="text-white font-semibold">
                      &ldquo;Sou filha de uma família humilde, que sempre me ensinou o valor do trabalho, da honestidade e da persistência. Cresci vendo meus pais lutarem pelos seus objetivos, e foi assim que aprendi a nunca desistir dos meus sonhos. O Direito já foi sonho, hoje é realidade!&rdquo;
                    </strong>
                  </p>
                  <p>
                    Sempre estudiosa, dedicada e determinada a construir seu próprio caminho, a <strong className="text-white font-semibold">Dra. Jéssica Oliveira Bernardes Nunes (OAB/MG 231.560)</strong> leva esses valores inegociáveis para o exercício diário da advocacia: uma prática <strong className="text-white font-semibold">humana, acessível, ética e feita com propósito</strong>.
                  </p>
                  <p>
                    Com escritório sediado no coração de <strong className="text-white font-semibold">Luz - MG</strong>, destaca-se pelo notório saber jurídico e pelo rigor minucioso nos detalhes de cada processo. Seus clientes enfatizam a clareza e paciência no atendimento, o apoio decisivo em situações de angústia (como fraudes e golpes) e a capacidade ímpar de solucionar demandas complexas com celeridade e empatia.
                  </p>
                </div>

                {/* 4 Highlights */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-[#c4a287]/30 bg-[#111c2e] p-4">
                    <HeartHandshake size={20} className="text-[#dfc8ac] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Acolhimento & Empatia
                      </h4>
                      <p className="mt-1 text-[11px] text-[#ecdecc]">
                        Atenção especial e suporte humano para momentos difíceis, como vítimas de fraudes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#c4a287]/30 bg-[#111c2e] p-4">
                    <FileText size={20} className="text-[#dfc8ac] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Didática & Clareza
                      </h4>
                      <p className="mt-1 text-[11px] text-[#ecdecc]">
                        Explicação de cada etapa sem termos técnicos confusos, sanando todas as dúvidas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#c4a287]/30 bg-[#111c2e] p-4">
                    <BadgeCheck size={20} className="text-[#dfc8ac] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Rigor nos Detalhes
                      </h4>
                      <p className="mt-1 text-[11px] text-[#ecdecc]">
                        Gestão processual minuciosa e busca pelas melhores estratégias jurídicas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#c4a287]/30 bg-[#111c2e] p-4">
                    <Lock size={20} className="text-[#dfc8ac] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Ética & Transparência
                      </h4>
                      <p className="mt-1 text-[11px] text-[#ecdecc]">
                        Conduta séria, comprometida e acompanhamento transparente do início ao fim.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Li sobre sua trajetória e gostaria de conversar sobre o meu caso.")}
                    target="_blank"
                    variant="platinum"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com a Dra. Jéssica Bernardes</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#ecdecc] transition-colors hover:text-white"
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
        <section id="diferenciais" className="border-t border-[#e8dfd3] bg-[#f7f4ee] text-[#0d1726] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow justify-center mb-3">
                Por que Escolher a Dra. Jéssica Bernardes
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0d1726] sm:text-4xl">
                O Padrão de Excelência com Nota Máxima 5,0 ★ no Google
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4a576b]">
                Pilares comprovados por quem vivenciou o atendimento e teve suas causas solucionadas com segurança e paz de espírito.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a287] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f7f4ee] text-[#81654e] border border-[#e8dfd3]">
                  <Sparkles size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0d1726]">
                  Notório Saber Jurídico
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4a576b]">
                  Capacidade técnica reconhecida, profundidade na interpretação das leis e solidez em cada petição apresentada.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a287] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f7f4ee] text-[#81654e] border border-[#e8dfd3]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0d1726]">
                  Prevenção & Resolução
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4a576b]">
                  &ldquo;O difícil é decidir se ela é melhor resolvendo problemas ou evitando que eles aconteçam.&rdquo;
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a287] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f7f4ee] text-[#81654e] border border-[#e8dfd3]">
                  <Heart size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0d1726]">
                  Apoio em Momentos Críticos
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4a576b]">
                  Sensibilidade especial com vítimas de golpes, transmitindo tranquilidade, segurança e condução atenta.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a287] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f7f4ee] text-[#81654e] border border-[#e8dfd3]">
                  <Clock size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0d1726]">
                  Dedicação do Começo ao Fim
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4a576b]">
                  Acompanhamento próximo em todas as fases processuais, com respostas ágeis e transparência contínua.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de esclarecer algumas dúvidas sobre o meu caso.")}
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
        <section id="depoimentos" className="border-t border-[#c4a287]/25 bg-[#0b1320] py-20 lg:py-28 text-[#fbf7f1]">
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
                        className="fill-[#ecdecc] text-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">5,0 de 5,0</span>
                  <span className="text-xs text-[#ecdecc]">
                    · 21 avaliações unânimes cinco estrelas no Google
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#c4a287]/40 bg-[#111c2e] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:border-[#ecdecc] hover:bg-[#16243b]"
              >
                <GoogleIcon size={14} />
                <span>Ver Perfil no Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Reviews Grid (DARK STYLING) */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between rounded-2xl border border-[#c4a287]/30 bg-[#111c2e] p-6 shadow-md transition-all duration-300 hover:border-[#dfc8ac] hover:bg-[#16243b]"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#ecdecc] text-white"
                        />
                      ))}
                    </div>

                    {/* Highlight Quote */}
                    <p className="mt-3 font-serif text-sm font-bold text-white leading-snug">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    {/* Full Review Text */}
                    <p className="mt-3 text-xs leading-relaxed text-[#ecdecc]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#c4a287]/30 pt-4">
                    <p className="font-serif text-xs font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#dfc8ac]">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#c4a287]/40 bg-[#111c2e] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-white sm:text-xl">
                Precisa de orientação jurídica profissional e segura?
              </h3>
              <p className="mt-2 text-xs text-[#ecdecc] max-w-xl mx-auto">
                Não enfrente dúvidas ou litígios sem o respaldo de quem atua com seriedade, ética, rapidez e rigor em cada detalhe.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Li as avaliações no site e gostaria de conversar com você sobre o meu caso.")}
                  target="_blank"
                  variant="platinum"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com a Dra. Jéssica Bernardes Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO (LIGHT)             */}
        {/* ======================================================== */}
        <section className="border-t border-[#e8dfd3] bg-[#fdfbf8] text-[#0d1726] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow justify-center mb-3">
                Processo Transparente
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0d1726] sm:text-4xl">
                Como Funciona o Seu Atendimento
              </h2>
              <p className="mt-3 text-sm text-[#4a576b]">
                Passo a passo simples, ágil e descomplicado desde o primeiro contato até o desfecho da sua questão jurídica.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a287] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#81654e]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0d1726]">
                  Contato Inicial
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4a576b]">
                  Envie uma mensagem no WhatsApp relatando a sua situação e tire as primeiras dúvidas diretamente com a Dra. Jéssica.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a287] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#81654e]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0d1726]">
                  Análise Documental
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4a576b]">
                  Avaliamos detalhadamente comprovantes, extratos, contratos, prints ou processos com rigor técnico para definir a viabilidade.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a287] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#81654e]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0d1726]">
                  Estratégia Assertiva
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4a576b]">
                  Definimos o caminho mais econômico e rápido (acordo extrajudicial preventivo, notificação ou ação judicial fundamentada).
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8dfd3] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c4a287] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#81654e]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0d1726]">
                  Acompanhamento Próximo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4a576b]">
                  Condução zelosa em todas as etapas, com atualizações frequentes e suporte atencioso até a resolução definitiva.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ (DARK)                 */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-[#c4a287]/25 bg-[#070c14] py-20 lg:py-28 text-[#fbf7f1]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow-dark mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-[#ecdecc]">
                Respostas diretas e didáticas sobre atendimento jurídico, proteção contra golpes, prazos e procedimentos.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-[#c4a287]/30 bg-[#111c2e] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-white transition-colors hover:text-[#ecdecc] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#dfc8ac]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#dfc8ac]" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-[#c4a287]/25 px-5 pt-3 pb-5 text-xs leading-relaxed text-[#ecdecc]"
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
              <p className="text-xs text-[#dfc8ac]">
                Sua dúvida específica não está listada acima?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de esclarecer uma dúvida que não encontrei no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Pergunte diretamente à Dra. Jéssica Bernardes no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDE & CONTATO (LIGHT)            */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#e8dfd3] bg-[#fdfbf8] text-[#0d1726] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info (LIGHT STYLING) */}
              <div className="lg:col-span-5">
                <span className="eyebrow mb-3.5">Sede & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0d1726] sm:text-4xl">
                  Estamos Prontos para Atender Você
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#4a576b]">
                  Agende sua consulta presencial em nosso escritório no Centro de Luz - MG, ou realize seu atendimento online com total comodidade e segurança jurídica de onde você estiver.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e8dfd3] bg-[#f7f4ee] text-[#81654e]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0d1726] uppercase tracking-wider">
                        Endereço da Sede
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#4a576b]">
                        {ADDRESS_TEXT}
                      </p>
                      <p className="text-[11px] text-[#81654e] font-medium mt-0.5">
                        Centro de Luz - MG · CEP 35595-000 · Atendimento presencial e online.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e8dfd3] bg-[#f7f4ee] text-[#81654e]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0d1726] uppercase tracking-wider">
                        Telefone & WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-[#4a576b]">
                        {PHONE_DISPLAY}
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de agendar uma consulta jurídica.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#81654e] hover:underline"
                      >
                        Clique para enviar mensagem no WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e8dfd3] bg-[#f7f4ee] text-[#81654e]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0d1726] uppercase tracking-wider">
                        Horário de Funcionamento
                      </p>
                      <p className="mt-1 text-xs text-[#4a576b]">
                        Segunda a Sexta: 09:00 às 18:00
                      </p>
                      <p className="text-[11px] text-[#81654e]">
                        Atendimento presencial com agendamento e online para todo o Brasil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e8dfd3] bg-[#f7f4ee] text-[#81654e]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0d1726] uppercase tracking-wider">
                        Redes Sociais & Perfil
                      </p>
                      <div className="mt-1 flex flex-col gap-1 text-xs">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4a576b] hover:text-[#0d1726]"
                        >
                          Instagram: <span className="font-bold">{INSTAGRAM_HANDLE}</span>
                        </a>
                        <a
                          href={GOOGLE_SEARCH_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#81654e] hover:underline"
                        >
                          Perfil Google: Jéssica Oliveira Bernardes Nunes (5,0 ★)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card (LIGHT STYLING) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#e8dfd3] bg-white p-8 shadow-xl shadow-[#81654e]/10">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#81654e]">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-[#0d1726] sm:text-3xl">
                    Inicie seu Atendimento com a Dra. Jéssica Bernardes
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#4a576b]">
                    Selecione a área da sua necessidade para ser direcionado(a) com a mensagem adequada ao WhatsApp oficial do escritório:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de consultar sobre Direito do Consumidor / Golpe do Pix / Fraude Bancária.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8dfd3] bg-[#f7f4ee] p-4 text-xs font-bold text-[#0d1726] transition-all hover:border-[#c4a287] hover:bg-[#dfc8ac]/20"
                    >
                      <span>Consumidor & Golpes Bancários</span>
                      <ArrowRight size={14} className="text-[#81654e]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de orientação sobre Direito Cível / Contratos / Cobranças.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8dfd3] bg-[#f7f4ee] p-4 text-xs font-bold text-[#0d1726] transition-all hover:border-[#c4a287] hover:bg-[#dfc8ac]/20"
                    >
                      <span>Cível & Contratos</span>
                      <ArrowRight size={14} className="text-[#81654e]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de orientação sobre Inventário / Partilha / Família.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8dfd3] bg-[#f7f4ee] p-4 text-xs font-bold text-[#0d1726] transition-all hover:border-[#c4a287] hover:bg-[#dfc8ac]/20"
                    >
                      <span>Família, Inventário & Partilha</span>
                      <ArrowRight size={14} className="text-[#81654e]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de orientação sobre Aposentadoria / Benefício Previdenciário (INSS).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#e8dfd3] bg-[#f7f4ee] p-4 text-xs font-bold text-[#0d1726] transition-all hover:border-[#c4a287] hover:bg-[#dfc8ac]/20"
                    >
                      <span>Previdenciário (INSS)</span>
                      <ArrowRight size={14} className="text-[#81654e]" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-[#e8dfd3] pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de conversar com você sobre a minha situação jurídica.")}
                      target="_blank"
                      variant="rosegold"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com a Dra. Jéssica Bernardes</span>
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
        <footer className="border-t border-[#c4a287]/25 bg-[#070c14] pt-16 pb-12 text-[#dfc8ac]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Jéssica Bernardes Advogada OAB/MG 231.560"
                    width={360}
                    height={122}
                    className="h-13 sm:h-14 md:h-16 w-auto max-w-[260px] sm:max-w-[320px] object-contain object-left drop-shadow-[0_2px_12px_rgba(236,222,204,0.18)]"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#ecdecc] max-w-md">
                  ⚖️ Dra. Jéssica Oliveira Bernardes Nunes — Advogada (OAB/MG 231.560). Atuação especializada em Direito do Consumidor, Defesa contra Golpes e Fraudes Bancárias, Cível, Família, Sucessões e Previdenciário (INSS). Atendimento humanizado, ético e resolutivo presencial em Luz - MG e online para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#c4a287]/40 bg-[#111c2e] text-[#ecdecc] transition-colors hover:border-white hover:text-white"
                    aria-label="Instagram da Dra. Jéssica Bernardes"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#c4a287]/40 bg-[#111c2e] text-[#ecdecc] transition-colors hover:border-white hover:text-white"
                    aria-label="WhatsApp da Dra. Jéssica Bernardes"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#c4a287]/40 bg-[#111c2e] text-[#ecdecc] transition-colors hover:border-white hover:text-white"
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
                      Sobre a Dra. Jéssica Bernardes
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
                      Sede em Luz - MG
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & OAB Column */}
              <div className="lg:col-span-4">
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                  Informações Institucionais & OAB
                </p>
                <p className="mt-4 text-[11px] leading-relaxed text-[#c4a287]">
                  Este site tem finalidade estritamente institucional e informativa, em estrita observância ao Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não visa à captação indevida de clientela nem substitui consulta jurídica formal.
                </p>
                <div className="mt-4 rounded-lg border border-[#c4a287]/30 bg-[#111c2e] p-3 text-[11px] text-[#ecdecc]">
                  <p className="font-bold text-white">
                    Dra. Jéssica Oliveira Bernardes Nunes · OAB/MG 231.560
                  </p>
                  <p className="mt-0.5 text-[#dfc8ac]">
                    {ADDRESS_TEXT}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#c4a287]/25 pt-8 text-center text-[11px] sm:flex-row sm:text-left">
              <p>
                © {new Date().getFullYear()} JÉSSICA BERNARDES — ADVOGADA · OAB/MG 231.560. Todos os direitos reservados.
              </p>
              <p className="text-[#c4a287]">
                Luz · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá, Dra. Jéssica Bernardes! Gostaria de tirar uma dúvida sobre o meu caso.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Jéssica Bernardes"
            className="group flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-black text-white shadow-xl shadow-black/80 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          >
            <WhatsAppIcon size={19} />
            <span className="hidden sm:inline tracking-wide font-bold">
              Falar com a Dra. Jéssica
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
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#c4a287]/50 bg-[#0b1320] p-6 text-white shadow-2xl sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg border border-[#c4a287]/40 bg-[#111c2e] text-[#ecdecc] hover:border-white hover:text-white cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2 text-xs font-bold text-[#dfc8ac] uppercase tracking-wider">
                  <span>Especialidade Jurídica</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {selectedPractice.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#d9ba9e]">
                  {selectedPractice.category}
                </p>

                <p className="mt-4 text-xs leading-relaxed text-[#ecdecc] sm:text-sm">
                  {selectedPractice.details}
                </p>

                <div className="mt-6 border-t border-[#c4a287]/30 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Principais Demandas & Procedimentos Atendidos:
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedPractice.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-[#ecdecc]"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[#dfc8ac] shrink-0 mt-0.5"
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
                    variant="platinum"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Consultar Dra. Jéssica nesta Área</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setSelectedPractice(null)}
                    className="w-full rounded-lg border border-[#c4a287]/40 bg-[#111c2e] px-5 py-3 text-xs font-bold text-[#ecdecc] hover:bg-[#16243b] hover:text-white sm:w-auto cursor-pointer"
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
