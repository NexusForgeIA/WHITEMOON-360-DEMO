/* ============================================================
   WHITEMOON 360 — CONFIG (fuente única: la cargan landing y panel)
   Reskin por cliente = cambiar SOLO este archivo + los colores.
   NO poner aquí NADA secreto: la anon key es pública (la RLS protege
   los datos). Nunca meter service_role ni el x-alta-secret aquí.
   ============================================================ */
window.WM360_CONFIG = {
  // --- Conexión (fijo para todos los clientes) ---
  SUPABASE_URL: "https://mlaqtniujnvfxcvcourm.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYXF0bml1am52ZnhjdmNvdXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4MzUyMzIsImV4cCI6MjA5MzQxMTIzMn0.Neh7VUS8ADsxf0DPab0JoJyGXOAXnLIaXzXbKzj2BGs",
  NOTIFY_FN: "wm360-notify",

  // --- Identidad del cliente (SE CAMBIA en cada alta) ---
  CLIENTE_ID: "wm360-demo",
  MARCA: "WM360 Demo",
  SECTOR: "Servicios",

  // --- Contacto / CTA ---
  TEL: "+34600000000",
  WHATSAPP: "34600000000",           // sin + ni espacios (para wa.me)
  EMAIL: "hola@wm360demo.es",

  // --- Branding (paleta; se reskina por cliente) ---
  COLOR_BG:   "#0b0b12",
  COLOR_CARD: "#14141e",
  COLOR_P:    "#7c4dff",
  COLOR_P2:   "#9d70ff",
  COLOR_G:    "#00d4aa",

  // --- Landing ---
  HERO_TITULO: "Tu servicio, atendido de principio a fin",
  HERO_SUB: "Déjanos tus datos y te llamamos enseguida.",
  SERVICIOS: ["Presupuesto", "Servicio urgente", "Consulta"],

  // --- Reseñas (Google) ---
  REVIEW_LINK: "https://g.page/r/DEMO/review",
};
