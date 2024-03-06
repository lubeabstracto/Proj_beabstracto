// pages/l/[link_name].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LinkPage = () => {
  const router = useRouter();
  const { link_name } = router.query;

  useEffect(() => {
    if (link_name) {
      // Fetch the data from the API route
      fetch(`/api/l/${link_name}`)
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error('Failed to fetch');
        })
        .then((data) => {
          // Now you have your data, you can redirect or display it
          // This is just a placeholder logic for example
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [link_name]);

  return (
    <div>
      <p>Redirecting, please wait...</p>
    </div>
  );
};

export default LinkPage;
