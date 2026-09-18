import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { ProductComparison } from '@/components/ui/ProductComparison';

export default function Home() {
  return (
    <main className="min-h-screen bg-lamark-offwhite flex flex-col">
      <Header />

      {/* 08 — HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 md:px-8 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
          {/* BLOCO TIPOGRÁFICO PRINCIPAL EDITORIAL: LAMARK / STUDIO */}
          <Reveal className="w-full flex justify-center">
            <h1 className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center font-display font-extrabold uppercase select-none tracking-tight leading-[0.84]">
              <span className="block text-[14vw] sm:text-[13vw] md:text-[11vw] lg:text-[10.5rem] xl:text-[12rem] text-lamark-black">
                LAMARK
              </span>
              <span className="block text-[13.5vw] sm:text-[12.5vw] md:text-[10.5vw] lg:text-[10rem] xl:text-[11.5rem] text-lamark-black -mt-1 sm:-mt-2 md:-mt-4 lg:-mt-6">
                STUDIO
              </span>
            </h1>
          </Reveal>

          {/* TEXTO DE APOIO & BOTÕES */}
          <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col items-center max-w-2xl mx-auto">
            <Reveal delay={0.2}>
              <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-lamark-gray leading-relaxed text-balance">
                Design, direção criativa e inteligência artificial para transformar necessidades visuais em imagens, campanhas e novas possibilidades.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center items-center">
              <Button href="/contato" withArrow>COMEÇAR UM PROJETO</Button>
              <Button href="#projetos" variant="ghost">VER PROJETOS ↓</Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 — MICRO-MENSAGEM */}
      <section className="py-24 px-6 bg-lamark-black text-lamark-offwhite">
        <div className="container mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              Você traz a ideia.<br />
              <span className="text-lamark-gray">A Lamark cria o mundo visual.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* 10 — O PROBLEMA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            title={
              <>Produzir uma boa imagem<br /><span className="text-lamark-gray">nem sempre é simples.</span></>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="right">
              <ul className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter text-lamark-black/20 flex flex-col gap-2">
                <li className="hover:text-lamark-black transition-colors duration-300">Modelo</li>
                <li className="hover:text-lamark-black transition-colors duration-300">Fotógrafo</li>
                <li className="hover:text-lamark-black transition-colors duration-300">Estúdio</li>
                <li className="hover:text-lamark-black transition-colors duration-300">Local</li>
                <li className="hover:text-lamark-black transition-colors duration-300">Iluminação</li>
                <li className="hover:text-lamark-black transition-colors duration-300">Produção</li>
                <li className="hover:text-lamark-black transition-colors duration-300">Pós-produção</li>
              </ul>
            </Reveal>
            <div className="flex flex-col gap-12">
              <Reveal>
                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9]">
                  E se você pudesse começar pelo que já tem?
                </h3>
              </Reveal>
              <Reveal delay={0.2}>
                <ProductComparison
                  beforeImage="/imagens/hamburger/hamburger-antes.jpg"
                  afterImage="/imagens/hamburger/hamburger-depois.jpg"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — A SOLUÇÃO */}
      <section className="py-32 px-6 bg-lamark-white">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            title={<>Da necessidade<br /><span className="text-lamark-gray">à imagem.</span></>}
            description="A LAMARK transforma produtos, ideias e necessidades em soluções visuais pensadas para cada projeto."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24 mb-16">
            {[
              { title: 'MODELOS', desc: 'Modelos virtuais criados para campanhas e conteúdos.', image: '/imagens/variados/1modelos.jpg' },
              { title: 'PRODUTOS', desc: 'Imagens comerciais, editoriais e lifestyle para produtos.', image: '/imagens/variados/2produtos.jpg' },
              { title: 'CAMPANHAS', desc: 'Conceito, direção e produção visual.', image: '/imagens/variados/3campanhas.jpg' },
              { title: 'CONTEÚDO', desc: 'Imagens pensadas para redes sociais, e-commerce, anúncios e comunicação.', image: '/imagens/variados/4conteudo.jpg' }
            ].map((sol, i) => (
              <Reveal key={sol.title} delay={i * 0.1}>
                <div className="flex flex-col gap-6 group">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-bold uppercase tracking-tighter mb-2">{sol.title}</h4>
                    <p className="font-body text-lamark-gray">{sol.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Button href="/estudio" withArrow>SABER MAIS SOBRE O ESTÚDIO</Button>
          </Reveal>
        </div>
      </section>

      {/* 12, 13 & 14 — MODELOS */}
      <section className="py-32 px-6 bg-lamark-black text-lamark-offwhite">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-24">
            <SectionHeader 
              subtitle="Modelos"
              title={<>Um casting criado<br />para diferentes<br /><span className="text-lamark-gray">possibilidades.</span></>}
              description="A LAMARK desenvolve modelos visuais com diferentes aparências, estilos e características para representar campanhas, produtos e marcas."
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {[
              { id: '01', tags: 'Feminino · Editorial', image: '/imagens/modelos/modelo-01.jpg' },
              { id: '02', tags: 'Feminino · Fashion', image: '/imagens/modelos/modelo-02.jpg' },
              { id: '03', tags: 'Feminino · Plus Size', image: '/imagens/modelos/modelo-03.jpg' },
              { id: '04', tags: 'Masculino · Lifestyle', image: '/imagens/modelos/modelo-04.jpg' },
              { id: '05', tags: 'Feminino · Beauty', image: '/imagens/modelos/modelo-05.jpg' },
              { id: '06', tags: 'Masculino · Plus Size', image: '/imagens/modelos/modelo-06.jpg' },
              { id: '07', tags: 'Editorial · Personalizado', image: '/imagens/modelos/modelo-07.jpg' },
            ].map((model, i) => (
              <Reveal key={model.id} delay={i * 0.1}>
                <div className="relative aspect-[3/4] group cursor-pointer overflow-hidden">
                  <Image
                    src={model.image}
                    alt={`Modelo ${model.id}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="font-display font-bold text-2xl">MODELO {model.id}</span>
                    <span className="font-body text-sm text-lamark-offwhite/80">{model.tags}</span>
                  </div>
                </div>
              </Reveal>
            ))}
            
            {/* Modelo Personalizável Card */}
            <Reveal delay={0.7}>
              <div className="relative aspect-[3/4] bg-lamark-red p-8 flex flex-col justify-between group cursor-pointer">
                <div>
                  <h4 className="font-display text-4xl font-bold uppercase tracking-tighter leading-[0.9] mb-4 text-white">
                    Precisa de algo específico?
                  </h4>
                  <p className="font-body text-sm text-white/90 leading-relaxed">
                    Se a sua campanha precisa de uma aparência específica, podemos desenvolver um modelo visual personalizado de acordo com a direção da marca e da campanha.
                  </p>
                </div>
                <div className="font-display text-xs tracking-widest uppercase text-white font-bold group-hover:translate-x-2 transition-transform">
                  SOLICITAR MODELO PERSONALIZADO →
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 15 — UMA PEÇA. VÁRIAS POSSIBILIDADES. */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            title={<>Uma peça.<br /><span className="text-lamark-gray">Várias possibilidades.</span></>}
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              { image: '/imagens/variados/peçaprincipal.jpg', alt: 'Peça principal' },
              { image: '/imagens/variados/Instagrampost.jpg', alt: 'Post para Instagram' },
              { image: '/imagens/variados/fotostory.jpg', alt: 'Story' },
              { image: '/imagens/variados/bannersite.jpg', alt: 'Banner de site' },
              { image: '/imagens/variados/anúncio.jpg', alt: 'Anúncio de performance' },
              { image: '/imagens/variados/marketplace.jpg', alt: 'Marketplace / e-commerce' }
            ].map((item, index) => (
              <Reveal key={item.alt} delay={(index + 1) * 0.1}>
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 16 — ANTES E DEPOIS */}
      <section className="py-32 px-0 bg-lamark-white">
        <div className="container mx-auto max-w-7xl px-6 mb-16">
          <SectionHeader 
            title={<>Do produto<br /><span className="text-lamark-gray">à campanha.</span></>}
          />
        </div>
        <BeforeAfter 
          beforeImage="/imagens/variados/antesmodelo.png"
          afterImage="/imagens/variados/resultadomodelo.png"
        />
      </section>

      {/* 17, 18 & 19 — PORTFÓLIO */}
      <section id="projetos" className="py-32 px-6 bg-lamark-black text-lamark-offwhite">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <SectionHeader 
              title="Projetos Selecionados"
              className="mb-0"
            />
            <Reveal>
              <Button href="/work" variant="outline" className="border-lamark-offwhite text-lamark-offwhite hover:bg-lamark-offwhite hover:text-lamark-black">
                VER TODOS OS PROJETOS
              </Button>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
            {[
              { title: 'AURA VISUALS', tag: 'PROJETO CONCEITUAL', cat: 'MODA', seed: 'proj1' },
              { title: 'LUMINA', tag: 'CAMPANHA CONCEITUAL', cat: 'BELEZA', seed: 'proj2' },
              { title: 'URBAN ROOTS', tag: 'EXPERIMENTO VISUAL', cat: 'CULTURA & MÚSICA', seed: 'proj3' },
              { title: 'NECTAR', tag: 'CAMPANHA CONCEITUAL', cat: 'BEBIDAS', seed: 'proj4' },
            ].map((proj, i) => (
              <Reveal key={proj.title} delay={i * 0.1}>
                <Link href={`/work/${proj.title.toLowerCase().replace(' ', '-')}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-6">
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
                    <div className="absolute top-6 left-6 bg-lamark-offwhite text-lamark-black px-3 py-1 text-[10px] font-display font-bold tracking-widest uppercase">
                      {proj.tag}
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-display text-3xl font-bold uppercase tracking-tighter group-hover:text-lamark-red transition-colors">
                      {proj.title}
                    </h3>
                    <span className="font-body text-xs text-lamark-gray tracking-widest">{proj.cat}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 21 — PARA QUEM */}
      <section className="py-32 px-6 bg-lamark-white">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            title={<>Feito para quem<br /><span className="text-lamark-gray">precisa mostrar mais.</span></>}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {['MODA', 'BELEZA', 'PRODUTOS', 'E-COMMERCE', 'GASTRONOMIA', 'CRIADORES', 'MARCAS PESSOAIS', 'CAMPANHAS'].map((category, i) => (
              <Reveal key={category} delay={i * 0.05}>
                <div className="border border-lamark-black/10 py-12 px-6 flex items-center justify-center text-center group hover:bg-lamark-black hover:text-lamark-offwhite transition-colors duration-300">
                  <h4 className="font-display text-xl font-bold uppercase tracking-tighter">{category}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 22 — PROCESSO */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            title="Como Funciona"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
            {[
              { num: '01', title: 'VOCÊ CONTA', desc: 'A necessidade, o problema ou a ideia.' },
              { num: '02', title: 'A GENTE DIRECIONA', desc: 'Definimos o caminho visual mais adequado.' },
              { num: '03', title: 'A GENTE PRODUZ', desc: 'Design, imagem, IA, edição e outras ferramentas entram conforme o projeto exige.' },
              { num: '04', title: 'VOCÊ RECEBE', desc: 'Uma solução visual pensada para comunicar, apresentar e posicionar sua marca.' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1} className="flex flex-col gap-6">
                <div className="font-display text-6xl lg:text-8xl font-bold text-lamark-black/10 tracking-tighter">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold uppercase tracking-tight mb-2">{step.title}</h4>
                  <p className="font-body text-lamark-gray text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 23 — COMECE COM O QUE VOCÊ TEM */}
      <section className="py-32 px-6 bg-lamark-black text-lamark-offwhite">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            title={<>Você não precisa<br /><span className="text-lamark-gray">começar do zero.</span></>}
            description="A partir do que você já tem, construímos novas possibilidades visuais."
          />
          <Reveal>
            <div className="flex flex-wrap gap-4 mt-8">
              {['Fotos de produtos', 'Roupas', 'Referências', 'Identidade visual', 'Briefing', 'Imagens existentes', 'Ideias'].map((item) => (
                <div key={item} className="bg-lamark-graphite px-6 py-4 rounded-full font-display text-sm tracking-widest uppercase">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 24 — O OLHAR POR TRÁS */}
      <section className="py-32 px-6 bg-lamark-white">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <Image
                src="/imagens/variados/1lindalamark.png"
                alt="Linda Lamark"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <div className="flex flex-col gap-8">
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
                Linda<br />Lamark
              </h2>
              <p className="font-display text-sm tracking-widest text-lamark-gray mt-4">DIREÇÃO CRIATIVA · LAMARK STUDIO</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-xl md:text-2xl max-w-lg leading-relaxed text-lamark-black">
                &ldquo;A inteligência artificial amplia as possibilidades. A direção criativa decide o que fazer com elas.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3 mt-4">
                {['Design', 'Direção Visual', 'Criatividade', 'Experimentação', 'Cultura Visual', 'Tecnologia'].map(tag => (
                  <span key={tag} className="border border-lamark-black/20 px-4 py-2 text-xs font-display tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 25 — POR QUE LAMARK */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <SectionHeader 
            title="Por que Lamark"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { title: 'DIREÇÃO, NÃO APENAS GERAÇÃO', desc: 'Não entregamos imagens aleatórias. Existe uma direção por trás.' },
              { title: 'MAIS POSSIBILIDADES', desc: 'Modelos, cenários e caminhos visuais diferentes.' },
              { title: 'VISUAL CONSISTENTE', desc: 'Tudo pensado para fazer parte da mesma linguagem.' },
              { title: 'TECNOLOGIA COM OLHAR HUMANO', desc: 'IA como ferramenta. Criatividade como direção.' },
            ].map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.1} className="border-t border-lamark-black/20 pt-8">
                <h4 className="font-display text-2xl font-bold uppercase tracking-tighter mb-4">{reason.title}</h4>
                <p className="font-body text-lamark-gray text-lg leading-relaxed">{reason.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 26 — FAQ */}
      <section className="py-32 px-6 bg-lamark-white">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader 
            title="FAQ"
            align="center"
          />
          <div className="flex flex-col gap-6">
            {[
              { q: 'Vocês criam modelos personalizados?', a: 'Sim, desenvolvemos modelos de acordo com as necessidades estéticas da sua campanha.' },
              { q: 'Posso usar meus próprios produtos ou roupas?', a: 'Sim. Você envia fotos das peças e nós geramos as campanhas e modelos vestindo-as.' },
              { q: 'Preciso fazer uma sessão de fotos?', a: 'Não. Nossa produção é baseada em referências que você já possui ou fotos simples dos produtos.' },
              { q: 'Vocês fazem imagens para e-commerce?', a: 'Sim. Criamos tanto visual editorial quanto focado em conversão e catálogo de produtos.' },
              { q: 'A LAMARK cria campanhas completas?', a: 'Sim. Da concepção da ideia até as peças finais geradas com IA e design.' },
              { q: 'Posso escolher o perfil do modelo?', a: 'Sim. Temos um casting diversificado e também criamos novos se necessário.' },
              { q: 'Como funciona o orçamento?', a: 'Por projeto. Analisamos a demanda e a complexidade visual para desenhar a proposta.' },
              { q: 'Como começo um projeto?', a: 'Preencha o formulário de contato com sua ideia ou briefing e nós desenhamos a solução.' },
            ].map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05} className="group">
                <details className="cursor-pointer border-b border-lamark-black/10 pb-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="font-display text-xl md:text-2xl font-bold uppercase tracking-tighter flex justify-between items-center group-hover:text-lamark-red transition-colors">
                    {faq.q}
                    <span className="text-3xl font-light ml-4 opacity-50 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="font-body text-lamark-gray text-lg leading-relaxed mt-4 pt-2">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 27 & 28 — CTA FINAL / CONTATO */}
      <section className="py-32 px-6 bg-lamark-red text-lamark-offwhite">
        <div className="container mx-auto max-w-5xl text-center flex flex-col items-center gap-12">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9]">
              Tem um problema visual?<br />
              Vamos criar a solução.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
              Conte o que você precisa. A partir disso, pensamos no melhor caminho visual para o projeto.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-col sm:flex-row gap-4">
            <Button href="/contato" variant="outline" className="bg-lamark-offwhite text-lamark-red hover:bg-lamark-black hover:text-lamark-offwhite border-none py-5 px-10 text-base">
              FALE CONOSCO →
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
