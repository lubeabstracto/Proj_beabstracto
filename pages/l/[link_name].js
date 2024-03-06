// pages/l/[link_name].js
import { Pool } from 'pg';

export default function LinkRedirect() {
  // Render nothing or a loading indicator since we should redirect before this renders
  return null;
}

export async function getServerSideProps(context) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  // Access link_name from the context params
  const { link_name } = context.params;

  try {
    // Perform your database query here using server-side code
    const { rows } = await pool.query('SELECT whatsapp_link FROM links WHERE link_name = $1', [link_name]);
    
    if (rows.length > 0 && rows[0].whatsapp_link) {
      // Redirect to the WhatsApp link
      return {
        redirect: {
          destination: rows[0].whatsapp_link,
          permanent: false,
        },
      };
    } else {
      // If no record is found or whatsapp_link is null, return a 404
      return {
        notFound: true,
      };
    }
  } catch (error) {
    // Handle errors, possibly return a 404 or another page
    console.error(error);
    return {
      notFound: true,
    };
  }
}
