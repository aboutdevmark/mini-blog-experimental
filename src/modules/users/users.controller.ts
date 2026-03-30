import type { Request, Response } from 'express';

const getUser = (_req: Request, res: Response) => {
  res.json({ message: 'Get user by id' });
};

const editUser = (_req: Request, res: Response) => {
  res.json({ message: 'Edit user by id' });
};

const deleteUser = (_req: Request, res: Response) => {
  res.json({ message: 'Delete user by id' });
};

export { getUser, editUser, deleteUser };
