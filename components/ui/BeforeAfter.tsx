'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('pointerup', handlePointerUp);
    return () => window.removeEventListener('pointerup', handlePointerUp);
  }, []);

  return (
    <div 
      className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-lamark-graphite cursor-ew-resize select-none group"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={afterImage} 
          alt="Resultado Final" 
          fill 
          sizes="100vw"
          className="object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-6 right-6 bg-lamark-black text-lamark-offwhite text-xs font-display tracking-widest px-4 py-2 uppercase z-10">
          RESULTADO
        </div>
      </div>

      {/* Before Image (Foreground overlay) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src={beforeImage} 
          alt="Referência" 
          fill 
          sizes="100vw"
          className="object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-6 left-6 bg-lamark-offwhite text-lamark-black text-xs font-display tracking-widest px-4 py-2 uppercase z-10">
          REFERÊNCIA — ANTES
        </div>
      </div>

      {/* Slider Divider line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-lamark-white z-20 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-10 h-10 bg-lamark-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-lamark-black opacity-40"></div>
            <div className="w-0.5 h-4 bg-lamark-black opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
