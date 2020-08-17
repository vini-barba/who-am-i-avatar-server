import userModel, { IUser, IUserFilter } from '../models/users.model';

export const create = async (userData: IUser) => {
  try {
    return userModel.create(userData);
  } catch (error) {
    throw new Error('Error creating user');
  }
};

export const read = async (userFilter: IUserFilter) => {
  try {
    return userModel.findOne(userFilter);
  } catch (error) {
    throw new Error('Error reading user');
  }
};

export const deleteOne = async (userId: string) => {
  try {
    return userModel.deleteOne({ _id: userId });
  } catch (error) {
    throw new Error('Error deleting user');
  }
};
