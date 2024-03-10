import { useState } from 'react';
import hand1 from '../assets/hand1.png'
import hand2 from '../assets/hand2.png'

import { 
    UserIcon,
    ChatBubbleLeftIcon,

} from '@heroicons/react/solid'

import LeadingIconInput from './atoms/inputs/Variants/LeadingIconInput'
import LeadingDropdownInput from './atoms/inputs/Variants/LeadingDropdownInput'
import InlineAddOnInput from './atoms/inputs/Variants/InlineAddOnInput'

const countryOptions = [
  { value: 'BR', label: 'BR' },
  { value: 'US', label: 'US' },
];


export default function WhatsAppForm() {
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
        // Instead of showing the full WhatsApp link, you show a link to your redirect API endpoint
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
    <div>
    <form className="w-full relative" onSubmit={handleSubmit}>
            {/* Position the hand1 image at the top right corner of the card */}
            <img src={hand2.src} alt="Hand 1" className="absolute top-4 right-0 translate-x-1/2 -translate-y-1/2 h-44"/>
            
            {/* Position the hand2 image at the bottom left corner of the card */}
            <img src={hand1.src} alt="Hand 2" className="absolute bottom-8 left-0 -translate-x-1/2 translate-y-1/2 h-44"/>

          <div className="rounded-lg bg-white p-4 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">

            {/* LeadingIconInput Component */}
            <LeadingIconInput
              id="business_name"
              label="Nome do negócio"
              placeholder="Digite o nome do seu negócio"
              IconComponent={UserIcon} 
            />

            {/* LeadingDropdownInput Component */}
            <LeadingDropdownInput
              id="number"
              label="Número do WhatsApp"
              value={linkName}
              onChange={(e) => setLinkName(e.target.value)}
              placeholder="Digite o número do seu WhatsApp"
              options={countryOptions} 
              inputProps={{}} 
              required
            />
            
            {/* LeadingIconInput Component for Optional Message */}
            <LeadingIconInput
              id="optional_message"
              label="Mensagem (opcional)"
              placeholder="Digite o nome do seu negócio"
              IconComponent={ChatBubbleLeftIcon} 
            />

            {/* InlineAddOnInput Component for URL */}
            <InlineAddOnInput
              id="link_name"
              label="Escolha o nome do link"
              addonText="chamanozap.link/l/"
            />

            {/* Call to Action Button */}
            <a
              href="#"
              className="mt-4 mb-4 block w-full rounded-md bg-semantic-primary-default px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-semantic-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Gerar meu link do WhatsApp
            </a>
          </div>
        </form>

      <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={linkName}
          onChange={(e) => setLinkName(e.target.value)}
          placeholder="Link Name"
          required
        />
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        />
        <button type="submit">Create Link</button>
      </form>
      {generatedLink && <p>Generated Link: <a href={generatedLink}>{generatedLink}</a></p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </>
  );
}
