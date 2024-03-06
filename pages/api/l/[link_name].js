// pages/l/[link_name].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const LinkPage = () => {
  const [whatsappHref, setWhatsappHref] = useState('#');
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    if (link_name) {
      fetch(`/api/l/${link_name}`)
        .then(response => {
          if (!response.ok) throw new Error('Failed to fetch data');
          return response.json();
        })
        .then(data => {
          // Construct the WhatsApp link
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.phone_number}&text=${encodeURIComponent(data.message)}`;
          setWhatsappHref(whatsappUrl);
        })
        .catch(error => console.error('Error:', error));
    }
  }, [link_name]);

  return (
    <div>
      {link_name ? (
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">Send WhatsApp Message</a>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LinkPage;
