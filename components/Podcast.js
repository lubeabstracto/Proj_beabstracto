import React, { useRef, useEffect } from 'react';
import VisualizerComponent from './VisualizerComponent';

export default function Servicos() {
  const horizontalScrollRef = useRef();
  const servicosRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (horizontalScrollRef.current && servicosRef.current) {
        const servicosTop = servicosRef.current.offsetTop;
        const scrollY = window.scrollY;
        const scrollStart = servicosTop - window.innerHeight;

        if (scrollY > scrollStart) {
          // Isso fará com que o scroll horizontal comece somente quando o componente Servicos estiver entrando na viewport.
          const horizontalScroll = (scrollY - scrollStart) * 0.5; // Ajuste o 0.5 conforme necessário
          horizontalScrollRef.current.scrollLeft = horizontalScroll;
        }
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
  <div ref={servicosRef} className="bg-white w-screen overflow-hidden">
    <div ref={horizontalScrollRef} className="flex flex-col lg:flex-row items-center pl-16 lg:pl-44">
        <div className='w-44'>
        <VisualizerComponent/>
        </div>
    </div>
  </div>
  );
}
