

import { useState } from 'react'
import bgImage from '/src/assets/bg.png';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    
    <div className="relative bg-white" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16 py-6">
            <div class="relative rounded-full px-3 py-1 text-body-4 font-body-4 leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Aprenda a enviar email marketing para todos os seus leads.{' '}
                    <a href="#" className="whitespace-nowrap font-semibold text-semantic-tertiary-default">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Participar grátis <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                O profissionalismo que a sua marca merece!
            </h1>
            <p className="mt-6 text-body-4 leading-8 text-gray-600">
                Com a beabstracto você terá melhor presença online e offline. Em poucos passos o seu negócio está pronto para ser lançado, seja nas principais redes sociais, no Google ou até mesmo com o seu próprio website e email profissional.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-semantic-primary-default px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Começar grátis
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-semantic-tertiary-default">
                    Quem somos <span aria-hidden="true">→</span>
                  </a>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/src/assets/capi.png"
            alt="Descrição da imagem"
          />
        </div>
      </div>
    </div>

  )
}
