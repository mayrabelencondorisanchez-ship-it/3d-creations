import React, { useState } from 'react';
import { X, Check, ShoppingBag, MessageSquare, Box, Layers, Palette, Shield } from 'lucide-react';
import { Producto } from '../types';
import { formatPrice, WHATSAPP_PHONE } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { SafeImage } from './SafeImage';
import { getProductFallbackSources } from '../utils/imageFallbacks';

interface ProductModalProps {
  producto: Producto | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ producto, onClose }) => {
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [added, setAdded] = useState(false);

  if (!producto) return null;

  // Determine available colors
  const defaultColors = producto.color 
    ? [producto.color, 'Negro Mate', 'Blanco', 'Gris Plata'] 
    : ['Negro Mate', 'Blanco', 'Rojo Ferrari', 'Azul Eléctrico', 'Verde Militar'];
  
  const currentColor = selectedColor || defaultColors[0];

  const handleAddToCart = () => {
    addToCart(producto, cantidad, currentColor);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  const handleWhatsAppInquiry = () => {
    const text = `¡Hola 3D Creations! 👋 Tengo una consulta sobre el producto *${producto.nombre}* (${producto.material || '3D'}, color: ${currentColor}, precio: ${formatPrice(producto.precio)}). ¿Tienen disponibilidad o hacen modificaciones a medida?`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold font-mono">
              Ficha Técnica de Fabricación
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Image Box */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
              <SafeImage
                src={producto.imagen_url || ''}
                fallbackSources={getProductFallbackSources(producto.imagen_url, producto.nombre, producto.material)}
                alt={producto.nombre}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info Column */}
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-rose-400 font-mono mb-1">
                  <span>{producto.material || 'Material estándar'}</span>
                  <span>·</span>
                  <span>{producto.stock !== undefined && producto.stock !== null ? `Stock: ${producto.stock} u.` : 'Fabricación bajo pedido'}</span>
                </div>

                <h3 className="text-2xl font-bold text-white capitalize">
                  {producto.nombre}
                </h3>

                <p className="text-2xl font-extrabold text-rose-400 font-mono mt-2 tabular-nums">
                  {formatPrice(producto.precio)}
                </p>

                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {producto.descripcion || 'Pieza impresa con polímeros termoplásticos de grado técnico. Gran resolución de capas, alta durabilidad estructural y terminación suave.'}
                </p>
              </div>

              {/* Color selector */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-rose-400" />
                  <span>Color de filamento / resina:</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {defaultColors.map((colorName) => (
                    <button
                      key={colorName}
                      type="button"
                      onClick={() => setSelectedColor(colorName)}
                      className={`text-xs px-2.5 py-1.5 rounded-md border transition-all ${
                        currentColor === colorName
                          ? 'bg-rose-500 text-white font-bold border-rose-500'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      {colorName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center gap-4 pt-2 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-300">Cantidad:</span>
                <div className="flex items-center border border-slate-700 rounded-lg bg-slate-950">
                  <button
                    type="button"
                    onClick={() => setCantidad((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded-l-lg transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-sm font-bold font-mono text-white tabular-nums">
                    {cantidad}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const max = producto.stock ?? 99;
                      setCantidad((q) => Math.min(max, q + 1));
                    }}
                    className="px-3 py-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded-r-lg transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Technical Specs Grid */}
          <div className="grid grid-cols-3 gap-3 p-3.5 bg-slate-950 rounded-xl border border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Layers className="w-4 h-4 text-rose-400 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-500">Altura de capa</p>
                <p className="font-semibold text-white">0.12 - 0.20 mm</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Shield className="w-4 h-4 text-rose-400 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-500">Relleno infill</p>
                <p className="font-semibold text-white">20% Gyroid</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Box className="w-4 h-4 text-rose-400 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-500">Garantía taller</p>
                <p className="font-semibold text-white">Tolerancia ±0.2mm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleWhatsAppInquiry}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Consultar por WhatsApp</span>
          </button>

          <button
            onClick={handleAddToCart}
            disabled={added}
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg transition-all shadow-md ${
              added
                ? 'bg-emerald-500 text-white'
                : 'bg-rose-500 hover:bg-rose-400 text-white shadow-rose-500/20 hover:scale-[1.02]'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>¡Agregado al Carrito!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Agregar al Carrito ({formatPrice(producto.precio * cantidad)})</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
