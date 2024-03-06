import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const LinkPage = () => {
  const [whatsappHref, setWhatsappHref] = useState('');
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    // Only fetch from your own API, not from WhatsApp's API
    if (link_name) {
      fetch(`/api/l/${link_name}`)
        .then(response => {
          if (!response.ok) throw new Error('Failed to fetch data');
          return response.json();
        })
        .then(data => {
          // Use the data to create the WhatsApp link
          const phoneNumber = data.phone_number;
          const message = encodeURIComponent(data.message);
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
          setWhatsappHref(whatsappUrl);
        })
        .catch(error => console.error('Error:', error));
    }
  }, [link_name]);

  return (
    <div>
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer">Send WhatsApp Message</a>
    </div>
  );
};

export default LinkPage;
