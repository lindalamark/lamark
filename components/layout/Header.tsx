'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'INÍCIO', href: '/' },
  { name: 'PROJETOS', href: '/work' },
  { name: 'O ESTÚDIO', href: '/estudio' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent',
          isScrolled ? 'bg-lamark-offwhite/90 backdrop-blur-md border-lamark-black/10 py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-xl tracking-tighter">
            LAMARK STUDIO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs font-display tracking-widest hover:text-lamark-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/contato" variant="primary" className="py-2.5 px-6 text-xs">
              COMEÇAR UM PROJETO
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-lamark-black"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-lamark-offwhite flex flex-col justify-between p-6"
          >
            <div className="flex justify-between items-center py-2">
              <Link href="/" className="font-display font-bold text-xl tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
                LAMARK STUDIO
              </Link>
              <button
                className="p-2 text-lamark-black"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-8">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-4xl font-display font-medium tracking-tight uppercase"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="pb-8">
              <Button href="/contato" variant="primary" className="w-full text-center py-4 text-sm" onClick={() => setMobileMenuOpen(false)}>
                COMEÇAR UM PROJETO
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
