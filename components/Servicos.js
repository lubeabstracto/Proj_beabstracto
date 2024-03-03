import { useEffect, useRef, useState } from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import PaletteImg from '../assets/Palette.svg';
import AlternativasComponent from './Alternativas';
import About from './About';

const features = [
  {
    name: 'Identidade visual:',
    description: 'Fazemos seu branding completo: logo, cores, imagens e tudo mais!',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Redes sociais:',
    description: 'Conteúdo para suas redes, a beabstracto te ajuda a planejar e te fornece os roteiros, imagens e vídeos.',
    icon: LockClosedIcon,
  },
  {
    name: 'Web:',
    description: 'Desde estar no Google com sua localização no Maps e website, até um email profissional.',
    icon: ServerIcon,
  },
];

import MarketingImg from '../assets/MarketingImg.jpg';
import AudiovisualImg from '../assets/AudiovisualImg.jpg';
import TecnologiaImg from '../assets/TecnologiaImg.jpg';

const Posts = [
  {
    id: 1,
    title: 'SOMOS MARKETEIROS',
    subtitle: 'Planejamento de conteúdo, desenho gráfico, Google Ads, Facebook Ads e muito mais.',
    href: '#',
    link: 'Mais sobre marketing',
    imageUrl: MarketingImg,
  },
  {
    id: 2,
    title: 'SOMOS NERDS',
    subtitle: 'Websites, aplicativos, integrações com CRM e até realidade aumentada.',
    href: '#',
    imageUrl: AudiovisualImg,
    link: 'Mais sobre tecnologia',
  },
  {
    id: 3,
    title: 'SOMOS CRIATIVOS',
    subtitle: 'Fotografia, videomaking, desenho e produção de podcasts, spots de rádio e comerciais para TV.',
    href: '#',
    link: 'Mais sobre audiovisual',
    imageUrl: TecnologiaImg,
  },
  // More posts...
];

export default function Servicos() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef();
  const moveStep = 436; // Ajuste conforme a largura total de um card + o espaço entre eles
  const pauseTime = 3000; // Tempo de pausa em milissegundos

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const moveCarousel = () => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      // Move o carrossel passo a passo
      if (carousel.scrollLeft < maxScrollLeft) {
        carousel.scrollBy({ left: moveStep, behavior: 'smooth' });
      } else {
        // Quando chegar ao fim, espera por um tempo e depois volta ao início
        setTimeout(() => {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        }, pauseTime);
      }
    };

    // Intervalo de movimento incluindo a pausa
    const interval = setInterval(moveCarousel, pauseTime + 1000); // Considera o tempo de animação suave

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white w-screen overflow-hidden">
<div className="flex flex-col md:flex-row Wrapper pl-16 md:pl-44">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg py-32 conteudo-esquerda">
        <img src={PaletteImg.src} alt="" />
        <h2 className="font-semibold text-subheading-3 text-brand-primary">E o que a gente faz?</h2>
        <div className="overflow-hidden" ref={carouselRef} style={{ overflowX: 'auto' }}>
            <AlternativasComponent />
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
            A Beabstracto conta com profissionais especialistas em audiovisual, tecnologia e marketing, oferecendo soluções integradas e inovadoras para atender às necessidades variadas da sua empresa.
        </p>
        </div>

        <div className="conteudo-direita py-8 overflow-x-auto pl-44" ref={carouselRef}>
          <div className="flex space-x-4">
        {Posts.map((post) => (
              <div key={post.id} className="flex-none h-full pr-8" style={{ width: '420px' }}>
              <article className="relative h-full"> {/* Definindo altura total para o card */}
                <img src={post.imageUrl.src} alt="" className="w-full h-full object-cover" /> {/* Utilizando object-cover para preencher o espaço do card */}
                </article>
                <div className="mt-4">
                <p className="text-md font-semibold text-gray-900">
                    {post.title}
                </p>
                <p className="text-md font-regular text-gray-900">
                    {post.subtitle}
                </p>
                <a href="#" className="text-sm font-semibold leading-6 text-semantic-tertiary-default">
                    {post.link} <span aria-hidden="true">→</span>
                  </a>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    </div>
  );
}