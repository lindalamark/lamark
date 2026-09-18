'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [necessidade, setNecessidade] = useState('');
  const [sobre, setSobre] = useState('');
  const [prazo, setPrazo] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `LAMARK STUDIO - NOVO PROJETO

Nome: ${nome.trim()}

Marca / empresa: ${marca.trim()}

E-mail: ${email.trim()}

Instagram ou site: ${instagram.trim()}

Necessidade:
${necessidade.trim()}

Projeto:
${sobre.trim()}

Prazo:
${prazo.trim()}

Oi, LAMARK! Preenchi o briefing pelo site e gostaria de conversar sobre meu projeto.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5531982795894?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen bg-lamark-offwhite flex flex-col pt-32">
      <Header />
      
      <section className="flex-1 py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader 
            title="Vamos criar algo?"
            description="Preencha o formulário como um briefing criativo. Queremos entender sua necessidade."
            className="mb-12"
          />

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-12 font-body">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2 border-b border-lamark-black/20 focus-within:border-lamark-red transition-colors pb-2">
                  <label htmlFor="nome" className="text-xs font-display tracking-widest uppercase text-lamark-gray">Nome</label>
                  <input 
                    type="text" 
                    id="nome" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="bg-transparent border-none outline-none text-xl w-full text-lamark-black placeholder:text-lamark-black/20" 
                    placeholder="Seu nome" 
                  />
                </div>
                <div className="flex flex-col gap-2 border-b border-lamark-black/20 focus-within:border-lamark-red transition-colors pb-2">
                  <label htmlFor="marca" className="text-xs font-display tracking-widest uppercase text-lamark-gray">Marca / empresa</label>
                  <input 
                    type="text" 
                    id="marca" 
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    className="bg-transparent border-none outline-none text-xl w-full text-lamark-black placeholder:text-lamark-black/20" 
                    placeholder="Sua marca" 
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2 border-b border-lamark-black/20 focus-within:border-lamark-red transition-colors pb-2">
                  <label htmlFor="email" className="text-xs font-display tracking-widest uppercase text-lamark-gray">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-none outline-none text-xl w-full text-lamark-black placeholder:text-lamark-black/20" 
                    placeholder="seu@email.com" 
                  />
                </div>
                <div className="flex flex-col gap-2 border-b border-lamark-black/20 focus-within:border-lamark-red transition-colors pb-2">
                  <label htmlFor="instagram" className="text-xs font-display tracking-widest uppercase text-lamark-gray">Instagram ou site</label>
                  <input 
                    type="text" 
                    id="instagram" 
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    className="bg-transparent border-none outline-none text-xl w-full text-lamark-black placeholder:text-lamark-black/20" 
                    placeholder="@suamarca ou .com.br" 
                  />
                </div>
              </div>

              {/* Need */}
              <div className="flex flex-col gap-2 border-b border-lamark-black/20 focus-within:border-lamark-red transition-colors pb-2">
                <label htmlFor="necessidade" className="text-xs font-display tracking-widest uppercase text-lamark-gray">O que você precisa?</label>
                <input 
                  type="text" 
                  id="necessidade" 
                  value={necessidade}
                  onChange={(e) => setNecessidade(e.target.value)}
                  className="bg-transparent border-none outline-none text-xl w-full text-lamark-black placeholder:text-lamark-black/20" 
                  placeholder="Ex: Campanha de moda, Imagens de produto, Modelos..." 
                />
              </div>

              {/* Project Brief */}
              <div className="flex flex-col gap-2 border-b border-lamark-black/20 focus-within:border-lamark-red transition-colors pb-2">
                <label htmlFor="sobre" className="text-xs font-display tracking-widest uppercase text-lamark-gray">Conte um pouco sobre o projeto</label>
                <textarea 
                  id="sobre" 
                  rows={4} 
                  value={sobre}
                  onChange={(e) => setSobre(e.target.value)}
                  className="bg-transparent border-none outline-none text-xl w-full text-lamark-black placeholder:text-lamark-black/20 resize-none" 
                  placeholder="Qual é o problema visual que precisamos resolver?"
                ></textarea>
              </div>

              {/* Prazo */}
              <div className="flex flex-col gap-2 border-b border-lamark-black/20 focus-within:border-lamark-red transition-colors pb-2">
                <label htmlFor="prazo" className="text-xs font-display tracking-widest uppercase text-lamark-gray">Prazo</label>
                <input 
                  type="text" 
                  id="prazo" 
                  value={prazo}
                  onChange={(e) => setPrazo(e.target.value)}
                  className="bg-transparent border-none outline-none text-xl w-full text-lamark-black placeholder:text-lamark-black/20" 
                  placeholder="Quando você precisa?" 
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Button type="submit" className="text-lg py-5 px-10">
                  ENVIAR PROJETO NO WHATSAPP →
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer 
        location="Minas Gerais, Brasil"
        instagramHref="https://www.instagram.com/lamarkstudiooficial/"
        whatsappHref="https://wa.me/5531982795894?text=Olá%2C%20LAMARK%21%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
        emailText="lalamarkstudio@gmail.com"
      />
    </main>
  );
}
