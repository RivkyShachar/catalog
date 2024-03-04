import express, { Request, Response } from 'express';
import { Pool } from 'pg';

const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'user123',
    password: 'password123',
    database: 'db123'
});

const port = 3000;
const app = express();

app.use(express.json());

app.get('/category/', async (req: Request, res: Response) => {
    try {
        const data = await pool.query('SELECT * FROM schools');
        res.status(200).send(data.rows);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.post('/category/', async (req: Request, res: Response) => {
    const { name, location } = req.body;
    try {
        await pool.query('INSERT INTO schools (name, address) VALUES ($1, $2)', [name, location]);
        res.status(200).send({ message: `your keys were ${name}, ${location} added successfully` });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get('/category/setup', async (req: Request, res: Response) => {
    try {
        await pool.query('CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100))');
        res.status(200).send({ message: 'Successfully created table' });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
