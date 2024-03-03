import { Helmet } from 'react-helmet';

<Helmet>
  <title>Beabstracto | Sua agência de marketing ideal"</title>
  <meta name="description" content="Maximize seus resultados com treinos personalizados em Jundiaí. Agende sua consultoria grátis hoje!" />
</Helmet>


import ouroImg from '../assets/ouro.png';
import prataImg from '../assets/prata.png';
import bronzeImg from '../assets/bronze.png';


import {
    CheckIcon,
  } from '@heroicons/react/20/solid'

import { useState } from 'react'


const title = "Beabstracto | Sua agência de marketing ideal";
const description = "Maximize seus resultados com treinos personalizados em Jundiaí. Agende sua consultoria grátis hoje!";
const url = "https://www.beabstracto.com/";
const image = "https://www.beabstracto.com/visualone.jpg"; // Substitua pelo caminho correto da sua imagem de compartilhamento


const tiers = [
    {
      id: 'tier-bronze',
      name: 'Bronze',
      href: '#agendar',
      image: bronzeImg,
      description: "Ideal para iniciantes que querem uma guia",
      features: [
        'Alinhamento inicial',
        '1x Planejamento de treino',
        'Acesso ao MFit',
      ],
      featured: false,
    },
    {
      id: 'tier-prata',
      name: 'Prata',
      href: '#agendar',
      image: prataImg,
      description: 'Plano perfeito para os seus objetivos',
      features: ['Alinhamento inicial', '2x planejamento de treinos', 'Acesso ao MFit', '2x avaliação física', '2x avaliação postural'],
      featured: false,
    },
    {
      id: 'tier-ouro',
      name: 'Ouro',
      href: '#agendar',
      image: ouroImg,
      description: 'O melhor no longo prazo',
      features: ['Alinhamento inicial', '6x planejamento de treinos', 'Acesso ao MFit', '2x avaliação física', '2x avaliação postural', 'Alteração de estímulos'],
      featured: true,
    },
  ]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function  Pacotes() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8 -z-0" id='pacotes'>
      <div className="absolute inset-x-0 -top-3 -z-0 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#00042D] to-[#FDFCE8] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-heading-3 font-semibold leading-7 text-brand-primary">Pacotes</h2>
        <p className="mt-2 text-heading-3 font-bold tracking-tight text-gray-900 sm:text-5xl">
            Melhor presença, mais vendas
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        O pacote perfeito para você, personalizado e customizável!
      </p>
      <div className=" mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
          key={tier.id}
          className={classNames(
            tier.featured ? 'relative bg-white shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
            'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10', // Aplicado consistentemente a todos os elementos
          )}
        > 
            <h3 id={tier.id} className="text-base font-semibold leading-7 text-marca-accent">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
            <img src={tier.image.src} alt={`${tier.name} package`} />
              <span className="text-base text-gray-500"></span>
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-marca-accent text-white shadow hover:bg-indigo-500'
                  : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10'
              )}
            >
              Quero minha consultoria grátis
            </a>
          </div>
        ))}
      </div>
    </div>


    </>
  )
}
