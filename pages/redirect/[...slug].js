import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const RedirectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    // Acessa `window.location` diretamente para obter o slug como uma alternativa
    const pathSlug = window.location.pathname.split('/').pop();
    if (pathSlug) {
      console.log(`The slug from window.location is: ${pathSlug}`);
    }
  }, []);
  

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Click the button below to go to the Create Post page.</p>
      <Link href="/createpost">
        <a>
          <button>Create Post</button>
        </a>
      </Link>
    </div>
  );
};

export default RedirectPage;
