// import * as controller from '@controllers/todos'
import { todos as controller } from '@controllers'

export function setupRoutes(router) {
  router
    .get('/', controller.list)
    .get('/:id', controller.show)
    .post('/', controller.create)
}
