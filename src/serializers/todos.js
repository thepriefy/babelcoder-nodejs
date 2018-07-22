import BaseSerializer from './base'

export default {
  ...BaseSerializer, // deconstruct baseSerializer

  create(todo) {
    const { _id } = todo
    return { id: _id }
  }
}
