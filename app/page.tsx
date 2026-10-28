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
  Plane,
  CreditCard,
  FileCheck2,
  Lock,
  Headphones,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531998254289";
const PHONE_DISPLAY = "(31) 99825-4289";
const EMAIL_CONTACT = "contato@pradoramosadvocacia.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/pradoramosadvocacia/";
const INSTAGRAM_HANDLE = "@pradoramosadvocacia";
const INSTAGRAM_FOLLOWERS = "2.127 seguidores · 290 posts";

const ADDRESS_CLAUDIO =
  "Praça Levi Vioy de Freitas, 28, Sl 103 - Centro, Cláudio - MG, 35530-000, Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Prado+Ramos+Advocacia%0ACl%C3%A1udio+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=e65bf6121730a79e&sxsrf=AKL5yDhYOGYDLgLhEJWBGx3Thl1l-l7FnQ:1793208895679&q=prado+ramos+advocacia+endere%C3%A7o&ludocid=2422573681797867810&sa=X&ved=2ahUKEwjIgPDZn92XAxXRqZUCHXPFHvAQ6BN6BAgmEAI";

const GOOGLE_STREET_VIEW_URL =
  "https://www.google.com/local/place/fid/0xa093d27beccd97:0x219eb5eda1c5a922/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DNDRnPxHcipva3JOUe-GCkA%26cb_client%3Dsearch.gws-prod.grass%26yaw%3D55.53667%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFk5EUm5QeEhjaXB2YTNKT1VlLUdDa0E%3D&sa=X&ved=2ahUKEwjIgPDZn92XAxXRqZUCHXPFHvAQpx96BAgbEBI";

