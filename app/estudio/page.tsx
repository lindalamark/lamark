import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'O Estúdio · LAMARK STUDIO',
  description: 'Criamos soluções visuais para marcas que querem chegar ao topo.',
};

export default function Estudio() {
  const steps = [
    {
      num: '01',
      title: 'Você conta',
      desc: 'A necessidade, o problema ou a ideia.',
    },
    {
      num: '02',
      title: 'A gente direciona',
      desc: 'Definimos o caminho visual mais adequado.',
    },
    {
      num: '03',
      title: 'A gente produz',
      desc: 'Design, imagem, IA, edição e outras ferramentas entram conforme o projeto exige.',
    },
    {
      num: '04',
      title: 'Você recebe',
      desc: 'Uma solução visual pensada para comunicar, apresentar e posicionar sua marca.',
    },
  ];

  return (
    <main className="min-h-screen bg-lamark-offwhite flex flex-col pt-32">
      <Header />

      {/* 01. INTRODUÇÃO */}
      <section className="py-20 md:py-32 px-6 border-b border-lamark-black/10">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.85] text-lamark-black">
              O ESTÚDIO
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-body text-2xl md:text-4xl lg:text-5xl text-lamark-black max-w-4xl leading-snug tracking-tight mt-8 md:mt-12 font-light">
              Criamos soluções visuais para marcas que querem chegar ao topo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02. SOLUÇÕES */}
      <section className="py-24 md:py-32 px-6 border-b border-lamark-black/10">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-sm tracking-widest uppercase text-lamark-gray mb-8">
              SOLUÇÕES
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-2xl md:text-4xl lg:text-5xl max-w-5xl leading-snug tracking-tight text-lamark-black font-light">
              Design, direção visual, produção e tecnologia para transformar necessidades em imagens que atraem, posicionam e fazem marcas serem percebidas.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03. PROCESSO */}
      <section className="py-24 md:py-32 px-6 border-b border-lamark-black/10">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-sm tracking-widest uppercase text-lamark-gray mb-16">
              PROCESSO
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1} className="flex flex-col">
                <span className="font-display text-5xl md:text-7xl font-bold text-lamark-black/15 tracking-tighter mb-4">
                  {step.num}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-lamark-black mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-base md:text-lg text-lamark-gray leading-relaxed">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04. SOBRE A LAMARK */}
      <section className="py-24 md:py-32 px-6 border-b border-lamark-black/10">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-sm tracking-widest uppercase text-lamark-gray mb-8">
              SOBRE A LAMARK
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-8 max-w-4xl font-body text-xl md:text-2xl text-lamark-black leading-relaxed font-light">
              <p>
                A LAMARK STUDIO é um estúdio criativo focado em transformar ideias, produtos e necessidades de comunicação em experiências visuais.
              </p>
              <p>
                Design é a nossa base. Direção visual é o que dá sentido. Tecnologia é uma das ferramentas que ampliam o que podemos criar.
              </p>
              <p>
                Usamos diferentes recursos do design e tratamento de imagem à inteligência artificial, edição e produção audiovisual, escolhendo o caminho certo para cada projeto.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05. CTA FINAL */}
      <section className="py-24 md:py-36 px-6 bg-lamark-red text-lamark-offwhite">
        <div className="container mx-auto max-w-5xl text-center flex flex-col items-center gap-8 md:gap-12">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              Tem um problema visual?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-body text-xl md:text-2xl max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
              Vamos criar uma solução que faça sua marca ser percebida.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <Button
              href="/contato"
              variant="outline"
              className="bg-lamark-offwhite text-lamark-red hover:bg-lamark-black hover:text-lamark-offwhite border-none py-5 px-10 text-base"
            >
              FALAR COM A LAMARK →
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
