import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LinkRedirect = () => {
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    if (link_name) {
      // Fetch the link details from the backend
      fetch(`/api/get-link?link_name=${link_name}`)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((data) => {
          // Construct the WhatsApp URL with the fetched data
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.phone_number}&text=${encodeURIComponent(data.message)}`;
          // Redirect to the WhatsApp URL - this is an external redirect, not a client-side route change
          window.location.href = whatsappUrl;
        })
        .catch((error) => {
          console.error('Redirection error:', error);
          // Handle errors, such as link_name not found or other fetch issues
          // You can display an error message to the user or redirect to an error page
        });
    }
  }, [link_name]);

  // Display a message to the user while the redirect is being processed
  return <p>Redirecting you to WhatsApp...</p>;
};

export default LinkRedirect;
