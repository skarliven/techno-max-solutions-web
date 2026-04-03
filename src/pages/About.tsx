import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Heart, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: ShieldCheck, title: "Confianza", desc: "Trabajamos con transparencia y honestidad en cada servicio." },
  { icon: Heart, title: "Atención personalizada", desc: "Cada cliente recibe un trato único según sus necesidades." },
  { icon: Award, title: "Experiencia", desc: "Años de experiencia respaldan la calidad de nuestro trabajo." },
];

const About = () => (
  <Layout>
    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h1 className="font-heading text-4xl font-bold text-hero-foreground md:text-5xl">Sobre Nosotros</h1>
        <p className="mt-4 text-hero-muted md:text-lg">Conoce quiénes somos y por qué confiar en nosotros</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-heading text-3xl font-bold">Tecno Max Solutions</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Somos un equipo apasionado por la tecnología, dedicado a ofrecer soluciones confiables y accesibles para hogares y negocios. Con años de experiencia en el sector, nos especializamos en reparación de equipos de cómputo, instalación de sistemas de seguridad y educación tecnológica a través de nuestras clases de robótica.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nuestro enfoque está en brindar un servicio personalizado, donde cada cliente recibe atención directa y soluciones adaptadas a sus necesidades específicas. Creemos que la tecnología debe ser accesible para todos y trabajamos cada día para hacer eso posible.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="border-y border-border bg-muted/50 py-20">
      <div className="container">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold">Nuestros Valores</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div key={v.title} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h2 className="font-heading text-3xl font-bold text-hero-foreground">¿Quieres trabajar con nosotros?</h2>
        <Link to="/contacto" className="mt-6 inline-block">
          <Button variant="heroOutline" size="lg">Contáctanos <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default About;
