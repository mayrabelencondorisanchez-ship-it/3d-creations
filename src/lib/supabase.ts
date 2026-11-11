import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://nypymdmkvbflztjdabfp.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_87WdZCr3womXHitBdyYWNg_UTKDxs3a';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface Producto {
  id?: string | number;
  nombre: string;
  precio: number;
  imagen_url?: string | null;
  material?: string | null;
  stock?: number;
  descripcion?: string | null;
  categoria?: string | null;
  created_at?: string;
}
