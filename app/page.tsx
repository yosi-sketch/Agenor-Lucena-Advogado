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
  Baby,
  HeartHandshake,
  Landmark,
  FileCheck2,
  FileText,
  Lock,
  Headphones,
  Home as HomeIcon,
  Building2,
  Compass,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Firm Information — Santos Teixeira Advogados Associados
const WHATSAPP_NUMBER = "5537999674308";
const PHONE_DISPLAY = "(37) 99967-4308";
const EMAIL_CONTACT = "contato@santosteixeiraadvogados.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/santosteixeiraadvogados/";
const INSTAGRAM_HANDLE = "@santosteixeiraadvogados";
const INSTAGRAM_STATS = "3.047 seguidores · 126 posts";
const LAWYER_INSTAGRAM_URL = "https://www.instagram.com/wesleysantos.adv/";
const LAWYER_INSTAGRAM_HANDLE = "@wesleysantos.adv";

const ADDRESS_OLIVEIRA =
  "Praça XV de Novembro, 20 - 2° andar - Sala 202 (Condomínio Shopping XV) - Centro, Oliveira - MG, 35540-000";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Santos+Teixeira+Advogados+Associados%0AOliveira+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=8e995f6d8e2c150c&sxsrf=AKL5yDiJB6PFucVIxkFghHZVsSc9sXhIRw:1793284906329&q=santos+teixeira+advogados+associados+oliveira+endere%C3%A7o&ludocid=3790791552436941517&sa=X&ved=2ahUKEwi-gsruut-XAxUuFbkGHWhUKSwQ6BN6BAg0EAI";

// Official assets generated from the new client logo & photoshoot
const LOGO_SRC = "/santos-teixeira-logo-trimmed.png";
const LOGO_WHITE_SRC = "/santos-teixeira-logo-white.png";
const EMBLEM_SRC = "/emblema-st.png";
const FOTO_HERO_SRC = "/dr-wesley-santos.jpg";
const FOTO_PORTRAIT_SRC = "/wesley-santos-portrait.jpg";
const FOTO_OFFICE_SRC = "/escritorio-santos-teixeira.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Wesley Santos / Santos Teixeira Advogados! Gostaria de agendar uma consulta jurídica especializada sobre meu caso.";
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
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário: Aposentadorias & Benefícios do INSS",
    category: "Aposentadorias Urbanas e Rurais · Planejamento Previdenciário · BPC/LOAS · Auxílios · Salário Maternidade",
    icon: Landmark,
    tag: "Concessão Mais Vantajosa · Cálculos de Transição · Atrasados na Justiça Federal",
    summary:
      "Garantia dos seus direitos previdenciários com planejamento individualizado, revisão de CNIS e ação judicial ágil para reverter indeferimentos do INSS com recebimento de todos os atrasados.",
    details:
      "Com as constantes alterações legislativas e a complexidade das regras de transição da Reforma da Previdência, dar entrada sozinho no INSS frequentemente resulta em perda substancial de renda mensal ou indeferimentos indevidos. Na Santos Teixeira Advogados, realizamos a análise técnica minuciosa de todo o seu histórico contributivo, computamos tempo rural e especial insalubre e definimos a regra que concederá o benefício de maior valor possível para você e sua família.",
    topics: [
      "Planejamento Previdenciário Estratégico: saiba a data exata e o melhor momento para se aposentar com a renda máxima",
      "Aposentadoria por Tempo de Contribuição e por Idade (regras de transição, pedágios 50% e 100%, pontos e idade mínima)",
      "Aposentadoria Rural e Segurado Especial com comprovação documental do trabalho na lavoura",
      "Benefício de Prestação Continuada (BPC/LOAS) para idosos acima de 65 anos e pessoas com deficiência (PcD/Autismo)",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Incapacidade Permanente",
      "Salário Maternidade para desempregadas, autônomas (MEI) e trabalhadoras do campo",
      "Pensão por Morte com habilitação rápida para cônjuges, companheiros e dependentes",
      "Ação Judicial perante a Justiça Federal para combater decisões injustas do INSS com cobrança de parcelas retroativas",
    ],
    whatsAppText:
      "Olá, Dr. Wesley Santos! Gostaria de consultar sobre Aposentadoria, Planejamento Previdenciário ou Benefício do INSS.",
  },
  {
    id: "usucapiao-regularizacao-imobiliaria",
    title: "Usucapião & Regularização Imobiliária",
    category: "Usucapião Extrajudicial em Cartório · Usucapião Judicial · Imóveis Sem Escritura · REURB · Adjudicação Compulsória",
    icon: HomeIcon,
    tag: "Escritura Definitiva · Segurança Patrimonial · Valorização do Imóvel",
    summary:
      "Transforme a posse do seu imóvel em propriedade definitiva com matrícula no Cartório de Registro de Imóveis. Mais segurança jurídica, facilidade para venda, financiamento e herança.",
    details:
      "Milhares de proprietários em Oliveira e no interior de Minas possuem imóveis adquiridos por 'contrato de gaveta', herança não partilhada ou posse mansa de longos anos, sem a devida escritura registrada. Isso gera enorme desvalorização do imóvel e risco patrimonial constante. Nossa equipe é especializada em Usucapião Extrajudicial (feito diretamente no Cartório de Imóveis, com rapidez e sem processo judicial) e Usucapião Judicial para terrenos urbanos, casas, sítios e fazendas.",
    topics: [
      "Usucapião Extrajudicial em Cartório de Registro de Imóveis: procedimento célere e sem litígio",
      "Usucapião Judicial (Extraordinária, Ordinária, Especial Urbana e Rural) para regularização de áreas contestadas",
      "Adjudicação Compulsória Extrajudicial para contratos quitados quando o vendedor faleceu ou desapareceu",
      "Regularização Fundiária Urbana e Rural (REURB) para regularização de loteamentos e áreas consolidadas",
      "Assessoria Completa na Compra e Venda de Imóveis: Due Diligence, levantamento de certidões e análise de riscos",
      "Retificação de Área e Desmembramento de Terrenos com averbação na matrícula imobiliária",
    ],
    whatsAppText:
      "Olá, Dr. Wesley Santos! Gostaria de orientações sobre Usucapião e Regularização de Imóvel.",
  },
  {
    id: "direito-de-familia-divorcio",
    title: "Direito de Família: Divórcio, Guarda & Pensão Alimentícia",
    category: "Divórcio Consensual em Cartório · Divórcio Litigioso · Guarda Compartilhada · Pensão Alimentícia Urgente",
    icon: Users,
    tag: "Atendimento Humanizado · Resguardo dos Filhos · Condução Pacificadora",
    summary:
      "Condução acolhedora e resolutiva para encerrar ciclos com segurança patrimonial e resguardar integralmente o bem-estar psicológico e material dos seus filhos.",
    details:
      "Disputas familiares exigem um olhar sensível somado a uma postura jurídica firme e pacificadora. Atuamos com extrema agilidade em divórcios em cartório de notas para casais que buscam uma solução consensual e pacífica, e com defesa intransigente em divórcios litigiosos onde há partilha complexa de bens, empresas ou disputas de guarda e pensão alimentícia.",
    topics: [
      "Divórcio Consensual em Cartório de Notas: celeridade máxima, sem audiências e em poucos dias",
      "Divórcio Litigioso Estratégico com blindagem e divisão justa do patrimônio do casal",
      "Guarda Compartilhada ou Unilateral estruturada com foco exclusivo no bem-estar dos filhos",
      "Regulamentação de Regime de Convivência, férias escolares e períodos comemorativos",
      "Fixação de Pensão Alimentícia Provisória urgente e cobrança de valores em atraso (prisão ou penhora)",
      "Ação Revisional de Alimentos para readequação de valores por alteração na renda familiar",
      "Dissolução de União Estável com reconhecimento de direitos sucessórios e patrimoniais",
    ],
    whatsAppText:
      "Olá, Dr. Wesley Santos! Preciso de orientações sobre Divórcio, Guarda ou Pensão Alimentícia.",
  },
  {
    id: "inventarios-planejamento-sucessorio",
    title: "Sucessões & Inventários: Planejamento Familiar",
    category: "Inventário Extrajudicial em Cartório · Inventário Judicial · Partilha Amigável · Testamentos · Economia Tributária",
    icon: FileText,
    tag: "Descomplicação em Cartório · Economia de ITCD · Preservação do Patrimônio",
    summary:
      "Condução transparente e pacífica da sucessão familiar. Agilidade em cartório de notas para transferência rápida de herança com menor custo de impostos e sem desgaste entre herdeiros.",
    details:
      "O falecimento de um ente querido é um momento delicado que não deve ser agravado por conflitos patrimoniais ou anos de espera na justiça comum. Havendo consenso entre herdeiros capazes, realizamos o inventário extrajudicial em cartório com rapidez incomparável, calculando com precisão os tributos (ITCD) para evitar pagamentos indevidos e garantindo que cada herdeiro receba seu quinhão de forma segura.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas: partilha concluída em poucas semanas",
      "Planejamento Tributário Sucessório com redução legal dos custos de ITCD e taxas cartorárias",
      "Inventário Judicial quando há herdeiros menores, testamento ou litígio patrimonial pontual",
      "Sobrepartilha de bens sonegados ou descobertos após o inventário original",
      "Planejamento Sucessório Familiar: doações em vida com reserva de usufruto e testamentos públicos",
      "Alvarás Judiciais para liberação de saldos bancários, FGTS e PIS de falecidos",
    ],
    whatsAppText:
      "Olá, Dr. Wesley Santos! Gostaria de uma consulta sobre Inventário em Cartório ou Sucessões.",
  },
  {
    id: "assessoria-juridica-contratos",
    title: "Contratos & Assessoria Jurídica Estratégica",
    category: "Contratos de Compra e Venda · Locação Comercial · Cessão de Direitos · Acordos Extrajudiciais",
    icon: Shield,
    tag: "Prevenção de Riscos · Validade Jurídica Inquestionável · Notificações Extrajudiciais",
    summary:
      "Assessoria contratual estratégica para proteger seus negócios e aquisições imobiliárias, blindando seu patrimônio contra cláusulas abusivas e insegurança jurídica.",
    details:
      "A melhor forma de vencer uma disputa jurídica é preveni-la antes que aconteça. Elaboramos e revisamos contratos complexos de compra e venda de imóveis rurais e urbanos, contratos de locação comercial, contratos de prestação de serviços e termos de acordo extrajudicial, assegurando clareza irrevogável e equilíbrio contratual para que você durma tranquilo.",
    topics: [
      "Elaboração e Revisão de Contratos de Compra e Venda e Promessa de Compra e Venda de Imóveis",
      "Contratos de Locação Comercial e Residencial com cláusulas de garantia sólidas",
      "Contratos de Cessão de Direitos Possessórios e Instrumentos Particulares",
      "Elaboração de Notificações Extrajudiciais com valor formal para constituição em mora",
      "Mediação e Negociação Extrajudicial de débitos e controvérsias patrimoniais",
      "Consultoria preventiva para famílias, produtores rurais e empreendedores locais",
    ],
    whatsAppText:
      "Olá, Dr. Wesley Santos! Gostaria de consultar sobre Elaboração/Revisão de Contratos ou Assessoria Jurídica.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category:
    | "Dr. Wesley Santos (dr)"
    | "Eficiência & Rapidez (efficiency)"
    | "Atencioso & Dedicado (attentive)"
    | "Recepção & Ambiente (reception)"
    | "Imóveis & Contratos";
  highlight: string;
  content: string;
  ownerReply?: string;
  ownerDate?: string;
}

