import express, { type Request, type Response } from 'express';
import router from '@/router/index.js';

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (_req: Request, res: Response) => {
  res.send('We are now good.');
});
app.use('/v1/api', router);

// 404 route handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Desired route not found!' });
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
