import React, { useEffect, useState } from "react";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Users, 
  CheckCircle, 
  Phone, 
  Facebook, 
  Heart, 
  MessageSquare, 
  FileText, 
  FileCheck,
  Bell, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  School,
  Sparkle
} from "lucide-react";
import { motion } from "motion/react";

// Configuration Variables
const WHATSAPP_NUMBER = "573176424746";
const WHATSAPP_BASE_MESSAGE = "Hola, deseo recibir información sobre los programas académicos ofrecidos por CEDEIT en convenio con la Universidad del Magdalena.";

// Vector Circular Logo of CEDEIT matching the real official branding
const CedeitLogo = ({ className = "h-14 w-14" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
      <defs>
        {/* Paths for the top and bottom arched texts */}
        <path id="logo-text-top" d="M 11,50 A 39,39 0 0,1 89,50" fill="none" />
        <path id="logo-text-bottom" d="M 89,50 A 39,39 0 0,1 11,50" fill="none" />
      </defs>
      
      {/* Outer White circular base with high contrast Orange Ring border */}
      <circle cx="50" cy="50" r="48" fill="white" stroke="#F26522" strokeWidth="3" />
      <circle cx="50" cy="50" r="45.5" fill="none" stroke="#F26522" strokeWidth="0.5" />

      {/* Official Arched Texts */}
      <text fill="#000000" fontSize="5.2" fontWeight="900" fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif" letterSpacing="0.45">
        <textPath href="#logo-text-top" startOffset="50%" textAnchor="middle">
          CENTRO PARA EL DESARROLLO
        </textPath>
      </text>
      
      <text fill="#000000" fontSize="5.2" fontWeight="900" fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif" letterSpacing="0.45">
        <textPath href="#logo-text-bottom" startOffset="50%" textAnchor="middle">
          INTEGRAL Y TECNOLOGICO S.A.S.
        </textPath>
      </text>

      {/* Inner gold/orange boundary circle around the central people icon */}
      <circle cx="50" cy="50" r="33" fill="none" stroke="#F26522" strokeWidth="0.75" />

      {/* Ring of 5 stylized people holding hands in team collaboration */}
      <g transform="translate(50, 50) scale(0.95)">
        {/* Person 1: Top (Orange) */}
        <g transform="rotate(0)">
          <circle cx="0" cy="-18" r="3.2" fill="#F26522" />
          <path d="M -8,-13 C -5,-16 -1,-15 0,-15 C 1,-15 5,-16 8,-13 C 6,-10 3,-11 0,-11 C -3,-11 -6,-10 -8,-13 Z" fill="#F26522" />
        </g>
        
        {/* Person 2: Top Right (Slate Gray) */}
        <g transform="rotate(72)">
          <circle cx="0" cy="-18" r="3.2" fill="#3D5265" />
          <path d="M -8,-13 C -5,-16 -1,-15 0,-15 C 1,-15 5,-16 8,-13 C 6,-10 3,-11 0,-11 C -3,-11 -6,-10 -8,-13 Z" fill="#3D5265" />
        </g>

        {/* Person 3: Bottom Right (Yellow/Orange) */}
        <g transform="rotate(144)">
          <circle cx="0" cy="-18" r="3.2" fill="#F9A01B" />
          <path d="M -8,-13 C -5,-16 -1,-15 0,-15 C 1,-15 5,-16 8,-13 C 6,-10 3,-11 0,-11 C -3,-11 -6,-10 -8,-13 Z" fill="#F9A01B" />
        </g>

        {/* Person 4: Bottom Left (Slate Blue / Steel Blue) */}
        <g transform="rotate(216)">
          <circle cx="0" cy="-18" r="3.2" fill="#5B82A6" />
          <path d="M -8,-13 C -5,-16 -1,-15 0,-15 C 1,-15 5,-16 8,-13 C 6,-10 3,-11 0,-11 C -3,-11 -6,-10 -8,-13 Z" fill="#5B82A6" />
        </g>

        {/* Person 5: Left (Green) */}
        <g transform="rotate(288)">
          <circle cx="0" cy="-18" r="3.2" fill="#72C130" />
          <path d="M -8,-13 C -5,-16 -1,-15 0,-15 C 1,-15 5,-16 8,-13 C 6,-10 3,-11 0,-11 C -3,-11 -6,-10 -8,-13 Z" fill="#72C130" />
        </g>

        {/* Outer connecting circle (holding hands) */}
        <circle cx="0" cy="0" r="14.5" fill="none" stroke="#29A9C2" strokeWidth="2" opacity="0.85" />
      </g>

      {/* Central "CEDEIT" Text block with white halo background for perfect legibility */}
      <g transform="translate(50, 52)">
        <text 
          x="0" 
          y="0" 
          textAnchor="middle" 
          fontSize="11.5" 
          fontWeight="900" 
          fontStyle="italic"
          fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif" 
          fill="#000000"
          stroke="#FFFFFF"
          strokeWidth="3"
          paintOrder="stroke"
        >
          CEDEIT
        </text>
        <text 
          x="0" 
          y="0" 
          textAnchor="middle" 
          fontSize="11.5" 
          fontWeight="900" 
          fontStyle="italic"
          fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif" 
          fill="#1E293B"
        >
          CEDEIT
        </text>
      </g>
    </svg>
  </div>
);

// Animated Counter component to handle dynamic confidence statistics
function AnimatedCounter({ value, duration = 2000, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Beautiful easeOutQuad animation function for counters
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span className="font-display font-black text-4xl sm:text-5xl text-cedeit-orange-500">{count}{suffix}</span>;
}

export default function App() {
  // Generate WhatsApp Link helper
  const getWhatsAppLink = (customMessage?: string) => {
    const text = customMessage || WHATSAPP_BASE_MESSAGE;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Program details array
  const programs = [
    {
      id: "maestria-educacion",
      name: "Maestría en Educación",
      desc: "Profundiza en la investigación educativa y transforma realidades desde el conocimiento.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop",
      badge: "Postgrado Oficial",
      details: "Formación investigativa de alto impacto para potenciar el escalafón docente."
    },
    {
      id: "profesional-deporte",
      name: "Profesional en Deporte",
      desc: "Fórmate como profesional íntegro en el ámbito deportivo, recreativo y de la actividad física.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
      badge: "Pregrado Profesional",
      details: "Enfoque integral para gestores deportivos y entrenadores de alta competencia."
    },
    {
      id: "licenciatura-lengua",
      name: "Licenciatura en Lengua Castellana",
      desc: "Forma personas críticas y creativas a través del lenguaje, la literatura y la comunicación.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
      badge: "Pregrado Docente",
      details: "Lidera los procesos de lectura, escritura y pensamiento crítico en la región."
    },
    {
      id: "atencion-infancia",
      name: "Atención a la Primera Infancia",
      desc: "Prepárate para acompañar el desarrollo integral de niños y niñas en sus primeros años de vida.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
      badge: "Especializado",
      details: "Formación clave para responder al cuidado y estimulación oportuna de la niñez."
    },
    {
      id: "licenciatura-matematicas",
      name: "Licenciatura en Matemáticas",
      desc: "Desarrolla el pensamiento lógico y matemático con enfoque pedagógico e innovador.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
      badge: "Pregrado Docente",
      details: "Métodos modernos y didácticos para la enseñanza de las ciencias exactas."
    },
    {
      id: "seguridad-salud",
      name: "Seguridad y Salud en el Trabajo",
      desc: "Promueve entornos laborales seguros y saludables con enfoque integral y preventivo.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
      badge: "Alta Demanda Laboral",
      details: "Diseña, gestiona y previene riesgos profesionales según las normativas vigentes."
    }
  ];

  // Benefits structure
  const benefits = [
    {
      title: "Acompañamiento personalizado",
      desc: "Olvídate de la burocracia. CEDEIT te asigna un asesor exclusivo que te guiará y resolverá tus dudas de principio a fin.",
      icon: Users,
      badge: "Soporte VIP"
    },
    {
      title: "Orientación en la inscripción",
      desc: "Te ayudamos a recopilar, validar y organizar de forma ágil tus documentos para asegurar tu admisión oficial.",
      icon: FileCheck,
      badge: "Trámite Seguro"
    },
    {
      title: "Información clara y oportuna",
      desc: "Tendrás visibilidad total de los cronogramas, opciones de financiación, fechas de matrículas y requisitos esenciales.",
      icon: Bell,
      badge: "Transparencia"
    },
    {
      title: "Convenio universitario reconocido",
      desc: "Programas académicos oficiales otorgados en convenio formal con la prestigiosa Universidad del Magdalena.",
      icon: GraduationCap,
      badge: "Prestigio Público"
    },
    {
      title: "Atención rápida por WhatsApp",
      desc: "Sin esperas molestas en conmutadores. Nuestro equipo de asesores responde al instante directamente en tu chat de WhatsApp.",
      icon: MessageSquare,
      badge: "Inmediato"
    },
    {
      title: "Seguimiento permanente",
      desc: "Incluso después de matricularte, el operador CEDEIT sigue a tu disposición para garantizar que tu experiencia sea excelente.",
      icon: Heart,
      badge: "Fidelidad"
    }
  ];

  // Simple Helper to handle custom WhatsApp navigation for specific programs
  const handleProgramClick = (programName: string) => {
    const customMsg = `Hola, deseo recibir información sobre el programa de ${programName} ofrecido por CEDEIT en convenio con la Universidad del Magdalena.`;
    window.open(getWhatsAppLink(customMsg), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 antialiased selection:bg-cedeit-orange-500 selection:text-white">
      
      {/* TOP DECORATIVE INFO BAR */}
      <div className="bg-cedeit-blue-900 text-white text-xs py-2.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="flex items-center gap-2 font-medium tracking-wide">
            <span className="flex h-2 w-2 rounded-full bg-cedeit-orange-500 animate-pulse" />
            <span className="text-cedeit-orange-300 font-bold uppercase text-[10px]">OPERADOR OFICIAL CEDEIT</span> • Inscripciones Abiertas para el Convenio Universidad del Magdalena
          </p>
          <div className="flex items-center gap-4">
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cedeit-orange-400 transition-colors flex items-center gap-1 font-bold text-cedeit-orange-300"
            >
              <Phone className="h-3 w-3 fill-cedeit-orange-500/30" /> Chatear con Asesoría de Admisión
            </a>
          </div>
        </div>
      </div>

      {/* STICKY LANDING HEADER (NO NAV LINKS AS REQUESTED) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo CEDEIT Area */}
          <div className="flex items-center gap-3">
            <CedeitLogo className="h-12 w-12 sm:h-14 sm:w-14" />
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-cedeit-blue-900 font-display">CEDEIT</span>
                <span className="text-[9px] bg-cedeit-orange-500 text-white font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">Operador</span>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wide flex items-center gap-1">
                Acompañamiento <span className="text-cedeit-orange-500">•</span> Convenio U. del Magdalena
              </p>
            </div>
          </div>

          {/* Quick CTA to maximize leads */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-500" /> Respuestas al instante
            </span>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cedeit-orange-500 hover:bg-cedeit-orange-600 text-white font-black text-xs sm:text-sm px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl inline-flex items-center gap-2 shadow-lg shadow-cedeit-orange-500/20 transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="h-4 w-4 fill-white" />
              <span>Chatear Ahora</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO PRINCIPAL SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cedeit-blue-950 via-cedeit-blue-900 to-cedeit-blue-800 text-white py-16 lg:py-24">
        {/* Decorative backdrop curves & gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,101,34,0.15),transparent_45%)]" />
        <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cedeit-blue-500/10 blur-3xl -translate-y-1/2 pointer-events-none" />
        
        {/* Dynamic orange decorative wave overlay similar to flyer structure */}
        <div className="absolute bottom-0 right-0 left-0 h-16 bg-[#F8FAFC] clip-path-wave opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-cedeit-orange-300">
                <Sparkle className="h-3.5 w-3.5 fill-cedeit-orange-400 animate-spin" />
                <span>Operador Educativo Líder en el Caribe</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] font-display">
                Tu futuro profesional <br className="hidden sm:inline" />
                <span className="text-cedeit-orange-500 bg-gradient-to-r from-cedeit-orange-500 via-cedeit-orange-400 to-orange-300 bg-clip-text text-transparent">comienza hoy</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Accede a programas de educación superior en convenio con la <strong className="text-white font-semibold">Universidad del Magdalena</strong> y recibe acompañamiento personalizado de <strong className="text-white font-semibold">CEDEIT</strong> durante todo tu proceso de matrícula y formación.
              </p>

              {/* Core Key Highlights requested by user */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 text-left pt-2">
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors">
                  <div className="h-7 w-7 rounded-lg bg-cedeit-orange-500/20 flex items-center justify-center text-cedeit-orange-400">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100">Educación de calidad</span>
                </div>
                
                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors">
                  <div className="h-7 w-7 rounded-lg bg-cedeit-orange-500/20 flex items-center justify-center text-cedeit-orange-400">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100">Flexibilidad para estudiar</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors">
                  <div className="h-7 w-7 rounded-lg bg-cedeit-orange-500/20 flex items-center justify-center text-cedeit-orange-400">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100">Acompañamiento permanente</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors">
                  <div className="h-7 w-7 rounded-lg bg-cedeit-orange-500/20 flex items-center justify-center text-cedeit-orange-400">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100">Proyección profesional</span>
                </div>
              </div>

              {/* Main Call to Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-cedeit-orange-500 hover:bg-cedeit-orange-600 text-white font-black text-base px-8 py-4.5 rounded-2xl inline-flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl shadow-cedeit-orange-500/30 hover:shadow-cedeit-orange-500/50 cursor-pointer animate-btn-pulse"
                >
                  <Phone className="h-5 w-5 fill-white" />
                  Solicitar información por WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: High Quality Hero Visual Collage matching flyer */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[380px] sm:max-w-[420px] lg:max-w-none">
                {/* Back glowing blob */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cedeit-orange-500/30 to-cedeit-blue-500/30 rounded-[2.5rem] rotate-3 blur-md" />
                
                {/* Premium Frame for Unsplash College Students Image */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-3 rounded-[2.5rem] border border-white/20 shadow-2xl backdrop-blur-sm overflow-hidden animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop" 
                    alt="Estudiantes universitarios de Cedeit" 
                    className="rounded-[2rem] object-cover w-full h-[380px] sm:h-[460px] filter saturate-[1.1] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute Card: Student Support Indicator */}
                  <div className="absolute bottom-8 left-8 right-8 bg-cedeit-blue-950/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-cedeit-orange-500 flex items-center justify-center text-white flex-shrink-0">
                      <School className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-cedeit-orange-300 font-bold tracking-widest uppercase">CONVENIO OFICIAL</p>
                      <p className="text-xs sm:text-sm font-bold text-white">Universidad del Magdalena</p>
                    </div>
                  </div>
                </div>

                {/* Micro floating trust indicators */}
                <div className="absolute -top-4 -right-4 bg-white text-slate-900 p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-100">
                  <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider">Asesores Online</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN: PROGRAMAS DISPONIBLES (OFERTA ACADÉMICA) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Area */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs bg-cedeit-orange-100 text-cedeit-orange-600 font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
              Oferta académica disponible
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cedeit-blue-900 tracking-tight font-display">
              Elige el programa que mejor se adapte a tus metas profesionales
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cedeit-blue-800 to-cedeit-orange-500 mx-auto mt-4 rounded-full" />
            <p className="mt-5 text-slate-500 text-base sm:text-lg font-light leading-relaxed">
              En alianza estratégica con la Universidad del Magdalena, te presentamos alternativas de alta calidad con horarios, metodología y financiación ideales para ti.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {programs.map((program, idx) => (
              <div 
                key={program.id}
                className="bg-white rounded-[2rem] border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-cedeit-orange-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Visual Area */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Top Badge overlay */}
                  <span className="absolute top-4 left-4 bg-cedeit-blue-900/90 backdrop-blur-md text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg border border-white/15">
                    {program.badge}
                  </span>
                  
                  {/* Dark overlay fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Logo Indicator */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] font-bold text-cedeit-blue-900 flex items-center gap-1 border border-slate-200">
                    <Award className="h-3 w-3 text-cedeit-orange-500" /> CEDEIT • UNIMAG
                  </div>
                </div>

                {/* Details Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-cedeit-blue-900 group-hover:text-cedeit-orange-500 transition-colors font-display line-clamp-2">
                      {program.name}
                    </h3>
                    <p className="text-sm text-slate-600 font-normal leading-relaxed line-clamp-3">
                      {program.desc}
                    </p>
                    <p className="text-xs text-slate-400 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex gap-1.5 items-start">
                      <Sparkles className="h-3.5 w-3.5 text-cedeit-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{program.details}</span>
                    </p>
                  </div>

                  {/* Immediate Action Button */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => handleProgramClick(program.name)}
                      className="w-full bg-slate-50 hover:bg-cedeit-orange-500 text-cedeit-blue-900 hover:text-white font-extrabold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 group-hover:bg-cedeit-orange-100/50 transition-all border border-slate-200/50 hover:border-cedeit-orange-500 cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Quiero información</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECCIÓN: ¿POR QUÉ ESTUDIAR CON CEDEIT? */}
      <section className="py-24 bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Intro Side */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <span className="text-xs bg-cedeit-blue-100 text-cedeit-blue-800 font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest inline-block italic font-display">
                ¿Por qué estudiar con CEDEIT?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cedeit-blue-900 tracking-tight leading-tight font-display">
                El respaldo y acompañamiento permanente que necesitas
              </h2>
              <div className="h-1 w-20 bg-cedeit-orange-500 mx-auto lg:mx-0" />
              <p className="text-slate-500 leading-relaxed text-base sm:text-lg font-light">
                CEDEIT no es solo un intermediario; somos tu aliado estratégico oficial en la región. Diseñamos un ecosistema de soporte continuo para que tu único enfoque sea aprender y avanzar en tu proyección profesional.
              </p>
              
              <div className="pt-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cedeit-blue-800 hover:bg-cedeit-blue-900 text-white font-extrabold text-sm px-6 py-4 rounded-xl inline-flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer hover:-translate-y-0.5"
                >
                  <span>Chatear con un Orientador CEDEIT</span>
                  <ArrowUpRight className="h-4 w-4 text-cedeit-orange-400" />
                </a>
              </div>
            </div>

            {/* Right Card / Grid layout with benefits */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComp = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-all hover:border-cedeit-orange-500/30 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-xl bg-cedeit-blue-100 text-cedeit-blue-900 flex items-center justify-center group-hover:bg-cedeit-orange-500 group-hover:text-white transition-colors">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[9px] font-black text-slate-400 bg-slate-50 border border-slate-100 rounded px-2 py-0.5 uppercase tracking-widest font-display">
                        {benefit.badge}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-cedeit-blue-900 font-display">
                      {benefit.title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed font-light">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN DE CONFIANZA / ESTADÍSTICAS */}
      <section className="py-20 bg-gradient-to-br from-cedeit-blue-950 to-cedeit-blue-900 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(242,101,34,0.08),transparent_55%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs bg-white/10 text-cedeit-orange-300 font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block border border-white/5">
              Nuestras Cifras de Confianza
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 font-display">
              Respaldo Real que Garantiza Tu Éxito
            </h2>
            <p className="text-sm text-slate-300 mt-2 font-light">
              Años de experiencia operando con excelencia y transformando trayectorias estudiantiles.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Stat 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="flex justify-center mb-2">
                <AnimatedCounter value={6} suffix="" />
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-slate-200 uppercase tracking-widest font-display">
                Programas Disponibles
              </p>
              <p className="text-xs text-slate-400 mt-1">Oferta de pregrados y posgrados</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="flex justify-center mb-2">
                <AnimatedCounter value={1800} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-slate-200 uppercase tracking-widest font-display">
                Estudiantes Orientados
              </p>
              <p className="text-xs text-slate-400 mt-1">Guiados exitosamente hacia el grado</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="flex justify-center mb-2">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-slate-200 uppercase tracking-widest font-display">
                Atención Personalizada
              </p>
              <p className="text-xs text-slate-400 mt-1">Asesoría directa uno a uno</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="flex justify-center mb-2">
                <AnimatedCounter value={1} suffix="" />
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-slate-200 uppercase tracking-widest font-display">
                Convenio Sólido
              </p>
              <p className="text-xs text-slate-400 mt-1">Universidad del Magdalena</p>
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN CTA (FONDO LLAMATIVO AZUL Y NARANJA) */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-cedeit-blue-900 via-cedeit-blue-800 to-cedeit-orange-600 text-white">
        {/* Dynamic diagonal abstract separator lines */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.15),transparent_40%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs bg-white/10 text-cedeit-orange-300 font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest inline-block border border-white/5 font-display italic">
            El Momento es Ahora
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] font-display">
            Da el primer paso hacia tu futuro profesional
          </h2>
          
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Habla con uno de nuestros asesores y recibe toda la información que necesitas para comenzar. Te resolveremos dudas de financiación, admisión y requisitos.
          </p>

          <div className="pt-6">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-cedeit-orange-100 text-cedeit-blue-900 font-black text-base sm:text-lg px-8 py-4.5 rounded-2xl inline-flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-2xl cursor-pointer hover:shadow-white/20 animate-btn-pulse"
            >
              <Phone className="h-6 w-6 text-cedeit-orange-500 fill-cedeit-orange-500/20" />
              Solicitar Asesoría Inmediata por WhatsApp
            </a>
          </div>

          {/* Prompt compliance footer helper */}
          <div className="pt-4 text-xs text-slate-300 flex items-center justify-center gap-1.5 font-medium">
            <CheckCircle className="h-4 w-4 text-cedeit-orange-400" />
            <span>Consultoría 100% gratuita brindada por operadores certificados CEDEIT</span>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-900 pb-8">
            {/* Left side brand */}
            <div className="flex items-center gap-3 text-left">
              <CedeitLogo className="h-10 w-10 bg-white/5 rounded-full p-0.5 border border-white/10" />
              <div>
                <span className="font-extrabold text-slate-200 text-base tracking-tight block font-display">CEDEIT</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">
                  Centro para el Desarrollo Integral y Tecnológico S.A.S.
                </span>
              </div>
            </div>
            
            {/* Social media connections and WhatsApp links */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a 
                href="https://web.facebook.com/profile.php?id=61563040384859" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"
                aria-label="Cedeit Facebook Oficial"
              >
                <Facebook className="h-4 w-4 text-cedeit-blue-500" /> Facebook Oficial
              </a>
              <span className="text-slate-800 hidden sm:inline">•</span>
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-cedeit-orange-400 font-bold bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"
              >
                <Phone className="h-4 w-4 fill-cedeit-orange-500/20" /> WhatsApp Directo
              </a>
            </div>
          </div>

          {/* Legal / disclaimer and university acknowledgment notice */}
          <div className="space-y-4 max-w-5xl">
            <div className="bg-slate-900/50 border border-slate-900 p-4 rounded-xl flex gap-3 items-start text-xs leading-relaxed text-slate-400">
              <School className="h-5 w-5 text-cedeit-orange-500 flex-shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-300">Convenio de Cooperación Académica:</strong> Los títulos académicos, el plan de estudios, las admisiones oficiales y el otorgamiento del grado de todos los programas mencionados son de responsabilidad única y exclusiva de la <strong className="text-slate-300">Universidad del Magdalena</strong>. El <strong className="text-slate-300">Centro para el Desarrollo Integral y Tecnológico S.A.S. (CEDEIT)</strong> opera de forma autorizada brindando apoyo administrativo, mercadeo y acompañamiento logístico para optimizar el ingreso y permanencia del estudiante.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between text-[11px] text-slate-600 gap-2 font-medium">
              <p>© 2026 CEDEIT S.A.S. Todos los derechos reservados.</p>
              <p>Desarrollado para la máxima conversión de leads universitarios.</p>
            </div>
          </div>

        </div>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP CON ANILLO DE PULSACIÓN */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all relative group cursor-pointer"
          title="Chatear con un asesor de Cedeit"
          aria-label="Chatear por WhatsApp"
        >
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 rounded-full bg-emerald-600/40 animate-ping -z-10" />
          
          <Phone className="h-7 w-7 sm:h-8 sm:w-8 fill-white" />

          {/* Quick interactive hover tag */}
          <div className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold py-2 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block border border-slate-800">
            ¿Dudas? Chatea con CEDEIT en vivo
          </div>
        </a>
      </div>

    </div>
  );
}
