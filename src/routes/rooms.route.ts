import { Router } from 'express';

import * as roomsController from '../controllers/rooms.controller';

const router = Router();

router.post('/rooms', async (req, res) => {
  try {
    const roomData = req.body.room || {};
    const createdRoom = await roomsController.addRoom(roomData);
    return res.json(createdRoom);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get('/rooms', async (req, res) => {
  try {
    const roomFilters = req.query || {};
    const rooms = await roomsController.getRooms(roomFilters);
    return res.json(rooms);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put('/rooms/:id', async (req, res) => {
  try {
    const roomId = req.params.id;
    const roomData = req.body.room || {};
    const editedRoom = await roomsController.editRoom(roomId, roomData);
    return res.json(editedRoom);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete('/rooms/:id', async (req, res) => {
  try {
    const roomId = req.params.id;
    await roomsController.deleteRoom(roomId);
    return res.json({
      message: 'Room deleted',
      room: roomId,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
