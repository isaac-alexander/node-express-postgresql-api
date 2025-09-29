const { Pool } = require('pg');
require('dotenv').config();

class Database {
    constructor() {
        this.pool = new Pool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
        });

        // Optional: Log when connection to the database is established
        this.pool.on('connect', () => {
            console.log('Connected to the PostgreSQL database');
        });

        // Optional: Log any errors with the database connection
        this.pool.on('error', (err) => {
            console.error('Unexpected error on idle client', err);
            process.exit(-1);
        });
    }

    async query(text, params) {
        const client = await this.pool.connect();
        try {
            const res = await client.query(text, params);
            return res;
        } finally {
            client.release(); // ✅ release instead of closing pool
        }
    }
}

module.exports = new Database();
