// scripts/seedBots.ts
import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

// Inicializa cliente Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Bot = {
  id: number
  nombre: string
  descripcion: string
  categoria: string
  funcion: string
}

// 30 bots base
const coreBots: Bot[] = [
  { id: 1,  nombre: 'La Chispa Suprema BOT',    descripcion: 'Generador creativo musical y espiritual',     categoria: 'Música',              funcion: 'Inspiración y edición de temas' },
  { id: 2,  nombre: 'SBP Legal BOT',             descripcion: 'Manejador de permisos y casos OGPE',          categoria: 'Legal',               funcion: 'Seguimiento y redacción legal' },
  { id: 3,  nombre: 'Control Solar BOT',         descripcion: 'Administrador sistema Off-Grid solar y eólico', categoria: 'Energía',            funcion: 'Monitoreo, diagnóstico y optimización' },
  { id: 4,  nombre: 'The Plug BOT',              descripcion: 'Conexiones con festivales y promotores',       categoria: 'Red de contactos',    funcion: 'Reservas y bookings' },
  { id: 5,  nombre: 'MasterBot Catalog Manager', descripcion: 'Maneja catálogo musical',                      categoria: 'Música',             funcion: 'Organiza, categoriza y exporta metadata' },
  { id: 6,  nombre: 'Real Estate Flow BOT',      descripcion: 'Asistente para propiedades y zonificación',    categoria: 'Bienes Raíces',      funcion: 'Gestión de documentos e inversiones' },
  { id: 7,  nombre: 'Credit Builder BOT',        descripcion: 'Construcción de crédito empresarial',           categoria: 'Finanzas',           funcion: 'Estrategias para LLC, tarjetas y crédito' },
  { id: 8,  nombre: 'Funnel Maestro BOT',        descripcion: 'Embudo de ventas',                             categoria: 'Marketing',          funcion: 'Intake, email, copywriting y automatización' },
  { id: 9,  nombre: 'Wanna DOLA Branding BOT',   descripcion: 'Diseño y estrategia de marca',                 categoria: 'Marca',              funcion: 'Nombre, logos, valores y diferenciación' },
  { id: 10, nombre: 'Poder del Pueblo BOT',      descripcion: 'Automatiza denuncias e iniciativas cívicas',   categoria: 'Legal',               funcion: 'Escritura automática de peticiones' },
  { id: 11, nombre: 'Distro Flow BOT',           descripcion: 'Manejo de DistroKid y publishing',             categoria: 'Música',             funcion: 'Subida de temas, licencias y splits' },
  { id: 12, nombre: 'Empire Analytics BOT',      descripcion: 'Dashboard de KPIs del imperio',                categoria: 'Análisis',           funcion: 'Integración de métricas' },
  { id: 13, nombre: 'Legendario Lyrics BOT',     descripcion: 'Creador y corrector de letras',                categoria: 'Música',             funcion: 'Rimas, estructuras y hooks' },
  { id: 14, nombre: 'Soundcheck BOT',            descripcion: 'Pruebas de audio e ingeniería musical',        categoria: 'Estudio',            funcion: 'Diagnóstico de mezcla y calidad' },
  { id: 15, nombre: 'Jedi AI Trainer',           descripcion: 'Te entrena en IA práctica y uso de bots',      categoria: 'Educación',          funcion: 'Tutoriales y ejercicios estratégicos' },
  { id: 16, nombre: 'RealTalk BOT',              descripcion: 'Filtra y edita podcasts/entrevistas',          categoria: 'Contenido',          funcion: 'Edición de voz, títulos y reels' },
  { id: 17, nombre: 'Beat Oracle BOT',           descripcion: 'Curador de beats por estado emocional',        categoria: 'Música',             funcion: 'Sugerencias personalizadas' },
  { id: 18, nombre: 'Red Pill Hustle BOT',       descripcion: 'Te entrena en principios Red Pill',            categoria: 'Mentalidad',         funcion: 'Videos, frases y rutinas' },
  { id: 19, nombre: 'AI Merch Designer',         descripcion: 'Crea ideas para ropa y slogans',               categoria: 'Moda',               funcion: 'Diseños, slogans y drops' },
  { id: 20, nombre: 'Spiritual Hustler BOT',     descripcion: 'Guía espiritual y táctica',                    categoria: 'Desarrollo Personal', funcion: 'Rutinas, oraciones y foco' },
  { id: 21, nombre: 'Voice Protector BOT',       descripcion: 'Detecta contratos abusivos',                   categoria: 'Legal',               funcion: 'Análisis de publishing y splits' },
  { id: 22, nombre: 'Fan Engagement BOT',        descripcion: 'Estrategias para viralidad y fidelidad',        categoria: 'Marketing',          funcion: 'TikTok, IG y comunidad' },
  { id: 23, nombre: 'Kobby the Promoter BOT',    descripcion: 'Personaje animado que promueve',               categoria: 'Contenido',          funcion: 'Videos y clips animados' },
  { id: 24, nombre: 'AI Producer BOT',           descripcion: 'Co-productor musical con IA',                  categoria: 'Estudio',            funcion: 'VST, arreglos y escalas' },
  { id: 25, nombre: '24K Finance BOT',           descripcion: 'Organiza ingresos y egresos',                  categoria: 'Finanzas',           funcion: 'Tablas y categorización' },
  { id: 26, nombre: 'G.O.A.T. Tracker BOT',      descripcion: 'Sistema de metas y hábitos',                   categoria: 'Desarrollo',         funcion: 'Checklist diaria automatizada' },
  { id: 27, nombre: 'AI Ghostwriter BOT',        descripcion: 'Escribe biografías, intros y artículos',        categoria: 'Contenido',          funcion: 'SEO y storytelling' },
  { id: 28, nombre: 'Event Planner BOT',         descripcion: 'Organizador de eventos y giras',               categoria: 'Operaciones',        funcion: 'Rutas, contratos y riders' },
  { id: 29, nombre: 'Sello Independiente BOT',   descripcion: 'Manejo completo de disquera',                 categoria: 'Música',             funcion: 'Contratos y distribución' },
  { id: 30, nombre: 'Empire Control BOT',        descripcion: 'Administrador maestro del panel',              categoria: 'Sistema',            funcion: 'Acceso total al dashboard' },
]

