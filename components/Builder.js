import SmileImg from '../assets/smile.png';
import { useState } from 'react';
import Stepper from './Stepper';
import Toggle from './Toggle';
import builderBg from '../assets/builderBg.jpg'
import visualOne from '../assets/visualOne.png'
import brandingImg from '../assets/brandingImg.png'
import redesImg from '../assets/redesImg.png'
import webImg from '../assets/webImg.png'
import conversaoImg from '../assets/conversaoImg.png'
import simpleLogoWhite from '../assets/simpleLogoWhite.svg'
import verticalBarcode from '../assets/verticalBarcode.svg'
import smileSvg from '../assets/smileYellow.svg'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';


const stepImages = {
    branding: brandingImg,
    socialMedia: redesImg,
    web: webImg,
    conversion: conversaoImg,
  };
  

  const smileSize = 40; // Assumindo que o tamanho do smile SVG seja 30px
  const maxPerRow = 5; // Máximo número de SVGs por linha
  const verticalSpacing = 10; // Espaço vertical entre SVGs
  
  const randomPositionStyle = (index) => {
    // Distribui os ícones em colunas e linhas
    const row = Math.floor(index / maxPerRow);
    const col = index % maxPerRow;
    // Adiciona um deslocamento aleatório em cada linha para o efeito xadrez
    const offsetX = (Math.random() - 0.5) * (100 / maxPerRow - smileSize);
    const offsetY = (Math.random() - 0.5) * verticalSpacing;
    
    return {
      top: `calc(${row * verticalSpacing}vh + ${offsetY}px)`,
      left: `calc(${col * (100 / maxPerRow)}% + ${offsetX}px)`,
      transform: 'translate(-50%, -50%)', // Centraliza o SVG em sua posição "top" e "left"
    };
  };
  
  const renderSmiles = (amount) => {
    return Array.from({ length: amount }).map((_, index) => (
      <img
        key={index}
        src={smileSvg.src}
        alt="Smile"
        style={randomPositionStyle()}
      />
    ));
  };

