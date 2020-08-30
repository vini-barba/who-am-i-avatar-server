import * as usersService from '../services/users.service';
import { IUser } from '../models/users.model';

export const addUser = async (userData: IUser) => {
  const { email } = userData;
  return usersService.create({ email });
};

export const getUser = async (email: string) => usersService.read({ email });

export const deleteUser = async (userId: string) => {
  return usersService.deleteOne(userId);
};
