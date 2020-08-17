import mongoose, { Types } from 'mongoose';

const { Schema } = mongoose;

export interface IUser {
  email: string;
}
export interface IUserFilter {
  _id?: string | Types.ObjectId;
  email?: string;
}

const UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Users', UsersSchema);
