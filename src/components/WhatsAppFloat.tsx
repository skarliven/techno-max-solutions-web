import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/584XXXXXXXXX?text=Hola%20quiero%20información%20sobre%20sus%20servicios";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-all hover:scale-110 glow-accent animate-float"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppFloat;