export default function Builder() {
    // Estado para controlar o passo atual do stepper
  const [currentStep, setCurrentStep] = useState(0);
  
  // Estado para controlar os toggles para cada passo
  const [toggles, setToggles] = useState({
    branding: {
      logo: false,
      colorPalette: false,
      typography: false,
      shirts: false,
    },
    socialMedia: {
      bio: false,
      chatbot: false,
      thumbnails: false,
      postTemplates: false,
      storyTemplates: false,
    },
    web: {
      linkPage: false,
      website: false,
    },
    conversion: {
      crm: false,
      googleMaps: false,
      calendars: false,
    },
  });

   // Função para lidar com a mudança dos toggles
   const handleToggleChange = (step, option) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [step]: {
        ...prevToggles[step],
        [option]: !prevToggles[step][option],
      },
    }));
  };

    // Os passos do stepper com títulos e subtítulos
    const steps = [
        { title: 'Branding', subtitle: 'Logo, cores, tipografia e camisetas', options: ['Logo', 'Paleta de cores', 'Tipografia', 'Design de camisetas'] },
        { title: 'Redes sociais', subtitle: 'Instagram, Facebook ou LinkedIn', options: ['Bio profissional', 'Chatbot', 'Destacados', 'Templates para posts', 'Templates para stories'] },
        { title: 'Web', subtitle: 'Pagina de links, website', options: ['Página de links', 'Website'] },
        { title: 'Conversão', subtitle: 'Google Maps, CRM, calendários', options: ['Integração CRM', 'Estar no Google Maps', 'Calendário automático'] },
      ];
    
      // Para facilitar a renderização dos títulos e toggles
      const currentOptions = steps[currentStep].options;
      const currentToggles = toggles[Object.keys(toggles)[currentStep]];

      const getCurrentStepImage = (step) => {
        switch (step) {
          case 'Branding':
            return brandingImg.src;
          case 'Redes sociais':
            return redesImg.src;
          case 'Web':
            return webImg.src;
          case 'Conversão':
            return conversaoImg.src;
          default:
            return ''; // ou alguma imagem padrão
        }
      };

  return (
    <div className="relative isolate bg-white">
    <img src={visualOne.src} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-56 lg:h-96 z-50"/>
    <div className="mx-auto grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="relative px-0 pb-20 pt-24 sm:pt-32 lg:static lg:px-0 lg:py-48">
          <div className="pl-24 pr-8">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-white lg:w-1/2">
            </div>
            <img src={SmileImg.src} alt="" className='w-8 h-8' />
            <h2 className="font-brand font-semibold text-subheading-3 text-brand-primary">Quer testar sem compromisso?</h2>
            <div className="overflow-hidden" style={{ overflowX: 'auto' }}>
            <div className="flex flex-col items-left justify-start">
                <p className="font-brand mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Simule seu pacote de publicidade
                </p>
                <div className="font-brand relative text-left text-xl text-gray-600 my-4" style={{ width: 'fit-content' }}>
                Temos tudo o que você precisa para sua marcar decolar.
                </div>
            </div>
            </div>
            <p className='font-brand text-lg font-bold'>
            Selecione suas necessidades:
            </p>

            <div className='flex flex-column py-8'>
            <div className="pr-16 w-96 ">
                {currentOptions.map((option, index) => (
                <Toggle
                    key={index}
                    checked={currentToggles[option]}
                    onChange={() => handleToggleChange(Object.keys(toggles)[currentStep], option)}
                    label={option}
                    // Você pode adicionar descrições para cada toggle se necessário
                />
                ))}
            </div>
            <Stepper steps={steps.map(step => ({ name: step.title, description: step.subtitle }))} currentStep={currentStep} />

            </div>
            <div className="relative pt-0.5">
            <div className="absolute top-0 left-0 w-full border-t border-gray-300" style={{ borderTopWidth: '0.2px' }}></div>

            <div className="flex justify-between items-center pt-4">
                <button
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                className="flex items-center text-brand-tertiary hover:text-brand-tertiary-darker font-medium"
                >
                <ChevronLeftIcon className="w-5 h-5 mr-1" />
                Anterior
                </button>

                <button
                onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
                className="flex items-center text-brand-tertiary hover:text-brand-tertiary-darker font-medium"
                >
                Próximo
                <ChevronRightIcon className="w-5 h-5 ml-1" />
                </button>
            </div>
            </div>

          </div>
        </div>
        <div className="relative flex px-6 sm:pb-32 lg:px-8 lg:py-24">
            {/* Colunas de fundo com cores sólidas */}
            <div className="absolute inset-0 flex">
            <div className="w-1/3 bg-brand-primary"></div>
            <div className="w-1/3 bg-brand-secondary"></div>
            {/* Last column with SVG background */}
            <div className="w-1/3 bg-brand-tertiary relative overflow-hidden">
                {Array.from({ length: 111 }).map((_, index) => (
                <img
                    key={index}
                    src={smileSvg.src}
                    alt="Smile"
                    className="absolute opacity-55"
                    style={randomPositionStyle(index)}
                />
                ))}
            </div>
            </div>

            {/* Imagem do barcode no canto inferior esquerdo */}
            <img src={verticalBarcode.src} alt="Barcode" className="absolute bottom-0 left-0 mb-0 ml-0" />

            {/* Conteúdo central, como o logo e a imagem dinâmica */}
            <div className="z-10 flex justify-center items-center w-full">
            {/* Logo at the top-left corner */}
            <img src={simpleLogoWhite.src} alt="Logo" className="absolute top-0 left-0 mt-4 ml-4" /> 
            {/* Centered image */}
            <img src={getCurrentStepImage(steps[currentStep].title)} alt={steps[currentStep].title} className="h-3/4 object-scale-down" />
            </div>
        </div>
    </div>
    </div>
  )
}
