const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();  
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create HTTP server & attach Socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

// Store chat history
let messages = [];

// Socket.io connection
io.on('connection', (socket) => {
  console.log('User connected: ', socket.id);

  // Send past messages to newly connected client
  socket.emit('chatHistory', messages);

  // Listen for new messages
  socket.on('sendMessage', (msg) => {
    const message = { id: Date.now(), ...msg };
    messages.push(message);

    // Broadcast to all clients
    io.emit('receiveMessage', message);
  });

  // Optionally: typing indicator
  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected: ', socket.id);
  });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
