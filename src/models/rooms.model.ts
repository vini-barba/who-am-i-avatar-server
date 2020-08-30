import mongoose, { Types, Document } from 'mongoose';

const { Schema } = mongoose;

export interface IRoom extends Document {
  player1: string | Types.ObjectId;
  player2?: string | Types.ObjectId;
  char1?: number;
  char2?: number;
}

export interface IRoomFilter {
  _id?: string | Types.ObjectId;
  player1?: string | Types.ObjectId;
  player2?: string | Types.ObjectId;
}

const RoomsSchema = new Schema({
  player1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    index: true,
  },
  player2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    index: true,
  },
});

export default mongoose.model<IRoom>('Rooms', RoomsSchema);
