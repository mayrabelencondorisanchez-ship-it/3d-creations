import { CartItem, CheckoutCustomerInfo } from '../types';

export const WHATSAPP_PHONE = '5493884045589';

export function formatPrice(price: number | null | undefined): string {
  if (price === null || price === undefined || isNaN(price)) {
    return '$ 0';
  }
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateWhatsAppCheckoutUrl(
  items: CartItem[],
  customerInfo?: Partial<CheckoutCustomerInfo>
): string {
  const total = items.reduce(
    (sum, item) => sum + item.producto.precio * item.cantidad,
    0
  );

  let message = `¡Hola 3D Creations! 👋 Me gustaría realizar el siguiente pedido:\n\n`;
  message += `📦 *DETALLE DEL PEDIDO:*\n`;

  items.forEach((item, index) => {
    const subtotal = item.producto.precio * item.cantidad;
    const materialStr = item.producto.material ? ` (${item.producto.material})` : '';
    const colorStr = item.colorSeleccionado ? ` [Color: ${item.colorSeleccionado}]` : '';
    message += `${index + 1}. *${item.producto.nombre}* x${item.cantidad}${materialStr}${colorStr} - ${formatPrice(subtotal)}\n`;
  });

  message += `\n💰 *TOTAL ESTIMADO:* ${formatPrice(total)} ARS\n`;

  if (customerInfo && (customerInfo.nombre || customerInfo.direccion || customerInfo.telefono)) {
    message += `\n👤 *DATOS DEL CLIENTE:*\n`;
    if (customerInfo.nombre) message += `• Nombre: ${customerInfo.nombre}\n`;
    if (customerInfo.telefono) message += `• Teléfono: ${customerInfo.telefono}\n`;
    if (customerInfo.direccion) message += `• Ubicación / Entrega: ${customerInfo.direccion}\n`;
    if (customerInfo.metodoPago) message += `• Pago preferido: ${customerInfo.metodoPago}\n`;
    if (customerInfo.notas) message += `• Observaciones: ${customerInfo.notas}\n`;
  }

  message += `\n¿Tienen disponibilidad para coordinar la entrega o impresión? ¡Muchas gracias!`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppCustomQuoteUrl(details: {
  nombre?: string;
  material: string;
  infill?: string;
  dimensiones?: string;
  descripcion: string;
}): string {
  let message = `¡Hola 3D Creations! 👋 Necesito una cotización personalizada de impresión 3D:\n\n`;
  if (details.nombre) message += `• Solicitante: ${details.nombre}\n`;
  message += `• Proyecto / Pieza: ${details.descripcion}\n`;
  message += `• Material preferido: ${details.material}\n`;
  if (details.dimensiones) message += `• Dimensiones aprox: ${details.dimensiones}\n`;
  if (details.infill) message += `• Densidad/Relleno estimado: ${details.infill}\n`;
  message += `\n¿Puedo enviarles el archivo STL/OBJ para revisarlo? ¡Gracias!`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
