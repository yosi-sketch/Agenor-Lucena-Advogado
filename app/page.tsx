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
  Briefcase,
  Coins,
  Calculator,
  Gavel,
  Landmark,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5533987156234";
const PHONE_DISPLAY = "(33) 98715-6234";
const EMAIL_CONTACT = "contato@ferreiraebolleliadv.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/ferreiraebolleliadv/";
const INSTAGRAM_HANDLE = "@ferreiraebolleliadv";
const BEACONS_URL = "https://beacons.ai/ferreiraebolleliadv";

const ADDRESS_NANUQUE =
  "R. São Lourenço, 410 - Sl 03 - Centro, Nanuque - MG, 39860-000, Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Ferreira+e+Bolleli+Advogados%0ANanuque+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=10ab62e321bfdedb&sxsrf=AKL5yDiduCU6mus0lZYQdEx40BzKnNTBLg:1793194628850&q=ferreira+e+bolleli+advogados+%7C+advogado+em+nanuque+endere%C3%A7o&ludocid=14876295411396040823&sa=X&ved=2ahUKEwifxfXG6tyXAxWbLrkGHSCwMZEQ6BN6BAg4EAI";

const LOGO_SRC = "/logo.png";
const LOGO_EMBLEM_SRC = "/emblema-fb.png";
const FOTO_HERO_SRC = "/equipe-ferreira-bolleli.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, equipe Ferreira e Bolleli Advogados! Gostaria de agendar uma consulta jurídica.";
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
    category: "Reclamatórias Trabalhistas · Rescisão Indireta · Horas Extras · Acidente de Trabalho · Defesa dos Direitos",
    icon: Briefcase,
    tag: "Defesa Combativa · Recuperação de Verbas · Casos Ganhos",
    summary:
      "Atuação firme e combativa na defesa de trabalhadores e empregadores, com foco na garantia integral de direitos, cálculo de verbas rescisórias, insalubridade e indenizações.",
    details:
      "Muitos trabalhadores sofrem com rescisões incorretas, horas extras não remuneradas, desvio de função ou condições degradantes sem saber como comprovar seus direitos perante a Justiça do Trabalho. Na Ferreira e Bolleli Advogados, ouvimos cada cliente com paciência e clareza, esclarecendo dúvidas processuais e montando uma estratégia probatória sólida para garantir a máxima reparação cabível.",
    topics: [
      "Reclamatórias trabalhistas para cobrança de horas extras, adicionais noturnos e intervalos intrajornada",
      "Rescisão indireta do contrato de trabalho por falta grave do empregador ou atraso de salários",
      "Cobrança de verbas rescisórias, saldo de salário, aviso prévio, férias proporcionais e multa do FGTS (40%)",
      "Indenizações por acidente de trabalho, doença ocupacional, perda de capacidade laborativa e danos morais",
      "Reconhecimento de vínculo de emprego sem carteira assinada e anotação retroativa em CTPS",
      "Adicional de insalubridade e periculosidade para trabalhadores em condições nocivas à saúde",
    ],
    whatsAppText:
      "Olá, equipe Ferreira e Bolleli Advogados! Gostaria de consultar sobre os meus direitos em uma questão trabalhista.",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & Benefícios do INSS",
    category: "Aposentadorias · Reversão de Benefício Negado · Auxílio-Doença & Invalidez · BPC/LOAS · Atrasados",
    icon: Scale,
    tag: "Cálculo do Maior Valor · Reversão Judicial · Pagamento de Atrasados",
    summary:
      "Planejamento previdenciário e ações contra o INSS para reverter negativas, conceder aposentadorias pelas melhores regras e garantir o pagamento retroativo de todos os atrasados.",
    details:
      "Ter o benefício negado ou suspenso pelo INSS é uma situação angustiante que desampara o segurado no momento em que ele mais precisa. O escritório Ferreira e Bolleli Advogados analisa minuciosamente o extrato do CNIS, laudos médicos e histórico laboral, ingressando com a ação judicial cabível com pedido de liminar e perícia especializada para restabelecer seus pagamentos.",
    topics: [
      "Aposentadoria por Idade Urbana, Híbrida e Rural para trabalhadores da lavoura e produtores",
      "Aposentadoria por Tempo de Contribuição e aplicação das melhores regras de transição pós-Reforma",
      "Aposentadoria Especial para profissionais expostos a agentes nocivos, químicos e ruído excessivo",
      "Reversão na Justiça de benefícios negados, cancelados ou cortados no 'pente-fino' do INSS",
      "Auxílio por Incapacidade Temporária (auxílio-doença) e conversão em Aposentadoria por Invalidez",
      "BPC/LOAS no valor de 1 salário mínimo para idosos a partir de 65 anos e pessoas com deficiência (PCD)",
    ],
    whatsAppText:
      "Olá, equipe Ferreira e Bolleli Advogados! Preciso de auxílio com meu benefício / aposentadoria no INSS.",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível, Contratos & Indenizações",
    category: "Reparação de Danos Morais e Materiais · Cobranças · Ações Possessórias · Disputas Imobiliárias",
    icon: Shield,
    tag: "Segurança Jurídica · Resolução de Conflitos · Proteção Patrimonial",
    summary:
      "Proteção eficaz em controvérsias patrimoniais, cobranças de créditos, litígios contratuais, disputas sobre bens imóveis e ações indenizatórias de alta complexidade.",
    details:
      "Relações contratuais mal elaboradas ou descumpridas geram prejuízos severos. O escritório atua tanto na esfera preventiva, mediante confecção e revisão de contratos robustos, quanto no contencioso cível combativo, pleiteando indenizações justas por danos materiais, perdas e danos e ofensas morais perante o Poder Judiciário.",
    topics: [
      "Ações indenizatórias por danos morais, materiais e lucros cessantes decorrentes de atos ilícitos",
      "Cobrança e execução de títulos judiciais e extrajudiciais (cheques, notas promissórias e contratos)",
      "Ações possessórias: reintegração de posse, manutenção de posse, interdito proibitório e usucapião",
      "Assessoria em transações imobiliárias, rescisão de compromissos de compra e venda e regularização de imóveis",
      "Resolução de conflitos contratuais entre pessoas físicas, prestadores de serviços e empresas",
      "Defesa dos direitos de posse e propriedade rural e urbana em Nanuque e região",
    ],
    whatsAppText:
      "Olá, equipe Ferreira e Bolleli Advogados! Gostaria de consultar sobre uma questão cível / contratual / indenizatória.",
  },
  {
    id: "direito-familia-sucessoes",
    title: "Direito de Família & Sucessões (Inventários)",
    category: "Inventário Judicial e Extrajudicial · Divórcio · Partilha de Bens · Pensão Alimentícia · Guarda",
    icon: Users,
    tag: "Sensibilidade & Firmeza · Agilidade em Cartório · Partilha Segura",
    summary:
      "Condução humanizada, discreta e segura de inventários, partilhas e dissoluções conjugais, protegendo o patrimônio familiar e os interesses dos herdeiros.",
    details:
      "Momentos de luto ou de separação exigem suporte jurídico sereno e experiente para evitar desgastes emocionais desnecessários e prejuízos na partilha do patrimônio. Atuamos com extrema agilidade em inventários extrajudiciais em cartório quando há consenso, além de prestar defesa técnica em inventários judiciais complexos e disputas familiares.",
    topics: [
      "Inventário Extrajudicial em Cartório: procedimento rápido e econômico para partilha de herança consensual",
      "Inventário Judicial e arrolamento de bens em casos com herdeiros menores ou divergências na partilha",
      "Divórcio Consensual e Litigioso, com definição equilibrada de partilha patrimonial e regime de bens",
      "Ações de Fixação, Revisão e Execução de Pensão Alimentícia para filhos menores e dependentes",
      "Definição de Guarda Compartilhada, regime de convivência e regulamentação de visitas",
      "Planejamento Sucessório preventivo e doação de bens com reserva de usufruto",
    ],
    whatsAppText:
      "Olá, equipe Ferreira e Bolleli Advogados! Gostaria de orientações sobre Inventário / Direito de Família.",
  },
  {
    id: "direito-consumidor-bancario",
    title: "Direito do Consumidor & Defesa Bancária",
    category: "Juros Abusivos · Fraudes Bancárias · Empréstimos Consignados Indevidos · Negativação Injusta",
    icon: Landmark,
    tag: "Limpeza de Nome · Cancelamento de Dívidas Fraudentas · Indenização",
    summary:
      "Combate a abusos cometidos por instituições financeiras, concessionárias e fornecedores, com cancelamento de cobranças indevidas e reparação financeira.",
    details:
      "Golpes eletrônicos, contratações de empréstimos consignados fraudulentos em contas de aposentados e inclusões indevidas no SPC e Serasa são frequentes. Nossa equipe ingressa com ações rápidas solicitando a suspensão dos descontos, exclusão do nome dos cadastros de restrição ao crédito e reparação em dinheiro pelos danos sofridos.",
    topics: [
      "Cancelamento de empréstimos consignados não autorizados e devolução em dobro dos valores descontados",
      "Ações contra golpes do Pix, boletos falsos e clonagem de dados bancários",
      "Retirada de negativação indevida nos órgãos de proteção ao crédito (SPC, Serasa e Boa Vista)",
      "Indenização por danos morais decorrentes de cobrança vexatória ou negativação injusta",
      "Ações revisionais de cláusulas e juros abusivos em contratos bancários e de financiamento veicular",
      "Reparação por falhas na prestação de serviços de telefonia, energia elétrica, internet e companhias aéreas",
    ],
    whatsAppText:
      "Olá, equipe Ferreira e Bolleli Advogados! Preciso de ajuda contra uma cobrança indevida / golpe bancário / negativação.",
  },
  {
    id: "assessoria-empresarial-rural",
    title: "Assessoria Jurídica Estratégica & Agronegócio",
    category: "Contratos Agrários · Arrendamentos · Prevenção de Passivos · Consultoria Contratual · Cobrança",
    icon: Gavel,
    tag: "Visão Empresarial · Apoio ao Produtor · Resolução Ágil de Conflitos",
    summary:
      "Suporte preventivo e contencioso sob medida para comerciantes, prestadores de serviços, produtores rurais e empresas que demandam segurança jurídica contínua.",
    details:
      "Operar no comércio ou no campo requer assessoria qualificada para mitigar riscos trabalhistas, validar negócios com garantia real e executar títulos inadimplidos sem morosidade. Ferreira e Bolleli Advogados presta suporte estratégico focado em viabilizar negócios seguros e proteger o caixa da sua atividade.",
    topics: [
      "Elaboração e revisão de contratos de arrendamento rural, parceria agrícola e compra e venda de safras",
      "Assessoria preventiva trabalhista para redução de passivos e adequação de rotinas operacionais",
      "Recuperação de créditos inadimplidos, negociação extrajudicial e execuções judiciais de dívidas",
      "Defesa técnica em autuações administrativas e fiscais de órgãos de fiscalização",
      "Estruturação societária, acordos de sócios e proteção patrimonial de empresas familiares",
      "Representação combativa em audiências de conciliação, mediação e julgamentos no Vale do Mucuri",
    ],
    whatsAppText:
      "Olá, equipe Ferreira e Bolleli Advogados! Gostaria de conversar sobre assessoria jurídica para minha empresa / atividade rural.",
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
    name: "Wallace Gustavo",
    badge: "7 avaliações · 9 fotos · 5 Estrelas",
    date: "Avaliação Verificada no Google · 4 anos atrás",
    highlight:
      "Muito receptivos e pacientes, me auxiliaram em um processo trabalhista a uns anos, explicaram todas as minhas dúvidas processuais na época o que me deu confiança para continuar e ganhar tal processo.",
    content:
      "Muito receptivos e pacientes, me auxiliar em um processo trabalhista a uns anos, explico todas as minhas dúvidas processuais na época o que me deu confiança para continuar e ganhar tal processo tempos depois. Meus eternos agradecimentos a todos os doutores da equipe.",
  },
  {
    name: "Gustavo Ferreira",
    badge: "Local Guide · 10 avaliações · 5 Estrelas",
    date: "Avaliação Verificada no Google · 4 anos atrás",
    highlight:
      "Resolutividade, competência e um atendimento incrível. Gratidão 🤍",
    content:
      "Resolutividade, competência e um atendimento incrível. Gratidão 🤍",
  },
  {
    name: "Felipe Natan",
    badge: "Local Guide · 12 avaliações · 83 fotos · 5 Estrelas",
    date: "Avaliação Verificada no Google · 4 anos atrás",
    highlight:
      "Tem um ótimo atendimento, altamente capacitados, grande ética profissional e são objetivos.",
    content:
      "Tem um ótimo atendimento, altamente capacitados, grande ética profissional e são objetivos.",
  },
  {
    name: "Anna Christina",
    badge: "4 avaliações · 7 fotos · 5 Estrelas",
    date: "Avaliação Verificada no Google · 2 anos atrás",
    highlight:
      "Até o momento estamos satisfeitos com toda disponibilidade e atendimento dos senhores. O nosso processo continua em andamento e esperamos ter sucesso neste caso.",
    content:
      "Até o momento estamos satisfeitos com toda disponibilidade e atendimento doa senhores. O nosso processo continua em andamento e esperamos ter sucesso neste caso.",
  },
  {
    name: "Eliene Alves",
    badge: "1 avaliação · 5 Estrelas",
    date: "Avaliação Verificada no Google · 2 anos atrás",
    highlight:
      "Muito eficiente, prestativo e educado.",
    content:
      "Muito enficiente, prestativo e educado.",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Como funciona a consulta jurídica inicial com a Ferreira e Bolleli Advogados?",
    answer:
      "O primeiro contato pode ser feito diretamente pelo WhatsApp ou presencialmente em nossa sede no Centro de Nanuque (Rua São Lourenço, 410, Sala 03). Nossa equipe realiza uma triagem atenta do seu caso, compreende os fatos relatados, confere os documentos disponíveis e orienta com total transparência se há viabilidade jurídica para ingresso judicial ou acordo extrajudicial.",
  },
  {
    question: "Tive problemas no trabalho ou fui demitido sem receber meus direitos. O que devo fazer?",
    answer:
      "É fundamental agir rápido e guardar todos os comprovantes: extratos bancários, conversas de WhatsApp, contracheques, fotos e contatos de testemunhas. A lei trabalhista estabelece o prazo de até 2 anos após o término do vínculo de emprego para ingressar com a ação. Conforme comprovado por clientes reais como Wallace Gustavo em nossas avaliações, explicamos cada etapa processual com calma e montamos a estratégia para buscar a vitória na causa.",
  },
  {
    question: "O INSS negou ou cancelou minha aposentadoria/auxílio. Ainda posso reverter na Justiça?",
    answer:
      "Com certeza! As negativas administrativas do INSS são recorrentes por equívocos na conferência de vínculos ou perícias superficiais. Ter o pedido negado na agência não encerra o seu direito. Ingressamos com a competente ação perante a Justiça Federal, onde um perito judicial neutro avaliará sua condição e o juiz poderá determinar o pagamento retroativo de todos os valores atrasados acumulados desde a data da entrada.",
  },
  {
    question: "Como funciona o inventário de bens da família e quanto tempo leva?",
    answer:
      "Quando há consenso entre todos os herdeiros e não há menores de idade, o inventário pode ser realizado de forma extrajudicial diretamente no Cartório de Notas de Nanuque, concluindo-se em semanas ou poucos meses com custos reduzidos. Havendo divergência ou herdeiro incapaz, ingressamos com o inventário judicial, zelando pela correta avaliação dos bens e partilha justa.",
  },
  {
    question: "Quais são os horários de funcionamento do escritório em Nanuque?",
    answer:
      "Nosso escritório em Nanuque funciona de segunda a sexta-feira, das 08:00 às 11:30 e das 13:30 às 18:00. Pelo WhatsApp oficial (33) 98715-6234, nosso canal de triagem permanece aberto para agendamentos rápidos e envio de mensagens a qualquer momento.",
  },
  {
    question: "Qual o endereço da sede em Nanuque e como posso agendar um horário presencial?",
    answer:
      "Nossa sede está localizada na Rua São Lourenço, 410 - Sala 03 - Centro, Nanuque - MG, 39860-000, próximo aos principais pontos comerciais e órgãos públicos da cidade. Você pode nos fazer uma visita ou agendar seu horário com antecedência pelo WhatsApp para garantir atendimento com hora marcada.",
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
          dark ? "text-white" : "text-[#071126]"
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
      <main className="min-h-screen bg-[#fbfbf9] text-[#071126] selection:bg-[#e5b448] selection:text-[#040914]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (ROYAL MIDNIGHT WITH GOLD ACCENT)   */}
        {/* ======================================================== */}
        <div className="border-b border-[#102859] bg-[#071126] py-2 text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#fad771] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#e5b448]" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                FERREIRA & BOLLELI ADVOGADOS · Nanuque - MG · Advocacia Especializada ⚖️
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Star size={12} className="fill-[#e5b448] text-[#e5b448]" />
                <span className="font-bold text-white">4,9 ★</span> (12 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, equipe Ferreira e Bolleli Advogados! Gostaria de consultar sobre o meu caso.")}
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
            {/* Left: Brand Logo */}
            <a
              href="#"
              className="group flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95"
              aria-label="Ferreira e Bolleli Advogados - Início"
            >
              <div className="relative shrink-0">
                <Image
                  src={LOGO_EMBLEM_SRC}
                  alt="Emblema FB - Ferreira e Bolleli Advogados"
                  width={140}
                  height={110}
                  className="h-11 sm:h-12 md:h-13 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-cinzel text-sm sm:text-base md:text-[1.12rem] font-bold tracking-[0.08em] text-[#071126] uppercase leading-none drop-shadow-xs transition-colors group-hover:text-[#946b23]">
                  FERREIRA & BOLLELI
                </span>
                <span className="font-cinzel text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] text-[#946b23] uppercase leading-tight mt-0.5">
                  ADVOGADOS ASSOCIADOS
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-px w-4 sm:w-5 bg-gradient-to-r from-[#e5b448] to-transparent" />
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase leading-none">
                    Nanuque - MG · Avaliação 4,9 ★
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
                Sobre o Escritório
              </a>
              <a href="#diferenciais" className="nav-link text-[11px] whitespace-nowrap">
                Diferenciais
              </a>
              <a href="#depoimentos" className="nav-link text-[11px] whitespace-nowrap">
                Avaliações (4,9 ★)
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
                href={getWhatsAppUrl("Olá! Gostaria de consultar um advogado da Ferreira e Bolleli Advogados.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#040914]" />
                <span className="hidden 2xl:inline">Atendimento WhatsApp</span>
                <span className="2xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 transition-colors hover:border-[#e5b448] hover:text-black xl:hidden cursor-pointer"
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
                      alt="Emblema FB"
                      width={100}
                      height={80}
                      className="h-11 w-auto object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="font-cinzel text-base font-bold tracking-wider text-slate-900 uppercase leading-tight">
                        Ferreira & Bolleli
                      </span>
                      <span className="font-cinzel text-[10px] font-semibold tracking-[0.14em] text-[#946b23] uppercase leading-tight mt-0.5">
                        Advogados Associados
                      </span>
                      <span className="text-[9px] font-bold tracking-[0.18em] text-slate-500 uppercase mt-1">
                        R. São Lourenço, 410 · Centro, Nanuque
                      </span>
                    </div>
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#946b23]"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#e5b448]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#946b23]"
                  >
                    <span>Sobre o Escritório & Sócios</span>
                    <ArrowRight size={14} className="text-[#e5b448]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#946b23]"
                  >
                    <span>Diferenciais</span>
                    <ArrowRight size={14} className="text-[#e5b448]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#946b23]"
                  >
                    <span>Avaliações Google (4,9 ★)</span>
                    <ArrowRight size={14} className="text-[#e5b448]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#946b23]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#e5b448]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#946b23]"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-[#e5b448]" />
                  </a>

                  <div className="pt-4 border-t border-slate-100">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, equipe Ferreira e Bolleli Advogados! Gostaria de consultar sobre a minha causa.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com o Escritório</span>
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
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#fad771]/20 via-[#f4f3ee]/60 to-transparent blur-3xl" />
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
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#e5b448]/40 bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#946b23] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#e5b448] animate-pulse" />
                    FERREIRA & BOLLELI ADVOGADOS · NANUQUE - MG
                  </span>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.15] font-bold tracking-tight text-[#071126] sm:text-5xl lg:text-[3.25rem]"
                >
                  Advocacia Estratégica, Ética e Resolutiva para Defender Seus{" "}
                  <span className="bg-gradient-to-r from-[#946b23] via-[#e5b448] to-[#6c4a16] bg-clip-text text-transparent">
                    Direitos e Seu Patrimônio.
                  </span>
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  Com avaliação <strong className="text-slate-900 font-bold">4,9 ★ no Google</strong> e sede no Centro de Nanuque, a <strong className="text-slate-900 font-bold">Ferreira e Bolleli Advogados</strong> alia tradição jurídica, dinamismo processual e atendimento humano nas áreas <strong className="text-slate-900 font-bold">Trabalhista, Previdenciária, Cível, Família e Empresarial</strong>.
                </motion.p>

                {/* Direct Trust Highlight with Real Client Review */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs"
                >
                  <Award size={20} className="text-[#e5b448] shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 font-bold">Reconhecimento comprovado no Google (4,9 ★):</strong> &ldquo;Muito receptivos e pacientes, me auxiliaram em um processo trabalhista... me deram confiança para continuar e ganhar tal processo. Meus eternos agradecimentos a todos os doutores da equipe.&rdquo; (Wallace Gustavo)
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de uma orientação jurídica com a Ferreira e Bolleli Advogados.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar no WhatsApp com o Escritório</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#servicos"
                    variant="champagne"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conhecer Áreas de Atuação</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Visual Frame (Equipe Foto) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Decorative Frame */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-2.5 shadow-2xl shadow-slate-300/60">
                    <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Corpo Jurídico Ferreira e Bolleli Advogados em Nanuque - MG"
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040914]/70 via-transparent to-transparent opacity-70" />
                    </div>

                    {/* Overlay Label */}
                    <div className="absolute right-5 bottom-5 left-5 rounded-xl border border-slate-200/80 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-bold text-slate-900">
                            Ferreira & Bolleli Advogados
                          </p>
                          <p className="text-[11px] text-slate-600">
                            Advocacia Especializada · Centro, Nanuque - MG
                          </p>
                        </div>
                        <span className="rounded-md border border-[#e5b448]/40 bg-[#fdfaf3] px-2.5 py-1 text-[10px] font-bold text-[#946b23]">
                          Sede Própria
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stat Badge 1 (Google 4.9 Rating) */}
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
                            className="fill-[#e5b448] text-[#e5b448]"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-slate-900 mt-0.5">
                        4,9 no Google · 12 Avaliações
                      </p>
                    </div>
                  </div>

                  {/* Floating Stat Badge 2 (Especialidade) */}
                  <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2.5">
                    <Scale size={16} className="text-[#946b23]" />
                    <span className="text-xs font-bold tracking-wide text-slate-900">
                      Nanuque e Vale do Mucuri ⚖️
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INTEGRATED AUTHORITY BAR WITHIN HERO */}
            <div className="mt-14 border-t border-slate-200/80 pt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#071126]">
                    4,9 ★
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Google Meu Negócio</p>
                  <p className="text-[11px] text-slate-500">12 avaliações no Google</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#071126]">
                    Nanuque - MG
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Sede Centralizada</p>
                  <p className="text-[11px] text-slate-500">R. São Lourenço, 410, Sala 03</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#071126]">
                    Multidisciplinar
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Soluções Completas</p>
                  <p className="text-[11px] text-slate-500">Trabalhista, Previdenciário e Cível</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                  <span className="font-serif text-2xl font-bold text-[#071126]">
                    Combatividade ⚖️
                  </span>
                  <p className="text-xs font-semibold text-slate-900 mt-1">Atendimento Próximo</p>
                  <p className="text-[11px] text-slate-500">Presencial e digital para todo Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 2: PILARES & ÁREAS DE ATUAÇÃO — [MODO ESCURO]      */}
        {/* ======================================================== */}
        <section id="servicos" className="border-t border-[#e5b448]/30 bg-[#071126] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Heading
                eyebrow="Áreas de Atuação & Soluções Jurídicas"
                dark={true}
                description="Expertise sólida e combatividade processual para assegurar seus direitos perante tribunais, órgãos previdenciários e na celebração de acordos."
              >
                Pilares de Excelência Jurídica
              </Heading>

              <GlowingButton
                href={getWhatsAppUrl("Olá! Gostaria de consultar sobre a viabilidade da minha causa.")}
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
                    className="group relative flex flex-col justify-between rounded-2xl border border-[#e5b448]/30 bg-[#0d224d] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b448] hover:shadow-xl hover:shadow-[#e5b448]/15"
                  >
                    <div>
                      {/* Icon & Category */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#102859] text-[#e5b448] border border-[#e5b448]/40 transition-colors group-hover:bg-[#e5b448] group-hover:text-[#040914]">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#102859] px-3 py-1 text-[10px] font-bold text-[#e5b448] uppercase tracking-wider border border-[#e5b448]/30">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white group-hover:text-[#fad771] transition-colors">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-xs font-semibold text-[#e5b448]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-relaxed text-slate-300">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#e5b448]/25 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPractice(area)}
                        className="inline-flex w-full items-center justify-between text-xs font-bold text-[#e5b448] transition-colors hover:text-white cursor-pointer"
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
        {/* DOBRA 3: SOBRE O ESCRITÓRIO & CORPO JURÍDICO — [MODO CLARO] */}
        {/* ======================================================== */}
        <section id="sobre" className="relative border-t border-slate-200 bg-[#f4f3ee] py-20 lg:py-28 text-[#071126]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Equipe Frame */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Frame */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-2.5 shadow-2xl shadow-slate-300/60">
                    <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Ferreira e Bolleli Advogados em Nanuque"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040914]/70 via-transparent to-transparent opacity-70" />

                      {/* Overlay Badge at Bottom of Photo */}
                      <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-serif text-sm font-bold text-slate-900">
                              Ferreira & Bolleli Advogados
                            </p>
                            <p className="text-[11px] text-slate-600 mt-0.5">
                              Sociedade de Advogados · Nanuque - MG
                            </p>
                          </div>
                          <span className="rounded-md border border-[#e5b448]/40 bg-[#fdfaf3] px-2.5 py-1 text-[10px] font-bold text-[#946b23]">
                            Desde Nanuque
                          </span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-600">
                          <span>Ética · Capacidade Técnica · Objetividade</span>
                          <span className="text-[#1ea952] font-semibold">Avaliação 4,9 ★</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Pill */}
                  <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-xl">
                    <Star size={13} className="fill-[#e5b448] text-[#e5b448]" />
                    <span className="text-[11px] font-bold text-slate-900">
                      4,9 no Google · 12 Avaliações
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre o Escritório & Equipe"
                  dark={false}
                  description="Uma trajetória de dedicação jurídica, unindo tradição, rigor técnico e proximidade no atendimento a trabalhadores, aposentados e famílias."
                >
                  Ferreira e Bolleli Advogados: Tradição e Excelência em Nanuque
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                  <p>
                    Com sede no Centro de <strong className="text-slate-900 font-bold">Nanuque - MG</strong> (Rua São Lourenço, 410, Sala 03), o escritório <strong className="text-slate-900 font-bold">Ferreira e Bolleli Advogados</strong> consolidou-se como uma referência em assessoria e representação jurídica no Vale do Mucuri e em todo o estado de Minas Gerais.
                  </p>
                  <p>
                    Nossa equipe é formada por profissionais com sólida vivência processual que unem a experiência da advocacia clássica à agilidade das ferramentas tecnológicas modernas. Atuamos com destaque nas áreas de <strong className="text-slate-900 font-bold">Direito do Trabalho, Direito Previdenciário (INSS), Cível, Família, Sucessões e Consumidor</strong>.
                  </p>
                  <p>
                    O compromisso do escritório é oferecer um atendimento baseado na clareza, empatia e resolutividade. Explicamos cada etapa do processo em linguagem simples e acessível, proporcionando a segurança que nossos clientes necessitam para defender seus direitos e alcançar a vitória em suas causas.
                  </p>
                </div>

                {/* 4 Highlights */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <HeartHandshake size={20} className="text-[#e5b448] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Receptivos e Pacientes
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Ouvimos com atenção cada detalhe e esclarecemos todas as dúvidas com tranquilidade e respeito.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <BadgeCheck size={20} className="text-[#e5b448] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Alta Capacidade Técnica
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Atuação estratégica com fundamentação jurídica sólida e preparo probatório impecável.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <Building2 size={20} className="text-[#e5b448] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Sede Própria em Nanuque
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Ambiente acolhedor no Centro de Nanuque para receber você e sua família com conforto.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
                    <Sparkles size={20} className="text-[#e5b448] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Resolutividade & Ética
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Foco permanente em soluções céleres, transparentes e sem falsas promessas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de falar com os advogados da Ferreira e Bolleli Advogados.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                  >
                    <WhatsAppIcon size={15} />
                    <span>Falar com Nossos Advogados</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 transition-colors hover:text-[#946b23]"
                  >
                    <InstagramIcon size={15} />
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>

                  <a
                    href={BEACONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#946b23] transition-colors hover:text-black"
                  >
                    <ExternalLink size={14} />
                    <span>Canal Digital de Links</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 4: DIFERENCIAIS — [MODO ESCURO]                    */}
        {/* ======================================================== */}
        <section id="diferenciais" className="border-t border-[#e5b448]/30 bg-[#040914] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow-dark justify-center mb-3">
                Por que Escolher a Ferreira e Bolleli Advogados
              </p>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                O Padrão de Confiança com Avaliação 4,9 ★ no Google
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Princípios praticados no dia a dia por quem já auxiliou centenas de pessoas a conquistarem seus direitos com dignidade.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#e5b448]/30 bg-[#071126] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b448]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0d224d] text-[#e5b448] border border-[#e5b448]/40">
                  <Award size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Resolutividade & Competência
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Agilidade e capacidade técnica para destrinchar casos difíceis e encontrar o melhor caminho jurídico.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e5b448]/30 bg-[#071126] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b448]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0d224d] text-[#e5b448] border border-[#e5b448]/40">
                  <Heart size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Atendimento Humanizado
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Paciência, acolhimento e escuta atenta para orientar sem jargões complicados.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e5b448]/30 bg-[#071126] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b448]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0d224d] text-[#e5b448] border border-[#e5b448]/40">
                  <Scale size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Grande Ética & Objetividade
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Compromisso inegociável com a verdade e clareza total sobre os riscos e possibilidades de cada ação.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e5b448]/30 bg-[#071126] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b448]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0d224d] text-[#e5b448] border border-[#e5b448]/40">
                  <Building2 size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  Presença & Acessibilidade
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Escritório físico no Centro de Nanuque com canal direto pelo WhatsApp para respostas ágeis.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá! Gostaria de agendar um atendimento personalizado na Ferreira e Bolleli Advogados.")}
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
        {/* DOBRA 5: AVALIAÇÕES GOOGLE MEU NEGÓCIO 4,9 ★ — [MODO CLARO] */}
        {/* ======================================================== */}
        <section id="depoimentos" className="border-t border-slate-200 bg-[#fbfbf9] py-20 lg:py-28 text-[#071126]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="eyebrow mb-3.5">
                  Avaliações Verificadas no Google
                </span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#071126] sm:text-4xl">
                  A Opinião de Quem Confia na Ferreira e Bolleli Advogados
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#e5b448] text-[#e5b448]"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">4,9 de 5,0</span>
                  <span className="text-xs text-slate-500">
                    · 12 avaliações no Google Meu Negócio em Nanuque - MG
                  </span>
                </div>
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xs transition-colors hover:border-[#e5b448] hover:bg-slate-50"
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
                  className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#e5b448] hover:shadow-md"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-[#e5b448] text-[#e5b448]"
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
                    <p className="text-[10px] text-[#946b23] font-semibold">
                      {review.badge} · {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#e2e8f0] bg-[#f4f3ee] p-6 text-center sm:p-8">
              <h3 className="font-serif text-lg font-bold text-slate-900 sm:text-xl">
                Precisa de orientação jurídica segura para o seu caso?
              </h3>
              <p className="mt-2 text-xs text-slate-600 max-w-xl mx-auto">
                Não enfrente conflitos sozinho ou sem orientação especializada. Conte com a equipe Ferreira e Bolleli Advogados em Nanuque - MG para defender seus direitos.
              </p>
              <div className="mt-6 flex justify-center">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Li os depoimentos no site e gostaria de agendar uma consulta com a Ferreira e Bolleli Advogados.")}
                  target="_blank"
                  variant="gold"
                  size="md"
                >
                  <WhatsAppIcon size={15} />
                  <span>Falar com a Ferreira e Bolleli Advogados no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: COMO FUNCIONA O ATENDIMENTO — [MODO ESCURO]     */}
        {/* ======================================================== */}
        <section className="border-t border-[#e5b448]/30 bg-[#071126] text-white py-20 lg:py-24">
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
              <div className="rounded-2xl border border-[#e5b448]/30 bg-[#0d224d] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b448]">
                <span className="font-serif text-3xl font-bold text-[#e5b448]">
                  01
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Primeiro Contato
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Envie sua mensagem pelo WhatsApp ou nos visite na sede em Nanuque para um acolhimento inicial sem compromisso.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e5b448]/30 bg-[#0d224d] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b448]">
                <span className="font-serif text-3xl font-bold text-[#e5b448]">
                  02
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Análise Documental
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Examinamos contratos, rescisões, carteiras de trabalho ou notificações para verificar a viabilidade da demanda.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e5b448]/30 bg-[#0d224d] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b448]">
                <span className="font-serif text-3xl font-bold text-[#e5b448]">
                  03
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Estratégia & Ação
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Construímos a melhor estratégia jurídica, propondo acordo extrajudicial ou ingressando com a ação perante o Judiciário.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e5b448]/30 bg-[#0d224d] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#e5b448]">
                <span className="font-serif text-3xl font-bold text-[#e5b448]">
                  04
                </span>
                <h3 className="mt-3 font-serif text-base font-bold text-white">
                  Acompanhamento Contínuo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  Você recebe atualizações claras sobre o andamento processual até a efetiva conclusão e recebimento dos valores devidos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: DÚVIDAS FREQUENTES / FAQ — [MODO CLARO]          */}
        {/* ======================================================== */}
        <section id="duvidas" className="border-t border-slate-200 bg-[#f4f3ee] py-20 lg:py-28 text-[#071126]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="eyebrow mb-3.5 justify-center">
                Esclarecimento de Dúvidas
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#071126] sm:text-4xl">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Respostas diretas e esclarecedoras sobre consultas, processos trabalhistas, previdenciários e inventários.
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
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-slate-900 transition-colors hover:text-[#946b23] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#e5b448]" />
                      ) : (
                        <ChevronDown size={18} className="shrink-0 text-[#e5b448]" />
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
                  href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida que não encontrei no site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#071126] hover:text-[#946b23] hover:underline"
                >
                  <WhatsAppIcon size={14} className="text-[#25D366]" />
                  <span>Tire sua dúvida diretamente com nossa equipe no WhatsApp</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 8: LOCALIZAÇÃO, SEDES & CONTATO — [MODO ESCURO]    */}
        {/* ======================================================== */}
        <section id="contato" className="border-t border-[#e5b448]/30 bg-[#040914] text-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Sede info */}
              <div className="lg:col-span-5">
                <span className="eyebrow-dark mb-3.5">Localização & Atendimento</span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Estamos Prontos para Atender Você em Nanuque
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Visite nosso escritório no Centro de Nanuque ou receba suporte ágil e confidencial pelo WhatsApp de onde você estiver.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Sede Nanuque */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e5b448]/35 bg-[#071126] text-[#e5b448]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Sede em Nanuque / MG
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {ADDRESS_NANUQUE}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#e5b448] font-semibold hover:underline block mt-1"
                      >
                        Ver localização e rotas no Google Maps →
                      </a>
                    </div>
                  </div>

                  {/* Telefone & WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e5b448]/35 bg-[#071126] text-[#e5b448]">
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
                        href={getWhatsAppUrl("Olá! Gostaria de agendar um atendimento na Ferreira e Bolleli Advogados.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[#e5b448] hover:underline block mt-1"
                      >
                        Clique para enviar mensagem direta no WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Horário */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e5b448]/35 bg-[#071126] text-[#e5b448]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Segunda a Sexta: 08:00 às 11:30 e 13:30 às 18:00
                      </p>
                      <p className="text-[11px] text-[#fad771]">
                        Atendimento ágil pelo WhatsApp para dúvidas urgentes.
                      </p>
                    </div>
                  </div>

                  {/* Redes Sociais */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#e5b448]/35 bg-[#071126] text-[#e5b448]">
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
                          href={BEACONS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-white"
                        >
                          Canal Beacons: <span className="font-bold text-white">beacons.ai/ferreiraebolleliadv</span>
                        </a>
                        <a
                          href={GOOGLE_SEARCH_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#e5b448] hover:underline"
                        >
                          Perfil Google: Ferreira e Bolleli Advogados (4,9 ★)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Card */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#e5b448]/35 bg-[#071126] p-8 shadow-xl shadow-black/60">
                  <div className="flex items-center gap-3">
                    <span className="flex size-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#e5b448]">
                      Canal de Atendimento Direto
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                    Inicie seu Atendimento com a Ferreira e Bolleli Advogados
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Selecione a sua área de interesse para abrir o WhatsApp oficial com a mensagem apropriada:
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href={getWhatsAppUrl("Olá! Preciso de orientação sobre uma causa Trabalhista.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0d224d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#e5b448] hover:text-white"
                    >
                      <span>Causa Trabalhista</span>
                      <ArrowRight size={14} className="text-[#e5b448]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá! Gostaria de consultar sobre Aposentadoria ou Benefício do INSS.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0d224d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#e5b448] hover:text-white"
                    >
                      <span>Aposentadorias & INSS</span>
                      <ArrowRight size={14} className="text-[#e5b448]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá! Preciso de assessoria em Direito Cível / Contratos / Indenizações.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0d224d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#e5b448] hover:text-white"
                    >
                      <span>Cível & Indenizações</span>
                      <ArrowRight size={14} className="text-[#e5b448]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá! Gostaria de orientações sobre Inventário de Bens ou Direito de Família.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0d224d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#e5b448] hover:text-white"
                    >
                      <span>Inventários & Família</span>
                      <ArrowRight size={14} className="text-[#e5b448]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá! Preciso de ajuda contra uma cobrança indevida, juros bancários ou negativação.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0d224d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#e5b448] hover:text-white"
                    >
                      <span>Consumidor & Bancário</span>
                      <ArrowRight size={14} className="text-[#e5b448]" />
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá! Gostaria de orientações sobre assessoria empresarial ou contratos rurais.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-[#0d224d] p-4 text-xs font-bold text-slate-200 transition-all hover:border-[#e5b448] hover:text-white"
                    >
                      <span>Empresarial & Agronegócio</span>
                      <ArrowRight size={14} className="text-[#e5b448]" />
                    </a>
                  </div>

                  <div className="mt-8 border-t border-slate-700/60 pt-6">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá! Gostaria de conversar com a equipe Ferreira e Bolleli Advogados.")}
                      target="_blank"
                      variant="gold"
                      size="lg"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Falar no WhatsApp com Ferreira e Bolleli Advogados</span>
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
        <footer className="border-t border-[#e5b448]/25 bg-[#030710] pt-16 pb-12 text-slate-400">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <div className="relative py-1">
                  <Image
                    src={LOGO_SRC}
                    alt="Ferreira e Bolleli Advogados"
                    width={420}
                    height={140}
                    className="h-14 sm:h-16 md:h-18 w-auto max-w-[280px] sm:max-w-[340px] object-contain object-left drop-shadow-md"
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-md">
                  ⚖️ Ferreira e Bolleli Advogados — Advocacia e consultoria jurídica em Nanuque - MG e Vale do Mucuri. Atuação dedicada e experiente em causas Trabalhistas, Previdenciárias, Cíveis, de Família, Sucessões e Direito do Consumidor.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#071126] text-slate-300 transition-colors hover:border-[#e5b448] hover:text-white"
                    aria-label="Instagram de Ferreira e Bolleli Advogados"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#071126] text-slate-300 transition-colors hover:border-[#e5b448] hover:text-white"
                    aria-label="WhatsApp de Ferreira e Bolleli Advogados"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-[#071126] text-slate-300 transition-colors hover:border-[#e5b448] hover:text-white"
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
                      Sobre o Escritório
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="footer-link">
                      Diferenciais do Atendimento
                    </a>
                  </li>
                  <li>
                    <a href="#depoimentos" className="footer-link">
                      Avaliações Google (4,9 ★)
                    </a>
                  </li>
                  <li>
                    <a href="#duvidas" className="footer-link">
                      Perguntas Frequentes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="footer-link">
                      Sede em Nanuque
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
                <div className="mt-4 rounded-lg border border-slate-800 bg-[#071126] p-3 text-[11px] text-slate-300">
                  <p className="font-bold text-white">
                    FERREIRA E BOLLELI ADVOGADOS
                  </p>
                  <p className="mt-0.5 text-[#e5b448]">
                    Sede: {ADDRESS_NANUQUE}
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
                © {new Date().getFullYear()} FERREIRA E BOLLELI ADVOGADOS. Todos os direitos reservados.
              </p>
              <p className="text-[#e5b448]">
                Nanuque · Vale do Mucuri · Minas Gerais · Brasil
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CTA BUTTON */}
        <div className="fixed right-5 bottom-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de conversar com um advogado da Ferreira e Bolleli Advogados.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com Ferreira e Bolleli Advogados"
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
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#e5b448]/55 bg-[#071126] p-6 text-white shadow-2xl sm:p-8"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-[#0d224d] text-slate-300 hover:border-white hover:text-white cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2.5 text-xs font-bold text-[#e5b448] uppercase tracking-wider">
                  <Image
                    src={LOGO_EMBLEM_SRC}
                    alt="Emblema FB"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                  <span>Área de Atuação Especializada</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                  {selectedPractice.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#e5b448]">
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
                          className="text-[#e5b448] shrink-0 mt-0.5"
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
                    <span>Consultar Advogado nesta Área</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setSelectedPractice(null)}
                    className="w-full rounded-lg border border-slate-700 bg-[#0d224d] px-5 py-3 text-xs font-bold text-slate-300 hover:bg-[#102859] hover:text-white sm:w-auto cursor-pointer"
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
