import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AboutSection } from './components/AboutSection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_PHONE } from './utils/formatters';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Catálogo de Productos (Requisito 1: Lee tabla 'productos') */}
          <ProductsSection />

          {/* Características (Requisito 4) */}
          <FeaturesSection />

          {/* Nosotros (Requisito 4) */}
          <AboutSection />

          {/* Novedades (Requisito 4) */}
          <NewsSection />

          {/* Contacto (Requisito 4) */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Carrito de Compras Persistente + Checkout WhatsApp (Requisitos 2 y 3) */}
        <CartDrawer />

        {/* Floating WhatsApp Quick Action Button */}
        <aside aria-label="Contacto flotante" className="fixed bottom-6 right-6 z-30">
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola 3D Creations! Quisiera consultar sobre el catálogo o hacer un pedido personalizado.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-full shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 group"
            title="Escribinos por WhatsApp (+54 9 388 404-5589)"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span className="hidden sm:inline">WhatsApp Taller</span>
          </a>
        </aside>

      </div>
    </CartProvider>
  );
}
