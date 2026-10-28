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
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531997661362";
const PHONE_DISPLAY = "(31) 99766-1362";
const EMAIL_CONTACT = "contato@deboracupertinoadvocacia.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/deboracupertinoadvocacia/";
const INSTAGRAM_HANDLE = "@deboracupertinoadvocacia";
const INSTAGRAM_STATS = "4.441 seguidores · 678 posts";

const ADDRESS_MATOZINHOS =
  "R. Claudomiro Cupertino, 55 A - Centro, Matozinhos - MG, 35720-000, Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=D%C3%A9bora+Cupertino+Advocacia%0AMatozinhos+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=e65bf6121730a79e&sxsrf=AKL5yDilS4TTndihKypmKh6nFrLUjESSNQ:1793211884046&q=d%C3%A9bora+cupertino+advocacia+matozinhos+endere%C3%A7o&ludocid=11987737474599740864&sa=X&ved=2ahUKEwi81Ovqqt2XAxXQELkGHUB_FAIQ6BN6BAg6EAI";

// Official assets uploaded directly by client
const LOGO_SRC = "/debora-cupertino-logo-trimmed.png";
const LOGO_WHITE_SRC = "/debora-cupertino-logo-white.png";
const EMBLEM_SRC = "/emblema-dc.png";
const FOTO_HERO_SRC = "/debora-cupertino-hero.jpg";
const FOTO_PORTRAIT_SRC = "/dra-debora-cupertino.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Débora Cupertino! Gostaria de agendar uma consulta jurídica especializada sobre meu caso.";
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
    id: "direito-familia-divorcio",
    title: "Direito de Família: Divórcio, Guarda & Convivência",
    category: "Divórcio Consensual e Litigioso · Guarda Compartilhada · Convivência com Filhos · Partilha de Bens",
    icon: Users,
    tag: "Atendimento Humanizado · Respeito à Família · Condução Pacífica",
    summary:
      "Condução acolhedora e estrategicamente segura para encerrar ciclos com dignidade e resguardar a harmonia dos seus filhos. Menos desgaste emocional, mais clareza para o futuro.",
    details:
      "O divórcio ou a reorganização familiar não precisa ser um campo de batalha. Na Débora Cupertino Advocacia, tratamos cada caso com sensibilidade ímpar e alto rigor técnico. Priorizamos a mediação consensual em cartório ou judicial para garantir que a partilha de bens seja justa, sem prejuízos, e que a guarda compartilhada e os horários de convivência protejam prioritariamente a estabilidade psicológica e emocional dos seus filhos.",
    topics: [
      "Divórcio Consensual em Cartório de Notas: celeridade máxima, sem burocracia e em poucos dias",
      "Divórcio Litigioso Estratégico: proteção patrimonial absoluta e defesa firme dos seus interesses",
      "Guarda Compartilhada ou Unilateral estruturada com foco no bem-estar dos filhos",
      "Regulamentação de Regime de Convivência, férias escolares e feriados com os genitores",
      "Partilha amigável de imóveis, veículos, contas bancárias e investimentos do casal",
      "Dissolução de União Estável com reconhecimento de direitos e partilha patrimonial",
    ],
    whatsAppText:
      "Olá, Dra. Débora Cupertino! Gostaria de orientações sobre Divórcio, Guarda e Convivência com os filhos.",
  },
  {
    id: "salario-maternidade",
    title: "Direito Previdenciário: Salário Maternidade",
    category: "Mães Desempregadas · Trabalhadoras Urbanas e Rurais · Autônomas / MEI · Adoção e Guarda",
    icon: Baby,
    tag: "Concessão Rápida · Período de Graça · Direitos da Mãe e do Bebê",
    summary:
      "Garantia integral do Salário Maternidade para acolher seu bebê com tranquilidade financeira, inclusive para mães que estavam desempregadas no momento do parto.",
    details:
      "Muitas mulheres desconhecem que mesmo estando sem carteira assinada há meses podem ter direito a receber o Salário Maternidade pelo INSS através do período de graça previdenciário. Analisamos detalhadamente seu histórico de contribuições, preparamos a documentação correta e combatemos exigências indevidas da agência do INSS para que você receba todas as parcelas a que tem direito sem dor de cabeça.",
    topics: [
      "Salário Maternidade para mulheres desempregadas durante o período de graça previdenciário",
      "Benefício para Microempreendedoras Individuais (MEI) e Contribuintes Individuais (autônomas)",
      "Salário Maternidade para trabalhadoras da zona rural e seguradas especiais",
      "Amparo legal e financeiro em casos de adoção de crianças ou guarda judicial para fins de adoção",
      "Correção de divergências no CNIS e reversão de pedidos indeferidos indevidamente pelo INSS",
      "Acompanhamento acolhedor durante todo o processo administrativo ou ação judicial",
    ],
    whatsAppText:
      "Olá, Dra. Débora Cupertino! Gostaria de consultar sobre a liberação do meu Salário Maternidade junto ao INSS.",
  },
  {
    id: "bpc-loas-deficiencia-idoso",
    title: "Benefício de Prestação Continuada (BPC/LOAS)",
    category: "Autismo (TEA) · Idosos 65+ · Pessoas com Deficiência (PcD) · Sem Necessidade de Contribuição",
    icon: HeartHandshake,
    tag: "1 Salário Mínimo Mensal · Defesa Social · Pagamento de Retroativos",
    summary:
      "Conquista do benefício de 1 salário mínimo mensal para idosos e pessoas com deficiência de baixa renda, com suporte técnico humanizado para superar laudos e perícias do INSS.",
    details:
      "O BPC da Lei Orgânica da Assistência Social garante 1 salário mínimo mensal a quem não possui condições de sustento próprio. É um direito de pessoas com deficiência (física, mental ou sensorial, incluindo Transtorno do Espectro Autista - TEA em qualquer grau) e idosos acima de 65 anos. Apoiamos a família na adequação do CadÚnico, cálculo da renda per capita real e contestação de laudos periciais desfavoráveis do INSS perante a Justiça Federal com recebimento dos retroativos desde a DER.",
    topics: [
      "BPC/LOAS para crianças e adultos diagnosticados com TEA (Autismo), Síndrome de Down e paralisias",
      "BPC Idoso para quem tem 65 anos ou mais e não conseguiu tempo suficiente de aposentadoria",
      "Desconto de despesas com medicamentos, fraldas e terapias para comprovação da hipossuficiência",
      "Reversão na Justiça Federal de indeferimentos de perícia médica e social do INSS",
      "Cobrança de todos os atrasados devidos desde a data do primeiro requerimento administrativo",
      "Atendimento sensível e acolhedor para as famílias que mais necessitam de apoio",
    ],
    whatsAppText:
      "Olá, Dra. Débora Cupertino! Preciso de ajuda para solicitar ou recorrer de um pedido de BPC/LOAS (Autismo / Idoso / Deficiência).",
  },
  {
    id: "pensao-alimenticia-revisao",
    title: "Pensão Alimentícia: Fixação, Revisão & Cobrança Urgente",
    category: "Alimentos para Filhos · Alimentos Gravídicos · Execução de Dívida · Prisão e Penhora · Revisional",
    icon: Scale,
    tag: "Cobrança Imediata · Segurança dos Filhos · Cálculos Justos",
    summary:
      "Proteção incondicional do sustento e da dignidade dos seus filhos. Ações rápidas de fixação de alimentos, cobrança rígida de atrasados e revisões proporcionais.",
    details:
      "A alimentação, saúde, educação e moradia dos seus filhos não podem esperar. Quando a outra parte atrasa ou se recusa a pagar a pensão estipulada, agimos com rigor processual pedindo liminares sob pena de prisão ou bloqueio de contas e bens. Da mesma forma, quando houver mudança comprovada na renda de quem paga ou nas necessidades de quem recebe, ingressamos com a Ação Revisional para reequilibrar o valor.",
    topics: [
      "Fixação célere de Alimentos Provisórios para o sustento imediato da criança",
      "Execução de alimentos em atraso pelo rito de prisão civil do devedor inadimplente",
      "Bloqueio judicial de contas bancárias (Sisbajud), veículos e penhora de patrimônio do devedor",
      "Ação Revisional para aumento ou redução proporcional do valor da pensão alimentícia",
      "Alimentos Gravídicos: amparo financeiro à gestante durante toda a gravidez e parto",
      "Exoneração de pensão quando o filho atinge maioridade com plena independência econômica",
    ],
    whatsAppText:
      "Olá, Dra. Débora Cupertino! Preciso de orientação urgente sobre Pensão Alimentícia (fixação / atraso / revisão).",
  },
  {
    id: "aposentadorias-auxilios-inss",
    title: "Aposentadorias & Auxílios do INSS",
    category: "Aposentadoria por Idade e Tempo · Auxílio-Doença · Invalidez · Pensão por Morte · Planejamento",
    icon: Landmark,
    tag: "Planejamento Estratégico · Análise de CNIS · Maior Benefício Possível",
    summary:
      "Planejamento detalhado e requerimento dos seus benefícios do INSS. Obtenha a melhor renda mensal e reverta laudos e perícias negadas pela Previdência Social.",
    details:
      "Após uma vida de trabalho e contribuições, você merece desfrutar de um benefício justo e seguro. Com as constantes mudanças da Reforma da Previdência, uma análise prévia e estratégica evita que você receba um valor menor ou perca anos de contribuição rural ou tempo especial insalubre. Atuamos também com agilidade em casos de incapacidade médica temporária ou permanente e na concessão de pensão por morte para dependentes.",
    topics: [
      "Aposentadoria por Idade Urbana e Rural com cômputo de períodos de trabalho na lavoura",
      "Aposentadoria por Tempo de Contribuição aplicando a melhor regra de transição pós-Reforma",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Incapacidade Permanente",
      "Conversão de tempo especial exercido em condições insalubres ou perigosas",
      "Pensão por Morte: concessão ágil para cônjuges, companheiros e filhos menores",
      "Planejamento Previdenciário Individual: saiba a data exata e o valor ideal para se aposentar",
    ],
    whatsAppText:
      "Olá, Dra. Débora Cupertino! Gostaria de consultar sobre Aposentadoria, Auxílio-Doença ou Pensão por Morte do INSS.",
  },
  {
    id: "inventarios-planejamento-sucessorio",
    title: "Inventários em Cartório & Planejamento Familiar",
    category: "Inventário Extrajudicial · Partilha Amigável · Testamentos · Pacto Antenupcial · Economia Tributária",
    icon: FileText,
    tag: "Descomplicação em Cartório · Rapidez · Proteção do Patrimônio da Família",
    summary:
      "Condução transparente e sem litígios da sucessão familiar. Agilidade em cartório de notas para transferência de bens com menor incidência de impostos e sem desgaste.",
    details:
      "A partida de um ente querido é um momento de luto e reorganização profunda. Conduzir o inventário não precisa ser sinônimo de anos de espera na justiça comum. Havendo consenso entre herdeiros capazes, realizamos o inventário extrajudicial em cartório com rapidez, clareza e economia nos custos de ITCD e emolumentos, protegendo o legado construído pela sua família.",
    topics: [
      "Inventário Extrajudicial em Cartório: partilha rápida e conclusão em semanas",
      "Orientação tributária estratégica para redução legal do imposto sobre herança (ITCD)",
      "Inventário Judicial quando há testamento, herdeiros menores ou divergências pontuais",
      "Elaboração de Pactos Antenupciais e Contratos de Convivência personalizados",
      "Reconhecimento de Paternidade ou Maternidade Socioafetiva e Adoção",
      "Curatela e Interdição para proteção jurídica e financeira de idosos enfermos",
    ],
    whatsAppText:
      "Olá, Dra. Débora Cupertino! Gostaria de uma consulta sobre Inventário em Cartório ou Planejamento Familiar.",
  },
];

