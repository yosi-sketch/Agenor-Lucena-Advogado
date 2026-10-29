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
  Briefcase,
  FileCheck2,
  FileText,
  Lock,
  Landmark,
  Building2,
  BookOpen,
  MessageCircle,
  Gavel,
  BadgeCheck,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Client & Firm Information — Agenor Lucena Advocacia / Dr. Alexandre Abreu Lúcio
const WHATSAPP_NUMBER = "5537999710510";
const PHONE_DISPLAY = "(37) 99971-0510";
const EMAIL_CONTACT = "contato@agenorlucena.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/agenor_lucena/";
const INSTAGRAM_HANDLE = "@agenor_lucena";
const INSTAGRAM_STATS = "1.669 seguidores · 39 posts";

const ADDRESS_PITANGUI =
  "Praça Dr. Isauro Epifânio, 141 - Bairro São Francisco, Pitangui - MG, 35650-000";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Alexandre+Abreu+L%C3%BAcio+%E2%80%94+Advocacia%0APitangui+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=34388a73116c39a8&sxsrf=AKL5yDjKhYjAaGUP_nWraMg-9e1TPu6VoQ:1793289988992&q=escrit%C3%B3rio+de+advocacia+-+dr.+alexandre+abreu+l%C3%BAcio+pitangui+endere%C3%A7o&ludocid=2858374849778695354&sa=X&ved=2ahUKEwiTjZfmzd-XAxWdqZUCHV4xPYsQ6BN6BAg2EAI";

