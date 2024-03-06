import { useEffect } from 'react'; // Importa useEffect do React
import { useRouter } from 'next/router'; // Importa useRouter do Next.js
import Link from 'next/link';

console.log('abriu o slug');

const RedirectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    console.log(`The slug is: ${slug}`);
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
