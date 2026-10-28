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
  Stethoscope,
  Coins,
  Calculator,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5533988181310";
const PHONE_DISPLAY = "(33) 98818-1310";
const EMAIL_CONTACT = "contato@frbadvogados.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/frbadvogados_/";
const INSTAGRAM_HANDLE = "@frbadvogados_";
const FOUNDER_INSTAGRAM_URL = "https://www.instagram.com/filiperabelobraga/";
const FOUNDER_INSTAGRAM_HANDLE = "@filiperabelobraga";

const ADDRESS_CAPELINHA =
  "R. Gov. Valadares, 213 - Centro, Capelinha - MG, 39680-060, Brasil";
const ADDRESS_SANTA_MARIA =
  "Rua Serafim Peixoto, 67 - Centro, Santa Maria do Suaçuí - MG, 39780-000, Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=FRB+Advogados+%E2%80%94+Filipe+Rabelo%0ACapelinha+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=aafa6ca6a126c165&sxsrf=APpeQnsFE0mWxKM75wsYIz82iWLKvmPPdg:1793135708603&q=frb+advogados+/+causas+contra+o+inss+capelinha+endere%C3%A7o&ludocid=3163646340820434934&sa=X&ved=2ahUKEwi_uceHj9uXAxVogpUCHYTLJd8Q6BN6BAg9EAI";