// Official assets generated from the new client logo & photoshoot
const LOGO_SRC = "/logo-trimmed.png";
const LOGO_WHITE_SRC = "/logo-white.png";
const EMBLEM_SRC = "/emblema-al.png";
const FOTO_HERO_SRC = "/dr-alexandre-lucena.jpg";
const FOTO_PORTRAIT_SRC = "/dr-alexandre-portrait.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Alexandre Abreu Lúcio / Agenor Lucena Advocacia! Gostaria de agendar uma consulta jurídica especializada sobre o meu caso.";
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
    id: "direito-do-trabalho-estrategico",
    title: "Direito Trabalhista Estratégico (Trabalhador & Empresa)",
    category: "Rescisão Indireta · Horas Extras · Verbas Rescisórias · Insalubridade · Danos Morais",
    icon: Briefcase,
    tag: "Defesa Combativa · Cálculos Trabalhistas Precisos · Acordos & Ações Judiciais",
    summary:
      "Atuação intransigente na garantia integral dos direitos do trabalhador e na assessoria preventiva empresarial. Reversão de demissões injustas, cobrança de horas extras e recebimento de verbas retidas.",
    details:
      "As relações de trabalho exigem técnica jurídica apurada, agilidade e comprovação documental rigorosa. Sob o comando do Dr. Alexandre Abreu Lúcio, defendemos com firmeza o trabalhador que teve seus direitos violados — seja por demissão sem quitação de verbas, acúmulo de função, horas extras não remuneradas, adicionais de insalubridade ou periculosidade e assédio moral no ambiente corporativo. Também prestamos consultoria consultiva e contenciosa a micro e pequenas empresas, prevenindo passivos trabalhistas com segurança.",
    topics: [
      "Rescisão Indireta do Contrato de Trabalho: saída da empresa recebendo todas as indenizações como se fosse demitido sem justa causa",
      "Cobrança de Horas Extras não pagas, intervalos intrajornada suprimidos e banco de horas irregular",
      "Verbas Rescisórias em atraso: aviso prévio, férias vencidas/proporcionais, 13º salário e multa de 40% do FGTS",
      "Adicionais de Insalubridade e Periculosidade com perícia técnica oficial nos locais de trabalho",
      "Estabilidade da Gestante, cipeiros e acidentados: garantia de reintegração ou indenização substitutiva imediata",
      "Indenização por Acidente de Trabalho, Doenças Ocupacionais, Burnout e LER/DORT",
      "Ação por Danos Morais em virtude de Assédio Moral, humilhação, perseguição ou condições degradantes",
      "Defesa de Empresas e Mediação de Acordos vantajosos perante as Varas do Trabalho",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre Abreu Lúcio! Gostaria de consultar sobre meus Direitos Trabalhistas (rescisão, horas extras ou rescisão indireta).",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível & Responsabilidade Civil (Ações Indenizatórias)",
    category: "Danos Morais & Materiais · Negativação Indevida no SPC/Serasa · Fraudes Bancárias · Acidentes",
    icon: Scale,
    tag: "Reparação Integral · Liminar para Limpeza de Nome · Indenização Justa",
    summary:
      "Defesa contra prejuízos patrimoniais e ofensas à sua honra. Pedido liminar urgente para retirada imediata do seu nome de órgãos de proteção ao crédito e indenização por atos ilícitos.",
    details:
      "Quando uma pessoa ou empresa causa um prejuízo injusto a você, o ordenamento jurídico impõe o dever de reparação integral. Atuamos com celeridade máxima para suspender restrições indevidas em cadastros como SPC, Serasa e cartórios de protesto, além de combater fraudes de instituições financeiras (golpes do Pix, empréstimos não autorizados) e pleitear ressarcimento por danos emergentes e lucros cessantes decorrentes de acidentes e inadimplementos.",
    topics: [
      "Retirada Liminar de Inscrição Indevida no SPC e Serasa com pedido de indenização por dano moral in re ipsa",
      "Fraudes Bancárias e Golpes Virtuais: recuperação de valores em transferências indevidas e cancelamento de consignados",
      "Indenização por Acidentes de Trânsito: conserto de veículo, despesas médicas, lucros cessantes e dano estético",
      "Execução de Dívidas e Cobrança Judicial/Extrajudicial de cheques, notas promissórias e contratos inadimplidos",
      "Ações de Despejo e Cobrança de Aluguéis residenciais e comerciais em atraso",
      "Reparação por Danos à Honra, Calúnia, Difamação e Violação da Imagem pessoal ou profissional",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre! Gostaria de consultar sobre Ação Indenizatória / Negativação Indevida / Danos Morais.",
  },
  {
    id: "contratos-negociacoes-estrategicas",
    title: "Contratos & Negociações Estratégicas",
    category: "Elaboração e Revisão Contratual · Compra e Venda de Imóveis · Locação · Notificações Extrajudiciais",
    icon: FileText,
    tag: "Blindagem Jurídica · Direito Explicado · Segurança nos Negócios",
    summary:
      "Assessoria contratual minuciosa para garantir validade jurídica inquestionável. Cláusulas claras, prevenção de litígios e equilíbrio patrimonial em negócios comerciais e imobiliários.",
    details:
      "A melhor maneira de vencer um processo é estruturar um contrato tão blindado e claro que impeça qualquer controvérsia judicial futura. Aplicamos o compromisso do 'Direito Explicado' para que você entenda minuciosamente cada obrigação e penalidade contratual antes de assinar. Elaboramos instrumentos de compra e venda de imóveis rurais e urbanos, contratos de locação comercial, termos de cessão e notificações com força probatória.",
    topics: [
      "Elaboração e Análise Técnica de Contratos de Compra e Venda e Promessa de Compra e Venda de Imóveis",
      "Contratos de Locação Residencial e Comercial com cláusulas de garantia sólidas (fiança, caução, seguro)",
      "Contratos de Prestação de Serviços, Parcerias Comerciais e Acordos entre Sócios",
      "Notificações Extrajudiciais para constituição formal em mora, rescisão contratual e cobrança de multas",
      "Análise de Riscos Imobiliários (Due Diligence): levantamento de certidões judiciais, fiscais e cartorárias",
      "Renegociação de Dívidas e Acordos Extrajudiciais com efeito de título executivo",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre Abreu Lúcio! Gostaria de suporte para Elaboração ou Revisão de Contrato.",
  },
  {
    id: "direito-do-consumidor",
    title: "Direito do Consumidor & Defesa de Direitos",
    category: "Planos de Saúde · Atraso e Cancelamento de Voos · Cobranças Abusivas · Concessionárias · Vício de Produto",
    icon: Shield,
    tag: "Equilíbrio na Relação · Medidas de Urgência · Devolução em Dobro",
    summary:
      "Combate intransigente a práticas abusivas praticadas por bancos, companhias aéreas, planos de saúde e fornecedores. Aplicação rigorosa do Código de Defesa do Consumidor.",
    details:
      "O consumidor não pode ser prejudicado pelo poder econômico de grandes corporações. Se você teve uma cirurgia negada pelo plano de saúde, seu voo cancelado gerando perda de compromissos ou férias, sua bagagem extraviada, ou recebeu cobranças indevidas de operadoras de telefonia e energia, ingressamos imediatamente com pedidos liminares para resguardar sua saúde, sua dignidade e seu dinheiro.",
    topics: [
      "Ações Urgentes contra Planos de Saúde: liberação de cirurgias, próteses, exames e fornecimento de remédios de alto custo",
      "Direito Aéreo: indenização por cancelamento e atraso excessivo de voos, perda de conexões e extravio de bagagens",
      "Cobranças Indevidas de tarifas bancárias, planos de telefonia, contas de energia ou água com devolução em dobro",
      "Vício do Produto e Veículos com Defeito não solucionados pelos fabricantes ou concessionárias no prazo legal",
      "Cancelamento de compras com estorno de valores e combate a cláusulas contratuais abusivas",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre! Preciso de auxílio jurídico em uma causa de Direito do Consumidor.",
  },
  {
    id: "direito-de-familia-sucessoes",
    title: "Direito de Família & Sucessões (Cível)",
    category: "Divórcio Consensual em Cartório · Guarda & Visitas · Pensão Alimentícia Urgente · Inventário Extrajudicial",
    icon: Users,
    tag: "Atendimento Humanizado · Resguardo dos Filhos · Celeridade em Cartório",
    summary:
      "Condução pacificadora e ágil de questões familiares e partilha de bens. Divórcio e inventário em cartório de notas, minimizando desgastes emocionais e custos desnecessários.",
    details:
      "Assuntos de família exigem um acolhimento empático somado à técnica jurídica firme. Priorizamos sempre a via consensual para solucionar divórcios e inventários diretamente em cartório em questão de semanas, reduzindo custos de impostos (ITCD) e poupando os envolvidos de audiências dolorosas. Na via litigiosa, defendemos intransigentemente o resguardo dos filhos e a divisão justa do patrimônio.",
    topics: [
      "Divórcio Consensual em Cartório de Notas: procedimento descomplicado, seguro e concluído em poucos dias",
      "Divórcio Litigioso Estratégico com blindagem e divisão proporcional dos bens do casal",
      "Fixação de Pensão Alimentícia Provisória urgente e cobrança de débitos em atraso (sob pena de prisão)",
      "Regulamentação e Alteração de Guarda Compartilhada e Regime de Convivência dos Filhos",
      "Ação Revisional e Exoneração de Alimentos fundamentada na mudança da capacidade financeira",
      "Inventário Extrajudicial em Cartório de Notas com partilha pacífica de herança e economia de taxas",
      "Planejamento Sucessório Familiar: doações com reserva de usufruto e testamentos públicos",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre Abreu Lúcio! Gostaria de orientações sobre Divórcio, Pensão ou Inventário em Cartório.",
  },
  {
    id: "direito-explicado-consultoria",
    title: "Consultoria Preventiva & O Conceito de 'Direito Explicado'",
    category: "Direito Sem Juridiquês · Pareceres Acessíveis · Prevenção de Conflitos · Mediação Extrajudicial",
    icon: BookOpen,
    tag: "Linguagem Clara · Decisões Conscientes · Transparência Inegociável",
    summary:
      "O diferencial de entender exatamente cada detalhe do seu caso. Tradução da linguagem jurídica técnica para que você saiba com segurança seus riscos, prazos e chances reais de sucesso.",
    details:
      "Uma das marcas mais reconhecidas do Dr. Alexandre Abreu Lúcio (Agenor Lucena) nas redes sociais e na advocacia prática é o projeto 'Direito Explicado'. Acreditamos que a justiça só é plena quando o cliente compreende o que está acontecendo sem barreiras de juridiquês. Realizamos consultas preventivas esclarecedoras para solucionar disputas de forma amigável antes de se tornarem litígios judiciais demorados.",
    topics: [
      "Consultoria Jurídica Estratégica com análise de viabilidade processual e explicações em linguagem simples",
      "Mediação Extrajudicial de conflitos entre familiares, sócios, vizinhos e parceiros comerciais",
      "Elaboração de Acordos Extrajudiciais com força de título executivo homologável em juízo",
      "Orientação preventiva para empreendedores sobre conformidade trabalhista e contratual",
      "Acompanhamento em reuniões de conciliação e negociações de alto impacto",
    ],
    whatsAppText:
      "Olá, Dr. Alexandre! Gostaria de agendar uma consulta preventiva baseada no 'Direito Explicado'.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category:
    | "Ética & Respeito (ethics)"
    | "Competência (lawyer)"
    | "Inteligente & Perspicaz (inteligente)"
    | "Atencioso & Dedicado"
    | "Cível & Trabalhista";
  highlight: string;
  content: string;
  ownerReply?: string;
  ownerDate?: string;
}

const clientReviews: Review[] = [
  {
    name: "Fabíola Juliani",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 mês atrás",
    category: "Competência (lawyer)",
    highlight: "Excelente profissional muito atencioso, sempre fui bem atendida e minha família também. Ótimo advogado! Parabéns Alexandre pelo seu excelente trabalho!",
    content: "Excelente profissional muito atencioso sempre fui bem atendida e minha família tbm ótimo advogado Parabéns Alexandre pelo seu excelente trabalho",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho. Fico feliz em saber que consegui atender às suas expectativas e oferecer o suporte jurídico necessário. Meu compromisso é sempre atuar com dedicação, ética e responsabilidade para alcançar os melhores resultados. Conte comigo sempre que precisar!",
    ownerDate: "1 mês atrás",
  },
  {
    name: "Nayara",
    badge: "3 avaliações · 5 Estrelas",
    date: "1 mês atrás",
    category: "Competência (lawyer)",
    highlight: "Excelente profissional! Competente, atencioso e muito seguro no que faz. Super recomendo!",
    content: "Excelente profissional! Competente, atencioso e muito seguro no que faz. Super recomendo!",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho. Fico feliz em saber que consegui atender às suas expectativas e oferecer o suporte jurídico necessário. Meu compromisso é sempre atuar com dedicação, ética e responsabilidade para alcançar os melhores resultados. Conte comigo sempre que precisar!",
    ownerDate: "1 mês atrás",
  },
  {
    name: "Rebeka Luiza",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 mês atrás",
    category: "Inteligente & Perspicaz (inteligente)",
    highlight: "Excelente profissional, atendimento humanizado, inteligente, perspicaz, comunica com a linguagem do cliente!",
    content: "Excelente profissional, atendimento humanizado, inteligente, perpiscaz, comunica com a linguagem do cliente",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho. Fico feliz em saber que consegui atender às suas expectativas e oferecer o suporte jurídico necessário. Meu compromisso é sempre atuar com dedicação, ética e responsabilidade para alcançar os melhores resultados. Conte comigo sempre que precisar!",
    ownerDate: "1 mês atrás",
  },
  {
    name: "Angela Queiroz",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 mês atrás",
    category: "Atencioso & Dedicado",
    highlight: "Advogado com experiência e atenção que fazem a diferença. Atendimento com dedicação, agilidade e cordialidade. Recomendo!",
    content: "Advogado com experiência e atenção que fazem a diferença. Atendimento realizado com dedicação, agilidade e cordialidade. Recomendo.",
    ownerReply: "Obrigado pelo carinho e atenção.",
    ownerDate: "5 meses atrás",
  },
  {
    name: "Wesley Fernando",
    badge: "2 avaliações · 1 foto · 5 Estrelas",
    date: "1 mês atrás",
    category: "Inteligente & Perspicaz (inteligente)",
    highlight: "Cara inteligente demais, experiente no que faz!",
    content: "Cara inteligente dms , experiente no que faz .",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho. Fico feliz em saber que consegui atender às suas expectativas e oferecer o suporte jurídico necessário. Meu compromisso é sempre atuar com dedicação, ética e responsabilidade para alcançar os melhores resultados. Conte comigo sempre que precisar!",
    ownerDate: "1 mês atrás",
  },
  {
    name: "criduarte criduarte",
    badge: "3 avaliações · 5 Estrelas",
    date: "1 mês atrás",
    category: "Ética & Respeito (ethics)",
    highlight: "Muito atencioso, ágil e de muita seriedade!",
    content: "Muito atencioso, ágil e de muita seriedade.",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho. Fico feliz em saber que consegui atender às suas expectativas e oferecer o suporte jurídico necessário. Meu compromisso é sempre atuar com dedicação, ética e responsabilidade para alcançar os melhores resultados. Conte comigo sempre que precisar!",
    ownerDate: "1 mês atrás",
  },
  {
    name: "Renata Queiroz",
    badge: "4 avaliações · 5 Estrelas",
    date: "5 meses atrás",
    category: "Ética & Respeito (ethics)",
    highlight: "Grande advogado. Super atencioso, ético e competente!",
    content: "Grande advogado. Super atencioso,ético e competente.",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho. Fico feliz em saber que consegui atender às suas expectativas e oferecer o suporte jurídico necessário. Meu compromisso é sempre atuar com dedicação, ética e responsabilidade para alcançar os melhores resultados. Conte comigo sempre que precisar!",
    ownerDate: "5 meses atrás",
  },
  {
    name: "Joice Lopes",
    badge: "3 avaliações · 5 Estrelas",
    date: "3 anos atrás",
    category: "Competência (lawyer)",
    highlight: "Profissional de excelência. Ótimo atendimento, muito claro nas suas explicações e eficiência nos resultados. Recomendo!",
    content: "Profissional de excelência. Ótimo atendimento, muito claro nas suas explicações e eficiência nos resultados. Recomendo!",
    ownerReply: "Obrigado pelo carinho.",
    ownerDate: "2 anos atrás",
  },
  {
    name: "Marcos Dias",
    badge: "8 avaliações · 5 Estrelas",
    date: "4 anos atrás",
    category: "Competência (lawyer)",
    highlight: "Excelente profissional, super recomendo seu serviço. Esse ama o que faz, parabéns!",
    content: "Excelente profissional, super recomendo seu serviço. Esse ama o que faz, parabéns!!!",
    ownerReply: "Obrigado pelo carinho!",
    ownerDate: "2 anos atrás",
  },
  {
    name: "Marcia Mourão",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 mês atrás",
    category: "Atencioso & Dedicado",
    highlight: "Um profissional que recomendo sempre 👏",
    content: "Um profissional que recomendo sempre👏",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho.",
    ownerDate: "1 mês atrás",
  },
  {
    name: "Marley Stéfanie",
    badge: "2 avaliações · 1 foto · 5 Estrelas",
    date: "5 meses atrás",
    category: "Atencioso & Dedicado",
    highlight: "Ótimo advogado! Super recomendo!",
    content: "Ótimo advogado! Super recomendo!",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho.",
    ownerDate: "5 meses atrás",
  },
  {
    name: "Elaine Almas",
    badge: "7 avaliações · 5 Estrelas",
    date: "1 mês atrás",
    category: "Atencioso & Dedicado",
    highlight: "Muito bom advogado. Bem atencioso!",
    content: "Muito bom advogado. Bem atencioso",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho.",
    ownerDate: "1 mês atrás",
  },
  {
    name: "Magna Regina",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 mês atrás",
    category: "Competência (lawyer)",
    highlight: "Excelente profissional! Super indico!",
    content: "Excelente profissional Super indico",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho.",
    ownerDate: "1 mês atrás",
  },
  {
    name: "Adma Queiroz Xavier",
    badge: "2 avaliações · 1 foto · 5 Estrelas",
    date: "3 anos atrás",
    category: "Ética & Respeito (ethics)",
    highlight: "Excelente profissional, dedicado e ético. Super recomendo!",
    content: "Excelente profissional, dedicado e ético. Super recomendo.",
    ownerReply: "Obrigado pelo retorno positivo.",
    ownerDate: "2 anos atrás",
  },
  {
    name: "Raquel Lobato",
    badge: "3 avaliações · 5 Estrelas",
    date: "1 mês atrás",
    category: "Cível & Trabalhista",
    highlight: "Ótima experiência! Atendimento nota 10!",
    content: "Ótima!",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho.",
    ownerDate: "1 mês atrás",
  },
  {
    name: "Ana Carolina Xavier",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 mês atrás",
    category: "Atencioso & Dedicado",
    highlight: "Ótimo atendimento, dedicação e seriedade com o cliente.",
    content: "Ótimo atendimento.",
    ownerReply: "Olá! Muito obrigado pela sua avaliação e pela confiança depositada em meu trabalho.",
    ownerDate: "1 mês atrás",
  },
  {
    name: "Neliton Junior",
    badge: "1 avaliação · 5 Estrelas",
    date: "1 mês atrás",
    category: "Cível & Trabalhista",
    highlight: "Excelente! Atuação impecável e de confiança.",
    content: "Excelente",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Fui demitido ou não recebi meus direitos trabalhistas. Quanto tempo tenho para agir?",
    answer:
      "A Constituição Federal estabelece o prazo prescricional de até 2 (dois) anos após o término do vínculo de trabalho para ingressar com a Reclamatória Trabalhista, podendo cobrar as verbas dos últimos 5 (cinco) anos trabalhados. Contudo, quanto antes você consultar nosso escritório e recolher os documentos (contracheques, extrato analítico do FGTS, mensagens e testemunhas), mais rápida e robusta será a instrução processual para reaver aviso prévio, horas extras, adicionais e multas.",
  },
  {
    question: "O que é Rescisão Indireta e quando o trabalhador pode 'demitir o patrão'?",
    answer:
      "A rescisão indireta (artigo 483 da CLT) ocorre quando a empresa comete faltas graves contra o empregado — tais como atraso reiterado de salários, não recolhimento de FGTS, exposição a perigos graves sem equipamentos de segurança, exigência de tarefas alheias ao contrato ou assédio moral. Nessa modalidade, o trabalhador pode rescindir o contrato recebendo todas as indenizações como se tivesse sido demitido sem justa causa (aviso prévio, saque do FGTS com 40% e seguro-desemprego).",
  },
  {
    question: "Tive meu nome negativado indevidamente no SPC/Serasa ou sofri fraude bancária. O que fazer?",
    answer:
      "A inscrição indevida nos órgãos de proteção ao crédito (quando você nunca contratou o serviço ou quando a dívida já foi paga) gera dano moral presumido ('in re ipsa'). Entramos com Ação Judicial com pedido de liminar para determinar a exclusão do seu CPF dos cadastros restritivos no prazo de poucas horas ou dias, sob pena de multa diária, cumulado com indenização pelos abalos morais e eventuais prejuízos causados.",
  },
  {
    question: "Como funciona o atendimento com o Dr. Alexandre Abreu Lúcio em Pitangui e para outras cidades?",
    answer:
      "Oferecemos máxima conveniência e sigilo. Para clientes de Pitangui, Conceição do Pará, Leandro Ferreira, Nova Serrana, Pará de Minas e região, realizamos atendimento presencial em nossa sede na Praça Dr. Isauro Epifânio, 141 (bairro São Francisco). Para clientes de outras localidades ou que preferem praticidade, nosso atendimento é 100% digital via WhatsApp oficial, com envio de fotos de documentos e assinatura eletrônica pelo celular, com a mesma segurança jurídica e acompanhamento passo a passo.",
  },
  {
    question: "Como funciona o divórcio e o inventário em cartório? Realmente é mais rápido do que na Justiça?",
    answer:
      "Sim, é incomparavelmente mais rápido! Havendo acordo amigável entre os herdeiros ou entre o casal e preenchidos os requisitos legais, todo o procedimento é lavrado por escritura pública em Cartório de Notas na presença do advogado. Um divórcio ou inventário extrajudicial pode ser concluído em poucas semanas, com menor custo de taxas e sem a necessidade de esperar anos em disputas judiciais desgastantes.",
  },
  {
    question: "O que significa na prática o compromisso com o 'Direito Explicado'?",
    answer:
      "O conceito de 'Direito Explicado', amplamente difundido pelo Dr. Alexandre Abreu Lúcio (Agenor Lucena) em suas publicações e atuação profissional, é o compromisso ético de traduzir termos jurídicos complexos para a linguagem do cliente. Você nunca ficará sem entender o que o juiz decidiu, quais são os riscos do processo ou como o acordo será pago. Você participa ativamente das decisões fundamentais do seu caso.",
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
    "Ética & Respeito (ethics)",
    "Competência (lawyer)",
    "Inteligente & Perspicaz (inteligente)",
    "Atencioso & Dedicado",
    "Cível & Trabalhista",
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
                AGENOR LUCENA ADVOCACIA · Cível & Trabalhista · OAB/MG 217.363 ⚖️
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
                <span className="font-bold text-white">5,0 ★</span> (39 avaliações no Google · Pitangui - MG)
              </a>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dr. Alexandre Lúcio! Gostaria de uma consulta sobre o meu caso.")}
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
        {/* STICKY HEADER / NAVBAR (OFFICIAL AGENOR LUCENA LOGO)     */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-slate-200/90 bg-white/95 py-2.5 shadow-md backdrop-blur-md"
              : "border-b border-slate-200/60 bg-white/90 py-3.5 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Agenor Lucena Logo */}
            <a
              href="#"
              className="group flex shrink-0 items-center transition-opacity hover:opacity-90"
              aria-label="Agenor Lucena Advocacia - Início"
            >
              <Image
                src={LOGO_SRC}
                alt="Agenor Lucena Advocacia — OAB/MG 217.363"
                width={480}
                height={240}
                className="h-[54px] sm:h-[64px] md:h-[70px] w-auto object-contain"
                priority
              />
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden items-center gap-5 xl:gap-7 xl:flex">
              <a href="#servicos" className="nav-link text-[11px] whitespace-nowrap">
                Áreas de Atuação
              </a>
              <a href="#sobre" className="nav-link text-[11px] whitespace-nowrap">
                Sobre Dr. Alexandre Lúcio
              </a>
              <a href="#diferenciais" className="nav-link text-[11px] whitespace-nowrap">
                Direito Explicado
              </a>
              <a href="#depoimentos" className="nav-link text-[11px] whitespace-nowrap">
                Avaliações Google (5,0 ★)
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
                href={getWhatsAppUrl("Olá, Dr. Alexandre Abreu Lúcio! Gostaria de agendar uma consulta sobre o meu caso.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#080c14]" />
                <span className="hidden 2xl:inline">Converse com Dr. Alexandre</span>
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
                      alt="Agenor Lucena Advocacia"
                      width={360}
                      height={180}
                      className="h-[52px] w-auto object-contain"
                      priority
                    />
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e7420]"
                  >
                    <span>Áreas de Atuação (Cível & Trabalhista)</span>
                    <ArrowRight size={14} className="text-[#c59b27]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e7420]"
                  >
                    <span>Sobre Dr. Alexandre Abreu Lúcio</span>
                    <ArrowRight size={14} className="text-[#c59b27]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e7420]"
                  >
                    <span>Pilares & Direito Explicado</span>
                    <ArrowRight size={14} className="text-[#c59b27]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e7420]"
                  >
                    <span>Avaliações Google (5,0 ★ · 39 reviews)</span>
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
                    <span>Sede & Contato (Pitangui - MG)</span>
                    <ArrowRight size={14} className="text-[#c59b27]" />
                  </a>

                  <div className="pt-4 border-t border-slate-100">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Alexandre Abreu Lúcio! Gostaria de agendar uma consulta jurídica.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Fale com o Dr. Alexandre no WhatsApp</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM FOTO DO DR. ALEXANDRE LÚCIO  */}
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
                    AGENOR LUCENA ADVOCACIA · PITANGUI - MG · OAB/MG 217.363
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#0a0e17] sm:text-5xl lg:text-[3.25rem]"
                >
                  Defesa Estratégica e Resolutiva nas Áreas{" "}
                  <span className="bg-gradient-to-r from-[#785813] via-[#c59b27] to-[#9e7420] bg-clip-text text-transparent">
                    Cível e Trabalhista.
                  </span>
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:max-w-xl"
                >
                  Advocacia moderna, ética e combativa liderada pelo{" "}
                  <strong className="font-semibold text-slate-900">Dr. Alexandre Abreu Lúcio (Agenor Lucena)</strong>,{" "}
                  <span className="text-slate-800 font-medium">Presidente da Comissão da OAB Jovem de Pitangui</span>. Atendimento humanizado com o conceito de{" "}
                  <strong className="font-semibold text-slate-900">Direito Explicado</strong> — clareza, combatividade e sem juridiquês para proteger o seu trabalho, sua família e seu patrimônio.
                </motion.p>

                {/* Quick Highlights Pills */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex flex-wrap gap-2.5 sm:gap-3"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c59b27]" />
                    Rescisão Indireta & Horas Extras
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c59b27]" />
                    Contratos & Cobranças Cíveis
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c59b27]" />
                    Danos Morais & Negativação Indevida
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c59b27]" />
                    Divórcio & Inventário em Cartório
                  </span>
                </motion.div>

                {/* Action CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Alexandre Abreu Lúcio! Gostaria de agendar uma consulta sobre meu caso Cível ou Trabalhista.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Fale com o Dr. Alexandre no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#servicos"
                    variant="champagne"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conheça Nossas Atuações</span>
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
                      Avaliação máxima com <strong className="font-semibold text-slate-900">39 avaliações de clientes verificados</strong> em Pitangui - MG e região.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Photo of Dr. Alexandre Abreu Lúcio */}
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
                        alt="Dr. Alexandre Abreu Lúcio — Agenor Lucena Advocacia Pitangui MG"
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080c14]/85 via-transparent to-transparent" />

                      {/* Floating Badge on Photo: Dr. Alexandre Abreu Lúcio */}
                      <div className="absolute right-3.5 bottom-3.5 left-3.5 rounded-xl border border-white/20 bg-[#0c121e]/92 p-3.5 text-white shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="font-serif text-sm font-bold tracking-wide text-white">
                              Dr. Alexandre Abreu Lúcio
                            </p>
                            <p className="text-[11px] font-medium text-[#f5de88]">
                              OAB/MG 217.363 · Pres. OAB Jovem Pitangui
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <a
                              href={INSTAGRAM_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                              aria-label="Instagram do Dr. Alexandre Abreu Lúcio"
                              title="@agenor_lucena"
                            >
                              <InstagramIcon size={16} />
                            </a>
                            <a
                              href={GOOGLE_SEARCH_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex size-8 items-center justify-center rounded-lg bg-[#c59b27]/20 text-[#f5de88] transition-colors hover:bg-[#c59b27]/30"
                              aria-label="Google Meu Negócio"
                              title="5,0 no Google"
                            >
                              <GoogleIcon size={15} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Card Badge (Top Right) */}
                  <div className="absolute -top-4 -right-4 hidden rounded-xl border border-slate-200/90 bg-white p-3 shadow-lg sm:flex items-center gap-2.5">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#fdf8eb] text-[#9e7420]">
                      <Landmark size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Praça Dr. Isauro Epifânio</p>
                      <p className="text-[10px] text-slate-500">Pitangui · MG</p>
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
                  39 Avaliações no Google
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Nota máxima de satisfação em Pitangui - MG
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col border-l-2 border-[#c59b27] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Trabalhista
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Defesa de Direitos
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Rescisões, horas extras e acordos na Justiça
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col border-l-2 border-[#c59b27] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Cível
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Contratos & Indenizações
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Danos morais, consumidor, família e cartório
                </p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col border-l-2 border-[#c59b27] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  OAB Jovem
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Liderança em Pitangui
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Presidente da Comissão · OAB/MG 217.363
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
                description="Soluções jurídicas combativas focadas nas áreas Cível e Trabalhista, com clareza, transparência e sem burocracia inútil. Clique em qualquer área para ver os detalhes e procedimentos inclusos."
              >
                Defesa Técnica e Resolutiva Para Você, Seu Trabalho e Sua Empresa
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Alexandre Abreu Lúcio! Gostaria de consultar sobre a viabilidade do meu caso.")}
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
                    Sede em Pitangui - MG ou Atendimento Online Nacional
                  </p>
                  <GlowingButton
                    href={getWhatsAppUrl(selectedPractice.whatsAppText)}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Consultar Dr. Alexandre</span>
                  </GlowingButton>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE O ESCRITÓRIO & DR. ALEXANDRE ABREU LÚCIO  */}
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
                        src={FOTO_PORTRAIT_SRC}
                        alt="Dr. Alexandre Abreu Lúcio — Agenor Lucena Advocacia"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                      />
                    </div>
                  </div>

                  {/* Decorative Badge */}
                  <div className="absolute -bottom-5 -right-5 hidden sm:block rounded-xl border border-[#c59b27]/50 bg-[#0c121e] p-4 text-white shadow-xl max-w-xs">
                    <p className="text-[11px] font-bold text-[#f5de88] uppercase tracking-wider">
                      Agenor Lucena Advocacia
                    </p>
                    <p className="mt-1 text-xs text-slate-300 leading-snug">
                      &quot;Cível e Trabalhista com rigor técnico, atendimento humanizado e Direito Explicado.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre o Profissional & Liderança"
                  description="Com atuação ética, inteligente e combativa, o Dr. Alexandre Abreu Lúcio consolidou-se como referência na advocacia Cível e Trabalhista em Pitangui e na região centro-oeste mineira."
                >
                  Dr. Alexandre Abreu Lúcio: Rigor Técnico, Clareza e Proximidade
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  <p>
                    O <strong className="font-semibold text-slate-900">Dr. Alexandre Abreu Lúcio (Agenor Lucena) · OAB/MG 217.363</strong> atua com a convicção de que a verdadeira advocacia de excelência une preparação jurídica de ponta, combatividade nos tribunais e comunicação clara com o cliente.
                  </p>
                  <p>
                    Como <strong className="font-semibold text-slate-900">Presidente da Comissão da OAB Jovem da 47ª Subseção de Pitangui / MG</strong>, exerce papel ativo no fortalecimento da classe jurídica e na defesa incansável das prerrogativas profissionais, trazendo essa mesma energia e seriedade para cada causa sob seus cuidados.
                  </p>
                  <p>
                    Reconhecido pelos próprios clientes pela <strong className="font-semibold text-slate-900">inteligência, perspicácia e capacidade de se comunicar na linguagem de quem precisa de suporte</strong>, desenvolveu o projeto <strong className="font-semibold text-slate-900">&quot;📚 Direito Explicado&quot;</strong>, desmistificando o juridiquês e assegurando que cada cliente compreenda exatamente seus direitos e participe conscientemente das estratégias do processo.
                  </p>
                  <p>
                    Com sede própria localizada na <strong className="font-semibold text-slate-900">Praça Dr. Isauro Epifânio, 141 (Bairro São Francisco, Pitangui - MG)</strong> e infraestrutura digital para atendimento online em todo o Brasil, mantém a nota unânime de <strong className="font-semibold text-slate-900">5,0 estrelas no Google (39 avaliações)</strong>.
                  </p>
                </div>

                {/* Key Points */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 shadow-2xs">
                    <Briefcase size={18} className="text-[#c59b27] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Cível & Trabalhista</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Defesa ampla do trabalhador, empresas, contratos e indenizações.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 shadow-2xs">
                    <BookOpen size={18} className="text-[#c59b27] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">📚 Direito Explicado</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Explicação transparente e linguagem descomplicada em cada etapa.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-3.5 items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Alexandre Abreu Lúcio! Gostaria de conversar diretamente sobre a minha demanda.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com o Dr. Alexandre no WhatsApp</span>
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
        {/* DOBRA 5: OS 4 PILARES DA ADVOCACIA                       */}
        {/* ======================================================== */}
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#0c121e] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading
              eyebrow="Nossos Diferenciais"
              description="Os pilares que sustentam a reputação ilibada, a satisfação máxima e os resultados expressivos de Agenor Lucena Advocacia."
              dark
            >
              Os 4 Pilares da Agenor Lucena Advocacia
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-xl border border-[#172136] bg-[#121929]/80 p-6 transition-all duration-300 hover:border-[#c59b27]/50 hover:bg-[#121929]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#172136] text-[#f5de88]">
                  <BookOpen size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  1. Direito Explicado Sem Juridiquês
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Comunicação clara, acessível e direta. Você entende cada movimento do seu processo sem palavras difíceis ou termos ininteligíveis.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-xl border border-[#172136] bg-[#121929]/80 p-6 transition-all duration-300 hover:border-[#c59b27]/50 hover:bg-[#121929]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#172136] text-[#f5de88]">
                  <Gavel size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  2. Combatividade & Agilidade
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Postura firme perante as Varas do Trabalho e Varas Cíveis. Estratégias processuais assertivas para alcançar o melhor resultado no menor tempo.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-xl border border-[#172136] bg-[#121929]/80 p-6 transition-all duration-300 hover:border-[#c59b27]/50 hover:bg-[#121929]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#172136] text-[#f5de88]">
                  <Shield size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  3. Ética & Atendimento Humanizado
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Respeito absoluto à sua história, confidencialidade total e atendimento acolhedor reconhecido por dezenas de avaliações espontâneas.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-xl border border-[#172136] bg-[#121929]/80 p-6 transition-all duration-300 hover:border-[#c59b27]/50 hover:bg-[#121929]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#172136] text-[#f5de88]">
                  <Landmark size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  4. Sede em Pitangui & Online
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Escritório presencial na Praça Dr. Isauro Epifânio, 141 (Bairro São Francisco) e estrutura digital para atender clientes de qualquer comarca.
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
                description="Confira avaliações 100% autênticas e espontâneas de clientes atendidos pelo Escritório de Advocacia - Dr. Alexandre Abreu Lúcio no Google Meu Negócio."
              >
                Avaliações com Nota Máxima de 5,0 ★ no Google em Pitangui · MG
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

            {/* Google Badges Extracted directly from Google Reviews Keywords */}
            <div className="flex flex-wrap items-center gap-2 pt-2 pb-8 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 mr-1">
                Destaques Google:
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#fdf8eb] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                ⚖️ Ética & Respeito (ethics)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#fdf8eb] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                👨‍💼 Competência (lawyer)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#fdf8eb] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                💡 Inteligente & Perspicaz (inteligente)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#fdf8eb] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                🗣️ Comunicação Humanizada
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/30 bg-[#fdf8eb] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                ⭐ 100% Avaliações 5 Estrelas (39 reviews)
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
                          {review.category.split("(")[0].trim()}
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
                            <span>Dr. Alexandre Abreu Lúcio (proprietário)</span>
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
                <span>Ver Todas as 39 Avaliações no Google Maps</span>
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
              description="Um processo transparente, ágil e descomplicado desde o primeiro contato pelo WhatsApp até a solução definitiva da sua causa."
            >
              Seu Atendimento Jurídico em 4 Passos Simples
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c59b27]/40">
                  01
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Contato & Sigilo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Você envia uma mensagem pelo nosso WhatsApp oficial relatando sua situação trabalhista ou cível com total confidencialidade.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c59b27]/40">
                  02
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Direito Explicado
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  O Dr. Alexandre analisa documentos e explica seus direitos em linguagem clara, detalhando chances, riscos e opções de acordo.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c59b27]/40">
                  03
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Ação Célere & Protocolo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Assinatura prática pelo celular ou presencialmente em Pitangui, com protocolo imediato na Justiça ou negociação extrajudicial.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c59b27]/40">
                  04
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Acompanhamento Transparente
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Você é avisado a cada movimentação e decisão, acompanhando o recebimento das verbas, alvarás ou homologação final do acordo.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Alexandre Abreu Lúcio! Gostaria de dar o primeiro passo e tirar dúvidas sobre meu caso.")}
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
                description="Respostas diretas e esclarecedoras para as principais questões sobre causas trabalhistas, indenizações, contratos e direito de família."
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
                Tem uma dúvida específica sobre a sua situação?
              </p>
              <p className="mt-1 text-xs text-slate-600">
                O Dr. Alexandre Abreu Lúcio está disponível para responder diretamente no WhatsApp.
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Alexandre! Gostaria de tirar uma dúvida pontual sobre o meu caso.")}
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
                  description="Venha nos visitar em nossa sede em Pitangui - MG ou converse agora mesmo pelo canal oficial de atendimento online."
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
                        {ADDRESS_PITANGUI}
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
                        href={getWhatsAppUrl("Olá, Dr. Alexandre Abreu Lúcio! Gostaria de agendar uma consulta.")}
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
                        Segunda a Sexta · 08:30 às 18:30 (Aberto · Fecha 18:30)
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Atendimento presencial com agendamento prévio para seu conforto e total discrição.
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
                          className="inline-flex items-center gap-1.5 font-semibold text-[#f5de88] hover:text-white"
                        >
                          <span>{INSTAGRAM_HANDLE}</span>
                          <span className="text-[11px] text-slate-400">({INSTAGRAM_STATS} · Cível e Trabalhista)</span>
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
                        Escritório de Advocacia - Dr. Alexandre Abreu Lúcio
                      </h4>
                      <p className="text-xs text-[#f5de88]">
                        Praça Dr. Isauro Epifânio, 141 · Pitangui - MG
                      </p>
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-[#0c121e] px-3 py-1 text-xs font-bold text-[#f59e0b]">
                      <Star size={13} className="fill-[#f59e0b]" />
                      <span>5,0 ★</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                    Sede acolhedora no Bairro São Francisco em Pitangui - MG, com fácil acesso, estacionamento e sala de reuniões privativa para analisar sua demanda cível ou trabalhista com o rigor ético que seus direitos exigem.
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
                      href={getWhatsAppUrl("Olá, Dr. Alexandre! Gostaria de agendar um horário presencial no escritório em Pitangui.")}
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
                  alt="Agenor Lucena Advocacia"
                  width={340}
                  height={170}
                  className="h-[56px] w-auto object-contain opacity-95"
                />
                <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                  Advocacia especializada em Direito Cível e Trabalhista. Liderado pelo Dr. Alexandre Abreu Lúcio · OAB/MG 217.363, Presidente da Comissão da OAB Jovem de Pitangui - MG. Sede na Praça Dr. Isauro Epifânio, 141 e atendimento online para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label="Instagram de Agenor Lucena Advocacia"
                  >
                    <InstagramIcon size={15} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dr. Alexandre Abreu Lúcio!")}
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
                      Sobre Dr. Alexandre Lúcio
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-white transition-colors">
                      Direito Explicado
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
                      Sede em Pitangui - MG
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
                      Direito do Trabalho & Rescisão
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Horas Extras & Verbas Retidas
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Danos Morais & Negativação Indevida
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Elaboração e Revisão de Contratos
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Direito do Consumidor & Bancário
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Divórcio e Inventário em Cartório
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
                    <span>Praça Dr. Isauro Epifânio, 141 - Bairro São Francisco, Pitangui - MG</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                    <span>{PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={14} className="text-[#c59b27] shrink-0" />
                    <span>Seg. a Sex. · 08:30 às 18:30</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={14} className="text-[#f59e0b] shrink-0 fill-[#f59e0b]" />
                    <span>5,0 ★ no Google (39 avaliações)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* OAB Compliance Disclaimer */}
            <div className="pt-8 text-[11px] leading-relaxed text-slate-500">
              <p>
                <strong>Aviso Legal & Ética Profissional da Advocacia:</strong> Este website tem caráter exclusivamente informativo e institucional, em estrita observância ao Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB) e ao Provimento nº 205/2021 do Conselho Federal da OAB. As informações aqui prestadas não configuram promessa de resultado nem substituem a consulta jurídica individualizada com profissional devidamente inscrito na OAB. Dr. Alexandre Abreu Lúcio · OAB/MG 217.363.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600">
                <p>© {new Date().getFullYear()} Agenor Lucena Advocacia. Todos os direitos reservados. Dr. Alexandre Abreu Lúcio · OAB/MG 217.363.</p>
                <p>Pitangui - MG · Praça Dr. Isauro Epifânio, 141 · Atendimento Nacional</p>
              </div>
            </div>
          </div>
        </footer>

        {/* ======================================================== */}
        {/* BOTÃO FLUTUANTE DO WHATSAPP (CONVERSÃO ÁGIL E SUPORTE)   */}
        {/* ======================================================== */}
        <div className="fixed right-5 bottom-5 z-40 flex items-center gap-2.5">
          <a
            href={getWhatsAppUrl("Olá, Dr. Alexandre Abreu Lúcio! Gostaria de tirar uma dúvida sobre o meu caso.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/60 cursor-pointer"
            aria-label="Converse pelo WhatsApp com o Dr. Alexandre Abreu Lúcio"
          >
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-30" />
            <WhatsAppIcon size={30} />
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
