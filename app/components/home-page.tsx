"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const whatsappLink = "https://wa.me/5581984984324?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20FE%20Prime.";

const services = [
  {
    title: "Passagens Aereas",
    description:
      "Atendimento consultivo para viagens com praticidade, suporte e curadoria premium.",
    icon: PlaneIcon,
  },
  {
    title: "Espaco de Beleza",
    description:
      "Bem-estar, cuidado e uma experiencia pensada para quem valoriza imagem e exclusividade.",
    icon: SparklesIcon,
  },
  {
    title: "Perfumaria",
    description:
      "Selecao sofisticada para presentes, assinatura pessoal e momentos memoraveis.",
    icon: BottleIcon,
  },
  {
    title: "Impressoes 3D",
    description:
      "Projetos especiais com precisao, personalizacao e acabamento de alto padrao.",
    icon: CubeIcon,
  },
  {
    title: "Eletronicos",
    description:
      "Solucoes selecionadas com foco em desempenho, utilidade e conveniencia.",
    icon: DeviceIcon,
  },
  {
    title: "Shows e Eventos",
    description:
      "Acesso facilitado para experiencias marcantes com conforto e atendimento dedicado.",
    icon: TicketIcon,
  },
  {
    title: "Coworking",
    description:
      "Ambiente funcional e refinado para reunioes, produtividade e networking de alto nivel.",
    icon: BuildingIcon,
  },
];

const differentials = [
  "Atendimento personalizado",
  "Diversos servicos em um so lugar",
  "Localizacao privilegiada",
  "Agilidade e praticidade",
];

