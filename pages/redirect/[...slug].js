import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

console.log("abrindo o slug");

const RedirectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    if (slug) {
      const linkName = Array.isArray(slug) ? slug.join('/') : slug;
      fetch(`/api/get-link?link_name=${linkName}`)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((data) => {
          const url = `https://api.whatsapp.com/send?phone=${data.phone_number}&text=${encodeURIComponent(data.message)}`;
          setWhatsappUrl(url);
        })
        .catch((error) => {
          console.error('Redirection error:', error);
        });
    }
  }, [slug]);

  return (
    <div>
      {whatsappUrl ? (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <button>Go to WhatsApp</button>
        </a>
      ) : (
        <p>Preparing your link...</p>
      )}
    </div>
  );
};

export default RedirectPage;
