import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ServerIcon } from '@heroicons/react/20/solid';
import { useInView } from 'react-intersection-observer'; // Importando o hook


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
    title: 'SOMOS CRIATIVOS',
    subtitle: 'Fotografia, videomaking, desenho e produção de podcasts, spots de rádio e comerciais para TV.',
    href: '#',
    imageUrl: AudiovisualImg,
    link: 'Mais sobre tecnologia',
  },
  {
    id: 3,
    title: 'SOMOS NERDS',
    subtitle: 'Websites, aplicativos, integrações com CRM e até realidade aumentada.',
    href: '#',
    link: 'Mais sobre audiovisual',
    imageUrl: TecnologiaImg,
  },
];

const PostItem = ({ post }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const style = inView
  ? "opacity-100 translate-y-0"
  : "opacity-0 translate-y-10";

  return (
        <div className="flex-none h-full pr-8 max-w-full" style={{ maxWidth: '420px' }}>
        <article className={`relative h-full transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
            <img src={post.imageUrl.src} alt="" className="w-full h-full object-cover" />
        </article>
        <div className="mt-4">
            <p className="font-brand text-md font-semibold text-gray-900">
                {post.title}
            </p>
            <p className="font-brand text-md font-regular text-gray-600">
                {post.subtitle}
            </p>
            <a href={post.href} className="font-brand text-lg font-semibold leading-6 text-semantic-tertiary-default">
                {post.link} <span aria-hidden="true">→</span>
            </a>
        </div>
        </div>

  );
};

const Servicospt2 = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const totalPosts = Posts.length;

    const nextItem = () => {
      setCurrentIndex((currentIndex + 1) % totalPosts);
    };

    const prevItem = () => {
      setCurrentIndex((currentIndex - 1 + totalPosts) % totalPosts);
    };

    const cardWidth = 420; // Largura de cada card (ajuste conforme necessário)
    const gap = 20; // Espaço entre os cards
    const previewWidth = 100; // A largura do próximo card que você quer mostrar

    // Cálculo para translação do contêiner dos cards
    const offset = -(currentIndex * (cardWidth + gap)) + previewWidth;

    return (
    <div className="conteudo-direita py-8 flex items-center justify-center lg:pl-24">
    <button
        onClick={prevItem}
        aria-label="Previous item"
        className='pr-4 '
    >
        <ChevronLeftIcon className="w-10 h-10 bg-brand-tertiary text-white rounded-full cursor-pointer transition ease-in-out duration-300 transform hover:scale-105 shadow-md" />
    </button>

    <div className="overflow-hidden relative" style={{ width: `calc(${cardWidth}px + ${previewWidth}px)` }}>
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(${offset}px)`, width: `calc(${totalPosts} * (${cardWidth}px + ${gap}px))` }}>
        {Posts.map((post, index) => (
            <div className="flex-none h-full" style={{ width: cardWidth, marginRight: gap }} key={post.id}>
            <PostItem post={post} />
            </div>
        ))}
        </div>
    </div>
    <button
        onClick={nextItem}
        aria-label="Next item"
        className='pr-4'
    >
        <ChevronRightIcon className="w-10 bg-brand-tertiary h-10 text-white rounded-full cursor-pointer transition ease-in-out duration-300 transform hover:scale-105 shadow-md" />
    </button>
    </div>
    );
};

export default Servicospt2;