import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  const { link_name } = req.query;

  if (link_name) {
    try {
      const { rows } = await pool.query('SELECT * FROM links WHERE link_name = $1', [link_name]);
      if (rows.length > 0) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).json({ error: 'Link not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error.' });
    }
  } else {
    res.status(400).json({ error: 'No link name provided.' });
  }
}
