const app = require('express')();
const http = require('http').createServer(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(http);
// const path = require('path');

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat', function(data){
    console.log(data);
    socket.emit('chat', data);
  });
  //Broadcast typing...
  // socket.broadcast.emit("");
});

http.listen(port, () => {
  console.log(`listening on port ${port}`);
});