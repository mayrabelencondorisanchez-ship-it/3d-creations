import React, { useState, useEffect } from 'react';
import { Box, Layers, Cpu } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSources?: string[];
  containerClassName?: string;
  categoryHint?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSources = [],
  alt = 'Pieza 3D',
  className = '',
  containerClassName = '',
  categoryHint,
  ...props
}) => {
  // Aggregate candidate list in priority order
  const candidates = React.useMemo(() => {
    const list: string[] = [];
    if (src && src.trim() !== '') {
      list.push(src);
    }
    fallbackSources.forEach((s) => {
      if (s && s.trim() !== '' && !list.includes(s)) {
        list.push(s);
      }
    });
    return list;
  }, [src, fallbackSources]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset when source candidates change
  useEffect(() => {
    setCurrentIndex(0);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const currentSource = candidates[currentIndex];

  const handleError = () => {
    if (currentIndex + 1 < candidates.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !currentSource) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800/80 ${className} ${containerClassName}`}
      >
        <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-3 shadow-inner">
          <Layers className="w-7 h-7 stroke-[1.5]" />
        </div>
        <p className="text-xs font-bold text-slate-200 tracking-wide uppercase font-mono">
          3D Creations Jujuy
        </p>
        <p className="text-[11px] text-slate-400 mt-1 max-w-[200px] truncate">
          {alt || 'Pieza de Fabricación Digital'}
        </p>
        <div className="mt-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-rose-300">
          <Cpu className="w-3 h-3 text-rose-400" />
          <span>FDM & Resina 8K</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSource}
      alt={alt}
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-90'}`}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};
