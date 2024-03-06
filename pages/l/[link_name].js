import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LinkPage = () => {
  const [whatsappHref, setWhatsappHref] = useState('');
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    // Fetch the link details when the link_name becomes available
    if (link_name) {
      fetch(`/api/l/${link_name}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // Construct the WhatsApp link and set it in state
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
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer">send whatsapp message</a>
    </div>
  );
};

export default LinkPage;
