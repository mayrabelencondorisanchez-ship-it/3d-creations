import React from 'react';
import { Newspaper, ArrowRight, Sparkles, Flame, Clock } from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/formatters';

export const NewsSection: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      badge: 'Nuevo Material',
      title: 'Llegada de Filamentos Wood PLA (Madera Real) y Glow in the Dark',
      date: 'Noviembre 2026',
      readTime: '2 min de lectura',
      description:
        'Incorporamos carretes con 40% de fibras de madera natural que se pueden lijar, teñir y barnizar con acabado orgánico, además de filamentos fotoluminiscentes que brillan en la oscuridad.',
      cta: 'Consultar disponibilidad',
      inquiry: 'Hola 3D Creations! Quisiera consultar sobre el nuevo filamento Wood PLA y Glow in the dark.',
    },
    {
      id: 2,
      badge: 'Servicio Destacado',
      title: 'Lámparas y Litofonías Personalizadas a partir de tus fotos',
      date: 'Octubre 2026',
      readTime: '3 min de lectura',
      description:
        'Transformamos fotos familiares, mascotas o logos en placas litofónicas de alta resolución en relieve que revelan la imagen con una nitidez asombrosa al encender su luz LED.',
      cta: 'Pedir litofonía',
      inquiry: 'Hola 3D Creations! Me interesa encargar una lámpara con litofonía personalizada a partir de una foto.',
    },
    {
      id: 3,
      badge: 'Ingeniería',
      title: 'Resina Tough & Tenaz para Prototipos Mecánicos Bajo Esfuerzo',
      date: 'Septiembre 2026',
      readTime: '2 min de lectura',
      description:
        'Nueva resina SLA con módulo elástico similar al ABS inyectado, diseñada para engranajes, carcasas con clips a presión y ensambles que demandan resistencia al impacto repetitivo.',
      cta: 'Cotizar piezas en resina',
      inquiry: 'Hola 3D Creations! Quisiera cotizar una pieza técnica en resina Tough de alta tenacidad.',
    },
  ];

  return (
    <section id="novedades" className="py-16 sm:py-24 bg-slate-900/60 text-slate-100 border-b border-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Actualizaciones del Taller</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Novedades &amp; Proyectos Especiales
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Descubrí los últimos materiales incorporados, nuevas capacidades técnicas y creaciones exclusivas de nuestra comunidad maker.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola 3D Creations! Quisiera consultar sobre las últimas novedades y materiales.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-rose-400 hover:text-white bg-rose-500/10 hover:bg-rose-500 border border-rose-500/30 rounded-lg transition-all self-start md:self-end"
          >
            <span>Ver próximos ingresos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Featured Showcase + News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Spotlight Hero Card */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/src/assets/images/showcase_3d_materials_1794327743135.jpg"
                alt="Muestrario de materiales técnicos en 3D Creations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-3 left-3 bg-rose-500 text-white text-[11px] font-bold font-mono px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md">
                <Flame className="w-3 h-3 fill-white" />
                <span>Showroom de Materiales</span>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Guía técnica</span>
                <span aria-hidden="true">·</span>
                <span>FDM + SLA</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                Muestrario Físico de Texturas y Rellenos en Taller
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Podés visitarnos en San Salvador de Jujuy para palpar muestras reales de PLA Silk, PETG Carbon Fiber, resina transparente pulida y TPU elástico antes de mandar a fabricar tu tirada completa.
              </p>
              
              <div className="pt-3">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola 3D Creations! Quisiera coordinar una visita al taller para ver muestras de materiales.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300"
                >
                  <span>Coordinar visita al taller</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* News List */}
          <div className="lg:col-span-7 space-y-4">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wide">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{item.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(item.inquiry)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-rose-400 transition-colors"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>

                  <span className="text-[11px] text-slate-500 font-mono">
                    WhatsApp +54 9 388 404-5589
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
