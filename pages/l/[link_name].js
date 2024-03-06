import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LinkPage = () => {
  const [whatsappHref, setWhatsappHref] = useState('');
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    if (link_name) {
      // Construct the fetch URL for your API
      const fetchUrl = `/api/l/${link_name}`;
      
      fetch(fetchUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const phoneNumber = data.phone_number;
          const message = encodeURIComponent(data.message);
          setWhatsappHref(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`);
        })
        .catch((error) => {
          console.error('Error fetching link details:', error);
        });
    }
  }, [link_name]);

  return (
    <div>
      {whatsappHref ? (
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">Send WhatsApp Message</a>
      ) : (
        <p>Loading or link not found...</p>
      )}
    </div>
  );
};

export default LinkPage;
