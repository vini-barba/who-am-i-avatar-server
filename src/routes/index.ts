import { Router } from 'express';
import usersRoutes from './users.route';
import roomsRoutes from './rooms.route';
import gamesRoutes from './games.route';

const router = Router();

router.use(usersRoutes);
router.use(roomsRoutes);
router.use(gamesRoutes);

export default router;
