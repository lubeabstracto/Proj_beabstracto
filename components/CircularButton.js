import React, { useState } from 'react';
import verVideoSVG from '../assets/verVideo.svg'; 
import { PlayIcon } from '@heroicons/react/20/solid';

const CircularButton = ({ onButtonClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onButtonClick}
        className={`circularbutton bg-brand-tertiary rounded-full border-none cursor-pointer focus:outline-none w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 flex justify-center items-center position-relative ${isHovered ? 'hovered' : ''}`}
      >
        <img src={verVideoSVG.src} alt="Ver Vídeo" className={`w-full h-full absolute circular-button-img ${isHovered ? 'paused' : ''}`} />
        <PlayIcon className="playicon w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-white" />
      </button>
    </div>
  );
};

export default CircularButton;
