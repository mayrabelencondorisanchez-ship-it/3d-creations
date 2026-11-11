import heroWorkshopImg from '../assets/images/hero_3d_workshop_1794327743299.jpg';
import aboutArtisanImg from '../assets/images/about_artisan_3d_1794327743888.jpg';
import showcaseMaterialsImg from '../assets/images/showcase_3d_materials_1794327743135.jpg';

export { heroWorkshopImg, aboutArtisanImg, showcaseMaterialsImg };

// Multi-tier reliable sources for Hero image
export const HERO_IMAGE_SOURCES: string[] = [
  heroWorkshopImg,
  '/hero.jpg',
  '/hero-3d.jpg',
  '/images/hero_3d_workshop_1794327743299.jpg',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1631556097152-c39479bbfb55?auto=format&fit=crop&w=1200&q=80',
];

// Multi-tier reliable sources for About Artisan image
export const ABOUT_IMAGE_SOURCES: string[] = [
  aboutArtisanImg,
  '/about.jpg',
  '/images/about_artisan_3d_1794327743888.jpg',
  'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
];

// Multi-tier reliable sources for Showcase Materials image
export const SHOWCASE_IMAGE_SOURCES: string[] = [
  showcaseMaterialsImg,
  '/showcase.jpg',
  '/images/showcase_3d_materials_1794327743135.jpg',
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1631556097152-c39479bbfb55?auto=format&fit=crop&w=1200&q=80',
];

/**
 * Returns contextual curated 3D model fallback images based on product name/material
 */
export function getProductFallbackSources(
  initialUrl?: string | null,
  productName?: string | null,
  material?: string | null
): string[] {
  const sources: string[] = [];
  if (initialUrl && initialUrl.trim() !== '') {
    sources.push(initialUrl);
  }

  const nameLower = (productName || '').toLowerCase();
  const matLower = (material || '').toLowerCase();

  if (nameLower.includes('celular') || nameLower.includes('telefono') || nameLower.includes('phone') || nameLower.includes('soporte')) {
    sources.push('https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80');
  } else if (nameLower.includes('dragon') || nameLower.includes('dragón') || nameLower.includes('articulad')) {
    sources.push('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80');
  } else if (nameLower.includes('auricular') || nameLower.includes('headset') || nameLower.includes('gamer')) {
    sources.push('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80');
  } else if (nameLower.includes('jarron') || nameLower.includes('jarrón') || nameLower.includes('voronoi') || nameLower.includes('florero')) {
    sources.push('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80');
  } else if (nameLower.includes('miniatura') || nameLower.includes('guerrero') || matLower.includes('resina') || matLower.includes('sla')) {
    sources.push('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80');
  } else if (nameLower.includes('engranaje') || nameLower.includes('repuesto') || nameLower.includes('mecanic') || nameLower.includes('molienda')) {
    sources.push('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80');
  }

  // Universal fallbacks
  sources.push(
    '/showcase.jpg',
    showcaseMaterialsImg,
    'https://images.unsplash.com/photo-1631556097152-c39479bbfb55?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  );

  return sources;
}
