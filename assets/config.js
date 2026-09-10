/* ============================================================
   WHITEMOON 360 — CONFIG (fuente única: la cargan web y panel)
   Reskin por cliente = cambiar SOLO este archivo + colores.
   NO poner aquí NADA secreto: la anon key es pública (la RLS protege).
   Nunca meter service_role ni el x-alta-secret aquí.
   ============================================================ */
window.WM360_CONFIG = {
  // --- Conexión (fijo para todos) ---
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
  WHATSAPP: "34600000000",           // sin + ni espacios (wa.me)
  EMAIL: "hola@limpiezasdemo.es",

  // --- Branding (paleta; se reskina por cliente) ---
  COLOR_BG:   "#0b0b12",
  COLOR_BG2:  "#101019",
  COLOR_CARD: "#14141e",
  COLOR_P:    "#7c4dff",
  COLOR_P2:   "#9d70ff",
  COLOR_G:    "#00d4aa",

  // --- Web: hero ---
  HERO_TITULO: "Tu servicio, atendido de principio a fin",
  HERO_SUB: "Presupuesto rápido, trabajo garantizado y un asistente que te atiende 24/7.",
  HERO_CTA: "Hablar con el asistente",

  // --- Web: servicios (tarjetas) ---
  SERVICIOS: [
    { t: "Presupuesto sin compromiso", desc: "Cuéntanos qué necesitas y te damos un presupuesto claro, sin letra pequeña." },
    { t: "Servicio urgente", desc: "Atendemos imprevistos con rapidez. Disponibilidad amplia y respuesta ágil." },
    { t: "Mantenimiento periódico", desc: "Planes a medida para que no tengas que preocuparte de nada." },
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

  // --- Agente IA ---
  AGENTE_NOMBRE: "Asistente",
  AGENTE_SALUDO: "¡Hola! Soy el asistente. ¿En qué puedo ayudarte hoy?",

  // --- Reseñas (Google) ---
  REVIEW_LINK: "https://g.page/r/DEMO/review",
};
