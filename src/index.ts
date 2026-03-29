import express, { type Request, type Response } from 'express';

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (_req: Request, res: Response) => {
  res.send('We are now good.');
});

// 404 route handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Desired route not found!' });
});

// Global error middleware here.

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
