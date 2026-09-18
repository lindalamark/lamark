import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import Image from 'next/image';
import Link from 'next/link';

export default function Projetos() {
  const projects = [
    { title: 'AURA VISUALS', tag: 'PROJETO CONCEITUAL', cat: 'MODA', seed: 'proj1' },
    { title: 'LUMINA', tag: 'CAMPANHA CONCEITUAL', cat: 'BELEZA', seed: 'proj2' },
    { title: 'URBAN ROOTS', tag: 'EXPERIMENTO VISUAL', cat: 'CULTURA & MÚSICA', seed: 'proj3' },
    { title: 'NECTAR', tag: 'CAMPANHA CONCEITUAL', cat: 'BEBIDAS', seed: 'proj4' },
  ];

  return (
    <main className="min-h-screen bg-lamark-black text-lamark-offwhite flex flex-col pt-32">
      <Header />
      
      <section className="flex-1 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            title="Projetos Selecionados"
            description="Um olhar sobre campanhas, experimentos e soluções visuais criadas através da união entre direção de arte e inteligência artificial."
            className="mb-24"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((proj, i) => (
              <Reveal key={proj.title} delay={i * 0.1}>
                <Link href={`/work/${proj.title.toLowerCase().replace(' ', '-')}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-8">
                    <Image
                      src={
                        proj.title === 'AURA VISUALS'
                          ? '/imagens/variados/1capaaura.png'
                          : proj.title === 'LUMINA'
                          ? '/imagens/variados/1capalumina.png'
                          : proj.title === 'URBAN ROOTS'
                          ? '/imagens/variados/1capaurban.png'
                          : proj.title === 'NECTAR'
                          ? '/imagens/variados/1capanectar.jpg'
                          : `https://picsum.photos/seed/${proj.seed}/800/1000`
                      }
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-lamark-offwhite text-lamark-black px-4 py-2 text-xs font-display font-bold tracking-widest uppercase">
                      {proj.tag}
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-lamark-offwhite/20 pb-4">
                    <h3 className="font-display text-4xl font-bold uppercase tracking-tighter group-hover:text-lamark-red transition-colors">
                      {proj.title}
                    </h3>
                    <span className="font-body text-sm text-lamark-gray tracking-widest uppercase">{proj.cat}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
