export class NotFoundUserError extends Error {
  constructor () {
    super("Couldn't found this user on the server.")
    this.name = 'NotFoundUserError'
  }
}
