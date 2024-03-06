// pages/l/[link_name].js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LinkRedirect = ({ whatsappLink }) => {
  const router = useRouter();

  useEffect(() => {
    if (whatsappLink) {
      window.location.href = whatsappLink;
    }
  }, [whatsappLink]);

  return <p>Redirecting...</p>;
};

export async function getServerSideProps(context) {
  // Access link_name from the context params
  const { link_name } = context.params;
  let whatsappLink = '';

  try {
    // Perform your database query here using server-side code
    // const result = await yourDatabaseQueryFunction(link_name);
    // whatsappLink = result.whatsapp_link;

    // For now, we'll just return an example URL
    whatsappLink = 'https://api.whatsapp.com/send?...';
  } catch (error) {
    // Handle errors, possibly return a 404 or another page
    return {
      notFound: true,
    };
  }

  // Pass the WhatsApp link to the page for redirection
  return {
    props: { whatsappLink },
  };
}

export default LinkRedirect;
