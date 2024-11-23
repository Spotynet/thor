// lib/db_connection.js
const { Pool } = require("pg");

// Configure the PostgreSQL connection pool
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  max: 10, // Maximum number of connections
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Timeout after 2 seconds
});

// Function to execute queries
const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res.rows;
  } catch (err) {
    console.error("Database query error:", err.stack);
    throw err;
  } finally {
    client.release();
  }
};

// Export the query function
module.exports = { query };