interface Review {
  name: string;
  badge: string;
  date: string;
  category: "Tratamento Humanizado" | "Ambiente Acolhedor" | "Rapidez & Tempo Hábil" | "Planejamento Previdenciário" | "Audiências & Competência";
  highlight: string;
  content: string;
  ownerReply?: string;
  ownerDate?: string;
}

const clientReviews: Review[] = [
  {
    name: "Jaqueline Jorge",
    badge: "4 avaliações · 5 Estrelas",
    date: "2 semanas atrás · Novo",
    category: "Rapidez & Tempo Hábil",
    highlight: "Gostei muito do atendimento e da rapidez da minha solicitação, com certeza indicarei pra todas as pessoas!",
    content: "Gostei muito do atendimento e da rapidez da minha solicitação,com certeza indicarei pra todas as pessoas que me solicitarem! Muito obrigada!",
    ownerReply: "Agradecemos imensamente seu feedback e nos colocamos à disposição para que precisar. Conte sempre conosco!",
    ownerDate: "2 semanas atrás",
  },
  {
    name: "Tais Brandao De Andrade",
    badge: "3 avaliações · 5 Estrelas",
    date: "8 meses atrás",
    category: "Tratamento Humanizado",
    highlight: "Tratamento humanizado, com explicações claras. Cuidado e carinho individualizados a cada um dos clientes.",
    content: "Excelente atendimento, comprometimento e dedicação! Tratamento humanizado, com explicações claras . Cuidado e carinho individualizados a cada um dos clientes. Estou muito satisfeita. Meu processo foi resolvido em tempo hábil.",
    ownerReply: "Agradecemos imensamente por sua generosa e calorosa avaliação. Estamos sempre em busca de melhorar e priorizar nossos serviços de maneira humanizada e eficiente. Seguiremos à disposição!",
    ownerDate: "8 meses atrás",
  },
  {
    name: "Daniela Marques",
    badge: "2 avaliações · 5 Estrelas",
    date: "1 ano atrás",
    category: "Audiências & Competência",
    highlight: "Aceitou o meu caso como um desafio e obteve sucesso com todos os recursos, provas e argumentos convincentes!",
    content: "Excelente profissional ! Aceitou o meu caso como um desafio e obteve sucesso com todos os recursos, provas e argumentos convincentes que ela adotou! Agradeço a ela imensamente pois me ajudou num momento delicado e importante na minha vida! Indico com toda segurança o seus serviços!",
    ownerReply: "Estamos imensamente gratos por sua avaliação e lisonjeados por suas palavras. Seguimos tentando aperfeiçoar nossos serviços e humanizar nosso atendimento. Conte sempre conosco! Deus abençoe você e sua família!",
    ownerDate: "1 ano atrás",
  },
  {
    name: "Jussara Correa",
    badge: "Local Guide · 14 avaliações · 3 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Planejamento Previdenciário",
    highlight: "Meu planejamento previdenciário elaborado por ela me deu a segurança para eu tomar a decisão de pedir a aposentadoria.",
    content: "Excelente profissional! Recomendo. Meu planejamento previdenciário elaborado por ela me deu a segurança para eu tomar a decisão de pedir a aposentadoria. Gratidão.",
    ownerReply: "Agradecemos imensamente o feedback e nos colocamos à disposição, para o que precisar. Deus abençoe você e sua família!! Gratidão!!",
    ownerDate: "2 anos atrás",
  },
  {
    name: "Poliana Silva Celestino",
    badge: "1 avaliação · 5 Estrelas",
    date: "3 anos atrás",
    category: "Ambiente Acolhedor",
    highlight: "Ótima Profissional! Clareza nas informações, Ambiente aconchegante, Humana, Empenhada. Atingiu o objetivo com Êxito!",
    content: "Ótima Profissional! Clareza nas informações, Ambiente aconchegante, Humana,Empenhada. Atingiu o objetivo com Êxito, Muito satisfeita com o resultado.",
  },
  {
    name: "Márcio Antônio",
    badge: "5 avaliações · 5 Estrelas",
    date: "3 anos atrás",
    category: "Rapidez & Tempo Hábil",
    highlight: "A advogada acompanha o desenrolar do processo comunicando cada fase e esclarecendo todas as dúvidas levantadas. Fidelizarei!",
    content: "Excelente atendimento desde o primeiro contato até a conclusão do serviço. A advogada acompanha o desenrolar do processo comunicando cada fase ao cliente e esclarecendo todas as dúvidas levantadas. Não só recomendo como fidelizarei.",
    ownerReply: "Agradecemos imensamente pelo feedback e ficamos imensamente lisonjeados pelas palavras! A confiança e o carinho de vocês, nos fazem querer ser melhores a cada dia! Deus te abençoe sempre! Estaremos sempre à disposição!",
    ownerDate: "3 anos atrás",
  },
  {
    name: "Gabriel",
    badge: "Local Guide · 31 avaliações · 8 fotos · 5 Estrelas",
    date: "2 anos atrás",
    category: "Audiências & Competência",
    highlight: "Extremamente profissional, ética, clareza nas informações. Realmente uma profissional que ampara seus clientes, Sucesso Dra.",
    content: "Somente Elogios a tecer a sua Pessoa, Extremante profissional, ética, clareza nas informações. Realmente uma profissional que ampara seus clientes, Sucesso Dra.",
    ownerReply: "Estamos extremamente gratas e lisonjeadas com o seu feedback! Conte conosco para o que precisar, pois será sempre uma honra atendê-lo. Deus o abençoe pelo carinho!",
    ownerDate: "2 anos atrás",
  },
  {
    name: "André",
    badge: "3 avaliações · 5 Estrelas",
    date: "3 anos atrás",
    category: "Audiências & Competência",
    highlight: "Suporte incrível antes, durante e após o processo. Ressalto a competência técnica durante a audiência!",
    content: "Excelente profissional, suporte incrivel, antes durante e após o processo. Super indico, ressalto tambem a competência técnca da Doutora Débora durante a audiência, e na condução das demandas durante a mesma.",
    ownerReply: "Olá André, agradeço imensamente pelas palavras de carinho! Estamos sempre em busca de melhorar nossos serviços e atendimento ao cliente! O seu feedback nos traz a certeza que estamos trilhando o caminho certo. Conte sempre conosco!",
    ownerDate: "3 anos atrás",
  },
  {
    name: "PAULO RICARDO DE SOUZA #",
    badge: "3 avaliações · 5 Estrelas",
    date: "1 ano atrás",
    category: "Audiências & Competência",
    highlight: "Excelente profissional, além de muito atenciosa, é muito competente, sem dúvida uma das melhores da nossa região!!!",
    content: "Excelente profissional, além de muito atenciosa, é muito competente, sem dúvida uma das melhores da nossa região!!!",
    ownerReply: "Agradecemos imensamente sua avaliação! Estamos sempre em busca de otimizar e humanizar nossos serviços. Conte sempre conosco!",
    ownerDate: "1 ano atrás",
  },
  {
    name: "Renata Almeida",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Ambiente Acolhedor",
    highlight: "Dra Débora é carinhosa, dedicada e educada; tratamento realmente humanitário num ambiente super acolhedor.",
    content: "Dra Débora, além de inteligente pespicaz honesta é extremamente carinhosa dedicada e educada com seus clientes;tratamento realmente humanitário num ambiente super acolhedor .",
    ownerReply: "Agradecemos imensamente por sua avaliação! Que continuemos com nossa parceria de sucesso e amizade! Conte sempre conosco. Abraços.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Tatiana Costa",
    badge: "3 avaliações · 5 Estrelas",
    date: "1 ano atrás",
    category: "Rapidez & Tempo Hábil",
    highlight: "Foi uma experiência muito boa, fui muito bem atendida e tive o meu processo resolvido muito rápido. Agradeço o atendimento!",
    content: "Foi uma experiência muito boa, fui muito bem atendia e assessorada pela Dra. Débora na qual tive o meu processo resolvido muito rápido. Agradeço o atendimento",
    ownerReply: "Agradecemos imensamente a sua avaliação e seguimos à disposição!",
    ownerDate: "1 ano atrás",
  },
  {
    name: "Cinthia Santos",
    badge: "6 avaliações · 8 fotos · 5 Estrelas",
    date: "4 anos atrás",
    category: "Tratamento Humanizado",
    highlight: "Super profissional, muito atenciosa, educada e muito prestativa. Eu super indico!",
    content: "Entrei com um processo com outra advogada, não estava satisfeita. Foi aí que contatei a doutora Débora Cupertino. Ela além de ser super profissional premiada é muito atenciosa, educada e muito prestativa. Eu super indico.",
    ownerReply: "Muito obrigada por sua avaliação, Cínthia. Estamos sempre em busca de aprimorar nossos serviços. Conte sempre conosco! Abraços.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "Meire Lucia Marques De Lacerda Marques",
    badge: "2 avaliações · 5 Estrelas",
    date: "1 ano atrás",
    category: "Ambiente Acolhedor",
    highlight: "Atendimento impecável! Agradeço pelo empenho e carinho com os clientes. Escritório super agradável.",
    content: "Atendimento impecável! Agradeço pelo empenho e carinho com os clientes . Escritório super agradável.",
    ownerReply: "Agradecemos imensamente por sua avaliação!! Conte sempre conosco! Deus abençoe você e sua família!",
    ownerDate: "1 ano atrás",
  },
  {
    name: "Magela Taveira",
    badge: "1 avaliação · 5 Estrelas",
    date: "4 anos atrás",
    category: "Tratamento Humanizado",
    highlight: "A melhor possível! Atenciosa e muito profissional... sem falar que exerce um pouco de psicologia em seus atendimentos.",
    content: "A melhor possível!!! Atenciosa e muito profissional .. E mais!!! sem falar que exerce um pouco de psicologia em seus atendimentos. Parabéns.",
    ownerReply: "Muito obrigada, lisonjeada com os elogios! Amei o final...rs. Sempre às ordens.",
    ownerDate: "4 anos atrás",
  },
  {
    name: "SEIMOS",
    badge: "3 avaliações · 5 Estrelas",
    date: "4 anos atrás",
    category: "Tratamento Humanizado",
    highlight: "Atende a gente muito bem, procura ajudar a gente a solucionar nossos problemas. Super recomendo!",
    content: "A doutora Débora Cupertino atende a gente muito bem, procura ajudar a gente a solucionar os nossos problemas mesmo sem contratar o seu serviço. Oferece um bom preço e garante resultados positivos na causa. Super recomendo o seu trabalho!",
    ownerReply: "Muito obrigada por sua avaliação! Estamos sempre em busca de aprimoramentos para melhor atender vocês. Conte sempre conosco. Abraços.",
    ownerDate: "4 anos atrás",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Mães que estavam desempregadas têm direito ao Salário Maternidade do INSS?",
    answer:
      "Sim! Muitas mulheres desconhecem esse direito fundamental. Se você trabalhou de carteira assinada, contribuiu como MEI ou facultativo e ficou desempregada, a lei previdenciária concede o chamado 'período de graça' (que pode variar de 12 a até 36 meses). Se o bebê nasceu ou foi adotado dentro desse período, você tem direito integral às 4 parcelas do Salário Maternidade pagas pelo INSS. Analisamos gratuitamente sua carteira de trabalho para verificar sua elegibilidade.",
  },
  {
    question: "O que é o BPC/LOAS e quem tem direito a receber 1 salário mínimo por mês?",
    answer:
      "O Benefício de Prestação Continuada (BPC/LOAS) é garantido por lei para pessoas com deficiência de qualquer idade (incluindo crianças e adultos com Transtorno do Espectro Autista - TEA, síndrome de Down, paralisias ou doenças crônicas incapacitantes) e idosos com 65 anos ou mais, que estejam em situação de vulnerabilidade econômica familiar. Uma grande vantagem é que não exige tempo de contribuição prévio ao INSS.",
  },
  {
    question: "Como funciona o Divórcio em Cartório? É mais rápido do que na Justiça?",
    answer:
      "Com certeza! O Divórcio Extrajudicial realizado diretamente no Cartório de Notas é célere, discreto e pode ser finalizado em questão de dias, desde que haja consenso entre o casal sobre a partilha dos bens e o término da união. Caso haja filhos menores, é possível formalizar a guarda e a pensão previamente ou homologar o acordo judicialmente com total agilidade e sem audiências desgastantes.",
  },
  {
    question: "O pai ou a mãe não está pagando a pensão alimentícia. O que pode ser feito?",
    answer:
      "Quando há atraso injustificado na pensão alimentícia, é possível ingressar imediatamente com a Ação de Execução de Alimentos. A lei prevê mecanismos rígidos: o devedor pode ser intimado para quitar em até 3 dias sob pena de prisão civil imediata de 1 a 3 meses, ou sofrer penhora de contas bancárias (Sisbajud), veículos, salários e negativação do nome em órgãos de proteção ao crédito.",
  },
  {
    question: "O INSS negou meu pedido de aposentadoria ou auxílio-doença. O que fazer?",
    answer:
      "A negativa administrativa do INSS não é a palavra final! Na grande maioria das vezes, o INSS indefere pedidos por falhas cadastrais no CNIS ou perícias médicas superficiais. Nós examinamos o processo administrativo e ingressamos com Ação Judicial perante a Justiça Federal, onde a perícia é realizada por um perito médico independente nomeado pelo juiz. Se aprovado, você recebe todas as parcelas retroativas desde a data do primeiro pedido.",
  },
  {
    question: "Como funciona o atendimento na sede em Matozinhos - MG e o atendimento online?",
    answer:
      "Oferecemos o melhor dos dois mundos. Para quem reside em Matozinhos, Sete Lagoas, Pedro Leopoldo, Capim Branco, Vespasiano e região metropolitana, temos atendimento presencial e acolhedor em nossa sede própria na R. Claudomiro Cupertino, 55 A - Centro, Matozinhos - MG (agendado previamente para seu conforto e privacidade). Para clientes de outras cidades e estados, nosso atendimento é 100% online via WhatsApp oficial com assinatura digital válida, envio simplificado de fotos de documentos e acompanhamento em tempo real.",
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
          dark ? "text-white" : "text-[#061224]"
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
    "Tratamento Humanizado",
    "Ambiente Acolhedor",
    "Rapidez & Tempo Hábil",
    "Planejamento Previdenciário",
    "Audiências & Competência",
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
      <main className="min-h-screen bg-[#fcfbfa] text-[#061224] selection:bg-[#c89b3c] selection:text-[#020b18]">
        {/* ======================================================== */}
        {/* TOP ANNOUNCEMENT BAR (MIDNIGHT SAPPHIRE NAVY & GOLD)    */}
        {/* ======================================================== */}
        <div className="border-b border-[#082144] bg-[#051833] py-2 text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f6e3a1] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#c89b3c]" />
              </span>
              <span className="text-[11px] sm:text-xs text-white font-semibold">
                DÉBORA CUPERTINO ADVOCACIA · Direito das Famílias & Previdenciário · Atendimento Humanizado ⚖️
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
                <span className="font-bold text-white">5,0 ★</span> (106 avaliações no Google)
              </a>
              <span className="hidden h-3 w-px bg-slate-700 sm:inline-block" />
              <a
                href={getWhatsAppUrl("Olá, Dra. Débora Cupertino! Gostaria de uma consulta jurídica.")}
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
            {/* Left: Official Débora Cupertino Logo exactly as sent by user */}
            <a
              href="#"
              className="group flex shrink-0 items-center transition-opacity hover:opacity-90"
              aria-label="Débora Cupertino Advocacia - Início"
            >
              <Image
                src={LOGO_SRC}
                alt="Débora Cupertino Advocacia"
                width={460}
                height={155}
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
                Sobre a Advogada
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

            {/* Right Action: WhatsApp CTA (Noble Imperial Gold) */}
            <div className="flex shrink-0 items-center gap-3">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Débora Cupertino! Gostaria de consultar sobre o meu caso.")}
                target="_blank"
                variant="gold"
                size="sm"
                className="hidden sm:inline-flex whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#020b18]" />
                <span className="hidden 2xl:inline">Converse com a Dra. Débora</span>
                <span className="2xl:hidden">WhatsApp</span>
              </GlowingButton>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-800 transition-colors hover:border-[#c89b3c] hover:text-[#9e742a] xl:hidden cursor-pointer"
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
                      alt="Débora Cupertino Advocacia"
                      width={360}
                      height={120}
                      className="h-[52px] w-auto object-contain"
                      priority
                    />
                  </div>
                  <a
                    href="#servicos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Áreas de Atuação</span>
                    <ArrowRight size={14} className="text-[#c89b3c]" />
                  </a>
                  <a
                    href="#sobre"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Sobre Dra. Débora Cupertino</span>
                    <ArrowRight size={14} className="text-[#c89b3c]" />
                  </a>
                  <a
                    href="#diferenciais"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Atendimento Humanizado</span>
                    <ArrowRight size={14} className="text-[#c89b3c]" />
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Avaliações Google (5,0 ★ · 106 reviews)</span>
                    <ArrowRight size={14} className="text-[#c89b3c]" />
                  </a>
                  <a
                    href="#duvidas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Dúvidas Frequentes</span>
                    <ArrowRight size={14} className="text-[#c89b3c]" />
                  </a>
                  <a
                    href="#contato"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold tracking-wider text-slate-700 uppercase transition-colors hover:text-[#9e742a]"
                  >
                    <span>Sede & Contato</span>
                    <ArrowRight size={14} className="text-[#c89b3c]" />
                  </a>

                  <div className="pt-4 border-t border-slate-100">
                    <GlowingButton
                      href={getWhatsAppUrl("Olá, Dra. Débora Cupertino! Gostaria de agendar uma consulta sobre o meu caso.")}
                      target="_blank"
                      variant="gold"
                      size="md"
                      className="w-full"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Fale com a Dra. Débora Cupertino</span>
                    </GlowingButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ======================================================== */}
        {/* DOBRA 1: HERO SECTION — COM FOTO OFICIAL DA DRA. DÉBORA  */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-22 lg:pt-18 lg:pb-26 bg-[#fcfbfa]">
          {/* Subtle Ambient Light Champagne & Royal Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-radial from-[#f6e3a1]/20 via-[#f7f4ed]/70 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-80 w-80 rounded-full bg-[#e8dfcd]/40 blur-3xl" />

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
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#c89b3c]/35 bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#9e742a] shadow-xs">
                    <span className="size-1.5 rounded-full bg-[#c89b3c] animate-pulse" />
                    DÉBORA CUPERTINO ADVOCACIA · FAMÍLIA & PREVIDENCIÁRIO
                  </span>
                </motion.div>

                {/* H1 Headline - Directly extracted from client brief & campaign visual */}
                <motion.h1
                  variants={reveal}
                  className="font-serif text-3xl leading-[1.16] font-bold tracking-tight text-[#061224] sm:text-5xl lg:text-[3.25rem]"
                >
                  Protegendo Seus Direitos, Cuidando do Que Realmente Importa:{" "}
                  <span className="bg-gradient-to-r from-[#7d591c] via-[#c89b3c] to-[#9e742a] bg-clip-text text-transparent">
                    Sua Família e Seu Futuro.
                  </span>
                </motion.h1>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  variants={reveal}
                  className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:max-w-xl"
                >
                  Assessoria jurídica altamente especializada e verdadeiramente humanizada em{" "}
                  <strong className="font-semibold text-slate-900">
                    Direito das Famílias e Previdenciário (INSS)
                  </strong>
                  . Conquiste seu divórcio com paz de espírito, garanta a guarda e o sustento dos seus filhos e acesse seus benefícios e aposentadorias com segurança e agilidade.
                </motion.p>

                {/* Quick Highlights Pills */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex flex-wrap gap-2.5 sm:gap-3"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89b3c]" />
                    Divórcio, Guarda & Pensão
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89b3c]" />
                    Salário Maternidade & BPC/LOAS
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89b3c]" />
                    Atendimento Humanizado
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#c89b3c]" />
                    Presencial & Online Nacional
                  </span>
                </motion.div>

                {/* Action CTAs */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Débora Cupertino! Gostaria de agendar uma consulta sobre meu caso de Família / Previdenciário.")}
                    target="_blank"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Fale com a Dra. Débora no WhatsApp</span>
                  </GlowingButton>

                  <GlowingButton
                    href="#servicos"
                    variant="champagne"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span>Conheça as Áreas de Atuação</span>
                    <ArrowRight size={15} />
                  </GlowingButton>
                </motion.div>

                {/* Trust Seal / Google 5,0 Authority */}
                <motion.div
                  variants={reveal}
                  className="mt-10 flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white/95 p-3.5 shadow-xs backdrop-blur-xs max-w-lg"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#051833] text-white">
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
                      Mais de <strong className="font-semibold text-slate-900">106 avaliações verificadas</strong> de clientes em Matozinhos - MG e em todo o Brasil.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Photo of Dra. Débora Cupertino */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Outer Frame with Gold Rim Accent */}
                  <div className="group relative overflow-hidden rounded-2xl border-2 border-[#c89b3c]/40 bg-gradient-to-b from-[#082144] to-[#020b18] p-2 shadow-2xl shadow-[#051833]/25 transition-all duration-300 hover:border-[#c89b3c]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#051833]">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Débora Cupertino — Especialista em Direito das Famílias e Previdenciário"
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                      />

                      {/* Subtle Bottom Vignette */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020b18]/85 via-transparent to-transparent" />

                      {/* Floating Badge on Photo: Dra. Débora Cupertino */}
                      <div className="absolute right-3.5 bottom-3.5 left-3.5 rounded-xl border border-white/20 bg-[#051833]/92 p-3.5 text-white shadow-xl backdrop-blur-md">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="font-serif text-sm font-bold tracking-wide text-white">
                              Dra. Débora Cupertino
                            </p>
                            <p className="text-[11px] font-medium text-[#f6e3a1]">
                              Especialista em Famílias & Previdenciário
                            </p>
                          </div>
                          <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex size-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                            aria-label="Instagram da Dra. Débora Cupertino"
                          >
                            <InstagramIcon size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Card Badge (Top Right) */}
                  <div className="absolute -top-4 -right-4 hidden rounded-xl border border-slate-200/90 bg-white p-3 shadow-lg sm:flex items-center gap-2.5">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#fef6e2] text-[#9e742a]">
                      <Scale size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Atendimento Humanizado</p>
                      <p className="text-[10px] text-slate-500">Matozinhos · MG</p>
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
        <section className="border-y border-[#082144] bg-[#051833] py-9 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col border-l-2 border-[#c89b3c] pl-4 sm:pl-5">
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  <Star size={16} className="fill-[#f59e0b]" />
                  <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                    5,0 ★
                  </span>
                </div>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  106 Avaliações no Google
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Nota máxima concedida por clientes verificados
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col border-l-2 border-[#c89b3c] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Família & INSS
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Especialização Focada
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Divórcio, guarda, pensão, maternidade e BPC
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col border-l-2 border-[#c89b3c] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Matozinhos - MG
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Sede Própria no Centro
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  R. Claudomiro Cupertino, 55 A
                </p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col border-l-2 border-[#c89b3c] pl-4 sm:pl-5">
                <span className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  100% Online
                </span>
                <p className="mt-1 text-xs font-bold tracking-wider text-slate-200 uppercase">
                  Alcance Nacional
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Atendimento ágil em qualquer estado do Brasil
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (SERVIÇOS COM MODAL DETALHADO)  */}
        {/* ======================================================== */}
        <section id="servicos" className="py-20 sm:py-26 bg-[#fcfbfa]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12">
              <Heading
                eyebrow="Áreas de Atuação Especializada"
                description="Soluções jurídicas estruturadas com foco na proteção da sua família e na garantia dos seus benefícios previdenciários junto ao INSS. Clique em qualquer área para ver todos os detalhes."
              >
                Como a Dra. Débora Cupertino Pode Proteger Você e Sua Família
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Débora Cupertino! Gostaria de consultar sobre a viabilidade do meu caso.")}
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
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#c89b3c]/60 hover:shadow-lg cursor-pointer"
                  >
                    <div>
                      {/* Top Bar: Icon + Category Tag */}
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#051833] text-[#f6e3a1] shadow-xs transition-colors group-hover:bg-[#082144]">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full bg-[#fef6e2] px-2.5 py-1 text-[10px] font-bold text-[#8e6319]">
                          {area.tag.split("·")[0].trim()}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-bold tracking-tight text-[#061224] group-hover:text-[#9e742a] transition-colors">
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
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#9e742a]">
                      <span>Ver detalhes e tópicos</span>
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
                className="absolute inset-0 bg-[#020b18]/80 backdrop-blur-sm"
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
                  <span className="inline-block rounded-full bg-[#fef6e2] px-3 py-1 text-xs font-bold text-[#8e6319]">
                    {selectedPractice.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#061224] sm:text-3xl mt-3">
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
                    <h4 className="font-serif text-sm font-bold tracking-wider text-[#061224] uppercase mb-3">
                      Atuação e Procedimentos Inclusos:
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedPractice.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-[#c89b3c] shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer CTAs */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <p className="text-xs text-slate-500 text-center sm:text-left">
                    Atendimento humanizado · Sede em Matozinhos ou 100% Online
                  </p>
                  <GlowingButton
                    href={getWhatsAppUrl(selectedPractice.whatsAppText)}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Consultar Dra. Débora</span>
                  </GlowingButton>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* DOBRA 4: SOBRE A ADVOGADA & ESCRITÓRIO                   */}
        {/* ======================================================== */}
        <section id="sobre" className="py-20 sm:py-26 border-t border-slate-200 bg-[#f7f4ed]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Photo Column */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c89b3c]/40 bg-[#051833] p-2 shadow-xl shadow-slate-300">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#082144]">
                      <Image
                        src={FOTO_PORTRAIT_SRC}
                        alt="Dra. Débora Cupertino no escritório"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                      />
                    </div>
                  </div>

                  {/* Decorative Badge */}
                  <div className="absolute -bottom-5 -right-5 hidden sm:block rounded-xl border border-[#c89b3c]/50 bg-[#051833] p-4 text-white shadow-xl max-w-xs">
                    <p className="text-[11px] font-bold text-[#f6e3a1] uppercase tracking-wider">
                      Atendimento Humanizado
                    </p>
                    <p className="mt-1 text-xs text-slate-300 leading-snug">
                      &quot;Cuidando do que realmente importa: sua família e seu futuro.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7">
                <Heading
                  eyebrow="Sobre a Advogada"
                  description="Com atuação ética, combativa e sensível, a Dra. Débora Cupertino consolidou-se como referência em Direito das Famílias e Previdenciário em Matozinhos - MG e em todo o país."
                >
                  Dra. Débora Cupertino: Advocacia Humanizada, Resolutiva e Ética
                </Heading>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  <p>
                    No escritório <strong className="font-semibold text-slate-900">Débora Cupertino Advocacia</strong>, temos a convicção de que por trás de um divórcio doloroso, de uma regulamentação de guarda, de um pedido de pensão alimentícia ou de um benefício do INSS negado existem <strong className="font-semibold text-slate-900">vidas reais, mães, crianças, idosos e famílias inteiras</strong> que necessitam de amparo sincero e competente.
                  </p>
                  <p>
                    Nossa missão profissional é aliar <strong className="font-semibold text-slate-900">rigor técnico impecável</strong> com <strong className="font-semibold text-slate-900">empatia e escuta sem julgamentos</strong>. Você não é tratado como um simples número de processo, mas como prioridade, recebendo orientações claras em cada etapa, sem termos técnicos complicados.
                  </p>
                  <p>
                    Com sede própria e acolhedora no Centro de <strong className="font-semibold text-slate-900">Matozinhos - MG</strong> e estrutura digital moderna para atendimento 100% online em qualquer estado brasileiro, construímos uma reputação avaliada com nota máxima de <strong className="font-semibold text-slate-900">5,0 estrelas no Google (106 avaliações)</strong> e uma comunidade ativa com milhares de seguidores em nossas redes sociais.
                  </p>
                </div>

                {/* Key Points */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 shadow-2xs">
                    <Scale size={18} className="text-[#c89b3c] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Especialista em Famílias</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Divórcio, guarda e pensão com foco na paz familiar.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3.5 shadow-2xs">
                    <Award size={18} className="text-[#c89b3c] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">Previdência & INSS</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Salário Maternidade, BPC/LOAS e aposentadorias.</p>
                    </div>
                  </div>
                </div>

                {/* Dra. Debora CTA */}
                <div className="mt-8 pt-4 flex flex-col sm:flex-row gap-3.5 items-center">
                  <GlowingButton
                    href={getWhatsAppUrl("Olá, Dra. Débora Cupertino! Gostaria de conversar diretamente sobre a minha demanda.")}
                    target="_blank"
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar Diretamente com a Dra. Débora</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#9e742a] transition-colors"
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
        <section id="diferenciais" className="py-20 sm:py-26 bg-[#051833] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading
              eyebrow="Nossos Diferenciais"
              description="Por que tantas famílias em Minas Gerais e no Brasil confiam suas demandas mais importantes ao nosso escritório."
              dark
            >
              Os 4 Pilares da Débora Cupertino Advocacia
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="rounded-xl border border-[#0d2f5e] bg-[#082144]/80 p-6 transition-all duration-300 hover:border-[#c89b3c]/50 hover:bg-[#082144]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0d2f5e] text-[#f6e3a1]">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  1. Atendimento Humanizado Real
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Escuta sensível e sem julgamentos. Entendemos a dor e o desgaste emocional de quem passa por separações ou disputas previdenciárias.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-xl border border-[#0d2f5e] bg-[#082144]/80 p-6 transition-all duration-300 hover:border-[#c89b3c]/50 hover:bg-[#082144]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0d2f5e] text-[#f6e3a1]">
                  <Sparkles size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  2. Celeridade Sem Juridiquês
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Explicamos cada fase processual de forma transparente e clara, sem palavras difíceis, com respostas rápidas pelo WhatsApp oficial.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-xl border border-[#0d2f5e] bg-[#082144]/80 p-6 transition-all duration-300 hover:border-[#c89b3c]/50 hover:bg-[#082144]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0d2f5e] text-[#f6e3a1]">
                  <Shield size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  3. Rigor Ético & Sigilo Absoluto
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Seus dados e documentos familiares são protegidos com absoluto sigilo profissional e rigorosa conformidade com o Código de Ética da OAB.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-xl border border-[#0d2f5e] bg-[#082144]/80 p-6 transition-all duration-300 hover:border-[#c89b3c]/50 hover:bg-[#082144]">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#0d2f5e] text-[#f6e3a1]">
                  <MapPin size={24} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-white">
                  4. Sede Física & Online Seguro
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Sede própria no Centro de Matozinhos - MG e plataforma digital 100% segura para quem prefere resolver tudo no celular sem sair de casa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 6: PROVA SOCIAL & DEPOIMENTOS REAIS GOOGLE 5,0 ★   */}
        {/* ======================================================== */}
        <section id="depoimentos" className="py-20 sm:py-26 bg-[#fcfbfa]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6">
              <Heading
                eyebrow="Prova Social Comprovada"
                description="Veja avaliações 100% autênticas e espontâneas de clientes que confiaram na atuação da Dra. Débora Cupertino em Matozinhos e em todo o Brasil."
              >
                106 Avaliações com Nota Máxima de 5,0 ★ no Google
              </Heading>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xs hover:border-[#c89b3c] hover:text-[#9e742a] transition-colors"
                >
                  <GoogleIcon size={16} />
                  <span>Ver perfil no Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Google Badges Extracted directly from client profile */}
            <div className="flex flex-wrap items-center gap-2 pt-2 pb-8 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 mr-1">
                Destaques Google:
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c89b3c]/30 bg-[#fef6e2] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                ☕ Ambiente Acolhedor (4 menções)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c89b3c]/30 bg-[#fef6e2] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                ⏱️ Tempo Hábil (3 menções)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c89b3c]/30 bg-[#fef6e2] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                ✨ Presteza & Atenção (2 menções)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c89b3c]/30 bg-[#fef6e2] px-3 py-1 text-xs font-semibold text-[#8e6319]">
                🎯 Resultados Rápidos (2 menções)
              </span>
            </div>

            {/* Interactive Category Filter Pills */}
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
                        ? "bg-[#051833] text-white shadow-xs"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-[#c89b3c] hover:text-slate-900"
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
                    className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all hover:border-[#c89b3c]/50 hover:shadow-md"
                  >
                    <div>
                      {/* Top Bar: Author, Status, Rating & Date */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#051833] text-xs font-bold text-[#f6e3a1] border border-[#c89b3c]/40">
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

                        <span className="rounded-full bg-[#fef6e2] px-2 py-0.5 text-[10px] font-bold text-[#8e6319] shrink-0">
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
                      <p className="font-serif text-sm font-bold text-[#061224] leading-snug">
                        &quot;{review.highlight}&quot;
                      </p>

                      {/* Full Review Text */}
                      <p className="mt-3 text-xs leading-relaxed text-slate-600">
                        {review.content}
                      </p>

                      {/* Owner Reply Box (If provided by Google) */}
                      {review.ownerReply && (
                        <div className="mt-4 rounded-xl border border-[#c89b3c]/20 bg-[#f7f4ed] p-3.5 text-xs text-slate-700">
                          <div className="flex items-center gap-1.5 font-bold text-[#8e6319] mb-1 text-[11px]">
                            <Sparkles size={13} className="text-[#c89b3c]" />
                            <span>Débora Cupertino Advocacia (proprietário)</span>
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
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 shadow-xs hover:border-[#c89b3c] hover:bg-slate-50 transition-colors cursor-pointer"
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
                <span>Ver Todas as 106 Avaliações no Google Maps</span>
                <ExternalLink size={13} />
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* DOBRA 7: PASSO A PASSO DO ATENDIMENTO                    */}
        {/* ======================================================== */}
        <section className="border-t border-slate-200 py-20 sm:py-26 bg-[#f7f4ed]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Heading
              eyebrow="Como Funciona"
              description="Um processo descomplicado, acolhedor e transparente desde a primeira mensagem até a conquista do seu direito."
            >
              Seu Atendimento em 4 Passos Simples
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c89b3c]/40">
                  01
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Primeiro Contato
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Você nos envia uma mensagem no WhatsApp oficial relatando sua situação familiar ou previdenciária com total sigilo.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c89b3c]/40">
                  02
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Análise Cuidadosa
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  A Dra. Débora analisa seus documentos e define a melhor estratégia (consensual, cartorária, administrativa no INSS ou judicial).
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c89b3c]/40">
                  03
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Ação Ágil & Protocolo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Assinatura digital prática no celular ou atendimento presencial no escritório, com protocolo imediato da sua demanda.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
                <span className="font-serif text-3xl font-black text-[#c89b3c]/40">
                  04
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-slate-900">
                  Acompanhamento Contínuo
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Você recebe atualizações periódicas a cada andamento processual até a efetiva liberação dos valores ou homologação do acordo.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                href={getWhatsAppUrl("Olá, Dra. Débora! Gostaria de dar o primeiro passo e tirar dúvidas sobre meu caso.")}
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
        <section id="duvidas" className="py-20 sm:py-26 bg-[#fcfbfa]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heading
                eyebrow="Tire Suas Dúvidas"
                description="Respostas claras para as principais dúvidas de clientes sobre Direito de Família e Previdenciário."
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
                      className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-[#061224] transition-colors hover:text-[#9e742a] cursor-pointer"
                    >
                      <span className="pr-4">{item.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="shrink-0 text-[#c89b3c]" />
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

            <div className="mt-10 rounded-xl border border-[#c89b3c]/30 bg-[#fef6e2] p-6 text-center">
              <p className="text-sm font-bold text-[#8e6319]">
                Ficou com alguma dúvida específica sobre o seu caso?
              </p>
              <p className="mt-1 text-xs text-slate-600">
                A Dra. Débora Cupertino está disponível para responder diretamente no WhatsApp.
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl("Olá, Dra. Débora! Gostaria de tirar uma dúvida específica.")}
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
        <section id="contato" className="py-20 sm:py-26 bg-[#051833] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Contact Info Column */}
              <div className="lg:col-span-6">
                <Heading
                  eyebrow="Onde Estamos & Contato"
                  description="Venha nos visitar em nossa sede em Matozinhos - MG ou converse agora mesmo pelo canal oficial de atendimento online."
                  dark
                >
                  Estamos Prontos para Acolher Sua Demanda
                </Heading>

                <div className="mt-8 space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#0d2f5e] text-[#f6e3a1]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Endereço / Sede Própria
                      </p>
                      <p className="mt-1 text-slate-300">
                        {ADDRESS_MATOZINHOS}
                      </p>
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[#f6e3a1] hover:underline"
                      >
                        <span>Traçar rota no Google Maps</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#0d2f5e] text-[#25D366]">
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
                        href={getWhatsAppUrl("Olá, Dra. Débora Cupertino! Gostaria de agendar uma consulta.")}
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
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#0d2f5e] text-[#f6e3a1]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Horário de Atendimento
                      </p>
                      <p className="mt-1 text-slate-300">
                        Segunda a Sexta · Aberto das 08:30 às 17:30
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Atendimento presencial com agendamento prévio para sua total privacidade.
                      </p>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#0d2f5e] text-[#f6e3a1]">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs uppercase tracking-wider">
                        Instagram Oficial
                      </p>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white"
                      >
                        <span>{INSTAGRAM_HANDLE}</span>
                        <span className="text-[11px] text-slate-400">({INSTAGRAM_STATS})</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map / Route Card */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="overflow-hidden rounded-2xl border border-[#0d2f5e] bg-[#082144] p-6 sm:p-8 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">
                        Débora Cupertino Advocacia
                      </h4>
                      <p className="text-xs text-[#f6e3a1]">
                        Centro · Matozinhos - MG
                      </p>
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-[#051833] px-3 py-1 text-xs font-bold text-[#f59e0b]">
                      <Star size={13} className="fill-[#f59e0b]" />
                      <span>5,0 ★</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                    Localização central de fácil acesso em Matozinhos, com estacionamento nas proximidades e ambiente privativo e acolhedor para cuidar das suas questões mais importantes com o respeito que sua família merece.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c89b3c] px-4 py-3 text-xs font-bold uppercase text-[#020b18] hover:bg-[#edd486] transition-colors"
                    >
                      <MapPin size={16} />
                      <span>Abrir no Google Maps</span>
                    </a>

                    <a
                      href={getWhatsAppUrl("Olá, Dra. Débora! Gostaria de agendar um horário presencial na sede em Matozinhos.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-[#051833] px-4 py-3 text-xs font-bold uppercase text-white hover:bg-slate-800 transition-colors"
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
        <footer className="border-t border-[#041328] bg-[#020b18] py-14 text-slate-400 text-xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-slate-800/80">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <Image
                  src={LOGO_WHITE_SRC}
                  alt="Débora Cupertino Advocacia"
                  width={340}
                  height={110}
                  className="h-[52px] w-auto object-contain opacity-95"
                />
                <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                  Advocacia humanizada e especializada em Direito das Famílias e Previdenciário. Sede própria em Matozinhos - MG e atendimento online para todo o Brasil.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={15} />
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Débora Cupertino!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-800 text-[#25D366] hover:bg-slate-700 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon size={15} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label="Google"
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
                      Sobre a Advogada
                    </a>
                  </li>
                  <li>
                    <a href="#diferenciais" className="hover:text-white transition-colors">
                      Atendimento Humanizado
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
                      Sede em Matozinhos
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
                      Divórcio Consensual e Litigioso
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Guarda e Convivência com Filhos
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Pensão Alimentícia & Cobrança
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Salário Maternidade (INSS)
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Benefício BPC/LOAS (Autismo / Idosos)
                    </a>
                  </li>
                  <li>
                    <a href="#servicos" className="hover:text-white transition-colors">
                      Aposentadorias & Auxílios do INSS
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
                    <MapPin size={14} className="text-[#c89b3c] shrink-0 mt-0.5" />
                    <span>R. Claudomiro Cupertino, 55 A - Centro, Matozinhos - MG</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                    <span>{PHONE_DISPLAY}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={14} className="text-[#c89b3c] shrink-0" />
                    <span>Seg. a Sex. · 08:30 às 17:30</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={14} className="text-[#f59e0b] shrink-0 fill-[#f59e0b]" />
                    <span>5,0 ★ no Google (106 avaliações)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* OAB Compliance Disclaimer */}
            <div className="pt-8 text-[11px] leading-relaxed text-slate-500">
              <p>
                <strong>Aviso Legal & Ética Profissional da Advocacia:</strong> Este website tem caráter exclusivamente informativo e institucional, em estrita conformidade com o Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB) e com o Provimento nº 205/2021 do Conselho Federal da OAB. As informações aqui contidas não configuram promessa de resultado nem substituem a consulta jurídica individualizada com uma advogada devidamente inscrita na OAB.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600">
                <p>© {new Date().getFullYear()} Débora Cupertino Advocacia. Todos os direitos reservados. CNPJ / OAB-MG.</p>
                <p>Matozinhos - MG · Atendimento Online Nacional</p>
              </div>
            </div>
          </div>
        </footer>

        {/* ======================================================== */}
        {/* BOTÃO FLUTUANTE DO WHATSAPP (CONVERSÃO ÁGIL E SUPORTE)   */}
        {/* ======================================================== */}
        <div className="fixed right-5 bottom-5 z-40 flex items-center gap-2.5">
          <a
            href={getWhatsAppUrl("Olá, Dra. Débora Cupertino! Gostaria de tirar uma dúvida sobre o meu caso.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/60 cursor-pointer"
            aria-label="Converse pelo WhatsApp com a Dra. Débora Cupertino"
          >
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-30" />
            <WhatsAppIcon size={30} />
          </a>
        </div>
      </main>
    </MotionConfig>
  );
}
