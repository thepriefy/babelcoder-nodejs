const list = (req, res) => {
  res.send('List Todos')
}

const show = (req, res) => {
  res.send('Show Todos')
}

const create = (req, res) => {
  console.log(req.body)
  res.send('Create')
}

export default { list, show, create }
