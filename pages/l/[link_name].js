import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LinkPage = () => {
  const [linkDetails, setLinkDetails] = useState({ phoneNumber: '', message: '' });
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    if (link_name) {
      // Fetch the link details from your API
      fetch(`/api/l/${link_name}`)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          // Log the phone number and message
          console.log('Phone Number:', data.phone_number);
          console.log('Message:', data.message);

          // Set the link details
          setLinkDetails({ phoneNumber: data.phone_number, message: data.message });
        })
        .catch(error => {
          console.error('Error fetching link details:', error);
        });
    }
  }, [link_name]);

  // Create the WhatsApp link using the link details
  const whatsappLink = `https://api.whatsapp.com/send?phone=${linkDetails.phoneNumber}&text=${encodeURIComponent(linkDetails.message)}`;

  return (
    <div>
      <a href={linkDetails.phoneNumber ? whatsappLink : '#'} target="_blank" rel="noopener noreferrer">
        Send WhatsApp Message
      </a>
    </div>
  );
};

export default LinkPage;