export function HomePage() {
  return (
    <main className="relative overflow-hidden bg-background text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(5,5,5,0.18)_35%,rgba(5,5,5,0.9)_100%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0, ease: "easeOut" },
          }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <span className="mb-6 inline-flex items-center rounded-full border border-[var(--border-soft)] bg-white/3 px-4 py-2 text-[0.72rem] uppercase tracking-[0.34em] text-[var(--primary-soft)] backdrop-blur-sm">
            Luxo, exclusividade e conveniencia
          </span>

          <div className="relative mb-10 flex h-28 w-28 items-center justify-center rounded-full border border-[var(--border-soft)] bg-black/40 shadow-[0_0_90px_rgba(212,175,55,0.18)]">
            <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle,rgba(244,228,163,0.24),transparent_65%)] blur-xl" />
            <Image
              src="/fe-prime-logo.png"
              alt="Logo FE Prime"
              width={42}
              height={42}
              priority
              className="relative h-auto w-10"
            />
          </div>

          <h1 className="font-display max-w-4xl text-5xl leading-tight font-semibold tracking-[0.02em] text-white sm:text-6xl lg:text-7xl">
            Uma experiencia premium em um so lugar
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
            Viagens, beleza, perfumaria, coworking e solucoes exclusivas para voce
            com atendimento personalizado e presenca de alto padrao.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="luxury-button rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] transition-all duration-300"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-[var(--border-soft)] bg-white/3 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:border-[var(--primary)] hover:bg-white/6"
            >
              Explorar servicos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.15, ease: "easeOut" },
          }}
          className="mt-16 grid gap-4 md:grid-cols-3"
        >
          {[
            "Atendimento consultivo e humano",
            "Marca premium com servicos integrados",
            "Conversao direta e pratica via WhatsApp",
          ].map((item) => (
            <div
              key={item}
              className="luxury-panel rounded-3xl px-6 py-6 text-sm uppercase tracking-[0.24em] text-[var(--primary-soft)]"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </section>

      <section id="servicos" className="relative mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Servicos"
          title="Um portfolio premium para necessidades do dia a dia e momentos especiais"
          description="Cada servico foi apresentado como extensao de uma marca exclusiva: forte no visual, clara na proposta e elegante na conversao."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="luxury-panel group rounded-[2rem] p-7 transition-transform duration-300"
              >
                <div className="gold-ring mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-black/45 text-[var(--primary)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.22)]">
                  <Icon />
                </div>
                <h3 className="font-display text-2xl text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                  {service.description}
                </p>
                <div className="gold-divider mt-8 h-px w-full" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary-soft)] transition-colors duration-300 group-hover:text-white"
                >
                  Solicitar atendimento
                  <span className="text-[var(--primary)]">+</span>
                </a>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="luxury-panel rounded-[2rem] p-8 sm:p-10"
          >
            <span className="text-xs uppercase tracking-[0.34em] text-[var(--primary-soft)]">
              Diferenciais
            </span>
            <h2 className="font-display mt-4 max-w-xl text-4xl leading-tight text-white sm:text-5xl">
              Sofisticacao tambem esta na forma de atender
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted-foreground)]">
              A FE Prime se posiciona como uma marca de conveniencia premium:
              variedade de servicos com linguagem visual refinada, contato direto
              e atendimento mais humano do que uma vitrine comum.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {differentials.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-[var(--border-soft)] bg-black/35 px-5 py-5 text-sm uppercase tracking-[0.18em] text-[var(--muted-foreground)]"
                >
                  <span className="mr-3 text-[var(--primary)]">+</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="luxury-panel rounded-[2rem] p-8 sm:p-10"
          >
            <span className="text-xs uppercase tracking-[0.34em] text-[var(--primary-soft)]">
              Experiencia FE Prime
            </span>
            <p className="font-display mt-4 text-3xl leading-tight text-white">
              Menos volume. Mais curadoria, presenca e confianca em cada contato.
            </p>
            <div className="gold-divider my-8 h-px w-full" />
            <div className="space-y-6 text-sm leading-8 text-[var(--muted-foreground)]">
              <p>
                A marca nasce de uma assinatura visual minima e precisa. Por isso,
                a identidade do site privilegia contraste, respiracao, luz dourada
                controlada e composicao elegante.
              </p>
              <p>
                O resultado nao parece loja popular. Parece uma operacao premium
                que resolve demandas com discricao, praticidade e status.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="luxury-panel overflow-hidden rounded-[2.4rem] p-8 sm:p-10 lg:p-12"
        >
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_65%)] blur-2xl" />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative">
              <span className="text-xs uppercase tracking-[0.34em] text-[var(--primary-soft)]">
                Contato
              </span>
              <h2 className="font-display mt-4 text-4xl leading-tight text-white sm:text-5xl">
                Solicite um atendimento exclusivo
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted-foreground)]">
                Use o formulario para iniciar o contato ou acione o WhatsApp para
                um atendimento mais rapido e personalizado.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full border border-[var(--border-soft)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary-soft)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-black/35"
              >
                Atendimento via WhatsApp
              </a>
            </div>

            <form className="grid gap-4">
              <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
                Nome
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="rounded-2xl border border-[var(--border-soft)] bg-black/45 px-5 py-4 text-white outline-none transition-colors duration-300 placeholder:text-white/35 focus:border-[var(--primary)]"
                />
              </label>
              <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
                WhatsApp
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="rounded-2xl border border-[var(--border-soft)] bg-black/45 px-5 py-4 text-white outline-none transition-colors duration-300 placeholder:text-white/35 focus:border-[var(--primary)]"
                />
              </label>
              <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
                Servico de interesse
                <select className="rounded-2xl border border-[var(--border-soft)] bg-black/45 px-5 py-4 text-white outline-none transition-colors duration-300 focus:border-[var(--primary)]">
                  <option>Passagens Aereas</option>
                  <option>Espaco de Beleza</option>
                  <option>Perfumaria</option>
                  <option>Impressoes 3D</option>
                  <option>Eletronicos</option>
                  <option>Shows e Eventos</option>
                  <option>Coworking</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
                Mensagem
                <textarea
                  rows={5}
                  placeholder="Descreva rapidamente o que voce procura."
                  className="rounded-2xl border border-[var(--border-soft)] bg-black/45 px-5 py-4 text-white outline-none transition-colors duration-300 placeholder:text-white/35 focus:border-[var(--primary)]"
                />
              </label>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="luxury-button mt-2 inline-flex justify-center rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] transition-all duration-300"
              >
                Enviar solicitacao
              </a>
            </form>
          </div>
        </motion.div>
      </section>

      <footer className="relative mt-10 border-t border-[var(--border-soft)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-soft)] bg-black/45">
                <Image
                  src="/fe-prime-logo.png"
                  alt="Logo FE Prime"
                  width={22}
                  height={22}
                  className="h-auto w-5"
                />
              </div>
              <div>
                <p className="font-display text-2xl text-white">FE Prime</p>
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--primary-soft)]">
                  Marca premium multissolucoes
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted-foreground)]">
              Uma identidade criada para transmitir luxo, precisao e confianca,
              com foco em conversao qualificada e posicionamento de alto padrao.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--primary-soft)]">
                Contato
              </p>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors duration-300 hover:text-white"
                >
                  WhatsApp
                </a>
                <a href="#" className="block transition-colors duration-300 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="block transition-colors duration-300 hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--primary-soft)]">
                Presenca
              </p>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
                <p>Atendimento personalizado</p>
                <p>Experiencia premium</p>
                <p>Exclusividade em cada contato</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <span className="text-xs uppercase tracking-[0.34em] text-[var(--primary-soft)]">
        {eyebrow}
      </span>
      <h2 className="font-display mt-4 text-4xl leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-6 text-base leading-8 text-[var(--muted-foreground)]">
        {description}
      </p>
    </motion.div>
  );
}

