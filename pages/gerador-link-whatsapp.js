import { useState } from 'react';
import {
    ShareIcon,
    UserIcon,
    ChatBubbleLeftIcon,
    FaceSmileIcon,
    LinkIcon
} from '@heroicons/react/20/solid';

import LeadingIconInput from '../components/atoms/inputs/Variants/LeadingIconInput';
import LeadingDropdownInput from '../components/atoms/inputs/Variants/LeadingDropdownInput';
import FaqSection from '../components/FAQ';
import Card from '@/components/Card';

import foldedTexture from '../assets/foldedTexture.png';
import logo from '../assets/logoWhite.svg';
import hand1 from '../assets/hand1.png';
import hand2 from '../assets/hand2.png';
import Header from '../components/Header';
import Footer from '@/components/Footer';

const countryOptions = [
  { value: 'BR', label: 'BR' },
  { value: 'US', label: 'US' },
];

export default function HeroForm() {
    const [linkName, setLinkName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');

      try {
          const response = await fetch('/api/add-link', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ link_name: linkName, phone_number: phoneNumber, message }),
          });

          if (response.ok) {
              const data = await response.json();
              setGeneratedLink(`https://chamanozap.link/l/${data.link_name}`);
          } else {
              const errorData = await response.json();
              setError(errorData.error || 'An error occurred while creating the link.');
          }
      } catch (error) {
          setError('An error occurred while submitting the form.');
      }
  };


  return (
    <>
    <Header/>
    <div className="relative isolate overflow-hidden bg-brand-tertiary">
        <img 
            className="absolute inset-0 -z-10 h-full w-full"
            src={foldedTexture.src}
        />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 ">
        <img 
      className="absolute inset-0 -z-10 h-full w-full"
      src={foldedTexture.src}
      />
      <div className="px-6 pb-0 lg:pb-24 pt-44 lg:flex lg:px-8 lg:py-40">
        <div className="max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
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
        <div className="pt-0 lg:pt-32 lg:mx-0 lg:my-4 flex w-full">
        <form onSubmit={handleSubmit} className="w-full">
                <div className="pt-0 lg:pt-32 mx-44 flex sm:mt-24 lg:mt-0 w-full sm:pr-44">
                    <div className="w-full relative">
                      {/* Position the hand1 image at the top right corner of the card */}
                      <img src={hand2.src} alt="Hand 1" className="absolute top-4 right-0 translate-x-1/2 -translate-y-1/2 h-44"/>
                      
                      {/* Position the hand2 image at the bottom left corner of the card */}
                      <img src={hand1.src} alt="Hand 2" className="absolute bottom-8 left-0 -translate-x-1/2 translate-y-1/2 h-44"/>
                        
                        <div className="w-full rounded-lg bg-white p-4 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
                            {/* Update input components to manage their state */}
                            <LeadingIconInput
                                id="business_name"
                                label="Nome do negócio"
                                placeholder="Digite o nome do seu negócio"
                                value={linkName}
                                onChange={(e) => setLinkName(e.target.value)}
                                IconComponent={UserIcon} 
                            />

                            <LeadingDropdownInput
                                id="number"
                                label="Número do WhatsApp"
                                placeholder="Digite o número do seu WhatsApp"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                options={countryOptions} 
                                inputProps={{}} 
                            />
                            
                            <LeadingIconInput
                                id="optional_message"
                                label="Mensagem (opcional)"
                                placeholder="Digite a mensagem opcional"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                IconComponent={ChatBubbleLeftIcon} 
                            />

                            <button
                                type="submit"
                                className="mt-4 mb-4 block w-full rounded-md bg-semantic-primary-default px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-semantic-primary-hover"
                            >
                                Gerar meu link do WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
                {generatedLink && <p>Generated Link: <a href={generatedLink}>{generatedLink}</a></p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
      </div>
      </div>
        </div>
    </div>
    <div className='flex flex-col gap-4 m-16 md:flex-row'>
        <Card
          title="Crie seu link"
          linkText="chamanozap.link/l/Seu-Link"
          description="Use o formulârio acima e crie seu link de maneira fácil fácil. Obtenha um link no formato chamanozap.link/l/SEULINK 😉."
          LinkIconComponent={LinkIcon}
          href="#"
        />
        <Card
          title="Divulgue o seu novo link"
          linkText="Na sua bio, no seu site, em todo lado!"
          description="Use seu link nas suas redes sociais como Instagram, LinkedIn, YouTube e no seu próprio website."
          LinkIconComponent={ShareIcon}
          href="#"
        />
        <Card
          title="Aproveite o resultado"
          linkText="Profissionalismo e agilidade!"
          description="Facilite a vida dos seus clientes e audiência, agilize o processo de envio de mensagens e evite perder leads."
          LinkIconComponent={FaceSmileIcon}
          href="#"
        />
      </div>
    <FaqSection
      faqs={[
        {
          question: "O que é um link personalizado do WhatsApp?",
          answer: "Um link personalizado do WhatsApp é um URL único que direciona as pessoas diretamente para iniciar uma conversa com você no WhatsApp, sem a necessidade de adicionar seu número aos contatos.",
        },
        {
          question: "É necessário pagar para criar um link personalizado do WhatsApp?",
          answer:
            "Não, o serviço oferecido pela página 'Beabstracto' permite que você crie seu link personalizado do WhatsApp de forma gratuita.",
        },
        {
          question: "Como posso criar um link personalizado do WhatsApp para o meu negócio?",
          answer:
            "Para criar seu link personalizado, basta inserir o nome do seu negócio, o número do WhatsApp (com o código do país BR para o Brasil), e, se desejar, uma mensagem padrão. Depois, escolha o nome do link e clique em 'Gerar meu link do WhatsApp'.",
        },
        {
          question: "Onde posso divulgar meu link personalizado do WhatsApp?",
          answer:
            "Você pode divulgar seu novo link personalizado em suas redes sociais, como Instagram, LinkedIn, YouTube, no seu próprio website, ou em qualquer outro lugar que considere relevante para sua marca e audiência.",
        },
        {
          question: "Qual é a vantagem de usar um link personalizado do WhatsApp?",
          answer:
            "Usar um link personalizado do WhatsApp traz mais profissionalismo para sua marca, facilita a vida dos seus clientes e audiência ao permitir que eles entrem em contato diretamente com você de maneira rápida, além de ajudar a agilizar o processo de envio de mensagens e evitar a perda de leads.",
        },
        {
          question: "Posso personalizar a mensagem que aparece quando alguém usa meu link?",
          answer:
            "Sim, você tem a opção de inserir uma mensagem padrão que será exibida quando alguém iniciar uma conversa através do seu link personalizado do WhatsApp.",
        },
        {
          question: "Há algum limite para o número de links personalizados que posso criar?",
          answer:
            "A descrição fornecida não especifica um limite, mas geralmente, serviços gratuitos podem ter restrições. Recomenda-se verificar os termos de uso ou entrar em contato com o suporte para mais detalhes.",
        },
        {
          question: "Como posso garantir que meu link personalizado reflita profissionalmente minha marca?",
          answer:
            "Certifique-se de escolher um nome de link que seja relevante para o seu negócio, fácil de lembrar e que transmita uma imagem profissional. Além disso, a mensagem padrão deve ser clara, convidativa e refletir o tom da sua marca.",
        },
      ]}
    />
    <Footer/>
    </>

);
}