const clientReviews: Review[] = [
  {
    name: "Neide",
    badge: "2 avaliações · 5 Estrelas",
    date: "1 mês atrás",
    category: "Imóveis & Contratos",
    highlight: "Santos Teixeira Advogados Associados realizou uma análise contratual minuciosa e precisa. Extrema segurança jurídica!",
    content: "Santos Teixeira Advogados Associados realizou uma análise contratual minuciosa e precisa. Sua atuação técnica trouxe extrema segurança jurídica, com apontamentos claros e total transparência. Recomendo os seus serviços pela seriedade, competência e agilidade.",
  },
  {
    name: "Sebastião Silva",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 ano atrás",
    category: "Imóveis & Contratos",
    highlight: "Advogado muito eficiente. Muito bom trabalho na regularização do bem imóvel!",
    content: "advogado muito eficiente. muito bom trabalho",
    ownerReply: "Foi uma honra poder contribuir para a efetivação da tão almejada regularização do bem imóvel, concretizando um importante passo na garantia da segurança jurídica e do direito à propriedade.",
    ownerDate: "1 ano atrás",
  },
  {
    name: "Cris Borges",
    badge: "1 avaliação · 5 Estrelas",
    date: "5 meses atrás",
    category: "Dr. Wesley Santos (dr)",
    highlight: "Profissional extremamente competente, ético e disponível. Recomendo a todos o serviço do escritório SANTOS TEIXEIRA!",
    content: "Quero deixar aqui meu agradecimento ao Dr. Wesley. Ele é um excelente advogado, profissional extremamente competente, ético e disponível. Esclareceu todas as minhas dúvidas e cuidou do meu caso com muita responsabilidade. Recomendo a todos o serviço do escritório \"SANTOS TEIXEIRA ADVOGADOS ASSOCIADOS\".",
  },
  {
    name: "Amanda Resende",
    badge: "4 avaliações · 5 Estrelas",
    date: "3 meses atrás",
    category: "Atencioso & Dedicado (attentive)",
    highlight: "Excelente advogado, dá toda atenção e é super correto, só tenho a agradecer!",
    content: "Excelente advogado, da toda atenção e é super correto , só tenho a agradecer",
    ownerReply: "Muito obrigado pelas palavras de reconhecimento! Fico muito feliz em saber que meu atendimento correspondeu às suas expectativas. Trabalho sempre com dedicação, transparência e compromisso para oferecer o melhor suporte possível aos meus clientes. Conte comigo sempre que precisar.",
    ownerDate: "3 meses atrás",
  },
  {
    name: "Suely Algusta",
    badge: "2 avaliações · 5 Estrelas",
    date: "1 mês atrás",
    category: "Dr. Wesley Santos (dr)",
    highlight: "O Dr. Wesley é um excelente profissional, muito atencioso e competente, só tenho a agradecer pela dedicação!",
    content: "Minha experiência foi ótima pois,o Dr Weslley é um excelente profissional muito atencioso e competente só tenho a agradecer pela dedicação , que Deus o abençoa sempre muito obrigada por tudo 🙏🏼",
  },
  {
    name: "Jose Antonio Queiroz",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Recepção & Ambiente (reception)",
    highlight: "Ambiente acolhedor na recepção aos clientes. Competente, justo, honesto e transparente. Rapidez na solução!",
    content: "Ambiente acolhedor na recepção aos clientes. Excelente profissional do Direito. Competente, justo, honesto, transparente. Rapidez na solução dos processos.",
    ownerReply: "Sr. Antônio, estamos felizes em poder atender suas necessidades e pela oportunidade de fazê-lo satisfeito.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Marlon Ribeiro",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Recepção & Ambiente (reception)",
    highlight: "A melhor recepção que já tive, um excelente profissional. Que Deus abençoe sempre!",
    content: "A melhor recepção que já tive, um excelente profissional. Que Deus abençoe sempre.",
    ownerReply: "Foi um prazer poder solucionar seu problema meu caro!",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Rosângela De paula",
    badge: "1 avaliação · 5 Estrelas",
    date: "3 anos atrás",
    category: "Eficiência & Rapidez (efficiency)",
    highlight: "Ótimos profissionais, atenciosos e rápidos. Estou muito satisfeita com o serviço prestado, recomendo muito!",
    content: "Ótimos profissionais, atenciosos e rápidos, estou muito satisfeita com o serviço que eles me prestaram, recomendo muito",
    ownerReply: "Foi um prazer atuar em sua causa, conseguimos fazer com que à JUSTIÇA fosse feita.",
    ownerDate: "3 anos atrás",
  },
  {
    name: "Daiane Ribeiro",
    badge: "4 avaliações · 5 Estrelas",
    date: "4 anos atrás",
    category: "Atencioso & Dedicado (attentive)",
    highlight: "Excelentes profissionais. Trabalham com empatia, zelo e prontidão para sanar dúvidas minhas e da minha empresa!",
    content: "Excelentes profissionais. Trabalham com empatia, zelo e sempre com prontidão para sanar minhas dúvidas e da minha empresa.",
    ownerReply: "É sempre um prazer atendê-la e lhe ter como cliente.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Nilson Dutra",
    badge: "3 avaliações · 11 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Eficiência & Rapidez (efficiency)",
    highlight: "Total satisfação. No momento em que precisei, pude contar com a equipe de excelentes pessoas e profissionais!",
    content: "Total satisfação. No momento em que precisei, pude contar com a equipe de excelentes pessoas e profissionais.",
    ownerReply: "Foi um prazer ajudá-lo.",
    ownerDate: "2 anos atrás",
  },
  {
    name: "Ivani Teixeira",
    badge: "Local Guide · 67 avaliações · 31 fotos · 5 Estrelas",
    date: "2 meses atrás",
    category: "Atencioso & Dedicado (attentive)",
    highlight: "Super recomendo! Seriedade e dedicação. Ótimos advogados! 👏🏼👏🏼👏🏼",
    content: "Super recomendo! Seriedade e dedicação. Ótimos advogados! 👏🏼👏🏼👏🏼",
  },
  {
    name: "Maria do Carmo Ananias",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 ano atrás",
    category: "Atencioso & Dedicado (attentive)",
    highlight: "Adorei o serviço, muito atencioso e com certeza quando precisar procurarei, indicarei a todos!",
    content: "Adorei o serviço,muito atencioso e com certeza quando precisar procurarei, indicarei a todos muito obrigada",
    ownerReply: "Maria do Carmo, foi um prazer atendê-la.",
    ownerDate: "1 ano atrás",
  },
  {
    name: "Wilson Diniz",
    badge: "1 avaliação · 5 Estrelas",
    date: "2 anos atrás",
    category: "Eficiência & Rapidez (efficiency)",
    highlight: "Dr. muito atencioso. Resolveu o que precisava com total competência!",
    content: "Dr. Muito atencioso. Resolveu o que precisava",
    ownerReply: "Foi um prazer atendê-lo!",
    ownerDate: "2 anos atrás",
  },
  {
    name: "Fernando Jose",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 ano atrás",
    category: "Dr. Wesley Santos (dr)",
    highlight: "Lugar justo, profissional muito qualificado!",
    content: "Lugar justo , profissional muito qualificado",
    ownerReply: "Conte com nossos serviços sempre que precisar 🤝",
    ownerDate: "1 ano atrás",
  },
  {
    name: "Rubens Avelar Barcelos",
    badge: "Local Guide · 10 avaliações · 4 fotos · 5 Estrelas",
    date: "4 anos atrás",
    category: "Dr. Wesley Santos (dr)",
    highlight: "Excelente profissional e com preço justo!!!",
    content: "Excelente profissional e com preço justo!!!",
    ownerReply: "É um prazer tê-lo conosco meu caro!",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Carolina Veloso",
    badge: "2 avaliações · 5 fotos · 5 Estrelas",
    date: "3 anos atrás",
    category: "Recepção & Ambiente (reception)",
    highlight: "Fui muito bem atendida, escritório de confiança.",
    content: "Fui muito bem atendida, escritório de confiança.",
    ownerReply: "Estamos muito felizes com o seu feedback!",
    ownerDate: "3 anos atrás",
  },
  {
    name: "Eduardo Carvalho",
    badge: "8 avaliações · 5 Estrelas",
    date: "2 anos atrás",
    category: "Eficiência & Rapidez (efficiency)",
    highlight: "Atendimento sério e eficiente!!",
    content: "Atendimento sério e eficiente!!",
    ownerReply: "Conte com nossos serviços sempre que precisar 🤝",
    ownerDate: "1 ano atrás",
  },
  {
    name: "Maria rita Silva",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 semanas atrás",
    category: "Dr. Wesley Santos (dr)",
    highlight: "Muito bom, excelente profissional.",
    content: "Muito bom excelente profissional.",
  },
  {
    name: "Barbara Lopes",
    badge: "3 avaliações · 5 Estrelas",
    date: "3 anos atrás",
    category: "Atencioso & Dedicado (attentive)",
    highlight: "Atendimento excepcional e trabalho incrível.",
    content: "Atendimento excepcional e trabalho incrível.",
    ownerReply: "Sua satisfação é nosso principal objetivo! Obrigado por fazer parte da nossa jornada!",
    ownerDate: "3 anos atrás",
  },
  {
    name: "Raquel lopes de souza",
    badge: "1 avaliação · 5 Estrelas",
    date: "3 anos atrás",
    category: "Recepção & Ambiente (reception)",
    highlight: "Muito bem recebida, excelentes profissionais, muito agradecida.",
    content: "Muito bem recebida, excelentes profissionais, muito agradecida..",
    ownerReply: "Obrigado pela confiança!",
    ownerDate: "3 anos atrás",
  },
  {
    name: "Sofisticasa Planejados",
    badge: "1 avaliação · 5 Estrelas",
    date: "3 anos atrás",
    category: "Atencioso & Dedicado (attentive)",
    highlight: "Sempre dispostos a nos atender! Recomendo.",
    content: "Sempre dispostos a nos atender! Recomendo.",
    ownerReply: "É um prazer tê-los como cliente.",
    ownerDate: "3 anos atrás",
  },
  {
    name: "Maria Luísa Coimbra S.",
    badge: "2 avaliações · 5 Estrelas",
    date: "3 anos atrás",
    category: "Eficiência & Rapidez (efficiency)",
    highlight: "Excelência e presteza sempre.",
    content: "Excelência e presteza sempre.",
    ownerReply: "Foi um prazer poder ajudar nossa colega de trabalho e futura colega de profissão.",
    ownerDate: "3 anos atrás",
  },
  {
    name: "Jair Antonio Silva",
    badge: "1 avaliação · 5 Estrelas",
    date: "3 anos atrás",
    category: "Atencioso & Dedicado (attentive)",
    highlight: "Advogado atencioso e prestativo.",
    content: "Advogado atencioso e prestativo.",
    ownerReply: "Temos um imenso prazer eu tê-lo como cliente.",
    ownerDate: "3 anos atrás",
  },
  {
    name: "Juliano Araujo",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 ano atrás",
    category: "Dr. Wesley Santos (dr)",
    highlight: "Excelente profissional.",
    content: "Exelente profissional",
    ownerReply: "Agradecido meu caro! Conte sempre conosco.",
    ownerDate: "1 ano atrás",
  },
  {
    name: "Alessandra Mara Dos Santos",
    badge: "3 avaliações · 5 Estrelas",
    date: "4 anos atrás",
    category: "Atencioso & Dedicado (attentive)",
    highlight: "Excelentes profissionais, atendimento com presteza!",
    content: "Excelentes profissionais",
    ownerReply: "Você é uma cliente valiosa para nós! É sempre um prazer te atender.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Sebastião Antônio Santos",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Eficiência & Rapidez (efficiency)",
    highlight: "Vocês são muito bons, continuem assim, obrigado!",
    content: "Voceis são muito bom continua asim obrigado",
  },
  {
    name: "Mirian Imaculada",
    badge: "1 avaliação · 5 Estrelas",
    date: "11 meses atrás",
    category: "Dr. Wesley Santos (dr)",
    highlight: "Excelente profissional.",
    content: "Excelente profissional",
  },
  {
    name: "Gabriela Rodrigues",
    badge: "2 avaliações · 5 Estrelas",
    date: "11 meses atrás",
    category: "Dr. Wesley Santos (dr)",
    highlight: "Excelente profissional, recomendo!",
    content: "Excelente profissional recomendo!",
  },
  {
    name: "Dinilson Felix",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Dr. Wesley Santos (dr)",
    highlight: "Profissional capacitado!",
    content: "Profissional capacitado!",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "O que é Usucapião e quando vale a pena fazer diretamente no Cartório (Extrajudicial)?",
    answer:
      "A Usucapião é a forma jurídica de obter a propriedade definitiva e a matrícula no Cartório de Registro de Imóveis para quem tem a posse mansa, pacífica e contínua de um imóvel (urbano ou rural) por determinado período previsto em lei. A modalidade Extrajudicial, realizada diretamente em cartório com o auxílio do nosso escritório, é a mais recomendada quando não há oposição dos confrontantes, pois costuma ser muito mais rápida do que uma ação judicial, regularizando a escritura definitiva sem longos anos de espera.",
  },
  {
    question: "O INSS negou meu pedido de Aposentadoria ou BPC/LOAS. Ainda posso reverter?",
    answer:
      "Com certeza! A negativa administrativa da agência do INSS não é a palavra final. Na maioria esmagadora dos casos, o INSS indefere pedidos por falhas cadastrais no CNIS, falta de cômputo de vínculos rurais/insalubres ou avaliações periciais superficiais. Nosso escritório analisa o processo indeferido e ingressa com Ação Judicial na Justiça Federal, onde as provas são reavaliadas por um juiz imparcial e perito oficial. Caso concedido, você recebe o benefício mensal e todas as parcelas atrasadas desde a data do primeiro pedido.",
  },
  {
    question: "Como funciona o Divórcio e o Inventário em Cartório? É mais rápido do que na Justiça?",
    answer:
      "Sim, é significativamente mais rápido e menos oneroso! Quando as partes estão em consenso sobre a partilha dos bens (no divórcio ou inventário) e inexistem conflitos irreconciliáveis, todo o procedimento é lavrado por escritura pública em Cartório de Notas na presença do advogado. O divórcio consensual ou o inventário extrajudicial podem ser finalizados em semanas, com total economia de taxas tributárias (ITCD) e sem a necessidade de audiências desgastantes.",
  },
  {
    question: "O que pode ser feito imediatamente em caso de atraso na Pensão Alimentícia?",
    answer:
      "Quando há atraso injustificado no pagamento da pensão alimentícia, a lei garante mecanismos rigorosos e prioritários. Ingressamos com a Ação de Execução de Alimentos de urgência. O devedor é citado judicialmente para pagar os últimos meses em até 3 dias sob pena de decretação de prisão civil em regime fechado (de 1 a 3 meses), além da possibilidade de bloqueio de contas bancárias (Sisbajud), penhora de bens e negativação do nome em cartórios de protesto.",
  },
  {
    question: "Comprei um imóvel com 'contrato de gaveta' e o antigo dono sumiu. Como consigo a escritura?",
    answer:
      "Essa é uma situação muito comum em Oliveira e região. Se você possui o contrato de compra e venda e os comprovantes de quitação, mas o vendedor faleceu, mudou-se ou se recusa a outorgar a escritura pública, é possível ingressar com a Ação de Adjudicação Compulsória (que hoje também pode ser requerida diretamente no Cartório de Registro de Imóveis) ou com a Usucapião para garantir que o juiz ou o registrador transfira a titularidade do imóvel para o seu nome.",
  },
  {
    question: "Como funciona o atendimento presencial no Shopping XV em Oliveira - MG e o atendimento online?",
    answer:
      "Oferecemos a máxima comodidade e segurança aos nossos clientes. Para quem reside em Oliveira, Campo Belo, Carmópolis de Minas, Passa Tempo, Santo Antônio do Amparo e região, temos atendimento presencial e privativo em nossa sede na Praça XV de Novembro, 20, 2° andar, sala 202 (Condomínio Shopping XV). Para quem reside em outras comarcas ou prefere a praticidade do celular, nosso atendimento é 100% digital via WhatsApp oficial, com assinatura digital criptografada, envio de fotos de documentos e acompanhamento transparente em tempo real.",
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
          dark ? "text-white" : "text-[#0a0e17]"
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
  const [selectedReviewCategory, setSelectedReviewCategory] =
    useState<string>("Todas");
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reviewCategories = [
    "Todas",
    "Dr. Wesley Santos (dr)",
    "Eficiência & Rapidez (efficiency)",
    "Atencioso & Dedicado (attentive)",
    "Recepção & Ambiente (reception)",
    "Imóveis & Contratos",
  ];

  const filteredReviews =
    selectedReviewCategory === "Todas"
      ? clientReviews
      : clientReviews.filter((r) => r.category === selectedReviewCategory);

  const displayedReviews = showAllReviews
    ? filteredReviews
    : filteredReviews.slice(0, 6);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#fcfbf9] text-[#0a0e17] selection:bg-[#c59b27] selection:text-[#080c14]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (OBSIDIAN GRAPHITE & WARM GOLD)     */}
        {/* ======================================================== */}
        <div className="border-b border-[#172136] bg-[#0c121e] py-2 text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f5de88] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#c59b27]" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                SANTOS TEIXEIRA ADVOGADOS · Previdenciário l Família e Sucessões l Usucapião ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
                <span className="font-bold text-white">5,0 ★</span> (41 avaliações no Google · Oliveira - MG)
              </a>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dr. Wesley Santos! Gostaria de consultar sobre o meu caso.")}
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
        {/* STICKY HEADER / NAVBAR (OFFICIAL SANTOS TEIXEIRA LOGO)   */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-slate-200/90 bg-white/95 py-2.5 shadow-md backdrop-blur-md"
              : "border-b border-slate-200/60 bg-white/90 py-3.5 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Santos Teixeira Logo */}
            <a
              href="#"
              className="group flex shrink-0 items-center transition-opacity hover:opacity-90"
              aria-label="Santos Teixeira Advogados Associados - Início"
            >
              <Image
                src={LOGO_SRC}
                alt="Santos Teixeira Advogados Associados"
                width={480}
                height={160}
                className="h-[52px] sm:h-[62px] md:h-[68px] w-auto object-contain"
                priority
              />
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden items-center gap-5 xl:gap-7 xl:flex">
              <a href="#servicos" className="nav-link text-[11px] whitespace-nowrap">
                Áreas de Atuação
              </a>
              <a href="#sobre" className="nav-link text-[11px] whitespace-nowrap">
                Sobre o Escritório
              </a>
              <a href="#diferenciais" className="nav-link text-[11px] whitespace-nowrap">
                Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link text-[11px] whitespace-nowrap">
                Avaliações (5,0 ★)
              </a>
              <a href="#duvidas" className="nav-link text-[11px] whitespace-nowrap">
                Dúvidas Frequentes
              </a>
              <a href="#contato" className="nav-link text-[11px] whitespace-nowrap">
                Sede & Contato
              </a>
            </nav>

            {/* Right Action: WhatsApp CTA (Imperial Warm Gold) */}
            <div className="flex shrink-0 items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Wesley Santos! Gostaria de consultar sobre o meu caso.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#080c14]" />
                <span className="hidden 2xl:inline">Converse com Dr. Wesley</span>
                <span className="2xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 transition-colors hover:border-[#c59b27] hover:text-[#9e7420] xl:hidden cursor-pointer"
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
                  <div className="flex items-center pb-3 border-b border-slate-100">
                    <Image
                      src={LOGO_SRC}
                      alt="Santos Teixeira Advogados Associados"
                      width={360}
                      height={120}
                      className="h-[52px] w-auto object-contain"
                      priority
                    />
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e7420]"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#c59b27]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e7420]"
                  >
                    <span>Sobre Dr. Wesley Santos</span>
                    <ArrowRight size={14} className="text-[#c59b27]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e7420]"
                  >
                    <span>Nossos Diferenciais</span>
                    <ArrowRight size={14} className="text-[#c59b27]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e7420]"
                  >
                    <span>Avaliações Google (5,0 ★ · 41 reviews)</span>
                    <ArrowRight size={14} className="text-[#c59b27]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e7420]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#c59b27]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e7420]"
                  >
                    <span>Sede & Contato (Shopping XV)</span>
                    <ArrowRight size={14} className="text-[#c59b27]" />
                  </a>

                  <div className="pt-4 border-t border-slate-100">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Wesley Santos! Gostaria de agendar uma consulta sobre o meu caso.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Fale com o Dr. Wesley Santos</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM FOTO DO DR. WESLEY SANTOS    */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fcfbf9]">
          {/* Subtle Ambient Light Champagne & Golden Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#f5de88]/20 via-[#f6f3eb]/70 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#e6dfd1]/40 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#c59b27]/35 bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#9e7420] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#c59b27] animate-pulse" />
                    SANTOS TEIXEIRA ADVOGADOS · OLIVEIRA - MG
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#0a0e17] sm:text-5xl lg:text-[3.25rem]"
                >
                  Segurança Jurídica Para Proteger{" "}
                  <span className="bg-gradient-to-r from-[#785813] via-[#c59b27] to-[#9e7420] bg-clip-text text-transparent">
                    Seu Patrimônio, Sua Família e Sua Aposentadoria.
                  </span>
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:max-w-xl"
                >
                  Advocacia estratégica e resolutiva liderada pelo{" "}
                  <strong className="font-semibold text-slate-900">Dr. Wesley Santos</strong>{" "}
                  e equipe de associados. Especialização comprovada em{" "}
                  <strong className="font-semibold text-slate-900">
                    Direito Previdenciário (INSS), Família & Sucessões e Usucapião / Regularização Imobiliária
                  </strong>
                  . Sede própria no Centro de Oliveira - MG e atendimento online para todo o Brasil.
                </motion.p>

                {/* Quick Highlights Pills */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex flex-wrap gap-2.5 sm:gap-3"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c59b27]" />
                    Aposentadorias & BPC/LOAS
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c59b27]" />
                    Usucapião & Imóveis Sem Escritura
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c59b27]" />
                    Divórcio, Guarda & Pensão
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c59b27]" />
                    Inventários em Cartório
                  </span>
                </motion.div>

                {/* Action CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Wesley Santos! Gostaria de agendar uma consulta sobre meu caso de Previdenciário / Usucapião / Família.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Fale com o Dr. Wesley Santos no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#servicos"
                    variant="champagne"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conheça Nossas Especialidades</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </motion.div>

                {/* Trust Seal / Google 5,0 Authority */}
                <motion.div
                  variants={reveal}
                  className="mt-10 flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white/95 p-3.5 shadow-xs backdrop-blur-xs max-w-lg"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#0c121e] text-white">
                    <GoogleIcon size={20} />
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#f59e0b]" />
                      ))}
                      <span className="ml-1.5 font-bold text-slate-900">
                        5,0 / 5,0 no Google
                      </span>
                    </div>
                    <p className="mt-0.5 text-slate-600">
                      Avaliação máxima comprovada com <strong className="font-semibold text-slate-900">41 avaliações de clientes verificados</strong> em Oliveira - MG e região.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Photo of Dr. Wesley Santos */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Outer Frame with Gold Rim Accent */}
                  <div className="group relative overflow-hidden rounded-2xl border-2 border-[#c59b27]/40 bg-gradient-to-b from-[#172136] to-[#080c14] p-2 shadow-2xl shadow-[#0c121e]/25 transition-all duration-300 hover:border-[#c59b27]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#0c121e]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Wesley Santos — Santos Teixeira Advogados Associados"
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080c14]/85 via-transparent to-transparent" />

                      {/* Floating Badge on Photo: Dr. Wesley Santos */}
                      <div className="absolute right-3.5 bottom-3.5 left-3.5 rounded-xl border border-white/20 bg-[#0c121e]/92 p-3.5 text-white shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="font-serif text-sm font-bold tracking-wide text-white">
                              Dr. Wesley Santos
                            </p>
                            <p className="text-[11px] font-medium text-[#f5de88]">
                              Sócio-Fundador · Santos Teixeira Advogados
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <a
                              href={LAWYER_INSTAGRAM_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                              aria-label="Instagram do Dr. Wesley Santos"
                              title="@wesleysantos.adv"
                            >
                              <InstagramIcon size={16} />
                            </a>
                            <a
                              href={INSTAGRAM_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex size-8 items-center justify-center rounded-lg bg-[#c59b27]/20 text-[#f5de88] transition-colors hover:bg-[#c59b27]/30"
                              aria-label="Instagram da Santos Teixeira Advogados"
                              title="@santosteixeiraadvogados"
                            >
                              <Scale size={16} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Card Badge (Top Right) */}
                  <div className="absolute -top-4 -right-4 hidden rounded-xl border border-slate-200/90 bg-white p-3 shadow-lg sm:flex items-center gap-2.5">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#fdf8eb] text-[#9e7420]">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Shopping XV</p>
                      <p className="text-[10px] text-slate-500">Oliveira · MG</p>
                    </div>
                  </div>

                  {/* Floating Trust Card Badge (Bottom Left) */}
                  <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-slate-200/90 bg-white p-3 shadow-lg sm:flex items-center gap-2.5">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Resposta Rápida</p>
                      <p className="text-[10px] text-slate-500">{PHONE_DISPLAY}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: BARRA DE AUTORIDADE & MÉTRICAS COMPROVADAS      */}
        {/* ======================================================== */}
        <section className="border-y border-[#121929] bg-[#0c121e] py-9 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col border-l-2 border-[#c59b27] pl-4 sm:pl-5">
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  <Star size={16} className="fill-[#f59e0b]" />
                  <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                    5,0 ★
                  </span>
                </div>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  41 Avaliações no Google
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Nota máxima de satisfação em Oliveira - MG
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col border-l-2 border-[#c59b27] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Previdenciário
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Aposentadorias & INSS
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Planejamento e ações na Justiça Federal
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col border-l-2 border-[#c59b27] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Usucapião
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Regularização Imobiliária
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Cartório de Imóveis e Escritura Definitiva
                </p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col border-l-2 border-[#c59b27] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Shopping XV
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Sede em Oliveira - MG
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Praça XV de Novembro, 20 · Sala 202
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (SERVIÇOS COM MODAL DETALHADO)  */}
        {/* ======================================================== */}
        <section id="servicos" className="py-20 sm:py-26 bg-[#fcfbf9]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
              <Heading
                eyebrow="Áreas de Atuação Especializada"
                description="Soluções jurídicas estratégicas focadas em resolver suas pendências com o INSS, blindar seu patrimônio imobiliário e harmonizar a sucessão familiar. Clique em qualquer área para ver os detalhes completos."
              >
                Excelência Jurídica Para Proteger Você, Seu Patrimônio e Sua Família
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Wesley Santos! Gostaria de consultar sobre a viabilidade do meu caso.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Consultar Meu Caso</span>
                </GlowingButton>
              </div>
            </div>

            {/* Practice Areas Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={area.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedPractice(area)}
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#c59b27]/60 hover:shadow-lg cursor-pointer"
                  >
                    <div>
                      {/* Top Bar: Icon + Category Tag */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#0c121e] text-[#f5de88] shadow-xs transition-colors group-hover:bg-[#172136]">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#fdf8eb] px-2.5 py-1 text-[10px] font-bold text-[#8e6319]">
                          {area.tag.split("·")[0].trim()}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-bold tracking-tight text-[#0a0e17] group-hover:text-[#9e7420] transition-colors">
                        {area.title}
                      </h3>

                      {/* Sub-category tags */}
                      <p className="mt-2 text-xs font-medium text-slate-500 leading-relaxed">
                        {area.category}
                      </p>

                      {/* Summary */}
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {area.summary}
                      </p>
                    </div>

                    {/* Bottom CTA trigger */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#9e7420]">
                      <span>Ver detalhes e procedimentos</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* MODAL INTERATIVO: DETALHES COMPLETOS DA ÁREA DE ATUAÇÃO  */}
        {/* ======================================================== */}
        <AnimatePresence>
          {selectedPractice && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPractice(null)}
                className="absolute inset-0 bg-[#080c14]/80 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                {/* Modal Header */}
                <div className="pr-10">
                  <span className="inline-block rounded-full bg-[#fdf8eb] px-3 py-1 text-xs font-bold text-[#8e6319]">
                    {selectedPractice.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#0a0e17] sm:text-3xl mt-3">
                    {selectedPractice.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500">
                    {selectedPractice.category}
                  </p>
                </div>

                {/* Modal Body */}
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                  <p className="font-medium text-slate-900">
                    {selectedPractice.summary}
                  </p>
                  <p className="text-slate-600">
                    {selectedPractice.details}
                  </p>

                  <div className="pt-2">
                    <h4 className="font-serif text-sm font-bold tracking-wider text-[#0a0e17] uppercase mb-3">
                      Atuação e Procedimentos Inclusos:
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedPractice.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-[#c59b27] shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer CTAs */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <p className="text-xs text-slate-500 text-center sm:text-left">
                    Sede no Shopping XV (Oliveira - MG) ou 100% Online Nacional
                  </p>
                  <GlowingButton
                    href={getWhatsAppUrl(selectedPractice.whatsAppText)}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Consultar Dr. Wesley</span>
                  </GlowingButton>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE O ESCRITÓRIO & DR. WESLEY SANTOS          */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-slate-200 bg-[#f6f3eb]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Photo Column */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c59b27]/40 bg-[#0c121e] p-2 shadow-xl shadow-slate-300">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#121929]">
                      <Image
                        src={FOTO_OFFICE_SRC}
                        alt="Escritório Santos Teixeira Advogados Associados em Oliveira - MG"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                      />
                    </div>
                  </div>

                  {/* Decorative Badge */}
                  <div className="absolute -bottom-5 -right-5 hidden sm:block rounded-xl border border-[#c59b27]/50 bg-[#0c121e] p-4 text-white shadow-xl max-w-xs">
                    <p className="text-[11px] font-bold text-[#f5de88] uppercase tracking-wider">
                      Santos Teixeira Advogados
                    </p>
                    <p className="mt-1 text-xs text-slate-300 leading-snug">
                      &quot;Previdenciário l Família e Sucessões l Usucapião com rigor técnico e proximidade.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre o Escritório & Liderança"
                  description="Com atuação ética, combativa e altamente especializada, a Santos Teixeira Advogados Associados consolidou-se como referência jurídica em Oliveira, no Centro-Oeste mineiro e em todo o Brasil."
                >
                  Santos Teixeira Advogados: Rigor Técnico, Estratégia e Confiança
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  <p>
                    A <strong className="font-semibold text-slate-900">Santos Teixeira Advogados Associados</strong> nasceu com a missão de entregar uma advocacia de alta performance, transparente e desprovida de juridiquês inútil. Sob a liderança do <strong className="font-semibold text-slate-900">Dr. Wesley Santos</strong> e de uma seleta equipe de associados, o escritório se destaca pelo tratamento personalizado de cada caso.
                  </p>
                  <p>
                    Sabemos que por trás de um pedido de aposentadoria, de uma usucapião para legalizar a casa própria, de um inventário ou de uma partilha familiar, existem o <strong className="font-semibold text-slate-900">esforço de décadas, a estabilidade financeira e a tranquilidade de famílias inteiras</strong>. Por isso, não tratamos clientes como números: desenhamos a estratégia processual ou extrajudicial mais ágil e segura para o seu caso.
                  </p>
                  <p>
                    Com sede física moderna e privativa no <strong className="font-semibold text-slate-900">Condomínio Shopping XV (Centro de Oliveira - MG)</strong> e infraestrutura digital preparada para atender com eficiência clientes de toda Minas Gerais e do Brasil, mantemos a nota máxima e unânime de <strong className="font-semibold text-slate-900">5,0 estrelas no Google (41 avaliações)</strong> e forte presença nas redes sociais.
                  </p>
                </div>

                {/* Key Points */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 shadow-2xs">
                    <Landmark size={18} className="text-[#c59b27] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Previdência & INSS</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Planejamento, aposentadorias e BPC/LOAS com celeridade.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 shadow-2xs">
                    <HomeIcon size={18} className="text-[#c59b27] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Usucapião & Família</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Escritura definitiva de imóveis, divórcio e inventário em cartório.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-3.5 items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Wesley Santos! Gostaria de conversar diretamente sobre a minha demanda.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com o Dr. Wesley Santos</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#9e7420] transition-colors"
                  >
                    <InstagramIcon size={16} />
                    <span>Seguir {INSTAGRAM_HANDLE} ({INSTAGRAM_STATS})</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 5: OS 4 PILARES / DIFERENCIAIS DA ADVOCACIA        */}
        {/* ======================================================== */}
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#0c121e] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading
              eyebrow="Nossos Diferenciais"
              description="Os pilares institucionais que fundamentam a reputação ilibada e os resultados consistentes da Santos Teixeira Advogados."
              dark
            >
              Os 4 Pilares da Santos Teixeira Advogados
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-xl border border-[#172136] bg-[#121929]/80 p-6 transition-all duration-300 hover:border-[#c59b27]/50 hover:bg-[#121929]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#172136] text-[#f5de88]">
                  <Scale size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  1. Especialização Focada
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Foco rigoroso em Previdenciário, Usucapião e Direito Familiar. Conhecimento aprofundado dos procedimentos locais e das teses mais recentes.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-xl border border-[#172136] bg-[#121929]/80 p-6 transition-all duration-300 hover:border-[#c59b27]/50 hover:bg-[#121929]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#172136] text-[#f5de88]">
                  <Sparkles size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  2. Celeridade Sem Juridiquês
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Comunicação clara, acessível e direta pelo WhatsApp oficial. Você compreende cada etapa do seu processo sem palavras difíceis ou enrolação.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-xl border border-[#172136] bg-[#121929]/80 p-6 transition-all duration-300 hover:border-[#c59b27]/50 hover:bg-[#121929]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#172136] text-[#f5de88]">
                  <Shield size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  3. Sigilo & Ética Profissional
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Proteção absoluta dos seus dados pessoais e patrimoniais em total conformidade com o Código de Ética da OAB e a legislação vigente.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-xl border border-[#172136] bg-[#121929]/80 p-6 transition-all duration-300 hover:border-[#c59b27]/50 hover:bg-[#121929]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#172136] text-[#f5de88]">
                  <Building2 size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  4. Sede no Shopping XV & Online
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Estrutura física acolhedora no Centro de Oliveira - MG e atendimento digital com assinatura pelo celular para clientes de todo o país.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: PROVA SOCIAL & DEPOIMENTOS REAIS GOOGLE 5,0 ★   */}
        {/* ======================================================== */}
        <section id="depoimentos" className="py-20 sm:py-26 bg-[#fcfbf9]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6">
              <Heading
                eyebrow="Prova Social Verificada"
                description="Confira avaliações 100% autênticas e espontâneas de clientes que tiveram seus direitos garantidos pela Santos Teixeira Advogados Associados."
              >
                Avaliações com Nota Máxima de 5,0 ★ no Google em Oliveira · MG
              </Heading>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xs hover:border-[#c59b27] hover:text-[#9e7420] transition-colors"
                >
                  <GoogleIcon size={16} />
                  <span>Ver perfil no Google Meu Negócio</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Google Badges Extracted directly from Google Maps */}
            <div className="flex flex-wrap items-center gap-2 pt-2 pb-8 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 mr-1">
                Destaques Google:
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#fdf8eb] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                ⚖️ Dr. Wesley Santos (dr)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#fdf8eb] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                ⚡ Eficiência (efficiency)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#fdf8eb] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                🤝 Atencioso (attentive)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#fdf8eb] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                🏢 Recepção (reception · Shopping XV)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#fdf8eb] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                ⭐ 100% Avaliações 5 Estrelas
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {reviewCategories.map((cat) => {
                const isActive = selectedReviewCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedReviewCategory(cat);
                      setShowAllReviews(false);
                    }}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#0c121e] text-white shadow-xs"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-[#c59b27] hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Testimonials Grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayedReviews.map((review, idx) => {
                const initials = review.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase();

                return (
                  <motion.div
                    key={`${review.name}-${idx}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all hover:border-[#c59b27]/50 hover:shadow-md"
                  >
                    <div>
                      {/* Top Bar: Author, Status, Rating & Date */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0c121e] text-xs font-bold text-[#f5de88] border border-[#c59b27]/40">
                            {initials}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 leading-tight">
                              {review.name}
                            </p>
                            <p className="text-[10px] text-slate-500 font-medium">
                              {review.badge}
                            </p>
                          </div>
                        </div>

                        <span className="rounded-full bg-[#fdf8eb] px-2 py-0.5 text-[10px] font-bold text-[#8e6319] shrink-0">
                          {review.category}
                        </span>
                      </div>

                      {/* Stars + Time Ago */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-0.5 text-[#f59e0b]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-[#f59e0b]" />
                          ))}
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {review.date}
                        </span>
                      </div>

                      {/* Highlight Quote */}
                      <p className="font-serif text-sm font-bold text-[#0a0e17] leading-snug">
                        &quot;{review.highlight}&quot;
                      </p>

                      {/* Full Review Text */}
                      <p className="mt-3 text-xs leading-relaxed text-slate-600">
                        {review.content}
                      </p>

                      {/* Owner Reply Box */}
                      {review.ownerReply && (
                        <div className="mt-4 rounded-xl border border-[#c59b27]/20 bg-[#f6f3eb] p-3.5 text-xs text-slate-700">
                          <div className="flex items-center gap-1.5 font-bold text-[#8e6319] mb-1 text-[11px]">
                            <Sparkles size={13} className="text-[#c59b27]" />
                            <span>Santos Teixeira Advogados (proprietário)</span>
                            {review.ownerDate && (
                              <span className="text-[10px] text-slate-400 font-normal">
                                · {review.ownerDate}
                              </span>
                            )}
                          </div>
                          <p className="text-slate-600 italic leading-relaxed text-[11px]">
                            &quot;{review.ownerReply}&quot;
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Google Seal */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-slate-400">
                        Avaliação Verificada no Google
                      </span>
                      <GoogleIcon size={15} className="opacity-80" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Controls */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              {filteredReviews.length > 6 && (
                <button
                  type="button"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 shadow-xs hover:border-[#c59b27] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  {showAllReviews ? (
                    <span>Recolher Avaliações</span>
                  ) : (
                    <span>
                      Ver Mais Avaliações Reais do Google ({filteredReviews.length - 6} restantes)
                    </span>
                  )}
                </button>
              )}

              <GlowingButton
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                variant="champagne"
                size="md"
              >
                <GoogleIcon size={15} />
                <span>Ver Todas as 41 Avaliações no Google Maps</span>
                <ExternalLink size={13} />
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: PASSO A PASSO DO ATENDIMENTO                    */}
        {/* ======================================================== */}
        <section className="border-t border-slate-200 py-20 sm:py-26 bg-[#f6f3eb]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading
              eyebrow="Como Funciona"
              description="Um processo transparente, ágil e seguro desde o primeiro contato no WhatsApp até a conclusão da sua demanda."
            >
              Seu Atendimento em 4 Passos Simples
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c59b27]/40">
                  01
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Contato Inicial
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Você entra em contato pelo nosso WhatsApp oficial relatando sua situação previdenciária, imobiliária ou familiar com total sigilo.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c59b27]/40">
                  02
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Análise Técnica e Documental
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  O Dr. Wesley Santos analisa seus documentos, certidões e histórico contributivo do CNIS, definindo a melhor estratégia (cartorária ou judicial).
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c59b27]/40">
                  03
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Protocolo & Ação Rápida
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Assinatura prática pelo celular ou presencialmente no Shopping XV em Oliveira, com protocolo imediato no Cartório, INSS ou Justiça Federal.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c59b27]/40">
                  04
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Acompanhamento & Conclusão
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Atualizações transparentes a cada movimentação até a efetiva concessão da aposentadoria, registro da escritura ou homologação do acordo.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Wesley Santos! Gostaria de dar o primeiro passo e tirar dúvidas sobre meu caso.")}
                target="_blank"
                variant="gold"
                size="lg"
              >
                <WhatsAppIcon size={18} />
                <span>Iniciar Meu Atendimento Agora</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: FAQ — PERGUNTAS FREQUENTES                      */}
        {/* ======================================================== */}
        <section id="duvidas" className="py-20 sm:py-26 bg-[#fcfbf9]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heading
                eyebrow="Tire Suas Dúvidas"
                description="Respostas diretas e esclarecedoras para as principais dúvidas de clientes sobre Aposentadorias, Usucapião e Direito Familiar."
              >
                Perguntas Frequentes
              </Heading>
            </div>

            <div className="mt-12 space-y-4">
              {faqList.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-slate-200/90 bg-white transition-all shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-[#0a0e17] transition-colors hover:text-[#9e7420] cursor-pointer"
                    >
                      <span className="pr-4">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#c59b27]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-slate-400" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100"
                        >
                          {item.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-xl border border-[#c59b27]/30 bg-[#fdf8eb] p-6 text-center">
              <p className="text-sm font-bold text-[#8e6319]">
                Ficou com alguma dúvida pontual sobre o seu caso?
              </p>
              <p className="mt-1 text-xs text-slate-600">
                O Dr. Wesley Santos e a equipe estão disponíveis para responder diretamente no WhatsApp.
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Wesley! Gostaria de tirar uma dúvida específica.")}
                  target="_blank"
                  variant="gold"
                  size="sm"
                >
                  <WhatsAppIcon size={15} />
                  <span>Tirar Dúvida no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: SEDE, LOCALIZAÇÃO & CONTATO                     */}
        {/* ======================================================== */}
        <section id="contato" className="py-20 sm:py-26 bg-[#0c121e] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Contact Info Column */}
              <div className="lg:col-span-6">
                <Heading
                  eyebrow="Onde Estamos & Contato"
                  description="Venha nos visitar em nossa sede no Condomínio Shopping XV em Oliveira - MG ou converse agora mesmo pelo canal oficial de atendimento online."
                  dark
                >
                  Estamos Prontos para Atender Sua Demanda
                </Heading>

                <div className="mt-8 space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#172136] text-[#f5de88]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Endereço / Sede Física
                      </p>
                      <p className="mt-1 text-slate-300">
                        {ADDRESS_OLIVEIRA}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#f5de88] hover:underline"
                      >
                        <span>Traçar rota no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#172136] text-[#25D366]">
                      <WhatsAppIcon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Telefone & WhatsApp Oficial
                      </p>
                      <p className="mt-1 text-slate-300 font-semibold">
                        {PHONE_DISPLAY}
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dr. Wesley Santos! Gostaria de agendar uma consulta.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#25D366] hover:underline"
                      >
                        <span>Iniciar conversa direta no WhatsApp</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#172136] text-[#f5de88]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Horário de Funcionamento
                      </p>
                      <p className="mt-1 text-slate-300">
                        Segunda a Sexta · Abre às 12:00 (12:00 às 18:00)
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Atendimento presencial no Shopping XV com agendamento prévio para seu total conforto e discrição.
                      </p>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#172136] text-[#f5de88]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Redes Sociais Oficiais
                      </p>
                      <div className="mt-1 flex flex-col gap-1">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white"
                        >
                          <span>{INSTAGRAM_HANDLE}</span>
                          <span className="text-[11px] text-slate-400">({INSTAGRAM_STATS})</span>
                        </a>
                        <a
                          href={LAWYER_INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-[#f5de88] hover:text-white text-xs"
                        >
                          <span>{LAWYER_INSTAGRAM_HANDLE}</span>
                          <span className="text-[11px] text-slate-400">(Perfil Dr. Wesley Santos)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map / Route Card */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="overflow-hidden rounded-2xl border border-[#172136] bg-[#121929] p-6 sm:p-8 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">
                        Santos Teixeira Advogados Associados
                      </h4>
                      <p className="text-xs text-[#f5de88]">
                        Condomínio Shopping XV · Oliveira - MG
                      </p>
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-[#0c121e] px-3 py-1 text-xs font-bold text-[#f59e0b]">
                      <Star size={13} className="fill-[#f59e0b]" />
                      <span>5,0 ★</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                    Localização privilegiada no Centro de Oliveira (Praça XV de Novembro, 20 - 2° andar, sala 202 - Shopping XV), com estacionamento próximo e sala executiva privativa para cuidar das suas questões mais importantes com o respeito que seu patrimônio merece.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c59b27] px-4 py-3 text-xs font-bold uppercase text-[#080c14] hover:bg-[#e8c55e] transition-colors"
                    >
                      <MapPin size={16} />
                      <span>Abrir no Google Maps</span>
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Wesley! Gostaria de agendar um horário presencial na sede no Shopping XV em Oliveira.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-[#0c121e] px-4 py-3 text-xs font-bold uppercase text-white hover:bg-slate-800 transition-colors"
                    >
                      <WhatsAppIcon size={16} className="text-[#25D366]" />
                      <span>Agendar Horário Presencial</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* FOOTER INSTITUCIONAL EM CONFORMIDADE COM A OAB           */}
        {/* ======================================================== */}
        <footer className="border-t border-[#121929] bg-[#080c14] py-14 text-slate-400 text-xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-slate-800/80">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <Image
                  src={LOGO_WHITE_SRC}
                  alt="Santos Teixeira Advogados Associados"
                  width={340}
                  height={110}
                  className="h-[52px] w-auto object-contain opacity-95"
                />
                <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                  Advocacia especializada em Direito Previdenciário (INSS), Família & Sucessões e Usucapião / Regularização Imobiliária. Sede no Shopping XV em Oliveira - MG e atendimento online para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label="Instagram da Santos Teixeira Advogados"
                  >
                    <InstagramIcon size={15} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dr. Wesley Santos!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-800 text-[#25D366] hover:bg-slate-700 transition-colors"
                    aria-label="WhatsApp Oficial"
                  >
                    <WhatsAppIcon size={15} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label="Google Meu Negócio"
                  >
                    <GoogleIcon size={14} />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white mb-4">
                  Navegação
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Áreas de Atuação
                    </a>
                  </li>
                  <li>
                    <a href="#sobre" className="hover:text-white transition-colors">
                      Sobre o Escritório
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-white transition-colors">
                      Diferenciais
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="hover:text-white transition-colors">
                      Avaliações Google (5,0 ★)
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="hover:text-white transition-colors">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="hover:text-white transition-colors">
                      Sede em Oliveira - MG
                    </a>
                  </li>
                </ul>
              </div>

              {/* Practice Areas */}
              <div>
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white mb-4">
                  Especialidades
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Aposentadorias e Benefícios do INSS
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Benefício BPC/LOAS (Idosos & Autismo)
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Usucapião Extrajudicial e Judicial
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Divórcio Consensual e em Cartório
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Pensão Alimentícia & Cobrança
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Inventários em Cartório de Notas
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Details */}
              <div>
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white mb-4">
                  Contato Oficial
                </p>
                <ul className="space-y-2.5 text-xs">
                  <li className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#c59b27] shrink-0 mt-0.5" />
                    <span>Praça XV de Novembro, 20 - Sala 202 (Shopping XV) - Centro, Oliveira - MG</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                    <span>{PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={14} className="text-[#c59b27] shrink-0" />
                    <span>Seg. a Sex. · Abre às 12:00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={14} className="text-[#f59e0b] shrink-0 fill-[#f59e0b]" />
                    <span>5,0 ★ no Google (41 avaliações)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* OAB Compliance Disclaimer */}
            <div className="pt-8 text-[11px] leading-relaxed text-slate-500">
              <p>
                <strong>Aviso Legal & Ética Profissional da Advocacia:</strong> Este website tem caráter exclusivamente informativo e institucional, em estrita observância ao Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB) e ao Provimento nº 205/2021 do Conselho Federal da OAB. As informações aqui prestadas não configuram promessa de resultado nem substituem a consulta jurídica individualizada com profissional devidamente inscrito na OAB.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600">
                <p>© {new Date().getFullYear()} Santos Teixeira Advogados Associados. Todos os direitos reservados. CNPJ / OAB-MG.</p>
                <p>Oliveira - MG · Shopping XV · Atendimento Nacional</p>
              </div>
            </div>
          </div>
        </footer>

        {/* ======================================================== */}
        {/* BOTÃO FLUTUANTE DO WHATSAPP (CONVERSÃO ÁGIL E SUPORTE)   */}
        {/* ======================================================== */}
        <div className="fixed right-5 bottom-5 z-40 flex items-center gap-2.5">
          <a
            href={getWhatsAppUrl("Olá, Dr. Wesley Santos! Gostaria de tirar uma dúvida sobre o meu caso.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/60 cursor-pointer"
            aria-label="Converse pelo WhatsApp com o Dr. Wesley Santos"
          >
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-30" />
            <WhatsAppIcon size={30} />
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
