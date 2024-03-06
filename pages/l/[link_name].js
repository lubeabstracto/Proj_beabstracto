import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  const { link_name } = req.query;

  try {
    const { rows } = await pool.query('SELECT whatsapp_link FROM links WHERE link_name = $1', [link_name]);
    if (rows.length > 0) {
      return res.redirect(rows[0].whatsapp_link);
    } else {
      return res.status(404).json({ error: 'Link not found.' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error.' });
  }
}
