import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LinkRedirect = () => {
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      if (link_name) {
        try {
          const response = await fetch(`/api/get-link?link_name=${link_name}`);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.phone_number}&text=${encodeURIComponent(data.message)}`;
          window.location.href = whatsappUrl;
        } catch (error) {
          console.error('Redirection error:', error);
          // Handle error
        }
      }
    };

    fetchData();
  }, [link_name]);

  return (
    <p>Redirecting you to WhatsApp...</p>
  );
};

export default LinkRedirect;
