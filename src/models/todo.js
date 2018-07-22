import mongoose from 'mongoose'

const Schema = mongoose.Schema

// add schema for Mongoose to convert Mongo data to JS
const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  update: {
    type: Date,
    default: Date.now
  }
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
