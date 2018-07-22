import fs from 'fs'
import path from 'path'
import express from 'express'
import mongoose from 'mongoose'

import config from '../config'

const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello')
// })

// return promise
function setupDatabase() {
  return mongoose.connect(config.databaseUrl)
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
    app.listen(config.port, config.host, () => {
      console.log(`listening to port ${config.port}...`)
    })
  })
}
