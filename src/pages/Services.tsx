import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Monitor, HardDrive, Shield, Settings, Cpu, RotateCcw, Camera, Wifi, UserCheck, Bot, GraduationCap, Gamepad2, ArrowRight, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/584126791707?text=Hola%20quiero%20información%20sobre%20sus%20servicios%20de%20Tecno%20Max%20Solutions";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const computerServices = [
  { icon: Settings, title: "Limpieza interna de equipos" },
  { icon: HardDrive, title: "Cambio de piezas (RAM, disco duro, etc.)" },
  { icon: Monitor, title: "Instalación de Windows y Linux" },
  { icon: Shield, title: "Eliminación de virus" },
  { icon: Cpu, title: "Optimización del sistema" },
  { icon: RotateCcw, title: "Formateo y reinstalación" },
];

const cctvServices = [
  { icon: Camera, title: "Instalación para hogares y negocios" },
  { icon: Wifi, title: "Configuración de monitoreo remoto" },
  { icon: UserCheck, title: "Asesoría personalizada" },
];

const roboticsServices = [
  { icon: Bot, title: "Para niños y adolescentes" },
  { icon: GraduationCap, title: "Nivel básico, intermedio y avanzado" },
  { icon: Gamepad2, title: "Aprendizaje práctico y divertido" },
];

const ServiceBlock = ({ title, description, items, color }: { title: string; description: string; items: { icon: any; title: string }[]; color: string }) => (
  <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
    <h3 className="font-heading text-2xl font-bold">{title}</h3>
    <p className="mt-2 text-muted-foreground">{description}</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <motion.div key={item.title} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${color}`}>
            <item.icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-sm font-medium">{item.title}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const Services = () => (
  <Layout>
    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h1 className="font-heading text-4xl font-bold text-hero-foreground md:text-5xl">Nuestros Servicios</h1>
        <p className="mt-4 text-hero-muted md:text-lg">Soluciones tecnológicas completas para todas tus necesidades</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container space-y-12">
        <ServiceBlock
          title="Reparación y Mantenimiento de Computadoras"
          description="Mantén tu equipo funcionando al máximo rendimiento con nuestro servicio técnico especializado."
          items={computerServices}
          color="gradient-primary"
        />
        <ServiceBlock
          title="Instalación de Cámaras CCTV"
          description="Protege tu hogar o negocio con sistemas de videovigilancia profesional."
          items={cctvServices}
          color="gradient-accent"
        />
        <ServiceBlock
          title="Clases de Robótica Educativa"
          description="Educación STEM práctica y divertida para las nuevas generaciones."
          items={roboticsServices}
          color="gradient-primary"
        />
      </div>
    </section>

    <section className="gradient-hero py-16">
      <div className="container text-center">
        <h2 className="font-heading text-3xl font-bold text-hero-foreground">¿Necesitas alguno de nuestros servicios?</h2>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg">Escribir por WhatsApp</Button>
          </a>
          <Link to="/contacto">
            <Button variant="heroOutline" size="lg">Solicitar Servicio <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
