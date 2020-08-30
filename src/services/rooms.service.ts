import roomsModel, { IRoom, IRoomFilter } from '../models/rooms.model';

export const create = async (roomData: IRoom) => {
  try {
    return roomsModel.create(roomData);
  } catch (error) {
    throw new Error('Error room');
  }
};

export const read = async (roomFilter: IRoomFilter) => {
  try {
    return roomsModel.find(roomFilter);
  } catch (error) {
    throw new Error('Error room');
  }
};

export const update = async (roomId: string, roomData: IRoom) => {
  try {
    return roomsModel.findOneAndUpdate({ _id: roomId }, roomData, {
      new: true,
    });
  } catch (error) {
    throw new Error('Error room');
  }
};

export const deleteOne = async (roomId: string) => {
  try {
    return roomsModel.deleteOne({ _id: roomId });
  } catch (error) {
    throw new Error('Error room');
  }
};
