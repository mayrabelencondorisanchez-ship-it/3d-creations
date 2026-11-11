import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice, generateWhatsAppCheckoutUrl, WHATSAPP_PHONE } from '../utils/formatters';
import { CheckoutCustomerInfo } from '../types';
import confetti from 'canvas-confetti';

export const CartDrawer: React.FC = () => {
  const {
    items,
    totalItems,
    totalAmount,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [customerInfo, setCustomerInfo] = useState<CheckoutCustomerInfo>({
    nombre: '',
    telefono: '',
    direccion: '',
    metodoPago: 'Transferencia Bancaria',
    notas: '',
  });

  const [showCustomerForm, setShowCustomerForm] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (items.length === 0) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#ec4899', '#fb7185', '#f472b6', '#fda4af'],
      });
    } catch (e) {
      // ignore
    }

    // Generate WhatsApp checkout link
    const checkoutUrl = generateWhatsAppCheckoutUrl(items, customerInfo);

    // Open WhatsApp in a new tab
    window.open(checkoutUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 text-slate-100 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Carrito de Compras</h2>
                <p className="text-xs text-slate-400">
                  {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'} seleccionados
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/80 mx-auto flex items-center justify-center text-slate-600">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-base font-bold text-white">Tu carrito está vacío</h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Explorá nuestro catálogo de piezas 3D y agregá tus modelos favoritos.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-rose-500 hover:bg-rose-400 rounded-lg transition-colors cursor-pointer"
                >
                  Continuar explorando
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-slate-950/80 border border-slate-800 rounded-xl p-3 flex gap-3.5 items-center justify-between"
                    >
                      {/* Thumbnail */}
                      <div className="w-14 h-14 rounded-lg bg-slate-900 border border-slate-800 overflow-hidden shrink-0 flex items-center justify-center">
                        {item.producto.imagen_url ? (
                          <img
                            src={item.producto.imagen_url}
                            alt={item.producto.nombre}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                            referrerPolicy="no-referrer"
                          />
                        ) : null}
                        <div className="text-[10px] font-mono text-slate-500">3D</div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white capitalize truncate">
                          {item.producto.nombre}
                        </h4>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono mt-0.5">
                          <span>{item.producto.material || 'PLA'}</span>
                          {item.colorSeleccionado && (
                            <>
                              <span>·</span>
                              <span className="truncate">{item.colorSeleccionado}</span>
                            </>
                          )}
                        </div>
                        <p className="text-xs font-bold text-rose-400 font-mono mt-1 tabular-nums">
                          {formatPrice(item.producto.precio * item.cantidad)}
                        </p>
                      </div>

                      {/* Stepper & Delete */}
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                          title="Eliminar producto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center border border-slate-800 rounded-md bg-slate-900">
                          <button
                            onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                            className="p-1 text-slate-400 hover:text-white transition-colors"
                            aria-label="Disminuir cantidad"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold font-mono text-white tabular-nums">
                            {item.cantidad}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                            className="p-1 text-slate-400 hover:text-white transition-colors"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optional Customer Information Form Toggle */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowCustomerForm(!showCustomerForm)}
                    className="text-xs text-rose-400 hover:text-rose-300 font-medium flex items-center justify-between w-full py-2 px-3 bg-slate-950/60 border border-slate-800 rounded-lg transition-colors"
                  >
                    <span>{showCustomerForm ? 'Ocultar datos de entrega' : '+ Agregar datos de entrega al pedido'}</span>
                    <span>{showCustomerForm ? '▲' : '▼'}</span>
                  </button>

                  {showCustomerForm && (
                    <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg mt-2 space-y-2.5 text-xs animate-fade-in">
                      <div>
                        <label className="text-slate-400 block mb-1">Nombre Completo</label>
                        <input
                          type="text"
                          value={customerInfo.nombre}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, nombre: e.target.value })}
                          placeholder="Tu nombre"
                          className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-rose-400"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1">Dirección / Localidad</label>
                        <input
                          type="text"
                          value={customerInfo.direccion}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, direccion: e.target.value })}
                          placeholder="Ej. Retiro en Jujuy o Envío a..."
                          className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-rose-400"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1">Método de pago preferido</label>
                        <select
                          value={customerInfo.metodoPago}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, metodoPago: e.target.value as any })}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-rose-400"
                        >
                          <option value="Transferencia Bancaria">Transferencia Bancaria (CBU / Alias)</option>
                          <option value="Efectivo / Retiro en Taller">Efectivo / Retiro en Taller</option>
                          <option value="Mercado Pago">Mercado Pago</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1">Notas especiales</label>
                        <input
                          type="text"
                          value={customerInfo.notas}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, notas: e.target.value })}
                          placeholder="Ej. Color especial, horario de entrega..."
                          className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-rose-400"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center text-xs text-slate-500 pt-2">
                  <span>Persistencia automática</span>
                  <button
                    onClick={clearCart}
                    className="hover:text-red-400 underline transition-colors"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Subtotal ({totalItems} piezas)</span>
                  <span className="font-mono tabular-nums">{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Coordinación de despacho</span>
                  <span className="text-emerald-400 font-medium">Por WhatsApp</span>
                </div>
                <div className="flex items-center justify-between text-base font-extrabold text-white pt-2 border-t border-slate-800/80">
                  <span>Total estimado:</span>
                  <span className="text-xl font-mono text-rose-400 tabular-nums">
                    {formatPrice(totalAmount)}
                  </span>
                </div>
              </div>

              {/* Requirement 3: Botón de checkout que genere enlace https://wa.me/5493884045589 con el detalle formateado del pedido */}
              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 text-sm font-bold text-white bg-rose-500 hover:bg-rose-400 rounded-xl shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Confirmar Pedido por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1">
                <span>Enlace directo a:</span>
                <strong className="text-emerald-400 font-mono">wa.me/{WHATSAPP_PHONE}</strong>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
