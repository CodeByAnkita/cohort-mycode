const mongoose = require("mongoose");

// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// mongodb+srv://ankitacode11:Madwomen0711@cluster0.9tuulkp.mongodb.net/
// .env
mongoose.connect(
  "mongodb+srv://ankitacode11:Madwomen0711@cluster0.9tuulkp.mongodb.net/todos"
  // " mongodb+srv://ankitacode11:Madwomen0711@cluster0.9tuulkp.mongodb.net/todos?retryWrites=true&w=majority&appName=Todo-App"
  // "mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos"
);
// mongodb+srv://ankitacode11:Madwomen0711@cluster0.9tuulkp.mongodb.net/
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
