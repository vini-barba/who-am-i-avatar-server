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

  if (roomData.player2 === room[0].player1) return room;
  if (roomData.player2 === room[0].player2) return room;
  if (roomData.player1 === room[0].player1) return room;
  if (roomData.player1 === room[0].player2) return room;

  if (room[0].player1 !== null && room[0].player2 !== null) return room;

  return roomsService.update(roomId, roomData);
};

export const deleteRoom = async (roomId: string) => {
  return roomsService.deleteOne(roomId);
};
