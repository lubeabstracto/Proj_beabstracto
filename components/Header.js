import { Fragment, useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ArrowPathIcon, Bars3Icon, LinkIcon, GlobeAltIcon, SquaresPlusIcon, XMarkIcon, EnvelopeIcon, CodeBracketIcon, AcademicCapIcon, CameraIcon, HashtagIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, SwatchIcon} from '@heroicons/react/20/solid';

const servicos = [
  { name: 'Tecnologia', description: 'Websites, desenvolvimento de apps...', href: '/tecnologia', icon: CodeBracketIcon },
  { name: 'Audiovisual', description: 'Fotografia, produção de vídeos, drones...', href: '/audiovisual', icon: CameraIcon },
  { name: 'Marketing', description: 'Redes sociais, tráfego pago, SEO...', href: '/marketing', icon: HashtagIcon },
  { name: 'Identidade Visual', description: 'Logos, branding, paleta...', href: '/marketing', icon: SwatchIcon },
]

const products = [
  { name: 'Link na Bio', description: 'Um link profissional para sua bio!', href: '/link-na-bio', icon: LinkIcon },
  { name: 'Chama no Zap', description: 'Um link personalizdo para o seu WhatsApp!', href: '/gerador-link-whatsapp', icon: PhoneIcon },
  { name: 'Email Marketing', description: 'Envie email marketing para todos os seus leads com nossos templates', href: '/email-marketing', icon: EnvelopeIcon },
  { name: 'Procedimentos de marketing', description: 'Tenha acesso aos procedimentos de marketing', href: '/SOP', icon: AcademicCapIcon },
  { name: 'Defina suas cores', description: 'Gere as cores perfeitas para sua marca', href: '#', icon: SwatchIcon },
  { name: 'Faça seu logos', description: 'Crie seus logos de maneira fácil com a gente', href: '#', icon: SquaresPlusIcon },
  { name: 'Crie seu website', description: 'Crie seu site em instantes com nossa plataforma', href: '#', icon: GlobeAltIcon },
]

const callsToAction = [
  { name: 'Sobre nós', href: '#', icon: PlayCircleIcon },
  { name: 'Começar agora', href: '#', icon: PhoneIcon },
]    

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerPosition, setHeaderPosition] = useState('absolute');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroElement = document.getElementById('hero');
      const heroHeight = heroElement ? heroElement.offsetHeight : 0;

      if (currentScrollY >= heroHeight) {
        setHeaderPosition('fixed');
      } else {
        setHeaderPosition('absolute');
      }

      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
<header className={`${headerPosition === 'fixed' ? 'fixed top-0 bg-white shadow-md' : 'absolute bg-transparent'} left-0 w-full transition-transform duration-300 header ${showHeader ? 'translate-y-0' : '-translate-y-full'} z-10`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Beasbtracto</span>
            <img
                className="h-8 w-auto"
                src={logo.src}
                alt="beabstracto logo"
              />
          </a>
        </div>
        <div className="flex lg:hidden">
        <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Alterna o estado
      >
        <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
        {!mobileMenuOpen && ( // Alterado aqui para mostrar o ícone somente quando o menu não está aberto
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
        </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
              <Popover.Button className="flex font-brand items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Serviços
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {servicos.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="font-brand block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="font-brand mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <a href="#" className="text-sm font-brand font-semibold leading-6 text-gray-900">
              Blog
            </a>
            <a href="#" className="text-sm font-brand font-semibold leading-6 text-gray-900">
              Portfolio
            </a>
            <a href="#" className="text-sm font-brand font-semibold leading-6 text-gray-900">
              Contato
            </a>
            <Popover className="relative">
              <Popover.Button className="flex font-brand items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Ferramentas
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="font-brand block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="font-brand mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Beabstracto: A sua agência de marketing</span>
                <img
                  className="h-8 w-auto"
                  src={logo.src}
                  alt="Logo Beabstracto"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root -z-50">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3 py-4">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Ferramentas
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Portfólio
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contato
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  );
}


