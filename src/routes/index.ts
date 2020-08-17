import { Router } from 'express';
import userRoutes from './users.route';

const router = Router();

router.use(userRoutes);

export default router;
