import { Todo } from '@models'
import { Todo as TodoSerializer } from '@serialzers'

const list = (req, res) => {
  res.send('List Todos')
}

const show = (req, res) => {
  res.send('Show Todos')
}

const create = (req, res) => {
  const { title, desc } = req.body
  const todo = new Todo({ title, desc })

  todo.save().then(createdTodo => {
    // res.status(201).json(createdTodo)
    res.status(201).json(TodoSerializer.for('create', createdTodo))
  })

  // res.send('Create')
}

export default { list, show, create }