const LOGO_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/frb-emblem.png";
const FOTO_HERO_SRC = "/dr-filipe-rabelo.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Filipe Rabelo / Equipe FRB Advogados! Gostaria de consultar sobre a minha causa contra o INSS.";
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
    id: "aposentadorias-inss",
    title: "Aposentadorias do INSS (Idade, Tempo, Rural & Especial)",
    category: "Regras de Transição · Aposentadoria por Idade · Tempo de Contribuição · Atividade Rural · Insalubridade",
    icon: Award,
    tag: "Conquista do Benefício · Cálculo do Valor Máximo",
    summary:
      "Planejamento e requerimento seguro para quem deseja se aposentar com o maior valor possível, aproveitando regras de transição vantajosas, tempo rural e períodos insalubres.",
    details:
      "A Reforma da Previdência trouxe dezenas de regras complexas que confundem os trabalhadores e muitas vezes levam o INSS a conceder valores menores do que o devido. Na FRB Advogados, analisamos minuciosamente seu histórico de contribuições (CNIS), incluímos períodos rurais e vínculos sem registro formal, aplicando a fórmula mais benéfica para garantir a sua aposentadoria com o maior benefício mensal possível.",
    topics: [
      "Aposentadoria por Idade Urbana e Híbrida (reconhecimento de períodos rurais e urbanos)",
      "Aposentadoria Rural para agricultores familiares, meeiros, lavradores e segurados especiais",
      "Aposentadoria por Tempo de Contribuição pelas melhores regras de transição pós-Reforma",
      "Aposentadoria Especial para trabalhadores expostos a agentes nocivos, químicos e insalubres (PPP e LTCAT)",
      "Inclusão de tempo militar, período trabalhado em regime próprio (servidor público) e carteira antiga",
      "Recuperação de contribuições em atraso e regularização de pendências cadastrais no INSS",
    ],
    whatsAppText:
      "Olá, Dr. Filipe Rabelo! Gostaria de consultar sobre o meu pedido de Aposentadoria no INSS.",
  },
  {
    id: "beneficio-negado",
    title: "Reversão de Benefício Negado ou Cancelado pelo INSS",
    category: "Indeferimento Indevido · Pedido de Liminar na Justiça · Pagamento de Todos os Atrasados",
    icon: Scale,
    tag: "Atuação Rápida · Ação Judicial Combate · Atrasados Integrais",
    summary:
      "Se o INSS negou injustamente ou cancelou o seu benefício, entramos com ação judicial combativa para reverter a decisão e garantir todo o pagamento retroativo desde a entrada.",
    details:
      "O INSS erra com frequência ao analisar pedidos administrativos por falta de documentos ou interpretações restritivas. Ter o pedido negado não significa que você perdeu seu direito. A equipe da FRB Advogados ingressa diretamente na Justiça Federal com pedido de liminar e perícias especializadas, exigindo a concessão imediata do benefício e a cobrança de 100% das parcelas atrasadas acumuladas desde o primeiro dia do requerimento.",
    topics: [
      "Reversão judicial de indeferimentos de aposentadorias, pensões e auxílios pelo INSS",
      "Reativação de benefícios suspensos ou cortados indevidamente no 'pente-fino' da previdência",
      "Pedido de Tutela de Urgência (liminar judicial) para liberação rápida dos pagamentos mensais",
      "Cobrança integral de valores retroativos (atrasados) devidos desde a data do primeiro requerimento",
      "Correção de divergências no CNIS e complementação de documentos recusados pela agência do INSS",
      "Acompanhamento presencial e diligente em varas e juizados especiais federais de Minas Gerais",
    ],
    whatsAppText:
      "Olá, Dr. Filipe Rabelo! O INSS negou o meu benefício e preciso de ajuda para reverter.",
  },
  {
    id: "auxilio-doenca-invalidez",
    title: "Auxílio por Incapacidade Temporária & Aposentadoria por Invalidez",
    category: "Auxílio-Doença · Incapacidade Permanente · Perícia Médica Judicial · Acidente de Trabalho",
    icon: Stethoscope,
    tag: "Respaldo Médico-Jurídico · Quesitos Técnicos · Perícia Segura",
    summary:
      "Defesa intransigente do trabalhador incapacitado por doença ou acidente, com preparação técnica para a perícia e combate a cortes desumanos de benefício pelo INSS.",
    details:
      "Nenhum trabalhador com problemas graves de saúde deve ser forçado a voltar ao trabalho sem condições. As perícias do INSS costumam ser rápidas e superficiais. A FRB Advogados estrutura seu processo com laudos detalhados, exames atualizados e formulação de quesitos médicos judiciais precisos para que o perito judicial reconheça sua incapacidade temporária ou permanente, convertendo em aposentadoria por invalidez com adicional de 25% quando necessário.",
    topics: [
      "Concessão judicial de Auxílio por Incapacidade Temporária (antigo auxílio-doença)",
      "Conversão de auxílio-doença em Aposentadoria por Incapacidade Permanente (Invalidez)",
      "Adicional de 25% na aposentadoria por invalidez para segurados que necessitam de cuidador permanente",
      "Benefícios acidentários decorrentes de doenças ocupacionais e acidentes de trabalho com estabilidade",
      "Elaboração de quesitos médicos detalhados para perícia judicial independente",
      "Acompanhamento em caso de alta médica indevida quando o trabalhador ainda está doente",
    ],
    whatsAppText:
      "Olá, Dr. Filipe Rabelo! Estou doente ou incapacitado(a) e preciso de ajuda com o INSS / Perícia Médica.",
  },
  {
    id: "bpc-loas",
    title: "BPC / LOAS (Idoso e Pessoa com Deficiência)",
    category: "1 Salário Mínimo Mensal · Não Exige Contribuição Prévia · Idosos a partir de 65 Anos · PCD",
    icon: Heart,
    tag: "Sem Exigência de Contribuição · Dignidade · Concessão Segura",
    summary:
      "Benefício de 1 salário mínimo por mês pago pelo Governo Federal para idosos a partir de 65 anos e pessoas de qualquer idade com deficiência ou impedimento de longo prazo.",
    details:
      "O BPC/LOAS é uma das conquistas sociais mais importantes do Brasil e não exige ter contribuído no passado para o INSS. Muitas famílias de baixa renda têm o benefício negado por erros no Cadastro Único (CadÚnico) ou cálculo incorreto da renda per capita familiar. A FRB Advogados atua para desconsiderar rendas que a lei permite excluir, comprovando o estado de vulnerabilidade social e garantindo o pagamento mensal para quem mais precisa.",
    topics: [
      "BPC/LOAS Idoso: para pessoas com 65 anos ou mais em situação de vulnerabilidade socioeconômica",
      "BPC/LOAS Pessoa com Deficiência: para crianças, jovens e adultos com limitações físicas, mentais ou sensoriais",
      "Exclusão legal de gastos com remédios, fraldas e tratamentos médicos no cálculo da renda familiar",
      "Desconsideração de outro BPC ou benefício de até 1 salário mínimo já recebido por outro idoso na mesma casa",
      "Orientação completa e atualização correta do CadÚnico junto ao CRAS do seu município",
      "Ação judicial rápida para reverter indeferimentos injustos do INSS na análise social e médica",
    ],
    whatsAppText:
      "Olá, Dr. Filipe Rabelo! Gostaria de consultar se eu ou um familiar temos direito ao BPC / LOAS.",
  },
  {
    id: "pensao-por-morte",
    title: "Pensão por Morte & Direitos dos Dependentes",
    category: "Cônjuges · Companheiros em União Estável · Filhos Menores · Pagamento desde o Óbito",
    icon: Users,
    tag: "Proteção Familiar · Comprovação Ágil · Atrasados Devidos",
    summary:
      "Segurança e amparo financeiro imediato para viúvas, viúvos, filhos menores ou dependentes econômicos após a perda de um ente querido segurado do INSS.",
    details:
      "A perda de um familiar é um momento de extrema fragilidade, e o INSS muitas vezes impõe entraves burocráticos para reconhecer a união estável ou a qualidade de segurado do falecido. A FRB Advogados organiza todas as provas documentais e testemunhais com respeito, ética e rapidez, viabilizando a concessão da Pensão por Morte com recebimento de todas as parcelas retroativas desde a data do falecimento.",
    topics: [
      "Requerimento e concessão célere de Pensão por Morte para viúvos, viúvas e dependentes",
      "Comprovação judicial robusta de União Estável mesmo sem certidão de casamento formal em cartório",
      "Pensão por morte para filhos menores de 21 anos ou filhos maiores com deficiência/invalidez",
      "Garantia da pensão quando o falecido havia parado de contribuir temporariamente (período de graça)",
      "Pensão por morte decorrente de morte presumida ou acidente de trabalho",
      "Recebimento de parcelas retroativas integrais desde o dia do falecimento do segurado",
    ],
    whatsAppText:
      "Olá, Dr. Filipe Rabelo! Gostaria de orientações jurídicas sobre Pensão por Morte do INSS.",
  },
  {
    id: "planejamento-revisoes",
    title: "Planejamento Previdenciário & Revisão de Benefícios",
    category: "Cálculo do Maior Valor · Revisão da Carta de Concessão · Erros do INSS · Aumento de Renda",
    icon: Calculator,
    tag: "Investimento Seguro · Aumento de Renda · Direitos do Passado",
    summary:
      "Cálculo matemático rigoroso do seu tempo de contribuição e análise detalhada da carta de concessão para aumentar o valor da sua aposentadoria e receber atrasados dos últimos 5 anos.",
    details:
      "Milhares de aposentados no Brasil recebem menos do que deveriam todos os meses porque o INSS cometeu erros ao calcular a média dos salários, descartou períodos de trabalho ou aplicou índices desfavoráveis. Na FRB Advogados realizamos a conferência detalhada da sua Carta de Concessão e do processo administrativo, verificando se você tem direito a revisões vantajosas com aumento mensal e recebimento dos atrasados dos últimos 5 anos.",
    topics: [
      "Planejamento Previdenciário Preventivo: descubra quando se aposentar e qual a melhor regra financeira",
      "Análise de Revisão da Carta de Concessão e Memória de Cálculo para detectar erros do INSS",
      "Revisão para inclusão de tempo trabalhado na roça (rural) ou sob condições insalubres (especial)",
      "Revisão do Teto Previdenciário e inclusão de vínculos empregatícios omitidos na carteira",
      "Aumento imediato do valor mensal recebido no banco e cobrança de retroativos dos últimos 5 anos",
      "Segurança jurídica absoluta com cálculo prévio demonstrando a viabilidade antes de ingressar",
    ],
    whatsAppText:
      "Olá, Dr. Filipe Rabelo! Gostaria de fazer um Planejamento Previdenciário ou Revisão da minha Aposentadoria.",
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
    name: "Fernanda Costa",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 6 meses atrás",
    highlight:
      "Este escritório se destaca pela excelência, organização e compromisso com qualidade. A equipe demonstra profissionalismo em cada detalhe, oferecendo soluções eficientes e um atendimento atencioso.",
    content:
      "Este escritório se destaca pela excelência, organização e compromisso com qualidade. A equipe demonstra profissionalismo em cada detalhe, Oferecendo soluções eficientes e um atendimento atencioso.",
  },
  {
    name: "Adão Alves",
    badge: "2 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 7 meses atrás",
    highlight:
      "Muito satisfeito com o atendimento, super educados e além disso trabalha muito bem!",
    content:
      "Muito satisfeito com o atendimento super educados e além disso trabalha muito bem",
  },
  {
    name: "Daiane Lopes",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 7 meses atrás",
    highlight:
      "Excelente escritório de advocacia, especializado em Direito Previdenciário, com profissionais atenciosos, responsáveis e comprometidos com cada cliente.",
    content:
      "Excelente escritório de advocacia, especializado em Direito Previdenciário, com profissionais atenciosos, responsáveis e comprometidos com cada cliente.",
  },
  {
    name: "Nicolas Mendonça Zoia",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 7 meses atrás",
    highlight:
      "Ótimos profissionais atuando em prol da população.",
    content:
      "Otimos profissionais atuando em prol da população.",
  },
  {
    name: "Steffany Xavier",
    badge: "4 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 7 meses atrás",
    highlight:
      "Profissionais competentes e excelente atendimento.",
    content:
      "Profissionais competentes e excelente atendimento.",
  },
  {
    name: "Bethânia Costa",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 7 meses atrás",
    highlight:
      "Excelente escritório de advocacia, especializado em Direito Previdenciário, com profissionais atenciosos, responsáveis e comprometidos com o cliente.",
    content:
      "Excelente escritório de advocacia, especializado em Direito Previdenciário, com profissionais atenciosos, responsáveis e comprometidos com o cliente.",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "O INSS negou ou cancelou o meu benefício. O que devo fazer agora?",
    answer:
      "Não se desespere e não deixe o tempo passar. O INSS erra com grande frequência em suas decisões administrativas. Ao receber a carta de indeferimento ou cancelamento, envie uma foto do documento diretamente para a FRB Advogados no WhatsApp. Nossa equipe analisa os motivos da recusa e ingressa na Justiça Federal com pedido de liminar para reverter a decisão e garantir o pagamento de todas as parcelas retroativas desde a data do primeiro pedido.",
  },
  {
    question: "Nunca paguei ou parei de contribuir para o INSS há muitos anos. Posso receber o BPC/LOAS?",
    answer:
      "Sim! O Benefício de Prestação Continuada (BPC/LOAS) é um direito constitucional de assistência social no valor de 1 salário mínimo mensal e NÃO exige histórico de contribuições para a Previdência. Ele é devido a idosos a partir de 65 anos ou pessoas de qualquer idade com deficiência física, mental ou sensorial de longo prazo que estejam em situação de vulnerabilidade socioeconômica.",
  },
  {
    question: "Como funciona o atendimento presencial e online da FRB Advogados?",
    answer:
      "A FRB Advogados conta com 10 escritórios físicos de portas abertas em Minas Gerais — com sede principal em Capelinha (R. Gov. Valadares, 213 - Centro) e unidade em Santa Maria do Suaçuí (Rua Serafim Peixoto, 67 - Centro). Você pode nos visitar pessoalmente ou ser atendido de forma 100% digital pelo WhatsApp de qualquer lugar do Brasil, com reuniões online, envio seguro de fotos de documentos e assinatura eletrônica pelo próprio celular.",
  },
  {
    question: "Quais documentos preciso enviar para a primeira análise do meu caso?",
    answer:
      "Para a primeira avaliação, basta nos enviar pelo WhatsApp fotos do seu RG ou CNH, comprovante de residência, sua Carteira de Trabalho (física ou digital), e caso possua, a Carta de Indeferimento do INSS ou extrato do Meu INSS (CNIS). Se a sua causa for por motivo de saúde ou invalidez, tenha em mãos laudos médicos, exames e receitas atualizadas.",
  },
  {
    question: "Se a FRB Advogados entrar com ação judicial contra o INSS, eu recebo os valores atrasados?",
    answer:
      "Sim! Sempre que o benefício é concedido pela via judicial, o INSS é obrigado por lei a pagar todos os valores acumulados (atrasados) corrigidos monetariamente desde o dia em que você deu entrada no primeiro requerimento administrativo até a data da efetiva liberação dos pagamentos.",
  },
  {
    question: "Trabalhei na roça (lavoura/rural) na infância ou juventude. Esse tempo conta para a minha aposentadoria?",
    answer:
      "Sim, conta! O tempo de trabalho rural exercido em regime de economia familiar a partir dos 12 anos de idade pode ser reconhecido e somado ao seu tempo urbano para adiantar a sua aposentadoria ou aumentar consideravelmente o valor do benefício. Nossa equipe sabe exatamente como comprovar esse período por meio de certidões, declarações e documentos rurais antigos.",
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
          dark ? "text-white" : "text-[#0f172a]"
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
      <main className="min-h-screen bg-[#fbfaf8] text-[#0f172a] selection:bg-[#caa24d] selection:text-[#0c0f17]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (REFINED SLATE NOIR FRAME)          */}
        {/* ======================================================== */}
        <div className="border-b border-slate-800 bg-[#0c0f17] py-2 text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d4af37] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#caa24d]" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                FRB ADVOGADOS · Causas Contra o INSS · 10 Escritórios em MG ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#caa24d] text-[#caa24d]" />
                <span className="font-bold text-white">5,0 ★</span> (14 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Gostaria de consultar sobre o meu caso contra o INSS.")}
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
        {/* STICKY HEADER / NAVBAR (LIGHT EDITORIAL LUXURY)          */}
        {/* ======================================================== */}
        <header
          className={`sticky top-0 z-40 w-full transition-all duration-300 ${
            scrolled
              ? "border-b border-slate-200/90 bg-white/95 py-3 shadow-md backdrop-blur-md"
              : "border-b border-slate-200/60 bg-white/90 py-3.5 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Left: Brand Logo */}
            <a
              href="#"
              className="group flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95"
              aria-label="FRB Advogados — Causas Contra o INSS - Início"
            >
              <div className="relative shrink-0">
                <Image
                  src={LOGO_EMBLEM_SRC}
                  alt="Brasão FRB Advogados"
                  width={140}
                  height={110}
                  className="h-11 sm:h-12 md:h-13 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-cinzel text-sm sm:text-base md:text-[1.1rem] font-bold tracking-[0.08em] text-[#0f172a] uppercase leading-none drop-shadow-xs transition-colors group-hover:text-[#936937]">
                  FRB ADVOGADOS
                </span>
                <span className="font-cinzel text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#936937] uppercase leading-tight mt-0.5">
                  Advocacia & Assessoria Jurídica
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-px w-4 sm:w-5 bg-gradient-to-r from-[#caa24d] to-transparent" />
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase leading-none">
                    Causas Contra o INSS · 10 Unidades em MG
                  </span>
                </div>
              </div>
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden items-center gap-5 xl:gap-7 xl:flex">
              <a href="#inss" className="nav-link text-[11px] whitespace-nowrap">
                Causas do INSS
              </a>
              <a href="#sobre" className="nav-link text-[11px] whitespace-nowrap">
                Sobre a FRB
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
                Sedes & Contato
              </a>
            </nav>

            {/* Right Action: WhatsApp CTA */}
            <div className="flex shrink-0 items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Gostaria de consultar sobre o meu benefício do INSS.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#0c0f17]" />
                <span className="hidden 2xl:inline">Atendimento WhatsApp</span>
                <span className="2xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 transition-colors hover:border-[#caa24d] hover:text-black xl:hidden cursor-pointer"
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
                      alt="Brasão FRB Advogados"
                      width={100}
                      height={80}
                      className="h-11 w-auto object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-cinzel text-base font-bold tracking-wider text-slate-900 uppercase leading-tight">
                        FRB Advogados
                      </span>
                      <span className="font-cinzel text-[10px] font-semibold tracking-[0.14em] text-[#936937] uppercase leading-tight mt-0.5">
                        Causas Contra o INSS
                      </span>
                      <span className="text-[9px] font-bold tracking-[0.18em] text-slate-500 uppercase mt-1">
                        10 Escritórios em MG
                      </span>
                    </div>
                  </div>
                  <a
                    href="#inss"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#936937]"
                  >
                    <span>Causas do INSS & Benefícios</span>
                    <ArrowRight size={14} className="text-[#caa24d]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#936937]"
                  >
                    <span>Sobre o Escritório & Dr. Filipe</span>
                    <ArrowRight size={14} className="text-[#caa24d]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#936937]"
                  >
                    <span>Diferenciais</span>
                    <ArrowRight size={14} className="text-[#caa24d]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#936937]"
                  >
                    <span>Avaliações Google (5,0 ★)</span>
                    <ArrowRight size={14} className="text-[#caa24d]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#936937]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#caa24d]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#936937]"
                  >
                    <span>Sedes & Contato</span>
                    <ArrowRight size={14} className="text-[#caa24d]" />
                  </a>

                  <div className="pt-4 border-t border-slate-100">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Gostaria de consultar sobre a minha causa contra o INSS.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com o Dr. Filipe</span>
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
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fbfaf8]">
          {/* Subtle Ambient Light Glow Background */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#edd585]/20 via-[#f6f3ed]/60 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#f3ece0]/70 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#caa24d]/35 bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#936937] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#caa24d] animate-pulse" />
                    FRB ADVOGADOS · CAUSAS CONTRA O INSS · 10 ESCRITÓRIOS EM MG
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.15] font-bold tracking-tight text-[#0f172a] sm:text-5xl lg:text-[3.25rem]"
                >
                  Teve seu Benefício Negado pelo INSS? Conquiste a{" "}
                  <span className="bg-gradient-to-r from-[#936937] via-[#caa24d] to-[#7a5426] bg-clip-text text-transparent">
                    sua Aposentadoria
                  </span>{" "}
                  com Quem Já Aprovou Centenas de Casos.
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  Com nota máxima <strong className="text-slate-900 font-bold">5,0 ★ no Google</strong> e <strong className="text-slate-900 font-bold">10 escritórios físicos de portas abertas em Minas Gerais</strong>, a <strong className="text-slate-900 font-bold">FRB Advogados</strong> — liderada pelo <strong className="text-slate-900 font-bold">Dr. Filipe Rabelo Braga</strong> — é autoridade em reverter negativas do INSS, calcular o valor máximo do benefício e garantir seus direitos previdenciários de forma ágil e humanizada.
                </motion.p>

                {/* Direct Trust Highlights */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs"
                >
                  <Award size={20} className="text-[#caa24d] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 font-bold">Aposentando pessoas todos os dias 🚀🇧🇷:</strong> &ldquo;Este escritório se destaca pela excelência, organização e compromisso com qualidade. Oferecendo soluções eficientes e um atendimento atencioso.&rdquo; (Google Reviews 5,0 ★)
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Gostaria de consultar sobre a minha situação com o INSS.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Destravar Meu Benefício no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#inss"
                    variant="champagne"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conhecer Benefícios Atendidos</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Visual Frame (Dr. Filipe Rabelo portrait) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Frame */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#e2d9cc] bg-white p-2.5 shadow-2xl shadow-slate-300/60">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Filipe Rabelo Braga - Advogado Previdenciário em Capelinha - MG · FRB Advogados"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-slate-200/80 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-slate-900">
                            Dr. Filipe Rabelo Braga
                          </p>
                          <p className="text-[11px] text-slate-600">
                            Advogado Previdenciário · Fundador FRB Advogados
                          </p>
                        </div>
                        <span className="rounded-md border border-[#caa24d]/40 bg-[#fdfaf3] px-2.5 py-1 text-[10px] font-bold text-[#936937]">
                          10 Unidades em MG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 5.0 Rating) */}
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
                            className="fill-[#caa24d] text-[#caa24d]"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-slate-900 mt-0.5">
                        5,0 no Google · 14 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Especialidade) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <Scale size={16} className="text-[#936937]" />
                    <span className="text-xs font-bold tracking-wide text-slate-900">
                      Causas Contra o INSS ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN HERO (LIGHT) */}
            <div className="mt-14 border-t border-slate-200/80 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#0f172a]">
                    5,0 ★
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-slate-500">14 avaliações unânimes 5 estrelas</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#0f172a]">
                    10 Sedes
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Presença em Minas Gerais</p>
                  <p className="text-[11px] text-slate-500">Escritórios de portas abertas</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#0f172a]">
                    Especialistas
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Direito Previdenciário</p>
                  <p className="text-[11px] text-slate-500">Foco integral em causas do INSS</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#0f172a]">
                    Diário 🚀
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Aposentando Pessoas</p>
                  <p className="text-[11px] text-slate-500">Atendimento presencial & online</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: PILARES & ÁREAS PREVIDENCIÁRIAS — [MODO ESCURO] */}
        {/* ======================================================== */}
        <section id="inss" className="border-t border-[#caa24d]/30 bg-[#0c0f17] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="Especialidades & Causas do INSS"
                dark={true}
                description="Atuação previdenciária experiente para aprovar a sua aposentadoria com o maior valor, destravar benefícios negados e receber todos os atrasados."
              >
                Causas Previdenciárias & Benefícios do INSS
              </Heading>

              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Filipe! Gostaria de consultar sobre a minha situação no INSS.")}
                target="_blank"
                variant="gold"
                size="md"
              >
                <WhatsAppIcon size={15} />
                <span>Consultar Meu Caso no INSS</span>
              </GlowingButton>
            </div>

            {/* Practice Areas Grid */}
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#caa24d]/30 bg-[#131824] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#caa24d] hover:shadow-xl hover:shadow-[#caa24d]/10"
                  >
                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#181e2b] text-[#caa24d] border border-[#caa24d]/40 transition-colors group-hover:bg-[#caa24d] group-hover:text-[#0c0f17]">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#181e2b] px-3 py-1 text-[10px] font-bold text-[#caa24d] uppercase tracking-wider border border-[#caa24d]/30">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white group-hover:text-[#f5e49e] transition-colors">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#caa24d]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-slate-300">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#caa24d]/25 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex w-full items-center justify-between text-xs font-bold text-[#caa24d] transition-colors hover:text-white cursor-pointer"
                      >
                        <span>Ver Detalhes & Regras de Concessão</span>
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
        {/* DOBRA 3: SOBRE O ESCRITÓRIO & DR. FILIPE — [MODO CLARO]  */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-slate-200 bg-[#f8f6f0] py-20 lg:py-28 text-[#0f172a]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Dr. Filipe Rabelo Portrait */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Frame */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#e2d9cc] bg-white p-2.5 shadow-2xl shadow-slate-300/60">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Filipe Rabelo Braga - FRB Advogados Previdenciário"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

                      {/* Overlay Badge at Bottom of Photo */}
                      <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-serif text-sm font-bold text-slate-900">
                              Dr. Filipe Rabelo Braga
                            </p>
                            <p className="text-[11px] text-slate-600 mt-0.5">
                              Advogado Especialista em Causas do INSS
                            </p>
                          </div>
                          <span className="rounded-md border border-[#caa24d]/40 bg-[#fdfaf3] px-2.5 py-1 text-[10px] font-bold text-[#936937]">
                            Fundador
                          </span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-600">
                          <span>Aposentando Pessoas Todos os Dias</span>
                          <span className="text-[#1ea952] font-semibold">10 Unidades em MG</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Pill */}
                  <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-xl">
                    <Star size={13} className="fill-[#caa24d] text-[#caa24d]" />
                    <span className="text-[11px] font-bold text-slate-900">
                      5,0 no Google · 14 Avaliações
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre o Fundador & O Escritório"
                  dark={false}
                  description="Advocacia previdenciária de excelência, pautada no respeito à história do trabalhador e no compromisso inegociável de garantir o que é seu por direito."
                >
                  FRB Advogados: Aposentando Pessoas Todos os Dias 🚀🇧🇷
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                  <p>
                    Fundada e liderada pelo <strong className="text-slate-900 font-bold">Dr. Filipe Rabelo Braga</strong>, a <strong className="text-slate-900 font-bold">FRB Advogados — Advocacia & Assessoria Jurídica</strong> construiu uma trajetória sólida e respeitada em Minas Gerais, tornando-se uma das principais referências regionais em <strong className="text-slate-900 font-bold">Causas contra o INSS</strong> e planejamento de aposentadorias.
                  </p>
                  <p>
                    Com sede principal no coração de <strong className="text-slate-900 font-bold">Capelinha - MG</strong> (Rua Governador Valadares, 213 - Centro), unidade em <strong className="text-slate-900 font-bold">Santa Maria do Suaçuí</strong> e uma rede de <strong className="text-slate-900 font-bold">10 escritórios físicos de portas abertas</strong> em municípios mineiros, o escritório combina a segurança do atendimento presencial com a rapidez e alcance da assessoria digital para clientes de todo o Brasil.
                  </p>
                  <p>
                    A missão da FRB Advogados é simples e transparente: devolver a dignidade e a tranquilidade a quem trabalhou a vida inteira. Tratamos cada caso com rigor matemático nos cálculos, acolhimento humano e dedicação total, desmistificando o juridiquês e lutando para que você receba até o último centavo dos seus atrasados.
                  </p>
                </div>

                {/* 4 Highlights */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <HeartHandshake size={20} className="text-[#caa24d] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Atendimento Super Educado
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Reconhecido pelos clientes por ouvir com paciência e orientar com clareza cada detalhe.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <BadgeCheck size={20} className="text-[#caa24d] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Especialização Exclusiva no INSS
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Domínio absoluto das regras pós-Reforma, perícias médicas e jurisprudência dos tribunais.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <Building2 size={20} className="text-[#caa24d] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        10 Escritórios de Portas Abertas
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Presença física real em Minas Gerais para você tomar um café e conversar olho no olho.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <Sparkles size={20} className="text-[#caa24d] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Cálculo do Valor Máximo
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Simulação e busca incansável pela regra que garanta a maior renda mensal possível.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Gostaria de conversar com você sobre a minha causa do INSS.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com o Dr. Filipe Rabelo</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 transition-colors hover:text-[#936937]"
                  >
                    <InstagramIcon size={15} />
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>

                  <a
                    href={FOUNDER_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#936937] transition-colors hover:text-black"
                  >
                    <InstagramIcon size={15} />
                    <span>Fundador: {FOUNDER_INSTAGRAM_HANDLE}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 4: DIFERENCIAIS — [MODO ESCURO]                    */}
        {/* ======================================================== */}
        <section id="diferenciais" className="border-t border-[#caa24d]/30 bg-[#080a0f] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow-dark justify-center mb-3">
                Por que Escolher a FRB Advogados
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                O Padrão de Confiança com Nota Máxima 5,0 ★ no Google
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Qualidades comprovadas por segurados e famílias que conquistaram seus benefícios e tiveram seus direitos restabelecidos com serenidade.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#caa24d]/30 bg-[#121622] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#caa24d]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#181e2b] text-[#caa24d] border border-[#caa24d]/40">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Excelência & Organização
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Processos organizados, documentação completa e acompanhamento minucioso em cada fase administrativa e judicial.
                </p>
              </div>

              <div className="rounded-2xl border border-[#caa24d]/30 bg-[#121622] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#caa24d]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#181e2b] text-[#caa24d] border border-[#caa24d]/40">
                  <Heart size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Atendimento Super Educado
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Equipe atenciosa e acessível que atende cada pessoa com respeito, paciência e sem complicação.
                </p>
              </div>

              <div className="rounded-2xl border border-[#caa24d]/30 bg-[#121622] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#caa24d]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#181e2b] text-[#caa24d] border border-[#caa24d]/40">
                  <Coins size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Direito aos Atrasados
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Cobrança intransigente de todas as parcelas retroativas corrigidas desde o primeiro requerimento no INSS.
                </p>
              </div>

              <div className="rounded-2xl border border-[#caa24d]/30 bg-[#121622] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#caa24d]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#181e2b] text-[#caa24d] border border-[#caa24d]/40">
                  <Building2 size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  10 Unidades Físicas
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Segurança e solidez com escritórios presenciais em Minas Gerais e suporte digital ágil para todo o país.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dr. Filipe! Gostaria de esclarecer algumas dúvidas sobre o meu caso contra o INSS.")}
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
        <section id="depoimentos" className="border-t border-slate-200 bg-[#fbfaf8] py-20 lg:py-28 text-[#0f172a]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="eyebrow mb-3.5">
                  Avaliações Verificadas no Google
                </span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                  A Opinião de Quem Confia na FRB Advogados
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#caa24d] text-[#caa24d]"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">5,0 de 5,0</span>
                  <span className="text-xs text-slate-500">
                    · 14 avaliações unânimes cinco estrelas no Google Meu Negócio
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xs transition-colors hover:border-[#caa24d] hover:bg-slate-50"
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
                  className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#caa24d] hover:shadow-md"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#caa24d] text-[#caa24d]"
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
                    <p className="text-[10px] text-[#936937] font-semibold">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#e2d9cc] bg-[#f5f2eb] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-slate-900 sm:text-xl">
                Precisa de orientação jurídica segura para o seu caso contra o INSS?
              </h3>
              <p className="mt-2 text-xs text-slate-600 max-w-xl mx-auto">
                Não enfrente o INSS sozinho ou desamparado. Conte com quem é especialista no assunto, possui 10 escritórios em Minas Gerais e luta pelo valor máximo do seu benefício.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Li as avaliações no site e gostaria de conversar com você sobre a minha causa no INSS.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com o Dr. Filipe Rabelo Agora no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO — [MODO ESCURO]     */}
        {/* ======================================================== */}
        <section className="border-t border-[#caa24d]/30 bg-[#0c0f17] text-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow-dark justify-center mb-3">
                Processo Transparente
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Como Funciona o Seu Atendimento
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Passo a passo simples, didático e acolhedor desde o primeiro contato até o recebimento do seu benefício e valores atrasados.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#caa24d]/30 bg-[#131824] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#caa24d]">
                <span className="font-serif text-3xl font-bold text-[#caa24d]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Contato no WhatsApp
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Envie sua dúvida ou foto da carta de negativa do INSS para receber a primeira orientação direta da nossa equipe especializada.
                </p>
              </div>

              <div className="rounded-2xl border border-[#caa24d]/30 bg-[#131824] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#caa24d]">
                <span className="font-serif text-3xl font-bold text-[#caa24d]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Análise Técnica do CNIS
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Avaliamos seu extrato de contribuições, laudos médicos e vínculos rurais para calcular a regra mais vantajosa para você.
                </p>
              </div>

              <div className="rounded-2xl border border-[#caa24d]/30 bg-[#131824] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#caa24d]">
                <span className="font-serif text-3xl font-bold text-[#caa24d]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Estratégia & Ação Judicial
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Ingressamos com a ação adequada na Justiça com pedido de liminar para liberação do pagamento mensal o mais rápido possível.
                </p>
              </div>

              <div className="rounded-2xl border border-[#caa24d]/30 bg-[#131824] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#caa24d]">
                <span className="font-serif text-3xl font-bold text-[#caa24d]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Concessão & Atrasados
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Você começa a receber seu benefício todo mês e recebe o montante total dos valores atrasados acumulados desde a entrada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ — [MODO CLARO]          */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-slate-200 bg-[#f8f6f0] py-20 lg:py-28 text-[#0f172a]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Respostas diretas e didáticas sobre causas contra o INSS, aposentadorias, reversão de negativas, auxílio-doença e BPC/LOAS.
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
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-slate-900 transition-colors hover:text-[#936937] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#caa24d]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#caa24d]" />
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
                  href={getWhatsAppUrl("Olá, Dr. Filipe! Gostaria de esclarecer uma dúvida que não encontrei no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0f172a] hover:text-[#936937] hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Pergunte diretamente ao Dr. Filipe Rabelo no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDES & CONTATO — [MODO ESCURO]    */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#caa24d]/30 bg-[#080a0f] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info */}
              <div className="lg:col-span-5">
                <span className="eyebrow-dark mb-3.5">Sedes & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Estamos Prontos para Atender Você
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Visite um de nossos escritórios presenciais em Minas Gerais ou realize sua consulta de forma 100% online com agilidade, sigilo e conforto pelo WhatsApp.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Sede Capelinha */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#caa24d]/35 bg-[#121622] text-[#caa24d]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Sede Principal — Capelinha / MG
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {ADDRESS_CAPELINHA}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#caa24d] font-semibold hover:underline block mt-1"
                      >
                        Ver localização no Google Maps de Capelinha →
                      </a>
                    </div>
                  </div>

                  {/* Unidade Santa Maria do Suaçuí */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#caa24d]/35 bg-[#121622] text-[#caa24d]">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Unidade Santa Maria do Suaçuí & Rede em MG
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {ADDRESS_SANTA_MARIA}
                      </p>
                      <p className="text-[11px] text-[#f5e49e] font-semibold mt-1">
                        📌 10 escritórios físicos de portas abertas em Minas Gerais.
                      </p>
                    </div>
                  </div>

                  {/* Telefone & WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#caa24d]/35 bg-[#121622] text-[#caa24d]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Telefone & WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Celular / WhatsApp: <strong className="text-white">{PHONE_DISPLAY}</strong>
                      </p>
                      <a
                        href={getWhatsAppUrl("Olá, Dr. Filipe! Gostaria de agendar um atendimento sobre minha causa no INSS.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#caa24d] hover:underline block mt-1"
                      >
                        Clique para enviar mensagem direta no WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Horário */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#caa24d]/35 bg-[#121622] text-[#caa24d]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Segunda a Sexta: 08:00 às 18:00
                      </p>
                      <p className="text-[11px] text-[#caa24d]">
                        Atendimento ágil pelo WhatsApp para dúvidas urgentes.
                      </p>
                    </div>
                  </div>

                  {/* Redes Sociais */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#caa24d]/35 bg-[#121622] text-[#caa24d]">
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
                          href={FOUNDER_INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-white"
                        >
                          Dr. Filipe Rabelo: <span className="font-bold text-white">{FOUNDER_INSTAGRAM_HANDLE}</span>
                        </a>
                        <a
                          href={GOOGLE_SEARCH_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#caa24d] hover:underline"
                        >
                          Perfil Google: FRB Advogados / Causas contra o INSS (5,0 ★)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#caa24d]/35 bg-[#121622] p-8 shadow-xl shadow-black/60">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#caa24d]">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                    Inicie seu Atendimento com a FRB Advogados
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Selecione a situação do seu benefício para ser direcionado(a) com a mensagem adequada ao WhatsApp oficial:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! O INSS negou ou cancelou o meu benefício e preciso de ajuda.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#181e2b] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#caa24d] hover:text-white"
                    >
                      <span>Benefício Negado ou Cancelado</span>
                      <ArrowRight size={14} className="text-[#caa24d]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Gostaria de consultar sobre a minha Aposentadoria (Idade, Tempo ou Rural).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#181e2b] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#caa24d] hover:text-white"
                    >
                      <span>Aposentadorias do INSS</span>
                      <ArrowRight size={14} className="text-[#caa24d]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Estou com problema de saúde e preciso de Auxílio-Doença ou Invalidez.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#181e2b] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#caa24d] hover:text-white"
                    >
                      <span>Auxílio-Doença & Invalidez</span>
                      <ArrowRight size={14} className="text-[#caa24d]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Gostaria de orientações sobre o BPC / LOAS para idoso ou pessoa com deficiência.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#181e2b] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#caa24d] hover:text-white"
                    >
                      <span>BPC / LOAS (Idoso e PCD)</span>
                      <ArrowRight size={14} className="text-[#caa24d]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Gostaria de orientações sobre Pensão por Morte do INSS.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#181e2b] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#caa24d] hover:text-white"
                    >
                      <span>Pensão por Morte</span>
                      <ArrowRight size={14} className="text-[#caa24d]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Gostaria de fazer o Planejamento da minha Aposentadoria ou Revisão de Valor.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#181e2b] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#caa24d] hover:text-white"
                    >
                      <span>Revisão & Planejamento</span>
                      <ArrowRight size={14} className="text-[#caa24d]" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-slate-700/60 pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dr. Filipe Rabelo! Gostaria de conversar com você sobre a minha causa do INSS.")}
                      target="_blank"
                      variant="gold"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com o Dr. Filipe Rabelo</span>
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
        <footer className="border-t border-[#caa24d]/25 bg-[#05070a] pt-16 pb-12 text-slate-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="FRB Advogados — Advocacia & Assessoria Jurídica"
                    width={420}
                    height={140}
                    className="h-14 sm:h-16 md:h-18 w-auto max-w-[280px] sm:max-w-[340px] object-contain object-left drop-shadow-md"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-md">
                  ⚖️ FRB Advogados — Advocacia & Assessoria Jurídica. Especialistas em Causas Contra o INSS, aposentadorias, reversão de benefícios negados, auxílio-doença e BPC/LOAS. 10 escritórios de portas abertas em Minas Gerais e assessoria jurídica digital para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#0f1420] text-slate-300 transition-colors hover:border-[#caa24d] hover:text-white"
                    aria-label="Instagram da FRB Advogados"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dr. Filipe!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#0f1420] text-slate-300 transition-colors hover:border-[#caa24d] hover:text-white"
                    aria-label="WhatsApp da FRB Advogados"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#0f1420] text-slate-300 transition-colors hover:border-[#caa24d] hover:text-white"
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
                    <a href="#inss" className="footer-link">
                      Causas do INSS
                    </a>
                  </li>
                  <li>
                    <a href="#sobre" className="footer-link">
                      Sobre o Dr. Filipe & FRB
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
                      Sedes em Minas Gerais
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
                  Este website possui caráter estritamente informativo e institucional, em rigorosa observância ao Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não visa à captação indevida de clientela nem substitui consulta jurídica formal.
                </p>
                <div className="mt-4 rounded-lg border border-slate-800 bg-[#0f1420] p-3 text-[11px] text-slate-300">
                  <p className="font-bold text-white">
                    FRB ADVOGADOS / CAUSAS CONTRA O INSS
                  </p>
                  <p className="mt-0.5 text-[#caa24d]">
                    Sede: {ADDRESS_CAPELINHA}
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
                © {new Date().getFullYear()} FRB ADVOGADOS — ADVOCACIA & ASSESSORIA JURÍDICA. Todos os direitos reservados.
              </p>
              <p className="text-[#caa24d]">
                Capelinha · Santa Maria do Suaçuí · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá, Dr. Filipe! Gostaria de tirar uma dúvida sobre o meu benefício do INSS.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Filipe Rabelo"
            className="group flex items-center gap-2.5 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-black text-white shadow-xl shadow-black/60 transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
          >
            <WhatsAppIcon size={19} />
            <span className="hidden sm:inline tracking-wide font-bold">
              Falar com Dr. Filipe
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
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#caa24d]/55 bg-[#0c0f17] p-6 text-white shadow-2xl sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-[#121622] text-slate-300 hover:border-white hover:text-white cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2.5 text-xs font-bold text-[#caa24d] uppercase tracking-wider">
                  <Image
                    src={LOGO_EMBLEM_SRC}
                    alt="Brasão FRB Advogados"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                  <span>Especialidade Previdenciária</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {selectedPractice.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#caa24d]">
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
                          className="text-[#caa24d] shrink-0 mt-0.5"
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
                    <span>Consultar Dr. Filipe nesta Área</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setSelectedPractice(null)}
                    className="w-full rounded-lg border border-slate-700 bg-[#121622] px-5 py-3 text-xs font-bold text-slate-300 hover:bg-[#181e2b] hover:text-white sm:w-auto cursor-pointer"
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
