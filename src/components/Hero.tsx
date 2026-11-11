import React from 'react';
import { ArrowDown, Cpu, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-900">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-500/12 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span>Taller de Impresión 3D · Jujuy, Argentina</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Fabricación aditiva y piezas de <span className="text-rose-400">precisión milimétrica</span> para tus proyectos.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              En <strong className="text-white font-semibold">3D Creations</strong> convertimos tus archivos digitales y modelos CAD en realidades tangibles. Piezas funcionales de alta resistencia, prototipos de ingeniería, figuras coleccionables y repuestos que ya no se consiguen.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#productos"
                className="px-6 py-3.5 text-sm font-bold text-white bg-rose-500 hover:bg-rose-400 rounded-lg shadow-lg shadow-rose-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Explorar Catálogo</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-750 rounded-lg transition-colors"
              >
                Cotizar Archivo STL / Personalizado
              </a>
            </div>

            {/* Micro specs strip */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-rose-400 shrink-0" />
                <span>FDM + Resina SLA 8K</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
                <span>PLA, PETG, ABS y TPU</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Envíos a todo el país</span>
              </div>
            </div>
          </div>

          {/* Right Column: Workshop Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_3d_workshop_1794327743299.jpg"
                alt="Taller de impresión 3D Creations en Jujuy"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating workshop stamp */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800/90 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Capacidad de producción</p>
                  <p className="text-sm font-bold text-white">Gran volumen &amp; Alta definición</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-rose-400 font-semibold bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-md">
                  <Layers className="w-3.5 h-3.5" />
                  <span>0.08 mm</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
