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
  Home as HomeIcon,
  Building2,
  ScrollText,
  Landmark,
  FileCheck,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5533998277799";
const PHONE_DISPLAY = "(33) 99827-7799";
const EMAIL_CONTACT = "contato@fabriciafragoso.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/fabriciafragoso/";
const INSTAGRAM_HANDLE = "@fabriciafragoso";

const ADDRESS_TEXT =
  "Galeria Ebal Franco - R. Morais de Carvalho, 653 - Sl 03 - Centro, Resplendor - MG, 35230-000";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Fabr%C3%ADcia+Fragoso+Advocacia%0AResplendor+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/logo-emblem.png";
const FOTO_HERO_SRC = "/hero.jpg";
const FOTO_ABOUT_SRC = "/about.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Fabrícia Fragoso! Gostaria de uma orientação jurídica sobre regularização de imóvel / meu caso.";
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
    id: "regularizacao-de-imoveis",
    title: "Regularização de Imóveis & Escrituras",
    category: "Cartório de Imóveis · Prefeitura · Receita Federal (CND) · Habite-se",
    icon: Building2,
    tag: "Regularização Fundiária · Matrícula Definitiva · Sem Burocracia",
    summary:
      "Transforme contratos de gaveta ou posses em escritura pública definitiva registrada. Atuação completa e ágil perante Cartórios, Prefeituras e Receita Federal para valorizar e proteger seu patrimônio.",
    details:
      "Um imóvel sem registro ou com pendências documentais perde até 40% de seu valor de mercado, não pode ser financiado nem transmitido com segurança jurídica a herdeiros. A equipe de Fabrícia Fragoso Advocacia atua com metodologia técnica avançada para desembaraçar documentações pendentes, unificar ou desmembrar matrículas, emitir certidões negativas de débitos (CND de obra) e habite-se, garantindo a matrícula definitiva em seu nome.",
    topics: [
      "Regularização de imóveis urbanos e rurais sem escritura ou com pendências documentais históricas",
      "Averbação de construções residenciais e comerciais junto à Prefeitura e Cartório de Registro de Imóveis",
      "Emissão de CND (Certidão Negativa de Débitos) de obra junto à Receita Federal (SERO / DCTFWeb)",
      "Desdobro, desmembramento e unificação de lotes e áreas territoriais",
      "Regularização fundiária urbana (REURB) de interesse social ou específico",
      "Retificação amigável e judicial de área, confrontações e averbações de medidas",
    ],
    whatsAppText:
      "Olá, Dra. Fabrícia! Gostaria de consultar sobre a regularização do meu imóvel e obtenção de escritura definitiva.",
  },
  {
    id: "usucapiao-extrajudicial-judicial",
    title: "Usucapião em Cartório & Judicial",
    category: "Posse Mansa e Pacífica · Propriedade Plena · Agilidade em Cartório",
    icon: HomeIcon,
    tag: "Usucapião Extrajudicial · Urbano & Rural · Registro Definitivo",
    summary:
      "Conquiste a propriedade definitiva do seu imóvel através da usucapião. Procedimento rápido realizado diretamente no Cartório de Registro de Imóveis ou pela via judicial com máxima solidez técnica.",
    details:
      "Quem detém a posse contínua e sem oposição de um imóvel tem o direito legal de convertê-la em propriedade formal e definitiva por meio da usucapião. Realizamos o levantamento minucioso do tempo de posse, documentação histórica, confrontantes e notificações formais, priorizando a via extrajudicial em Cartório de Registro de Imóveis para máxima rapidez sem desgaste judicial.",
    topics: [
      "Usucapião Extrajudicial direto em Cartório de Registro de Imóveis (muito mais rápido e sem processo demorado)",
      "Usucapião Urbano e Rural (extraordinário, ordinário, constitucional e familiar)",
      "Mapeamento e auditoria da cadeia de posse, recibos históricos e provas documentais",
      "Notificação formal e coleta de anuência de confrontantes e antigos proprietários",
      "Acompanhamento técnico integrado com agrimensores e engenheiros credenciados",
      "Abertura de nova matrícula individualizada e registro de propriedade no Cartório",
    ],
    whatsAppText:
      "Olá, Dra. Fabrícia! Gostaria de avaliar a viabilidade de Usucapião para o meu imóvel.",
  },
  {
    id: "contratos-due-diligence",
    title: "Contratos Imobiliários & Compra Segura (Due Diligence)",
    category: "Auditoria de Riscos · Compra e Venda · Permuta · Locação Comercial",
    icon: FileText,
    tag: "Due Diligence Imobiliária · Blindagem Contratual · Prevenção de Fraudes",
    summary:
      "Segurança patrimonial prévia para compra, venda e locação de imóveis. Auditoria preventiva rigorosa para blindar você contra fraudes, dívidas ocultas e penhoras sobre o imóvel.",
    details:
      "Comprar ou vender um imóvel sem auditoria jurídica prévia é assumir o risco de perder todo o dinheiro investido. Analisamos detalhadamente a vida pregressa dos vendedores, certidões cíveis, fiscais, trabalhistas e de falência em âmbito estadual e federal, além da cadeia dominial da matrícula, elaborando instrumentos contratuais sólidos com cláusulas de blindagem patrimonial.",
    topics: [
      "Due Diligence Imobiliária completa: investigação de certidões judiciais, execuções e risco de fraude à execução",
      "Elaboração e revisão minuciosa de contratos de promessa, compra e venda de imóveis urbanos e rurais",
      "Contratos de locação comercial e residencial com cláusulas de garantia robustas",
      "Instrumentos de permuta imobiliária física e financeira, dação em pagamento e cessão de direitos",
      "Notificações extrajudiciais estratégicas para cumprimento de obrigações e constituição em mora",
      "Blindagem preventiva contra perdas financeiras de sinal/arras e cláusulas abusivas",
    ],
    whatsAppText:
      "Olá, Dra. Fabrícia! Gostaria de uma consultoria jurídica para compra e venda segura de imóvel / análise contratual.",
  },
  {
    id: "adjudicacao-compulsoria-desdobro",
    title: "Adjudicação Compulsória & Desdobro de Lotes",
    category: "Vendedor Ausente ou Falecido · Escritura Forçada · Divisão de Matrícula",
    icon: ScrollText,
    tag: "Adjudicação em Cartório (Lei 14.382) · Desdobro de Terrenos · Escritura",
    summary:
      "Comprou o imóvel, quitou o valor e o vendedor sumiu, faleceu ou não outorga a escritura? Conquistamos sua escritura forçada direto em Cartório ou na Justiça, além do desdobro regular de terrenos.",
    details:
      "A adjudicação compulsória extrajudicial permite obter a escritura definitiva diretamente no Cartório de Registro de Imóveis, sem a necessidade de um longo processo judicial, caso o vendedor tenha falecido, desaparecido ou se recuse injustificadamente a assinar a escritura. Atuamos com agilidade para titularizar seu bem de forma definitiva.",
    topics: [
      "Adjudicação Compulsória Extrajudicial em Cartório de Registro de Imóveis (Lei 14.382)",
      "Ação judicial de adjudicação compulsória contra vendedores em paradeiro ignorado ou espólios",
      "Regularização de imóveis adquiridos de loteadoras ou empresas já extintas/baixadas",
      "Desdobro e individualização de matrícula para fracionamento de terrenos e venda de lotes",
      "Demarcação e divisão de terras particulares e extinção amigável de condomínio",
      "Cancelamento de hipotecas antigas, cauções e gravames indevidos na matrícula",
    ],
    whatsAppText:
      "Olá, Dra. Fabrícia! Gostaria de consultar sobre Adjudicação Compulsória / Vendedor que não passa a escritura.",
  },
  {
    id: "inventario-partilha-imoveis",
    title: "Inventário & Bens Imóveis de Família",
    category: "Inventário em Cartório · Imóveis sem Escritura · Partilha Justa · Economia de ITCMD",
    icon: Landmark,
    tag: "Inventário Extrajudicial em Cartório · Planejamento Sucessório · Celeridade",
    summary:
      "Desembaraço e regularização de imóveis herdados em inventários extrajudiciais ou judiciais. Soluções céleres para partilha de patrimônio com planejamento tributário e segurança aos herdeiros.",
    details:
      "Inventários familiares frequentemente ficam travados por pendências na documentação dos imóveis herdados ou falta de consenso entre herdeiros. O escritório conduz inventários em cartório de notas com extrema rapidez, solucionando as pendências do acervo imobiliário e viabilizando a transferência legal dos bens com planejamento tributário para redução de custos.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas: celeridade e conclusão em poucas semanas quando há consenso",
      "Regularização prévia de imóveis rurais e urbanos deixados de herança sem escritura registrada",
      "Planejamento sucessório patrimonial e doações em vida com reserva de usufruto",
      "Ações de inventário judicial para espólios complexos ou que demandem alvarás judiciais",
      "Extinção amigável de condomínio entre coerdeiros e alienação judicial de quinhões",
      "Assessoria para cálculo correto e redução lícita do imposto sobre herança (ITCMD)",
    ],
    whatsAppText:
      "Olá, Dra. Fabrícia! Gostaria de orientação jurídica sobre inventário e partilha de bens imóveis da família.",
  },
  {
    id: "acoes-possessorias-despejo",
    title: "Ações Possessórias, Reintegração de Posse & Despejo",
    category: "Reintegração de Posse · Manutenção · Despejo Rápido · Defesa da Propriedade",
    icon: Shield,
    tag: "Liminar Urgente · Defesa da Posse · Despejo por Inadimplência",
    summary:
      "Defesa imediata da posse contra invasões, turbações e litígios de vizinhança. Ações de despejo ágeis para locadores recuperarem a posse do imóvel e aluguéis atrasados.",
    details:
      "A posse e a propriedade exigem defesa enérgica e imediata dentro da lei. Ingressamos com pedidos liminares urgentes de reintegração ou manutenção da posse para cessar esbulhos e invasões em áreas urbanas ou rurais, bem como ações de despejo com pedido liminar para retomada rápida do imóvel alugado e cobrança integral dos encargos.",
    topics: [
      "Ação de Reintegração de Posse com pedido de medida liminar urgente",
      "Ação de Manutenção de Posse e Interdito Proibitório contra ameaças de invasão ou esbulho",
      "Ação de Despejo por falta de pagamento com pedido de desocupação liminar rápida",
      "Execução e cobrança de aluguéis em atraso, multas, IPTU e reparação de danos ao imóvel",
      "Ações de nunciação de obra nova e resolução de conflitos de limites territoriais e vizinhança",
      "Ação reivindicatória para o proprietário reaver a posse de quem injustamente a detenha",
    ],
    whatsAppText:
      "Olá, Dra. Fabrícia! Preciso de orientação jurídica urgente sobre defesa da posse / reintegração / despejo.",
  },
  {
    id: "indenizacoes-consumidor-imobiliario",
    title: "Indenizações Imobiliárias & Defesa do Adquirente",
    category: "Atraso de Obras · Distrato Imobiliário · Defeitos de Construção · Danos Morais",
    icon: Scale,
    tag: "Distrato Imobiliário · Atraso na Entrega · Vícios de Construção",
    summary:
      "Atuação combativa na defesa de compradores contra construtoras, incorporadoras e loteadoras por atraso de obras, vícios de construção, cobranças abusivas e rescisão contratual com devolução justa.",
    details:
      "Compradores de imóveis na planta ou em loteamentos frequentemente enfrentam atrasos injustificados na entrega, cobranças indevidas de comissão ou evolução de obra e vícios construtivos. Atuamos com base no Código de Defesa do Consumidor e na Lei do Distrato para rescindir contratos abusivos com devolução dos valores pagos e buscar justa indenização.",
    topics: [
      "Ações contra atraso abusivo na entrega de imóveis na planta, condomínios e loteamentos",
      "Rescisão contratual (distrato imobiliário) com devolução justa dos valores pagos corrigidos",
      "Cobrança de indenização por lucros cessantes (aluguéis não auferidos durante o atraso)",
      "Ações reparatórias por vícios de construção, infiltrações, trincas e defeitos estruturais",
      "Restituição de taxa de evolução de obra indevida e comissões de corretagem abusivas",
      "Responsabilização de incorporadoras por descumprimento de memorial descritivo",
    ],
    whatsAppText:
      "Olá, Dra. Fabrícia! Gostaria de consultar sobre problemas com loteamento / construtora / distrato imobiliário.",
  },
  {
    id: "consultoria-estrategica-imobiliaria",
    title: "Consultoria Estratégica & Mediação de Conflitos",
    category: "Prevenção de Litígios · Acordos Extrajudiciais · Notificações · Pareceres",
    icon: HeartHandshake,
    tag: "Solução Extrajudicial · Eficácia Executiva · Atuação Preventiva · Discrição",
    summary:
      "Orientação jurídica preventiva de alto nível para solucionar impasses imobiliários, celebrar acordos seguros e evitar litígios judiciais longos e custosos.",
    details:
      "A melhor vitória patrimonial é resolver o conflito antes que ele se transforme em um processo judicial desgastante de anos. Conduzimos mediações técnicas entre herdeiros, vizinhos, sócios ou contratantes, elaborando termos de acordo com plena eficácia executiva e emitindo notificações extrajudiciais estratégicas perante cartórios.",
    topics: [
      "Mediação e negociação extrajudicial para celebração de acordos imobiliários seguros",
      "Elaboração e resposta técnica a notificações extrajudiciais perante Cartório de Títulos e Documentos",
      "Auditoria preventiva de riscos documentais e contratuais para investidores e famílias",
      "Pareceres jurídicos para tomada de decisões patrimoniais de grande porte",
      "Assessoria jurídica preventiva para transações rurais, glebas e loteamentos",
      "Atendimento humanizado, direto e descomplicado, com total clareza em cada etapa",
    ],
    whatsAppText:
      "Olá, Dra. Fabrícia! Gostaria de solicitar uma consultoria jurídica estratégica preventiva para o meu caso.",
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
    name: "André Vinicius Keys",
    badge: "Local Guide · 26 avaliações · 1 foto · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Profissional extremamente competente, atenciosa e comprometida com cada etapa do processo!",
    content:
      "Tive uma excelente experiência com a Dra. Fabrícia Fragoso. Profissional extremamente competente, atenciosa e comprometida com cada etapa do processo. É segura e resolutiva, sempre trazendo clareza e confiança em suas orientações. Recomendo fortemente seus serviços a todos que buscam uma advocacia especializada, ética e eficiente. Gratidão pelo cuidado e profissionalismo!",
  },
  {
    name: "Maria Eduarda Vieira de Souza Batista",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Ótimo atendimento, super atenciosos e super recomendo. Débora, Paulo e Fabrícia!",
    content:
      "Ótimo atendimento, super atenciosos e super recomendo. Obg a todos, Deus abençoe a vida de vcs: Débora, Paulo e Fabrícia!!!!",
  },
  {
    name: "Ana Paula da Costa Ferreira",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Profissionalismo e dedicação durante todo o processo que resultou na conquista da minha indenização!",
    content:
      "Agradeço imensamente a advogada Fabrícia e a toda a equipe envolvida. Fico muito satisfeita pelo excelente e competente trabalho desenvolvido pelo escritório, pelo profissionalismo e pela dedicação durante todo o processo que resultou na conquista da minha indenização.",
  },
  {
    name: "Weliton Fonseca",
    badge: "2 avaliações · 1 foto · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Ambiente onde o cliente é recebido com total ética, profissionalismo, mas acima de tudo humanitário!",
    content:
      "Muito satisfeito como um todo, um ambiente onde o cliente é recebido com total ética, profissionalismo mas acima de tudo humanitário. Imensamente grato a Fabrícia e toda sua equipe na excelência exemplar pelo atendimento, que Deus continue abençoando sempre esses profissionais que foram colocados a disposição da cidadania.",
  },
  {
    name: "Renuzia Pereira",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Trabalho impecável, excelente profissional. Nota 1000 competente, corretíssima!",
    content:
      "Trabalho impecável, excelente profissional. Nota 1000 competente, corretíssima. Deus te abençoe sempre 😘😘😘😘😘. Pensou em advogada, Fabrícia e a melhor opção.",
  },
  {
    name: "Kedma Kedma",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Todas as minhas dúvidas foram esclarecidas. Atendimento maravilhoso, ótimos profissionais!",
    content:
      "Fui muito bem atendida, todas a minha dúvidas foram esclarecidas. Um atendimento maravilhoso, ótimos profissionais. Fiquei muito satisfeita.",
  },
  {
    name: "Zuleica Pereira de Assis",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Excelente conhecimento técnico, criatividade, comunicação adequada com vocabulário acessível!",
    content:
      "Profissional com excelente conhecimento técnico, criatividade e bom desempenho na solução de problemas, comunicação adequada com vocabulário acessível, proativa, dedicada e prestativa.",
  },
  {
    name: "Fernanda Soares",
    badge: "3 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Fabrícia super atenciosa, não mede esforços. Equipe nota mil!",
    content: "Fábricia super atenciosa, não mede esforços. Equipe nota mil.",
  },
  {
    name: "Thiago Fernandes",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Ótima profissional, e sempre a disposição para trabalhar!",
    content: "Ótima profissional , e sempre a disposição para trabalhar .",
  },
  {
    name: "Fabrícia Barbosa",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Ótima advogada muito competente, excelente profissional!",
    content: "Ótima advogada muito competente, excelente profissional.",
  },
  {
    name: "Rosimary Medeiros",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Ótima advogada. Excelente profissional. Parabéns 👏",
    content: "Ótima advogada. Excelente profissional. Parabéns 👏",
  },
  {
    name: "Déborah Pazini",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Equipe extremamente qualificada! Advogados muito atenciosos e capacitados!",
    content: "Equipe extremamente qualificada! Advogados muito atenciosos e capacitados!",
  },
  {
    name: "Elza Ferreira",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Estou feliz, fui bem representada, recomendo muito!",
    content: "Estou feliz fui bem representada recomendo muito.",
  },
  {
    name: "Adelson Bento De Souza",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Experiência e competência caminham juntos com FABRICIA FRAGOSO Advocacia!",
    content: "Experiência e Competência , caminham juntos com FABRICIA FRAGOSO Advocacia. Gratidão.",
  },
  {
    name: "SIMONE PEREIRA BARROS",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Fabrícia, uma excelente profissional, honesta, muito atenciosa. ❤️",
    content: "Fabrícia, uma excelente profissional, honesta, muito atenciosa. ❤️",
  },
  {
    name: "Joelder Louro",
    badge: "3 avaliações · 1 foto · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Profissional ágil, recomendo para quem estiver precisando de uma boa advogada!",
    content: "Profissional ágil recomendo para quem estiver precisando de uma boa advogada.",
  },
  {
    name: "Oseias Silva",
    badge: "5 avaliações · 1 foto · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "A melhor, segurança e comodidade para os clientes 🙏🏻",
    content: "A melhor , segurança e comodidade para os clientes🙏🏻",
  },
  {
    name: "Simony Paula",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Trabalho confiável e competente. Foi um prazer!",
    content: "Trabalho confiável e competente.",
  },
  {
    name: "Mauricio Batista santos",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google",
    highlight: "Excelente profissional!",
    content: "Excelente profissional!",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona a primeira consulta com a Dra. Fabrícia Fragoso e equipe?",
    answer:
      "O atendimento inicial começa diretamente através do nosso WhatsApp oficial. Você nos envia um relato seguro do seu caso e, se houver, fotos ou cópias de documentos (contratos, recibos, certidões ou notificações). Analisamos a viabilidade jurídica preliminar e agendamos a consulta — que pode ser presencial em nossa sede na Galeria Ebal Franco em Resplendor - MG ou 100% online por videoconferência com total sigilo para clientes em qualquer lugar do Brasil.",
  },
  {
    question: "Comprei um imóvel com 'contrato de gaveta'. É possível conseguir a escritura definitiva?",
    answer:
      "Sim, perfeitamente! Grande parte dos imóveis no Brasil ainda se encontra em situação irregular por meio de contratos particulares ('de gaveta'). Dependendo da situação da cadeia de vendedores e do tempo em que você ocupa o bem, podemos regularizar através de Adjudicação Compulsória em cartório, Usucapião Extrajudicial ou pela lavratura da escritura definitiva após o devido saneamento cadastral na Prefeitura e no Cartório de Registro de Imóveis.",
  },
  {
    question: "Moro em outra cidade, estado ou no exterior. Posso regularizar meu imóvel à distância?",
    answer:
      "Sim, com total comodidade e segurança jurídica! Atendemos proprietários de imóveis localizados em Minas Gerais e em todo o Brasil que residem em outras cidades, estados ou países. Toda a coleta de documentos, reuniões estratégicas, assinaturas eletrônicas e protocolos perante Cartórios e Prefeituras são conduzidos de forma digital e transparente.",
  },
  {
    question: "Como saber se o meu caso é de usucapião em cartório (extrajudicial) ou judicial?",
    answer:
      "A Usucapião Extrajudicial é realizada diretamente no Cartório de Registro de Imóveis e é muito mais rápida, sendo cabível quando a posse é mansa e pacífica e não há oposição ou litígio formal dos proprietários originais ou confrontantes. Caso haja discordância ou dificuldade de localização dos antigos titulares, ingressamos com a Ação de Usucapião Judicial fundamentada perante o Poder Judiciário.",
  },
  {
    question: "O que é adjudicação compulsória e quando ela é aplicada?",
    answer:
      "A adjudicação compulsória é o instrumento jurídico utilizado quando o comprador já quitou o valor integral do imóvel, possui o contrato ou promessa de compra e venda, mas o vendedor faleceu, desapareceu ou se recusa injustificadamente a assinar a escritura pública. Hoje, com a Lei 14.382, é possível obter a escritura diretamente no Cartório de Registro de Imóveis com extrema agilidade.",
  },
  {
    question: "Herdei um imóvel sem escritura ou inventário. O que devo fazer?",
    answer:
      "Imóveis herdados sem escritura necessitam de uma análise prévia: verificamos se há consenso entre os herdeiros para realizar o inventário extrajudicial em cartório de notas (muito mais econômico e rápido) e regularizamos a titularidade do bem perante a Receita Federal, Prefeitura e Registro de Imóveis, evitando que o patrimônio da família fique bloqueado ou perca valor de mercado.",
  },
  {
    question: "Quais são os passos perante Prefeitura e Receita Federal para regularizar obra ou lote?",
    answer:
      "Para averbar uma construção ou individualizar um lote, é necessário obter o projeto aprovado e o Habite-se junto à Prefeitura Municipal, recolher os tributos devidos e emitir a Certidão Negativa de Débitos (CND) previdenciária da obra perante a Receita Federal (via SERO). Com esses documentos em mãos, realizamos o registro e a averbação definitiva na matrícula do Cartório de Imóveis.",
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
          dark ? "text-white" : "text-[#0f172a]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-7 ${
            dark ? "text-[#cbd5e1]" : "text-[#475569]"
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
      <main className="relative min-h-screen bg-[#07090e] text-[#f8fafc]">
        {/* Top Notification Strip */}
        <div className="relative z-50 border-b border-slate-700/40 bg-[#0a0d15] px-4 py-2 text-xs text-[#cbd5e1]">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-2 sm:px-6">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-slate-300 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-white" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                Fabrícia Fragoso Advocacia · Especializada em Direito Imobiliário · Resplendor - MG ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-[#cbd5e1]">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#cbd5e1] text-white" />
                <span className="font-bold text-white">5,0 ★</span> (25 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de uma consultoria sobre meu imóvel.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#cbd5e1] sm:inline-flex"
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
              ? "border-b border-slate-700/50 bg-[#07090e]/95 py-3 shadow-xl backdrop-blur-md"
              : "border-b border-slate-800 bg-[#07090e]/85 py-4 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo Link */}
            <a
              href="#"
              className="group flex shrink-0 items-center transition-opacity hover:opacity-95"
              aria-label="Fabrícia Fragoso Advocacia - Alves e Fragoso Advogados Associados - Início"
            >
              <div className="relative flex items-center py-1">
                <Image
                  src={LOGO_SRC}
                  alt="Alves e Fragoso Advogados Associados - Dra. Fabrícia Fragoso"
                  width={312}
                  height={62}
                  className="h-12 sm:h-[52px] md:h-[58px] w-auto max-w-[260px] sm:max-w-[300px] md:max-w-[340px] object-contain object-left transition-transform duration-200"
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
                Sobre a Equipe
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

            {/* Right Action */}
            <div className="flex shrink-0 items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de consultar sobre a situação do meu imóvel.")}
                target="_blank"
                variant="platinum"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#07090e]" />
                <span className="hidden xl:inline">Atendimento WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-700 bg-[#111622] text-[#f8fafc] transition-colors hover:border-slate-400 hover:text-white lg:hidden"
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
                className="border-b border-slate-800 bg-[#0c0f17] px-5 py-6 lg:hidden"
              >
                <div className="flex flex-col gap-4">
                  <a
                    href="#especialidades"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#cbd5e1] uppercase transition-colors hover:text-white"
                  >
                    <span>Especialidades Imobiliárias</span>
                    <ArrowRight size={14} className="text-slate-400" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#cbd5e1] uppercase transition-colors hover:text-white"
                  >
                    <span>Sobre a Dra. Fabrícia & Equipe</span>
                    <ArrowRight size={14} className="text-slate-400" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#cbd5e1] uppercase transition-colors hover:text-white"
                  >
                    <span>Diferenciais</span>
                    <ArrowRight size={14} className="text-slate-400" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#cbd5e1] uppercase transition-colors hover:text-white"
                  >
                    <span>Avaliações Google (5,0 ★)</span>
                    <ArrowRight size={14} className="text-slate-400" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#cbd5e1] uppercase transition-colors hover:text-white"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-slate-400" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-[#cbd5e1] uppercase transition-colors hover:text-white"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-slate-400" />
                  </a>

                  <div className="pt-4 border-t border-slate-800">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Fabrícia Fragoso! Gostaria de agendar um atendimento.")}
                      target="_blank"
                      variant="platinum"
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
        {/* DOBRA 1: HERO SECTION + FAIXA DE MÉTRICAS (DARK LUXURY)  */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#07090e]">
          {/* Subtle Ambient Platinum & Chrome Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-radial from-slate-400/10 via-slate-600/5 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-[#111622] px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-white shadow-sm">
                    <span className="size-1.5 rounded-full bg-white animate-pulse" />
                    Fabrícia Fragoso Advocacia · Especializada em Direito Imobiliário
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
                >
                  Segurança Jurídica e{" "}
                  <span className="bg-gradient-to-r from-white via-[#cbd5e1] to-[#94a3b8] bg-clip-text text-transparent">
                    Regularização Definitiva
                  </span>{" "}
                  para o Seu Imóvel.
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-[#cbd5e1] sm:text-lg"
                >
                  Proteja seu patrimônio e conquiste a escritura definitiva. A{" "}
                  <strong className="text-white font-semibold">Dra. Fabrícia Fragoso</strong> e a equipe da{" "}
                  <strong className="text-white font-semibold">Alves e Fragoso Advogados Associados</strong> atuam
                  com excelência técnica e resolutividade perante Cartórios de Imóveis, Prefeituras e Receita Federal em{" "}
                  <strong className="text-white font-semibold">Resplendor - MG</strong> e online para todo o Brasil.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de consultar sobre a regularização do meu imóvel.")}
                    target="_blank"
                    variant="platinum"
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

              {/* Right Column: Hero Visual Frame (Dra. Fabrícia Fragoso portrait) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Metallic Border Box */}
                  <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#111622] p-2 shadow-2xl shadow-black/85">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#0c0f17]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Fabrícia Fragoso - Fabrícia Fragoso Advocacia Especializada em Direito Imobiliário"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-65" />
                    </div>

                    {/* Subtle Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-slate-700 bg-[#07090e]/92 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-white">
                            Dra. Fabrícia Fragoso
                          </p>
                          <p className="text-[11px] text-[#cbd5e1]">
                            Advocacia Imobiliária & Regularização
                          </p>
                        </div>
                        <span className="rounded-md border border-slate-700 bg-[#161d2c] px-2.5 py-1 text-[10px] font-bold text-white">
                          Resplendor · MG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 5.0 Rating) */}
                  <div className="absolute -top-5 -left-5 hidden rounded-xl border border-slate-700 bg-[#111622]/95 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#161d2c] border border-slate-700">
                      <GoogleIcon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className="fill-[#cbd5e1] text-white"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-white mt-0.5">
                        5,0 no Google · 25 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Imóveis Regulares) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-slate-700 bg-[#111622]/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <HomeIcon size={16} className="text-white" />
                    <span className="text-xs font-bold tracking-wide text-white">
                      Direito Imobiliário Especializado ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN DOBRA 1 (DARK) */}
            <div className="mt-14 border-t border-slate-800 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-slate-800 bg-[#111622]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    5,0 ★
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-[#94a3b8]">25 avaliações 100% 5 estrelas</p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-[#111622]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Referência
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Direito Imobiliário</p>
                  <p className="text-[11px] text-[#94a3b8]">Cartório, Prefeitura e Receita Federal</p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-[#111622]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    100%
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Clareza & Ética</p>
                  <p className="text-[11px] text-[#94a3b8]">Comunicação acessível e segura</p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-[#111622]/80 p-4 backdrop-blur-sm">
                  <span className="font-serif text-2xl font-bold text-white">
                    Resplendor
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Galeria Ebal Franco</p>
                  <p className="text-[11px] text-[#94a3b8]">R. Morais de Carvalho, 653 - Sl 03</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: ESPECIALIDADES & ÁREAS DE ATUAÇÃO (LIGHT)      */}
        {/* ======================================================== */}
        <section id="especialidades" className="border-t border-[#e2e8f0] bg-[#f8fafc] text-[#0f172a] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="Especialidades & Atuação"
                dark={false}
                description="Conheça nossas principais áreas de concentração no Direito Imobiliário. Clique em qualquer especialidade para ver detalhes, situações atendidas e consultar diretamente."
              >
                Soluções Jurídicas e Segurança Patrimonial Definitiva
              </Heading>

              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de consultar sobre a regularização do meu imóvel.")}
                target="_blank"
                variant="platinum"
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
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-300/40"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-14 items-center justify-center rounded-xl border border-slate-200 bg-[#f1f5f9] text-[#0f172a] transition-colors group-hover:border-[#0f172a] group-hover:bg-[#0f172a] group-hover:text-white">
                        <IconComponent size={26} />
                      </div>
                      <span className="rounded-full border border-slate-200 bg-[#f1f5f9] px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-slate-700">
                        {area.tag.split("·")[0].trim()}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-xl font-bold text-[#0f172a] transition-colors group-hover:text-slate-700">
                      {area.title}
                    </h3>

                    <p className="mt-2 text-xs font-semibold text-slate-500">
                      {area.category}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                      {area.summary}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-[#f1f5f9] pt-4">
                      <span className="text-xs font-semibold text-[#0f172a] group-hover:underline">
                        Ver detalhes & situações atendidas
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-[#0f172a] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-[#0c0f17] p-6 shadow-2xl sm:p-8 text-[#f8fafc]"
              >
                <button
                  type="button"
                  onClick={() => setActiveArea(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-full border border-slate-700 bg-[#161d2c] text-[#cbd5e1] transition-colors hover:border-white hover:text-white"
                  aria-label="Fechar modal de detalhes"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-slate-400">
                  <Scale size={15} />
                  <span>Área de Atuação Especializada</span>
                </div>

                <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {activeArea.title}
                </h3>
                <p className="mt-1 text-xs text-[#94a3b8]">
                  {activeArea.category}
                </p>

                <div className="mt-5 border-t border-slate-800 pt-4">
                  <p className="text-sm leading-relaxed text-[#cbd5e1]">
                    {activeArea.details}
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
                    Situações & Ações Frequentes
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {activeArea.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#cbd5e1]">
                        <CheckCircle2 size={15} className="shrink-0 text-white mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end border-t border-slate-800 pt-6">
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#94a3b8] transition-colors hover:text-white"
                  >
                    Voltar
                  </button>

                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    variant="platinum"
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
        {/* DOBRA 3: SOBRE A DRA. FABRÍCIA & EQUIPE (DARK)           */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-slate-800 bg-[#0c0f17] py-20 lg:py-28 text-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Image: Team Photo (Fabrícia seated with Débora and Paulo) */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="overflow-hidden rounded-2xl border-2 border-slate-700 bg-[#111622] p-2.5 shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#161d2c]">
                      <Image
                        src={FOTO_ABOUT_SRC}
                        alt="Alves e Fragoso Advogados Associados - Dra. Fabrícia Fragoso, Débora e Paulo"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -bottom-6 -right-4 rounded-xl border border-slate-700 bg-[#07090e] p-4 shadow-xl">
                    <p className="font-serif text-3xl font-bold text-white">
                      Nota 5,0 ★
                    </p>
                    <p className="text-[11px] font-semibold text-[#94a3b8]">
                      Reconhecimento Máximo no Google
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre o Escritório & Equipe"
                  dark={true}
                  description="Uma trajetória pautada pela dedicação irrestrita, conhecimento técnico especializado e atendimento genuinamente humano."
                >
                  Alves e Fragoso Advogados Associados: Excelência em Direito Imobiliário
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#cbd5e1]">
                  <p>
                    Liderada pela <strong className="text-white font-semibold">Dra. Fabrícia Fragoso</strong> e contando com os advogados associados{" "}
                    <strong className="text-white font-semibold">Débora e Paulo</strong>, a{" "}
                    <strong className="text-white font-semibold">Alves e Fragoso Advogados Associados</strong> consolidou-se como a principal referência em Direito Imobiliário e Regularização de Imóveis em Resplendor e em toda a região do Vale do Rio Doce.
                  </p>
                  <p>
                    O escritório é amplamente reconhecido por sua atuação resolutiva e ágil perante{" "}
                    <strong className="text-white font-semibold">Cartórios de Registro de Imóveis, Prefeituras Municipais, Receita Federal e Tribunais de Justiça</strong>, descomplicando procedimentos burocráticos para que cidadãos e famílias conquistem a escritura e o registro definitivo de seus bens.
                  </p>
                  <p>
                    Com a expressiva marca de <strong className="text-white font-semibold">nota máxima 5,0 ★ com 25 avaliações no Google Meu Negócio</strong>, a equipe se destaca pelo tratamento humanitário, comunicação transparente em linguagem acessível (sem juridiquês) e acompanhamento próximo em cada fase do processo.
                  </p>
                </div>

                {/* 4 Highlights */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#111622] p-4">
                    <Shield size={20} className="text-slate-300 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Ética & Humanismo
                      </h4>
                      <p className="mt-1 text-[11px] text-[#94a3b8]">
                        Atendimento acolhedor e transparente, priorizando a segurança e o bem-estar do cliente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#111622] p-4">
                    <Briefcase size={20} className="text-slate-300 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Especialização Imobiliária
                      </h4>
                      <p className="mt-1 text-[11px] text-[#94a3b8]">
                        Domínio completo dos trâmites em Cartórios de Imóveis, Prefeituras e Receita Federal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#111622] p-4">
                    <Lock size={20} className="text-slate-300 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Sigilo & Discrição
                      </h4>
                      <p className="mt-1 text-[11px] text-[#94a3b8]">
                        Proteção rigorosa de dados patrimoniais e documentos confidenciais da sua família.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#111622] p-4">
                    <FileText size={20} className="text-slate-300 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Agilidade & Prazos
                      </h4>
                      <p className="mt-1 text-[11px] text-[#94a3b8]">
                        Condução célere com acompanhamento diário de protocolos e certidões.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Fabrícia e equipe! Gostaria de conversar sobre a situação do meu imóvel.")}
                    target="_blank"
                    variant="platinum"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com a Dra. Fabrícia Fragoso</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#cbd5e1] transition-colors hover:text-white"
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
        <section id="diferenciais" className="border-t border-[#e2e8f0] bg-[#f1f5f9] text-[#0f172a] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow justify-center mb-3">
                Por que Escolher Fabrícia Fragoso Advocacia
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                O Padrão de Excelência com Nota Máxima 5,0 ★ no Google
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                Pilares que fundamentam cada atendimento, regularização fundiária e defesa conduzida por nossa equipe.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f8fafc] text-[#0f172a] border border-slate-200">
                  <Scale size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0f172a]">
                  Soluções Claras & Seguras
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                  Desmistificamos o juridiquês e a burocracia cartorária para entregar soluções definitivas e seguras.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f8fafc] text-[#0f172a] border border-slate-200">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0f172a]">
                  Atendimento Humanitário
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                  Recepção ética, calorosa e empática, entendendo o valor afetivo e financeiro que o seu imóvel representa.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f8fafc] text-[#0f172a] border border-slate-200">
                  <BadgeCheck size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0f172a]">
                  Resolutividade & Agilidade
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                  Priorização de vias extrajudiciais em cartório para acelerar a conquista do documento legítimo.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#f8fafc] text-[#0f172a] border border-slate-200">
                  <Lock size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#0f172a]">
                  Blindagem do Patrimônio
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                  Proteção jurídica de contratos e títulos contra riscos de fraude, nulidades e perdas financeiras.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de esclarecer algumas dúvidas sobre meu imóvel.")}
                target="_blank"
                variant="platinum"
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
        <section id="depoimentos" className="border-t border-slate-800 bg-[#07090e] py-20 lg:py-28 text-[#f8fafc]">
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
                        className="fill-[#cbd5e1] text-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">5,0 de 5,0</span>
                  <span className="text-xs text-[#94a3b8]">
                    · 25 avaliações no Google Meu Negócio
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#111622] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:border-white hover:bg-[#161d2c]"
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
                  className="relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#111622] p-6 shadow-md transition-all duration-300 hover:border-slate-500 hover:bg-[#161d2c]"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#cbd5e1] text-white"
                        />
                      ))}
                    </div>

                    {/* Highlight Quote */}
                    <p className="mt-3 font-serif text-sm font-bold text-white leading-snug">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    {/* Full Review Text */}
                    <p className="mt-3 text-xs leading-relaxed text-[#cbd5e1]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-800 pt-4">
                    <p className="font-serif text-xs font-bold text-white">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-[#94a3b8]">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-700 bg-[#111622] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-white sm:text-xl">
                Precisa regularizar seu imóvel ou resolver uma questão imobiliária?
              </h3>
              <p className="mt-2 text-xs text-[#94a3b8] max-w-xl mx-auto">
                Não arrisque o patrimônio mais importante da sua vida sem o respaldo de quem entende a fundo o Direito Imobiliário e atua com ética e dedicação total.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Fabrícia! Li as avaliações no site e gostaria de avaliar a situação do meu imóvel com você.")}
                  target="_blank"
                  variant="platinum"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com a Dra. Fabrícia Fragoso Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO (LIGHT)             */}
        {/* ======================================================== */}
        <section className="border-t border-[#e2e8f0] bg-[#f8fafc] text-[#0f172a] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow justify-center mb-3">
                Processo Transparente
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                Como Funciona o Seu Atendimento
              </h2>
              <p className="mt-3 text-sm text-[#475569]">
                Passo a passo simples, ágil e descomplicado desde o primeiro contato até a escritura definitiva registrada.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#0f172a]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0f172a]">
                  Contato Inicial
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                  Envie uma mensagem no WhatsApp relatando a situação do imóvel e esclareça suas primeiras dúvidas.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#0f172a]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0f172a]">
                  Auditoria Documental
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                  Analisamos contratos de compra e venda, certidões de matrícula, IPTU e histórico de posse do imóvel.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#0f172a]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0f172a]">
                  Estratégia mais Ágil
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                  Definimos o caminho mais econômico e rápido (cartório extrajudicial ou judicial) para o seu caso.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md">
                <span className="font-serif text-3xl font-bold text-[#0f172a]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-[#0f172a]">
                  Escritura & Matrícula
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                  Conduzimos todo o processo perante Cartório e Prefeitura até a entrega da matrícula definitiva registrada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ (DARK)                 */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-slate-800 bg-[#0c0f17] py-20 lg:py-28 text-[#f8fafc]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow-dark mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-[#cbd5e1]">
                Respostas diretas para as dúvidas mais comuns sobre regularização de imóveis, usucapião e cartórios.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {faqList.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-slate-800 bg-[#111622] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-white transition-colors hover:text-slate-300"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-slate-400" />
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
                          className="border-t border-slate-800/80 px-5 pt-3 pb-5 text-xs leading-relaxed text-[#cbd5e1]"
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
              <p className="text-xs text-[#94a3b8]">
                Sua dúvida específica não está listada acima?
              </p>
              <div className="mt-3">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de esclarecer uma dúvida sobre meu imóvel que não vi no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Pergunte diretamente à Dra. Fabrícia Fragoso no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDE & CONTATO (LIGHT)            */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#e2e8f0] bg-[#f8fafc] text-[#0f172a] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info (LIGHT STYLING) */}
              <div className="lg:col-span-5">
                <span className="eyebrow mb-3.5">Sede & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                  Estamos Prontos para Atender Você
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#475569]">
                  Venha nos visitar em nosso escritório na Galeria Ebal Franco, no Centro de Resplendor - MG, ou agende sua consulta digital com todo o sigilo e segurança jurídica.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0f172a]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                        Endereço da Sede
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                        {ADDRESS_TEXT}
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        Centro de Resplendor - MG · Galeria Ebal Franco, Sala 03.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0f172a]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                        Telefone & WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-[#475569]">
                        {PHONE_DISPLAY}
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de agendar uma consulta imobiliária.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#0f172a] hover:underline"
                      >
                        Clique para enviar mensagem no WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0f172a]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                        Horário de Funcionamento
                      </p>
                      <p className="mt-1 text-xs text-[#475569]">
                        Segunda a Sexta: 09:00 às 18:00
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Atendimento presencial com agendamento e online para todo o Brasil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0f172a]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                        Redes Sociais & Perfil
                      </p>
                      <div className="mt-1 flex flex-col gap-1 text-xs">
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#475569] hover:text-[#0f172a]"
                        >
                          Instagram: <span className="font-bold">{INSTAGRAM_HANDLE}</span>
                        </a>
                        <a
                          href={GOOGLE_SEARCH_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:underline"
                        >
                          Perfil Google: Fabrícia Fragoso Advocacia (5,0 ★)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card (LIGHT STYLING) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-slate-700">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-[#0f172a] sm:text-3xl">
                    Inicie sua Consulta com a Dra. Fabrícia Fragoso
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                    Selecione a situação do seu imóvel para ser direcionado(a) com a mensagem adequada ao WhatsApp oficial do escritório:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de consultar sobre Regularização de Imóvel / Escritura / Cartório.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8fafc] p-4 text-xs font-bold text-[#0f172a] transition-all hover:border-slate-400 hover:bg-[#f1f5f9]"
                    >
                      <span>Regularização & Escritura</span>
                      <ArrowRight size={14} className="text-slate-700" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de orientação sobre Usucapião em Cartório / Judicial.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8fafc] p-4 text-xs font-bold text-[#0f172a] transition-all hover:border-slate-400 hover:bg-[#f1f5f9]"
                    >
                      <span>Usucapião em Cartório</span>
                      <ArrowRight size={14} className="text-slate-700" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de orientação sobre Compra Segura / Due Diligence / Contrato Imobiliário.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8fafc] p-4 text-xs font-bold text-[#0f172a] transition-all hover:border-slate-400 hover:bg-[#f1f5f9]"
                    >
                      <span>Contratos & Compra Segura</span>
                      <ArrowRight size={14} className="text-slate-700" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Fabrícia! Gostaria de orientação sobre Inventário / Partilha de Imóveis da Família.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-[#f8fafc] p-4 text-xs font-bold text-[#0f172a] transition-all hover:border-slate-400 hover:bg-[#f1f5f9]"
                    >
                      <span>Inventário & Partilha de Imóveis</span>
                      <ArrowRight size={14} className="text-slate-700" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Fabrícia Fragoso! Gostaria de conversar com você sobre a situação do meu imóvel.")}
                      target="_blank"
                      variant="platinum"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com a Dra. Fabrícia Fragoso</span>
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
        <footer className="border-t border-slate-800 bg-[#07090e] pt-16 pb-12 text-[#94a3b8]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Alves e Fragoso Advogados Associados - Dra. Fabrícia Fragoso"
                    width={260}
                    height={52}
                    className="h-10 sm:h-12 w-auto max-w-[240px] sm:max-w-[280px] object-contain object-left"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#cbd5e1] max-w-md">
                  ⚖️ Fabrícia Fragoso Advocacia — Alves e Fragoso Advogados Associados. Advocacia especializada em Direito Imobiliário e Regularização Fundiária. Atendimento humanizado, ético e resolutivo presencial em Resplendor - MG e online para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-[#111622] text-[#cbd5e1] transition-colors hover:border-white hover:text-white"
                    aria-label="Instagram da Dra. Fabrícia Fragoso"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Fabrícia Fragoso!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-[#111622] text-[#cbd5e1] transition-colors hover:border-white hover:text-white"
                    aria-label="WhatsApp da Dra. Fabrícia Fragoso"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-[#111622] text-[#cbd5e1] transition-colors hover:border-white hover:text-white"
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
                      Especialidades Imobiliárias
                    </a>
                  </li>
                  <li>
                    <a href="#sobre" className="footer-link">
                      Sobre a Dra. Fabrícia & Equipe
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
                      Sede em Resplendor - MG
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & OAB Column */}
              <div className="lg:col-span-4">
                <p className="font-serif text-xs font-bold uppercase tracking-wider text-white">
                  Informações Institucionais & OAB
                </p>
                <p className="mt-4 text-[11px] leading-relaxed text-[#64748b]">
                  Este site tem finalidade estritamente institucional e informativa, em estrita observância ao Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não visa à captação indevida de clientela nem substitui consulta jurídica formal.
                </p>
                <div className="mt-4 rounded-lg border border-slate-800 bg-[#111622] p-3 text-[11px] text-[#cbd5e1]">
                  <p className="font-bold text-white">
                    Alves e Fragoso Advogados Associados
                  </p>
                  <p className="mt-0.5 text-[#94a3b8]">
                    {ADDRESS_TEXT}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center text-[11px] sm:flex-row sm:text-left">
              <p>
                © {new Date().getFullYear()} ALVES E FRAGOSO ADVOGADOS ASSOCIADOS. Todos os direitos reservados.
              </p>
              <p className="text-[#64748b]">
                Galeria Ebal Franco · Resplendor · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá, Dra. Fabrícia Fragoso! Gostaria de consultar sobre meu imóvel.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Fabrícia Fragoso"
            className="group flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-black text-white shadow-xl shadow-black/60 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          >
            <WhatsAppIcon size={19} />
            <span className="hidden sm:inline tracking-wide font-bold">
              Falar com a Dra. Fabrícia
            </span>
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
