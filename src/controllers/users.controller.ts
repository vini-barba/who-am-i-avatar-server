import * as userService from '../services/users.service';
import { IUser } from '../models/users.model';

export const addUser = async (userData: IUser) => {
  const { email } = userData;
  return userService.create({ email });
};

export const getUser = async (email: string) => userService.read({ email });

export const deleteUser = async (userId: string) => {
  return userService.deleteOne(userId);
};
