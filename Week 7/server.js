const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use('/image', express.static(path.join(__dirname, 'View', 'image')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'View', 'index.html'));
});

// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  setInterval(() => {
    socket.emit('number', Math.floor(Math.random() * 10));
  }, 1000);
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
