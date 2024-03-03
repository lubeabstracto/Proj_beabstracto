import paletaImg from "../assets/palette.png"
import tvImg from "../assets/tv.png"
import CircularButton from "./CircularButton"
import { useInView } from 'react-intersection-observer';

const timeline = [
    {
      name: 'Começamos a experimentar',
      description:
        'Com base no estado de São Paulo, no Brasil, a Beabstracto começava os primeiros passos experimentando com serviços para o mercado local.',
      date: 'Feb 2019',
      dateTime: '2019-02',
    },
    {
      name: 'Nos profissionalizamos',
      description:
        'Definimos o nosso nome e nossa gama de serviços, começamos a explorar o mercado sudamericano, e expandimos para a Bolivia.',
      date: 'Feb 2021',
      dateTime: '2021-02',
    },
    {
      name: 'Nosso rebranding',
      description:
        'Abstracto se torna Beabstracto. Retrabalhamos nosso brand guideline, design system e nossa presença em redes sociais. Começamos a explorar o mercado europeu.',
      date: 'Jul 2023',
      dateTime: '2023-07',
    },
    {
      name: 'Relançamento',
      description:
        'Depois de arrumar a casa, estamos prontos para oferecer nossos serviços em nível global. Suportamos empresas no Brasil, Alemanha e Bolívia.',
      date: 'Jul 2024',
      dateTime: '2024-07',
    },
  ]
  
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: 'Push to deploy.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Simple queues.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Powerful API.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
      icon: ServerIcon,
    },
  ]
  
  export default function About() {
    // Criação dos refs para observação
    const { ref, inView } = useInView({
      /* Opções: você pode especificar um threshold, delay, etc. */
      threshold: 0.1, // 10% do item deve estar visível para disparar
      triggerOnce: true, // Só dispara uma vez
    });

    const useItemInView = () => {
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    
      return [ref, inView];
    };

    return (
      <div className="-z-0 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
          <div className="flex justify-center items-center">
                <img
                    className="object-contain"
                    src={paletaImg.src}
                    alt="Paleta de cores"
                />
                </div>
            <h2 className="font-subheading-3 font-semibold leading-7 text-brand-brand-primary">Mas quem somos?</h2>
            <p className="mt-2 font-heading-2 font-bold tracking-tight text-font-color-dark sm:text-4xl">Experts, nerds, exploradores.</p>
            <p className="mt-6 text-lg leading-8 text-font-color-muted-2">
            Tudo isso e mais um pouco. Somos curiosos de marketing, arte e tecnologia e juntos fazemos a equipe mais forte do mundo.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 -z-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center items-center">
          <div className="relative">
            <img
              src={tvImg.src}
              alt="Crie seu Instagram automaticamente"
              className="w-full" // A imagem ocupa toda a largura do seu contêiner
            />
            <div className="absolute bottom-0 right-0 mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
              <CircularButton />
            </div>
          </div>
        </div>





            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`transition-opacity duration-1000 ease-out ${inView ? 'opacity-100' : 'opacity-0'} transform ${inView ? 'translate-y-0' : 'translate-y-10'} `} ref={ref}>


        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item, index) => (
            <div 
              key={item.name} 
              ref={ref}
              style={{ transitionDelay: `${index * 100}ms` }} 
              className={`transition-opacity duration-700`}
            >
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-brand-primary"
              >
                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-brand-primary">{item.name}</p>
              <p className="mt-1 text-body-4 leading-7 text-font-color-muted-2">{item.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
  