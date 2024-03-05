// pages/l/[link_name]/index.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LinkRedirect = () => {
  const router = useRouter();
  const { link_name } = router.query; // Get the dynamic part of the URL

  useEffect(() => {
    if (link_name) {
      // Fetch the details for the dynamic link_name from the API
      fetch(`/api/get-link?link_name=${link_name}`)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((data) => {
          // Construct the WhatsApp URL with the data returned from the API
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.phone_number}&text=${encodeURIComponent(data.message)}`;
          // Redirect the user to the WhatsApp URL
          window.location.href = whatsappUrl;
        })
        .catch((error) => {
          // Handle any errors that occur during the fetch
          console.error('Redirection error:', error);
          // Display an error message or redirect to an error page
        });
    }
  }, [link_name]);

  return <p>Redirecting you to WhatsApp...</p>;
};

export default LinkRedirect;
