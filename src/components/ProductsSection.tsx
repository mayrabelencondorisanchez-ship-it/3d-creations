import React, { useEffect, useState, useMemo } from 'react';
import { supabase } from '../lib/supabase';
import { Producto } from '../types';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import { ProductModal } from './ProductModal';
import { Search, RotateCw, ShoppingBag, Eye, Database, Sparkles, Box } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { getProductFallbackSources } from '../utils/imageFallbacks';

export const ProductsSection: React.FC = () => {
  const { addToCart } = useCart();
  const [dbProducts, setDbProducts] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('todos');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default');

  // Animation state per product
  const [justAddedId, setJustAddedId] = useState<string | number | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: sbError } = await supabase
        .from('productos')
        .select('*')
        .order('id', { ascending: true });

      if (sbError) {
        throw sbError;
      }

      if (data) {
        setDbProducts(data as Producto[]);
      }
    } catch (err: unknown) {
      console.error('Error al conectar con Supabase:', err);
      const message = err instanceof Error ? err.message : 'Error al conectar con la base de datos';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Extract materials for filter directly from live DB products
  const availableMaterials = useMemo(() => {
    const materials = new Set<string>();
    dbProducts.forEach((p) => {
      if (p.material) {
        materials.add(p.material.trim());
      }
    });
    return Array.from(materials);
  }, [dbProducts]);

  // Filtered & sorted list (ONLY DB products)
  const filteredProducts = useMemo(() => {
    return dbProducts
      .filter((p) => {
        const matchesSearch =
          p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (p.descripcion && p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (p.material && p.material.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesMaterial =
          selectedMaterial === 'todos' ||
          (p.material && p.material.toLowerCase() === selectedMaterial.toLowerCase());

        return matchesSearch && matchesMaterial;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.precio - b.precio;
        if (sortBy === 'price-desc') return b.precio - a.precio;
        if (sortBy === 'name') return a.nombre.localeCompare(b.nombre);
        return 0;
      });
  }, [dbProducts, searchTerm, selectedMaterial, sortBy]);

  const handleQuickAdd = (p: Producto, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(p, 1, p.color || undefined);
    setJustAddedId(p.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1200);
  };

  return (
    <section id="productos" className="py-16 sm:py-20 bg-slate-950 text-slate-100 border-b border-slate-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono mb-2">
              <Database className="w-3.5 h-3.5" />
              <span>Catálogo en Vivo · Supabase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Catálogo de Piezas &amp; Modelos 3D
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Productos sincronizados directamente desde nuestra base de datos. Agregá al carrito y confirmá tu pedido con stock en tiempo real directamente por WhatsApp.
            </p>
          </div>

          {/* Sync status & Refresh button */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={fetchProducts}
              disabled={loading}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Sincronizar con tabla 'productos' de Supabase"
            >
              <RotateCw className={`w-3.5 h-3.5 text-rose-400 ${loading ? 'animate-spin' : ''}`} />
              <span>{loading ? 'Actualizando...' : 'Recargar catálogo'}</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-4 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="relative md:col-span-8">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nombre, material o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition-colors"
              />
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-rose-400 transition-colors"
              >
                <option value="default">Ordenar: Destacados</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="name">Alfabético: A - Z</option>
              </select>
            </div>
          </div>

          {/* Material Filters (Interactive Tabs) */}
          {availableMaterials.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
              <span className="text-xs text-slate-400 mr-1 font-medium">Filtrar material:</span>
              <button
                onClick={() => setSelectedMaterial('todos')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  selectedMaterial === 'todos'
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                Todos ({dbProducts.length})
              </button>
              {availableMaterials.map((mat) => {
                const count = dbProducts.filter(
                  (p) => p.material && p.material.toLowerCase() === mat.toLowerCase()
                ).length;
                return (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                      selectedMaterial.toLowerCase() === mat.toLowerCase()
                        ? 'bg-rose-500 text-white shadow-sm'
                        : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    {mat} ({count})
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Database Error Banner if any */}
        {error && (
          <div className="p-4 mb-6 rounded-xl bg-rose-950/30 border border-rose-800/50 text-rose-200 text-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>Aviso: {error}.</span>
            </div>
            <button
              onClick={fetchProducts}
              className="underline text-xs hover:text-white cursor-pointer"
            >
              Reintentar
            </button>
          </div>
        )}

        {/* Loading State Skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 animate-pulse space-y-4">
                <div className="w-full aspect-[4/3] bg-slate-800/60 rounded-xl" />
                <div className="h-4 bg-slate-800/80 rounded w-2/3" />
                <div className="h-3 bg-slate-800/50 rounded w-1/2" />
                <div className="flex justify-between items-center pt-2">
                  <div className="h-5 bg-slate-800/80 rounded w-20" />
                  <div className="h-8 bg-slate-800 rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty DB or Search Results */}
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800/80 p-8">
            <Box className="w-12 h-12 text-slate-600 mx-auto mb-3 stroke-[1.5]" />
            <h3 className="text-lg font-bold text-white">
              {searchTerm || selectedMaterial !== 'todos'
                ? 'No se encontraron productos'
                : 'No hay productos en la base de datos'}
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
              {searchTerm || selectedMaterial !== 'todos'
                ? `No hay piezas que coincidan con "${searchTerm}" o el filtro seleccionado.`
                : 'No se encontraron registros activos en la tabla productos de Supabase.'}
            </p>
            {(searchTerm || selectedMaterial !== 'todos') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedMaterial('todos');
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-rose-500 hover:bg-rose-400 rounded-lg transition-colors cursor-pointer"
              >
                Restablecer filtros
              </button>
            )}
          </div>
        )}

        {/* Product Cards Grid - Only Products from Supabase */}
        {!loading && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((p) => {
              const hasStock = p.stock === undefined || p.stock === null || p.stock > 0;
              const isAdded = justAddedId === p.id;

              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  className="group bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-4 flex items-center justify-center">
                      <SafeImage
                        src={p.imagen_url || ''}
                        fallbackSources={getProductFallbackSources(p.imagen_url, p.nombre, p.material)}
                        alt={p.nombre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Badges */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        {p.material && (
                          <span className="px-2.5 py-1 text-[11px] font-mono font-bold tracking-wide rounded bg-slate-950/90 text-rose-300 border border-slate-800 backdrop-blur-sm">
                            {p.material}
                          </span>
                        )}
                        <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 backdrop-blur-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>Supabase</span>
                        </span>
                      </div>

                      {/* Stock Indicator Top Right */}
                      <div className="absolute top-2.5 right-2.5">
                        <span className="px-2 py-1 text-[11px] font-mono rounded bg-slate-950/90 text-slate-300 border border-slate-800 backdrop-blur-sm tabular-nums">
                          {p.stock !== undefined && p.stock !== null ? `Stock: ${p.stock}` : 'Disponible'}
                        </span>
                      </div>

                      {/* Hover Overlay preview button */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-xs font-semibold text-white border border-slate-750 shadow-md">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Ver Ficha Técnica</span>
                        </span>
                      </div>
                    </div>

                    {/* Metadata Header */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="text-slate-400 font-mono text-[11px]">
                        {p.color ? `Color: ${p.color}` : 'Personalizable'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white capitalize group-hover:text-rose-400 transition-colors line-clamp-1">
                      {p.nombre}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                      {p.descripcion || 'Pieza impresa con tolerancias mecánicas ajustadas y alta estabilidad dimensional.'}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono block">
                        Precio Unitario
                      </span>
                      <span className="text-lg font-extrabold text-rose-400 font-mono tabular-nums">
                        {formatPrice(p.precio)}
                      </span>
                    </div>

                    <button
                      type="button"
                      disabled={!hasStock}
                      onClick={(e) => handleQuickAdd(p, e)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all shadow-sm cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-500 text-white'
                          : !hasStock
                          ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                          : 'bg-rose-500 hover:bg-rose-400 text-white shadow-rose-500/20 active:scale-95'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{isAdded ? '¡Agregado!' : 'Agregar'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        producto={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
