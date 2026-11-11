import React, { useState } from 'react';
import { MessageSquare, MapPin, Clock, Send, UploadCloud, HelpCircle, Phone, Sparkles } from 'lucide-react';
import { WHATSAPP_PHONE, generateWhatsAppCustomQuoteUrl } from '../utils/formatters';

export const ContactSection: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [material, setMaterial] = useState('PLA Bioplástico');
  const [dimensiones, setDimensiones] = useState('');
  const [infill, setInfill] = useState('20% (Estándar)');
  const [linkArchivo, setLinkArchivo] = useState('');

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const fullDesc = linkArchivo
      ? `${descripcion} (Enlace a archivo 3D: ${linkArchivo})`
      : descripcion;

    const url = generateWhatsAppCustomQuoteUrl({
      nombre,
      material,
      dimensiones: dimensiones || 'A convenir',
      infill,
      descripcion: fullDesc || 'Pieza personalizada a cotizar',
    });

    window.open(url, '_blank');
  };

  const faqs = [
    {
      q: '¿Qué formato de archivo debo enviar para cotizar?',
      a: 'Aceptamos archivos .STL, .OBJ, .STEP o .3MF. Si no tenés archivo 3D pero tenés las medidas o un plano de la pieza, podemos modelarlo en CAD desde cero.',
    },
    {
      q: '¿Cuánto tiempo demora una impresión?',
      a: 'Piezas pequeñas o medianas del catálogo suelen entregarse en 24 a 48 hs. Para series por cantidad o piezas de gran formato (más de 25 cm), coordinamos el plazo exacto tras el slicing.',
    },
    {
      q: '¿Hacen envíos fuera de Jujuy?',
      a: '¡Sí! Despachamos a todo el territorio argentino mediante Correo Argentino y Andreani con empaque amortiguado especial para piezas frágiles.',
    },
  ];

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-slate-950 text-slate-100 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2">
            <span>Atención Directa &amp; Presupuestos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Tenés un proyecto o querés una cotización a medida?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Completá los datos de tu pieza o escribinos directamente por WhatsApp. Te respondemos con el cálculo de tiempo, material y costo exacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Quote Calculator Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-800">
              <UploadCloud className="w-5 h-5 text-rose-400" />
              <div>
                <h3 className="text-lg font-bold text-white">
                  Cotizador Rápido de Impresión 3D
                </h3>
                <p className="text-xs text-slate-400">
                  Calculamos peso, horas de máquina y te enviamos el presupuesto al instante.
                </p>
              </div>
            </div>

            <form onSubmit={handleSendQuote} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Tu Nombre o Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Lucas Gómez"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Material Deseado
                  </label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-rose-400 transition-colors"
                  >
                    <option value="PLA Bioplástico">PLA Bioplástico (Figuras, Deco, Prototipos)</option>
                    <option value="PETG Resistente">PETG Alta Tenacidad (Impacto y Exterior)</option>
                    <option value="Resina SLA 8K">Resina SLA 8K (Miniaturas, Joyería, Odonto)</option>
                    <option value="ABS Termorresistente">ABS Termorresistente (Automotriz, Mecánica)</option>
                    <option value="TPU Flexible">TPU Flexible 95A (Goma, Fundas, Juntas)</option>
                    <option value="No estoy seguro (Asesoramiento)">No estoy seguro (Recomiéndenme)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Dimensiones Aprox. (Alto x Ancho x Prof.)
                  </label>
                  <input
                    type="text"
                    value={dimensiones}
                    onChange={(e) => setDimensiones(e.target.value)}
                    placeholder="Ej. 12 x 8 x 5 cm"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Densidad de Relleno (Infill)
                  </label>
                  <select
                    value={infill}
                    onChange={(e) => setInfill(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-rose-400 transition-colors"
                  >
                    <option value="15% Ligero">15% Ligero (Bajo costo, decorativo)</option>
                    <option value="20% (Estándar)">20% Estándar (Recomendado general)</option>
                    <option value="40% Robusto">40% Robusto (Herramientas, soportes)</option>
                    <option value="80% a 100% Sólido">80% a 100% Sólido (Cargas mecánicas extremas)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Descripción de la Pieza o Proyecto *
                </label>
                <textarea
                  required
                  rows={3}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  placeholder="Detallá para qué sirve la pieza, color preferido, cantidad de unidades o requerimientos especiales..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Link de descarga STL / OBJ (Opcional - Drive, Dropbox, Printables)
                </label>
                <input
                  type="url"
                  value={linkArchivo}
                  onChange={(e) => setLinkArchivo(e.target.value)}
                  placeholder="https://drive.google.com/... o https://printables.com/..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-rose-500 hover:bg-rose-400 rounded-lg shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta Directa por WhatsApp (+54 9 388 404-5589)</span>
              </button>
            </form>
          </div>

          {/* Workshop Details & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Callout */}
            <div className="bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-800/40 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">
                    Canal Directo de WhatsApp
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Escribinos directamente para coordinar impresiones urgentes, envíos de archivos pesados o consultas técnicas inmediatas.
                  </p>
                  <p className="text-sm font-mono font-bold text-emerald-400 pt-1">
                    +54 9 388 404-5589
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 flex justify-end">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola 3D Creations! Quisiera consultar sobre un servicio de impresión 3D.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Abrir WhatsApp Ahora</span>
                </a>
              </div>
            </div>

            {/* Workshop Address & Hours */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Información del Taller
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Ubicación:</strong>
                    <span>San Salvador de Jujuy, Jujuy, Argentina. Retiro previa coordinación o despacho a domicilio.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Horarios de Fabricación:</strong>
                    <span>Lunes a Sábados: 09:00 - 13:00 / 16:00 - 20:30 hs.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-rose-400 uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Preguntas Frecuentes</span>
              </div>

              <div className="space-y-3 pt-1">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-850 pb-2.5 last:border-b-0 last:pb-0">
                    <p className="text-xs font-semibold text-white mb-1">
                      {faq.q}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
