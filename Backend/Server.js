// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const http = require('http');
// const { Server } = require('socket.io');
// const cors = require('cors');
// const mongoose = require('mongoose');


// const app = express();
// const PORT = process.env.PORT|| 5000;

// // Middlewares
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // ---------------- MongoDB Connection ----------------
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB error:", err));
// console.log("MONGO_URI from env:", process.env.MONGO_URI);



// // ---------------- Schema & Model ----------------
// const messageSchema = new mongoose.Schema({
//   sender: String,
//   message: String,
//   createdAt: { type: Date, default: Date.now },
// });

// const Message = mongoose.model("Message", messageSchema);

// // ---------------- Routes ----------------
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // ---------------- Socket.io ----------------
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: { origin: "*" },
// });

// io.on("connection", async (socket) => {
//   console.log("User connected: ", socket.id);

//   // Send previous chat history from DB
//   const history = await Message.find().sort({ createdAt: 1 });
//   socket.emit("chatHistory", history);

//   // When a new message is sent
//   socket.on("sendMessage", async (msg) => {
//     const message = new Message(msg);
//     await message.save();

//     io.emit("receiveMessage", message);
//   });

//   // Typing event
//   socket.on("typing", (data) => {
//     socket.broadcast.emit("typing", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected: ", socket.id);
//   });
// });

// // ---------------- Start Server ----------------
// server.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---------------- MongoDB Connection ----------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));
console.log("MONGO_URI from env:", process.env.MONGO_URI);

// ---------------- Schema & Model ----------------
const messageSchema = new mongoose.Schema({
  sender: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", messageSchema);

// ---------------- Routes ----------------
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 👉 New route to fetch all messages (for sidebar open)
app.get('/messages', async (req, res) => {
  try {
    const history = await Message.find().sort({ createdAt: 1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------- Socket.io ----------------
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", async (socket) => {
  console.log("User connected: ", socket.id);

  // Send history on new connection (optional)
  const history = await Message.find().sort({ createdAt: 1 });
  socket.emit("chatHistory", history);

  // When a new message is sent
  socket.on("sendMessage", async (msg) => {
    const message = new Message(msg);
    await message.save();
    io.emit("receiveMessage", message);
  });
  socket.on("deleteMessage", async (id) => {
  try {
    await Message.findByIdAndDelete(id);
    io.emit("messageDeleted", id); // sab clients ko notify
  } catch (err) {
    console.log(err);
  }
});


  // Typing event
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

// ---------------- Start Server ----------------
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
