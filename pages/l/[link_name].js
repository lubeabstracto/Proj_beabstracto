import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LinkRedirect = () => {
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    // Log to verify we're getting into the useEffect block
    console.log('Attempting to redirect for link_name:', link_name);

    if (link_name) {
      // Log the URL we're about to fetch
      console.log('Fetching link details for:', link_name);

      fetch(`/api/get-link?link_name=${link_name}`)
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error('Failed to fetch link details');
        })
        .then((data) => {
          // Log the fetched data
          console.log('Fetched data:', data);

          const whatsappUrl = `https://wa.me/${data.phone_number}?text=${encodeURIComponent(data.message)}`;
          // Log the WhatsApp URL we're about to redirect to
          console.log('Redirecting to WhatsApp URL:', whatsappUrl);

          window.location.href = whatsappUrl;
        })
        .catch((error) => {
          // Log any errors
          console.error('Error fetching link details:', error);
        });
    } else {
      // Log if link_name is not present
      console.log('Link name is not defined in the query');
    }
  }, [link_name]);

  return <p>Redirecting...</p>;
};

export default LinkRedirect;
