import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface ProjectData {
  title: string;
  subtitle: string;
  heroImage: string;
  problema: string;
  ideia: string;
  direcao: string;
  producao: string;
  resultadoDesc: string;
  res1: string;
  res2: string;
  res3: string;
}

const projectsData: Record<string, ProjectData> = {
  'aura-visuals': {
    title: 'Aura Visuals',
    subtitle: 'Campanha Conceitual · Moda',
    heroImage: '/imagens/variados/2aura.jpg',
    problema: 'A marca precisava construir uma presença visual mais marcante e contemporânea, mas queria fugir de uma estética genérica de moda e criar uma campanha com identidade própria.',
    ideia: 'Criar uma campanha de moda inspirada na identidade brasileira, conectando roupa, território e natureza por meio de uma linguagem editorial contemporânea e autêntica.',
    direcao: 'A direção de arte combina moda contemporânea, elementos naturais, luz do ambiente e tons quentes e terrosos. O modelo, com traços indígenas, reforça a identidade brasileira da campanha sem recorrer a representações caricatas ou tradicionais.',
    producao: 'As peças foram apresentadas em ambientes brasileiros com iluminação natural e composição fotográfica realista. A IA foi utilizada como ferramenta de produção visual para construir e ampliar o universo da campanha, mantendo o foco na roupa, no modelo e na direção de arte.',
    resultadoDesc: 'Uma campanha visual que transforma identidade brasileira em uma linguagem de moda contemporânea, natural e editorial, mostrando como tecnologia e direção criativa podem ampliar uma produção visual.',
    res1: '/imagens/variados/3aura.png',
    res2: '/imagens/variados/4aura.jpg',
    res3: '/imagens/variados/5aura.jpg',
  },
  'lumina': {
    title: 'Lumina',
    subtitle: 'Campanha Conceitual · Beleza',
    heroImage: '/imagens/variados/2lumina.jpg',
    problema: 'A marca precisava apresentar seus produtos de beleza de forma mais sofisticada e desejável, valorizando tanto o cosmético quanto a beleza e a personalidade de quem o utiliza.',
    ideia: 'Criar uma campanha de beauty que transformasse cosméticos em objetos de desejo, combinando pele iluminada, tons dourados e uma estética contemporânea de luxo.',
    direcao: 'A direção de arte combina luz quente, reflexos dourados, pele natural e maquiagem sofisticada. O produto divide o protagonismo com a modelo, criando imagens que funcionam como campanha publicitária e editorial de beleza.',
    producao: 'A produção combina modelo, cosméticos, iluminação e composição fotográfica para construir uma campanha visual premium. A IA foi utilizada como ferramenta de produção visual para desenvolver cenários e imagens publicitárias, mantendo o foco no produto e na beleza.',
    resultadoDesc: 'Uma campanha de beleza contemporânea, sofisticada e comercial, criada para transformar cosméticos em imagens desejáveis e fortalecer sua presença visual.',
    res1: '/imagens/variados/3lumina.jpg',
    res2: '/imagens/variados/4lumina.png',
    res3: '/imagens/variados/5lumina.jpg',
  },
  'urban-roots': {
    title: 'Urban Roots',
    subtitle: 'Experimento Visual · Cultura & Música',
    heroImage: '/imagens/variados/2urban.png',
    problema: 'Uma cena musical independente precisa criar impacto antes mesmo do público chegar ao evento. O desafio era transformar música, artistas e cultura urbana em uma experiência visual forte, contemporânea e reconhecível.',
    ideia: 'Criar a identidade visual de um evento de música urbana a partir da energia de uma DJ, do público e da atmosfera da noite. A campanha deveria parecer parte de uma cena cultural real, não apenas uma divulgação de evento.',
    direcao: 'Misturar fotografia editorial, cultura de rua e linguagem de música independente. A direção combina DJ, palco, multidão, backstage, equipamentos, cartazes e texturas urbanas, criando uma narrativa visual dinâmica, jovem e autêntica.',
    producao: 'Construção de uma campanha visual completa para o universo do evento: retratos da DJ, performance ao vivo, público, backstage e detalhes da experiência. A IA entra como ferramenta de produção visual, enquanto direção de arte, composição, luz e narrativa mantêm a identidade da campanha consistente.',
    resultadoDesc: 'Um universo visual que transforma um evento musical em experiência de marca. A campanha pode se desdobrar em divulgação, redes sociais, cartazes, peças digitais, anúncios, conteúdos editoriais e materiais de comunicação do evento.',
    res1: '/imagens/variados/3urban.png',
    res2: '/imagens/variados/4urban.jpg',
    res3: '/imagens/variados/5urban.jpg',
  },
  'nectar': {
    title: 'Nectar',
    subtitle: 'Bebidas · Campanha Conceitual',
    heroImage: '/imagens/variados/2nectar.jpg',
    problema: 'A LMK precisava apresentar uma bebida natural de forma mais desejável e contemporânea, fugindo da comunicação genérica de bebidas e criando uma identidade visual capaz de valorizar o produto, seus ingredientes e sua experiência.',
    ideia: 'Transformar a LMK em uma experiência visual através de uma campanha que conecta produto, fruta, frescor e desejo. A uva se torna o elemento central da narrativa, enquanto a linguagem visual apresenta a bebida como um produto natural, jovem e contemporâneo.',
    direcao: 'Criar uma direção de arte sensorial e editorial, explorando a relação entre a lata, a uva e o líquido. Texturas, frutas, gotas, mãos, composição, luz e movimento são utilizados para construir imagens publicitárias com forte apelo visual, mantendo o produto como protagonista.',
    producao: 'Desenvolvimento de uma campanha visual para a LMK utilizando diferentes situações de apresentação do produto: composição de produto, ingredientes, interação humana e elementos em movimento. A IA foi utilizada como ferramenta de produção visual para ampliar possibilidades de fotografia e construção de cenas, combinada à direção de arte e ao tratamento gráfico.',
    resultadoDesc: 'Uma linguagem visual contemporânea para a LMK, capaz de transformar uma bebida natural em uma experiência de marca. O conceito pode ser desdobrado em campanhas, redes sociais, anúncios, materiais promocionais, e-commerce e comunicação de novos sabores.',
    res1: '/imagens/variados/3nectar.jpg',
    res2: '/imagens/variados/4nectar.png',
    res3: '/imagens/variados/5nectar.png',
  },
  'studio-blanc': {
    title: 'Studio Blanc',
    subtitle: 'Sistema Visual · Produto',
    heroImage: 'https://picsum.photos/seed/blanc_hero/1920/800',
    problema: 'Apresentar mobiliário e objetos de design contemporâneo em ambientes arquitetônicos sofisticados e minimalistas.',
    ideia: 'Construir espaços de arquitetura escultural onde os produtos funcionam como peças centrais em harmonia com os materiais.',
    direcao: 'Monocromia sutil, texturas de gesso, madeira clara e linho com iluminação zenital suave.',
    producao: 'Direção espacial e arquitetônica gerada com rigor proporcional e fidelidade aos acabamentos originais.',
    resultadoDesc: 'Composições arquitetônicas puras que destacam o design de produto para catálogos e editoriais de arquitetura.',
    res1: 'https://picsum.photos/seed/blanc_res1/800/1066',
    res2: 'https://picsum.photos/seed/blanc_res2/800/1066',
    res3: 'https://picsum.photos/seed/blanc_res3/1920/1080',
  },
  'aesthetica': {
    title: 'Aesthetica',
    subtitle: 'Projeto Autoral · Experimento',
    heroImage: 'https://picsum.photos/seed/aesthetica_hero/1920/800',
    problema: 'Investigar as fronteiras entre fotografia analógica experimental e imagens de síntese geradas com modelos neurais.',
    ideia: 'Série conceitual de retratos com aberrações ópticas, granulação orgânica e luz difusa como manifesto visual.',
    direcao: 'Estética lo-fi sofisticada, atmosfera etérea e texturas palpáveis de filme fotográfico.',
    producao: 'Prompts e direção artística guiados por técnicas de laboratório fotográfico e lentes vintage.',
    resultadoDesc: 'Exploração autoral que demonstra a profundidade estética e poética da inteligência artificial quando guiada por visão artística.',
    res1: 'https://picsum.photos/seed/aesthetica_res1/800/1066',
    res2: 'https://picsum.photos/seed/aesthetica_res2/800/1066',
    res3: 'https://picsum.photos/seed/aesthetica_res3/1920/1080',
  },
};

