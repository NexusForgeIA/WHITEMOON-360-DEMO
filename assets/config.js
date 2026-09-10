/* ============================================================
   WHITEMOON 360 — CONFIG (fuente única: la cargan web y panel)
   Reskin por cliente = cambiar SOLO este archivo (marca, logo, colores,
   textos, fotos). NO poner aquí NADA secreto: la anon key es pública.
   ============================================================ */
window.WM360_CONFIG = {
  // --- Conexión (fijo) ---
  SUPABASE_URL: "https://mlaqtniujnvfxcvcourm.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYXF0bml1am52ZnhjdmNvdXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4MzUyMzIsImV4cCI6MjA5MzQxMTIzMn0.Neh7VUS8ADsxf0DPab0JoJyGXOAXnLIaXzXbKzj2BGs",
  CHAT_FN: "wm360-chat",
  NOTIFY_FN: "wm360-notify",

  // --- Identidad (SE CAMBIA en cada alta) ---
  CLIENTE_ID: "wm360-demo",
  MARCA: "Limpiezas Demo",
  SECTOR: "Limpieza profesional de cocinas",
  LOGO: "https://whitemoon.es/assets/images/icono-44.webp",   // logo WhiteMoon (demo); en cliente = su logo
  MARCA_WHITEMOON: true,   // muestra "por WhiteMoon" en el footer (demo)

  // --- Contacto ---
  TEL: "+34 600 000 000",
  WHATSAPP: "34600000000",
  EMAIL: "hola@limpiezasdemo.es",
  HORARIO: "Lun–Dom · Asistente 24/7",
  ZONA: "Madrid y alrededores",

  // --- Branding ---
  COLOR_P:  "#7c4dff",
  COLOR_P2: "#9d70ff",
  COLOR_PD: "#5a2fd0",
  COLOR_G:  "#0aa06e",

  // --- Hero ---
  HERO_TITULO: "Tu servicio, atendido de principio a fin",
  HERO_SUB: "Presupuesto claro, trabajo garantizado y un asistente que atiende a tus clientes 24/7 — aunque tú estés trabajando.",
  HERO_CTA: "Hablar con el asistente",
  IMG_HERO: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop",

  // --- Servicios ---
  SERVICIOS: [
    { t: "Presupuesto sin compromiso", desc: "Cuéntanos qué necesitas y te damos un presupuesto claro, sin letra pequeña.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop" },
    { t: "Servicio urgente", desc: "Atendemos imprevistos con rapidez. Disponibilidad amplia y respuesta ágil.",
      img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&auto=format&fit=crop" },
    { t: "Mantenimiento periódico", desc: "Planes a medida para que no tengas que preocuparte de nada.",
      img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80&auto=format&fit=crop" },
  ],

  // --- Quiénes somos ---
  ABOUT_TIT: "Un equipo local, trato de agencia grande",
  ABOUT_TXT: "Somos un equipo especializado y cercano. Nos tomamos en serio cada trabajo y cuidamos los detalles, porque tu confianza es lo que nos hace crecer.",
  IMG_ABOUT: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1000&q=80&auto=format&fit=crop",
  VENTAJAS: [
    { t: "Respuesta rápida", desc: "Te contactamos enseguida; el asistente recoge tu caso a cualquier hora." },
    { t: "Profesionales de confianza", desc: "Equipo propio, trato cercano y trabajo bien hecho." },
    { t: "Sin sorpresas", desc: "Presupuesto claro antes de empezar. Lo que hablamos es lo que pagas." },
  ],

  // --- Cómo trabajamos ---
  PROCESO: [
    { t: "Nos cuentas tu caso", desc: "Por el asistente o WhatsApp, a cualquier hora." },
    { t: "Te llamamos y valoramos", desc: "Presupuesto claro, sin compromiso." },
    { t: "Hacemos el trabajo", desc: "Profesionales, puntuales y cuidadosos." },
    { t: "Quedas satisfecho", desc: "Y si quieres, dejamos un mantenimiento periódico." },
  ],

  // --- Sección Agente IA ---
  AGENTE_TIT: "Un asistente que trabaja por ti 24/7",
  AGENTE_DESC: "Atiende a tus clientes al instante, recoge sus datos y te avisa en el móvil. Nunca se pierde una oportunidad, aunque estés en plena faena.",
  AGENTE_BULLETS: [
    "Responde al momento, de día y de noche",
    "Capta nombre y teléfono y te lo manda al instante",
    "Agenda y organiza sin que tú muevas un dedo",
    "Tú solo devuelves la llamada",
  ],
  AGENTE_NOMBRE: "Asistente",
  AGENTE_SALUDO: "¡Hola! Soy el asistente de Limpiezas Demo. ¿En qué puedo ayudarte hoy?",

  // --- Reseñas ---
  REVIEW_LINK: "https://g.page/r/DEMO/review",
};
