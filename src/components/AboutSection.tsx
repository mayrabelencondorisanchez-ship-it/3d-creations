import React from 'react';
import { Target, Users, Award, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-slate-950 text-slate-100 border-b border-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/about_artisan_3d_1794327743888.jpg"
                alt="Maker inspeccionando prototipo 3D en taller 3D Creations"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Location Badge */}
              <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-xs text-rose-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>San Salvador de Jujuy, Argentina</span>
              </div>

              {/* Bottom Quote Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl p-3.5">
                <p className="text-xs text-slate-300 italic">
                  &ldquo;Nuestra pasión es convertir modelos virtuales en soluciones físicas palpables de alta fidelidad.&rdquo;
                </p>
                <p className="text-[11px] text-rose-400 font-mono mt-1 font-semibold">
                  — Equipo 3D Creations
                </p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono">
              <span>Sobre Nosotros</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Pioneros en fabricación digital y prototipado 3D en el Norte Argentino
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">3D Creations</strong> nació en Jujuy con la vocación de democratizar la fabricación bajo demanda. Lo que comenzó como un laboratorio de experimentación tecnológica se ha consolidado como un taller de referencia para profesionales de la arquitectura, mecánica, medicina, robótica y entusiastas del modelismo.
              </p>
              <p>
                Comprendemos que cada pieza tiene una función crítica: desde un repuesto descontinuado de un electrodoméstico o maquinaria agrícola, hasta la maqueta de una tesis o la réplica coleccionable de un personaje favorito. Por eso no trabajamos con configuraciones genéricas; testeamos densidades, temperaturas de boquilla y velocidades específicas para cada geometría.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-850">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 mb-1.5">
                  <Target className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase font-mono">Precisión</span>
                </div>
                <p className="text-xs text-slate-400">
                  Calibración micrométrica y compensación de contracción térmica.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 mb-1.5">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase font-mono">Garantía</span>
                </div>
                <p className="text-xs text-slate-400">
                  Revisión visual y dimensional previa al empaquetado final.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 mb-1.5">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase font-mono">Comunidad</span>
                </div>
                <p className="text-xs text-slate-400">
                  Asesoramiento directo y soporte técnico en cada paso del encargo.
                </p>
              </div>
            </div>

            {/* Quantified Metrics Strip (Claim-to-Proof Adjacency) */}
            <div className="grid grid-cols-3 gap-4 pt-3 text-center sm:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono tabular-nums">+1.400</p>
                <p className="text-xs text-slate-400 mt-0.5">Piezas impresas</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">99.4%</p>
                <p className="text-xs text-slate-400 mt-0.5">Precisión de cotas</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono tabular-nums">24/48h</p>
                <p className="text-xs text-slate-400 mt-0.5">Despacho ágil</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
