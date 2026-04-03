import { Link } from "react-router-dom";
import { Monitor, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold">
            <Monitor className="h-6 w-6 text-primary" />
            <span>Tecno<span className="text-primary">Max</span></span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Soluciones tecnológicas confiables para tu hogar o negocio.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-heading font-semibold">Enlaces</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <Link to="/robotica" className="hover:text-primary transition-colors">Robótica</Link>
            <Link to="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link>
            <Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-heading font-semibold">Contacto</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> +58 412-6791707</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@tecnomaxsolutions.com</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tecno Max Solutions. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
