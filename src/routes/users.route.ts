import { Router } from 'express';

import * as userController from '../controllers/users.controller';

const router = Router();

router.post('/users', async (req, res) => {
  try {
    const userData = req.body.user || {};
    const userCreated = await userController.addUser(userData);
    return res.json(userCreated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const { email } = req.params;
    const user = await userController.getUser(email);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
