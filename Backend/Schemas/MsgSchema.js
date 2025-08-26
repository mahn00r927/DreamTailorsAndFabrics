const messageSchema = new mongoose.Schema({
  sender: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);
