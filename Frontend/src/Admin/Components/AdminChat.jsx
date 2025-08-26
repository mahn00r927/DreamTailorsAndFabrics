import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { X, Trash2 } from "lucide-react";

const socket = io("http://localhost:5000");

const AdminChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [showDelete, setShowDelete] = useState(null); 

  // 🔹 Load previous messages
  useEffect(() => {
    if (isOpen) {
      fetch("http://localhost:5000/messages")
        .then((res) => res.json())
        .then((data) => setMessages(data))
        .catch((err) => console.error("Failed to load messages:", err));
    }
  }, [isOpen]);

  // 🔹 Listen for new real-time messages
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  // 🔹 Delete message listener
  useEffect(() => {
    socket.on("messageDeleted", (id) => {
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    });
    return () => socket.off("messageDeleted");
  }, []);

  // 🔹 Send new message
  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    const messageData = { sender: "Admin", message: newMessage };
    socket.emit("sendMessage", messageData);
    setNewMessage("");
  };

  // 🔹 Delete message
  const handleDelete = (id) => {
    socket.emit("deleteMessage", id);
    setShowDelete(null); // delete karne ke baad menu band ho jaye
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 z-50 w-80 h-full bg-white shadow-2xl flex flex-col border-l border-gray-200">
      {/* Header */}
      <div className="bg-gray-800 text-white text-lg font-semibold py-3 px-4 flex justify-between items-center">
        <span>Admin Chat</span>
        <button onClick={() => setIsOpen(false)} className="p-1 rounded">
          <X size={20} color="white" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className={`p-2 rounded-lg text-sm w-fit max-w-[75%] relative group cursor-pointer ${
              msg.sender === "Admin"
                ? "bg-gray-500 text-white ml-auto"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setShowDelete(showDelete === msg._id ? null : msg._id)}
          >
            {/* Sender name */}
            <div className="text-xs font-semibold opacity-75 mb-1">
              {msg.sender}
            </div>
            <div>{msg.message}</div>

            {/* Delete button (visible only if this msg is selected) */}
            {showDelete === msg._id && (
              <button
                onClick={() => handleDelete(msg._id)}
                className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow hover:bg-red-600"
              >
                <Trash2 size={14} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center border-t p-2 space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AdminChat;
