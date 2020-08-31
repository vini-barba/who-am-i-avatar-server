import * as roomsService from '../services/rooms.service';
import { IRoom, IRoomFilter } from '../models/rooms.model';

export const addRoom = async (roomData: IRoom) => {
  return roomsService.create(roomData);
};

export const getRooms = async (roomFilter: IRoomFilter) => {
  return roomsService.read(roomFilter);
};

export const editRoom = async (roomId: string, roomData: IRoom) => {
  const room = await getRooms({ _id: roomId });

  if (room.length === 0) return { message: "Room doesn't exist" };

  return roomsService.update(roomId, roomData);
};

export const deleteRoom = async (roomId: string) => {
  return roomsService.deleteOne(roomId);
};
