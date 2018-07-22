const list = (req, res) => {
  res.send('List Todos')
}

const show = (req, res) => {
  res.send('Show Todos')
}

export default { list, show }
