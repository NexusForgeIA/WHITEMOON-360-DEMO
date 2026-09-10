/* ============================================================
   WHITEMOON 360 — CONFIG (fuente única: la cargan web y panel)
   Reskin por cliente = cambiar SOLO este archivo + colores + fotos.
   NO poner aquí NADA secreto: la anon key es pública (la RLS protege).
   Nunca meter service_role ni el x-alta-secret aquí.
   ============================================================ */
window.WM360_CONFIG = {
  // --- Conexión (fijo) ---
  SUPABASE_URL: "https://mlaqtniujnvfxcvcourm.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYXF0bml1am52ZnhjdmNvdXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4MzUyMzIsImV4cCI6MjA5MzQxMTIzMn0.Neh7VUS8ADsxf0DPab0JoJyGXOAXnLIaXzXbKzj2BGs",
  CHAT_FN: "wm360-chat",
  NOTIFY_FN: "wm360-notify",

  // --- Identidad del cliente (SE CAMBIA en cada alta) ---
  CLIENTE_ID: "wm360-demo",
  MARCA: "Limpiezas Demo",
  SECTOR: "Limpieza profesional",

  // --- Contacto / CTA ---
  TEL: "+34600000000",
  WHATSAPP: "34600000000",
  EMAIL: "hola@limpiezasdemo.es",

  // --- Branding (acento; se reskina por cliente) ---
  COLOR_P:  "#6d3bff",
  COLOR_P2: "#8a5cff",
  COLOR_G:  "#0aa06e",

  // --- Web: hero ---
  HERO_TITULO: "Tu servicio, atendido de principio a fin",
  HERO_SUB: "Presupuesto rápido, trabajo garantizado y un asistente que te atiende 24/7.",
  HERO_CTA: "Hablar con el asistente",
  IMG_HERO: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop",

  // --- Web: servicios (con foto) ---
  SERVICIOS: [
    { t: "Presupuesto sin compromiso", desc: "Cuéntanos qué necesitas y te damos un presupuesto claro, sin letra pequeña.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop" },
    { t: "Servicio urgente", desc: "Atendemos imprevistos con rapidez. Disponibilidad amplia y respuesta ágil.",
      img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&auto=format&fit=crop" },
    { t: "Mantenimiento periódico", desc: "Planes a medida para que no tengas que preocuparte de nada.",
      img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80&auto=format&fit=crop" },
  ],

  // --- Web: por qué nosotros ---
  VENTAJAS: [
    { t: "Respuesta rápida", desc: "Te contactamos enseguida; el asistente recoge tu caso a cualquier hora." },
    { t: "Profesionales de confianza", desc: "Equipo propio, trato cercano y trabajo bien hecho." },
    { t: "Sin sorpresas", desc: "Presupuesto claro antes de empezar. Lo que hablamos es lo que pagas." },
  ],

  // --- Web: sobre ---
  ABOUT_TIT: "Cerca de ti, cuando lo necesitas",
  ABOUT_TXT: "Somos un equipo local especializado. Nos tomamos en serio cada trabajo y cuidamos los detalles, porque tu confianza es lo que nos hace crecer.",
  IMG_ABOUT: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1000&q=80&auto=format&fit=crop",

  // --- Agente IA ---
  AGENTE_NOMBRE: "Asistente",
  AGENTE_SALUDO: "¡Hola! Soy el asistente. ¿En qué puedo ayudarte hoy?",

  // --- Reseñas (Google) ---
  REVIEW_LINK: "https://g.page/r/DEMO/review",
};
