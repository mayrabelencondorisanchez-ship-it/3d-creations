import React from 'react';
import { Layers, ShieldCheck, Zap, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Layers,
      title: 'Tecnología Dual FDM + Resina 8K',
      description:
        'Combinamos extrusión termoplástica FDM para piezas estructurales de gran volumen y estereolitografía SLA en resina 8K (22 micrones) para detalles microscópicos y joyería.',
      highlight: 'Resolución de 0.08 a 0.28 mm',
    },
    {
      icon: ShieldCheck,
      title: 'Polímeros y Resinas de Grado Técnico',
      description:
        'Trabajamos con filamentos vírgenes de primera línea: PLA bioplástico, PETG resistente al impacto y a la intemperie, ABS termorresistente y TPU elastómero flexible.',
      highlight: 'Materiales testeados y certificados',
    },
    {
      icon: Zap,
      title: 'Prototipado Ágil en 24 a 48 Horas',
      description:
        'Optimizamos mallas 3D y realizamos slicing con perfiles calibrados para acelerar tus iteraciones de producto antes de pasar a matricería o producción final.',
      highlight: 'Respuesta inmediata en Jujuy',
    },
    {
      icon: Sliders,
      title: 'Insertos Roscados y Ajustes Mecánicos',
      description:
        'Incorporamos tuercas de latón termo-fijadas (M2 a M8) para ensamblajes desmontables y uniones roscadas de altísima durabilidad mecánica.',
      highlight: 'Tolerancias para ingeniería ±0.15mm',
    },
    {
      icon: Sparkles,
      title: 'Post-procesado y Curado UV Especializado',
      description:
        'Cada pieza es desbastada, pulida y enjuagada en alcohol isopropílico de pureza química, seguida de cámara de curado UV a 405nm para máxima solidez molecular.',
      highlight: 'Acabado suave y listo para pintar',
    },
    {
      icon: CheckCircle2,
      title: 'Asesoramiento Directo por Makers',
      description:
        'Revisamos el grosor de paredes, soportes y orientación de capas en tu archivo STL sin costo para asegurar que la impresión sea 100% exitosa.',
      highlight: 'Atención 1 a 1 por WhatsApp',
    },
  ];

  return (
    <section id="caracteristicas" className="py-16 sm:py-24 bg-slate-900/60 text-slate-100 border-b border-slate-900 scroll-mt-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2">
            <span>Estándares de Fabricación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Características que definen la calidad de 3D Creations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            No solo imprimimos plástico: aplicamos ingeniería de manufactura aditiva y calibración continua en cada milímetro cúbico depositado.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-slate-950/80 border border-slate-800/80 hover:border-rose-400/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-850 flex items-center text-xs text-rose-300/90 font-mono font-medium">
                  <span>{feat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
