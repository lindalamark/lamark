'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ProductComparisonProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export function ProductComparison({ beforeImage, afterImage, className }: ProductComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const onWindowPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const onWindowPointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointerup', onWindowPointerUp);
    window.addEventListener('pointercancel', onWindowPointerUp);

    if (isDragging) {
      window.addEventListener('pointermove', onWindowPointerMove);
    }

    return () => {
      window.removeEventListener('pointerup', onWindowPointerUp);
      window.removeEventListener('pointercancel', onWindowPointerUp);
      window.removeEventListener('pointermove', onWindowPointerMove);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onDragStart={(e) => e.preventDefault()}
      className={`relative w-full aspect-[4/3] overflow-hidden bg-lamark-graphite cursor-ew-resize select-none group touch-none ${className || ''}`}
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
    >
      {/* 1. Imagem DEPOIS (base) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <Image
          src={afterImage}
          alt="Depois"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none select-none"
          draggable={false}
          priority
        />
        {/* Label superior direito: DEPOIS */}
        <div className="absolute top-4 right-4 bg-lamark-black/80 backdrop-blur-sm text-lamark-offwhite text-[11px] font-display tracking-widest px-3 py-1.5 uppercase pointer-events-none z-10 border border-white/10">
          DEPOIS
        </div>
      </div>

      {/* 2. Imagem ANTES (sobreposta com recorte horizontal baseado no slider) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Antes"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none select-none"
          draggable={false}
          priority
        />
        {/* Label superior esquerdo: ANTES */}
        <div className="absolute top-4 left-4 bg-lamark-black/80 backdrop-blur-sm text-lamark-offwhite text-[11px] font-display tracking-widest px-3 py-1.5 uppercase pointer-events-none z-10 border border-white/10">
          ANTES
        </div>
      </div>

      {/* 3. Divisória vertical e alça (idêntica à estrutura refinada do BeforeAfter) */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-lamark-white z-20 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-9 h-9 bg-lamark-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <div className="flex gap-1">
            <div className="w-0.5 h-3.5 bg-lamark-black opacity-40"></div>
            <div className="w-0.5 h-3.5 bg-lamark-black opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