function IconBase({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current">
      {children}
    </svg>
  );
}

function PlaneIcon() {
  return (
    <IconBase>
      <path d="M3 13.5h7.5l3.5 6 1.5-.5-1.5-5h5.5c1.1 0 2-.9 2-2s-.9-2-2-2H14l1.5-5-1.5-.5-3.5 6H3l1.5 2Z" strokeWidth="1.5" />
    </IconBase>
  );
}

function SparklesIcon() {
  return (
    <IconBase>
      <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" strokeWidth="1.5" />
      <path d="M19.5 3.5 20 5l1.5.5-1.5.5-.5 1.5-.5-1.5L17.5 5l1.5-.5.5-1.5Z" strokeWidth="1.5" />
    </IconBase>
  );
}

function BottleIcon() {
  return (
    <IconBase>
      <path d="M10 3h4v3h-1v2.2l3 3.3V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-7.5l3-3.3V6h-1V3Z" strokeWidth="1.5" />
      <path d="M9 12h6" strokeWidth="1.5" />
    </IconBase>
  );
}

function CubeIcon() {
  return (
    <IconBase>
      <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" strokeWidth="1.5" />
      <path d="m5 7 7 4 7-4M12 11v10" strokeWidth="1.5" />
    </IconBase>
  );
}

function DeviceIcon() {
  return (
    <IconBase>
      <rect x="4" y="5" width="16" height="12" rx="2" strokeWidth="1.5" />
      <path d="M9 19h6" strokeWidth="1.5" />
    </IconBase>
  );
}

function TicketIcon() {
  return (
    <IconBase>
      <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V8Z" strokeWidth="1.5" />
      <path d="M12 7v10" strokeWidth="1.5" strokeDasharray="2 2" />
    </IconBase>
  );
}

function BuildingIcon() {
  return (
    <IconBase>
      <path d="M5 21V6.5A1.5 1.5 0 0 1 6.5 5H14v16M14 9h4a1 1 0 0 1 1 1v11M9 9h1M9 13h1M9 17h1M12 9h1M12 13h1M12 17h1" strokeWidth="1.5" />
    </IconBase>
  );
}
