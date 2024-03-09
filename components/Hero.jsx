import { useState, useEffect } from 'react';
import bgImage from '../assets/bg.png';
import phoneBgImage from '../assets/phoneImgbg.png';
import CapiImg from '../assets/capi.png';
import bola1 from '../assets/bola1.png'; 
import bola2 from '../assets/bola2.png'; 
import '../styles/custom.module.css';

export default function SecondHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
<div style={{ backgroundImage: `url(${bgImage})` }} className="relative overflow-hidden z-0" id='hero'>
  <div className="relative z-0">
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="lg:w-1/2">
        {/* Imagem para largas viewports (lg) */}
        <img
          className="hidden lg:block -full object-cover"
          src={CapiImg.src}
          alt="Imagem para largas viewports"
        />
        {/* Imagem para médias viewports (md) */}
        <img
          className="lg:hidden w-full"
          src={phoneBgImage.src}
          alt="Imagem para médias viewports"
        />
      </div>
      <div className="lg:w-1/2 pl-12">
        <div className="mx-auto max-w-7xl z-0">
          <div className="relative z-0 lg:w-full lg:max-w-2xl">
            <img src={bola1.src} alt="Bola 1" className="absolute animate-moveBola1 w- h-256 md:w-256 md:h-256 lg:w-256 lg:h-256" />
            <img src={bola2.src} alt="Bola 2" className="absolute animate-moveBola2 w- h-256 md:w-256 md:h-256 lg:w-256 lg:h-256" />
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-transparent lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>
            <div className={`relative px-6 py-32 sm:py-40 lg:px-8 lg:pr-0 sm:pr-6 ${isMobile ? 'sm:pl-6' : ''}`}>
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-body-4 font-body-4 leading-6 text-gray-500 bg-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Aprenda a enviar email marketing para todos os seus leads.{' '}
                    <a href="#" className="whitespace-nowrap font-semibold text-semantic-tertiary-default">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Participar grátis <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  O profissionalismo que a sua marca merece!
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-900">
                  Com a beabstracto você terá <strong>melhor presença online e offline.</strong> Em poucos passos o seu negócio está pronto para ser lançado, seja nas principais redes sociais, no Google ou até mesmo com o seu próprio website e email profissional.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-semantic-primary-default px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Começar grátis
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-semantic-tertiary-default">
                    Quem somos <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
