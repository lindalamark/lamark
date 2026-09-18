import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, description, className, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16 md:mb-24 flex flex-col gap-6', align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      {(subtitle || title) && (
        <div className="flex flex-col gap-2">
          {subtitle && (
            <Reveal>
              <h3 className="font-display text-sm tracking-widest text-lamark-gray uppercase">
                {subtitle}
              </h3>
            </Reveal>
          )}
          {title && (
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter max-w-4xl leading-[0.9]">
                {title}
              </h2>
            </Reveal>
          )}
        </div>
      )}
      
      {description && (
        <Reveal delay={0.2}>
          <p className="font-body text-lg md:text-xl text-lamark-gray max-w-2xl leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
