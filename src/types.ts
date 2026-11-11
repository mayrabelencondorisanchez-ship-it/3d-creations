export interface Producto {
  id: string | number;
  nombre: string;
  precio: number;
  imagen_url?: string | null;
  material?: string | null;
  stock?: number | null;
  descripcion?: string | null;
  color?: string | null;
  categoria?: string | null;
  created_at?: string;
}

export interface CartItem {
  id: string | number;
  producto: Producto;
  cantidad: number;
  colorSeleccionado?: string;
  notas?: string;
}

export interface CheckoutCustomerInfo {
  nombre: string;
  telefono: string;
  direccion: string;
  metodoPago: 'Transferencia Bancaria' | 'Efectivo / Retiro en Taller' | 'Mercado Pago';
  notas: string;
}
