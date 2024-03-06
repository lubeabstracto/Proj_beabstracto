// pages/api/l/[link_name].js
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  const { link_name } = req.query;

  try {
    const { rows } = await pool.query('SELECT phone_number, message FROM links WHERE link_name = $1', [link_name]);
    
    if (rows.length > 0) {
      const phoneNumber = rows[0].phone_number;
      const message = encodeURIComponent(rows[0].message); // Make sure to encode the message
      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

      res.redirect(307, whatsappLink); // Temporary redirect with status code 307
    } else {
      res.status(404).json({ error: 'Link not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
}
