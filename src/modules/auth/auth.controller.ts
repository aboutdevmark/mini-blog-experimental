import type { Request, Response } from 'express';

const signUp = (_req: Request, res: Response) => {
  res.json({ message: 'Sign up here.' });
};

const signIn = (_req: Request, res: Response) => {
  res.json({ message: 'Sign in here.' });
};

export { signUp, signIn };
