import { Pool } from 'pg';

console.log(process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { link_name, phone_number, message } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO links (link_name, phone_number, message) VALUES ($1, $2, $3) RETURNING *',
        [link_name, phone_number, message]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error.stack || error); // This will give you the complete error stack
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
      }
      
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
