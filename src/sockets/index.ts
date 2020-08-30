export default function sockets(socket: any) {
  socket.on('chat message', (msg: string) => {});

  socket.on('disconnect', () => {});
}
