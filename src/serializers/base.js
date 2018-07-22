export default {
  for(action, resource) {
    return this[action](resource)
  }
}
