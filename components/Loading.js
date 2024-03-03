import React, { useState, useEffect } from 'react';
import loadingImg from '../assets/loadingImg.jpg';
import initialLoadingBg1 from '../assets/loadingBg1.png';
import initialLoadingBg2 from '../assets/loadingBg2.png';
import initialLoadingBg3 from '../assets/loadingBg3.png';
import initialLoadingBg4 from '../assets/loadingBg4.png';

import { Helmet } from 'react-helmet';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState('entering');
  const [backgrounds, setBackgrounds] = useState([
    initialLoadingBg1.src,
    initialLoadingBg2.src,
    initialLoadingBg3.src,
    initialLoadingBg4.src,
  ]);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading('loaded');
      setTimeout(() => {
        setIsLoading('exiting');
        setTimeout(() => setIsLoading(null), 500);
      }, 2000);
    }, 0);

    const switchingTimer = setInterval(() => {
      setBackgrounds((prevBackgrounds) => [
        prevBackgrounds[3],
        prevBackgrounds[0],
        prevBackgrounds[1],
        prevBackgrounds[2],
      ]);
    }, 500);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(switchingTimer);
    };
  }, []);

  if (isLoading === null) {
    return null;
  }

  const opacityClass = isLoading === 'entering'
    ? 'opacity-0'
    : isLoading === 'loaded'
    ? 'opacity-100'
    : 'opacity-0';

  return (
    <>
      <Helmet>
        <title>Beabstracto | Sua agência de marketing</title>
        <meta name="description" content="Um novo website, um logo, identidade visual, planejamento de conteúdo, publicidade programática e muito mais. Somos seu parceiro ideal." />
      </Helmet>
      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 z-99999 ${opacityClass}`}
      >
        <img
          src={loadingImg.src}
          alt="Carregando..."
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-wrap justify-center items-center gap-0">
          {backgrounds.map((bg, index) => (
            <div key={index} className="w-24 h-24 sm:w-48 sm:h-48 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg})` }}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
