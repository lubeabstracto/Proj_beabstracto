import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

console.log("abrindo o slug");

const RedirectPage = () => {
  const router = useRouter();
  console.log('ta dando pau aqui 1');

  const { slug } = router.query;
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    if (slug) {
      console.log('ta dando pau aqui2');
      const linkName = Array.isArray(slug) ? slug.join('/') : slug;
      console.log('ta dando pau aqui 3');
      fetch(`/api/get-link?link_name=${linkName}`)
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((data) => {
          const url = `https://api.whatsapp.com/send?phone=${data.phone_number}&text=${encodeURIComponent(data.message)}`;
          setWhatsappUrl(url);
          console.log(url);
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

console.log(url);

export default RedirectPage;
