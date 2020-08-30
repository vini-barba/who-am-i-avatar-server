import { Router } from 'express';
import * as gamesController from '../controllers/games.controller';

const router = Router();

router.post('/games', async (req, res) => {
  try {
    const { roomId } = req.body.room;
    const game = await gamesController.newGame(roomId);
    return res.json(game);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
