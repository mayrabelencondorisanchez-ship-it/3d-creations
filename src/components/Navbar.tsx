import React, { useState } from 'react';
import { ShoppingBag, Box, Menu, X, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_PHONE } from '../utils/formatters';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Productos', href: '#productos' },
    { name: 'Características', href: '#caracteristicas' },
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Novedades', href: '#novedades' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white hover:text-rose-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
              <Box className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <span className="font-extrabold tracking-tight">
              <span className="text-rose-400">3D</span> CREATIONS
            </span>
          </a>

          {/* Zone 2: Single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-rose-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Cart Button & Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola 3D Creations! Me gustaría hacer una consulta sobre sus servicios de impresión 3D.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold px-3 py-2 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 rounded-lg border border-slate-800 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Directo</span>
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-rose-500 hover:bg-rose-400 rounded-lg shadow-sm shadow-rose-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
              aria-label="Abrir carrito de compras"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Carrito</span>
              {totalItems > 0 && (
                <span className="bg-slate-950 text-rose-300 text-xs px-2 py-0.5 rounded-full font-mono font-bold tabular-nums min-w-5 text-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/98 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-rose-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola 3D Creations! Quisiera consultar por una impresión 3D.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-white bg-slate-900 border border-slate-850 rounded-lg hover:bg-slate-800"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chatear por WhatsApp (+54 9 388 404-5589)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
