import { 
    ChevronRightIcon,
    UserIcon,
    ChatBubbleLeftIcon,

} from '@heroicons/react/20/solid'
import InputGroup from './atoms/inputs/InputGroups'
import LeadingIconInput from './atoms/inputs/Variants/LeadingIconInput'
import LeadingDropdownInput from './atoms/inputs/Variants/LeadingDropdownInput'
import InlineAddOnInput from './atoms/inputs/Variants/InlineAddOnInput'

import foldedTexture from '../assets/foldedTexture.png'
import logo from '../assets/logoWhite.svg'


const countryOptions = [
  { value: 'BR', label: 'BR' },
  { value: 'US', label: 'US' },
];

export default function HeroForm() {
  return (
    <div className="relative isolate overflow-hidden bg-brand-tertiary">
      <img 
      className="absolute inset-0 -z-10 h-full w-full"
      src={foldedTexture.src}
      />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <img
            className="h-48"
            src={logo.src}
            alt="Beabstracto"
          />
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Crie gratuitamente seu link personalizado do WhatsApp!
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Traga mais profissionalismo para sua marca! Tenha um link personalizado para mensagens diretamente no seu WhatsApp e ganhe mais notoriedade!
          </p>
 
        </div>
        <div className="px-16 mt-16 mx-8 flex sm:mt-24 lg:mt-0 w-full">
          <div className="w-full">
            <div className="rounded-lg bg-white p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
              <LeadingIconInput
                  id="business_name"
                  label="Nome do negócio"
                  placeholder="Digite o nome do seu negócio"
                  IconComponent={UserIcon} 
              />
              <LeadingDropdownInput
                  id="number"
                  label="Número do WhatsApp"
                  placeholder="Digite o número do seu WhatsApp"
                  options={countryOptions} 
                  inputProps={{}} 
              />
              
              <LeadingIconInput
                  id="nome_negocio"
                  label="Mensagem (opcional)"
                  placeholder="Digite o nome do seu negócio"
                  IconComponent={ChatBubbleLeftIcon} 
              />

              <InlineAddOnInput
                id="link_name"
                label="Escolha o nome do link"
                addonText="chamanozap.link/l/"
              />

              <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Descreva seu negócio (opcional)
              </label>
              <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
              </div>
              </div>


              <a
                href="#"
                className="mt-4 mb-4 block w-full rounded-md bg-semantic-primary-default px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-semantic-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Gerar meu link do WhatsApp
              </a>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
