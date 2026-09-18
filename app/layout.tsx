import type {Metadata} from 'next';
import { Syne, Manrope } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LAMARK STUDIO — Design, Direção Visual e Inteligência Artificial',
  description: 'A LAMARK STUDIO cria soluções visuais para marcas, produtos e campanhas através de design, direção criativa e inteligência artificial.',
  openGraph: {
    title: 'LAMARK STUDIO — Design, Direção Visual e Inteligência Artificial',
    description: 'A LAMARK STUDIO cria soluções visuais para marcas, produtos e campanhas através de design, direção criativa e inteligência artificial.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAMARK STUDIO',
    description: 'Design, Direção Visual e Inteligência Artificial',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-lamark-offwhite text-lamark-black font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
