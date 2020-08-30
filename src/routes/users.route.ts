import { Router } from 'express';

import * as userController from '../controllers/users.controller';

const router = Router();

router.post('/users', async (req, res) => {
  try {
    const userData = req.body.user || {};
    const createdUser = await userController.addUser(userData);
    return res.json(createdUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get('/users/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const user = await userController.getUser(email);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
