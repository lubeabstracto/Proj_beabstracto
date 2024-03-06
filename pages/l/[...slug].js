import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const RedirectPage = () => {
    const router = useRouter();
    const { slug } = router.query; // Deve capturar o "dkdjjdjddjdj" da URL
  
    useEffect(() => {
      // Certifique-se de que este log só ocorra quando o slug estiver definido
      if (slug) {
        console.log(`O slug é: ${slug}`); // Deve logar "O slug é: dkdjjdjddjdj"
      }
    }, [slug]);

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
