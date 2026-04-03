import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe, Smartphone, MessageCircle, FileText, Target, Zap, Share2,
  CheckCircle, AlertTriangle, Lightbulb, ArrowRight, Star, Send, BarChart3, Palette, Rocket
} from "lucide-react";
import heroImg from "@/assets/web-hero.jpg";
import portfolioMusic from "@/assets/portfolio-music.jpg";
import portfolioDental from "@/assets/portfolio-dental.jpg";
import portfolioCarpentry from "@/assets/portfolio-carpentry.jpg";

const WA_WEB = "https://wa.me/584126791707?text=Hola%20quiero%20información%20sobre%20páginas%20web";

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const features = [
  { icon: Palette, text: "Diseño profesional personalizado" },
  { icon: Smartphone, text: "Adaptado a celulares" },
  { icon: MessageCircle, text: "Botón de WhatsApp integrado" },
  { icon: FileText, text: "Formularios de contacto" },
  { icon: Target, text: "Estructura enfocada en generar clientes" },
  { icon: Zap, text: "Carga rápida" },
  { icon: Share2, text: "Integración con redes sociales" },
];

const portfolio = [
  {
    title: "Music with Skarli",
    desc: "Página web para clases de violín enfocada en familias. Diseño amigable, claro y optimizado para captar estudiantes.",
    img: portfolioMusic,
    url: "https://www.musicwithskarli.com/",
  },
  {
    title: "LJ Larsen DDS",
    desc: "Sitio web profesional para clínica dental. Diseño limpio, confiable y enfocado en generar citas.",
    img: portfolioDental,
    url: "https://www.ljlarsendds.com/",
  },
  {
    title: "Carlos Carpintería",
    desc: "Página web para negocio de carpintería con diseño cálido, galería de trabajos y enfoque en generar cotizaciones.",
    img: portfolioCarpentry,
    url: "https://carlosebanos.lovable.app/",
  },
];

const plans = [
  { title: "Página Básica", desc: "Ideal para comenzar presencia online", icon: Globe },
  { title: "Página Profesional", desc: "Para negocios que quieren crecer", icon: BarChart3 },
  { title: "Página Completa", desc: "Para negocios que buscan más clientes", icon: Rocket },
];

const steps = [
  { num: "01", title: "Nos escribes por WhatsApp", icon: Send },
  { num: "02", title: "Analizamos tu negocio", icon: Lightbulb },
  { num: "03", title: "Diseñamos tu página", icon: Palette },
  { num: "04", title: "Publicamos tu sitio", icon: Rocket },
];

const testimonials = [
  { text: "Excelente servicio, rápido y confiable. Mi página web quedó exactamente como la quería.", name: "Carlos M.", role: "Emprendedor" },
  { text: "Mi negocio ahora tiene más clientes gracias a mi página web. La inversión valió la pena.", name: "María L.", role: "Dueña de negocio" },
];

