import * as roomsService from '../services/rooms.service';

async function generateRandomChar(num?: number): Promise<number> {
  const charNum = Math.floor(Math.random() * 23) + 1;
  if (num) {
    if (charNum === num) {
      return generateRandomChar(num);
    }
  }
  return charNum;
}

export const newGame = async (roomId: string) => {
  const [room] = await roomsService.read({ _id: roomId });
  const char1 = await generateRandomChar();
  const char2 = await generateRandomChar(char1);
  const responsePayload = {
    roomId: room._id,
    player1: room.player1,
    player2: room.player2,
    char1,
    char2,
  };
  return responsePayload;
};
