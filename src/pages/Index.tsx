import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Monitor, Camera, Bot, Zap, ShieldCheck, DollarSign, ArrowRight, Star, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = "https://wa.me/584126791707?text=Hola%20quiero%20información%20sobre%20sus%20servicios%20de%20Tecno%20Max%20Solutions";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { icon: Monitor, title: "Reparación de Computadoras", desc: "Mantenimiento, limpieza, cambio de piezas y optimización de equipos.", link: "/servicios" },
  { icon: Camera, title: "Cámaras CCTV", desc: "Instalación y configuración de sistemas de videovigilancia para hogares y negocios.", link: "/servicios" },
  { icon: Bot, title: "Clases de Robótica", desc: "Educación tecnológica práctica y divertida para niños y adolescentes.", link: "/robotica" },
];

const benefits = [
  { icon: Zap, title: "Rápido", desc: "Soluciones en el menor tiempo posible." },
  { icon: ShieldCheck, title: "Confiable", desc: "Trabajo profesional con garantía." },
  { icon: DollarSign, title: "Económico", desc: "Precios justos y competitivos." },
];

const testimonials = [
  { name: "María G.", text: "Excelente servicio, repararon mi laptop en un día. ¡Totalmente recomendados!", rating: 5 },
  { name: "Carlos R.", text: "Instalaron cámaras en mi negocio y quedó perfecto. Muy profesionales.", rating: 5 },
  { name: "Ana P.", text: "Mi hijo ama las clases de robótica. Ha aprendido mucho y se divierte.", rating: 5 },
];

const faqs = [
  { q: "¿Cuánto tiempo tarda una reparación?", a: "Depende del tipo de falla. La mayoría de reparaciones se completan en 24-48 horas." },
  { q: "¿Hacen servicio a domicilio?", a: "Sí, ofrecemos servicio a domicilio para instalaciones de cámaras y diagnóstico de equipos." },
  { q: "¿Qué edades son las clases de robótica?", a: "Nuestras clases son para niños y adolescentes de 7 a 17 años." },
  { q: "¿Ofrecen garantía?", a: "Sí, todos nuestros servicios incluyen garantía por el trabajo realizado." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(210 100% 50% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(160 70% 45% / 0.1) 0%, transparent 50%)" }} />
      <div className="container relative py-20 md:py-32">
        <motion.div initial="hidden" animate="visible" className="mx-auto max-w-3xl text-center">
          <motion.h1 variants={fadeUp} custom={0} className="font-heading text-4xl font-bold leading-tight tracking-tight text-hero-foreground md:text-5xl lg:text-6xl">
            Soluciones Tecnológicas <span className="text-gradient">Confiables</span> para tu Hogar o Negocio
          </motion.h1>
          <motion.p variants={fadeUp} custom={1} className="mt-6 text-lg text-hero-muted md:text-xl">
            Reparación de computadoras, instalación de cámaras y clases de robótica
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="text-base">
                Contáctanos por WhatsApp
              </Button>
            </a>
            <Link to="/contacto">
              <Button variant="heroOutline" size="lg" className="text-base">
                Solicitar Servicio <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Services Summary */}
    <section className="py-20">
      <div className="container">
        <SectionHeading title="Nuestros Servicios" subtitle="Ofrecemos soluciones tecnológicas integrales" />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link to={s.link} className="group block rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors group-hover:gap-2">
                  Ver más <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="border-y border-border bg-muted/50 py-20">
      <div className="container">
        <SectionHeading title="¿Por qué elegirnos?" subtitle="Nos enfocamos en brindarte la mejor experiencia" />
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div key={b.title} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container">
        <SectionHeading title="Lo que dicen nuestros clientes" subtitle="La satisfacción de nuestros clientes es nuestra mejor carta de presentación" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="border-t border-border bg-muted/50 py-20">
      <div className="container max-w-2xl">
        <SectionHeading title="Preguntas Frecuentes" />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-heading">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-hero py-20">
      <div className="container text-center">
        <h2 className="font-heading text-3xl font-bold text-hero-foreground md:text-4xl">
          ¿Listo para resolver tu problema tecnológico?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-hero-muted">
          Contáctanos hoy y recibe una atención rápida y profesional
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg">Escribir por WhatsApp</Button>
          </a>
          <Link to="/contacto">
            <Button variant="heroOutline" size="lg">Solicitar Servicio</Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
