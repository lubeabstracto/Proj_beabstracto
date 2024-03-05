import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const LinkRedirect = () => {
  const router = useRouter();
  const { link_name } = router.query;
  const [redirectUrl, setRedirectUrl] = useState(null);

  useEffect(() => {
    if (link_name) {
      fetch(`/api/get-link?link_name=${link_name}`)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((data) => {
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.phone_number}&text=${encodeURIComponent(data.message)}`;
          setRedirectUrl(whatsappUrl);
        })
        .catch((error) => {
          console.error('Redirection error:', error);
          // Handle error
        });
    }
  }, [link_name]);

  useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);

  return (
    <p>Redirecting you to WhatsApp...</p>
  );
};

export default LinkRedirect;