const WebDesign = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="container relative z-10 grid items-center gap-10 md:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
          <motion.h1 variants={fade} className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Tu negocio necesita una página web que{" "}
            <span className="text-gradient">venda por ti</span>
          </motion.h1>
          <motion.p variants={fade} className="text-lg text-muted-foreground md:text-xl">
            Creamos páginas modernas, rápidas y diseñadas para atraer clientes
          </motion.p>
          <motion.div variants={fade} className="flex flex-col gap-3 sm:flex-row">
            <a href={WA_WEB} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full sm:w-auto gap-2">
                <MessageCircle className="h-5 w-5" /> Solicitar cotización por WhatsApp
              </Button>
            </a>
          </motion.div>
          <motion.p variants={fade} className="text-sm text-muted-foreground">
            Recibe una propuesta personalizada según tu negocio
          </motion.p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
          <img src={heroImg} alt="Diseño web profesional" width={1280} height={720} className="rounded-2xl shadow-2xl border border-border/30" />
        </motion.div>
      </div>
    </section>

    {/* Problema */}
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
          <motion.div variants={fade} className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </motion.div>
          <motion.h2 variants={fade} className="font-heading text-3xl font-bold md:text-4xl">
            ¿Tu negocio aún no tiene presencia online?
          </motion.h2>
          <motion.p variants={fade} className="text-lg text-muted-foreground leading-relaxed">
            Muchos negocios pierden clientes por no tener una página web profesional.
            Hoy, los clientes buscan en internet antes de tomar una decisión.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Solución */}
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container max-w-3xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
          <motion.div variants={fade} className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Lightbulb className="h-8 w-8 text-primary" />
          </motion.div>
          <motion.h2 variants={fade} className="font-heading text-3xl font-bold md:text-4xl">
            Creamos tu <span className="text-gradient">presencia digital</span>
          </motion.h2>
          <motion.p variants={fade} className="text-lg text-muted-foreground leading-relaxed">
            Diseñamos páginas web que muestran tus servicios de forma clara, generan confianza
            y ayudan a convertir visitas en clientes.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Qué incluye */}
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading title="¿Qué incluye tu página web?" subtitle="Todo lo que necesitas para una presencia online efectiva" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div key={f.text} variants={fade}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{f.text}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Portafolio */}
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <SectionHeading title="Nuestro Portafolio" subtitle="Proyectos que hablan por nosotros" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12 grid gap-8 md:grid-cols-3">
          {portfolio.map((p) => (
            <motion.div key={p.title} variants={fade}>
              <Card className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a href={p.url || WA_WEB} target="_blank" rel="noopener noreferrer">
                      <Button variant="hero" size="sm" className="gap-1">
                        Ver proyecto <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
                <CardContent className="space-y-2 p-5">
                  <h3 className="font-heading text-lg font-bold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Oferta */}
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading title="Opciones para tu negocio" subtitle="Cada proyecto se adapta a tus necesidades" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div key={plan.title} variants={fade}>
              <Card className={`relative border-border/50 bg-card/50 backdrop-blur-sm text-center hover:shadow-xl transition-all duration-300 ${i === 1 ? "border-primary/50 ring-1 ring-primary/20" : ""}`}>
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Popular
                  </div>
                )}
                <CardContent className="flex flex-col items-center gap-4 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <plan.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">{plan.title}</h3>
                  <p className="text-muted-foreground">{plan.desc}</p>
                  <a href={WA_WEB} target="_blank" rel="noopener noreferrer" className="mt-2 w-full">
                    <Button variant={i === 1 ? "hero" : "heroOutline"} className="w-full gap-2">
                      <MessageCircle className="h-4 w-4" /> Solicitar cotización
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-8 text-center text-muted-foreground">
          Solicita tu cotización por WhatsApp. Cada proyecto es único.
        </p>
      </div>
    </section>

    {/* Proceso */}
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <SectionHeading title="¿Cómo funciona?" subtitle="Un proceso simple y efectivo" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <motion.div key={s.num} variants={fade} className="relative text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary text-primary-foreground font-heading text-xl font-bold shadow-lg">
                {s.num}
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <s.icon className="h-4 w-4 text-primary" />
                <h3 className="font-heading font-bold">{s.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Testimonios */}
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionHeading title="Lo que dicen nuestros clientes" subtitle="Resultados reales de negocios reales" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fade}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{t.text}"</p>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA Final */}
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto max-w-2xl rounded-3xl gradient-primary p-10 md:p-14 text-center text-primary-foreground shadow-2xl"
        >
          <motion.h2 variants={fade} className="font-heading text-3xl font-bold md:text-4xl">
            ¿Listo para tener tu página web?
          </motion.h2>
          <motion.p variants={fade} className="mt-4 text-lg text-primary-foreground/80">
            Contáctanos por WhatsApp y recibe una cotización personalizada.
          </motion.p>
          <motion.div variants={fade} className="mt-8">
            <a href={WA_WEB} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="gap-2 text-base">
                <MessageCircle className="h-5 w-5" /> Solicitar cotización ahora
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default WebDesign;
