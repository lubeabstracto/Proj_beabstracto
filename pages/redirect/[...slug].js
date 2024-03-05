// pages/redirect/[...slug].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug && slug.length > 0) {
      const linkName = slug.join('/');
      // Make API call to fetch data for the linkName
      fetch(`/api/get-link?link_name=${linkName}`)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((data) => {
          const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.phone_number}&text=${encodeURIComponent(data.message)}`;
          window.location.href = whatsappUrl;
        })
        .catch((error) => {
          console.error('Redirection error:', error);
          // Handle error redirection
        });
    }
  }, [slug]);

  // You could add a loading spinner or message here
  return null;
};

export default RedirectPage;
