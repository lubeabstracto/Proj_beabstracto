import SmileImg from '../assets/Smile.png';
import { useState } from 'react';
import Stepper from './Stepper';
import Toggle from './Toggle';
import builderBg from '../assets/builderBg.jpg'
import visualOne from '../assets/visualOne.png'

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

  return (
    <div className="relative isolate bg-white min-h-screen">
    <div className="mx-auto grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="relative px-0 pb-20 pt-24 sm:pt-32 lg:static lg:px-0 lg:py-48">
          <div className="pl-24 pr-8">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-white lg:w-1/2">
            </div>
            <img src={SmileImg.src} alt="" className='w-8 h-8' />
            <h2 className="text-brand font-semibold text-subheading-3 text-brand-primary">Quer testar sem compromisso?</h2>
            <div className="overflow-hidden" style={{ overflowX: 'auto' }}>
            <div className="flex flex-col items-left justify-start">
                <p className="text-brand mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Simule seu pacote de publicidade
                </p>
                <div className="text-brand relative text-left text-xl text-gray-600 my-4" style={{ width: 'fit-content' }}>
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
            <div className="flex justify-between">
                <button onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}>Anterior</button>
                <button onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}>Próximo</button>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:-translate-x-1/4 lg:left-3/4 z-20">
          <img src={visualOne.src} alt="Hand with apple" />
        </div>
        <div
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      style={{
            backgroundImage: `url(${builderBg.src})`,
            backgroundSize: 'cover', // Para cobrir todo o fundo
            backgroundPosition: 'left', // Para centralizar a imagem
            backgroundRepeat: 'no-repeat', // Para não repetir a imagem
            minHeight: '100vh'
        }}
        >
        </div>
      </div>
    </div>
  )
}
