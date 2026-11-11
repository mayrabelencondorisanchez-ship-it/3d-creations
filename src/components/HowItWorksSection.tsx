import React, { useState } from 'react';
import {
  Play,
  Layers,
  Cpu,
  FileCode,
  Sparkles,
  ExternalLink,
  Flame,
  CheckCircle2,
  ArrowRight,
  Info,
  Zap,
} from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/formatters';

export const HowItWorksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'proceso' | 'tecnologias' | 'materiales'>('proceso');
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      step: '01',
      title: 'Diseño o Modelo Digital 3D',
      subtitle: 'Archivos .STL / .OBJ / .STEP',
      description:
        'Todo comienza con un modelo tridimensional diseñado en programas CAD (como Blender, Fusion 360, Tinkercad) o descargado de repositorios como Printables o Thingiverse.',
      icon: FileCode,
      color: 'text-rose-400',
    },
    {
      step: '02',
      title: 'Laminado (Slicing en Software)',
      subtitle: 'Cura / PrusaSlicer / Bambu Studio',
      description:
        'El software laminador corta el objeto en cientos o miles de capas horizontales ultrafinas (de 0.08mm a 0.28mm) y calcula la temperatura, velocidad e infill generando el código G-Code.',
      icon: Layers,
      color: 'text-pink-400',
    },
    {
      step: '03',
      title: 'Fabricación Aditiva Capa a Capa',
      subtitle: 'Extrusión FDM o Fotopolimerización SLA',
      description:
        'A diferencia del mecanizado tradicional que extrae material, la impresora 3D deposita filamento fundido o cura resina líquida con luz UV únicamente donde la geometría lo requiere.',
      icon: Cpu,
      color: 'text-rose-300',
    },
    {
      step: '04',
      title: 'Posprocesado y Control de Calidad',
      subtitle: 'Retiro de soportes, curado y pulido',
      description:
        'Se retiran estructuras de soporte, se realiza curado UV complementario (en resina) y se verifica la tolerancia dimensional antes de la entrega final.',
      icon: Sparkles,
      color: 'text-rose-500',
    },
  ];

  const technologies = [
    {
      name: 'FDM / FFF (Deposición Fundida)',
      subtitle: 'Filamentos Termoplásticos',
      bestFor: 'Prototipos mecánicos, carcasas, repuestos, soportes y piezas resistentes.',
      temperatures: 'Boquilla 190°C - 260°C · Cama 60°C - 100°C',
      pros: [
        'Gran volumen de impresión y excelente resistencia al impacto.',
        'Materiales variados: PLA, PETG, ABS, ASA, TPU flexible.',
        'Costo de producción altamente competitivo por gramo.',
      ],
      badge: 'Mayor Resistencia Mecánica',
      color: 'border-rose-500/30 bg-rose-500/5',
    },
    {
      name: 'SLA / DLP / MSLA (Fotocurado en Resina)',
      subtitle: 'Resinas Fotosensibles Líquidas',
      bestFor: 'Miniaturas de alta definición, joyería, figuras coleccionables y prototipado fino.',
      temperatures: 'Exposición por luz UV (405nm) a temperatura ambiente',
      pros: [
        'Acabado superficial impecable sin líneas de capa visibles a simple vista.',
        'Resolución micrométrica (hasta 0.025 mm / 8K).',
        'Detalles orgánicos finos: rostros, texturas, escamas y micro-engranajes.',
      ],
      badge: 'Máximo Nivel de Detalle',
      color: 'border-pink-500/30 bg-pink-500/5',
    },
  ];

  const materials = [
    {
      name: 'PLA (Ácido Poliláctico)',
      type: 'Biodegradable (origen vegetal)',
      usage: 'Figuras, maquetas decorativas, prototipos rápidos y carcasas.',
      highlight: 'Fácil impresión, sin deformación térmica ni olores.',
    },
    {
      name: 'PETG (Glicol Modificado)',
      type: 'Técnico de alta tenacidad',
      usage: 'Piezas mecánicas, soportes de celular/auto, piezas con contacto con agua.',
      highlight: 'Resistencia a químicos, intemperie y flexión.',
    },
    {
      name: 'ABS / ASA',
      type: 'Grado industrial automotriz',
      usage: 'Repuestos expuestos al sol directo, motores, carcasas de electrónica.',
      highlight: 'Soporta hasta 95°C y alta abrasión.',
    },
    {
      name: 'TPU (Poliuretano Termoplástico)',
      type: 'Elastómero flexible',
      usage: 'Protectores contra impactos, juntas, sellos, llantas de robótica.',
      highlight: 'Flexibilidad elástica estilo goma indestructible.',
    },
    {
      name: 'Resina Estándar & Tough',
      type: 'Polímero UV fotocurable',
      usage: 'Miniaturas RPG, réplicas de arte, prótesis dentales de estudio.',
      highlight: 'Superficie suave como inyección de plástico.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-slate-950 text-slate-100 border-b border-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Aprende Sobre la Tecnología</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Cómo funcionan las impresoras 3D?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Desde un archivo digital en tu computadora hasta un objeto sólido que podés tener en tus manos. Descubrí el fascinante proceso de la fabricación aditiva explicado en detalle.
          </p>
        </div>

        {/* Video Feature & Summary Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8">
          
          {/* Left: Video Embed Container */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-850 shadow-2xl group">
              {!isPlaying ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Video Thumbnail */}
                  <img
                    src="https://img.youtube.com/vi/S3O2ehqDuJM/maxresdefault.jpg"
                    alt="Cómo funcionan las impresoras 3D - Video explicativo Xataka TV"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://img.youtube.com/vi/S3O2ehqDuJM/hqdefault.jpg';
                    }}
                  />
                  
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-500 hover:bg-rose-400 text-white flex items-center justify-center shadow-2xl shadow-rose-500/50 hover:scale-110 active:scale-95 transition-all cursor-pointer group/btn"
                    aria-label="Reproducir video explicativo sobre cómo funcionan las impresoras 3D"
                  >
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white translate-x-0.5 group-hover/btn:scale-105 transition-transform" />
                  </button>

                  {/* Video Title Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
                      Video explicativo: Cómo funcionan las impresoras 3D (Xataka)
                    </span>
                    <span className="bg-rose-500 text-white font-mono font-bold px-2.5 py-1 rounded-md text-[11px]">
                      HD
                    </span>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/S3O2ehqDuJM?autoplay=1&rel=0"
                  title="Cómo funcionan las impresoras 3D"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>
          </div>

          {/* Right: Key Concepts from the video */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs text-rose-400 font-semibold uppercase tracking-wider font-mono">
              <Info className="w-3.5 h-3.5" />
              <span>Conceptos Clave del Video</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              ¿Por qué se llama <span className="text-rose-400">fabricación aditiva</span>?
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              En la manufactura clásica (como el torneado o fresado) se parte de un bloque sólido y se retira material sobrante (método sustractivo). En cambio, la impresión 3D construye las piezas <strong>agregando material capa por capa</strong> exactamente donde se necesita.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Cero desperdicio de material:</strong> solo se consume el filamento o resina indispensable para la pieza y sus soportes.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Geometrías imposibles:</strong> estructuras huecas, mallas Voronoi, partes móviles impresas juntas (print-in-place).</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Personalización total:</strong> no requiere matrices caras; modificar una pieza es tan fácil como editar un archivo CAD.</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="https://www.youtube.com/watch?v=S3O2ehqDuJM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
              >
                <span>Ver directamente en YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-slate-600">·</span>

              <a
                href="#contacto"
                className="text-xs font-semibold text-slate-300 hover:text-white underline decoration-rose-500/50 hover:decoration-rose-500"
              >
                Cotizar tu diseño 3D
              </a>
            </div>
          </div>

        </div>

        {/* Interactive Deep-Dive Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('proceso')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'proceso'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Paso a Paso del Proceso
          </button>
          <button
            onClick={() => setActiveTab('tecnologias')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'tecnologias'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            FDM vs. Resina SLA
          </button>
          <button
            onClick={() => setActiveTab('materiales')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'materiales'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Guía de Materiales
          </button>
        </div>

        {/* Tab 1: The 4 Step Process */}
        {activeTab === 'proceso' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-mono text-rose-500/80 group-hover:text-rose-400 transition-colors">
                        {st.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-rose-400 shadow-inner">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                      {st.title}
                    </h4>

                    <p className="text-[11px] font-mono text-rose-300/80 mt-0.5 mb-2 font-medium">
                      {st.subtitle}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-850 text-[10px] text-slate-500 font-mono">
                    Etapa clave del flujo
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Technologies Comparison (FDM vs Resina SLA) */}
        {activeTab === 'tecnologias' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`border rounded-2xl p-6 sm:p-8 bg-slate-900/90 transition-all ${tech.color}`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {tech.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">En taller Jujuy</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs font-mono text-rose-400 mb-4 font-semibold">
                  {tech.subtitle}
                </p>

                <div className="space-y-3 mb-6 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                    <p className="text-[11px] text-slate-400 uppercase font-mono font-bold">Ideal para:</p>
                    <p className="font-medium text-white mt-0.5">{tech.bestFor}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                    <p className="text-[11px] text-slate-400 uppercase font-mono font-bold">Temperatura / Proceso:</p>
                    <p className="font-mono text-rose-300 mt-0.5">{tech.temperatures}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-white uppercase font-mono">Ventajas destacadas:</p>
                  {tech.pros.map((pro, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Materials Guide */}
        {activeTab === 'materiales' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
            {materials.map((mat) => (
              <div
                key={mat.name}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white">{mat.name}</h4>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-950 text-rose-300 border border-slate-800">
                    Filamento / Resina
                  </span>
                </div>
                <p className="text-xs font-mono text-rose-400 mb-3">{mat.type}</p>
                
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Aplicación típica:</span>
                    <span className="text-slate-200">{mat.usage}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-850">
                    <span className="text-slate-400 block text-[11px]">Propiedad clave:</span>
                    <span className="text-emerald-400 font-medium">{mat.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner: Ask for a quote or custom work */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-rose-950/40 via-slate-900 to-pink-950/30 border border-rose-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              ¿Querés materializar tu propia pieza o archivo 3D?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Enviamos tu archivo STL, OBJ o simplemente tu idea por WhatsApp y te asesoramos sobre el mejor material y tecnología para tu necesidad.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola 3D Creations! Estuve viendo la guía de cómo funcionan las impresoras 3D y quisiera asesorarme para cotizar un proyecto.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-rose-500 hover:bg-rose-400 rounded-xl shadow-lg shadow-rose-500/25 transition-all whitespace-nowrap flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            <span>Consultar por mi proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
