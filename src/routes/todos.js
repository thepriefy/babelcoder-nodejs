// import * as controller from '@controllers/todos'
import { todos as controller } from '@controllers'

export function setupRoutes(router) {
  router.get('/todos', controller.list)
}
