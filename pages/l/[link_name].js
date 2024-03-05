import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LinkRedirect = () => {
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    if (link_name) {
      fetch(`/api/get-link?link_name=${link_name}`)
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error('Failed to fetch link details');
        })
        .then((data) => {
          const whatsappUrl = `https://wa.me/${data.phone_number}?text=${encodeURIComponent(data.message)}`;
          window.location.href = whatsappUrl;
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle the error state here, potentially showing an error message
        });
    }
  }, [link_name]);

  return <p>Redirecting...</p>;
};

export default LinkRedirect;
