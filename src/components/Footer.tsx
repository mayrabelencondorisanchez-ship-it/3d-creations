import React from 'react';
import { Box, MessageSquare, MapPin, Heart } from 'lucide-react';
import { WHATSAPP_PHONE } from '../utils/formatters';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-900">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base tracking-tight">
              <div className="w-7 h-7 rounded-lg bg-rose-500 flex items-center justify-center text-white">
                <Box className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span><span className="text-rose-400">3D</span> CREATIONS</span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Taller de fabricación aditiva e impresión 3D en San Salvador de Jujuy. Prototipos de ingeniería, piezas técnicas, decoración y pedidos personalizados con envíos a toda la Argentina.
            </p>
            <div className="flex items-center gap-1.5 text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Jujuy, Argentina · Envíos nacionales</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] font-mono">
              Navegación
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#productos" className="hover:text-rose-400 transition-colors">
                  Catálogo de Productos
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="hover:text-rose-400 transition-colors">
                  Características Técnicas
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-rose-400 transition-colors">
                  Sobre el Taller
                </a>
              </li>
              <li>
                <a href="#novedades" className="hover:text-rose-400 transition-colors">
                  Novedades y Materiales
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-rose-400 transition-colors">
                  Cotizar Archivo STL
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] font-mono">
              Contacto Directo
            </h4>
            <p className="text-slate-400">
              Atención personalizada y presupuestos al instante:
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola 3D Creations! Quisiera consultar sobre un servicio de impresión.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-emerald-400 rounded-lg transition-colors font-mono text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>+54 9 388 404-5589</span>
            </a>
            <p className="text-[11px] text-slate-400 pt-1">
              Lunes a Sábados: 09:00 a 20:30 hs.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} 3D Creations. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Hecho con dedicación maker</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>en Jujuy, Argentina</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
