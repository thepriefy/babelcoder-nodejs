import fs from 'fs'
import path from 'path'
import express from 'express'
import mongoose from 'mongoose'

const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello')
// })

// return promise
function setupDatabase() {
  return mongoose.connect(
    'mongodb://admin:passw0rd@ds145881.mlab.com:45881/todo-list-mongo'
  )
}

function setupRoutes() {
  // list files in controller dorectory
  const files = fs.readdirSync('./src/routes')

  // files.map
  files.map(file => {
    const router = express.Router()
    const resourceName = file.split('.')[0]
    // console.log(path.join(__dirname, 'routes', resourceName))

    import(path.join(__dirname, 'routes', resourceName))
      .then(module => {
        // console.log(module)
        module.setupRoutes(router)
      })
      .catch(err => {
        console.log(err)
      })

    //...
    app.use(`/${resourceName}`, router)
  })
}

export function setup() {
  setupRoutes()

  setupDatabase().then(() => {
    app.listen(3000, '0.0.0.0', () => {
      console.log('listening to port 3000...')
    })
  })
}
