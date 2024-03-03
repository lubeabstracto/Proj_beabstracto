import { useEffect, useRef, useState } from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import PaletteImg from '../assets/Palette.svg';
import AlternativasComponent from './Alternativas';

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

import MarketingImg from '../assets/MarketingImg.jpg'
import AudiovisualImg from '../assets/AudiovisualImg.jpg'
import TecnologiaImg from '../assets/TecnologiaImg.jpg'


const Posts = [
  {
    id: 1,
    title: 'Card Title 1',
    href: '#',
    imageUrl: MarketingImg,
  },
  {
    id: 2,
    title: 'Card Title 2',
    href: '#',
    imageUrl: AudiovisualImg,
  },
  {
    id: 3,
    title: 'Card Title 3',
    href: '#',
    imageUrl: TecnologiaImg,
  },
  // More posts...
];


export default function Servicos() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPosts = Posts.length;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalPosts - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPosts);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      // Converte o scroll em um valor de deslocamento para a transformação
      const maxScrollLeft = scrollWidth - clientWidth;
      const scrolled = (scrollLeft / maxScrollLeft) * 100; // Percentual do scroll
      setScrollPosition(scrolled);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden bg-white w-screen">
      <div className="mx-auto max-w-7xl md:px-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:gap-x-4">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4 lg:px-8 sm:py-32">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg py-32">
              <img src={PaletteImg.src} alt="" />
              <h2 className="font-semibold text-subheading-3 text-brand-primary">E o que a gente faz?</h2>
              <div className="h-32 overflow-hidden" ref={carouselRef} style={{ overflowX: 'auto' }}>
                <AlternativasComponent />
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A Beabstracto conta com profissionais especialistas em audiovisual, tecnologia e marketing, oferecendo soluções integradas e inovadoras para atender às necessidades variadas da sua empresa.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9" style={{ transform: `translateX(-${scrollPosition}%)` }}>
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0 py-0">
          <div className="bg-white h-full relative">
    <div>
      <button
        onClick={handlePrevClick}
        className="absolute left-0 z-10 m-4 bg-gray-800 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <div className="whitespace-nowrap transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {Posts.map((post, index) => (
          <div key={post.id} className="inline-block h-full" style={{ width: '100%' }}>
            <article className="relative bg-gray-900 h-full">
              <img
                src={post.imageUrl.src}
                alt=""
                className="object-scale-down h-full"
              />
            </article>
            <div className="mt-4">
              <p className="text-lg font-semibold leading-8 tracking-tight text-brand-primary">
                {features[index].name}
              </p>
              <p className="text-body-4 leading-7 text-font-color-muted-2">
                {features[index].description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        className="absolute right-0 z-10 m-4 bg-gray-800 text-white p-2 rounded-full"
      >
        Next
      </button>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
