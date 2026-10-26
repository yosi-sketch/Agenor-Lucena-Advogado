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
  UserCheck,
  Users,
  Heart,
  Landmark,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535998098019";
const PHONE_DISPLAY = "(35) 99809-8019";
const EMAIL_CONTACT = "contato@yanrezende.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/yanrezende.adv/";
const INSTAGRAM_HANDLE = "@yanrezende.adv";
const LINKTREE_URL = "https://linktr.ee/yanrezende.adv";

const ADDRESS_TEXT =
  "Galeria Pan América - R. Conselheiro Mayrink, n° 217 - Sala 6 (1ª sala à direita) - Centro, Caxambu - MG, 37440-000";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Yan+Rezende+%E2%80%94+Advocacia+e+Consultoria+Jur%C3%ADdica%0ACaxambu+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo-white.png";
const LOGO_ORIGINAL_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/logo-emblem.png";
const FOTO_HERO_SRC = "/hero.jpg";
const FOTO_ABOUT_SRC = "/about.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Yan Rezende! Gostaria de uma orientação jurídica sobre o meu caso.";
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
    id: "direito-do-consumidor",
    title: "Direito do Consumidor & Defesa de Direitos",
    category: "Bancos · Planos de Saúde · Companhias Aéreas · SPC/Serasa · Reparação de Danos",
    icon: Shield,
    tag: "Defesa Ativa do Consumidor · Indenizações Justas · Danos Morais",
    summary:
      "Atuação enérgica contra abusos de instituições financeiras, empresas de telefonia, companhias aéreas, planos de saúde e concessionárias. Busca de reparação integral e cessação de cobranças indevidas.",
    details:
      "Relações de consumo exigem proteção rigorosa da lei para restabelecer o equilíbrio e punir práticas abusivas. O escritório de Yan Rezende atua com combatividade na exclusão de negativações ilegais no SPC/Serasa, cancelamento de juros e tarifas bancárias abusivas, restituição em dobro de quantias cobradas indevidamente, e obtenção de indenizações por danos morais decorrentes de descaso, cancelamento de voos ou recusa de cobertura médica.",
    topics: [
      "Ações indenizatórias por negativação indevida nos cadastros de proteção ao crédito (SPC/Serasa)",
      "Revisão de contratos bancários, combate a juros extorsivos, golpes do PIX e fraudes financeiras",
      "Defesa contra planos de saúde: negativas de cirurgias, medicamentos de alto custo e reajustes abusivos",
      "Direito aeronáutico: cancelamentos de voos, atrasos excessivos, overbooking e extravio de bagagens",
      "Processos contra concessionárias de energia, água e telecomunicações por corte ou falha na prestação",
      "Ações por defeitos e vícios ocultos em produtos, devolução de valores e reparação de danos",
    ],
    whatsAppText:
      "Olá, Dr. Yan Rezende! Gostaria de uma consultoria sobre uma questão de Direito do Consumidor / cobrança indevida.",
  },
  {
    id: "direito-trabalhista",
    title: "Direito Trabalhista & Causas Laborais",
    category: "Rescisão Indireta · Horas Extras · Vínculo · Insalubridade · Assédio Moral",
    icon: Briefcase,
    tag: "Defesa dos Direitos do Trabalhador · Sensibilidade · Reparação Integral",
    summary:
      "Defesa minuciosa e humana dos direitos trabalhistas. Atuação estratégica para garantir o recebimento integral de verbas rescisórias, horas extras, adicionais e indenizações por assédio no ambiente de trabalho.",
    details:
      "Com amplo reconhecimento em causas trabalhistas e um olhar sensível e acolhedor para as particularidades de cada trabalhador, Dr. Yan Rezende analisa detalhadamente holerites, folhas de ponto e condições de trabalho. Atuamos com extrema clareza para que você entenda cada direito violado, buscando na Justiça do Trabalho a justa reparação sem desgaste desnecessário.",
    topics: [
      "Ação trabalhista para pagamento integral de verbas rescisórias, aviso prévio, 13º e férias",
      "Cobrança de horas extras não computadas, intervalos suprimidos e banco de horas irregular",
      "Reconhecimento de vínculo de emprego sem carteira assinada (CLT) e recolhimento de FGTS",
      "Ação de Rescisão Indireta do contrato de trabalho (quando a empresa comete falta grave)",
      "Pedidos de adicionais de periculosidade e insalubridade para atividades expostas a riscos",
      "Ações de indenização por assédio moral, perseguição no trabalho e discriminação",
    ],
    whatsAppText:
      "Olá, Dr. Yan Rezende! Gostaria de consultar sobre os meus direitos trabalhistas / rescisão.",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Benefícios INSS",
    category: "Aposentadorias · Auxílio-Doença · BPC/LOAS · Pensão por Morte · Planejamento",
    icon: Landmark,
    tag: "Concessão & Revisão de Benefícios · Reversão de Indeferimentos · INSS",
    summary:
      "Orientação técnica segura e planejamento previdenciário para obter o melhor benefício possível. Reversão de pedidos negados pelo INSS na via administrativa e judicial com agilidade.",
    details:
      "A aposentadoria é a conquista de uma vida inteira de trabalho e dedicação. Muitas vezes, o INSS comete equívocos ao não reconhecer períodos trabalhados, tempo rural ou atividades especiais insalubres. Dr. Yan Rezende realiza cálculos previdenciários minuciosos, atuando para destravar benefícios por incapacidade (auxílio-doença), BPC/LOAS para idosos e PCD, pensões e aposentadorias justas.",
    topics: [
      "Planejamento Previdenciário personalizado para garantir o melhor valor e momento de aposentadoria",
      "Concessão e revisão de Aposentadoria por Idade, Tempo de Contribuição, Especial e Rural",
      "Reversão judicial de indeferimento de Auxílio por Incapacidade Temporária (auxílio-doença)",
      "Pedidos de BPC/LOAS (Benefício de Prestação Continuada) para pessoas com deficiência e idosos",
      "Reconhecimento de atividade especial (insalubre/perigosa) para conversão em tempo comum",
      "Concessão de Pensão por Morte e regularização de tempo de contribuição pendente (CNIS)",
    ],
    whatsAppText:
      "Olá, Dr. Yan Rezende! Gostaria de orientação sobre minha aposentadoria / benefício do INSS.",
  },
  {
    id: "direito-civel-contratos",
    title: "Direito Cível, Contratos & Indenizações",
    category: "Contratos · Cobranças · Responsabilidade Civil · Obrigações · Reparação de Danos",
    icon: Scale,
    tag: "Segurança Contratual · Cobranças Eficazes · Blindagem Jurídica",
    summary:
      "Soluções jurídicas para disputas cíveis, cobrança de créditos inadimplidos, revisão de contratos e ações indenizatórias. Atuação preventiva e contenciosa com alta precisão técnica.",
    details:
      "As relações civis e contratuais demandam instrumentos claros e segurança jurídica impecável. O escritório conduz ações de execução de títulos de crédito, recuperação de ativos, resolução de controvérsias entre particulares e elaboração de contratos personalizados com cláusulas de proteção que evitam litígios futuros e garantem a eficácia executiva do negócio.",
    topics: [
      "Elaboração, análise e revisão minuciosa de contratos cíveis, comerciais e de prestação de serviços",
      "Ações de cobrança de dívidas, execução de títulos extrajudiciais e recuperação de créditos",
      "Ações de obrigação de fazer e não fazer, descumprimento contratual e rescisão com perdas e danos",
      "Ações indenizatórias por danos morais, materiais, estéticos e lucros cessantes",
      "Resolução de conflitos de vizinhança, propriedade e perturbação do sossego",
      "Medidas cautelares urgentes e liminares para resguardo de direitos e preservação de patrimônio",
    ],
    whatsAppText:
      "Olá, Dr. Yan Rezende! Gostaria de consultar sobre uma questão cível / análise de contrato / cobrança.",
  },
  {
    id: "consultoria-empresarial",
    title: "Consultoria Jurídica Empresarial & Negócios",
    category: "Assessoria Preventiva · Contratos Empresariais · Gestão de Passivos · Resolução Rápida",
    icon: Building2,
    tag: "Soluções Corporativas Ágeis · Redução de Riscos · Parceria Estratégica",
    summary:
      "Assessoria jurídica ágil e resolutiva para empresas, microempreendedores e negócios locais. Prevenção de passivos, adequação contratual e solução de entraves em prazos recordes.",
    details:
      "Empresas modernas precisam de agilidade e decisões respaldadas pela lei para crescer com sustentabilidade. Conforme comprovado na prática com clientes corporativos que tiveram três atividades jurídicas resolvidas em tempo menor que o prazo estipulado, Dr. Yan Rezende atua como parceiro estratégico das empresas, blindando operações comerciais e reduzindo riscos trabalhistas e de consumo.",
    topics: [
      "Consultoria jurídica preventiva contínua para micro, pequenas e médias empresas do Sul de Minas",
      "Elaboração de contratos com fornecedores, clientes, prestadores de serviços e parceiros comerciais",
      "Auditoria trabalhista preventiva para mitigação de riscos de passivos e reclamações laborais",
      "Adequação de práticas comerciais e termos de serviço ao Código de Defesa do Consumidor",
      "Recuperação extrajudicial e judicial de créditos inadimplidos corporativos",
      "Resolução célere de demandas societárias, notificações e acordos comerciais estratégicos",
    ],
    whatsAppText:
      "Olá, Dr. Yan Rezende! Gostaria de uma assessoria jurídica empresarial para a minha empresa.",
  },
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família, Sucessões & Inventários",
    category: "Inventário Extrajudicial · Divórcio · Partilha · Pensão · Planejamento Familiar",
    icon: Users,
    tag: "Condução Ética & Paciente · Mediação de Conflitos · Preservação do Diálogo",
    summary:
      "Atendimento sensível e discreto para questões familiares e sucessórias. Inventários ágeis em cartório de notas, partilhas justas de patrimônio e acordos consensuais que preservam a paz da família.",
    details:
      "Momentos delicados na vida familiar exigem um advogado que alie profundo domínio técnico a extrema empatia e didática. Dr. Yan Rezende prioriza soluções consensuais e céleres em cartório de notas para inventários e divórcios, evitando desgastes emocionais prolongados e garantindo a correta partilha dos bens com segurança tributária.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas: rapidez na partilha quando há consenso entre herdeiros",
      "Inventário Judicial e arrolamento de bens para espólios com particularidades específicas",
      "Divórcio consensual em cartório e judicial, com definição justa de partilha patrimonial",
      "Ações de alimentos (fixação, revisão e exoneração de pensão alimentícia)",
      "Regulamentação de guarda compartilhada, visitas e convivência familiar",
      "Planejamento sucessório patrimonial e doações com reserva de usufruto",
    ],
    whatsAppText:
      "Olá, Dr. Yan Rezende! Gostaria de orientação sobre inventário / questão familiar / divórcio.",
  },
  {
    id: "atendimento-humanizado-inclusivo",
    title: "Atendimento Inclusivo, Humanizado & Causas Sensíveis",
    category: "Direitos LGBTQIA+ · Retificação de Nome e Gênero · Não Discriminação · Empatia",
    icon: Heart,
    tag: "Acolhimento Integral · Respeito à Diversidade · Cidadania & Dignidade",
    summary:
      "Advocacia pioneira, ética e humanizada com olhar sensível para causas diversas, direitos civis e garantia de dignidade à comunidade LGBTQIA+ e grupos vulneráveis.",
    details:
      "Reconhecido pela sensibilidade e respeito com que atende cada pessoa, Dr. Yan Rezende oferece um espaço seguro, acolhedor e livre de preconceitos. Realizamos com discrição procedimentos de retificação de prenome e gênero diretamente em cartório, formalização de uniões estáveis homoafetivas, planejamento familiar e combate rigoroso a qualquer forma de discriminação social ou institucional.",
    topics: [
      "Retificação de prenome e gênero de pessoas trans e travestis direto no Registro Civil (extrajudicial)",
      "Reconhecimento e formalização jurídica de União Estável e Casamento Homoafetivo",
      "Adoção por casais homoafetivos e registro de dupla parentalidade (socioafetiva e biológica)",
      "Ações indenizatórias e medidas protetivas contra homofobia, transfobia e discriminação",
      "Defesa de direitos de grupos vulneráveis perante órgãos públicos e instituições privadas",
      "Atendimento com escuta ativa, linguagem acolhedora, respeito integral e total sigilo",
    ],
    whatsAppText:
      "Olá, Dr. Yan Rezende! Gostaria de conversar com você sobre uma causa com atendimento acolhedor / direitos civis.",
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
    name: "Bianca Coelho Scaglioni",
    badge: "3 avaliações · 1 foto · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Advogado super atencioso, extremamente competente e humano. Tem um olhar muito sensível e explica tudo com clareza!",
    content:
      "Advogado super atencioso, extremamente competente e humano. Demonstra muito conhecimento em direito trabalhista e tem um olhar muito sensível para causas LGBT+, o que faz toda diferença no atendimento. Explica tudo com clareza e passa muita confiança. Recomendo muito!",
  },
  {
    name: "Giovani Castro",
    badge: "4 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Conseguiu resolver as três atividades jurídicas da minha empresa em um tempo menor que o prazo estipulado!",
    content:
      "Experiência excelente, Yan conseguiu resolver as três atividades jurídicas da minha empresa em um tempo menor que o prazo estipulado. Com certeza será minha primeira opção sempre.",
  },
  {
    name: "Beatriz Maria Barbosa de Souza",
    badge: "5 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Sanou todas as minhas dúvidas de uma maneira muito didática e prática! Teve muita paciência, um profissional fora da curva!",
    content:
      "Yan é um excelente profissional, quando eu precisei me ajudou e sanou todas as minhas dúvidas de uma maneira muito didática e prática! Teve muita paciência e foi um profissional fora da curva. Indico o seu trabalho de olhos fechados!",
  },
  {
    name: "Sabrina Reis",
    badge: "4 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Melhor advogado do sul de minas, tenho muita confiança nele! Apenas recomendo 🙏🏻",
    content:
      "Melhor advogado do sul de minas, tenho muita confiança nele! Apenas recomendo 🙏🏻",
  },
  {
    name: "Fernanda Segurasse de Moraes",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Além da competência técnica, o que mais admiro é a empatia e o respeito com que atende seus clientes!",
    content:
      "Tive a alegria de acompanhar a trajetória desse profissional. Um advogado extremamente dedicado, comprometido com aquilo que faz e sempre muito atualizado. Além da competência técnica, o que mais admiro é a empatia e o respeito com que atende.",
  },
  {
    name: "Thiago Pádua",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Atendimento extremamente profissional, com seriedade, ética e grande conhecimento técnico!",
    content:
      "Atendimento extremamente profissional, com seriedade, ética e grande conhecimento técnico. Recomendo.",
  },
  {
    name: "Letícia Gonçalves Maciel",
    badge: "5 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Profissional super inteligente, atencioso e cuidadoso. Foi extremamente detalhista, me ajudou no início, sim e pós!",
    content:
      "O Yan é um profissional super inteligente, atencioso e cuidadoso. Todas as vezes que eu o acionei, ele foi extremamente detalhista, me ajudou no início, sim e pós. Recomendo!",
  },
  {
    name: "Thaís Silva",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Excelente advogado. Muito comprometido, responsável e sempre disposto a ajudar com profissionalismo!",
    content:
      "Além de um grande amigo, é um excelente advogado. Muito comprometido, responsável e sempre disposto a ajudar com conhecimento e profissionalismo.",
  },
  {
    name: "Mariana Leão",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Advogado responsável, diligente e com uma grande sensibilidade com a situação de seus clientes!",
    content:
      "Advogado responsável, comprometido com o trabalho, diligente e com uma grande sensibilidade com a situação de seus clientes. Recomendo muito!",
  },
  {
    name: "Ana Flávia Safady",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Excelente profissional! Dedicado, inteligente e esforçado. Recomendo a todos!",
    content:
      "Excelente profissional! Dedicado, inteligente e esforçado. Recomendo a todos!",
  },
  {
    name: "Juliana Rosental",
    badge: "9 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Yan é um profissional super competente e capacitado. Me ajudou, orientou e senti muita confiança!",
    content:
      "Muito boa!! Yan é um profissional super competente e capacitado. Me ajudou, orientou e senti muita confiança! Recomendo!!",
  },
  {
    name: "Alice Siqueira dos Santos",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Profissional extremamente competente e atencioso. Atendimento sempre respeitoso, sério e muito dedicado!",
    content:
      "Profissional extremamente competente e atencioso. Atendimento sempre respeitoso, sério e muito dedicado. Recomendo!",
  },
  {
    name: "Maria Eduarda Pereira Alvares",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Excelente profissional!! Competente e atencioso com seus clientes.",
    content:
      "Excelente profissional!! Competente e atencioso com seus clientes.",
  },
  {
    name: "Raquel Pereira",
    badge: "10 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Excelente profissional! Atencioso e super competente! Recomendo a todos!",
    content:
      "Excelente profissional! Atencioso e super competente! Recomendo a todos!",
  },
  {
    name: "Mariana Rodrigues",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight:
      "Um excelente profissional, confiável e responsável com seus clientes. ❤️",
    content:
      "Um excelente profissional, confiável e responsável com seus clientes. ❤️",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona o primeiro atendimento com o Dr. Yan Rezende?",
    answer:
      "O atendimento inicial começa diretamente pelo nosso WhatsApp oficial. Você nos envia um relato seguro do seu caso e documentos que possuir (contratos, comprovantes, holerites, extratos ou notificações). O Dr. Yan Rezende analisa a situação com didática, transparência e sem juridiquês, apresentando com clareza a viabilidade e os caminhos legais disponíveis — presencialmente em nosso escritório na Galeria Pan América em Caxambu - MG ou online por videoconferência com total sigilo para qualquer lugar do Brasil.",
  },
  {
    question: "Moro em outra cidade ou estado. Posso ser atendido(a) à distância?",
    answer:
      "Sim, perfeitamente! Grande parte dos processos jurídicos no Brasil hoje tramita de forma 100% eletrônica perante a Justiça Estadual, Federal e do Trabalho. Realizamos atendimentos por videochamada, envio seguro de documentos digitalizados e assinaturas eletrônicas com validade jurídica pelo celular. Você acompanha cada etapa do seu caso com total comodidade e atualizações constantes.",
  },
  {
    question: "Tive meu benefício negado pelo INSS. Ainda é possível reverter?",
    answer:
      "Sim! O INSS frequentemente indefere pedidos de aposentadoria, auxílio por incapacidade temporária (auxílio-doença) ou BPC/LOAS por falhas de análise de documentos ou perícias médicas superficiais. Nós realizamos uma auditoria do seu processo administrativo no INSS e ingressamos com Ação Judicial Previdenciária perante a Justiça Federal, onde uma perícia judicial imparcial e especializada analisa a sua real condição de saúde ou histórico de contribuições.",
  },
  {
    question: "Tive problemas com um banco, compra ou cobrança indevida. O que fazer?",
    answer:
      "Guarde todos os comprovantes, protocolos de atendimento, extratos e prints de mensagens. Com esses documentos, podemos notificá-los formalmente ou ingressar com Ação no Juizado Especial Cível ou Justiça Comum, exigindo o cancelamento imediato da cobrança, a exclusão do seu nome de cadastros negativos (SPC/Serasa) e a devida indenização por danos morais e materiais decorrentes do transtorno.",
  },
  {
    question: "Fui demitido ou estou sofrendo abusos no trabalho. Quais são meus direitos?",
    answer:
      "Todo trabalhador tem direito ao recebimento rigoroso e pontual de suas verbas rescisórias, horas extras trabalhadas, adicionais de periculosidade ou insalubridade e a um ambiente de trabalho digno e respeitoso. Se você estiver sofrendo perseguição, assédio moral ou atrasos graves de salário, é possível solicitar a rescisão indireta (a demissão do patrão por falta grave, com recebimento de todas as indenizações como se tivesse sido demitido sem justa causa).",
  },
  {
    question: "Como a consultoria jurídica pode ajudar a minha empresa?",
    answer:
      "A consultoria jurídica atua como um escudo preventivo para sua empresa. Analisamos contratos com fornecedores e clientes, adequamos práticas ao Código de Defesa do Consumidor, revisamos a rotina trabalhista para evitar passivos e solucionamos impasses burocráticos e cobranças em prazos ágeis, permitindo que você foque no crescimento do seu negócio com segurança patrimonial.",
  },
  {
    question: "Como é feito o atendimento para causas de direitos civis e comunidade LGBTQIA+?",
    answer:
      "Oferecemos um atendimento estritamente confidencial, acolhedor e humanizado, garantindo que você se sinta respeitado(a) e seguro(a) em todas as fases. Conduzimos procedimentos de retificação de prenome e gênero em cartório, formalização de união estável homoafetiva, adoção e ações judiciais contra qualquer forma de preconceito ou violação de direitos.",
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
          dark ? "text-white" : "text-[#1f0b15]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            dark ? "text-[#f2d6de]" : "text-[#644452]"
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
      <main className="min-h-screen bg-[#0d040a] text-[#fbf5f7] selection:bg-[#9f526c] selection:text-white">
        {/* TOP ANNOUNCEMENT BAR (DARK LUXURY PLUM) */}
        <div className="border-b border-[#7e3a53]/40 bg-[#15050e] py-2 text-xs">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#e3bcc4] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-white" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                Yan Rezende — Advocacia e Consultoria Jurídica · Caxambu - MG ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#f2d6de]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#e3bcc4] text-white" />
                <span className="font-bold text-white">5,0 ★</span> (24 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-[#7e3a53]/50 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de uma consultoria sobre o meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#f2d6de] sm:inline-flex"
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
              ? "border-b border-[#7e3a53]/50 bg-[#0d040a]/95 py-3 shadow-xl shadow-black/80 backdrop-blur-md"
              : "border-b border-[#7e3a53]/35 bg-[#0d040a]/90 py-4 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Left: Logo + Desktop Navigation grouped with generous breathing room */}
            <div className="flex items-center gap-8 lg:gap-12 xl:gap-16">
              {/* Logo Link */}
              <a
                href="#"
                className="group flex shrink-0 items-center transition-opacity hover:opacity-95"
                aria-label="Yan Rezende Advocacia e Consultoria Jurídica - Início"
              >
                <div className="relative flex items-center py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Yan Rezende Advocacia e Consultoria Jurídica - Logotipo Oficial"
                    width={260}
                    height={52}
                    className="h-9 sm:h-10 md:h-11 w-auto max-w-[180px] sm:max-w-[210px] md:max-w-[240px] object-contain object-left drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)] transition-transform duration-200"
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
                  Sobre o Advogado
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
                href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de consultar sobre a viabilidade do meu caso.")}
                target="_blank"
                variant="platinum"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#1f0b15]" />
                <span className="hidden xl:inline">Atendimento WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-[#7e3a53]/60 bg-[#1a0b15] text-[#fbf5f7] transition-colors hover:border-[#e3bcc4] hover:text-white lg:hidden"
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
                className="border-b border-[#7e3a53]/60 bg-[#13070f] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <a
                    href="#atuacao"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f2d6de] uppercase transition-colors hover:text-white"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#c88ea0]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f2d6de] uppercase transition-colors hover:text-white"
                  >
                    <span>Sobre o Dr. Yan Rezende</span>
                    <ArrowRight size={14} className="text-[#c88ea0]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f2d6de] uppercase transition-colors hover:text-white"
                  >
                    <span>Diferenciais</span>
                    <ArrowRight size={14} className="text-[#c88ea0]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f2d6de] uppercase transition-colors hover:text-white"
                  >
                    <span>Avaliações Google (5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#c88ea0]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f2d6de] uppercase transition-colors hover:text-white"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#c88ea0]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#f2d6de] uppercase transition-colors hover:text-white"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-[#c88ea0]" />
                  </a>

                  <div className="pt-4 border-t border-[#7e3a53]/40">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de agendar um atendimento.")}
                      target="_blank"
                      variant="platinum"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com o Dr. Yan</span>
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
        <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#0d040a]">
          {/* Subtle Ambient Metallic Rose-Mauve Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-radial from-[#9f526c]/18 via-[#5e263c]/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-96 w-96 rounded-full bg-[#c88ea0]/12 blur-3xl" />

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
                <motion.div variants={reveal} className="mb-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#9f526c]/50 bg-[#1a0b15] px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-white shadow-sm">
                    <span className="size-1.5 rounded-full bg-[#e3bcc4] animate-pulse" />
                    Yan Rezende · Advocacia & Consultoria Jurídica
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
                >
                  Advocacia Estratégica, Humana e de{" "}
                  <span className="bg-gradient-to-r from-white via-[#f2d6de] to-[#c88ea0] bg-clip-text text-transparent">
                    Alta Resolutividade
                  </span>{" "}
                  para Defender Seus Direitos.
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-[#f2d6de] sm:text-lg"
                >
                  Segurança jurídica, clareza didática e empatia no atendimento. O advogado{" "}
                  <strong className="text-white font-semibold">Yan Rezende</strong> atua com excelência técnica e dedicação irrestrita nas áreas{" "}
                  <strong className="text-white font-semibold">Cível, Consumidor, Previdenciário (INSS), Trabalhista e Empresarial</strong>{" "}
                  em <strong className="text-white font-semibold">Caxambu, Sul de Minas</strong> e online para todo o Brasil.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de consultar sobre a situação do meu caso.")}
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

              {/* Right Column: Hero Visual Frame (Dr. Yan Rezende portrait) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Metallic Border Box */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#9f526c]/60 bg-[#1a0b15] p-2 shadow-2xl shadow-black/95">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#12070e]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Yan Rezende - Advogado e Consultor Jurídico em Caxambu - MG"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d040a] via-transparent to-transparent opacity-65" />
                    </div>

                    {/* Subtle Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-[#9f526c]/60 bg-[#13070f]/95 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-white">
                            Yan Rezende
                          </p>
                          <p className="text-[11px] text-[#f2d6de]">
                            Advocacia & Consultoria Jurídica
                          </p>
                        </div>
                        <span className="rounded-md border border-[#9f526c]/50 bg-[#220e1c] px-2.5 py-1 text-[10px] font-bold text-[#f2d6de]">
                          Caxambu · MG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 5.0 Rating) */}
                  <div className="absolute -top-5 -left-5 hidden rounded-xl border border-[#9f526c]/60 bg-[#1a0b15]/95 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#220e1c] border border-[#7e3a53]/60">
                      <GoogleIcon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-[#e3bcc4] text-white"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-white mt-0.5">
                        5,0 no Google · 24 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Especialidades) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-[#9f526c]/60 bg-[#1a0b15]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <Scale size={16} className="text-[#e3bcc4]" />
                    <span className="text-xs font-bold tracking-wide text-white">
                      Cível · Consumidor · INSS · Trabalho ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN DOBRA 1 (DARK) */}
            <div className="mt-14 border-t border-[#7e3a53]/35 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-[#7e3a53]/40 bg-[#1a0b15]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    5,0 ★
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-[#e3bcc4]">24 avaliações 100% 5 estrelas</p>
                </div>

                <div className="rounded-xl border border-[#7e3a53]/40 bg-[#1a0b15]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Referência
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Sul de Minas Gerais</p>
                  <p className="text-[11px] text-[#e3bcc4]">Sede em Caxambu & Região</p>
                </div>

                <div className="rounded-xl border border-[#7e3a53]/40 bg-[#1a0b15]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Humanizado
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Atendimento Acolhedor</p>
                  <p className="text-[11px] text-[#e3bcc4]">Sem juridiquês, didática clara</p>
                </div>

                <div className="rounded-xl border border-[#7e3a53]/40 bg-[#1a0b15]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    DNE
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Direito na Escola</p>
                  <p className="text-[11px] text-[#e3bcc4]">Membro atuante em Caxambu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: PILARES & ÁREAS DE ATUAÇÃO (LIGHT ALABASTER)    */}
        {/* ======================================================== */}
        <section id="atuacao" className="border-t border-[#ebd9df] bg-[#fdfbfb] text-[#1f0b15] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="Especialidades & Pilares de Atuação"
                description="Soluções jurídicas estruturadas para pessoas físicas e empresas. Da consultoria preventiva às demandas contenciosas de alta complexidade."
              >
                Atuação Jurídica Completa e Especializada
              </Heading>

              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de consultar sobre a minha situação jurídica.")}
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
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#ebd9df] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c88ea0] hover:shadow-lg hover:shadow-[#9f526c]/10"
                  >
                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#f8f1f4] text-[#7e3a53] border border-[#ebd9df] transition-colors group-hover:bg-[#7e3a53] group-hover:text-white">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#f8f1f4] px-3 py-1 text-[10px] font-bold text-[#7e3a53] uppercase tracking-wider">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-[#1f0b15] group-hover:text-[#7e3a53] transition-colors">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#9f526c]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-[#644452]">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#ebd9df] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex w-full items-center justify-between text-xs font-bold text-[#7e3a53] transition-colors hover:text-[#1f0b15] cursor-pointer"
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
        {/* DOBRA 3: SOBRE O ADVOGADO (DARK LUXURY OBSIDIAN PLUM)    */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-[#7e3a53]/40 bg-[#13070f] py-20 lg:py-28 text-[#fbf5f7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Image: Yan Rezende sitting in modern armchair with light blazer */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="overflow-hidden rounded-2xl border-2 border-[#9f526c]/60 bg-[#1a0b15] p-2.5 shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#220e1c]">
                      <Image
                        src={FOTO_ABOUT_SRC}
                        alt="Dr. Yan Rezende - Advocacia e Consultoria Jurídica em Caxambu - MG"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -bottom-6 -right-4 rounded-xl border border-[#9f526c]/60 bg-[#0d040a] p-4 shadow-xl">
                    <p className="font-serif text-3xl font-bold text-white">
                      Nota 5,0 ★
                    </p>
                    <p className="text-[11px] font-semibold text-[#e3bcc4]">
                      Reconhecimento Máximo no Google
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre o Advogado"
                  dark={true}
                  description="Uma trajetória pautada pela dedicação irrestrita, comunicação clara e acessível, e compromisso genuíno com a justiça."
                >
                  Yan Rezende: Advocacia Estratégica & Atendimento Humano
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#f2d6de]">
                  <p>
                    Com escritório sediado na <strong className="text-white font-semibold">Galeria Pan América, no Centro de Caxambu - MG</strong>, o advogado <strong className="text-white font-semibold">Yan Rezende</strong> consolidou uma reputação admirável no Sul de Minas pela seriedade técnica, ética irretocável e atendimento acolhedor.
                  </p>
                  <p>
                    Mais do que processos, lidamos com a vida, o patrimônio e a tranquilidade de pessoas e famílias. Por isso, a marca registrada da atuação de Yan Rezende é a <strong className="text-white font-semibold">didática descomplicada</strong> — explicando cada etapa do processo em linguagem clara, tirando dúvidas com paciência e fornecendo suporte detalhado do início até o pós-processo.
                  </p>
                  <p>
                    Com <strong className="text-white font-semibold">nota máxima 5,0 ★ com 24 avaliações unânimes no Google</strong>, o escritório é amplamente recomendado pela empatia, sensibilidade em causas delicadas e pela agilidade em demandas empresariais e previdenciárias. Além disso, Yan Rezende é membro atuante do projeto <strong className="text-white font-semibold">Direito na Escola (@dne.caxambu)</strong>, reforçando seu compromisso com a educação e a cidadania.
                  </p>
                </div>

                {/* 4 Highlights */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-[#7e3a53]/40 bg-[#1a0b15] p-4">
                    <HeartHandshake size={20} className="text-[#e3bcc4] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Empatia & Acolhimento
                      </h4>
                      <p className="mt-1 text-[11px] text-[#e3bcc4]">
                        Atendimento humanizado, sensível e respeitoso para causas particulares e delicadas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#7e3a53]/40 bg-[#1a0b15] p-4">
                    <FileText size={20} className="text-[#e3bcc4] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Comunicação Didática
                      </h4>
                      <p className="mt-1 text-[11px] text-[#e3bcc4]">
                        Explicações claras e práticas sem juridiquês, tirando dúvidas com paciência ímpar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#7e3a53]/40 bg-[#1a0b15] p-4">
                    <BadgeCheck size={20} className="text-[#e3bcc4] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Celeridade Comprovada
                      </h4>
                      <p className="mt-1 text-[11px] text-[#e3bcc4]">
                        Resolução ágil de demandas jurídicas e empresariais em prazos recordes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-[#7e3a53]/40 bg-[#1a0b15] p-4">
                    <Lock size={20} className="text-[#e3bcc4] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Sigilo & Confiabilidade
                      </h4>
                      <p className="mt-1 text-[11px] text-[#e3bcc4]">
                        Total confidencialidade, acompanhamento atencioso no início, durante e no pós-processo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Li sobre sua trajetória e gostaria de conversar sobre o meu caso.")}
                    target="_blank"
                    variant="platinum"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com o Dr. Yan Rezende</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#f2d6de] transition-colors hover:text-white"
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
        <section id="diferenciais" className="border-t border-[#ebd9df] bg-[#f8f1f4] text-[#1f0b15] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow justify-center mb-3">
                Por que Escolher Yan Rezende Advocacia
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1f0b15] sm:text-4xl">
                O Padrão de Excelência com Nota Máxima 5,0 ★ no Google
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#644452]">
                Pilares comprovados por quem já vivenciou o atendimento e teve seus direitos garantidos.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#ebd9df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c88ea0] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f8f1f4] text-[#7e3a53] border border-[#ebd9df]">
                  <Sparkles size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1f0b15]">
                  Profissional Fora da Curva
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#644452]">
                  Paciência ímpar e capacidade de explicar o direito de forma prática, sanando todas as dúvidas com tranquilidade.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebd9df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c88ea0] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f8f1f4] text-[#7e3a53] border border-[#ebd9df]">
                  <Clock size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1f0b15]">
                  Agilidade e Prazos Recordes
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#644452]">
                  Resolução de atividades jurídicas e empresariais com rapidez superior à média, priorizando a celeridade.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebd9df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c88ea0] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f8f1f4] text-[#7e3a53] border border-[#ebd9df]">
                  <Heart size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1f0b15]">
                  Sensibilidade & Inclusão
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#644452]">
                  Olhar humano e sensível para causas trabalhistas, direitos da comunidade LGBT+ e questões civis complexas.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebd9df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c88ea0] hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f8f1f4] text-[#7e3a53] border border-[#ebd9df]">
                  <Shield size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#1f0b15]">
                  Suporte Início, Meio e Pós
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#644452]">
                  Cuidado detalhista e acompanhamento permanente, mantendo você informado em cada passo até o desfecho.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de esclarecer algumas dúvidas sobre o meu caso.")}
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
        <section id="depoimentos" className="border-t border-[#7e3a53]/40 bg-[#0d040a] py-20 lg:py-28 text-[#fbf5f7]">
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
                        className="fill-[#e3bcc4] text-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">5,0 de 5,0</span>
                  <span className="text-xs text-[#e3bcc4]">
                    · 24 avaliações 100% cinco estrelas no Google
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#9f526c]/60 bg-[#1a0b15] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:border-[#e3bcc4] hover:bg-[#2d1326]"
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
                  className="relative flex flex-col justify-between rounded-2xl border border-[#7e3a53]/40 bg-[#1a0b15] p-6 shadow-md transition-all duration-300 hover:border-[#c88ea0] hover:bg-[#220e1c]"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#e3bcc4] text-white"
                        />
                      ))}
                    </div>

                    {/* Highlight Quote */}
                    <p className="mt-3 font-serif text-sm font-bold text-white leading-snug">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    {/* Full Review Text */}
                    <p className="mt-3 text-xs leading-relaxed text-[#f2d6de]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#7e3a53]/40 pt-4">
                    <p className="font-serif text-xs font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#e3bcc4]">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#9f526c]/50 bg-[#1a0b15] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-white sm:text-xl">
                Precisa de orientação jurídica profissional e segura?
              </h3>
              <p className="mt-2 text-xs text-[#f2d6de] max-w-xl mx-auto">
                Não enfrente dúvidas ou litígios sem o respaldo de quem atua com seriedade, ética, rapidez e total dedicação ao seu caso.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Li as avaliações no site e gostaria de conversar com você sobre o meu caso.")}
                  target="_blank"
                  variant="platinum"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com o Dr. Yan Rezende Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO (LIGHT)             */}
        {/* ======================================================== */}
        <section className="border-t border-[#ebd9df] bg-[#fdfbfb] text-[#1f0b15] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow justify-center mb-3">
                Processo Transparente
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1f0b15] sm:text-4xl">
                Como Funciona o Seu Atendimento
              </h2>
              <p className="mt-3 text-sm text-[#644452]">
                Passo a passo simples, ágil e descomplicado desde a primeira mensagem até o desfecho da sua questão jurídica.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#ebd9df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c88ea0] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#7e3a53]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1f0b15]">
                  Contato Inicial
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#644452]">
                  Envie uma mensagem no WhatsApp relatando a sua situação e esclareça as primeiras dúvidas diretamente com o escritório.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebd9df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c88ea0] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#7e3a53]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1f0b15]">
                  Análise Documental
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#644452]">
                  Avaliamos detalhadamente contratos, extratos, notificações ou processos para verificar a viabilidade jurídica do caso.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebd9df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c88ea0] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#7e3a53]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1f0b15]">
                  Estratégia Sob Medida
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#644452]">
                  Definimos o caminho mais econômico e rápido (acordo extrajudicial em cartório ou ação judicial fundamentada).
                </p>
              </div>

              <div className="rounded-2xl border border-[#ebd9df] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c88ea0] hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#7e3a53]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#1f0b15]">
                  Acompanhamento Ativo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#644452]">
                  Condução zelosa em todas as instâncias com atualizações frequentes e suporte contínuo até a conclusão definitiva.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ (DARK)                 */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-[#7e3a53]/40 bg-[#13070f] py-20 lg:py-28 text-[#fbf5f7]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow-dark mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-[#f2d6de]">
                Respostas diretas e didáticas para as principais dúvidas sobre atendimento jurídico, processos e prazos.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-[#7e3a53]/40 bg-[#1a0b15] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-white transition-colors hover:text-[#f2d6de] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#c88ea0]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#c88ea0]" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-[#7e3a53]/35 px-5 pt-3 pb-5 text-xs leading-relaxed text-[#f2d6de]"
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
              <p className="text-xs text-[#e3bcc4]">
                Sua dúvida específica não está listada acima?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de esclarecer uma dúvida que não encontrei no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Pergunte diretamente ao Dr. Yan Rezende no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDE & CONTATO (LIGHT)            */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#ebd9df] bg-[#fdfbfb] text-[#1f0b15] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info (LIGHT STYLING) */}
              <div className="lg:col-span-5">
                <span className="eyebrow mb-3.5">Sede & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1f0b15] sm:text-4xl">
                  Estamos Prontos para Atender Você
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#644452]">
                  Venha tomar um café em nosso escritório na Galeria Pan América, no Centro de Caxambu - MG, ou agende sua consulta online com total comodidade e segurança jurídica de onde você estiver.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#ebd9df] bg-[#f8f1f4] text-[#7e3a53]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1f0b15] uppercase tracking-wider">
                        Endereço da Sede
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#644452]">
                        {ADDRESS_TEXT}
                      </p>
                      <p className="text-[11px] text-[#9f526c] font-medium mt-0.5">
                        Centro de Caxambu - MG · Galeria Edifício Pan América, Sala 6 (1ª sala à direita).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#ebd9df] bg-[#f8f1f4] text-[#7e3a53]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1f0b15] uppercase tracking-wider">
                        Telefone & WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-[#644452]">
                        {PHONE_DISPLAY}
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de agendar uma consulta jurídica.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#7e3a53] hover:underline"
                      >
                        Clique para enviar mensagem no WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#ebd9df] bg-[#f8f1f4] text-[#7e3a53]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1f0b15] uppercase tracking-wider">
                        Horário de Funcionamento
                      </p>
                      <p className="mt-1 text-xs text-[#644452]">
                        Segunda a Sexta: 09:00 às 18:00
                      </p>
                      <p className="text-[11px] text-[#9f526c]">
                        Atendimento presencial com agendamento prévio e online para todo o Brasil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#ebd9df] bg-[#f8f1f4] text-[#7e3a53]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1f0b15] uppercase tracking-wider">
                        Redes Sociais & Perfil
                      </p>
                      <div className="mt-1 flex flex-col gap-1 text-xs">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#644452] hover:text-[#1f0b15]"
                        >
                          Instagram: <span className="font-bold">{INSTAGRAM_HANDLE}</span>
                        </a>
                        <a
                          href={LINKTREE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#644452] hover:text-[#1f0b15]"
                        >
                          Linktree: <span className="font-bold">linktr.ee/yanrezende.adv</span>
                        </a>
                        <a
                          href={GOOGLE_SEARCH_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#9f526c] hover:underline"
                        >
                          Perfil Google: Yan Rezende Advocacia (5,0 ★)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card (LIGHT STYLING) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#ebd9df] bg-white p-8 shadow-xl shadow-[#9f526c]/10">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#7e3a53]">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-[#1f0b15] sm:text-3xl">
                    Inicie seu Atendimento com o Dr. Yan Rezende
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#644452]">
                    Selecione a área da sua necessidade para ser direcionado(a) com a mensagem adequada ao WhatsApp oficial do escritório:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de consultar sobre uma questão de Direito do Consumidor / bancos / danos.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#ebd9df] bg-[#f8f1f4] p-4 text-xs font-bold text-[#1f0b15] transition-all hover:border-[#c88ea0] hover:bg-[#f2d6de]/30"
                    >
                      <span>Direito do Consumidor</span>
                      <ArrowRight size={14} className="text-[#7e3a53]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de orientação sobre Causas Trabalhistas / rescisão / horas extras.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#ebd9df] bg-[#f8f1f4] p-4 text-xs font-bold text-[#1f0b15] transition-all hover:border-[#c88ea0] hover:bg-[#f2d6de]/30"
                    >
                      <span>Direito Trabalhista</span>
                      <ArrowRight size={14} className="text-[#7e3a53]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de orientação sobre Aposentadoria / Benefício Previdenciário (INSS).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#ebd9df] bg-[#f8f1f4] p-4 text-xs font-bold text-[#1f0b15] transition-all hover:border-[#c88ea0] hover:bg-[#f2d6de]/30"
                    >
                      <span>Previdenciário (INSS)</span>
                      <ArrowRight size={14} className="text-[#7e3a53]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de orientação sobre Direito Cível / Contratos / Consultoria Empresarial.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-[#ebd9df] bg-[#f8f1f4] p-4 text-xs font-bold text-[#1f0b15] transition-all hover:border-[#c88ea0] hover:bg-[#f2d6de]/30"
                    >
                      <span>Cível & Consultoria Empresarial</span>
                      <ArrowRight size={14} className="text-[#7e3a53]" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-[#ebd9df] pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de conversar com você sobre a minha situação jurídica.")}
                      target="_blank"
                      variant="rosegold"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com o Dr. Yan Rezende</span>
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
        <footer className="border-t border-[#7e3a53]/40 bg-[#0d040a] pt-16 pb-12 text-[#e3bcc4]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Yan Rezende Advocacia e Consultoria Jurídica"
                    width={280}
                    height={56}
                    className="h-10 sm:h-12 w-auto max-w-[240px] sm:max-w-[280px] object-contain object-left"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#f2d6de] max-w-md">
                  ⚖️ Yan Rezende — Advocacia e Consultoria Jurídica. Atuação especializada em Direito Cível, Consumidor, Previdenciário (INSS), Trabalhista e Assessoria Empresarial. Atendimento humanizado, ético e resolutivo presencial em Caxambu - MG e online para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#7e3a53]/60 bg-[#1a0b15] text-[#f2d6de] transition-colors hover:border-white hover:text-white"
                    aria-label="Instagram do Dr. Yan Rezende"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dr. Yan Rezende!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#7e3a53]/60 bg-[#1a0b15] text-[#f2d6de] transition-colors hover:border-white hover:text-white"
                    aria-label="WhatsApp do Dr. Yan Rezende"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-[#7e3a53]/60 bg-[#1a0b15] text-[#f2d6de] transition-colors hover:border-white hover:text-white"
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
                      Sobre o Dr. Yan Rezende
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
                      Sede em Caxambu - MG
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & OAB Column */}
              <div className="lg:col-span-4">
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                  Informações Institucionais & OAB
                </p>
                <p className="mt-4 text-[11px] leading-relaxed text-[#c88ea0]">
                  Este site tem finalidade estritamente institucional e informativa, em estrita observância ao Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não visa à captação indevida de clientela nem substitui consulta jurídica formal.
                </p>
                <div className="mt-4 rounded-lg border border-[#7e3a53]/40 bg-[#1a0b15] p-3 text-[11px] text-[#f2d6de]">
                  <p className="font-bold text-white">
                    Yan Rezende — Advocacia e Consultoria Jurídica
                  </p>
                  <p className="mt-0.5 text-[#e3bcc4]">
                    {ADDRESS_TEXT}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#7e3a53]/40 pt-8 text-center text-[11px] sm:flex-row sm:text-left">
              <p>
                © {new Date().getFullYear()} YAN REZENDE — ADVOCACIA E CONSULTORIA JURÍDICA. Todos os direitos reservados.
              </p>
              <p className="text-[#c88ea0]">
                Galeria Pan América · Caxambu · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá, Dr. Yan Rezende! Gostaria de tirar uma dúvida sobre o meu caso.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Yan Rezende"
            className="group flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-black text-white shadow-xl shadow-black/80 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          >
            <WhatsAppIcon size={19} />
            <span className="hidden sm:inline tracking-wide font-bold">
              Falar com o Dr. Yan
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
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#9f526c]/60 bg-[#13070f] p-6 text-white shadow-2xl sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg border border-[#7e3a53]/60 bg-[#1a0b15] text-[#f2d6de] hover:border-white hover:text-white cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2 text-xs font-bold text-[#e3bcc4] uppercase tracking-wider">
                  <span>Especialidade Jurídica</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {selectedPractice.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#c88ea0]">
                  {selectedPractice.category}
                </p>

                <p className="mt-4 text-xs leading-relaxed text-[#f2d6de] sm:text-sm">
                  {selectedPractice.details}
                </p>

                <div className="mt-6 border-t border-[#7e3a53]/40 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Principais Demandas & Procedimentos Atendidos:
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedPractice.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-[#f2d6de]"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-[#e3bcc4] shrink-0 mt-0.5"
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
                    <span>Consultar Dr. Yan Rezende nesta Área</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setSelectedPractice(null)}
                    className="w-full rounded-lg border border-[#7e3a53]/50 bg-[#1a0b15] px-5 py-3 text-xs font-bold text-[#f2d6de] hover:bg-[#220e1c] hover:text-white sm:w-auto cursor-pointer"
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
