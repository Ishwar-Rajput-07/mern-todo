const express = require("express")
require("dotenv").config({ path: "./.env" })
const cors = require("cors")
const mongoose = require("mongoose")
const { addTodo, getTodos, updateTodos, deleteTodos } = require("./controllers/todoController")
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors())
app.post("/todo/add", addTodo)
app.get("/todo", getTodos)
app.put("/todo/:id", updateTodos)
app.delete("/todo/:id", deleteTodos)

mongoose.connection.once("open", () => {
    console.log("BD Connected");
    app.listen(5000, console.log("http://localhost:5000"))
})
