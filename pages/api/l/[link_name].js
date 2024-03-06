// pages/api/l/[link_name].js
import { Pool } from 'pg';

export default async function handler(req, res) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const { link_name } = req.query;

  try {
    const { rows } = await pool.query('SELECT phone_number, message FROM links WHERE link_name = $1', [link_name]);
    
    if (rows.length > 0) {
      // Correctly return the JSON data without using useState
      res.status(200).json({
        phone_number: rows[0].phone_number,
        message: rows[0].message,
      });
    } else {
      res.status(404).json({ error: 'Link not found.' });
    }
  } catch (error) {
    console.error('Error during database query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
