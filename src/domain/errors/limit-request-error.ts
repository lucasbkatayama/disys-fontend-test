export class LimitRequestError extends Error {
  constructor () {
    super('API request limit reached. Try again soon.')
    this.name = 'LimitRequestError'
  }
}
