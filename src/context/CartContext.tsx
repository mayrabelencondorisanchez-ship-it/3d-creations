import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { CartItem, Producto } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (producto: Producto, cantidad?: number, colorSeleccionado?: string, notas?: string) => void;
  updateQuantity: (id: string | number, newQuantity: number) => void;
  removeFromCart: (id: string | number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CART_STORAGE_KEY = 'universo3d_cart_items_v1';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (err) {
      console.error('Error loading cart from localStorage', err);
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.error('Error saving cart to localStorage', err);
    }
  }, [items]);

  const addToCart = (
    producto: Producto,
    cantidad = 1,
    colorSeleccionado?: string,
    notas?: string
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.producto.id === producto.id && item.colorSeleccionado === colorSeleccionado
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        const existing = updated[existingIndex];
        const maxStock = producto.stock ?? 99;
        const newQty = Math.min(existing.cantidad + cantidad, maxStock);
        updated[existingIndex] = {
          ...existing,
          cantidad: newQty,
          notas: notas || existing.notas,
        };
        return updated;
      }

      const newItem: CartItem = {
        id: `${producto.id}-${colorSeleccionado || 'default'}-${Date.now()}`,
        producto,
        cantidad: Math.max(1, cantidad),
        colorSeleccionado: colorSeleccionado || producto.color || undefined,
        notas,
      };
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string | number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }

    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const maxStock = item.producto.stock ?? 99;
          return {
            ...item,
            cantidad: Math.min(newQuantity, maxStock),
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id: string | number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.cantidad, 0),
    [items]
  );

  const totalAmount = useMemo(
    () => items.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalAmount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
