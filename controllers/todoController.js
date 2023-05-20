const TODO = require("../modals/Todo")

exports.addTodo = async (req, res) => {
    try {
        const result = await TODO.create(req.body)
        res.json({
            msg: "Add Todo Success",
            result
        })
    } catch (error) {
        res.json({
            msg: "Something went wrong" + error,
        })
    }
}
exports.getTodos = async (req, res) => {
    try {
        const result = await TODO.find()
        // const result = await TODO.create()  // add to db
        // const result = await TODO.find()  // get all records
        // const result = await TODO.findByIdAndUpdate()  // update
        // const result = await TODO.findByIdAndDelete()  // delete
        res.json({
            msg: "Get Todo Success",
            result
        })
    } catch (error) {
        res.json({
            msg: "Something went wrong" + error,
        })
    }
}

exports.updateTodos = async (req, res) => {
    try {
        const todoId = req.params.id
        const result = await TODO.findByIdAndUpdate(todoId, req.body, { new: true })  // update
        res.json({
            msg: "update Todo Success",
            result
        })
    } catch (error) {
        res.json({
            msg: "Something went wrong" + error,
        })
    }
}
exports.deleteTodos = async (req, res) => {
    try {
        const todoId = req.params.id
        const result = await TODO.findByIdAndDelete(todoId)  // delete
        res.json({
            msg: " Todo delete Success",
            result
        })
    } catch (error) {
        res.json({
            msg: "Something went wrong" + error,
        })
    }
}