export default async function ProjetoIndividual({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug] || projectsData['aura-visuals'];

  return (
    <main className="min-h-screen bg-lamark-offwhite flex flex-col pt-32">
      <Header />
      
      {/* HEADER DO PROJETO */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            subtitle={project.subtitle}
            title={project.title}
          />
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 mb-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <div className="relative aspect-[21/9] w-full">
              <Image 
                src={project.heroImage} 
                alt={`${project.title} Hero`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESTRUTURA DO PROJETO */}
      <section className="px-6 mb-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            
            <Reveal>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 border-b border-lamark-black/10 pb-4">Problema</h4>
              <p className="font-body text-lamark-gray text-lg leading-relaxed">
                {project.problema}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 border-b border-lamark-black/10 pb-4">Ideia</h4>
              <p className="font-body text-lamark-gray text-lg leading-relaxed">
                {project.ideia}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 border-b border-lamark-black/10 pb-4">Direção</h4>
              <p className="font-body text-lamark-gray text-lg leading-relaxed">
                {project.direcao}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <h4 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4 border-b border-lamark-black/10 pb-4">Produção</h4>
              <p className="font-body text-lamark-gray text-lg leading-relaxed">
                {project.producao}
              </p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* RESULTADO (GALERIA) */}
      <section className="py-32 px-6 bg-lamark-white">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            title="Resultado" 
            description={project.resultadoDesc}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Reveal>
              <div className="relative aspect-[3/4] w-full">
                <Image src={project.res1} alt={`${project.title} Resultado 1`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[3/4] w-full">
                <Image src={project.res2} alt={`${project.title} Resultado 2`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="relative aspect-[16/9] w-full mb-16">
              <Image src={project.res3} alt={`${project.title} Resultado 3`} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </Reveal>
          <div className="flex justify-center">
             <Button href="/work" variant="outline">VOLTAR PARA PROJETOS</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
