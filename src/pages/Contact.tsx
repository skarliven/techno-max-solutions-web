import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_URL = "https://wa.me/584126791707?text=Hola%20quiero%20información%20sobre%20sus%20servicios%20de%20Tecno%20Max%20Solutions";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Error", description: "Por favor completa los campos obligatorios.", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto contigo pronto." });
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      console.error("Error sending:", err);
      toast({ title: "Error", description: "No se pudo enviar el mensaje. Intenta de nuevo.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <section className="gradient-hero py-16">
        <div className="container text-center">
          <h1 className="font-heading text-4xl font-bold text-hero-foreground md:text-5xl">Contacto</h1>
          <p className="mt-4 text-hero-muted md:text-lg">Estamos listos para ayudarte</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="mb-6 font-heading text-2xl font-bold">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Nombre *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} maxLength={100} required />
                <Input placeholder="Teléfono *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} maxLength={20} required />
                <Input placeholder="Correo electrónico" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} maxLength={255} />
                <Select value={form.service} onValueChange={v => setForm({ ...form, service: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Servicio que necesita" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reparacion">Reparación de Computadoras</SelectItem>
                    <SelectItem value="camaras">Cámaras CCTV</SelectItem>
                    <SelectItem value="robotica">Clases de Robótica</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Mensaje" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} maxLength={1000} />
                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                </Button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="mb-6 font-heading text-2xl font-bold">Información de contacto</h2>
              <div className="space-y-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-whatsapp/30 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp/10">
                    <MessageCircle className="h-6 w-6 text-whatsapp" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+58 412-6791707</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-sm text-muted-foreground">+58 412-6791707</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Correo</p>
                    <p className="text-sm text-muted-foreground">info@tecnomaxsolutions.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
