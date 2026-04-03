import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Bot, Lightbulb, Users, Trophy, Puzzle, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/584XXXXXXXXX?text=Hola%20quiero%20información%20sobre%20las%20clases%20de%20robótica";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const benefits = [
  { icon: Lightbulb, title: "Pensamiento lógico", desc: "Desarrollan habilidades de resolución de problemas y pensamiento computacional." },
  { icon: Users, title: "Trabajo en equipo", desc: "Aprenden a colaborar y comunicarse efectivamente en proyectos." },
  { icon: Puzzle, title: "Creatividad", desc: "Diseñan y construyen sus propios robots y proyectos tecnológicos." },
  { icon: Trophy, title: "Confianza", desc: "Ganan seguridad al ver sus creaciones funcionar en la vida real." },
];

const levels = [
  { level: "Básico", ages: "7-10 años", desc: "Introducción a la robótica con bloques y programación visual." },
  { level: "Intermedio", ages: "11-14 años", desc: "Construcción de robots más complejos y programación con código." },
  { level: "Avanzado", ages: "15-17 años", desc: "Proyectos avanzados con sensores, automatización y competencias." },
];

const Robotics = () => (
  <Layout>
    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h1 className="font-heading text-4xl font-bold text-hero-foreground md:text-5xl">Clases de Robótica Educativa</h1>
        <p className="mt-4 text-hero-muted md:text-lg">Aprendizaje práctico y divertido para niños y adolescentes</p>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20">
      <div className="container">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold">Beneficios para los niños</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div key={b.title} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Levels */}
    <section className="border-y border-border bg-muted/50 py-20">
      <div className="container">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold">Niveles y edades</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {levels.map((l, i) => (
            <motion.div key={l.level} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-xl border border-border bg-card p-8">
              <span className="inline-block rounded-full gradient-primary px-4 py-1 text-sm font-semibold text-primary-foreground">{l.level}</span>
              <p className="mt-3 text-sm font-medium text-primary">{l.ages}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What they learn */}
    <section className="py-20">
      <div className="container max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold">¿Qué aprenderán?</h2>
        <ul className="mt-8 space-y-3 text-left text-muted-foreground">
          <li className="flex items-start gap-3"><Cpu className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> Fundamentos de programación y lógica computacional</li>
          <li className="flex items-start gap-3"><Cpu className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> Construcción y diseño de robots funcionales</li>
          <li className="flex items-start gap-3"><Cpu className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> Electrónica básica y uso de sensores</li>
          <li className="flex items-start gap-3"><Cpu className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> Resolución de desafíos y competencias de robótica</li>
        </ul>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h2 className="font-heading text-3xl font-bold text-hero-foreground">¡Inscribe a tu hijo hoy!</h2>
        <p className="mt-4 text-hero-muted">Solicita información sin compromiso</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
          <Button variant="whatsapp" size="lg">Solicitar información por WhatsApp</Button>
        </a>
      </div>
    </section>
  </Layout>
);

export default Robotics;