// Official assets uploaded directly by user
const LOGO_SRC = "/prado-ramos-logo-trimmed.png";
const LOGO_WHITE_SRC = "/prado-ramos-logo-white.png";
const FOTO_HERO_SRC = "/isadora-prado-oficial.jpg";
const FOTO_PORTRAIT_SRC = "/isadora-prado-oficial.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Isadora Prado! Gostaria de agendar uma consulta jurídica personalizada com a Prado Ramos Advocacia.";
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
    id: "direito-consumidor-aereo",
    title: "Direito Aéreo & Passageiro Prejudicado",
    category: "Extravio Definitivo ou Temporário de Bagagem · Voo Atrasado · Voo Cancelado · Overbooking · Conexões Perdidas",
    icon: Plane,
    tag: "Sem Custo Inicial · Êxito Comprovado · Indenização Justa",
    summary:
      "Assessoria jurídica ágil e especializada para quem enfrentou transtornos com companhias aéreas. Reivindicamos indenizações por danos morais e materiais com máxima agilidade e sem burocracia.",
    details:
      "Problemas como malas extraviadas em viagens de negócios ou férias, voos cancelados sem assistência material ou horas intermináveis de espera em aeroportos geram graves prejuízos que a lei brasileira ampara com rigor. Na Prado Ramos Advocacia, examinamos seus bilhetes, protocolos PIR e comprovantes, atuando de forma estratégica para exigir a devida reparação das companhias aéreas sem necessidade de desembolso prévio pelo cliente.",
    topics: [
      "Indenizações por extravio de bagagem temporário ou definitivo com restituição de itens essenciais e danos morais",
      "Ações judiciais por voos cancelados ou atrasados gerando perda de compromissos ou diárias de hospedagem",
      "Reparação por preterição de embarque (overbooking) e falta de assistência em solo (alimentação e hotel)",
      "Reembolso integral de passagens com multas abusivas ou cancelamentos em desacordo com as normas da ANAC",
      "Atendimento 100% online para passageiros de voos nacionais e internacionais em qualquer estado ou no exterior",
      "Acompanhamento contínuo via WhatsApp até o pagamento integral e liberação dos valores da condenação",
    ],
    whatsAppText:
      "Olá, Dra. Isadora Prado! Gostaria de consultar sobre um problema com companhia aérea (extravio de bagagem / atraso / cancelamento de voo).",
  },
  {
    id: "fraudes-bancarias-golpes",
    title: "Direito Bancário & Fraudes Eletrônicas",
    category: "Golpes do Pix · Empréstimos Consignados Não Solicitados · Cartão Clonado · Negativação Indevida · Juros Abusivos",
    icon: CreditCard,
    tag: "Liminar Rápida · Exclusão de Dívidas · Repetição em Dobro",
    summary:
      "Defesa contundente contra falhas de segurança bancária, golpes eletrônicos e empréstimos fraudulentos em contas de aposentados, pensionistas e consumidores.",
    details:
      "O avanço das fraudes digitais e a falta de segurança nos sistemas bancários fazem vítimas diariamente, principalmente com empréstimos consignados não autorizados e fraudes via Pix. A jurisprudência dos tribunais é clara em responsabilizar os bancos. Entramos com pedidos liminares imediatos para suspender cobranças indevidas, limpar o CPF do consumidor e exigir a devolução dos valores e indenização por danos morais.",
    topics: [
      "Cancelamento imediato de contratos de empréstimo consignado fraudulentos com restituição em dobro",
      "Ações indenizatórias e de ressarcimento contra fraudes eletrônicas, engenharia social e golpes via Pix",
      "Exclusão urgente de negativação indevida nos órgãos de proteção ao crédito (SPC, Serasa e Boa Vista)",
      "Indenizações por danos morais causados por descontos indevidos em aposentadorias ou salários",
      "Revisão de tarifas ilegais e taxas de juros abusivas que colocam a subsistência do consumidor em risco",
      "Atendimento especializado com protocolo de segurança reforçado contra golpes digitais",
    ],
    whatsAppText:
      "Olá, Dra. Isadora Prado! Preciso de ajuda contra uma fraude bancária, golpe do Pix ou desconto indevido de empréstimo.",
  },
  {
    id: "direito-civil-indenizacoes",
    title: "Direito Civil, Contratos & Indenizações",
    category: "Danos Morais e Materiais · Rescisão Contratual · Cobranças Extrajudiciais e Judiciais · Disputas Imobiliárias",
    icon: Shield,
    tag: "Segurança Jurídica · Resolução Sem Burocracia · Proteção Patrimonial",
    summary:
      "Proteção jurídica personalizada para controvérsias patrimoniais, descumprimentos de contratos, prejuízos decorrentes de ilícitos e defesa da integridade patrimonial.",
    details:
      "Conflitos contratuais e prejuízos causados por terceiros demandam uma condução técnica assertiva, equilibrando diplomacia e firmeza processual. Atuamos tanto na esfera preventiva quanto no contencioso perante o Poder Judiciário, cobrando reparações justas por perdas patrimoniais, lucros cessantes e constrangimentos ilegais.",
    topics: [
      "Ações indenizatórias por danos morais, materiais e abalos à honra ou imagem pessoal e comercial",
      "Elaboração, análise minuciosa e revisão de instrumentos contratuais particulares e comerciais",
      "Cobrança e execução judicial de créditos, notas promissórias e instrumentos contratuais não cumpridos",
      "Ações de rescisão contratual com devolução de quantias pagas e aplicação de multas rescisórias",
      "Resolução de conflitos de vizinhança, locações e litígios imobiliários na Comarca de Cláudio e região",
      "Consultoria ágil e personalizada com feedback transparente em cada etapa",
    ],
    whatsAppText:
      "Olá, Dra. Isadora Prado! Gostaria de uma consulta sobre uma questão cível, contratual ou indenizatória.",
  },
  {
    id: "direito-trabalhista",
    title: "Direito do Trabalho & Verbas Rescisórias",
    category: "Reclamatórias Trabalhistas · Rescisão Indireta · Horas Extras · Vínculo Sem Carteira · Acidente Laboral",
    icon: Briefcase,
    tag: "Defesa dos Seus Direitos · Cálculos Precisos · Combate a Injustiças",
    summary:
      "Atuação dedicada e técnica na proteção dos direitos do trabalhador, garantindo o recebimento justo de verbas rescisórias, horas extras, insalubridade e indenizações.",
    details:
      "O trabalhador que dedica anos de esforço a uma empresa não pode ser lesado por demissões arbitrárias, supressão de horas trabalhadas ou falta de anotação da carteira de trabalho. A Prado Ramos Advocacia analisa minuciosamente seu histórico profissional e folhas de ponto, promovendo a reclamatória com fundamentação probatória sólida perante a Justiça do Trabalho.",
    topics: [
      "Cobrança integral de verbas rescisórias: saldo de salário, aviso prévio, 13º proporcional, férias e multa do FGTS",
      "Ações de Rescisão Indireta do Contrato de Trabalho por falta de pagamento ou faltas graves do empregador",
      "Cálculo rigoroso e cobrança de horas extras, intervalos intrajornada e adicionais noturnos",
      "Reconhecimento de vínculo empregatício de trabalho informal com anotações e recolhimentos retroativos",
      "Adicionais de insalubridade e periculosidade para funções expostas a riscos à saúde e integridade",
      "Indenizações por acidentes de trabalho, danos corporais e assédio moral no ambiente corporativo",
    ],
    whatsAppText:
      "Olá, Dra. Isadora Prado! Gostaria de consultar sobre meus direitos em uma causa trabalhista.",
  },
  {
    id: "direito-familia-inventarios",
    title: "Direito de Família & Inventários em Cartório",
    category: "Inventário Extrajudicial · Partilha Consensual de Bens · Divórcio Ágil · Pensão Alimentícia · Guarda",
    icon: Users,
    tag: "Agilidade em Cartório · Sensibilidade · Solução Sem Conflito",
    summary:
      "Condução ética, serena e transparente de inventários em cartório de notas e processos de família, descomplicando a partilha de bens e reduzindo custos e desgastes.",
    details:
      "Partilhas de herança e reorganizações familiares exigem atenção humanizada e conhecimento prático dos procedimentos cartorários para evitar que inventários se arrastem por anos. Priorizamos a via extrajudicial em cartório quando há consenso entre herdeiros capazes, entregando agilidade, segurança jurídica e economia patrimonial à família.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas: procedimento descomplicado, célere e seguro",
      "Planejamento patrimonial familiar e orientação prévia sobre incidência do ITCD e emolumentos",
      "Inventário Judicial para casos que envolvam herdeiros menores, incapazes ou discordâncias pontuais",
      "Divórcio Consensual ou Litigioso com definição equilibrada e segura da partilha dos bens",
      "Ações de fixação, revisão ou execução de pensão alimentícia e guarda de filhos",
      "Condução sigilosa e transparente com comunicação direta e humanizada",
    ],
    whatsAppText:
      "Olá, Dra. Isadora Prado! Gostaria de orientações sobre Inventário de Bens em Cartório ou Direito de Família.",
  },
  {
    id: "solucoes-juridicas-personalizadas",
    title: "Soluções Jurídicas Personalizadas & Atendimento Online",
    category: "Atendimento 100% Online em Todo o Brasil · Presencial em Cláudio - MG · Segurança Máxima Contra Golpes",
    icon: FileCheck2,
    tag: "Atendimento Humanizado · Transparência Digital · Alcance Nacional",
    summary:
      "Consultoria jurídica moderna e sob medida, permitindo que você resolva suas demandas jurídicas sem sair de casa, com segurança digital auditada e acompanhamento em tempo real.",
    details:
      "A Prado Ramos Advocacia construiu reputação nota 5,0 no Google com clientes atendidos com sucesso em Minas Gerais, Mato Grosso, São Paulo e em todo o Brasil. Você não precisa enfrentar filas, trânsito ou se preocupar com a distância: o envio de documentos, assinatura digital com validade jurídica e reuniões acontecem de forma prática pelo WhatsApp oficial, com conferência rigorosa de segurança para proteger você contra golpes.",
    topics: [
      "Atendimento 100% online por WhatsApp oficial, videochamada e telefone com Dra. Isadora Prado",
      "Canal com verificação de segurança oficial contra fraudes e cópia de números falsos",
      "Atendimento presencial na sede própria no Centro de Cláudio - MG (Praça Levi Vioy de Freitas, 28)",
      "Assinatura eletrônica de procurações e termos aditivos com certificação jurídica oficial",
      "Prestação de contas clara e atualizações constantes do andamento processual sem juridiquês",
      "Atuação em tribunais estaduais, federais e órgãos administrativos em todo o território nacional",
    ],
    whatsAppText:
      "Olá, Dra. Isadora Prado! Gostaria de saber mais sobre as soluções jurídicas personalizadas da Prado Ramos Advocacia.",
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
    name: "Edineis de Carvalho Pires",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 4 meses atrás",
    highlight:
      "No começo fiquei com um certo receio, a gente vê tanto golpe acontecendo. Mas, após o conhecimento e histórias no site, senti confiança. Desde o início ela explicou todo o processo!",
    content:
      "No começo fiquei com um certo receio, a gente vê tanto golpe acontecendo. Mas, após o conhecimento e histórias no site, senti confiança. Desde o início, ela explicou todo o processo, como seria, estimativa de decisão, e fases de recurso. A comunicação foi toda por whatsapp, desde o envio dos documentos e retornos do processo. No pagamento, recebi o Termos aditivo também. Fiquei muito satisfeita com o trabalho e parabéns pelo trabalho e pela equipe. Muito obrigada!",
  },
  {
    name: "Lais Hyasmim",
    badge: "4 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 1 mês atrás",
    highlight:
      "No início fiquei receosa por ser atendimento online, mas a Advocacia Prado Ramos me surpreendeu positivamente. Atendimento profissional, transparente e cuidadoso. Recomendo muito! ⭐⭐⭐⭐⭐",
    content:
      "No início fiquei um pouco receosa por ser um atendimento totalmente online, mas a Advocacia Prado Ramos me surpreendeu positivamente. O atendimento é muito profissional, transparente e cuidadoso. Quando foi necessário um atendimento presencial com uma advogada, eles prontamente encaminharam uma excelente profissional, que também nos atendeu com muita atenção e competência. Outro ponto que considero um grande diferencial é a preocupação com a segurança dos clientes. Sempre que acontece algo fora do padrão, eles nos comunicam para evitar golpes. Todo esse cuidado me passou muita confiança!",
  },
  {
    name: "Denis Gomes",
    badge: "5 avaliações · 3 fotos · 5 Estrelas",
    date: "Avaliação Verificada no Google · 4 meses atrás",
    highlight:
      "Quero agradecer à Dra. Isadora pelo excelente trabalho e dedicação no meu processo de extravio de bagagem. Sempre muito atenciosa, profissional e transparente!",
    content:
      "Quero agradecer à Dra. Isadora pelo excelente trabalho e dedicação no meu processo de extravio de bagagem. Sempre muito atenciosa, profissional e transparente durante todo o andamento da ação. Fiquei muito satisfeito com o resultado e recomendo seu trabalho com total confiança.",
  },
  {
    name: "Gracinha Reis",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 4 meses atrás",
    highlight:
      "Todo atendimento 100% online, sem precisar investir nada adiantado, o que me trouxe muita segurança. Atualização do processo em tempo recorde!",
    content:
      "Passando para agradecer. A agilidade e profissionalismo dessa empresa, todo atendimento 100% online, sem precisar investir nada, o que me trouxe muita segurança, atualização do processo em tempo real, só tenho que agradecer pelos serviços recebidos em tempo recorde. Ainda temos profissionais brilhantes e honestos nesse país, muito feliz com o resultado. Obrigada!",
  },
  {
    name: "Karina Passos",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 1 mês atrás",
    highlight:
      "Só tenho a agradecer, uma equipe maravilhosa e super atenciosa. Ótimas profissionais que resolveram com agilidade meus contratempos com as companhias aéreas.",
    content:
      "Só tenho a agradecer, uma equipe maravilhosa e super atenciosa. Ótimas profissionais que com excelência atenderam as minhas expectativas e resolveram com agilidade meus contratempos com as companhias aéreas.",
  },
  {
    name: "Eduarda Stefany",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 3 meses atrás",
    highlight:
      "Recebi todo o suporte necessário durante cada etapa. O processo foi rápido, tranquilo e ocorreu exatamente como combinado!",
    content:
      "No início, fiquei um pouco receosa por todo o processo ser realizado de forma online, sem precisar ir ao escritório. Porém, recebi todo o suporte necessário durante cada etapa. Todas as minhas dúvidas foram esclarecidas com atenção, e o processo foi rápido, tranquilo e ocorreu exatamente como combinado. Graças a Deus, deu tudo certo. Fiquei muito satisfeita com o atendimento e recomendo bastante!",
  },
  {
    name: "Deborah Clasen",
    badge: "Local Guide · 5 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 8 meses atrás",
    highlight:
      "Contratei o escritório de forma on-line e obtivemos êxito nos dois processos! Rápido retorno às dúvidas e transparência em cada etapa.",
    content:
      "Contratei o escritório de forma on-line e tive uma experiência extremamente positiva. Obtivemos êxito nos dois processos, o que me deixou muito satisfeita. Destaco especialmente o rápido retorno às minhas dúvidas e a transparência durante todo o andamento, sempre me mantendo informada sobre cada etapa. Recomendo pelo profissionalismo, eficiência e comprometimento.",
  },
  {
    name: "Sandra Azevedo Felix",
    badge: "1 avaliação · 1 foto · 5 Estrelas",
    date: "Avaliação Verificada no Google · 1 ano atrás",
    highlight:
      "Coloquei a companhia aérea na justiça e ganhei a causa, recebi exatamente o valor devido. Muito atenciosos, correu tudo certinho!",
    content:
      "Foi maravilhoso, muito atenciosos, meu processo correu tudo certinho, sempre me colocaram a par do andamento do processo, coloquei a companhia aérea na justiça e ganhei a causa, recebi exatamente o valor devido.",
  },
  {
    name: "Fabiana Aparecida da Silva",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 9 meses atrás",
    highlight:
      "A Prado Ramos Advocacia me transmitiu muita segurança. Moro no MT e o escritório mesmo sendo de outro estado foi super resolutivo!",
    content:
      "A Prado e Ramos Advocacia me transmitiu muita segurança desde o início do atendimento. Moro no MT e o escritório mesmo sendo de outro estado foi super resolutivo. Recomendo, estou muito satisfeita.",
  },
  {
    name: "Rita de Cássia Ferreira Siquelli",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 6 meses atrás",
    highlight:
      "Adorei contratar os serviços do escritório da Dra. Isadora Prado! Muito eficientes, atenciosos e o processo saiu rapidinho!",
    content:
      "Adorei contratar os serviços do escritório da Dra. Isadora Prado! Eles são muito eficientes, organizados, atenciosos e o mais importante: o processo saiu rapidinho! Muito obrigada!",
  },
  {
    name: "Kellen Paula Mendonça",
    badge: "Local Guide · 25 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 4 meses atrás",
    highlight:
      "A equipe do escritório é extremamente capacitada, transmitindo seriedade e confiança em cada atendimento. Agilidade no retorno é diferencial!",
    content:
      "A equipe do escritório é extremamente capacitada, transmitindo seriedade e confiança em cada atendimento. Além da excelência profissional, a agilidade no retorno e no atendimento é um grande diferencial, tornando o escritório a melhor escolha para conduzir minhas demandas.",
  },
  {
    name: "Synara Duarte",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 3 meses atrás",
    highlight:
      "Resolveram a minha causa de forma transparente e eficiente, com a comunicação clara e sem burocracias. Recomendo!",
    content:
      "Resolveram a minha causa de forma transparente e eficiente, com a comunicação clara e sem burocracias. Obrigada pela parceria. Recomendo.",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona o atendimento 100% online da Prado Ramos Advocacia? É seguro?",
    answer:
      "Sim, é absolutamente seguro e homologado por centenas de clientes em todo o Brasil. Você envia os documentos digitalmente via WhatsApp ou e-mail, e assina os termos e procurações de forma eletrônica direto pelo celular com validade jurídica plena. Nossa equipe mantém você atualizado a cada andamento com relatórios claros e transparentes. Além disso, adotamos protocolos rigorosos de segurança anti-golpe, garantindo que você converse exclusivamente pelo nosso canal oficial verificado.",
  },
  {
    question: "Tive problemas com voos ou extravio de bagagem. O que tenho direito a receber?",
    answer:
      "Passageiros que sofrem extravio temporário ou definitivo de malas, cancelamentos ou atrasos injustificados de voos têm direito amparado pelo Código de Defesa do Consumidor e pelas Resoluções da ANAC. Isso inclui ressarcimento de compras emergenciais de roupas e itens básicos, reparação integral por pertences perdidos e indenização por danos morais pela frustração, perda de compromissos ou estresse extremo causado pelas companhias aéreas.",
  },
  {
    question: "Preciso pagar honorários antecipados para dar entrada no meu processo?",
    answer:
      "Para diversas demandas consumeristas (como litígios contra companhias aéreas e certas fraudes bancárias), trabalhamos sob a modalidade contratual de êxito: você não precisa desembolsar valores de honorários adiantados para iniciar sua ação. Toda a remuneração profissional é vinculada à vitória e ao recebimento efetivo da sua indenização, conforme combinado de maneira transparente em contrato.",
  },
  {
    question: "Moro em outro estado. Posso contratar a Prado Ramos Advocacia?",
    answer:
      "Com certeza! Com a digitalização integral dos processos judiciais nos tribunais do Brasil (PJe, Projudi e Eproc), a atuação da Prado Ramos Advocacia é nacional. Atendemos com regularidade clientes no Mato Grosso, São Paulo, Rio de Janeiro, Goiás e em outros estados com a mesma proximidade, agilidade e excelência comprovada nas avaliações verificadas do Google.",
  },
  {
    question: "Como agendar um atendimento presencial na sede em Cláudio - MG?",
    answer:
      "Para quem prefere o atendimento físico ou reside na região de Cláudio, Divinópolis, Itaúna, Oliveira e Carmópolis de Minas, nosso escritório está situado na Praça Levi Vioy de Freitas, 28, Sala 103 - Centro, Cláudio - MG (CEP 35530-000). O agendamento é feito pelo WhatsApp (31) 99825-4289 para garantir que a Dra. Isadora Prado e sua equipe reservem um horário exclusivo para você.",
  },
  {
    question: "Quais são as garantias contra golpes virtuais ao conversar com o escritório?",
    answer:
      "Essa é uma das nossas maiores prioridades éticas. O único número oficial de WhatsApp da Prado Ramos Advocacia para contato e atendimento é (31) 99825-4289. Nosso perfil no Instagram @pradoramosadvocacia é constantemente atualizado com comunicados de segurança. Jamais solicitamos depósitos estranhos ou transferências prévias em contas de terceiros.",
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
          dark ? "text-white" : "text-[#06101e]"
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
      <main className="min-h-screen bg-[#fbfbf9] text-[#06101e] selection:bg-[#c59b4c] selection:text-[#040912]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (OXFORD MIDNIGHT NAVY & GOLD)      */}
        {/* ======================================================== */}
        <div className="border-b border-[#0b1c31] bg-[#071322] py-2 text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f5d17a] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#c59b4c]" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                PRADO RAMOS ADVOCACIA · Soluções Jurídicas Personalizadas · Atendimento 100% Online & Presencial ⚖️
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
                <span className="font-bold text-white">5,0 ★</span> (234 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de uma consulta jurídica.")}
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
        {/* STICKY HEADER / NAVBAR (OFFICIAL LOGO DIRECTLY USED)     */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-slate-200/90 bg-white/95 py-2.5 shadow-md backdrop-blur-md"
              : "border-b border-slate-200/60 bg-white/90 py-3.5 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Official Prado Ramos Logo exactly as sent by user */}
            <a
              href="#"
              className="group flex shrink-0 items-center transition-opacity hover:opacity-90"
              aria-label="Prado Ramos Advocacia - Início"
            >
              <Image
                src={LOGO_SRC}
                alt="Prado Ramos Advocacia"
                width={360}
                height={110}
                className="h-10 sm:h-12 md:h-13 w-auto object-contain"
                priority
              />
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden items-center gap-5 xl:gap-7 xl:flex">
              <a href="#servicos" className="nav-link text-[11px] whitespace-nowrap">
                Áreas de Atuação
              </a>
              <a href="#sobre" className="nav-link text-[11px] whitespace-nowrap">
                Sobre a Advogada
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

            {/* Right Action: WhatsApp CTA (Warm Champagne Gold) */}
            <div className="flex shrink-0 items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de consultar sobre a viabilidade do meu caso.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#040912]" />
                <span className="hidden 2xl:inline">Converse com uma Advogada</span>
                <span className="2xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 transition-colors hover:border-[#c59b4c] hover:text-[#9e742a] xl:hidden cursor-pointer"
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
                      alt="Prado Ramos Advocacia"
                      width={280}
                      height={90}
                      className="h-10 w-auto object-contain"
                      priority
                    />
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#c59b4c]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Sobre Dra. Isadora Prado</span>
                    <ArrowRight size={14} className="text-[#c59b4c]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Segurança & Diferenciais</span>
                    <ArrowRight size={14} className="text-[#c59b4c]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Avaliações Google (5,0 ★ · 234 reviews)</span>
                    <ArrowRight size={14} className="text-[#c59b4c]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#c59b4c]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-[#c59b4c]" />
                  </a>

                  <div className="pt-4 border-t border-slate-100">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de agendar uma consulta sobre o meu caso.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Converse com a Dra. Isadora Prado</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM FOTO EXATA DA DRA. ISADORA    */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fbfbf9]">
          {/* Subtle Ambient Light Champagne Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#f5d17a]/15 via-[#f4f3ec]/60 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#f4ecd8]/40 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#c59b4c]/30 bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#9e742a] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#c59b4c] animate-pulse" />
                    PRADO RAMOS ADVOCACIA · SOLUÇÕES JURÍDICAS PERSONALIZADAS
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.15] font-bold tracking-tight text-[#06101e] sm:text-5xl lg:text-[3.25rem]"
                >
                  Soluções Jurídicas Personalizadas para Proteger Seus Direitos com{" "}
                  <span className="bg-gradient-to-r from-[#7d591c] via-[#c59b4c] to-[#9e742a] bg-clip-text text-transparent">
                    Agilidade e Total Transparência.
                  </span>
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  Com nota máxima de <strong className="text-slate-900 font-bold">5,0 ★ no Google e 234 avaliações</strong>, a <strong className="text-slate-900 font-bold">Prado Ramos Advocacia</strong>, liderada pela <strong className="text-slate-900 font-bold">Dra. Isadora Prado</strong>, oferece assessoria jurídica resolutiva em <strong className="text-slate-900 font-bold">Direito do Consumidor (Aéreo & Bancário), Indenizações, Cível e Trabalhista</strong>. Atendimento 100% online em todo o Brasil e presencial na Comarca de Cláudio - MG, com segurança certificada contra golpes.
                </motion.p>

                {/* Direct Trust Highlight with Real Client Review */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs"
                >
                  <Award size={20} className="text-[#c59b4c] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 font-bold">Reconhecimento comprovado no Google (5,0 ★):</strong> &ldquo;No começo fiquei com receio, mas senti confiança. Desde o início ela explicou todo o processo e fases de recurso. A comunicação foi toda por WhatsApp com transparência e rapidez. Fiquei muito satisfeita!&rdquo; (Edineis de Carvalho Pires · Avaliação no Google)
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de consultar sobre o meu caso pelo WhatsApp.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Converse com a Dra. Isadora Prado</span>
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

              {/* Right Column: Hero Visual Frame (Fotografia Exata da Dra. Isadora Prado) */}
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
                        alt="Dra. Isadora Prado - Prado Ramos Advocacia"
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        priority
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040912]/60 via-transparent to-transparent opacity-75" />
                    </div>

                    {/* Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-slate-200/80 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-slate-900">
                            Dra. Isadora Prado
                          </p>
                          <p className="text-[11px] text-slate-600">
                            Prado Ramos Advocacia · Cláudio - MG
                          </p>
                        </div>
                        <span className="rounded-md border border-[#c59b4c]/40 bg-[#fdfaf3] px-2.5 py-1 text-[10px] font-bold text-[#9e742a]">
                          OAB/MG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 5.0 Rating - 234 reviews) */}
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
                            className="fill-[#f59e0b] text-[#f59e0b]"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-slate-900 mt-0.5">
                        5,0 no Google · 234 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Especialidade) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <Scale size={16} className="text-[#9e742a]" />
                    <span className="text-xs font-bold tracking-wide text-slate-900">
                      Direito Aéreo & Consumidor ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN HERO */}
            <div className="mt-14 border-t border-slate-200/80 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#06101e]">
                    5,0 ★
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-slate-500">234 avaliações verificadas</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#06101e]">
                    Cláudio - MG
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Sede Própria</p>
                  <p className="text-[11px] text-slate-500">Pça Levi Vioy de Freitas, 28</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#06101e]">
                    100% Online
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Atendimento Nacional</p>
                  <p className="text-[11px] text-slate-500">MG, MT, SP e todo o Brasil</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#06101e]">
                    Sem Burocracia
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Foco no Êxito</p>
                  <p className="text-[11px] text-slate-500">Atualizações em tempo real</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: PILARES & ÁREAS DE ATUAÇÃO — [MODO ESCURO]      */}
        {/* ======================================================== */}
        <section id="servicos" className="border-t border-[#c59b4c]/30 bg-[#071322] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="Áreas de Atuação & Soluções Jurídicas"
                dark={true}
                description="Expertise técnica especializada e atendimento resolutivo para passageiros aéreos, consumidores, trabalhadores e famílias em todo o Brasil."
              >
                Pilares de Excelência Jurídica
              </Heading>

              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de consultar sobre a viabilidade da minha causa.")}
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
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#0f2540] bg-[#0b1c31] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b4c] hover:shadow-xl hover:shadow-[#c59b4c]/15"
                  >
                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#0f2540] text-[#c59b4c] border border-[#c59b4c]/40 transition-colors group-hover:bg-[#c59b4c] group-hover:text-[#040912]">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#0f2540] px-3 py-1 text-[10px] font-bold text-[#f5d17a] uppercase tracking-wider border border-[#c59b4c]/30">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white group-hover:text-[#f5d17a] transition-colors">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#c59b4c]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-slate-300">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#0f2540] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex w-full items-center justify-between text-xs font-bold text-[#c59b4c] transition-colors hover:text-white cursor-pointer"
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
        {/* DOBRA 3: SOBRE A ADVOGADA & ESCRITÓRIO — [MODO CLARO]    */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-slate-200 bg-[#f4f3ec] py-20 lg:py-28 text-[#06101e]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Visual Composition with Dra. Isadora Prado Photo */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Main Portrait Frame */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-2.5 shadow-2xl shadow-slate-300/60">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={FOTO_PORTRAIT_SRC}
                        alt="Dra. Isadora Prado - Prado Ramos Advocacia"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040912]/60 via-transparent to-transparent opacity-75" />

                      {/* Overlay Badge at Bottom of Photo */}
                      <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-serif text-sm font-bold text-slate-900">
                              Prado Ramos Advocacia
                            </p>
                            <p className="text-[11px] text-slate-600 mt-0.5">
                              Dra. Isadora Prado · Cláudio - MG
                            </p>
                          </div>
                          <span className="rounded-md border border-[#c59b4c]/40 bg-[#fdfaf3] px-2.5 py-1 text-[10px] font-bold text-[#9e742a]">
                            Sede Própria
                          </span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-600">
                          <span>Atendimento Presencial e Online</span>
                          <span className="text-[#9e742a] font-semibold">Nota 5,0 ★ (234 avaliações)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Pill */}
                  <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-xl">
                    <Star size={13} className="fill-[#f59e0b] text-[#f59e0b]" />
                    <span className="text-[11px] font-bold text-slate-900">
                      5,0 no Google · 234 Avaliações
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre a Advogada & Escritório"
                  dark={false}
                  description="Uma advocacia moderna, humana e segura, alicerçada na transparência radical, na agilidade nas respostas e no acolhimento a cada cliente."
                >
                  Prado Ramos Advocacia: Excelência, Resolução e Proximidade em Todo o Brasil
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                  <p>
                    Com sede no Centro de <strong className="text-slate-900 font-bold">Cláudio - MG</strong> (Praça Levi Vioy de Freitas, 28, Sala 103), a <strong className="text-slate-900 font-bold">Prado Ramos Advocacia</strong> destaca-se pela entrega de soluções jurídicas sob medida, combinando o rigor técnico do Direito com uma experiência de atendimento moderna, acessível e sem burocracias.
                  </p>
                  <p>
                    Liderado pela <strong className="text-slate-900 font-bold">Dra. Isadora Prado</strong>, o escritório conquistou destaque nacional na defesa do passageiro aéreo (<strong className="text-slate-900 font-bold">extravio de bagagens, voos atrasados e cancelamentos</strong>), em litígios bancários por fraudes e golpes do Pix, e em demandas cíveis e trabalhistas com alto índice de resolutividade.
                  </p>
                  <p>
                    O grande diferencial celebrado nas <strong className="text-slate-900 font-bold">234 avaliações 5,0 estrelas no Google</strong> é a extrema preocupação com a segurança e o conforto do cliente: comunicação direta via WhatsApp, atualizações em tempo real do processo, termos transparentes e proteção ativa contra golpes eletrônicos.
                  </p>
                </div>

                {/* 4 Brand Pillars */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <Lock size={20} className="text-[#c59b4c] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Segurança Certificada Anti-Golpe
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Cuidado exemplar com os dados e canais oficiais do cliente, alertando e prevenindo fraudes digitais.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <Headphones size={20} className="text-[#c59b4c] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Atendimento 100% Online & Humanizado
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Processos conduzidos com agilidade de onde você estiver, sem necessidade de deslocamentos ou filas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <Clock size={20} className="text-[#c59b4c] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Atualizações em Tempo Real
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Informações claras e periódicas a cada etapa da sua ação pelo WhatsApp, com linguagem simples e acessível.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <Sparkles size={20} className="text-[#c59b4c] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Foco no Êxito & Celeridade
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Trabalho voltado para a vitória e compensação financeira justa, sem cobranças antecipadas em causas consumeristas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de conversar sobre o meu caso.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com a Dra. Isadora Prado</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 transition-colors hover:text-[#9e742a]"
                  >
                    <InstagramIcon size={15} />
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>

                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#9e742a] transition-colors hover:text-black"
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
        <section id="diferenciais" className="border-t border-[#c59b4c]/30 bg-[#040912] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow-dark justify-center mb-3">
                Por que Escolher a Prado Ramos Advocacia
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                O Padrão de Confiança Atestado por 234 Clientes
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Princípios demonstrados na prática e comprovados por centenas de pessoas que confiaram suas causas à Dra. Isadora Prado.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#0f2540] bg-[#071322] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b4c]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0b1c31] text-[#c59b4c] border border-[#c59b4c]/40">
                  <Users size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Escuta Atenta e Empatia
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Cada cliente é atendido com atenção minuciosa, tirando todas as dúvidas com paciência e clareza.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0f2540] bg-[#071322] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b4c]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0b1c31] text-[#c59b4c] border border-[#c59b4c]/40">
                  <Shield size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Proteção & Transparência
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Contratos claros, termos aditivos formais e comunicação oficial blindada contra fraudes digitais.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0f2540] bg-[#071322] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b4c]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0b1c31] text-[#c59b4c] border border-[#c59b4c]/40">
                  <Plane size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Autoridade em Direito Aéreo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Especialização consolidada na obtenção rápida de indenizações contra companhias aéreas por bagagem e voos.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0f2540] bg-[#071322] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b4c]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0b1c31] text-[#c59b4c] border border-[#c59b4c]/40">
                  <Clock size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Respostas em Tempo Recorde
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Agilidade no retorno de mensagens e andamentos processuais transmitidos em tempo real para a sua tranquilidade.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de iniciar meu atendimento com a Prado Ramos Advocacia.")}
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
        <section id="depoimentos" className="border-t border-slate-200 bg-[#fbfbf9] py-20 lg:py-28 text-[#06101e]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="eyebrow mb-3.5">
                  Avaliações Verificadas no Google
                </span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#06101e] sm:text-4xl">
                  A Confiança de Quem Teve Seus Direitos Defendidos
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">5,0 de 5,0</span>
                  <span className="text-xs text-slate-500">
                    · 234 avaliações verificadas no Google Meu Negócio
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xs transition-colors hover:border-[#c59b4c] hover:bg-slate-50"
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
                  className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#c59b4c] hover:shadow-md"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#f59e0b] text-[#f59e0b]"
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
                    <p className="text-[10px] text-[#9e742a] font-semibold">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#e2e8f0] bg-[#f4f3ec] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-slate-900 sm:text-xl">
                Teve sua bagagem extraviada, voo cancelado ou sofreu um golpe financeiro?
              </h3>
              <p className="mt-2 text-xs text-slate-600 max-w-xl mx-auto">
                Não fique no prejuízo. Conte com a Dra. Isadora Prado e a equipe da Prado Ramos Advocacia para exigir sua indenização com total suporte e segurança.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Li os depoimentos no site e gostaria de agendar uma consulta sobre meu caso.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com a Dra. Isadora Prado no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO — [MODO ESCURO]     */}
        {/* ======================================================== */}
        <section className="border-t border-[#c59b4c]/30 bg-[#071322] text-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow-dark justify-center mb-3">
                Processo Transparente & Seguro
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Como Funciona o Seu Atendimento
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Do primeiro contato ao recebimento da indenização, você tem controle total de cada etapa.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#0f2540] bg-[#0b1c31] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b4c]">
                <span className="font-serif text-3xl font-bold text-[#c59b4c]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Primeiro Contato
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Envie sua mensagem pelo WhatsApp oficial ou agende sua visita à nossa sede no Centro de Cláudio - MG para uma triagem inicial.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0f2540] bg-[#0b1c31] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b4c]">
                <span className="font-serif text-3xl font-bold text-[#c59b4c]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Análise Documental
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Examinamos bilhetes aéreos, comprovantes de compra, extratos bancários ou termos para verificar a viabilidade jurídica imediata.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0f2540] bg-[#0b1c31] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b4c]">
                <span className="font-serif text-3xl font-bold text-[#c59b4c]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Estratégia & Ação
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Procuração e termos assinados digitalmente com certificação oficial. Ingressamos com medidas liminares ou ação indenizatória.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0f2540] bg-[#0b1c31] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b4c]">
                <span className="font-serif text-3xl font-bold text-[#c59b4c]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Repasse & Conclusão
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Atualizações passo a passo até a liberação e transferência segura do pagamento da sua indenização na sua conta bancária.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ — [MODO CLARO]          */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-slate-200 bg-[#f4f3ec] py-20 lg:py-28 text-[#06101e]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#06101e] sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Respostas diretas e esclarecedoras sobre consultas, causas contra companhias aéreas, bancos e atendimento online seguro.
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
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-slate-900 transition-colors hover:text-[#9e742a] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#c59b4c]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#c59b4c]" />
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
                  href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de tirar uma dúvida que não encontrei no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#06101e] hover:text-[#9e742a] hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Tire sua dúvida diretamente com a Dra. Isadora Prado no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDE & CONTATO — [MODO ESCURO]     */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#c59b4c]/30 bg-[#040912] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info */}
              <div className="lg:col-span-5">
                <span className="eyebrow-dark mb-3.5">Localização & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Estamos Prontos para Atender Você
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Visite nosso escritório no Centro de Cláudio - MG ou receba suporte confidencial, seguro e ágil pelo WhatsApp de onde você estiver.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Sede Cláudio */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#c59b4c]/35 bg-[#071322] text-[#c59b4c]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Sede em Cláudio / MG
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {ADDRESS_CLAUDIO}
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-3">
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-[#c59b4c] font-semibold hover:underline"
                        >
                          Ver no Google Maps →
                        </a>
                        <a
                          href={GOOGLE_STREET_VIEW_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-[#f5d17a] font-semibold hover:underline"
                        >
                          Ver Fachada / Street View →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Telefone & WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#c59b4c]/35 bg-[#071322] text-[#c59b4c]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Telefone & WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Canal Oficial: <strong className="text-white">{PHONE_DISPLAY}</strong>
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de agendar um atendimento.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#c59b4c] hover:underline block mt-1"
                      >
                        Clique para conversar direto no WhatsApp oficial
                      </a>
                    </div>
                  </div>

                  {/* E-mail de Contato */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#c59b4c]/35 bg-[#071322] text-[#c59b4c]">
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
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#c59b4c]/35 bg-[#071322] text-[#c59b4c]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Segunda a Sexta: 08:00 às 17:00
                      </p>
                      <p className="text-[11px] text-[#f5d17a]">
                        Atendimento ágil pelo WhatsApp para dúvidas e casos urgentes.
                      </p>
                    </div>
                  </div>

                  {/* Redes Sociais */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#c59b4c]/35 bg-[#071322] text-[#c59b4c]">
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
                          Instagram: <span className="font-bold text-white">{INSTAGRAM_HANDLE}</span> ({INSTAGRAM_FOLLOWERS})
                        </a>
                        <a
                          href={GOOGLE_SEARCH_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#c59b4c] hover:underline"
                        >
                          Perfil Google: Prado Ramos Advocacia (5,0 ★ · 234 avaliações)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#c59b4c]/35 bg-[#071322] p-8 shadow-xl shadow-black/60">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#c59b4c]">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                    Inicie seu Atendimento com a Prado Ramos Advocacia
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Selecione a sua área de interesse para abrir o WhatsApp oficial com a mensagem apropriada:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de consultar sobre um problema com companhia aérea (extravio de bagagem / voo cancelado / atraso).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0b1c31] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#c59b4c] hover:text-white"
                    >
                      <span>Direito Aéreo & Bagagem</span>
                      <ArrowRight size={14} className="text-[#c59b4c]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Preciso de ajuda contra uma fraude bancária, golpe do Pix ou desconto indevido de empréstimo.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0b1c31] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#c59b4c] hover:text-white"
                    >
                      <span>Golpes & Fraudes Bancárias</span>
                      <ArrowRight size={14} className="text-[#c59b4c]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Preciso de orientação sobre uma causa Cível / Contratos / Indenizações.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0b1c31] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#c59b4c] hover:text-white"
                    >
                      <span>Cível & Indenizações</span>
                      <ArrowRight size={14} className="text-[#c59b4c]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de orientações sobre direitos em uma Causa Trabalhista.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0b1c31] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#c59b4c] hover:text-white"
                    >
                      <span>Causa Trabalhista</span>
                      <ArrowRight size={14} className="text-[#c59b4c]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de orientações sobre Inventário de Bens em Cartório ou Direito de Família.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0b1c31] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#c59b4c] hover:text-white"
                    >
                      <span>Inventários em Cartório</span>
                      <ArrowRight size={14} className="text-[#c59b4c]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de consultar sobre atendimento online seguro para o meu caso.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0b1c31] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#c59b4c] hover:text-white"
                    >
                      <span>Atendimento Online Seguro</span>
                      <ArrowRight size={14} className="text-[#c59b4c]" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-slate-700/60 pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de iniciar uma consulta jurídica com a Prado Ramos Advocacia.")}
                      target="_blank"
                      variant="gold"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Converse com a Dra. Isadora Prado no WhatsApp</span>
                    </GlowingButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 9: FOOTER INSTITUCIONAL — COM LOGO OFICIAL         */}
        {/* ======================================================== */}
        <footer className="border-t border-[#c59b4c]/25 bg-[#020509] pt-16 pb-12 text-slate-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative py-1">
                  <Image
                    src={LOGO_WHITE_SRC}
                    alt="Prado Ramos Advocacia"
                    width={420}
                    height={140}
                    className="h-12 sm:h-14 md:h-16 w-auto max-w-[280px] sm:max-w-[340px] object-contain object-left drop-shadow-md"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-md">
                  ⚖️ Prado Ramos Advocacia — Liderado pela Dra. Isadora Prado. Soluções jurídicas personalizadas em Direito do Consumidor (Aéreo & Bancário), Indenizações, Cível e Trabalhista. Atendimento 100% online em todo o Brasil e presencial em Cláudio - MG.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#071322] text-slate-300 transition-colors hover:border-[#c59b4c] hover:text-white"
                    aria-label="Instagram da Prado Ramos Advocacia"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Isadora Prado!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#071322] text-slate-300 transition-colors hover:border-[#c59b4c] hover:text-white"
                    aria-label="WhatsApp da Prado Ramos Advocacia"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#071322] text-slate-300 transition-colors hover:border-[#c59b4c] hover:text-white"
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
                      Sobre a Advogada
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="footer-link">
                      Diferenciais & Segurança
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
                      Sede em Cláudio - MG
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
                <div className="mt-4 rounded-lg border border-slate-800 bg-[#071322] p-3 text-[11px] text-slate-300">
                  <p className="font-bold text-white">
                    PRADO RAMOS ADVOCACIA
                  </p>
                  <p className="mt-0.5 text-[#c59b4c]">
                    Sede: {ADDRESS_CLAUDIO}
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
                © {new Date().getFullYear()} PRADO RAMOS ADVOCACIA. Todos os direitos reservados.
              </p>
              <p className="text-[#c59b4c]">
                Cláudio · Minas Gerais · Brasil · Atendimento Online Nacional
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá, Dra. Isadora Prado! Gostaria de falar no WhatsApp com a Prado Ramos Advocacia.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Prado Ramos Advocacia"
            className="group flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-black text-white shadow-xl shadow-black/60 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          >
            <WhatsAppIcon size={19} />
            <span className="hidden sm:inline tracking-wide font-bold">
              Converse com uma Advogada
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
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#c59b4c]/55 bg-[#071322] p-6 text-white shadow-2xl sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-[#0b1c31] text-slate-300 hover:border-white hover:text-white cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2.5 text-xs font-bold text-[#c59b4c] uppercase tracking-wider">
                  <Scale size={20} className="text-[#c59b4c]" />
                  <span>Área de Atuação Especializada</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {selectedPractice.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#c59b4c]">
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
                          className="text-[#c59b4c] shrink-0 mt-0.5"
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
                    <span>Consultar Dra. Isadora Prado nesta Área</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setSelectedPractice(null)}
                    className="w-full rounded-lg border border-slate-700 bg-[#0b1c31] px-5 py-3 text-xs font-bold text-slate-300 hover:bg-[#0f2540] hover:text-white sm:w-auto cursor-pointer"
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