// Construye array final con duplicados e extras
const bots: Bot[] = [
  ...coreBots,
  ...coreBots.map(b => ({ ...b, id: b.id + 30 })),
  { id: 61, nombre: 'Muso AI BOT',            descripcion: 'Integración con muso.ai',                 categoria: 'Análisis',   funcion: 'Lookup y data enrichment' },
  { id: 62, nombre: 'MusicBrainz BOT',        descripcion: 'Consulta metadata en MusicBrainz',         categoria: 'Análisis',   funcion: 'Fetch de catálogos' },
  { id: 63, nombre: 'Suno AI Artist BOT',     descripcion: 'Genera temas con Suno AI en vivo',        categoria: 'Música',     funcion: 'Composición instantánea' },
  { id: 64, nombre: 'Codex BOT',              descripcion: 'Soporte de Codex para desarrollo',        categoria: 'Desarrollo', funcion: 'Asistencia de código' },
  { id: 65, nombre: 'Seed Academy BOT',       descripcion: 'Acceso a cursos de música y negocios',     categoria: 'Educación',  funcion: 'Materiales y tracks' },
]

async function seed() {
  await supabase.from('bots_estrategicos').delete().neq('id', 0)
  const { error } = await supabase.from('bots_estrategicos').insert(bots)
  if (error) {
    console.error('Error seeding bots:', error)
    process.exit(1)
  }
  console.log('✅ Seed completo: 65 bots cargados')
  process.exit(0)
}

seed()
