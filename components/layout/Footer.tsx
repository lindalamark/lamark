import Link from 'next/link';

export interface FooterProps {
  location?: string;
  instagramHref?: string;
  whatsappHref?: string;
  emailText?: string;
}

export function Footer({
  instagramHref = 'https://www.instagram.com/lamarkstudiooficial/',
  whatsappHref = 'https://wa.me/5531982795894?text=Ol%C3%A1%2C%20LAMARK%21%20Gostaria%20de%20conversar%20sobre%20um%20projeto.',
  emailText = 'lalamarkstudio@gmail.com',
}: FooterProps = {}) {
  const links = [
    { name: 'INÍCIO', href: '/' },
    { name: 'PROJETOS', href: '/work' },
    { name: 'O ESTÚDIO', href: '/estudio' },
    { name: 'COMEÇAR UM PROJETO', href: '/contato' },
  ];

  return (
    <footer className="bg-lamark-black text-lamark-offwhite py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-20">
          <div className="max-w-md">
            <Link href="/" className="font-display font-bold text-3xl tracking-tighter mb-4 block">
              LAMARK STUDIO
            </Link>
            <p className="text-lamark-gray font-body uppercase text-xs tracking-widest leading-relaxed">
              Direção visual + criatividade + IA
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 lg:gap-24">
            <div>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm font-display tracking-widest hover:text-lamark-red transition-colors whitespace-nowrap">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li>
                  <a 
                    href={instagramHref} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-display tracking-widest hover:text-lamark-red transition-colors"
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a 
                    href={whatsappHref} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-display tracking-widest hover:text-lamark-red transition-colors"
                  >
                    WHATSAPP
                  </a>
                </li>
                <li>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-display tracking-widest text-lamark-offwhite">
                      E-MAIL
                    </span>
                    <span className="text-xs text-lamark-gray select-all cursor-text font-body">
                      {emailText}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-lamark-graphite pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-display tracking-widest text-lamark-gray">
          <p>© LAMARK STUDIO {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
