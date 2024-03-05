import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LinkRedirect = () => {
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    if (link_name) {
      // This fetch call should be to the backend URL where your database is hosted.
      // If you're deploying to Vercel and the backend is also there, the relative path '/api/get-link' is fine.
      // If your backend is hosted elsewhere, you'll need to provide the full URL to that service.
      fetch(`/api/get-link?link_name=${link_name}`)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((data) => {
          // Assuming `data` has the phone_number and message
          // If your environment doesn't support window.location redirection, consider other methods like window.location.assign
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.phone_number}&text=${encodeURIComponent(data.message)}`;
          router.push(whatsappUrl);
        })
        .catch((error) => {
          console.error('Redirection error:', error);
          // Here you should handle what happens if the link_name doesn't exist or there's another error.
          // This could be showing an error message to the user.
        });
    }
  }, [link_name]);

  // You could add some user-friendly message or loading spinner here.
  return <p>Redirecting you to WhatsApp...</p>;
};

export default LinkRedirect;
