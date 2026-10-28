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
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Users,
  Briefcase,
  Gavel,
  Landmark,
  BadgeCheck,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531996990842";
const PHONE_DISPLAY = "(31) 99699-0842";
const EMAIL_CONTACT = "contato@antoniocesaradvocacia.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/drantoniocesaradvocacia/";
const INSTAGRAM_HANDLE = "@drantoniocesaradvocacia";

const ADDRESS_MATOZINHOS =
  "Av. Bento Gonçalves, 40 - Sl C - Centro, Matozinhos - MG, 35720-000, Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Ant%C3%B4nio+Cesar+%E2%80%94+Advocacia%0AMatozinhos+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=46301957b105dbed&sxsrf=AKL5yDjRnVyJdurDE_lq-f5ThZudN6EKFA:1793197499410&q=advocacia+ant%C3%B4nio+cesar+matozinhos+endere%C3%A7o&ludocid=13571655095632325030&sa=X&ved=2ahUKEwjThNuf9dyXAxVPrpUCHWzoE0EQ6BN6BAhFEAI";

const LOGO_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/emblema-ac.png";
const FOTO_HERO_SRC = "/hero.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Antônio Cesar! Gostaria de agendar uma consulta jurídica.";
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
    id: "direito-trabalhista",
    title: "Direito Trabalhista & Relações de Trabalho",
    category: "Reclamatórias Trabalhistas · Rescisão Indireta · Horas Extras · Acidente de Trabalho · Vínculo Empregatício",
    icon: Briefcase,
    tag: "Defesa Combativa · Recuperação de Verbas · Direitos Respeitados",
    summary:
      "Atuação firme e combativa na defesa dos direitos dos trabalhadores em Matozinhos e região. Cálculos minuciosos de rescisões, horas extras, insalubridade e indenizações por acidente laboral.",
    details:
      "Muitos profissionais enfrentam demissões injustas, supressão de horas extras, desvio de função, atraso crônico de salários ou condições inadequadas de trabalho sem saber como agir. Na Advocacia Antônio Cesar, analisamos com extrema atenção todo o histórico de trabalho, orientando cada cliente com clareza e paciência sobre os prazos e provas necessárias para pleitear a integralidade dos direitos na Justiça do Trabalho.",
    topics: [
      "Reclamatórias trabalhistas para cobrança de horas extras, adicional noturno e descansos semanais",
      "Rescisão indireta do contrato de trabalho por descumprimento grave das obrigações pelo empregador",
      "Cobrança integral de verbas rescisórias: saldo de salário, aviso prévio, férias vencidas e proporcionais, 13º e multa de 40% do FGTS",
      "Ações indenizatórias por acidente de trabalho, sequelas físicas, doenças ocupacionais e danos morais",
      "Reconhecimento de vínculo de emprego sem carteira assinada com anotação retroativa e recolhimentos devidos",
      "Adicionais de insalubridade e periculosidade para quem trabalhou exposto a agentes químicos, ruído ou risco físico",
    ],
    whatsAppText:
      "Olá, Dr. Antônio Cesar! Gostaria de consultar sobre os meus direitos em uma questão trabalhista.",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Benefícios do INSS",
    category: "Aposentadorias · Reversão de Benefício Negado · Auxílio por Incapacidade · BPC/LOAS · Atrasados",
    icon: Scale,
    tag: "Cálculo do Maior Valor · Reversão Judicial · Pagamento de Atrasados",
    summary:
      "Planejamento previdenciário e ações judiciais contra o INSS para reverter negativas, destravar aposentadorias pelas regras mais vantajosas e garantir o pagamento de todos os retroativos.",
    details:
      "Ter um benefício negado ou cancelado indevidamente pelo INSS coloca a segurança financeira do segurado e de sua família em risco. O Dr. Antônio Cesar realiza um estudo detalhado do extrato do CNIS, carteiras de trabalho, laudos médicos e histórico contributivo, acionando a Justiça Federal com pedidos de tutela de urgência e perícias médicas judiciais para restabelecer seus pagamentos com todos os juros e correções legais.",
    topics: [
      "Aposentadoria por Idade Urbana, Rural e Híbrida com comprovação documental rigorosa",
      "Aposentadoria por Tempo de Contribuição e aplicação da melhor regra de transição pós-Reforma da Previdência",
      "Aposentadoria Especial para trabalhadores com atividade especial sob agentes nocivos ou perigosos",
      "Reversão na Justiça Federal de benefícios previdenciários e assistenciais indeferidos ou cessados no INSS",
      "Auxílio por Incapacidade Temporária (antigo auxílio-doença) e conversão em Aposentadoria por Incapacidade Permanente",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos acima de 65 anos e pessoas com deficiência de baixa renda",
    ],
    whatsAppText:
      "Olá, Dr. Antônio Cesar! Preciso de orientações especializadas sobre aposentadoria ou benefício no INSS.",
  },
  {
    id: "direito-civil-indenizacoes",
    title: "Direito Civil, Contratos & Indenizações",
    category: "Reparação por Danos Morais e Materiais · Cobranças · Disputas Contratuais · Ações Possessórias",
    icon: Shield,
    tag: "Segurança Jurídica · Resolução de Conflitos · Proteção Patrimonial",
    summary:
      "Proteção jurídica eficaz em controvérsias patrimoniais, cobranças de títulos e créditos, litígios contratuais, disputas imobiliárias e ações de indenização por perdas e danos.",
    details:
      "Descumprimentos contratuais e prejuízos causados por terceiros exigem intervenção técnica ágil. A Advocacia Antônio Cesar atua de forma estratégica tanto na elaboração e revisão preventiva de acordos quanto na representação contenciosa perante o Poder Judiciário, cobrando reparações justas por danos materiais, lucros cessantes e abalos morais.",
    topics: [
      "Ações indenizatórias por danos morais, materiais e prejuízos decorrentes de atos ilícitos ou acidentes",
      "Cobrança e execução judicial de dívidas, cheques, notas promissórias e instrumentos contratuais inadimplidos",
      "Ações possessórias e petitórias: reintegração de posse, manutenção de posse, usucapião e defesa da propriedade",
      "Rescisão de contratos de compra e venda de bens móveis e imóveis com restituição de quantias pagas",
      "Elaboração, análise preventiva e repactuação de instrumentos contratuais particulares e comerciais",
      "Defesa e propositura de medidas judiciais urgentes para proteção de patrimônio em Matozinhos e região",
    ],
    whatsAppText:
      "Olá, Dr. Antônio Cesar! Gostaria de consultar sobre uma questão cível, contratual ou indenizatória.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões (Inventários)",
    category: "Inventário Extrajudicial e Judicial · Partilha de Bens · Divórcio · Pensão Alimentícia · Guarda",
    icon: Users,
    tag: "Sensibilidade & Firmeza · Agilidade em Cartório · Partilha Segura",
    summary:
      "Condução humanizada, serena e segura de inventários de bens, partilhas de herança, divórcios e questões de família, preservando o patrimônio e os laços dos herdeiros.",
    details:
      "Momentos de luto ou reorganização familiar demandam acolhimento ético e condução técnica experiente para evitar conflitos desgastantes e perdas patrimoniais. Atuamos com celeridade em inventários extrajudiciais em cartório quando há concordância entre herdeiros capazes, além de prestar defesa combativa em inventários judiciais e causas de família.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas: procedimento ágil, econômico e seguro para partilhas consensuais",
      "Inventário Judicial e arrolamento de bens em processos com menores de idade ou divergências entre herdeiros",
      "Divórcio Consensual ou Litigioso com definição equilibrada da partilha de bens comuns",
      "Ações de Fixação, Revisão, Exoneração e Execução de Pensão Alimentícia para filhos e dependentes",
      "Regulamentação de Guarda Compartilhada e definição do regime de convivência familiar",
      "Planejamento Sucessório com doação de bens com reserva de usufruto e testamentos",
    ],
    whatsAppText:
      "Olá, Dr. Antônio Cesar! Gostaria de orientações sobre Inventário de Bens ou Direito de Família.",
  },
  {
    id: "direito-consumidor-bancario",
    title: "Direito do Consumidor & Defesa Bancária",
    category: "Fraudes Bancárias · Empréstimos Consignados Não Solicitados · Juros Abusivos · Negativação Indevida",
    icon: Landmark,
    tag: "Limpeza de Nome · Devolução em Dobro · Cancelamento de Dívidas",
    summary:
      "Combate implacável a abusos de bancos, instituições financeiras e concessionárias, com cancelamento de cobranças indevidas, exclusão de restrições de crédito e reparação financeira.",
    details:
      "Aposentados, pensionistas e consumidores em geral frequentemente sofrem com descontos não autorizados de empréstimos em suas contas, fraudes via Pix e negativações injustas nos órgãos de proteção ao crédito. Ingressamos com medidas judiciais liminares imediatas para suspender os descontos, limpar o CPF e exigir a devolução dos valores com indenização por danos morais.",
    topics: [
      "Cancelamento de empréstimos consignados fraudulentos e repetição em dobro dos valores descontados",
      "Ações judiciais de ressarcimento contra fraudes eletrônicas, golpes do Pix e falhas de segurança bancária",
      "Exclusão imediata de negativações indevidas nos sistemas do SPC, Serasa e órgãos de proteção ao crédito",
      "Indenizações por danos morais em razão de cobranças abusivas, humilhantes ou restrições de crédito infundadas",
      "Revisão de juros abusivos e tarifas ilegais em contratos de financiamento e mútuo bancário",
      "Reparação civil por corte indevido ou falha grave na prestação de serviços essenciais de telefonia e energia",
    ],
    whatsAppText:
      "Olá, Dr. Antônio Cesar! Preciso de ajuda contra uma cobrança indevida, fraude bancária ou negativação.",
  },
  {
    id: "advocacia-processual-estrategica",
    title: "Advocacia Processual & Contencioso Estratégico",
    category: "Acompanhamento Processual · Recursos nos Tribunais · Sustentações Orais · Audiências · Execuções",
    icon: Gavel,
    tag: "Domínio Processual · Acompanhamento Diligente · Foco em Resultados",
    summary:
      "Representação processual completa e dedicada perante as varas judiciais de Matozinhos, comarcas da Grande BH, Tribunal de Justiça de Minas Gerais (TJMG) e tribunais superiores.",
    details:
      "O sucesso de uma demanda judicial depende da técnica processual, do cumprimento rigoroso de prazos e do preparo aprofundado para audiências e recursos. Com anos de dedicação à advocacia contenciosa, o Dr. Antônio Cesar conduz cada processo com dedicação artesanal, informando o cliente de maneira transparente a cada andamento dos autos.",
    topics: [
      "Atuação processual diligente em varas cíveis, trabalhistas, de família e juizados especiais cíveis e federais",
      "Interposição e sustentação de recursos perante o Tribunal de Justiça de Minas Gerais (TJMG) e TRT da 3ª Região",
      "Atuação perante os Tribunais Superiores em Brasília (STJ e STF) em matérias constitucionais e infraconstitucionais",
      "Realização de audiências de instrução e julgamento com preparação prévia de depoimentos e testemunhas",
      "Fase de cumprimento de sentença e execução de valores com busca patrimonial avançada de devedores",
      "Atendimento presencial no Centro de Matozinhos e consultoria online para clientes em todo o território nacional",
    ],
    whatsAppText:
      "Olá, Dr. Antônio Cesar! Gostaria de consultar sobre o andamento ou ingresso de uma ação judicial.",
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
    name: "Nathalia Karoline",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 4 meses atrás",
    highlight:
      "Fui muito bem atendida. O advogado foi atencioso, esclareceu minhas dúvidas com paciência e demonstrou profissionalismo durante o atendimento. Recomendo.",
    content:
      "Fui muito bem atendida. O advogado foi atencioso, esclareceu minhas dúvidas com paciência e demonstrou profissionalismo durante o atendimento. Recomendo.",
  },
  {
    name: "Hitalo Santos",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 8 meses atrás",
    highlight:
      "Vim com o intuito de tirar algumas dúvidas trabalhistas e fui muito bem atendido pelo Dr. Antônio. Excelente!!!",
    content:
      "Vim com o intuito de tirar algumas dúvidas trabalhistas e fui muito bem atendido pelo Dr. Antônio. Excelente!!!",
  },
  {
    name: "Bj do Concórdia",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 7 meses atrás",
    highlight:
      "O doutor é bem educado, me ajudou muito, precisamos de mais cidadãos assim no nosso brasil!!!",
    content:
      "O doutor é bem educado, me ajudou muito, precisamos de mais cidadãos assim no nosso brasil!!!",
  },
  {
    name: "warley rodrigues",
    badge: "2 avaliações · 1 foto · 5 Estrelas",
    date: "Avaliação Verificada no Google · 7 meses atrás",
    highlight:
      "Atendimento claro e eficiente, passa segurança nas orientações, recomendo.",
    content:
      "Atendimento claro e eficiente, passa segurança nas orientações, recomendo.",
  },
  {
    name: "Alvaro Antonio Fernandes",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 3 meses atrás",
    highlight:
      "Excelente atendimento. Ótimo nota 10 Advogado muito atencioso.",
    content:
      "Excelente atendimento. Ótimo nota 10 Advogado muito atencioso.",
  },
  {
    name: "Jhonn Ericky",
    badge: "2 avaliações · 3 fotos · 5 Estrelas",
    date: "Avaliação Verificada no Google · 7 meses atrás",
    highlight:
      "Excelente profissional, e atribui muito em auxiliar seus clientes ...",
    content:
      "Excelente profissional, e atribui muito em auxiliar seus clientes ...",
  },
  {
    name: "Vital Veira",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · Recente",
    highlight:
      "Gostei, advogado atencioso e competente.",
    content:
      "Gostei, advogado atencioso e competente.",
  },
  {
    name: "José Maria",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 6 meses atrás",
    highlight:
      "Meu Advogado há muitos anos.",
    content:
      "Meu Advogado há muitos anos.",
  },
  {
    name: "Laricia Soares",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 1 mês atrás",
    highlight:
      "É muito paciente, educado, compreensivo.",
    content:
      "É muito paciente educado compreensivo.",
  },
  {
    name: "Cesar Elias",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 7 meses atrás",
    highlight:
      "Conheço há muito tempo. Advogado competente.",
    content:
      "Conheço ha muito tempo. Advogado competente.",
  },
  {
    name: "Vanderley99",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 6 meses atrás",
    highlight:
      "Ótimo advogado. Já resolveu causas minhas.",
    content:
      "Ótimo advogado. Já resolveu causas minhas.",
  },
  {
    name: "Natália Oliveira",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 3 meses atrás",
    highlight:
      "Ótimo atendimento, excelente profissional.",
    content:
      "Ótimo atendimento, excelente profissional.",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona a consulta jurídica com o Dr. Antônio Cesar?",
    answer:
      "O atendimento pode ser realizado de forma presencial no escritório no Centro de Matozinhos (Av. Bento Gonçalves, 40 - Sala C) ou totalmente online via WhatsApp e videoconferência para qualquer localidade do país. Na conversa inicial, ouvimos atentamente seu relato, analisamos a documentação comprobatória e explicamos com didática e transparência se existe fundamento jurídico para um acordo ou ingresso com ação judicial.",
  },
  {
    question: "Tive problemas no trabalho ou rescisão incorreta. O que devo provar?",
    answer:
      "Recomendamos guardar todos os registros: contracheques, mensagens de WhatsApp, extrato analítico do FGTS, relatórios de ponto, fotos e nomes de testemunhas. A legislação trabalhista prevê o prazo prescricional de até 2 anos após a extinção do contrato para pleitear direitos dos últimos 5 anos. Conforme relatam nossos clientes em avaliações reais, o Dr. Antônio Cesar analisa minuciosamente cada cálculo para buscar tudo o que é devido por lei.",
  },
  {
    question: "O INSS negou minha aposentadoria ou auxílio-doença. Ainda posso conseguir?",
    answer:
      "Certamente. As decisões administrativas do INSS frequentemente desconsideram períodos trabalhados ou laudos médicos contundentes. Ter a solicitação negada na agência não tira o seu direito. Ingressamos com a ação adequada na Justiça Federal, onde a perícia é realizada por um perito médico judicial neutro, pleiteando inclusive o pagamento retroativo de todos os valores atrasados desde o primeiro pedido.",
  },
  {
    question: "Qual o procedimento para fazer um inventário de herança em Matozinhos?",
    answer:
      "Quando todos os herdeiros são maiores, capazes e estão de acordo com a partilha dos bens, o inventário pode ser realizado diretamente em cartório de notas (extrajudicial), sendo finalizado em curto prazo e com custos cartorários menores. Havendo discordância ou herdeiro menor, cuidamos de todo o processo judicial de inventário e partilha resguardando os direitos patrimoniais da família.",
  },
  {
    question: "Como agendar um horário presencial na sede em Matozinhos / MG?",
    answer:
      "O agendamento pode ser feito previamente pelo WhatsApp oficial (31) 99699-0842 para garantir que o Dr. Antônio Cesar reserve um horário exclusivo para você. Nosso escritório está localizado na Av. Bento Gonçalves, 40 - Sala C - Centro, Matozinhos - MG (CEP 35720-000), em localização de fácil acesso no centro comercial da cidade.",
  },
  {
    question: "Quais são os horários de atendimento da Advocacia Antônio Cesar?",
    answer:
      "O escritório funciona de segunda a sexta-feira, das 08:00 às 18:00. Pelo canal oficial do WhatsApp (31) 99699-0842, você pode enviar sua mensagem e agendar seu atendimento a qualquer hora.",
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
          dark ? "text-white" : "text-[#061120]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            dark ? "text-slate-300" : "text-slate-600"
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
      <main className="min-h-screen bg-[#fbfbf9] text-[#061120] selection:bg-[#d8a84e] selection:text-[#030a14]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (ROYAL MIDNIGHT WITH GOLD ACCENT)   */}
        {/* ======================================================== */}
        <div className="border-b border-[#0c203d] bg-[#061120] py-2 text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#fad771] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#d8a84e]" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                ADVOCACIA ANTÔNIO CESAR · Matozinhos - MG · Atendimento Presencial & Online ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#d8a84e] text-[#d8a84e]" />
                <span className="font-bold text-white">5,0 ★</span> (252 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de uma consulta jurídica.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-slate-200 transition-colors hover:text-white sm:inline-flex"
              >
                <WhatsAppIcon size={13} className="text-[#25D366]" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STICKY HEADER / NAVBAR                                   */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-slate-200/90 bg-white/95 py-3 shadow-md backdrop-blur-md"
              : "border-b border-slate-200/60 bg-white/90 py-3.5 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Brand Logo with Official AC Monogram */}
            <a
              href="#"
              className="group flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95"
              aria-label="Advocacia Antônio Cesar - Início"
            >
              <div className="relative shrink-0">
                <Image
                  src={LOGO_EMBLEM_SRC}
                  alt="Monograma AC - Advocacia Antônio Cesar"
                  width={140}
                  height={110}
                  className="h-11 sm:h-12 md:h-13 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-cinzel text-sm sm:text-base md:text-[1.15rem] font-bold tracking-[0.08em] text-[#061120] uppercase leading-none drop-shadow-xs transition-colors group-hover:text-[#966c26]">
                  ANTÔNIO CESAR
                </span>
                <span className="font-cinzel text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#966c26] uppercase leading-tight mt-0.5">
                  ADVOCACIA
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-px w-4 sm:w-5 bg-gradient-to-r from-[#d8a84e] to-transparent" />
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.16em] text-slate-500 uppercase leading-none">
                    Matozinhos - MG · Nota 5,0 ★ (252 reviews)
                  </span>
                </div>
              </div>
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden items-center gap-5 xl:gap-7 xl:flex">
              <a href="#servicos" className="nav-link text-[11px] whitespace-nowrap">
                Áreas de Atuação
              </a>
              <a href="#sobre" className="nav-link text-[11px] whitespace-nowrap">
                Sobre o Advogado
              </a>
              <a href="#diferenciais" className="nav-link text-[11px] whitespace-nowrap">
                Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link text-[11px] whitespace-nowrap">
                Avaliações (5,0 ★)
              </a>
              <a href="#duvidas" className="nav-link text-[11px] whitespace-nowrap">
                Dúvidas
              </a>
              <a href="#contato" className="nav-link text-[11px] whitespace-nowrap">
                Sede & Contato
              </a>
            </nav>

            {/* Right Action: WhatsApp CTA */}
            <div className="flex shrink-0 items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de consultar sobre a viabilidade do meu caso.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#030a14]" />
                <span className="hidden 2xl:inline">Atendimento WhatsApp</span>
                <span className="2xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 transition-colors hover:border-[#d8a84e] hover:text-black xl:hidden cursor-pointer"
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
                className="border-b border-slate-200 bg-white px-5 py-6 xl:hidden shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <Image
                      src={LOGO_EMBLEM_SRC}
                      alt="Monograma AC"
                      width={100}
                      height={80}
                      className="h-11 w-auto object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-cinzel text-base font-bold tracking-wider text-slate-900 uppercase leading-tight">
                        Antônio Cesar
                      </span>
                      <span className="font-cinzel text-[10px] font-semibold tracking-[0.16em] text-[#966c26] uppercase leading-tight mt-0.5">
                        Advocacia
                      </span>
                      <span className="text-[9px] font-bold tracking-[0.16em] text-slate-500 uppercase mt-1">
                        Av. Bento Gonçalves, 40 · Matozinhos - MG
                      </span>
                    </div>
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#966c26]"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#d8a84e]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#966c26]"
                  >
                    <span>Sobre Dr. Antônio Cesar</span>
                    <ArrowRight size={14} className="text-[#d8a84e]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#966c26]"
                  >
                    <span>4 Pilares & Diferenciais</span>
                    <ArrowRight size={14} className="text-[#d8a84e]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#966c26]"
                  >
                    <span>Avaliações Google (5,0 ★ · 252 reviews)</span>
                    <ArrowRight size={14} className="text-[#d8a84e]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#966c26]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#d8a84e]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#966c26]"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-[#d8a84e]" />
                  </a>

                  <div className="pt-4 border-t border-slate-100">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de agendar uma consulta sobre o meu caso.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com Dr. Antônio Cesar</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION + MÉTRICAS — [MODO CLARO]          */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fbfbf9]">
          {/* Subtle Ambient Light Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#fad771]/20 via-[#f4f3ec]/60 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#e8e6dc]/70 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#d8a84e]/40 bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#966c26] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#d8a84e] animate-pulse" />
                    ADVOCACIA ANTÔNIO CESAR · MATOZINHOS - MG
                  </span>
                </motion.div>

                {/* H1 Headline directly from brand artwork */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.15] font-bold tracking-tight text-[#061120] sm:text-5xl lg:text-[3.25rem]"
                >
                  Soluções Jurídicas Eficientes para Proteger o que{" "}
                  <span className="bg-gradient-to-r from-[#966c26] via-[#d8a84e] to-[#734e15] bg-clip-text text-transparent">
                    Realmente Importa.
                  </span>
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  Com nota máxima de <strong className="text-slate-900 font-bold">5,0 ★ no Google e mais de 250 avaliações</strong>, o <strong className="text-slate-900 font-bold">Dr. Antônio Cesar</strong> oferece representação processual ética, experiente e combativa nas áreas <strong className="text-slate-900 font-bold">Trabalhista, Previdenciária (INSS) e Cível</strong>, com sede no Centro de Matozinhos e atendimento online para todo o Brasil.
                </motion.p>

                {/* Direct Trust Highlight with Real Client Review */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs"
                >
                  <Award size={20} className="text-[#d8a84e] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 font-bold">Reconhecimento comprovado no Google (5,0 ★):</strong> &ldquo;Fui muito bem atendida. O advogado foi atencioso, esclareceu minhas dúvidas com paciência e demonstrou profissionalismo durante o atendimento. Recomendo.&rdquo; (Nathalia Karoline · Avaliação no Google)
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de consultar sobre a viabilidade do meu caso.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar no WhatsApp com o Dr. Antônio Cesar</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#servicos"
                    variant="champagne"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conhecer Especialidades</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Visual Frame (Dr. Antônio Cesar Photo) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Frame */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-2.5 shadow-2xl shadow-slate-300/60">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Antônio Cesar - Advogado Especialista em Matozinhos - MG"
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030a14]/75 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-slate-200/80 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-slate-900">
                            Dr. Antônio Cesar
                          </p>
                          <p className="text-[11px] text-slate-600">
                            Advogado Processual · Matozinhos - MG
                          </p>
                        </div>
                        <span className="rounded-md border border-[#d8a84e]/40 bg-[#fdfaf3] px-2.5 py-1 text-[10px] font-bold text-[#966c26]">
                          OAB/MG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 5.0 Rating - 252 reviews) */}
                  <div className="absolute -top-5 -left-5 hidden rounded-xl border border-slate-200 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-200">
                      <GoogleIcon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-[#d8a84e] text-[#d8a84e]"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-slate-900 mt-0.5">
                        5,0 no Google · 252 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Especialidade) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <Scale size={16} className="text-[#966c26]" />
                    <span className="text-xs font-bold tracking-wide text-slate-900">
                      Trabalhista, Civil & INSS ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN HERO */}
            <div className="mt-14 border-t border-slate-200/80 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#061120]">
                    5,0 ★
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-slate-500">252 avaliações verificadas</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#061120]">
                    Matozinhos - MG
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Sede Centralizada</p>
                  <p className="text-[11px] text-slate-500">Av. Bento Gonçalves, 40 - Sl C</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#061120]">
                    Especializado
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Trabalhista, Civil & INSS</p>
                  <p className="text-[11px] text-slate-500">Atuação processual aprofundada</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#061120]">
                    Combatividade ⚖️
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Presencial & Online</p>
                  <p className="text-[11px] text-slate-500">Para Matozinhos e todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: PILARES & ÁREAS DE ATUAÇÃO — [MODO ESCURO]      */}
        {/* ======================================================== */}
        <section id="servicos" className="border-t border-[#d8a84e]/30 bg-[#061120] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="Áreas de Atuação & Soluções Jurídicas"
                dark={true}
                description="Expertise técnica sólida e combatividade processual para resguardar seus direitos em Matozinhos, tribunais de Minas Gerais e órgãos públicos."
              >
                Pilares de Excelência Jurídica
              </Heading>

              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de consultar sobre a viabilidade da minha causa.")}
                target="_blank"
                variant="gold"
                size="md"
              >
                <WhatsAppIcon size={15} />
                <span>Consultar Meu Caso no WhatsApp</span>
              </GlowingButton>
            </div>

            {/* Practice Areas Grid */}
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#d8a84e]/30 bg-[#0c203d] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#d8a84e] hover:shadow-xl hover:shadow-[#d8a84e]/15"
                  >
                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#10294d] text-[#d8a84e] border border-[#d8a84e]/40 transition-colors group-hover:bg-[#d8a84e] group-hover:text-[#030a14]">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#10294d] px-3 py-1 text-[10px] font-bold text-[#d8a84e] uppercase tracking-wider border border-[#d8a84e]/30">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white group-hover:text-[#fad771] transition-colors">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#d8a84e]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-slate-300">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#d8a84e]/25 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex w-full items-center justify-between text-xs font-bold text-[#d8a84e] transition-colors hover:text-white cursor-pointer"
                      >
                        <span>Ver Procedimentos & Detalhes</span>
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
        {/* DOBRA 3: SOBRE O ADVOGADO & ESCRITÓRIO — [MODO CLARO]    */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-slate-200 bg-[#f4f3ec] py-20 lg:py-28 text-[#061120]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Visual Composition with Photo & Desk Detail */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Main Portrait Frame */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-2.5 shadow-2xl shadow-slate-300/60">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src="/dr-antonio-cesar-portrait.jpg"
                        alt="Dr. Antônio Cesar - Advogado em Matozinhos"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030a14]/75 via-transparent to-transparent opacity-75" />

                      {/* Overlay Badge at Bottom of Photo */}
                      <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-serif text-sm font-bold text-slate-900">
                              Advocacia Antônio Cesar
                            </p>
                            <p className="text-[11px] text-slate-600 mt-0.5">
                              Av. Bento Gonçalves, 40 · Matozinhos - MG
                            </p>
                          </div>
                          <span className="rounded-md border border-[#d8a84e]/40 bg-[#fdfaf3] px-2.5 py-1 text-[10px] font-bold text-[#966c26]">
                            Centro
                          </span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-600">
                          <span>Atendimento Presencial e Online</span>
                          <span className="text-[#1ea952] font-semibold">Nota 5,0 ★ (252 avaliações)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Pill */}
                  <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-xl">
                    <Star size={13} className="fill-[#d8a84e] text-[#d8a84e]" />
                    <span className="text-[11px] font-bold text-slate-900">
                      5,0 no Google · 252 Avaliações
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre o Advogado & Escritório"
                  dark={false}
                  description="Uma trajetória alicerçada na seriedade, no estudo aprofundado de cada causa e no acolhimento humano a cada cliente que busca a justiça."
                >
                  Advocacia Antônio Cesar: Tradição, Ética e Eficiência em Matozinhos
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                  <p>
                    Com sede no Centro de <strong className="text-slate-900 font-bold">Matozinhos - MG</strong> (Av. Bento Gonçalves, 40, Sala C), a <strong className="text-slate-900 font-bold">Advocacia Antônio Cesar</strong> destaca-se pela excelência processual e pelo tratamento individualizado concedido a cada cidadão e empresa.
                  </p>
                  <p>
                    Liderado pelo <strong className="text-slate-900 font-bold">Dr. Antônio Cesar</strong>, o escritório é amplamente reconhecido pela atuação nas áreas de <strong className="text-slate-900 font-bold">Direito Trabalhista, Direito Previdenciário (INSS) e Direito Civil</strong>, aliando sólida bagagem jurídica ao acompanhamento constante de cada fase do processo.
                  </p>
                  <p>
                    O diferencial que consolidou a marca com <strong className="text-slate-900 font-bold">nota máxima de 5,0 estrelas e mais de 250 avaliações no Google</strong> é a postura paciente, transparente e atenciosa. Aqui, o cliente tem suas dúvidas explicadas sem juridiquês e recebe suporte combativo para proteger seus direitos e o seu patrimônio.
                  </p>
                </div>

                {/* 4 Brand Pillars (From Client Brand Identity) */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <HeartHandshake size={20} className="text-[#d8a84e] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Atendimento Personalizado
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Cada cliente é ouvido com atenção, calma e respeito, entendendo a singularidade de cada história.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <Shield size={20} className="text-[#d8a84e] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Ética e Transparência
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Clareza total sobre os riscos e as reais possibilidades da ação, sem promessas vazias.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <BadgeCheck size={20} className="text-[#d8a84e] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Experiência e Especialização
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Anos de vivência prática nos tribunais com fundamentação jurídica e preparo probatório refinado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <Sparkles size={20} className="text-[#d8a84e] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Foco em Resultados
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Dedicação incansável em cada petição e audiência para alcançar a vitória justa e célere na causa.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de conversar sobre o meu caso.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com o Dr. Antônio Cesar</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 transition-colors hover:text-[#966c26]"
                  >
                    <InstagramIcon size={15} />
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>

                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#966c26] transition-colors hover:text-black"
                  >
                    <GoogleIcon size={14} />
                    <span>Ver Avaliações no Google (5,0 ★)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 4: OS 4 PILARES & DIFERENCIAIS — [MODO ESCURO]     */}
        {/* ======================================================== */}
        <section id="diferenciais" className="border-t border-[#d8a84e]/30 bg-[#030a14] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow-dark justify-center mb-3">
                Por que Escolher a Advocacia Antônio Cesar
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                O Padrão de Excelência Atestado por 252 Clientes
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Princípios demonstrados no dia a dia processual e reconhecidos por quem já confiou seus direitos ao Dr. Antônio Cesar.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#d8a84e]/30 bg-[#061120] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8a84e]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0c203d] text-[#d8a84e] border border-[#d8a84e]/40">
                  <Users size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Atendimento Personalizado
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Escuta paciente e atenta. Suas dúvidas são esclarecidas com calma, sem pressa e com máxima empatia.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d8a84e]/30 bg-[#061120] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8a84e]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0c203d] text-[#d8a84e] border border-[#d8a84e]/40">
                  <Shield size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Ética e Transparência
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Compromisso absoluto com a verdade e prestação de contas periódica em cada etapa da sua ação.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d8a84e]/30 bg-[#061120] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8a84e]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0c203d] text-[#d8a84e] border border-[#d8a84e]/40">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Experiência & Especialização
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Anos de atuação processual especializada nas áreas Trabalhista, Previdenciária e Civil em Minas Gerais.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d8a84e]/30 bg-[#061120] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8a84e]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0c203d] text-[#d8a84e] border border-[#d8a84e]/40">
                  <Scale size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Foco em Resultados
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Combatividade estratégica para buscar o melhor resultado financeiro e jurídico para o seu caso.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de agendar um atendimento personalizado.")}
                target="_blank"
                variant="gold"
                size="md"
              >
                <WhatsAppIcon size={15} />
                <span>Iniciar Atendimento Personalizado no WhatsApp</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 5: AVALIAÇÕES GOOGLE MEU NEGÓCIO 5,0 ★ — [MODO CLARO] */}
        {/* ======================================================== */}
        <section id="depoimentos" className="border-t border-slate-200 bg-[#fbfbf9] py-20 lg:py-28 text-[#061120]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="eyebrow mb-3.5">
                  Avaliações Verificadas no Google
                </span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#061120] sm:text-4xl">
                  A Confiança de Quem Teve Seus Direitos Defendidos
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#d8a84e] text-[#d8a84e]"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">5,0 de 5,0</span>
                  <span className="text-xs text-slate-500">
                    · Mais de 250 avaliações no Google Meu Negócio em Matozinhos - MG
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xs transition-colors hover:border-[#d8a84e] hover:bg-slate-50"
              >
                <GoogleIcon size={14} />
                <span>Ver Perfil e Avaliações no Google</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Reviews Grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#d8a84e] hover:shadow-md"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#d8a84e] text-[#d8a84e]"
                        />
                      ))}
                    </div>

                    {/* Highlight Quote */}
                    <p className="mt-3 font-serif text-sm font-bold text-slate-900 leading-snug">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    {/* Full Review Text */}
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="font-serif text-xs font-bold text-slate-900">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#966c26] font-semibold">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#e2e8f0] bg-[#f4f3ec] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-slate-900 sm:text-xl">
                Precisa de orientação jurídica segura para o seu caso?
              </h3>
              <p className="mt-2 text-xs text-slate-600 max-w-xl mx-auto">
                Não enfrente dúvidas ou conflitos jurídicos sozinho. Conte com o Dr. Antônio Cesar para defender seus direitos com total dedicação e competência.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Li os depoimentos no site e gostaria de agendar uma consulta.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com o Dr. Antônio Cesar no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO — [MODO ESCURO]     */}
        {/* ======================================================== */}
        <section className="border-t border-[#d8a84e]/30 bg-[#061120] text-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow-dark justify-center mb-3">
                Processo Transparente
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Como Funciona o Seu Atendimento
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Etapas bem definidas e didáticas, garantindo que você compreenda cada passo com total clareza.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#d8a84e]/30 bg-[#0c203d] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8a84e]">
                <span className="font-serif text-3xl font-bold text-[#d8a84e]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Primeiro Contato
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Envie sua mensagem pelo WhatsApp ou agende sua visita ao escritório no Centro de Matozinhos para uma triagem inicial.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d8a84e]/30 bg-[#0c203d] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8a84e]">
                <span className="font-serif text-3xl font-bold text-[#d8a84e]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Análise Documental
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Examinamos contratos, rescisões, carteiras de trabalho, extratos do CNIS ou notificações para verificar a viabilidade da demanda.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d8a84e]/30 bg-[#0c203d] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8a84e]">
                <span className="font-serif text-3xl font-bold text-[#d8a84e]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Estratégia & Ação
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Construímos a melhor estratégia jurídica, propondo acordo extrajudicial ou ingressando com a competente ação perante o Judiciário.
                </p>
              </div>

              <div className="rounded-2xl border border-[#d8a84e]/30 bg-[#0c203d] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8a84e]">
                <span className="font-serif text-3xl font-bold text-[#d8a84e]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Acompanhamento Contínuo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Você recebe atualizações claras sobre cada andamento processual até a efetiva conclusão e liberação dos valores devidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ — [MODO CLARO]          */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-slate-200 bg-[#f4f3ec] py-20 lg:py-28 text-[#061120]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#061120] sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Respostas diretas e esclarecedoras sobre consultas, causas trabalhistas, previdenciárias e inventários.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-slate-900 transition-colors hover:text-[#966c26] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#d8a84e]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#d8a84e]" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-slate-100 px-5 pt-3 pb-5 text-xs leading-relaxed text-slate-600"
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
              <p className="text-xs text-slate-500">
                Sua dúvida específica não está listada acima?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de tirar uma dúvida que não encontrei no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#061120] hover:text-[#966c26] hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Tire sua dúvida diretamente com o Dr. Antônio Cesar no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDE & CONTATO — [MODO ESCURO]     */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#d8a84e]/30 bg-[#030a14] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info */}
              <div className="lg:col-span-5">
                <span className="eyebrow-dark mb-3.5">Localização & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Estamos Prontos para Atender Você em Matozinhos
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Visite nosso escritório no Centro de Matozinhos ou receba suporte confidencial e ágil pelo WhatsApp de onde você estiver.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Sede Matozinhos */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d8a84e]/35 bg-[#061120] text-[#d8a84e]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Sede em Matozinhos / MG
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {ADDRESS_MATOZINHOS}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#d8a84e] font-semibold hover:underline block mt-1"
                      >
                        Ver localização e rotas no Google Maps →
                      </a>
                    </div>
                  </div>

                  {/* Telefone & WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d8a84e]/35 bg-[#061120] text-[#d8a84e]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Telefone & WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Telefone / WhatsApp: <strong className="text-white">{PHONE_DISPLAY}</strong>
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de agendar um atendimento.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#d8a84e] hover:underline block mt-1"
                      >
                        Clique para conversar direto no WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* E-mail de Contato */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d8a84e]/35 bg-[#061120] text-[#d8a84e]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        E-mail de Contato
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Canal direto: <a href={`mailto:${EMAIL_CONTACT}`} className="text-white hover:underline">{EMAIL_CONTACT}</a>
                      </p>
                    </div>
                  </div>

                  {/* Horário */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d8a84e]/35 bg-[#061120] text-[#d8a84e]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Segunda a Sexta: 08:00 às 18:00
                      </p>
                      <p className="text-[11px] text-[#fad771]">
                        Atendimento ágil pelo WhatsApp para dúvidas urgentes.
                      </p>
                    </div>
                  </div>

                  {/* Redes Sociais */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#d8a84e]/35 bg-[#061120] text-[#d8a84e]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Redes Sociais & Perfis Oficiais
                      </p>
                      <div className="mt-1 flex flex-col gap-1 text-xs">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-white"
                        >
                          Instagram Oficial: <span className="font-bold text-white">{INSTAGRAM_HANDLE}</span>
                        </a>
                        <a
                          href={GOOGLE_SEARCH_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#d8a84e] hover:underline"
                        >
                          Perfil Google: Advocacia Antônio Cesar (5,0 ★ · 252 avaliações)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#d8a84e]/35 bg-[#061120] p-8 shadow-xl shadow-black/60">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#d8a84e]">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                    Inicie seu Atendimento com a Advocacia Antônio Cesar
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Selecione a sua área de interesse para abrir o WhatsApp oficial com a mensagem apropriada:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Preciso de orientação sobre uma causa Trabalhista.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0c203d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#d8a84e] hover:text-white"
                    >
                      <span>Causa Trabalhista</span>
                      <ArrowRight size={14} className="text-[#d8a84e]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de consultar sobre Aposentadoria ou Benefício do INSS.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0c203d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#d8a84e] hover:text-white"
                    >
                      <span>Aposentadorias & INSS</span>
                      <ArrowRight size={14} className="text-[#d8a84e]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Preciso de assessoria em Direito Cível / Contratos / Indenizações.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0c203d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#d8a84e] hover:text-white"
                    >
                      <span>Cível & Indenizações</span>
                      <ArrowRight size={14} className="text-[#d8a84e]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de orientações sobre Inventário de Bens ou Direito de Família.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0c203d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#d8a84e] hover:text-white"
                    >
                      <span>Inventários & Família</span>
                      <ArrowRight size={14} className="text-[#d8a84e]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Preciso de ajuda contra uma cobrança indevida, juros bancários ou negativação.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0c203d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#d8a84e] hover:text-white"
                    >
                      <span>Consumidor & Bancário</span>
                      <ArrowRight size={14} className="text-[#d8a84e]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de orientações sobre representação processual estratégica.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0c203d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#d8a84e] hover:text-white"
                    >
                      <span>Advocacia Processual</span>
                      <ArrowRight size={14} className="text-[#d8a84e]" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-slate-700/60 pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de iniciar uma consulta jurídica.")}
                      target="_blank"
                      variant="gold"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com Dr. Antônio Cesar</span>
                    </GlowingButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: FOOTER INSTITUCIONAL — [MODO ESCURO]            */}
        {/* ======================================================== */}
        <footer className="border-t border-[#d8a84e]/25 bg-[#02070f] pt-16 pb-12 text-slate-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Advocacia Antônio Cesar"
                    width={420}
                    height={140}
                    className="h-14 sm:h-16 md:h-18 w-auto max-w-[280px] sm:max-w-[340px] object-contain object-left drop-shadow-md"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-md">
                  ⚖️ Advocacia Antônio Cesar — Advocacia e assessoria processual em Matozinhos - MG e região metropolitana de Belo Horizonte. Atuação dedicada e experiente nas áreas Trabalhista, Previdenciária (INSS), Cível, Família e Direito do Consumidor.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#061120] text-slate-300 transition-colors hover:border-[#d8a84e] hover:text-white"
                    aria-label="Instagram da Advocacia Antônio Cesar"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dr. Antônio Cesar!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#061120] text-slate-300 transition-colors hover:border-[#d8a84e] hover:text-white"
                    aria-label="WhatsApp da Advocacia Antônio Cesar"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#061120] text-slate-300 transition-colors hover:border-[#d8a84e] hover:text-white"
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
                    <a href="#servicos" className="footer-link">
                      Áreas de Atuação
                    </a>
                  </li>
                  <li>
                    <a href="#sobre" className="footer-link">
                      Sobre o Advogado
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
                      Sede em Matozinhos
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & OAB Column */}
              <div className="lg:col-span-4">
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                  Informações Institucionais & Ética
                </p>
                <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
                  Este website possui caráter exclusivamente informativo e institucional, em estrita observância ao Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não visa à captação indevida de clientela nem substitui consulta jurídica formal.
                </p>
                <div className="mt-4 rounded-lg border border-slate-800 bg-[#061120] p-3 text-[11px] text-slate-300">
                  <p className="font-bold text-white">
                    ADVOCACIA ANTÔNIO CESAR
                  </p>
                  <p className="mt-0.5 text-[#d8a84e]">
                    Sede: {ADDRESS_MATOZINHOS}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Telefone / WhatsApp: {PHONE_DISPLAY}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-center text-[11px] sm:flex-row sm:text-left">
              <p>
                © {new Date().getFullYear()} ADVOCACIA ANTÔNIO CESAR. Todos os direitos reservados.
              </p>
              <p className="text-[#d8a84e]">
                Matozinhos · Grande Belo Horizonte · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá, Dr. Antônio Cesar! Gostaria de agendar uma consulta jurídica.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Advocacia Antônio Cesar"
            className="group flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-black text-white shadow-xl shadow-black/60 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          >
            <WhatsAppIcon size={19} />
            <span className="hidden sm:inline tracking-wide font-bold">
              Falar no WhatsApp
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
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#d8a84e]/55 bg-[#061120] p-6 text-white shadow-2xl sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-[#0c203d] text-slate-300 hover:border-white hover:text-white cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2.5 text-xs font-bold text-[#d8a84e] uppercase tracking-wider">
                  <Image
                    src={LOGO_EMBLEM_SRC}
                    alt="Monograma AC"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                  <span>Área de Atuação Especializada</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {selectedPractice.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#d8a84e]">
                  {selectedPractice.category}
                </p>

                <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {selectedPractice.details}
                </p>

                <div className="mt-6 border-t border-slate-800 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Principais Situações & Procedimentos Atendidos:
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedPractice.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[#d8a84e] shrink-0 mt-0.5"
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
                    <span>Consultar Dr. Antônio Cesar nesta Área</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setSelectedPractice(null)}
                    className="w-full rounded-lg border border-slate-700 bg-[#0c203d] px-5 py-3 text-xs font-bold text-slate-300 hover:bg-[#10294d] hover:text-white sm:w-auto cursor-pointer"
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
