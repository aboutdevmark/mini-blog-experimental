import { Router } from 'express';
import * as userController from '@/modules/users/users.controller.js';

const router = Router();

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.editUser)
  .delete(userController.deleteUser);

export default router;
