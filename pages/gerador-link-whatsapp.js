import { useState } from 'react';
import HeroForm from '@/components/HeroForm';
import InlineAddOnAndDropdownInput from '../components/atoms/inputs/Variants/InlineAddOnAndDropdownInput'

export default function GeradorLinkWhatsApp() {
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
    <HeroForm/>
    <div>
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
