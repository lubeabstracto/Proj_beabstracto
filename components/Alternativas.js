import React, { useState, useEffect } from 'react';
import Star from '../assets/Star.svg'; 
import Bolt from '../assets/Bolt.svg'; 
import Smile from '../assets/smile.svg'; 
import Rocket from '../assets/Rocket.svg'; 
import Underline from '../assets/Underline.svg'; 
import '../styles/custom.module.css'


const alternativas = [
    {
        id: 1,
        content: 'profissionalizar seu negócio',
        color: '#672F93',
        element: Star,
        amount: 13,
        neon: false,
        animation: "float",
    },
    {
        id: 2,
        content: 'transmitir mais confiança',
        color: '#B63637',
        element: Smile,
        amount: 8,
        neon: false,
        animation: "float",
    },
    {
        id: 3,
        content: 'melhorar a imagem da sua empresa',
        color: '#FFBE28',
        element: Bolt,
        amount: 11,
        neon: false,
        animation: "float",
    },
    {
        id: 4,
        content: 'alcançar mais clientes      ',
        color: '#0078CC',
        element: Rocket,
        amount: 10,
        neon: false,
        animation: "float",
    },
    {
        id: 5,
        content: 'abrir um novo negócio',
        color: '#672F93',
        amount: 10,
        element: Star,
        neon: false,
        animation: "float",
    },
    {
        id: 6,
        content: 'transmitir imagem profissional',
        color: '#B63637',
        amount: 12,
        element: Smile,
        neon: false,
        animation: "float",
    },
]

const renderElements = (Element, amount, animation) => {
    let animationClass = '';
    switch(animation) {
        case 'float':
            animationClass = 'float-animation';
            break;
        case 'underline':
            animationClass = 'reveal-animation';
            break;
        // Adicione mais casos conforme necessário.
    }

    return (
        <div className="flex justify-left mt-2">
            {Array.from({ length: amount }).map((_, i) => (
                animation === 'underline' ? (
                    <div key={i} className={`mx-48 ${animationClass}`} style={{width: 'fit-content'}}>
                        <img src={Element.src} alt="Element" />
                    </div>
                ) : (
                    <img key={i} src={Element.src} alt="Element" className={`mx-2 ${animationClass}`} />
                )
            ))}
        </div>
    );
};




const AlternativasComponent = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrent((current) => (current + 1) % alternativas.length);
        }, 2000); // Changes the alternative every 2 seconds

        return () => clearInterval(intervalId);
    }, []);

    const renderItem = (item) => {
        return (
          <>
            <div className="fixed-height-container">
              <p className={`text-3xl font-semibold tracking-tight sm:text-4xl ${item.neon ? 'neon-animation' : ''}`} style={{ color: item.color }}>
                {item.content}
              </p>
            </div>
            {/* Render elements with their animations and amounts only if neon is false to keep the text separate from the animated elements */}
            {!item.neon && renderElements(item.element, item.amount, item.animation)}
          </>
        );
      };
    
      return (
        <div className="flex flex-col items-left justify-start">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tudo que você precisa para
          </p>
          <div className="relative text-left h-32" style={{ width: 'fit-content' }}>
            {renderItem(alternativas[current])}
          </div>
        </div>
      );
    };
    
    export default AlternativasComponent;